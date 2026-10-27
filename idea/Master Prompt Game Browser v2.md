# Master Prompt Game Browser v2

Versi yang dirapikan: lebih ringkas, modern, umum (tidak terikat tema tertentu), tanpa unsur perjudian, bebas pilih gaya visual (tidak harus 3D atau blok), dan responsif di mobile maupun desktop.

## Cara pakai

1. Salin semua isi blok prompt di bawah.
2. Isi **BLOK VARIABEL** (hanya bagian itu yang diganti per judul).
3. Kirim ke AI coding. Untuk revisi, pakai **Patch Prompt** di akhir agar hemat jatah.

## Yang berubah dari versi lama

- Dihapus: daftar 24 ikon yang dipatok satu per satu, 10 pangkat bernama, angka piksel yang terlalu spesifik, dan aturan yang mengunci 30 level / 5 dunia.
- Dihapus: kutipan glosarium dan teks percakapan AI yang menempel di tengah dokumen. Isinya sudah diringkas menjadi bagian **Fisika & Efek Dinamis**.
- Ditambah: pilihan gaya visual (2D, 2.5D, isometrik, 3D low-poly halus, pixel art), aturan anti-perjudian, dan layout adaptif mobile/desktop yang lebih jelas.
- Dirapikan: urutan bagian, bahasa lebih padat, checklist lebih pendek.

## Prompt (salin dari sini)

```
PERAN
Kamu senior game developer sekaligus UI/UX designer. Bangun SATU game browser lengkap, polished, dan terasa seperti produk jadi (bukan prototipe) dalam SATU file HTML (HTML + CSS + JS inline, tanpa build step, tanpa file gambar/audio eksternal).

=== BLOK VARIABEL (diisi per judul) ===
JUDUL: {{JUDUL}}
TAGLINE: {{1 kalimat}}
GENRE / MODUL: {{pilih dari daftar modul di bawah}}
GAYA VISUAL: {{pilih: 2D vektor halus | 2.5D parallax | isometrik | 3D low-poly halus (Three.js r128) | pixel art halus}}
CORE LOOP: {{3 langkah, contoh: mulai > aksi inti > hadiah > kesulitan naik}}
MENANG / KALAH: {{...}}
TEMA & MOOD: {{contoh: kota neon malam, hutan cerah, luar angkasa, dapur ceria, gurun santai}}
PALET: {{4-6 hex: bg, panel, accent, accent-gelap, good, bad}}
JUMLAH LEVEL: {{default 20-30, dikelompokkan per dunia/tema}}
ENTITAS: {{pemain, rintangan/musuh, collectible, boss}}
POWER-UP (3-5): {{...}}
SKIN / KOSMETIK (6-12): {{...}}
KONTROL: {{keyboard / mouse / sentuh}}
BAHASA UI: Indonesia + toggle English
=== AKHIR BLOK VARIABEL ===

Tema hanya mengganti palet, bentuk objek, dan nama. Kerangka UI, flow, dan sistem di bawah tetap sama agar semua judul konsisten.

1. ATURAN KONTEN
- Game ramah umum, cocok untuk semua usia, tema bebas.
- DILARANG unsur perjudian: tanpa slot, roulette, kartu taruhan, gacha/loot box berbayar-acak, taruhan koin, atau mekanik untung-untungan yang menguras mata uang. Hadiah selalu pasti dan transparan (kamu tahu persis apa yang didapat).
- Tanpa pembayaran uang sungguhan, tanpa login, tanpa tautan keluar, tanpa iklan palsu.

2. ATURAN TEKNIS
- Satu file .html, target di bawah 1,5 MB. Library hanya dari cdnjs.cloudflare.com (Three.js r128 hanya bila gaya 3D). Font Google Fonts (Fredoka atau Nunito) dengan fallback system-ui agar jalan saat offline.
- Semua grafis prosedural (kode, gradien, canvas, SVG). IKON WAJIB memakai Fluent via Iconify (bukan SVG buatan sendiri, bukan font emoji): web component <iconify-icon icon="fluent-color:book-contacts-20"></iconify-icon> (format set:nama, setara kelas i-fluent-color:book-contacts-20), skrip dimuat dari https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js. Bungkus dalam fungsi ICON(name,size,cls) yang selalu memberi kelas b-icon fill-putih-fade-light color-gray-light; definisikan ketiga kelas itu di CSS (putih pudar dan abu terang lewat token warna). Set fluent-color berwarna penuh sehingga fill/color tidak mengubahnya; untuk ikon yang harus mengikuti warna tema pakai set fluent (monokrom). Siapkan fallback bila Iconify gagal dimuat (offline): ICON menampilkan bentuk CSS/SVG sederhana agar tombol tetap terbaca.
- Satu objek CONFIG di atas berisi semua angka balance (kecepatan, HP, harga, reward, kurva kesulitan, durasi).
- Struktur berurutan dengan penanda /*==== NAMA ====*/: CONFIG, UTIL, SAVE, AUDIO, INPUT, STATE, RENDER, WORLD/LEVEL, ENTITAS, GAMEPLAY, FISIKA & EFEK, PARTIKEL, UI, PROGRESI, SHOP, BOOT.
- Game loop fixed timestep 60 Hz dengan accumulator, dt di-clamp maks 0,05 s, render dengan interpolasi. Timer gameplay memakai waktu game (bukan setTimeout) agar aman saat pause.
- Tanpa alokasi per frame di loop panas: object pool untuk partikel, peluru, musuh, floating text. Spatial hash bila entitas lebih dari 100.
- Level deterministik: RNG seeded (mulberry32), seed = nomor level, sehingga retry adil.
- Kualitas grafis Rendah/Sedang/Tinggi (pixel ratio maks 2, partikel, shadow). Bila rata-rata frame time lebih dari 36 ms selama 4 detik, turunkan satu tingkat otomatis dengan toast kecil.
- Gaya 3D: hemisphere light + satu directional dengan shadow lembut, fog senada latar, bentuk rounded/bevel, mesh digabung per material, InstancedMesh untuk objek berulang, di bawah 150 draw call, tanpa post-processing berat. Boleh organik/low-poly halus, tidak harus blok.
- Gaya 2D/2.5D/pixel: Canvas dengan skala DPR, layer parallax, sprite prosedural dengan outline konsisten dan bayangan lembut.

3. DESIGN SYSTEM UI (modern, warna enak)
- Token CSS: --bg, --panel, --ink, --mute, --accent, --accent-d, --good, --bad, --gold, --radius, --s (skala UI). Kontras teks minimal AA; hindari warna jenuh yang menyakitkan mata, pakai 1 warna aksen utama + netral.
- Panel kaca/solid dengan gradien tipis, border halus, radius besar, bayangan ganda lembut.
- Tombol utama bergaya 3D bevel (gradien accent, bayangan tegas bawah, turun 3-4px saat ditekan). Varian: primer, sekunder, bahaya, disabled.
- Chip sumber daya: ikon + angka tabular, animasi count-up dan bounce.
- Modal dengan overlay gradien dan animasi pegas; toast antre maks 3, hilang otomatis 2,2 detik.
- Judul besar bergaya arcade (stroke + shadow) untuk logo dan hasil.
- Hormati prefers-reduced-motion dan opsi di pengaturan.

4. RESPONSIF MOBILE + DESKTOP (wajib)
- Mobile-first: layout adaptif (portrait dan landscape), pakai dvh, env(safe-area-inset-*), dan skala --s. Deteksi pointer: coarse untuk mode sentuh.
- Target sentuh minimal 44px, jarak aman dari tepi layar. Tidak ada teks terpotong di 360x640 maupun 1920x1080. Tanpa scroll halaman; touch-action:none, user-select:none, context menu diblokir.
- Canvas mengisi layar dengan resize/orientasi otomatis; di desktop tampilkan petunjuk tombol keyboard, di mobile tampilkan joystick + tombol aksi.
- Panel dan modal desktop boleh lebih lebar (grid 2 kolom di toko/misi), mobile 1 kolom.

5. FLOW LAYAR
SPLASH > MENU > (LEVEL | TOKO | HARIAN | MISI | PENGATURAN) > BRIEFING > COUNTDOWN > PLAYING <> PAUSED > RESULT > (LANJUT | ULANGI | MENU)
- SPLASH: loading bar berdasar tahap inisialisasi nyata, tombol MAIN (membuka audio).
- MENU: latar hidup (adegan idle/kamera bergerak), tombol MAIN (lanjut terakhir), LEVEL, TOKO, HARIAN (badge bila belum klaim), MISI, PENGATURAN; chip koin/gem; tombol fullscreen dan suara.
- LEVEL: peta bergulir, node 0-3 bintang, gembok, syarat bintang untuk dunia berikutnya. Tap node membuka kartu: tujuan, kriteria 3 bintang, rekor, tombol MULAI.
- BRIEFING: tujuan + tips + pilihan booster (maks 2). Level 1-3 punya tutorial interaktif yang bisa dilewati.
- COUNTDOWN 3-2-1 dengan animasi dan suara.
- PAUSED otomatis saat tab tidak aktif/blur/P/Esc: Lanjut (countdown 3 detik), Ulangi, Pengaturan, Menu.
- RESULT: MENANG/KALAH animasi, bintang muncul satu per satu, skor count-up, reward koin/XP, rekor baru berkilau. Bila kalah: tawarkan lanjut dengan 1 gem (maks 1x per percobaan).
- TOKO: tab Skin / Efek / Booster, pratinjau berputar, konfirmasi ringan saat beli.
- HARIAN: siklus 7 hari, hari ke-7 hadiah besar, streak.
- MISI: 3 harian + 1 mingguan, progress bar, tombol Klaim. (Pencapaian/lencana opsional, minimal 12 bila dibuat.)
- PENGATURAN: Musik, SFX, Getar layar, Kualitas, Ukuran UI, Reduced motion, FPS, Bahasa, Ekspor/Impor simpanan, Reset (konfirmasi dua langkah).

6. HUD
- Kiri atas: level pemain + XP. Tengah atas: satu fokus besar (tujuan/timer/skor). Kanan atas: koin + pause.
- Bawah: tombol kemampuan dengan cooldown melingkar; mode sentuh: joystick kiri, tombol aksi kanan.
- Feedback: floating text, meter combo, vignette saat HP rendah, kilatan saat kena hit, penanda arah objektif di luar layar.

7. FISIKA & EFEK DINAMIS (aktifkan sesuai genre dan gaya; wajib ada minimal 4)
Implementasi ringan berbasis kode sendiri (cukup integrasi semi-implisit dan spring), tanpa pustaka berat. Cannon.js dari cdnjs hanya bila genre fisika-berat (modul H/J).
- Gravitasi & benturan: massa, gravitasi, gesekan (friction), pantulan (bounciness); objek merosot di lereng sesuai gesekan.
- Tilt/lean: karakter atau kendaraan miring mengikuti belokan dan kemiringan tanah (lerp halus ke sudut target).
- Goyangan berpegas: lampu gantung, papan toko, tali, antena, aksesori karakter memakai pendulum/spring teredam (damping); bergoyang saat tertabrak atau terkena angin lalu tenang alami.
- Secondary motion (jiggle): rambut, syal, ekor, jubah mengikuti gerak objek utama dengan keterlambatan.
- Angin: fungsi global Wind(t) dengan arah dan kekuatan berubah pelan (sin berlapis + noise). Rumput/pohon/bendera bergoyang mengikutinya; pada 3D pakai vertex displacement via ShaderMaterial, pada 2D pakai skew/rotasi berbasis fase.
- Kain/bendera: grid partikel dengan constraint jarak (Verlet) bila performa cukup; versi hemat: sinus berlapis.
- Efek lingkungan: debu, percikan, riak air, daun tertiup, hujan/salju sesuai tema (dari pool partikel).
- Dampak: screen shake berparameter (bisa dimatikan), hit-stop sekitar 60 ms pada hit penting, squash & stretch, kamera kick saat boost.
- Audio spasial: suara ambient (angin/kota/hutan) berlapis; SFX benturan dengan volume dan pan mengikuti jarak (StereoPanner atau PositionalAudio pada 3D).

8. LOGIKA UI (hindari bug umum)
- Modal stack manager: openModal(id), closeTop(); Esc menutup modal teratas; klik backdrop hanya menutup modal non-kritis. Saat modal terbuka, input gameplay nonaktif dan game pause.
- Semua tombol di dalam overlay wajib stopPropagation(); handler klik container tidak boleh bereaksi bila target di dalam button.
- Setelah mengganti innerHTML, pasang ulang event handler pada elemen baru.
- Tidak ada state macet: setiap layar punya jalan keluar (tombol, Esc, atau tap).
- Satu sumber kebenaran: UI dirender dari objek STATE; fungsi render*() murni. Semua teks lewat tabel i18n T[lang][key].

9. KONTROL
Abstraksi Input.axis, Input.pressed(action), Input.held(action). Dukung keyboard (WASD/panah, Spasi, Shift, E, P/Esc), mouse, dan sentuh. Tidak ada aksi yang hanya bisa dilakukan di satu perangkat.

10. PROGRESI & EKONOMI
- XP dan level pemain dengan kebutuhan XP naik bertahap; hadiah dan animasi saat naik level.
- Mata uang: koin (sering) dan gem (langka, dari bintang penuh dunia, harian ke-7, pencapaian).
- Bintang: 1 selesai, 2 capai target skor/waktu, 3 target sulit atau tanpa kena hit. Kriteria ditulis eksplisit.
- Kurva kesulitan difficulty(n) di CONFIG: level 1-3 tutorial, naik halus, boss/level puncak tiap dunia, level santai setelah boss.
- Harga toko: skin murah 100-300 koin, sedang 500-1200, langka 3-10 gem. Booster dan power-up punya batas agar balance terjaga.

11. AUDIO
Semua suara disintesis WebAudio (tanpa file): klik, hover, koin, power-up, hit, menang, kalah, bintang naik nada, countdown. Musik latar prosedural dua lapisan (pad + perkusi ringan) yang menyesuaikan tema dan intensitas. Audio terbuka pada gestur pertama, meredam saat pause/tab tersembunyi, pengaturan tersimpan.

12. JUICE
Squash & stretch, screen shake, hit-stop, partikel dari pool, floating number, pitch combo naik, slow-motion singkat saat menang, animasi muncul/hilang untuk semua panel, count-up angka, konfeti saat bintang 3, suara dan feedback tekan di setiap tombol.

13. SIMPAN DATA
localStorage key g_{{slug}}_v1 (slug = judul huruf kecil tanpa spasi), semua akses dibungkus try/catch dan game tetap jalan bila storage ditolak. Skema berversi + migrasi. Autosave pada event penting dan tiap 15 detik. Isi: progres, bintang, rekor, koin, gem, XP, item, misi, streak, pengaturan. Ekspor/impor teks base64.

14. KESIAPAN CRAZYGAMES
- Menu bisa dimainkan kurang dari 3 detik setelah load. Pause + mute otomatis saat tab tersembunyi; fullscreen; menangani resize dan orientasi.
- Stub SDK aman: const SDK = window.CrazyGames && window.CrazyGames.SDK, semua panggilan (gameplayStart/Stop, loadingStart/Stop, happytime) lewat SDK?. agar jalan tanpa SDK. Ads.rewarded(cb) memberi reward langsung di mode dev tanpa iklan palsu.
- Tidak ada request jaringan selain font, cdnjs, dan Iconify (khusus ikon). Tanpa alert/confirm/prompt bawaan, semua dialog pakai modal sendiri.

15. MODUL MEKANIK (pilih satu; implementasi penuh, minimal 5 jenis rintangan/musuh/elemen, 3 power-up, 1 boss/level puncak per dunia)
A Runner/endless | B Racing/drift | C Puzzle (match/geser/fisika/rute) | D Tower defense | E Arena shooter/survivor | F Platformer/parkour | G Idle/merge/clicker | H Fisika/destruksi | I Stealth/maze | J Olahraga (golf/basket/bowling) | K Kuis/trivia | L Builder/farming/simulasi

16. FORMAT KELUARAN
1. Rencana singkat (maks 10 baris): arsitektur, asumsi, daftar section.
2. Kode lengkap dalam satu blok html. Dilarang menulis "sisanya sama", "dst", atau placeholder. Bila terlalu panjang, bagi BAGIAN 1/N, 2/N, ... dengan penanda section jelas agar bisa digabung berurutan tanpa edit.
3. Checklist akseptasi (di bawah) dengan centang jujur; tandai yang belum terpenuhi.

17. CHECKLIST AKSEPTASI
[ ] Jalan dari satu file tanpa error konsol; tidak ada fungsi/variabel yang dipanggil tapi belum dibuat
[ ] Seluruh flow splash sampai result dan kembali bisa dilalui; tidak ada state macet; semua modal bisa ditutup
[ ] Tutorial level 1-3, jumlah level sesuai variabel, boss tiap dunia
[ ] Toko, harian, misi, pengaturan berfungsi dan tersimpan
[ ] Keyboard, mouse, dan sentuh sama-sama bisa dimainkan; HUD tidak menutupi aksi
[ ] Minimal 4 efek fisika/dinamis dari bagian 7 terlihat jelas
[ ] Pause otomatis saat tab hilang; FPS stabil; kualitas turun otomatis bila berat
[ ] Tidak ada unsur perjudian; palet nyaman dilihat; semua ikon memakai Fluent via Iconify dengan fallback offline
[ ] Teks terbaca dan layout rapi di 360x640 dan 1920x1080
```

## Contoh pengisian blok variabel

- **JUDUL:** Bubble Bakery
- **TAGLINE:** Panggang, susun, dan layani pelanggan sebelum antrean menumpuk.
- **GENRE:** L (Builder/simulasi)
- **GAYA VISUAL:** 2D vektor halus, warna pastel hangat
- **CORE LOOP:** terima pesanan > racik dan panggang > sajikan tepat waktu > dapat koin untuk upgrade dapur
- **MENANG/KALAH:** capai target pendapatan / pelanggan pergi 3x
- **PALET:** #fff4e6 (bg), #ffffff (panel), #ff8a4c (accent), #c9571a (accent-d), #3ecf8e (good), #ef5350 (bad)
- **POWER-UP:** oven turbo, pelanggan sabar, bonus tip, auto-sajikan
- **KONTROL:** mouse/sentuh (tap dan drag)

Contoh lain bergaya 3D: Neon Drift Rush (racing, kota malam, palet gelap neon). Gaya dan genre bebas selama mengikuti kerangka di atas.

## Patch Prompt (revisi hemat jatah)

```
Berikut kode game saya (tempel). Perbaiki HANYA hal berikut tanpa mengubah bagian lain: {{daftar bug/permintaan}}.
Keluarkan hanya potongan yang berubah dalam format GANTI: <kode lama persis> > DENGAN: <kode baru> (atau fungsi lengkap yang diubah), sebutkan nama fungsi/section-nya. Jangan menulis ulang seluruh file. Setelah itu tulis 3 baris cara mengetes perbaikannya.
```

## Tips alur 50 judul

1. Sebar genre: jangan 50 judul dari modul yang sama. Pakai 12 modul, tiap modul sekitar 4 judul dengan tema dan palet berbeda.
2. Buat dulu 1 game referensi, uji sampai bersih, lalu tempel kodenya di awal prompt berikutnya dengan catatan: "tiru struktur UI dan design system dari kode ini, ganti mekanik dan tema".
3. Simpan semua blok variabel di satu spreadsheet agar tidak ada mekanik atau palet kembar.
4. Selalu minta CONFIG terpisah, karena tuning angka adalah revisi paling sering dan paling murah lewat Patch Prompt.
