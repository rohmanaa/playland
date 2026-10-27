# Laporan Koreksi Batch 2 — PlayLand Game Islami

**Tema:** Koreksi hasil batch 1 (T1-T4) + penambahan 2 game baru  
**Tanggal:** 27 Oktober 2026  
**Timestamp:** 2026-10-27T08:52:39Z  
**Dibuat oleh:** Kilo (code auditor)

---

## 1. SINTAKS ULANG (diperbaiki)

Script Node `syntax-check2.js` menggunakan parser HTML yang benar (regex improved + case-insensitive). Menghitung SEMUA `<script>` inline (tanpa `src`, bukan `type="module"`/`importmap`/`application/json`).

**Hasil:** 35 file, 49 blok script, **49 OK, 0 ERROR**.

---

## 2. FALLBACK THREE.JS (13 file)

### a. Lokasi fallback
Semua 13 file fallback berada di **`<head>`** (setelah tag Three.js, sebelum `<style>` atau script utama).

### b. Perbaikan `document.body` → safe fallback
Semua 13 file: `document.body.appendChild(overlay)` → `(document.body || document.documentElement).appendChild(overlay)`

| File | Baris overlay append |
|------|---------------------|
| wudhu/wudhu.html | 30 |
| hijaiyah/hijaiyah.html | 30 |
| doa-puzzle/doa-puzzle.html | 321 |
| adab/adab.html | 30 |
| runner-kebaikan/runner-kebaikan.html | 25 |
| tajwid/tajwid.html | 450 |
| puzzle/puzzle.html | 30 |
| surah/surah.html | 30 |
| ular-tangga/uar-tangga.html | 221 |
| monopoli/monopoli.html | 156 |
| slice-master-islami/slice-master.html | 30 |
| sirah/sirah.html | 27 |
| ludo/ludo.html | 208 (baru ditambah) |

### c. Fallback ludo/ludo.html (baru)
Ditambahkan overlay + flag `__NO_THREE` tepat setelah tag Three.js (baris ~194).

### d. Flag `window.__NO_THREE` + early throw
Ditambahkan ke **13 game 3D**:
- Set `window.__NO_THREE = true` di fallback overlay
- Di awal script utama tiap game: `if (window.__NO_THREE) { throw new Error('Three.js tidak dimuat'); }`

---

## 3. slice-master-islami/slice-master.html

### (a) Urutan Audio.init() vs clear bgmTimer
**Baris 2072-2073 (sebelum):**
```js
Audio.init();  // memanggil startBGM() → setInterval
if (Audio.bgmTimer) { clearInterval(Audio.bgmTimer); Audio.bgmTimer = null; }
```
**Masalah:** Musik yang baru distart langsung dimatikan.

**Baris 2071-2073 (sesudah perbaikan):**
```js
if (Audio.bgmTimer) { clearInterval(Audio.bgmTimer); Audio.bgmTimer = null; }
Audio.init();
```

### (b) Guard init() / startBGM
`SoundManager.init()` (baris 946-954) **tidak punya guard** — `startBGM()` dipanggil setiap kali `init()` dipanggil. Sudah aman karena `startBGM()` punya guard sendiri (baris 1077): `if (this.bgmTimer) { clearInterval(this.bgmTimer); this.bgmTimer = null; }`.

**Status:** ✅ Sudah benar — retry/next level memanggil `startGame()` → `Audio.init()` → `startBGM()` dengan guard aman.

---

## 4. puzzle/puzzle.html

### (a) stopPuzzleBGM() mengisi `bgmInterval = null`
**Baris 1315-1319:** ✅ Sudah benar — `clearInterval(bgmInterval); bgmInterval = null;`

### (b) visibilitychange restart BGM saat visible
**Baris 2942 (sebelum):**
```js
if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
```

**Baris 2942 (sesudah):**
```js
if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
if (SAVE_DATA.settings.music && gameState === 'PLAYING') startPuzzleBGM();
```

**Status:** ✅ BGM restart saat visible kembali jika musik ON dan gameState PLAYING.

---

## 5. hijaiyah/hijaiyah.html — visibilitychange baru

**Ditambahkan di baris 2238-2241 (di dalam IIFE global):**
```js
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (timer) { clearInterval(timer); timer = null; }
    if (AC && AC.state !== 'suspended') AC.suspend();
    if (audioCtx && audioCtx.state !== 'suspended') audioCtx.suspend();
  } else {
    if (AC && AC.state === 'suspended') AC.resume();
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    if (SET.music && timer === null) window.startMusic('game');
  }
});
```

**Fungsi:** Hidden → hentikan timer musik, suspend AC/audioCtx. Visible → resume AC/audioCtx, jalankan `startMusic('game')` jika musik ON dan timer null.

---

## 6. Daftar File Unik yang Diedit (Batch 1 + Batch 2 + Tambah Game)

Total **15 file unik** di `games/` (tidak menyentuh `*old`, `.old`, `idea/`):

```
1. doa-puzzle/doa-puzzle.html
2. slice-master-islami/slice-master.html
3. puzzle/puzzle.html
4. surah/surah.html
5. adab/adab.html
6. tajwid/tajwid.html
7. wudhu/wudhu.html
8. hijaiyah/hijaiyah.html
9. runner-kebaikan/runner-kebaikan.html
10. ular-tangga/uar-tangga.html
10. monopoli/monopoli.html
11. sirah/sirah.html
11. ludo/ludo.html
12. pohon-clicker/pohon-clicker.html  (tambah game baru)
13. taman-siaga/taman-siaga.html      (tambah game baru)
```

**Total: 15 file unik** (di `games/`, tidak menyentuh `*old`, `.old`, `idea/`).

---

## 2 Game Baru Ditambah ke index.html

| ID | Judul | Kategori | URL | Thumbnail |
|----|-------|----------|-----|-----------|
| `pohon-clicker` | Pohon Clicker | `kuis` | `games/pohon-clicker/pohon-clicker.html` | `games/pohon-clicker/thumbnail.svg` |
| `taman-siaga` | Taman Siaga | `kuis` | `games/taman-siaga/taman-siaga.html` | `games/taman-siaga/thumbnail.svg` |

Ditambahkan ke array `GAMES` di `index.html` (baris 2742).

---

## Verifikasi Sintaks Akhir

`node syntax-check2.js`: **35 file, 49 script blocks, 49 OK, 0 ERROR**

---

## Masih "Perlu Dicek Manual"

| # | Item | File | Alasan |
|---|------|------|--------|
| 1 | `musicStop` pada game over/level change | tajwid | Hanya dipanggil dari toggle, belum di akhir level |
| 2 | Fallback ludo + handler `menuErr` | ludo | Cek apakah `menuErr` handler jalan setelah throw error |
| 3 | T3 penuh untuk 3 game | wudhu, uar-tangga, runner-kebaikan | Perlu pause state + listener |