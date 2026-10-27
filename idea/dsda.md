# Laporan Audit & Dokumentasi Sistem — PlayLand Game Islami

## 1. STRUKTUR PROYEK (FILE INDEX)

Semua file dalam workspace `X:\muslim indonesia` (indeks 1–80):

**Root:**
1. `index.html` (107.62 KB) — Portal utama PlayLand (SPA, 3 view: home, all-games, game detail)
2. `README.md` (0.01 KB) — Kosong

**Games/ (48 file):**
3. `games/adab/adab.html` (122.99 KB) — Adab Muslim 3D
4. `games/doa-puzzle/doa-puzzle.html` (43.04 KB) — Doa Harian 3D Puzzle
5. `games/hijaiyah/hijaiyah.html` (137.56 KB) — Hijaiyah Sky Run 3D
6. `games/hijaiyah/hijaiyahold.html` (57 KB)
7. `games/hijaiyah/hijaiyaholdv2.html` (111.16 KB)
8. `games/kuis-rolet/index.html` (0.32 KB)
9. `games/kuis-rolet/kuis-rolet.html` (14.12 KB)
10. `games/kuis-rolet/thumbnail.svg` (2 KB)
11. `games/ludo/ludo.html` (42.11 KB)
12. `games/ludo/ludoblok-old.html` (57.48 KB)
13. `games/ludo/thumbnail.svg` (2.55 KB)
14. `games/memory-hijaiyah-flip/index.html` (0.35 KB)
15. `games/memory-hijaiyah-flip/memory-hijaiyah.html` (11.25 KB)
16. `games/memory-hijaiyah-flip/thumbnail.svg` (1.38 KB)
17. `games/monopoli/monopoli.html` (70.28 KB)
18. `games/monopoli/thumbnail.svg` (2.78 KB)
19. `games/puzzle/puzzle.html` (113.13 KB)
20. `games/puzzle-huruf/index.html` (0.34 KB)
21. `games/puzzle-huruf/puzzle-huruf.html` (20.01 KB)
22. `games/puzzle-huruf/thumbnail.svg` (2.26 KB)
23. `games/roda-jelajah/Roda_Jelajah_Islami.html` (81.58 KB)
24. `games/roda-jelajah/thumbnail.svg` (2.45 KB)
25. `games/rukun-tower/rukun-tower-old.html` (28.23 KB)
26. `games/rukun-tower/rukun-tower.html` (35.45 KB)
27. `games/runner-kebaikan/index.html` (0.35 KB)
28. `games/runner-kebaikan/runner-kebaikan.html` (13.69 KB)
29. `games/runner-kebaikan/thumbnail.svg` (1.47 KB)
30. `games/sirah/sirah.html` (75.8 KB)
31. `games/slice-master-islami/index.html` (0.37 KB)
32. `games/slice-master-islami/slice-master.html` (76.85 KB)
33. `games/slice-master-islami/thumbnail.svg` (3.41 KB)
34. `games/surah/surah.html` (122.8 KB)
35. `games/tajwid/app.jpg` (462.64 KB)
36. `games/tajwid/tajwid.html` (312.37 KB)
37. `games/tajwid/thumnail.jpg` (670.75 KB)
38. `games/tarik-tambang-huruf/index.html` (0.35 KB)
39. `games/tarik-tambang-huruf/tarik-tambang.html` (25 KB)
40. `games/tarik-tambang-huruf/thumbnail.svg` (1.65 KB)
41. `games/tembak-huruf/index.html` (0.33 KB)
42. `games/tembak-huruf/tembak-huruf.html` (12.93 KB)
43. `games/tembak-huruf/thumbnail.svg` (1.32 KB)
44. `games/tokohijaiyah/index.html` (0.34 KB)
45. `games/tokohijaiyah/thumbnail.svg` (1.09 KB)
46. `games/tokohijaiyah/toko-hijaiyah.html` (8.79 KB)
47. `games/ular-tangga/thumbnail.svg` (3.17 KB)
48. `games/ular-tangga/uar-tangga.html` (56.48 KB)
49. `games/ular-tangga/ular-tangga.old.html` (39.15 KB)
50. `games/wudhu/wudhu.html` (53.26 KB)

**Idea (tidak di-audit per instruksi user):**
51. `idea/doa harian open word 3d like petualangn tajwid.txt`
52. `idea/Master Prompt Game Browser v2.md`
53. `idea/Portal Game Islami PlayLand.png`

**Images (21 file):**
54–74. `images/` berisi avatar, background, banner promo, hero island, logo, thumbnail game, dll.

**Total: 80 file**

---

## 2. SISTEM PORTAL (index.html)

### Arsitektur
- **SPA Single Page Application** dengan 3 view: `homeView`, `allGamesView`, `gameDetailView`
- **Layout:** Topbar + 3-column portal (left sidebar, center content, right sidebar)
- **Game loading:** Setiap game dimuat dalam `<iframe>` di `gameScreenWrapper`
- **Splash screen:** Overlay loading dengan progress bar, bismillah, hadits, dan tombol BISMILLAH sebelum game dimulai
- **Routing:** Hash-based (`#home`, `#games`, `#game/<id>`)
- **Simpanan:** localStorage untuk nama pemain, theme (dark/light), coin count

### Data Game
Array `GAMES` berisi 25 game dengan field: `id`, `title`, `category`, `categoryLabel`, `thumbnail`, `appIcon`, `plays`, `playsLabel`, `rating`, `playable`, `url`, `description`

Kategori: ketangkasan, tajwid, doa, rukun, wudhu, adab, surah, puzzle, sejarah, kuis

### Fitur Portal
- Tema gelap/terang (toggle)
- Input nama pemain (simulasi storage)
- Hadits harian (rotasi 7 kutipan)
- Pencarian & filter kategori game
- Sortir (popular, rating, nama)
- Tombol like/bookmark/share
- Konfirmasi keluar game
- Fullscreen toggle

---

## 3. GAME-GAME DALAM DIREKTORI games/

### Daftar Lengkap & Deskripsi

| No | File | Judul | Kategori | Tech |
|----|------|-------|----------|------|
| 1 | `adab/adab.html` | Adab Muslim 3D | adab | Three.js r128 |
| 2 | `doa-puzzle/doa-puzzle.html` | Doa Harian 3D Puzzle | doa | Three.js r128 |
| 3 | `hijaiyah/hijaiyah.html` | Hijaiyah Sky Run 3D | tajwid | Three.js r128 |
| 4 | `hijaiyah/hijaiyahold.html` | Hijaiyah (old) | tajwid | ? |
| 5 | `hijaiyah/hijaiyaholdv2.html` | Hijaiyah (old v2) | tajwid | ? |
| 6 | `kuis-rolet/kuis-rolet.html` | Roda Kuis Islami | kuis | Canvas 2D |
| 7 | `ludo/ludo.html` | Ludo Blok 3D | kuis | Three.js r128 |
| 8 | `ludo/ludoblok-old.html` | Ludo (old) | kuis | ? |
| 9 | `memory-hijaiyah-flip/memory-hijaiyah.html` | Memory Hijaiyah Flip | tajwid | Canvas/DOM |
| 10 | `monopoli/monopoli.html` | Juragan Blok Nusantara | kuis | Three.js r128 |
| 11 | `puzzle/puzzle.html` | Puzzle Islami 3D | puzzle | Three.js r128 |
| 12 | `puzzle-huruf/puzzle-huruf.html` | Puzzle Huruf & Kata | puzzle | DOM |
| 13 | `roda-jelajah/Roda_Jelajah_Islami.html` | Roda Jelajah Islami | kuis | Canvas 2D |
| 14 | `rukun-tower/rukun-tower.html` | Rukun Islam Tower | rukun | Three.js r128 |
| 15 | `rukun-tower/rukun-tower-old.html` | Rukun Tower (old) | rukun | ? |
| 16 | `runner-kebaikan/runner-kebaikan.html` | Runner Kebaikan 3D | ketangkasan | ? |
| 17 | `sirah/sirah.html` | Sirah Timeline 3D | sejarah | Three.js r128 |
| 18 | `slice-master-islami/slice-master.html` | Slice Master Islami 3D | ketangkasan | Three.js r128 |
| 19 | `surah/surah.html` | Hafalan Surah 3D | surah | Three.js r128 |
| 20 | `tajwid/tajwid.html` | Petualangan Tajwid | tajwid | Three.js r128 |
| 21 | `tarik-tambang-huruf/tarik-tambang.html` | Tarik Tambang Cerdas | kuis | DOM |
| 22 | `tembak-huruf/tembak-huruf.html` | Panah & Tembak Huruf | ketangkasan | Canvas 2D |
| 23 | `tokohijaiyah/toko-hijaiyah.html` | Toko Karakter Hijaiyah | adab | DOM |
| 24 | `ular-tangga/uar-tangga.html` | Ular Tangga Blok 3D | kuis | Three.js r128 |
| 25 | `ular-tangga/ular-tangga.old.html` | Ular Tangga (old) | kuis | ? |
| 26 | `wudhu/wudhu.html` | Wudhu Quest 3D | wudhu | Three.js r128 |

### Pattern Umum Semua Game
- Setiap game dalam satu file HTML (HTML + CSS + JS inline)
- Font: Fredoka, Nunito, Amiri (Google Fonts)
- Three.js r128 dari CDN cdnjs untuk game 3D
- AudioContext/WebAudio untuk efek suara procedural (bukan file audio eksternal)
- localStorage untuk simpan progres
- Tombol 3D bevel dengan gradien dan shadow
- HUD di layar atas, overlay hasil di bawah
- Kontrol: keyboard (WASD/panah/spasi), mouse, sentuh
- Desain responsif untuk mobile dan desktop

---

## 4. AUDIT TEKNIS — TEMUAN

### A. BUG & ERROR

| ID | Severity | Lokasi | Masalah | Dampak | Saran |
|----|----------|--------|---------|--------|-------|
| BUG-01 | High | Semua game | `document.getElementById(...)` diakses langsung tanpa null check | TypeError crash saat elemen DOM belum siap atau tidak ada | Tambah null check sebelum akses |
| BUG-02 | High | Semua game | `AudioContext()` dibuat tanpa pengecekan keberadaan constructor | ReferenceError di browser lama/private mode | Pengecekan `window.AudioContext || window.webkitAudioContext` |
| BUG-03 | Medium | `ular-tangga\uar-tangga.html:777` | `localStorage.setItem` tanpa try/catch | Crash di private mode / kuota penuh | Bungkus dengan try/catch |
| BUG-04 | Medium | `doa-puzzle\doa-puzzle.html:1125` | `localStorage.setItem` tanpa try/catch | Sama di atas | Bungkus dengan try/catch |
| BUG-05 | Medium | `tajwid\tajwid.html` | Key `tjw2` terlalu generik | Potensi konflik key localStorage antar game | Ganti dengan key spesifik `tajwid-v1` |
| BUG-06 | Low | `tokohijaiyah\toko-hijaiyah.html:116` | `new AudioCtx()` tanpa cek | ReferenceError jika Web Audio tidak didukung | Cek keberadaan AudioContext |
| BUG-07 | Low | `tembak-huruf\tembak-huruf.html:132` | `new AudioCtx()` tanpa cek | Sama di atas | Cek keberadaan AudioContext |

### B. PERFORMA

| ID | Severity | Lokasi | Masalah | Dampak | Saran |
|----|----------|--------|---------|--------|-------|
| PERF-01 | High | Semua game 3D | `new THREE.Mesh` / `new Vector3` di dalam loop rAF | GC spike, FPS turun di HP spek rendah | Object pool untuk partikel/mesh |
| PERF-02 | Medium | `puzzle\puzzle.html:1274` | `setInterval` BGM tanpa cleanup saat pindah level | Audio berjalan di background, memory leak | clearInterval saat berpindah level/game over |
| PERF-03 | Medium | `slice-master-islami\slice-master.html:1084` | `setInterval` BGM tanpa cleanup | Sama di atas | Sama di atas |
| PERF-04 | Low | Semua game | Event listener `window.addEventListener('resize')` tanpa removeEventListener | Memory leak saat berpindah game via iframe | removeEventListener pada unload/keluar game |
| PERF-05 | Low | `ludo\ludo.html` | `confetti.splice` + `scene.remove` di setiap frame | Operasi array mahal di loop | Object pool untuk confetti |

### C. STRUKTUR KODE

| ID | Severity | Lokasi | Masalah | Dampak | Saran |
|----|----------|--------|---------|--------|-------|
| STR-01 | Medium | Semua game (kecuali tajwid, monopoli, ludo, ular-tangga) | Plain script (bukan IIFE) → global bocor ke `window` | Nama fungsi/variabel tabrakan antar game (karena semua dalam iframe tapi tetap risiko) | Bungkus dalam IIFE `(function(){...})()` |
| STR-02 | Medium | Semua game | Magic number tersebar di seluruh kode (kecepatan, harga, reward, koordinat) | Sulit tune balance dan menambah level | Objek `CONFIG` terpadu di atas |
| STR-03 | Low | Semua game | Tidak ada pemisahan tanggung jawab (state, render, input, logic bercampur) | Sulit maintain dan menambah fitur | Pisahkan section: CONFIG, UTIL, SAVE, AUDIO, INPUT, STATE, RENDER, WORLD, ENTITAS, GAMEPLAY, UI |
| STR-04 | Low | `tajwid\tajwid.html` | State tersebar (SV, coins, xp, done, mode, CTX) | Sulit reset state pada restart | Satu objek `STATE` terpusat |

### D. GAMEPLAY & UX

| ID | Severity | Lokasi | Masalah | Dampak | Saran |
|----|----------|--------|---------|--------|-------|
| UX-01 | Medium | Semua game | Game loop rAF tidak di-cancel (cancelAnimationFrame) saat game over / pause / pindah tab | Loop terus berjalan di background, boros baterai | Panggil cancelAnimationFrame pada pause/game over |
| UX-02 | Medium | Semua game | Tidak ada penanganan visibilitychange (tab di-background) untuk pause otomatis | Game terus berjalan saat user pindah tab | Tambah `document.addEventListener('visibilitychange')` |
| UX-03 | Low | Semua game | Tidak ada tombol restart internal di dalam game (menggunakan location.reload) | UX kurang mulus, layar berkedip | Tambah fungsi restart internal yang reset state |
| UX-04 | Low | Semua game | Kontrol sentuh tidak selalu memiliki target minimal 44px | Sulit dicapai di layar kecil | Pastikan tombol sentuh ≥ 44px |

### E. KOMPATIBILITAS & KEAMANAN

| ID | Severity | Lokasi | Masalah | Dampak | Saran |
|----|----------|--------|---------|--------|-------|
| SEC-01 | Low | `index.html:3314` | `navigator.share` tanpa cek keberadaan | Error di browser yang tidak mendukung Web Share API | Cek `navigator.shap` sebelum panggil |
| SEC-02 | Low | Semua game | localStorage menyimpan data permainan (nama, skor, koin) | Data dapat dimanipulasi oleh user | Terima data sebagai klien-side only, tidak untuk validasi server |
| SEC-03 | Low | Semua game | Tidak ada Content Security Policy (CSP) | Rentan XSS jika ada input user yang dirender | Tambah header CSP |

---

## 5. QUICK WINS (5 Perbaikan Termudah, Dampak Terbesar)

1. **BUG-01:** Tambah null check pada semua `document.getElementById()` sebelum mengakses properti elemen. (15 menit)
2. **BUG-02/BUG-06/BUG-07:** Tambah pengecekan `window.AudioContext || window.webkitAudioContext` sebelum membuat instance AudioContext. (10 menit)
3. **BUG-03/BUG-04:** Bungkus semua `localStorage.setItem` dan `localStorage.getItem` dengan try/catch. (15 menit)
4. **PERF-04:** Tambah `removeEventListener` untuk `resize`, `pointerdown`, `keydown` pada saat game berakhir atau berpindah halaman. (20 menit)
5. **UX-01:** Panggil `cancelAnimationFrame(animId)` saat game over, pause, atau berpindah tab. (10 menit)

---

## 6. REKOMENDASI REFACTOR (Fase 1, 2, 3)

### Fase 1 — Stabilisasi (Bug Critical & Performa)
- [ ] Null check semua elemen DOM
- [ ] Pengecekan AudioContext sebelum inisialisasi
- [ ] try/catch semua akses localStorage
- [ ] cancelAnimationFrame pada pause/game over
- [ ] removeEventListener pada cleanup game

### Fase 2 — Struktur & Kualitas Kode
- [ ] Bungkus semua game dalam IIFE untuk mencegah global bocor
- [ ] Buat objek `CONFIG` terpadu untuk semua angka balance
- [ ] Pisahkan section kode: CONFIG, UTIL, SAVE, AUDIO, INPUT, STATE, RENDER, WORLD, ENTITAS, GAMEPLAY, UI
- [ ] Implementasi object pool untuk partikel dan mesh (game 3D)

### Fase 3 — UX & Kompatibilitas
- [ ] Tambah penanganan visibilitychange untuk pause otomatis
- [ ] Tambah tombol restart internal di setiap game
- [ ] Pastikan tombol sentuh ≥ 44px
- [ ] Tambah CSP header di index.html
- [ ] Implementasi penurunan kualitas otomatis (Low/Medium/High) berdasarkan FPS

---

## 7. HAL YANG SUDAH BAGUS (Pertahankan)

1. **Desain konsisten:** Semua game menggunakan token warna, font Fredoka/Nunito/Amiri, dan tombol 3D bevel yang sama. Konsisten di seluruh 26 game.
2. **Tema Islami:** Semua game berjudul dan deskripsi Islami, dengan hadits/kutipan Agama di splash dan HUD. Ramah anak dan edukasi.
3. **SPA Portal:** index.html menyediakan portal terpadu dengan pencarian, filter kategori, sorting, dan splash screen yang rapi.
4. **Audio Procedural:** Semua efek suara disintesis via Web Audio API, tidak perlu file audio eksternal (hemat bandwidth).
5. **Responsif:** Semua game menggunakan `viewport-fit=cover`, `env(safe-area-inset-*)`, dan `touch-action:none` untuk mobile.
6. **localStorage dengan try/cash:** Sebagian besar game (wudhu, tajwid, monopoli, ludo, ular-tangga, doa-puzzle) sudah menggunakan try/catch untuk localStorage.
7. **IIFE di beberapa game:** tajwid, monopoli, ludo, ular-tangga sudah menggunakan IIFE untuk enkapsulasi.
8. **File per game:** Setiap game dalam satu file HTML mandiri, mudah dipindah dan dihosting.

---

## 8. RINGKASAN KESEHATAN KODE

**Skor: 6/10**

Kode berfungsi baik dan telah produce 26 game yang konsisten, tetapi masih banyak masalah teknis yang perlu diperbaiki: global variable bocor, memory leak dari event listener yang tidak dibersihkan, alokasi objek berlebihan di loop, dan kurangnya null check pada elemen DOM. Dengan melakukan 5 quick wins dan refactor fase 1-3, skor dapat meningkat menjadi 8-9/10.

**Catatan:** Folder `idea/` tidak di-audit per instruksi user.