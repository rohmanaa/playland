# Master Prompt Game Browser Kualitas CrazyGames

**Cara pakai (untuk 50 judul):** copy semua isi di bawah garis `=== MULAI PROMPT ===` sampai `=== SELESAI PROMPT ===`, lalu isi **BLOK VARIABEL GAME** (cukup bagian itu yang diganti per judul), kirim ke DeepSeek / AI coding. Sisanya (style, flow, logika UI, arsitektur, ekonomi, checklist) tetap sama, jadi 50 game punya kualitas dan rasa yang konsisten. Di akhir ada **PATCH PROMPT** untuk revisi hemat jatah.

---

=== MULAI PROMPT ===

## 1. PERAN & TUJUAN

Kamu adalah senior game developer sekaligus UI/UX game designer. Bangun **satu game browser lengkap, polished, dan kompleks** setara game unggulan di CrazyGames, dalam **SATU file HTML** (HTML + CSS + JS inline, tanpa build step, tanpa aset eksternal berupa gambar/audio). Game harus terasa seperti produk jadi: ada menu, level, progres, toko, misi, pencapaian, pengaturan, dan feedback visual/suara yang memuaskan. Bukan prototipe.

## 2. BLOK VARIABEL GAME (diisi per judul)

- **JUDUL:** {{JUDUL}}
- **TAGLINE (1 kalimat):** {{TAGLINE}}
- **MODUL MEKANIK (pilih 1 dari bagian 14):** {{MODUL}}
- **PERSPEKTIF & ENGINE:** {{3D Three.js r128 (cdnjs) ATAU 2D Canvas}}
- **CORE LOOP (3 langkah):** {{contoh: mulai → lakukan aksi inti → dapat skor/hadiah → naik kesulitan}}
- **KONDISI MENANG / KALAH:** {{...}}
- **TEMA VISUAL:** {{contoh: neon kota malam / gurun realistis / sci-fi bersih / dungeon gelap}}
- **PALET (4–6 hex):** {{--accent, --accent-d, --bg, --panel, --good, --bad}}
- **MOOD:** {{cerah / gelap / neon / tenang / intens}}
- **JUMLAH LEVEL:** {{default 30, dibagi 5 dunia x 6 level}}
- **ENTITAS:** {{pemain, rintangan/musuh, collectible, boss}}
- **POWER-UP (3–5):** {{...}}
- **SKIN/KOSMETIK (8–12):** {{...}}
- **KONTROL UTAMA:** {{keyboard / mouse / sentuh}}
- **BAHASA UI:** Indonesia (default) + toggle English

Tema hanya mengganti **palet, bentuk objek, dan nama**. Kerangka UI, flow, dan sistem di bawah tetap sama untuk semua judul.

## 3. ATURAN TEKNIS WAJIB

- Satu file `.html`, target ukuran kode di bawah 1,5 MB. Library hanya boleh dari `cdnjs.cloudflare.com` (Three.js r128 bila 3D). Font Google Fonts (Fredoka untuk UI) **dengan fallback** `system-ui` supaya tetap jalan saat offline.
- Semua grafis prosedural: geometri kode, vertex color, tekstur dibuat dengan canvas. Ikon = **set SVG inline buatan sendiri** (stroke 2px, ujung membulat, sekitar 24 ikon: play, pause, home, settings, shop, coin, gem, star, lock, trophy, bag, map, sound, music, fullscreen, retry, next, close, check, fire, clock, heart, bolt, gift) lewat fungsi `ICON(name,size)`. Jangan bergantung pada font emoji.
- Satu `CONFIG` di bagian atas berisi **semua angka balance** (kecepatan, HP, harga, reward, kurva kesulitan, durasi) supaya mudah di-tuning.
- Struktur kode berurutan dengan penanda `/*==== NAMA SECTION ====*/`: CONFIG, UTIL (RNG, math, ease), SAVE, AUDIO, INPUT, STATE MACHINE, ENGINE/RENDER, WORLD/LEVEL GEN, ENTITAS, SISTEM GAMEPLAY, PARTIKEL/JUICE, UI (screens, modal stack), PROGRESI (XP/misi/achievement), SHOP, BOOT.
- Game loop **fixed timestep 60 Hz** dengan accumulator, `dt` di-clamp maksimal 0,05 s, render dengan interpolasi. Semua timer gameplay memakai **waktu game** (bukan `setTimeout`) agar aman saat pause.
- **Tanpa alokasi per frame** di loop panas: pakai object pool untuk partikel, peluru, musuh, floating text. Bila entitas lebih dari 100, pakai spatial hash untuk collision.
- Level deterministik: RNG seeded (mulberry32) dengan seed = nomor level, sehingga level yang sama selalu sama dan bisa di-retry adil.
- Kualitas grafis otomatis: Rendah / Sedang / Tinggi (pixel ratio maksimal 2, ukuran shadow map, jumlah partikel). Bila rata-rata frame time > 36 ms selama 4 detik, turunkan satu tingkat otomatis dan tampilkan toast kecil.
- Gaya 3D: pencahayaan hemisphere + satu directional dengan shadow lembut, fog senada warna latar, bentuk dari rounded box (bevel), mesh digabung per material/vertex-color, `InstancedMesh` untuk objek berulang, target di bawah 150 draw call. Tanpa post-processing berat.
- Gaya 2D (bila dipilih): Canvas dengan skala DPR, layer parallax, sprite digambar prosedural (path/gradient), tetap ada bayangan lembut dan outline tebal konsisten.

## 4. DESIGN SYSTEM UI (kerangka tetap, kulit mengikuti palet)

Gunakan CSS variables sebagai token: `--bg, --panel, --panel2, --ink, --mute, --accent, --accent-d, --good, --bad, --gold, --radius:20px, --s` (skala UI global).

- **Font:** Fredoka 500/600/700. Judul besar dengan `-webkit-text-stroke` tebal + `text-shadow` bawah (gaya arcade berkelas).
- **Panel:** kaca terang/gelap bergradien tipis (sesuai mood), border 2–3px putih/terang, radius 22–26px, bayangan ganda (lembut + tegas di bawah).
- **Tombol utama (3D bevel):** gradien vertikal accent, border 3px putih, radius 16px, bayangan tegas `0 5px 0 var(--accent-d)`, saat ditekan `translateY(4px)` dan bayangan mengecil. Varian: primer (hijau/accent), sekunder (biru muda), bahaya (merah), disabled (grayscale).
- **Chip sumber daya:** pil dengan ikon bulat + angka tabular (`font-variant-numeric: tabular-nums`). Angka berubah dengan animasi count-up dan chip "bounce".
- **Progress bar:** garis diagonal beranimasi untuk XP, bar polos untuk HP/timer.
- **Modal:** overlay gradien radial, kartu muncul dengan animasi pegas (scale + translateY), tombol close bulat di pojok.
- **Toast:** muncul dari atas-tengah, hilang otomatis 2,2 detik, antre (maks 3).
- **Responsif:** pakai `--s` dan `env(safe-area-inset-*)`; deteksi `pointer: coarse` untuk mode sentuh. Tidak ada teks terpotong di layar 360x640 maupun 1920x1080. `touch-action:none`, `user-select:none`, blok context menu, tanpa scroll halaman.
- **Reduced motion:** hormati `prefers-reduced-motion` dan opsi di pengaturan.

## 5. FLOW LAYAR (state machine)

`BOOT → SPLASH → MENU → (LEVELS | SHOP | DAILY | MISI | PENCAPAIAN | STATISTIK | PENGATURAN) → BRIEFING → COUNTDOWN → PLAYING ⇄ PAUSED → RESULT → (NEXT | RETRY | MENU)`

1. **BOOT/SPLASH:** loading bar nyata (progres berdasarkan tahap inisialisasi, bukan palsu). Logo judul, tagline, tombol **MAIN**. Klik pertama membuka audio.
2. **MENU UTAMA:** latar 3D/2D hidup (kamera mengitari atau adegan idle) dengan judul besar. Tombol: **MAIN** (lanjut level terakhir), **LEVEL**, **TOKO**, **HADIAH HARIAN** (badge merah bila belum diklaim), **MISI**, **PENGATURAN**. Pojok: chip koin, gem, level pemain, tombol fullscreen, suara.
3. **PILIH LEVEL:** peta dunia bergulir (5 dunia). Node level berbentuk lencana dengan 0–3 bintang, gembok bila terkunci. Dunia baru butuh jumlah bintang tertentu (tampilkan syaratnya). Tap node membuka kartu ringkas: nama, tujuan, kriteria 3 bintang, rekor, tombol MULAI.
4. **BRIEFING:** satu kartu tujuan level + tips + pilihan booster (maks 2, dibeli dengan koin). Level 1–3 menampilkan **tutorial interaktif** (panah/sorotan, input diblokir kecuali aksi yang diminta, bisa dilewati).
5. **COUNTDOWN:** 3-2-1-MULAI dengan animasi pop dan suara.
6. **PLAYING:** HUD (bagian 6). Sistem berjalan.
7. **PAUSED:** otomatis saat tab tidak aktif / `blur` / tombol P/Esc. Opsi: Lanjut (countdown 3 detik), Ulangi, Pengaturan, Menu. Audio meredam.
8. **RESULT:** judul MENANG/KALAH animasi, 3 bintang muncul satu per satu (pop + suara naik nada), rincian skor dengan count-up, reward koin/XP/gem, rekor baru berkilau. Tombol: **LANJUT**, **ULANGI**, **MENU**. Bila kalah: tawarkan **Lanjutkan dengan 1 gem** (maks 1x per percobaan).
9. **TOKO:** tab Skin / Efek / Booster. Kartu item dengan pratinjau berputar, harga, status (Dibeli/Dipakai). Beli selalu dengan konfirmasi ringan dan animasi sukses.
10. **HADIAH HARIAN:** siklus 7 hari, hari ke-7 hadiah besar, streak tampil api. Reset bila terlewat satu hari.
11. **MISI:** 3 misi harian (regenerasi tengah malam lokal) + 1 misi mingguan, dengan progress bar dan tombol Klaim.
12. **PENCAPAIAN:** grid lencana (minimal 15), terkunci tampil abu-abu, klaim memberi gem.
13. **PENGATURAN:** Musik, SFX, Getar layar, Kualitas grafis, Ukuran UI (0,85 / 1 / 1,15), Reduced motion, Tampilkan FPS, Bahasa, Ekspor/Impor kode simpanan, Reset (konfirmasi dua langkah).

## 6. HUD GAMEPLAY

- **Kiri atas:** lencana level pemain + bar XP kecil. **Tengah atas:** tujuan level / timer / skor utama (satu fokus, besar). **Kanan atas:** chip koin, tombol pause.
- **Bawah:** tombol kemampuan/power-up (dengan cooldown melingkar). Mode sentuh: joystick virtual kiri, tombol aksi kanan (besar, jarak aman dari tepi).
- **Feedback:** floating text (+skor, COMBO x3), meter combo, vignette merah saat HP rendah, kilatan layar saat kena hit, penanda arah untuk objektif di luar layar.
- Toast kecil untuk event (power-up aktif, bintang tercapai di tengah level).

## 7. LOGIKA UI (hindari bug yang sering terjadi)

- Gunakan **modal stack manager**: `openModal(id)`, `closeTop()`, Esc menutup modal teratas, klik backdrop hanya menutup modal non-kritis. Saat ada modal, input gameplay dinonaktifkan dan game di-pause.
- **Semua tombol di dalam overlay/bubble wajib `stopPropagation()`**, dan handler klik pada container tidak boleh menutup apa pun bila target berada di dalam `button`. (Bug nyata: tombol "Lanjut" ikut menutup dialog karena event naik ke container.)
- Setelah mengganti `innerHTML`, **pasang ulang event handler** pada elemen baru; jangan memakai referensi elemen lama.
- Tidak boleh ada state macet: setiap layar bisa keluar dengan tombol, Esc, atau tap.
- Satu sumber kebenaran: UI dirender dari objek `STATE`; fungsi `render*()` murni dan dipanggil ulang saat state berubah.
- Semua teks lewat tabel i18n `T[lang][key]`.

## 8. KONTROL

Abstraksi input: `Input.axis`, `Input.pressed(action)`, `Input.held(action)`. Dukung keyboard (WASD/panah, Spasi, Shift, E, P/Esc), mouse, dan sentuh (joystick + tombol). Semua aksi punya binding default yang ditampilkan di layar bantuan. Tidak ada aksi yang hanya bisa dilakukan di satu perangkat.

## 9. PROGRESI & EKONOMI

- **XP & level pemain:** XP dari bintang, skor, misi. Level naik tiap kebutuhan XP yang membesar bertahap; 10 pangkat bernama. Naik level memberi hadiah dan animasi.
- **Mata uang:** koin (lunak, sering) dan gem (langka, dari bintang penuh dunia, daily ke-7, pencapaian).
- **Bintang:** 1 = selesai, 2 = capai target skor/waktu, 3 = target sulit/tanpa kena hit. Kriteria ditulis eksplisit di tiap level.
- **Kurva kesulitan:** level 1–3 tutorial, naik halus per level, ada **boss/level puncak tiap dunia** (level ke-6), level santai setelah boss. Definisikan `difficulty(n)` di CONFIG dan pakai untuk spawn rate, kecepatan, HP.
- **Harga toko:** skin murah 100–300 koin, sedang 500–1200, langka 3–10 gem. Jangan ada pembayaran uang nyata dan jangan ada iklan palsu.
- Booster sekali pakai dan power-up in-level punya batas agar tidak merusak balance.

## 10. AUDIO

Semua suara disintesis dengan WebAudio (tanpa file): klik, hover tombol, koin, power-up, hit, menang, kalah, bintang naik nada, countdown. Musik latar prosedural loop dua lapisan (pad + perkusi ringan) yang menyesuaikan tema, intensitas naik saat aksi memuncak. Audio dibuka pada gestur pertama, meredam saat pause/tab tersembunyi, pengaturan tersimpan.

## 11. JUICE (wajib terasa enak dimainkan)

Squash & stretch pada aksi utama, screen shake berparameter (bisa dimatikan), hit-stop sekitar 60 ms pada hit penting, partikel dari pool (ledakan, kilau, debu), floating number, pitch combo naik, FOV/kamera kick saat boost, slow-motion singkat saat menang, animasi muncul/hilang untuk semua panel, count-up angka, konfeti saat bintang 3. Setiap tombol punya suara dan feedback tekan.

## 12. SIMPAN DATA

`localStorage` dengan key `g_{{slug}}_v1` (slug = judul huruf kecil tanpa spasi), semua akses dibungkus `try/catch` dan game tetap jalan bila storage kosong/ditolak. Skema berversi plus fungsi migrasi. Autosave pada event penting dan tiap 15 detik. Isi: progres level + bintang + rekor, koin, gem, XP, item dibeli/dipakai, misi, pencapaian, streak harian, pengaturan. Ekspor/impor sebagai teks base64.

## 13. KESIAPAN CRAZYGAMES

- Menu bisa dimainkan **kurang dari 3 detik** setelah load; tanpa login; tanpa tautan keluar.
- Pause + mute otomatis saat tab tersembunyi; tombol fullscreen; menangani resize dan orientasi.
- Siapkan **stub SDK yang aman**: `const SDK=window.CrazyGames&&window.CrazyGames.SDK` dan semua panggilan (`gameplayStart/Stop`, `loadingStart/Stop`, `happytime`) dibungkus pengecekan `SDK?.` sehingga game tetap jalan tanpa SDK. Fungsi `Ads.rewarded(cb)` default memberi reward langsung di mode dev dan tidak menampilkan iklan palsu.
- Tidak ada request jaringan selain font dan cdnjs. Tidak ada `alert/confirm/prompt` bawaan browser, semua dialog memakai modal sendiri.

## 14. MENU MODUL MEKANIK (pilih satu di BLOK VARIABEL)

| Kode | Modul | Inti permainan |
| --- | --- | --- |
| A | Runner / endless | lari otomatis, hindari rintangan, kumpulkan, kecepatan naik |
| B | Racing / drift | lintasan, checkpoint, lap time, rival AI sederhana |
| C | Puzzle | match / geser / fisika / rute, target langkah |
| D | Tower defense | tempatkan menara, gelombang musuh, upgrade |
| E | Arena shooter / survivor | bertahan dari gelombang, level-up pilih kemampuan |
| F | Platformer / parkour | lompat presisi, checkpoint, jebakan |
| G | Idle / merge / clicker | otomatisasi, prestise, offline earning |
| H | Fisika / destruksi | lempar/tembak/hancurkan struktur dengan batas percobaan |
| I | Stealth / maze | kabur dari penjaga, kunci dan pintu |
| J | Olahraga | golf / basket / bowling dengan fisika dan par |
| K | Kuis / kartu | soal bertingkat, combo, power-up bantuan |
| L | Builder / farming | tempatkan, kembangkan, selesaikan pesanan |

Implementasikan modul terpilih dengan kedalaman penuh (minimal 5 jenis rintangan/musuh/elemen, 3 jenis power-up, 1 boss/level puncak per dunia), bukan versi tipis.

## 15. FORMAT KELUARAN

1. **Rencana singkat** (maks 10 baris): arsitektur, asumsi, daftar section.
2. **Kode lengkap** dalam satu blok `html`. Dilarang menulis "sisanya sama", "dst", atau placeholder. Bila terlalu panjang, bagi menjadi **BAGIAN 1/N, 2/N, ...** dengan penanda section yang jelas agar bisa digabung berurutan tanpa edit.
3. **Checklist akseptasi** (bagian 16) dengan centang jujur, tandai yang belum terpenuhi.
4. Semua angka balance ada di `CONFIG`.

## 16. CHECKLIST AKSEPTASI

- [ ] Berjalan dari satu file tanpa error di konsol; tidak ada variabel/fungsi yang dipanggil tapi belum dibuat
- [ ] Seluruh flow bagian 5 bisa dilalui dari splash sampai result dan kembali
- [ ] Tutorial level 1–3, 30 level (atau sesuai variabel), boss tiap dunia
- [ ] Toko, harian, misi, pencapaian, pengaturan berfungsi dan tersimpan
- [ ] Keyboard, mouse, dan sentuh sama-sama bisa dimainkan; HUD tidak menutupi aksi
- [ ] Pause otomatis saat tab hilang; tidak ada state macet; semua modal bisa ditutup
- [ ] Tidak ada alokasi per frame yang mencolok; FPS stabil; kualitas otomatis turun bila berat
- [ ] Level awal bisa diselesaikan, level akhir menantang tapi adil (rintangan tidak menghalangi jalur wajib)
- [ ] Juice bagian 11 hadir; audio sintetis berfungsi
- [ ] Teks terbaca di 360x640 dan 1920x1080

=== SELESAI PROMPT ===

---

## CONTOH PENGISIAN BLOK VARIABEL

- JUDUL: Neon Drift Rush
- TAGLINE: Drift di kota neon, kejar waktu, kalahkan rival.
- MODUL: B (Racing / drift)
- PERSPEKTIF: 3D Three.js r128
- CORE LOOP: gas dan drift di tikungan → isi meter nitro → lewati checkpoint sebelum waktu habis → dapat bintang
- MENANG/KALAH: finis di bawah target waktu / waktu habis atau menabrak 3x
- TEMA: kota malam neon, hujan, jalan basah memantul
- PALET: #0b1020 (bg), #ff2e93 (accent), #7a1148 (accent-d), #19e3ff (good), #ffb800 (gold), #ff4d4d (bad)
- MOOD: gelap, neon, intens
- ENTITAS: mobil pemain, mobil rival, kerucut/barikade, koin neon, boss = rival juara tiap dunia
- POWER-UP: nitro, perisai, magnet koin, slow-time
- KONTROL: WASD/panah + Spasi (drift), sentuh: setir kiri-kanan + tombol drift

## PATCH PROMPT (revisi hemat jatah)

> Berikut kode game saya (tempel). Perbaiki HANYA hal berikut tanpa mengubah bagian lain: {{daftar bug/permintaan}}. Keluarkan **hanya potongan yang berubah** dalam format `GANTI: <kode lama persis> → DENGAN: <kode baru>` (atau fungsi lengkap yang diubah), sebutkan nama fungsi/section-nya. Jangan menulis ulang seluruh file. Setelah itu tulis 3 baris cara mengetes perbaikannya.

## TIPS ALUR 50 JUDUL

1. Sebar genre: jangan 50 judul dari modul yang sama. Pakai 12 modul bagian 14, tiap modul 4 judul dengan tema berbeda.
2. Buat dulu **1 judul sebagai game referensi**, uji sampai bersih, lalu pakai kode itu sebagai acuan gaya UI untuk judul berikutnya (tempel di awal prompt dengan catatan: "tiru struktur UI dan design system dari kode ini, ganti mekanik dan tema").
3. Simpan semua blok variabel dalam satu tabel/spreadsheet supaya konsisten dan tidak ada judul kembar mekanik.
4. Selalu minta `CONFIG` terpisah, karena tuning angka adalah revisi paling sering dan paling murah lewat PATCH PROMPT.
