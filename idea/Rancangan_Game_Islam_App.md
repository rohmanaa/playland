# Rancangan Game untuk Islam App

Dokumen ringkas ide game edukasi Islam yang terinspirasi dari **genre dan mekanik** game populer. Referensi dipakai untuk mempelajari pola gameplay, bukan menyalin kode, aset, karakter, level, atau merek aslinya. Semua game direncanakan realistis untuk prototipe web menggunakan **JavaScript dan Three.js** bila membutuhkan 3D, atau HTML/CSS/JavaScript untuk game 2D.

## 1. Hijaiyah Hunt

- **Deskripsi:** Petualangan 3D bergaya voxel; pemain menjelajahi level dan mengumpulkan token huruf hijaiyah.
- **Tujuan belajar:** Mengenali bentuk dan nama huruf hijaiyah, lalu berlatih membedakan huruf yang mirip.
- **Flow:** Base Camp → pilih level → jelajahi area → temukan token → pelajari huruf → checkpoint berisi latihan singkat → selesaikan level → buka level berikutnya.
- **Logika utama:** Setiap token memiliki ID unik dan hanya dihitung sekali. Koleksi tidak sama dengan penguasaan: status belajar ditentukan dari hasil latihan. Jatuh mengembalikan pemain ke checkpoint tanpa menghapus koleksi.
- **Isi/fungsi:** Third-person character, kamera follow yang dapat diputar, joystick mobile, lompatan, token 3D melayang, Collection Book, checkpoint, XP, level unlock, penyimpanan progres lokal.
- **Bentuk:** Dunia 3D landscape, gaya voxel/blocky, Base Camp, Meadow Trail, River Crossing, Crystal Cave. HUD minimalis dengan bar atas transparan, tombol membulat, joystick kiri bawah, aksi di kanan bawah.
- **Referensi:** [Super Bear Adventure — Google Play](https://play.google.com/store/apps/details?id=com.Earthkwak.Platformer) · [Jump Guys — CrazyGames](https://www.crazygames.com/game/jump-guys)
- **Yang diadopsi:** Eksplorasi 3D, kontrol third-person, dunia berlevel, barang koleksi, dan jalur rahasia. Bukan karakter atau aset aslinya.

## 2. Tajwid Rush

- **Deskripsi:** Game tantangan cepat untuk mengenali hukum tajwid melalui pilihan atau gerbang jawaban di lintasan.
- **Tujuan belajar:** Mengidentifikasi hukum tajwid dan menghubungkan contoh bacaan dengan nama hukumnya.
- **Flow:** Pilih materi → mulai lintasan → lihat potongan contoh → pilih gerbang/jawaban → dapat umpan balik → lanjut ke tantangan berikutnya → ringkasan hasil.
- **Logika utama:** Soal diambil dari bank materi tervalidasi. Jawaban benar menambah skor/kombo; jawaban salah memberi penjelasan singkat dan kesempatan belajar. Kecepatan tidak boleh mengalahkan ketepatan materi.
- **Isi/fungsi:** Bank soal tajwid, mode latihan, mode tantangan, skor, kombo, progres per materi, review kesalahan, pengaturan kecepatan.
- **Bentuk:** 3D sederhana atau runner 2.5D; lintasan jelas, gerbang jawaban besar, HUD skor dan progres. Mulai dari lintasan lurus agar realistis dibuat.
- **Referensi:** [Jump Guys — CrazyGames](https://www.crazygames.com/game/jump-guys) · [Kategori game obstacle — CrazyGames](https://www.crazygames.com/t/obstacle)
- **Yang diadopsi:** Ritme tantangan, rintangan, pilihan jalur, dan progres level. Materi tajwid harus ditinjau pengajar; jangan mengandalkan generasi soal otomatis tanpa validasi.

## 3. Wudhu Quest

- **Deskripsi:** Simulasi interaktif langkah-langkah wudhu dalam lingkungan 3D yang ramah anak.
- **Tujuan belajar:** Memahami urutan praktik wudhu dan mengenali tindakan yang benar.
- **Flow:** Pilih mode belajar → lihat demonstrasi singkat → lakukan langkah satu per satu → dapat umpan balik → selesaikan urutan → kuis ringkas.
- **Logika utama:** Tiap langkah memiliki status belum dilakukan, benar, atau perlu diulang. Urutan dan rincian mengikuti panduan fikih yang dipilih sekolah/ustaz. Hindari memberi label “sah/tidak sah” secara mutlak jika ada perbedaan pendapat atau rincian yang belum ditetapkan.
- **Isi/fungsi:** Karakter, tempat wudhu, objek air/keran, petunjuk langkah, demonstrasi, tombol ulangi, mode praktik bebas, penilaian urutan.
- **Bentuk:** 3D third-person ringan atau tampilan close-up interaktif; satu area kecil dengan objek yang mudah disentuh/diklik.
- **Referensi:** [Super Bear Adventure — Google Play](https://play.google.com/store/apps/details?id=com.Earthkwak.Platformer) untuk pendekatan eksplorasi 3D; [CrazyGames — game puzzle](https://www.crazygames.com/id/c/puzzle) untuk pola interaksi berbasis langkah.
- **Yang diadopsi:** Navigasi ruang 3D sederhana dan interaksi objek. Fokusnya simulasi pembelajaran, bukan pertarungan atau kompetisi.

## 4. Doa Match

- **Deskripsi:** Puzzle mencocokkan kartu doa dengan situasi, arti, atau audio yang sesuai.
- **Tujuan belajar:** Mengingat doa harian, memahami kapan doa digunakan, dan mengenali maknanya.
- **Flow:** Pilih tema → kartu muncul → cocokkan doa dengan situasi/arti/audio → periksa pasangan → baca penjelasan → lanjut ke ronde berikutnya.
- **Logika utama:** Pasangan dan jawaban benar berasal dari data yang ditinjau. Sistem mencatat akurasi dan materi yang perlu diulang. Teks Arab, transliterasi, terjemahan, dan sumber harus diperiksa sebelum publikasi.
- **Isi/fungsi:** Kartu doa, kategori harian, audio opsional, timer opsional, hint, skor, riwayat latihan, mode tanpa tekanan waktu.
- **Bentuk:** Game 2D berbasis kartu atau board responsif; paling ringan untuk dikembangkan dan cocok dimainkan portrait maupun landscape.
- **Referensi:** [Match Arena — CrazyGames](https://www.crazygames.com/id/game/match-arena) · [Game puzzle — CrazyGames](https://www.crazygames.com/id/c/puzzle)
- **Yang diadopsi:** Mekanik mencocokkan dan menyelesaikan target ronde. Konten doa tetap akurat dan tidak diperlakukan sekadar hiasan.

## 5. Rukun Quest

- **Deskripsi:** Game misi dan mini-game untuk mempelajari rukun Islam; setiap misi mewakili konsep yang harus dipahami melalui aktivitas.
- **Tujuan belajar:** Mengingat lima rukun Islam dan memahami penjelasan dasarnya sesuai tingkat usia.
- **Flow:** Masuk ke peta misi → pilih tantangan → selesaikan aktivitas/pertanyaan → dapat lencana → buka misi berikutnya → rangkuman pembelajaran.
- **Logika utama:** Misi dibuka berdasarkan penyelesaian tujuan, bukan semata-mata skor. Tiap mini-game menguji satu konsep. Hindari menggambarkan ibadah atau ketentuan agama secara keliru; materi diperiksa pengajar.
- **Isi/fungsi:** Peta misi, kartu pengetahuan, mini-game sederhana, lencana, progres, pertanyaan pemahaman, ringkasan hasil.
- **Bentuk:** Hub 2D atau 3D ringan dengan beberapa portal/area misi; mini-game bisa berbeda bentuk agar tidak monoton.
- **Referensi:** [Jump Guys — CrazyGames](https://www.crazygames.com/game/jump-guys) untuk tantangan platformer; [Game puzzle — CrazyGames](https://www.crazygames.com/id/c/puzzle) untuk mini-game berbasis soal.
- **Yang diadopsi:** Struktur misi, progres, hadiah, dan tantangan singkat. Bukan mekanik kompetisi yang tidak relevan dengan tujuan belajar.

---

## Prioritas pengembangan yang disarankan

1. **Hijaiyah Hunt:** sudah memiliki rancangan dan prototipe HTML awal; perbaiki kontrol, kamera, dan pengalaman mobile terlebih dahulu.
2. **Doa Match:** paling sederhana untuk membangun bank materi, sistem skor, dan progres belajar.
3. **Wudhu Quest:** mulai dari satu area dan urutan dasar yang sudah ditinjau pengajar.
4. **Tajwid Rush:** buat setelah bank soal tajwid tervalidasi.
5. **Rukun Quest:** bangun sebagai kumpulan mini-game setelah komponen UI dan progres bisa dipakai ulang.

## Prinsip bersama untuk Islam App

- Utamakan belajar, bukan hanya skor atau kecepatan.
- Pisahkan hadiah game dari bukti penguasaan materi.
- Sediakan opsi tanpa timer dan umpan balik yang ramah anak.
- Teks Arab, transliterasi, audio, dan aturan ibadah harus ditinjau orang yang kompeten.
- Simpan progres dengan jelas; jelaskan jika data hanya tersimpan di perangkat.
- Ambil inspirasi pada genre dan pola interaksi. Buat identitas visual, aset, level, dan kode sendiri.

# 50 Ide Game Tambahan untuk Islam App — Versi Ringan

**Prinsip revisi:** tidak memasukkan game besar yang butuh dunia 3D luas, simulasi kompleks, multiplayer, fisika berat, atau aset mahal. Selain Hijaiyah Hunt yang sudah menjadi proyek 3D utama, game lain sebaiknya dibuat sebagai mini-game HTML/CSS/JavaScript 2D, cepat dimuat, bisa dimainkan di HP, dan memakai komponen UI yang dapat digunakan ulang.

Setiap ide di bawah mencantumkan nama, deskripsi, tujuan, flow, logika, isi, bentuk, dan referensi mekanik. Referensi hanya inspirasi genre; buat nama, desain, konten, dan kode sendiri.

## 6. Sirah Timeline
- **Deskripsi:** Susun peristiwa sirah ke urutan yang benar.
- **Tujuan:** Memahami kronologi peristiwa.
- **Flow:** Pilih bab → susun kartu → periksa → baca penjelasan.
- **Logika:** Kartu memiliki urutan jawaban yang divalidasi pengajar; jawaban salah dapat dicoba lagi.
- **Isi:** Kartu peristiwa, petunjuk, skor, ringkasan.
- **Bentuk:** Puzzle kartu 2D.
- **Referensi:** [Timeline puzzle](https://www.crazygames.com/t/puzzle)

## 7. Arabic Word Scramble
- **Deskripsi:** Susun huruf menjadi kosakata Arab yang dipelajari.
- **Tujuan:** Mengenali huruf dan kosakata dasar.
- **Flow:** Lihat petunjuk → susun huruf → periksa → dengar pelafalan.
- **Logika:** Jawaban berasal dari bank kosakata yang sudah diverifikasi.
- **Isi:** Huruf pilihan, petunjuk gambar/arti, audio opsional.
- **Bentuk:** Word puzzle 2D.
- **Referensi:** [Word games](https://www.crazygames.com/t/word)

## 8. Harakat Tap
- **Deskripsi:** Pilih harakat yang tepat untuk melengkapi latihan sederhana.
- **Tujuan:** Mengenali fathah, kasrah, dammah, dan tanda lain sesuai tahap.
- **Flow:** Lihat contoh → pilih harakat → cek jawaban → lanjut.
- **Logika:** Soal dibuat dan diperiksa pengajar; materi yang belum dipelajari tidak diuji.
- **Isi:** Huruf, pilihan harakat, umpan balik, latihan ulang.
- **Bentuk:** Tap quiz 2D.
- **Referensi:** [Casual quiz games](https://www.crazygames.com/t/quiz)

## 9. Doa Memory Match
- **Deskripsi:** Buka kartu untuk mencocokkan doa dengan arti atau situasinya.
- **Tujuan:** Mengingat doa harian dan konteks penggunaannya.
- **Flow:** Buka dua kartu → cocokkan → baca arti → selesaikan papan.
- **Logika:** Pasangan diacak; progres dicatat per tema.
- **Isi:** Kartu, tema, skor, mode tanpa timer.
- **Bentuk:** Memory matching 2D.
- **Referensi:** [Memory games](https://www.crazygames.com/t/memory)

## 10. Doa Audio Quiz
- **Deskripsi:** Dengarkan rekaman lalu pilih nama doa atau maknanya.
- **Tujuan:** Mengenali doa lewat audio.
- **Flow:** Putar audio → pilih jawaban → lihat penjelasan → ulangi jika perlu.
- **Logika:** Audio dan jawaban harus diverifikasi; pemutaran ulang tidak dihukum.
- **Isi:** Pemutar audio, pilihan jawaban, arti, kategori.
- **Bentuk:** Kuis audio 2D.
- **Referensi:** [Quiz games](https://www.crazygames.com/t/quiz)

## 11. Tajwid Match
- **Deskripsi:** Cocokkan contoh bacaan dengan nama hukum tajwid.
- **Tujuan:** Mengingat kategori tajwid.
- **Flow:** Pilih tingkat → cocokkan kartu → periksa → lihat alasan.
- **Logika:** Semua contoh bacaan ditinjau pengajar tajwid.
- **Isi:** Kartu contoh, label hukum, hint, catatan kesalahan.
- **Bentuk:** Drag-and-drop 2D.
- **Referensi:** [Puzzle games](https://www.crazygames.com/id/c/puzzle)

## 12. Huruf Mana?
- **Deskripsi:** Pilih huruf yang sama dengan target di antara beberapa pilihan.
- **Tujuan:** Melatih pengenalan bentuk huruf hijaiyah.
- **Flow:** Lihat target → pilih huruf → dapat umpan balik → lanjut.
- **Logika:** Distraktor berasal dari huruf yang sudah diperkenalkan; variasi titik diperhatikan.
- **Isi:** Target huruf besar, opsi jawaban, audio opsional.
- **Bentuk:** Multiple-choice mini-game.
- **Referensi:** [Educational quiz games](https://www.crazygames.com/t/quiz)

## 13. Pasangan Huruf Mirip
- **Deskripsi:** Temukan pasangan huruf yang berbeda hanya pada bentuk atau titik.
- **Tujuan:** Membedakan huruf yang mirip.
- **Flow:** Amati dua huruf → pilih sama/berbeda → lihat penjelasan.
- **Logika:** Hanya memakai keluarga huruf yang sudah dipelajari.
- **Isi:** Kartu huruf, penanda titik, latihan berulang.
- **Bentuk:** Visual comparison 2D.
- **Referensi:** [Spot the difference games](https://www.crazygames.com/t/hidden-object)

## 14. Kosakata Bergambar
- **Deskripsi:** Cocokkan kata Arab sederhana dengan gambar atau arti.
- **Tujuan:** Memperkaya kosakata dasar.
- **Flow:** Pilih tema → cocokkan kata → cek → dengar audio.
- **Logika:** Gambar dan terjemahan memiliki pasangan tetap yang divalidasi.
- **Isi:** Kartu kata, gambar, audio, tema.
- **Bentuk:** Matching 2D.
- **Referensi:** [Match games](https://www.crazygames.com/t/match-3)

## 15. Susun Doa
- **Deskripsi:** Susun potongan doa pendek sesuai urutan materi.
- **Tujuan:** Mengingat urutan teks yang dipelajari.
- **Flow:** Pilih doa → geser kartu → periksa → tampilkan urutan benar.
- **Logika:** Potongan teks dibuat dari sumber yang sudah diverifikasi.
- **Isi:** Kartu teks, tombol cek, hint.
- **Bentuk:** Ordering puzzle 2D.
- **Referensi:** [Jigsaw and puzzle games](https://www.crazygames.com/id/c/puzzle)

## 16. Benar atau Salah?
- **Deskripsi:** Jawab pernyataan singkat tentang pengetahuan Islam dasar.
- **Tujuan:** Memeriksa pemahaman konsep.
- **Flow:** Baca pernyataan → pilih benar/salah → lihat alasan.
- **Logika:** Hindari pernyataan yang ambigu; tampilkan sumber materi bila diperlukan.
- **Isi:** Kartu soal, penjelasan, progres.
- **Bentuk:** True/false quiz.
- **Referensi:** [Quiz games](https://www.crazygames.com/t/quiz)

## 17. Kuis Empat Pilihan
- **Deskripsi:** Kuis singkat dengan empat opsi jawaban.
- **Tujuan:** Mengulang materi pelajaran Islam sesuai usia.
- **Flow:** Pilih kategori → jawab beberapa soal → lihat hasil → ulangi yang salah.
- **Logika:** Acak posisi jawaban benar dan simpan riwayat topik.
- **Isi:** Bank soal, kategori, hint, hasil.
- **Bentuk:** Quiz 2D.
- **Referensi:** [Quiz games](https://www.crazygames.com/t/quiz)

## 18. Cari Kata Islami
- **Deskripsi:** Temukan kata dari daftar kosakata dalam susunan huruf.
- **Tujuan:** Mengingat istilah dan kosakata.
- **Flow:** Pilih tema → cari kata → tandai → lihat arti.
- **Logika:** Grid dibuat dari daftar kata terpilih dan tetap terbaca di HP.
- **Isi:** Grid huruf, daftar kata, petunjuk.
- **Bentuk:** Word search 2D.
- **Referensi:** [Word games](https://www.crazygames.com/t/word)

## 19. Teka-Teki Silang Islam
- **Deskripsi:** Isi teka-teki silang berdasarkan petunjuk istilah.
- **Tujuan:** Mengulang istilah dan konsep dasar.
- **Flow:** Pilih teka-teki → baca petunjuk → isi kotak → periksa.
- **Logika:** Jawaban menerima variasi ejaan yang disepakati.
- **Isi:** Grid, petunjuk, tombol cek.
- **Bentuk:** Crossword 2D.
- **Referensi:** [Word games](https://www.crazygames.com/t/word)

## 20. Pasangkan Rukun Islam
- **Deskripsi:** Pasangkan nama rukun dengan penjelasan sederhananya.
- **Tujuan:** Mengingat lima rukun Islam.
- **Flow:** Seret kartu → cocokkan → cek → baca ringkasan.
- **Logika:** Pasangan benar berasal dari materi terverifikasi.
- **Isi:** Kartu istilah, kartu penjelasan, skor.
- **Bentuk:** Drag-and-drop 2D.
- **Referensi:** [Puzzle games](https://www.crazygames.com/id/c/puzzle)

## 21. Urutan Wudhu
- **Deskripsi:** Susun kartu langkah wudhu berdasarkan panduan yang dipilih.
- **Tujuan:** Mengingat urutan praktik wudhu.
- **Flow:** Susun langkah → periksa → lihat demonstrasi/penjelasan → coba lagi.
- **Logika:** Urutan dan rincian harus disetujui pengajar; perbedaan pandangan diberi konteks.
- **Isi:** Kartu langkah, ilustrasi sederhana, tombol ulang.
- **Bentuk:** Sequencing puzzle 2D.
- **Referensi:** [Puzzle games](https://www.crazygames.com/id/c/puzzle)

## 22. Pilih Perilaku Baik
- **Deskripsi:** Pilih respons yang baik dalam situasi di rumah atau sekolah.
- **Tujuan:** Melatih adab, empati, dan tanggung jawab.
- **Flow:** Baca situasi → pilih respons → lihat dampak → diskusikan alasan.
- **Logika:** Kasus kontekstual dapat menerima lebih dari satu jawaban yang bertanggung jawab.
- **Isi:** Cerita pendek, pilihan, umpan balik.
- **Bentuk:** Branching story ringan.
- **Referensi:** [Interactive story games](https://www.crazygames.com/t/story)

## 23. Detektif Kejujuran
- **Deskripsi:** Pecahkan cerita pendek dengan memilih tindakan jujur dan adil.
- **Tujuan:** Memahami konsekuensi keputusan.
- **Flow:** Baca kasus → pilih petunjuk → tentukan tindakan → lihat hasil.
- **Logika:** Tidak mempermalukan pemain; fokus pada refleksi dan alasan.
- **Isi:** Dialog singkat, petunjuk, pilihan akhir.
- **Bentuk:** Mini mystery 2D.
- **Referensi:** [Point-and-click games](https://www.crazygames.com/t/point-and-click)

## 24. Amanah Delivery
- **Deskripsi:** Antar barang ke tujuan yang benar melalui peta kecil.
- **Tujuan:** Belajar amanah, mengikuti instruksi, dan perencanaan sederhana.
- **Flow:** Baca pesanan → pilih rute → antar → cek hasil.
- **Logika:** Rute berupa grid sederhana, tanpa simulasi fisika.
- **Isi:** Peta kotak, tujuan, rintangan statis, skor.
- **Bentuk:** Grid puzzle 2D.
- **Referensi:** [Path puzzle games](https://www.crazygames.com/id/c/puzzle)

## 25. Kebersihan Masjid
- **Deskripsi:** Pilih dan tempatkan benda pada area yang sesuai untuk menjaga kebersihan.
- **Tujuan:** Membangun kebiasaan menjaga tempat ibadah dan ruang bersama.
- **Flow:** Lihat area → pilih benda → tempatkan/bersihkan → cek.
- **Logika:** Setiap benda punya lokasi atau tindakan yang sesuai.
- **Isi:** Ilustrasi ruangan, benda, checklist.
- **Bentuk:** Drag-and-drop 2D.
- **Referensi:** [Casual cleaning games](https://www.crazygames.com/)

## 26. Pilah Sampah Amanah
- **Deskripsi:** Masukkan sampah ke kategori yang tepat.
- **Tujuan:** Mengenal kebersihan dan tanggung jawab lingkungan.
- **Flow:** Item muncul → pilih tempat sampah → lihat umpan balik → lanjut.
- **Logika:** Kategori dapat disesuaikan dengan sistem pemilahan setempat.
- **Isi:** Item bergambar, kategori, skor.
- **Bentuk:** Sorting game 2D.
- **Referensi:** [Sorting games](https://www.crazygames.com/t/puzzle)

## 27. Pasar Pilihan Baik
- **Deskripsi:** Pilih barang dan hitung uang kembalian dalam simulasi pasar sederhana.
- **Tujuan:** Melatih matematika, kejujuran, dan keputusan belanja.
- **Flow:** Baca daftar → pilih barang → hitung total/kembalian → periksa.
- **Logika:** Gunakan angka kecil dan skenario yang transparan.
- **Isi:** Katalog, saldo virtual, keranjang, kalkulasi.
- **Bentuk:** Math mini-game 2D.
- **Referensi:** [Math games](https://www.crazygames.com/t/math)

## 28. Hitung Sedekah
- **Deskripsi:** Tantangan matematika memakai contoh berbagi dengan angka sederhana.
- **Tujuan:** Berlatih penjumlahan, pengurangan, dan pembagian.
- **Flow:** Baca skenario → hitung → masukkan jawaban → lihat langkah penyelesaian.
- **Logika:** Fokus pada matematika; tidak menyajikan kalkulasi sebagai fatwa zakat.
- **Isi:** Soal, input angka, petunjuk.
- **Bentuk:** Math quiz 2D.
- **Referensi:** [Math games](https://www.crazygames.com/t/math)

## 29. Kebun Kebaikan Mini
- **Deskripsi:** Setiap tugas belajar yang selesai menumbuhkan tanaman pada papan kecil.
- **Tujuan:** Mendorong konsistensi belajar dan kebiasaan baik.
- **Flow:** Selesaikan latihan → dapat benih virtual → tempatkan tanaman → lihat kebun berkembang.
- **Logika:** Kebun adalah hadiah visual 2D, bukan simulasi pertanian real-time.
- **Isi:** Tanaman, dekorasi, progres harian.
- **Bentuk:** Collection/decoration 2D.
- **Referensi:** [Casual merge and collection games](https://www.crazygames.com/t/merge)

## 30. Pola Geometri Islam
- **Deskripsi:** Lengkapi pola geometri dengan memilih bentuk yang hilang.
- **Tujuan:** Melatih logika, simetri, dan apresiasi seni geometris.
- **Flow:** Amati pola → pilih potongan → cek → buka pola baru.
- **Logika:** Jawaban mengikuti pola geometris yang jelas; bentuk dapat dibuat dengan SVG/CSS.
- **Isi:** Bentuk, pola, palet warna, editor sederhana.
- **Bentuk:** Visual logic puzzle 2D.
- **Referensi:** [Pattern puzzle games](https://www.crazygames.com/id/c/puzzle)

## 31. Sambung Pola
- **Deskripsi:** Lanjutkan pola warna dan bentuk yang berulang.
- **Tujuan:** Melatih pengenalan pola dan logika dasar.
- **Flow:** Amati pola → pilih elemen berikutnya → cek → naik tingkat.
- **Logika:** Pola memiliki aturan yang eksplisit dan dapat dijelaskan.
- **Isi:** Bentuk, warna, level singkat.
- **Bentuk:** Logic puzzle 2D.
- **Referensi:** [Brain games](https://www.crazygames.com/t/brain)

## 32. Lampu Pengetahuan
- **Deskripsi:** Nyalakan semua lampu pada grid dengan aturan klik sederhana.
- **Tujuan:** Melatih perencanaan dan pemecahan masalah.
- **Flow:** Baca aturan → klik sel → capai pola target → lanjut.
- **Logika:** Puzzle dibuat dengan solusi yang dapat diuji otomatis.
- **Isi:** Grid, langkah, hint, reset.
- **Bentuk:** Logic puzzle 2D.
- **Referensi:** [Light puzzle games](https://www.crazygames.com/id/c/puzzle)

## 33. Runner Kebaikan 2D
- **Deskripsi:** Karakter bergerak otomatis dan pemain menghindari rintangan serta mengambil ikon target.
- **Tujuan:** Mengulang kosakata atau konsep melalui sesi singkat.
- **Flow:** Mulai → lompat/geser → kumpulkan target → jawab satu soal → hasil.
- **Logika:** Gerakan 2D sederhana; tidak memerlukan dunia 3D atau fisika kompleks.
- **Isi:** Satu lintasan, rintangan, koleksi, skor.
- **Bentuk:** 2D side-scrolling.
- **Referensi:** [Endless runner games](https://www.crazygames.com/t/runner)

## 34. Hindari dan Pilih
- **Deskripsi:** Gerakkan karakter 2D untuk mengambil objek sesuai kategori yang diminta.
- **Tujuan:** Memperkuat pengenalan kategori dan fokus.
- **Flow:** Lihat target → gerakkan karakter → ambil objek tepat → rangkuman.
- **Logika:** Satu layar, kontrol kiri/kanan, tanpa simulasi berat.
- **Isi:** Karakter sederhana, objek, target kategori.
- **Bentuk:** Arcade 2D.
- **Referensi:** [Arcade games](https://www.crazygames.com/t/arcade)

## 35. Good Deeds Bingo
- **Deskripsi:** Papan bingo berisi tantangan kebaikan yang bisa ditandai setelah dilakukan di kehidupan nyata.
- **Tujuan:** Menghubungkan pembelajaran dengan tindakan sehari-hari.
- **Flow:** Pilih papan → baca tantangan → tandai setelah dilakukan → refleksi.
- **Logika:** Tidak mengklaim memverifikasi tindakan nyata; gunakan sebagai jurnal pribadi/kelas.
- **Isi:** Grid bingo, tantangan, catatan singkat.
- **Bentuk:** Checklist game 2D.
- **Referensi:** [Bingo card generator](https://myfreebingocards.com/)

## 36. Kartu Tantangan Kebaikan
- **Deskripsi:** Ambil kartu berisi tantangan ringan seperti membantu atau mengucapkan terima kasih.
- **Tujuan:** Membiasakan perilaku positif.
- **Flow:** Ambil kartu → baca tantangan → tandai selesai → pilih refleksi.
- **Logika:** Tantangan dapat dilewati jika tidak sesuai situasi atau kebutuhan pemain.
- **Isi:** Dek kartu, kategori, riwayat.
- **Bentuk:** Card-based 2D.
- **Referensi:** [Card games](https://www.crazygames.com/t/card)

## 37. Jembatan Logika
- **Deskripsi:** Pilih ubin yang benar agar karakter mencapai sisi lain pada grid.
- **Tujuan:** Melatih logika dan perencanaan langkah.
- **Flow:** Amati grid → pilih ubin → uji jalur → capai tujuan.
- **Logika:** Gerakan berbasis grid, tanpa fisika 3D.
- **Isi:** Grid, karakter ikon, ubin, tombol undo.
- **Bentuk:** Path puzzle 2D.
- **Referensi:** [Path puzzle games](https://www.crazygames.com/id/c/puzzle)

## 38. Kerja Sama Kafilah
- **Deskripsi:** Susun urutan tugas sederhana agar perjalanan kelompok selesai.
- **Tujuan:** Memahami kerja sama dan pembagian tugas.
- **Flow:** Baca misi → atur kartu tugas → jalankan urutan → lihat hasil.
- **Logika:** Simulasi berbasis kartu, bukan dunia besar atau multiplayer.
- **Isi:** Kartu peran, urutan, hasil misi.
- **Bentuk:** Planning puzzle 2D.
- **Referensi:** [Strategy puzzle games](https://www.crazygames.com/t/strategy)

## 39. Sudoku Bintang
- **Deskripsi:** Sudoku ringan dengan simbol geometris sebagai pengganti angka.
- **Tujuan:** Melatih logika dan konsentrasi.
- **Flow:** Pilih ukuran grid → isi sel → cek konflik → selesaikan.
- **Logika:** Validasi baris, kolom, dan subgrid.
- **Isi:** Grid, pilihan simbol, hint.
- **Bentuk:** Sudoku 2D.
- **Referensi:** [Sudoku](https://www.websudoku.com/)

## 40. Hitung Cepat Berkah
- **Deskripsi:** Soal aritmetika singkat dengan tema aktivitas sehari-hari.
- **Tujuan:** Melatih hitung dasar.
- **Flow:** Pilih level → jawab soal → lihat langkah → lanjut.
- **Logika:** Kesulitan meningkat bertahap; timer dapat dimatikan.
- **Isi:** Soal angka, input, hint, hasil.
- **Bentuk:** Math quiz 2D.
- **Referensi:** [Math games](https://www.crazygames.com/t/math)

## 41. Tebak Istilah
- **Deskripsi:** Tebak istilah dari petunjuk singkat atau huruf yang tersedia.
- **Tujuan:** Mengingat kosakata Islam dasar.
- **Flow:** Pilih kategori → baca petunjuk → susun jawaban → lihat arti.
- **Logika:** Daftar istilah dan petunjuk dikurasi; toleransi ejaan ditentukan.
- **Isi:** Petunjuk, huruf, hint, glosarium.
- **Bentuk:** Word puzzle 2D.
- **Referensi:** [Word games](https://www.crazygames.com/t/word)

## 42. Quiz Show Mini
- **Deskripsi:** Kuis bergaya acara dengan ronde pendek dan skor sederhana.
- **Tujuan:** Mengulang materi dalam suasana menyenangkan.
- **Flow:** Pilih topik → jawab lima soal → lihat skor dan materi yang perlu diulang.
- **Logika:** Tidak perlu live multiplayer; semua berjalan lokal.
- **Isi:** Bank soal, timer opsional, hasil.
- **Bentuk:** Quiz show 2D.
- **Referensi:** [Trivia games](https://www.crazygames.com/t/trivia)

## 43. Perpustakaan Mini
- **Deskripsi:** Cari buku atau kartu topik yang sesuai dengan petunjuk di rak virtual sederhana.
- **Tujuan:** Melatih pencarian informasi dan pengenalan kategori.
- **Flow:** Baca petunjuk → pilih rak → buka kartu → jawab pertanyaan.
- **Logika:** Semua rak berupa UI 2D, bukan simulasi ruangan 3D.
- **Isi:** Rak kartu, pencarian, topik, kuis.
- **Bentuk:** Hidden-object ringan 2D.
- **Referensi:** [Hidden object games](https://www.crazygames.com/t/hidden-object)

## 44. Fakta atau Hoaks
- **Deskripsi:** Nilai klaim edukasi atau informasi digital sederhana berdasarkan sumber yang disediakan.
- **Tujuan:** Melatih literasi informasi dan kebiasaan memeriksa sumber.
- **Flow:** Baca klaim → buka sumber → pilih penilaian → lihat alasan.
- **Logika:** Konten harus dikurasi; game tidak meminta anak menilai isu sensitif tanpa konteks.
- **Isi:** Kartu klaim, tautan sumber, alasan jawaban.
- **Bentuk:** Critical thinking quiz.
- **Referensi:** [News literacy resources](https://newslit.org/)

## 45. Chat dengan Adab
- **Deskripsi:** Pilih respons yang sopan dan aman dalam percakapan simulasi.
- **Tujuan:** Belajar etika komunikasi digital.
- **Flow:** Baca chat → pilih balasan → lihat dampak → coba alternatif.
- **Logika:** Skenario fiktif, tanpa chat dengan pengguna nyata atau pengumpulan data pribadi.
- **Isi:** Bubble chat, pilihan respons, penjelasan.
- **Bentuk:** Chat simulation 2D.
- **Referensi:** [Interactive story games](https://www.crazygames.com/t/story)

## 46. Puzzle Sabar
- **Deskripsi:** Selesaikan puzzle langkah demi langkah tanpa hukuman untuk mencoba lagi.
- **Tujuan:** Melatih ketekunan dan pengaturan strategi.
- **Flow:** Pilih puzzle → coba solusi → gunakan undo → selesaikan.
- **Logika:** Tidak ada penalti karena salah mencoba; progres disimpan per puzzle.
- **Isi:** Grid, langkah, undo, hint.
- **Bentuk:** Logic puzzle 2D.
- **Referensi:** [Brain games](https://www.crazygames.com/t/brain)

## 47. Fokus dan Dzikir Counter
- **Deskripsi:** Penghitung sederhana untuk sesi latihan pribadi dengan target yang dipilih pengguna.
- **Tujuan:** Mendukung rutinitas latihan yang dipilih, tanpa mengklaim nilai ibadah otomatis.
- **Flow:** Pilih target → mulai hitung → jeda/lanjut → simpan catatan sesi.
- **Logika:** Penghitung tidak memberi klaim pahala atau penilaian agama.
- **Isi:** Counter, target opsional, reset, riwayat lokal.
- **Bentuk:** Utility mini-game/UI ringan.
- **Referensi:** [Simple counter](https://www.online-stopwatch.com/counter/)

## 48. Kalender Ramadan Mini
- **Deskripsi:** Kalender checklist untuk aktivitas belajar dan kebiasaan Ramadan.
- **Tujuan:** Membantu mengatur rutinitas dan refleksi.
- **Flow:** Buka hari → pilih aktivitas → tandai → lihat ringkasan.
- **Logika:** Tidak menganggap checklist sebagai ukuran kualitas ibadah.
- **Isi:** Kalender, checklist, catatan.
- **Bentuk:** Calendar UI 2D.
- **Referensi:** [Habit trackers](https://habitica.com/)

## 49. Persiapan Idulfitri
- **Deskripsi:** Susun checklist sederhana untuk persiapan hari raya dan kepedulian keluarga.
- **Tujuan:** Melatih perencanaan dan tanggung jawab.
- **Flow:** Pilih tugas → urutkan prioritas → tandai selesai → lihat ringkasan.
- **Logika:** Daftar bisa disesuaikan keluarga/sekolah; tidak memaksa semua tradisi sama.
- **Isi:** Kartu tugas, prioritas, checklist.
- **Bentuk:** Planning puzzle 2D.
- **Referensi:** [Task management](https://todoist.com/)

## 50. Manasik Match
- **Deskripsi:** Cocokkan istilah, urutan, dan ilustrasi dasar terkait manasik berdasarkan materi terverifikasi.
- **Tujuan:** Mengenal istilah dan gambaran umum manasik.
- **Flow:** Pilih topik → cocokkan kartu → cek → baca penjelasan.
- **Logika:** Bukan simulasi 3D; konten dan urutan ditinjau pembimbing yang kompeten.
- **Isi:** Kartu istilah, ilustrasi, urutan, kuis.
- **Bentuk:** Matching/sequence puzzle 2D.
- **Referensi:** [Matching games](https://www.crazygames.com/id/c/puzzle)

## 51. Tebak Gambar Islami
- **Deskripsi:** Tebak objek atau istilah dari ilustrasi sederhana.
- **Tujuan:** Mengingat kosakata dan konsep yang sesuai usia.
- **Flow:** Lihat gambar → pilih istilah → baca penjelasan → lanjut.
- **Logika:** Ilustrasi harus jelas dan tidak menggambarkan hal sensitif secara tidak tepat.
- **Isi:** Gambar, pilihan jawaban, glosarium.
- **Bentuk:** Picture quiz 2D.
- **Referensi:** [Picture quiz games](https://www.crazygames.com/t/quiz)

## 52. Pasangkan Tokoh dan Peristiwa
- **Deskripsi:** Cocokkan nama tokoh sejarah dengan peristiwa atau informasi yang sudah diverifikasi.
- **Tujuan:** Mengingat materi sejarah Islam.
- **Flow:** Pilih periode → cocokkan kartu → cek → baca konteks.
- **Logika:** Setiap pasangan memiliki sumber rujukan; perbedaan riwayat diberi catatan.
- **Isi:** Kartu tokoh, peristiwa, petunjuk.
- **Bentuk:** Matching 2D.
- **Referensi:** [Memory games](https://www.crazygames.com/t/memory)

## 53. Peta Lokasi Mini
- **Deskripsi:** Tandai lokasi pada peta statis berdasarkan petunjuk singkat.
- **Tujuan:** Mengenal lokasi geografi dan sejarah.
- **Flow:** Baca petunjuk → klik peta → cek jawaban → lihat fakta.
- **Logika:** Menggunakan peta statis dan titik pilihan, bukan dunia terbuka.
- **Isi:** Peta gambar, pin, petunjuk, fakta.
- **Bentuk:** Map quiz 2D.
- **Referensi:** [Seterra](https://www.geoguessr.com/seterra)

## 54. Pilih Sumber Tepercaya
- **Deskripsi:** Bandingkan dua kartu sumber dan pilih yang memiliki rujukan lebih jelas.
- **Tujuan:** Melatih literasi sumber dan kehati-hatian berbagi informasi.
- **Flow:** Baca klaim → bandingkan sumber → pilih alasan → lihat pembahasan.
- **Logika:** Contoh dibuat oleh pengajar; game mengajarkan proses verifikasi, bukan menilai semua perkara agama secara otomatis.
- **Isi:** Kartu sumber, metadata, pertanyaan refleksi.
- **Bentuk:** Source literacy mini-quiz.
- **Referensi:** [News literacy resources](https://newslit.org/)

## 55. Daily Learning Streak
- **Deskripsi:** Tantangan belajar singkat harian dengan beberapa soal dari materi yang telah dipelajari.
- **Tujuan:** Mendorong konsistensi mengulang materi.
- **Flow:** Buka tantangan → jawab beberapa soal → lihat ringkasan → pilih materi untuk diulang.
- **Logika:** Streak tidak menghukum hari yang terlewat; progres utama tetap berdasarkan hasil belajar.
- **Isi:** Soal campuran, kalender progres, pengulangan adaptif sederhana.
- **Bentuk:** Daily quiz 2D.
- **Referensi:** [Duolingo](https://www.duolingo.com/) — inspirasi sesi belajar singkat.

---

## Prioritas pengembangan versi ringan

1. **Doa Match / Doa Memory Match** — paling mudah untuk MVP 2D.
2. **Kuis Empat Pilihan / Benar atau Salah** — komponen dapat dipakai ulang untuk banyak materi.
3. **Arabic Word Scramble / Huruf Mana?** — fokus ke pembelajaran huruf dan kosakata.
4. **Urutan Wudhu / Tajwid Match** — dibuat setelah konten ditinjau pengajar.
5. **Game lain** — pilih berdasarkan materi yang dibutuhkan siswa; jangan membuat semuanya sekaligus.

## Batasan teknis yang disarankan

- Semua mini-game tambahan sebaiknya memakai **HTML/CSS/JavaScript 2D**, tanpa engine 3D dan tanpa simulasi berat.
- Gunakan komponen bersama untuk kartu, kuis, timer opsional, skor, audio, progres, dan layar hasil.
- Prioritaskan layar HP, aset SVG ringan, dan penyimpanan progres lokal.
- Hindari multiplayer real-time, dunia terbuka, simulasi ekonomi kompleks, dan aset 3D besar untuk MVP.
- Referensi game adalah inspirasi mekanik saja; semua aset, identitas visual, dan implementasi dibuat sendiri.

## Prinsip bersama untuk Islam App

- Utamakan pembelajaran dan umpan balik yang ramah anak.
- Pisahkan skor atau hadiah dari bukti penguasaan materi.
- Sediakan mode tanpa timer.
- Teks Arab, transliterasi, audio, sejarah, dan aturan ibadah harus ditinjau orang yang kompeten.
- Simpan progres dengan jelas dan jelaskan jika hanya tersimpan di perangkat.
