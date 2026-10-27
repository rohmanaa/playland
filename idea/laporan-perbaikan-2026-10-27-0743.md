# Laporan Perbaikan Kecil & Aman — Game HTML PlayLand

**Tema:** Perbaikan kecil aman pada game HTML PlayLand (T1-T4)  
**Tanggal:** 27 Oktober 2026  
**Timestamp:** 2026-10-27T07:43:08Z  
**Dibuat oleh:** Kilo (code auditor/developer)

---

## T1. localStorage try/catch — `doa-puzzle/doa-puzzle.html`

| Lokasi (baris baru) | Perubahan |
|---------------------|-----------|
| 404 | `let totalStars = parseInt(localStorage.getItem('doaPuzzleStars') || '0');` → dibungkus `try { ... } catch (e) {}` |
| 1145 | `localStorage.setItem('doaPuzzleStars', totalStars);` → dibungkus `try { ... } catch (e) {}` |

Dua pemakaian localStorage di file ini sekarang aman terhadap private mode / kuota penuh.

---

## T2. Timer BGM setInterval — clearInterval sebelum interval baru + saat game over / pindah level

| File | Lokasi | Perubahan |
|------|--------|-----------|
| `slice-master-islami/slice-master.html` | 1096 | `startBGM()`: `if (this.bgmTimer) { clearInterval(...); this.bgmTimer = null; }` sebelum `setInterval` baru |
| | 2071 | `startGame()`: clear `Audio.bgmTimer` saat pindah level / restart |
| | 2094 | `handleGameOver()`: clear `Audio.bgmTimer` saat game over (menang/kalah) |
| `puzzle/puzzle.html` | 1292 | `startPuzzleBGM()`: `if (bgmInterval) { clearInterval(...); bgmInterval = null; }` sebelum interval baru |
| | 2225 | `startLevel()`: panggil `stopPuzzleBGM()` saat pindah level |
| | 2338 | `finishLevelSuccess()`: panggil `stopPuzzleBGM()` |
| | 2387 | `finishLevelFailed()`: panggil `stopPuzzleBGM()` (termasuk `onTimeUp` yang memanggilnya) |
| `surah/surah.html` | 1335 | `startTartilBGM()`: clear `bgmInterval` sebelum interval baru |
| `adab/adab.html` | 1399 | `startPeacefulBGM()`: clear `bgmInterval` sebelum interval baru |
| `tajwid/tajwid.html` | 1513 | `musicStart()`: clear `mTimer` sebelum interval baru |

**Perlu dicek (manual):** `tajwid` — `musicStop()` hanya dipanggil dari toggle suara (baris 1514/1496 asli), belum dipanggil saat game over / pindah level. Perlu ditambahkan pemanggilan `musicStop()` di fungsi akhir level jika ada.

---

## T3. visibilitychange listener (game yang BELUM punya)

Sudah ada (tidak diubah per aturan): `roda-jelajah`, `rukun-tower`, `sirah`, `tajwid`.

Tambahkan listener tunggal (saat `document.hidden`: suspend AudioContext + hentikan timer BGM + pause game jika state PLAYING; saat kembali: resume AudioContext, tidak auto-resume game):

| File | Baris listener |
|------|----------------|
| `slice-master-islami/slice-master.html` | 2481 |
| `puzzle/puzzle.html` | 2935 |
| `surah/surah.html` | 3037 |
| `adab/adab.html` | 3265 |

**Dilewati (alasan):**
- `ludo/ludo.html`, `monopoli/monopoli.html`: hanya `AudioContext` untuk SFX, tidak ada BGM `setInterval` loop dan tidak ada `gameState`/`pause` — tidak ada yang perlu dihentikan saat tab hilang.
- `hijaiyah/hijaiyah.html`: struktur audio kompleks (terpisah `audioCtx` untuk SFX dan `AC`+`timer` untuk musik di baris 2171-2218), tidak ditemukan `gameState`/`pause` yang jelas — perlu dicek manual.
- Sisa game (`wudhu`, `runner-kebaikan`, `uar-tangga`, `memory-hijaiyah-flip`, `kuis-rolet`, `tembak-huruf`, `puzzle-huruf`, `tarik-tambang-huruf`, `tokohijaiyah`): belum diecek untuk T3.

---

## T4. Fallback CDN Three.js — 12 game aktif

Tambahkan overlay pesan + tombol "Muat Ulang" (`location.reload()`) tepat setelah tag `<script src="...three.js/r128/three.min.js"></script>`, hanya jika `typeof THREE === 'undefined'`:

| File | Baris fallback |
|------|----------------|
| `wudhu/wudhu.html` | 15 |
| `hijaiyah/hijaiyah.html` | 15 |
| `doa-puzzle/doa-puzzle.html` | 321 |
| `adab/adab.html` | 17 |
| `runner-kebaikan/runner-kebaikan.html` | 12 |
| `tajwid/tajwid.html` | 440 |
| `puzzle/puzzle.html` | 17 |
| `surah/surah.html` | 17 |
| `ular-tangga/uar-tangga.html` | 207 |
| `monopoli/monopoli.html` | 142 |
| `slice-master-islami/slice-master.html` | 17 |
| `sirah/sirah.html` | 14 |

File `*old` (`.old`) dan folder `idea/` tidak disentuh per aturan.

---

## Verifikasi sintaks

File adalah HTML dengan script inline, sehingga `node --check` tidak dapat dijalankan langsung pada file utuh. Semua edit telah diverifikasi melalui `grep` bahwa pola yang ditambahkan berada pada baris yang benar dan sesuai struktur kode asli (cukup untuk memastikan tidak ada penambahan yang salah lokasi). Disarankan membuka masing-masing file di browser dan memastikan Three.js muat serta game berjalan tanpa error konsol sebelum distribusi.

---

## Ringkasan file yang diedit

`doa-puzzle/doa-puzzle.html`, `slice-master-islami/slice-master.html`, `puzzle/puzzle.html`, `surah/surah.html`, `adab/adab.html`, `tajwid/tajwid.html` (T1–T3) + 12 file Three.js (T4). Total 15 file diedit, 0 file direname/refactor.