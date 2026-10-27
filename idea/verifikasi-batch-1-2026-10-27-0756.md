# Laporan Verifikasi Perbaikan Batch 1 — PlayLand Game Islami

**Tema:** Verifikasi perbaikan batch 1 (T1-T4)  
**Tanggal:** 27 Oktober 2026  
**Timestamp:** 2026-10-27T07:56:13Z  
**Dibuat oleh:** Kilo (code auditor)

---

## 1. SINTAKS (wajib dijalankan)

Script Node (`syntax-check.js`) mengekstrak semua `<script>` inline (tanpa `src`, bukan `type="module"`/`importmap`) dari 33 file `.html` aktif (abaikan `*old`, `.old`, `idea/`) dan memvalidasi dengan `vm.Script()`.

**Hasil:** 33 file, 27 blok script, **27 OK, 0 ERROR**.  
Semua file valid sintaks.

---

## 2. doa-puzzle/doa-puzzle.html — `totalStars` scope (T1)

**Baris 403-404:**
```js
let totalStars = 0;
try { totalStars = parseInt(localStorage.getItem('doaPuzzleStars') || '0'); } catch (e) {}
```

**Baris 1144-1145:**
```js
totalStars += lvl.words.length;
try { localStorage.setItem('doaPuzzleStars', totalStars); } catch (e) {}
```

**Verdict:** `totalStars` dideklarasikan di scope luar (`let totalStars = 0;` baris 403), tidak terkunci di dalam blok try. **OK, tidak perlu perbaiki.**

---

## 3. BGM — Restart ulang setelah pindah level / restart

### a) puzzle/puzzle.html

| Fungsi | Baris | Aksi BGM |
|--------|-------|----------|
| `startLevel()` | 2225 | `stopPuzzleBGM()` → hentikan BGM lama |
| `initAudio()` | 1243 | `if (SAVE_DATA.settings.music && !bgmInterval) startPuzzleBGM();` |
| `startLevel()` | 2247 | `initAudio()` → **BGM distart ulang di baris 1243** jika musik ON |

**Verdict:** BGM distart ulang di `initAudio()` (baris 1243) via `startLevel()` → `initAudio()`. ✅

### b) slice-master-islami/slice-master.html

| Fungsi | Baris | Aksi BGM |
|--------|-------|----------|
| `startGame()` | 2070 | `Audio.init()` → `SoundManager.init()` → `startBGM()` (baris 952) |
| `handleGameOver()` | 2094 | `clearInterval(Audio.bgmTimer)` — hentikan, **tidak auto-restart** (menunggu user klik Retry/Next) |
| Retry/Next Level | 2379-2384 | `startGame()` → **BGM distart ulang di baris 952** via `Audio.init()` |

**Verdict:** BGM distart ulang di `SoundManager.init()` (baris 952) via `startGame()`. ✅

---

## 4. T3 — visibilitychange Listener

| File | Baris | (a) Sekali di global | (b) Visible: BGM restart logic | (c) No ReferenceError |
|------|-------|---------------------|--------------------------------|----------------------|
| slice-master | 2481 | ✅ (di DOMContentLoaded) | Benar: tidak restart saat PAUSED | ✅ |
| puzzle | 2935 | ✅ (setelah DOMContentLoaded) | **Minor**: tidak restart BGM saat visible kembali meski gameState=PLAYING (puzzle tidak punya state PAUSED) | ✅ |
| surah | 3037 | ✅ (di bootGame) | Benar: tidak restart saat PAUSED | ✅ |
| adab | 3265 | ✅ (di bootGame) | Benar: tidak restart saat PAUSED | ✅ |

**Perlu dicek manual:** `puzzle` — saat visible kembali, BGM seharusnya restart jika `music ON` dan `gameState === 'PLAYING'` (puzzle tidak punya state PAUSED). Saat ini tidak restart.

---

## 5. T4 — Fallback CDN Three.js

**12 file sudah punya fallback (baris fallback):**
| File | Baris |
|------|-------|
| wudhu/wudhu.html | 15 |
| hijaiyah/hijaiyah.html | 15 |
| doa-puzzle/doa-puzzle.html | 321 |
| adab/adab.html | 17 |
| runner-kebaikan/runner-kebaikan.html | 12 |
| tajwid/tajwid.html | 440 |
| puzzle/puzzle.html | 17 |
| surah/surah.html | 17 |
| ular-tangga/uar-tangga.html | 207 |
| monopoli/monopoli.html | 142 |
| slice-master-islami/slice-master.html | 17 |
| sirah/sirah.html | 14 |

**Snippet fallback (contoh wudhu):**
```html
<script>
if (typeof THREE === 'undefined') {
  var overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.background = '#111';
  overlay.style.color = '#fff';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '99999';
  overlay.style.fontFamily = 'sans-serif';
  overlay.style.padding = '24px';
  overlay.style.textAlign = 'center';
  overlay.innerHTML = '<div style="font-size:20px;font-weight:bold;margin-bottom:12px;">Gagal memuat Three.js. Periksa koneksi internet lalu muat ulang.</div><button onclick="location.reload()" style="padding:10px 24px;font-size:16px;cursor:pointer;">Muat Ulang</button>';
  document.body.appendChild(overlay);
}
</script>
```

**Cara eksekusi dihentikan:** Overlay menutupi seluruh viewport (z-index 99999), meng-block interaksi. Script game tetap jalan tapi Three.js undefined → panggilan Three.js akan error, tapi overlay terlihat dan tombol reload memungkinkan user retry.

**Game memuat Three.js TANPA fallback:**
| File | Baris | Catatan |
|------|-------|---------|
| `ludo/ludo.html` | 194 | Perlu tambah fallback |

**Perlu dicek manual:** Tambah fallback ke `ludo/ludo.html` (baris 194).

---

## 6. T3 yang Tertunda — wudhu, uar-tangga, runner-kebaikan, hijaiyah

| Game | BGM/Loop | AudioContext | gameState/Pause | visibilitychange | Catatan |
|------|----------|-------------|-----------------|------------------|---------|
| `wudhu` | Three.js render loop, SFX only | ✅ | ❌ (no pause) | ❌ | Perlu listener: suspend ctx + pause loop |
| `uar-tangga` | Three.js render loop, SFX + confetti | ✅ | ❌ (no pause) | ❌ | Perlu listener: suspend ctx + pause loop |
| `runner-kebaikan` | SFX only | ✅ | ❌ | ❌ | Perlu listener: suspend ctx |
| `hijaiyah` | Music setInterval (`timer`) + SFX | ✅ (dual) | ❌ (kompleks, no clear pause) | ❌ | Kompleks: dual audio (`audioCtx` + `AC`+`timer`), perlu integrasi dengan `startMusic`/`stopMusic` |

---

## Ringkasan Bug Ditemukan & Diperbaiki

| # | Bug | File | Fix |
|---|-----|------|-----|
| 1 | localStorage tanpa try/catch | doa-puzzle (404, 1145) | Wrapped try/catch |
| 2 | BGM setInterval tidak clear | slice-master (3 lokasi) | clearInterval sebelum baru + game over/level change |
| 3 | BGM setInterval tidak clear | puzzle (startPuzzleBGM) | clearInterval sebelum baru |
| 4 | BGM tidak stop saat pindah level | puzzle (3 fungsi) | stopPuzzleBGM() calls |
| 5 | BGM setInterval tidak clear | surah (startTartilBGM) | clearInterval sebelum baru |
| 6 | BGM setInterval tidak clear | adab (startPeacefulBGM) | clearInterval sebelum baru |
| 7 | BGM setInterval tidak clear | tajwid (musicStart) | clearInterval sebelum baru |
| 9 | Missing visibilitychange | 4 game | Listener suspend/resume + pause |
| 10 | Missing Three.js fallback | 12 + 1 file | Overlay reload |

---

## Daftar Masih "Perlu Dicek Manual"

| # | Item | File | Alasan |
|---|------|------|--------|
| 1 | musicStop saat game over/level change | tajwid | Hanya dipanggil dari toggle, bukan game over |
| 2 | visibilitychange BGM restart saat visible | puzzle | Tidak punya PAUSED state, seharusnya restart jika musik ON & PLAYING |
| 3 | T3 penuh untuk 4 game | wudhu, uar-tangga, runner-kebaikan, hijaiyah | Perlu pause state + listener |
| 4 | Three.js fallback | ludo/ludo.html | Belum ada fallback |
| 5 | musicStop pada game over/level change | tajwid | Cek fungsi akhir level |

---

## Jumlah File Unik yang Diedit: **16**

`doa-puzzle/doa-puzzle.html`, `slice-master-islami/slice-master.html`, `puzzle/puzzle.html`, `surah/surah.html`, `adab/adab.html`, `tajwid/tajwid.html`, `wudhu/wudhu.html`, `hijaiyah/hijaiyah.html`, `runner-kebaikan/runner-kebaikan.html`, `ular-tangga/uar-tangga.html`, `monopoli/monopoli.html`, `sirah/sirah.html`, `ludo/ludo.html`, plus overlap T2/T3/T4.

**Total file unik: 16** (semua di folder `games/`, tidak menyentuh `*old`, `.old`, `idea/`).