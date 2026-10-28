/* PlayLand service worker — naikkan VERSION setiap rilis agar cache lama dibuang */
const VERSION = 'playland-v6';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
const RUNTIME = VERSION + '-runtime';
const MAX_RUNTIME = 120; // batas jumlah berkas di cache runtime

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => !k.startsWith(VERSION)).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
async function trim(cache) {
  const keys = await cache.keys();
  if (keys.length > MAX_RUNTIME) await Promise.all(keys.slice(0, keys.length - MAX_RUNTIME).map(k => cache.delete(k)));
}
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Halaman: jaringan dulu, jatuh ke cache saat offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => {
      if (url.origin === location.origin && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  // Aset (gambar game, font Google): tampil dari cache, perbarui di belakang
  const ok = url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!ok) return;
  e.respondWith(caches.open(RUNTIME).then(async cache => {
    const hit = await cache.match(req);
    const net = fetch(req).then(res => { if (res.ok || res.type === 'opaque') { cache.put(req, res.clone()); trim(cache); } return res; }).catch(() => hit);
    return hit || net;
  }));
});
