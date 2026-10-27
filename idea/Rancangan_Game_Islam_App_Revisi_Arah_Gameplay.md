# Islam App — Konsep Game Ringan untuk Anak dan Remaja

## Arah utama

**Bukan kumpulan game berat yang terpisah-pisah.** Islam App punya satu dunia petualangan sederhana yang bisa dijelajahi, dengan aktivitas harian yang memicu doa dan adab. Di dalam dunia yang sama, pemain juga bisa membuka mini-game pendek seperti tebak ayat, tebak doa, sambung ayat, tajwid, dan materi dasar Islam.

Target: anak-anak dan remaja. Gameplay harus mudah dipahami, ceria, aman, ringan di browser/HP, dan tidak membutuhkan pertarungan, sistem ekonomi rumit, multiplayer real-time, atau dunia 3D berukuran besar.

## 1. Nama konsep utama

**Jelajah Muslim: Dunia Doa & Tajwid**

### Deskripsi
Game petualangan edukasi ringan dengan satu peta kota bergaya kartun 3D/low-poly. Pemain berjalan atau berlari melewati rumah, jalan, taman, sekolah, toko, halte, dan masjid. Ketika melakukan aktivitas sehari-hari atau menemui kejadian tertentu, game menawarkan doa yang sesuai, adab singkat, dan konteks kapan doa dibaca.

Di beberapa lokasi tersedia papan aktivitas atau karakter NPC yang membuka mini-game singkat. Peta terasa seperti dunia yang hidup, tetapi ukurannya dibatasi dan dibagi menjadi beberapa area kecil agar tetap ringan.

### Tujuan
- Menghubungkan doa dengan situasi nyata, bukan sekadar menghafal daftar doa.
- Mengenalkan rukun iman, rukun Islam, adab sehari-hari, huruf hijaiyah, tajwid, dan ayat pendek.
- Membantu pemain mengingat bacaan Arab, transliterasi, arti, dan konteks penggunaannya.
- Membuat belajar terasa seperti eksplorasi, bukan ceramah atau ujian terus-menerus.

## 2. Referensi konten utama

- Kumpulan doa harian EQuran.id: https://equran.id/doa
- Rujukan tambahan doa keseharian NU Online: https://quran.nu.or.id/doa/doa-keseharian
- Referensi mekanik game open-world ringan dan eksplorasi 3D: https://www.superbearadventure.com/
- Referensi game petualangan voxel untuk gaya dunia: https://www.minecraft.net/
- Referensi kuis dan pembelajaran interaktif: https://wordwall.net/
- Referensi puzzle kata: https://www.educaplay.com/

**Catatan:** referensi dipakai untuk mempelajari ide interaksi dan struktur permainan, bukan menyalin aset, karakter, UI, kode, atau level aslinya. Konten doa dan ayat harus dicek sumbernya sebelum dipublikasikan.

## 3. Bentuk dunia

### Kamera dan tampilan
- Orientasi landscape 16:9 saat bermain di desktop/tablet; pada ponsel UI menyesuaikan layar.
- Kamera third-person dari belakang karakter, dengan sudut agak tinggi agar jalan dan objek mudah dilihat.
- Dunia 3D kartun/low-poly atau voxel sederhana; warna cerah, bentuk bersih, tekstur ringan.
- HUD minimal: nama area, tujuan aktif, ikon buku/doa, dan tombol jeda.
- Joystick virtual di kiri bawah; tombol interaksi/lompat di kanan bawah.
- Hindari minimap besar, banyak panel, efek cahaya berat, bayangan real-time berlebihan, dan terlalu banyak objek bergerak.

### Area dalam satu peta
1. **Rumah pemain** — bangun tidur, berpakaian, bercermin, makan, minum, masuk/keluar rumah, tidur.
2. **Jalan dan halte** — keluar rumah, naik kendaraan, bepergian, menjaga keselamatan.
3. **Taman kota** — melihat alam, hujan, angin, tumbuhan, hewan, dan belajar adab menjaga lingkungan.
4. **Warung/kantin** — doa sebelum dan sesudah makan/minum, adab makan, berbagi.
5. **Sekolah/perpustakaan** — belajar, kuis rukun iman/rukun Islam, tebak ayat, sambung ayat, tajwid.
6. **Masjid** — adab masuk masjid, wudhu, shalat sebagai materi edukasi, doa dan dzikir yang sesuai.
7. **Klinik/rumah tetangga** — menjenguk orang sakit, mendoakan orang lain, membantu tetangga.
8. **Lapangan atau taman bermain** — adab berteman, berkata baik, meminta maaf, dan bekerja sama.

Peta awal cukup memuat rumah, satu ruas jalan, taman, warung, sekolah, dan masjid. Area lain bisa ditambahkan setelah prototipe terasa menyenangkan.

## 4. Gameplay inti: Action → Doa → Pahami → Lanjut

Prinsip penting: **doa muncul karena konteks kejadian**, bukan dipaksa muncul tanpa alasan.

### Contoh alur
1. Pemain berjalan dari kamar menuju meja makan.
2. Pemain menekan tombol interaksi saat makanan tersedia.
3. Game menampilkan prompt: **“Mau mulai makan?”**
4. Kartu doa muncul dengan teks Arab, transliterasi, arti, dan tombol audio.
5. Pemain dapat mendengarkan, membaca, atau memilih “Lanjut”.
6. Setelah selesai, karakter makan dan aktivitas berlanjut.
7. Game memberi pengingat ringan atau poin pengetahuan; tidak menghukum pemain jika belum hafal.
8. Doa tersebut masuk ke **Buku Doa** sebagai materi yang pernah ditemui.

### Contoh kejadian dan doa
| Kejadian | Interaksi | Materi yang ditampilkan |
|---|---|---|
| Bangun tidur | Pemain bangun dari tempat tidur | Doa bangun tidur |
| Hendak makan | Interaksi dengan meja makan | Doa sebelum makan |
| Selesai makan | Interaksi setelah makan | Doa sesudah makan |
| Keluar rumah | Buka pintu dan melangkah keluar | Doa keluar rumah |
| Naik kendaraan | Interaksi dengan sepeda/mobil/bus | Doa naik kendaraan/bepergian |
| Masuk masjid | Dekati pintu masjid | Doa masuk masjid dan adabnya |
| Mulai wudhu | Interaksi di tempat wudhu | Panduan wudhu sesuai kurikulum yang ditinjau |
| Hujan turun | Pemain berada di luar saat cuaca berubah | Doa ketika hujan |
| Hujan reda | Cuaca berubah setelah hujan | Doa setelah hujan |
| Mendengar petir | Event cuaca dengan pilihan membuka kartu doa/dzikir | Bacaan terkait petir, setelah diverifikasi |
| Melihat teman sakit | Interaksi dengan NPC di klinik/rumah | Doa menjenguk orang sakit |
| Hendak belajar | Buka buku di meja belajar | Doa sebelum belajar, bila konten terverifikasi |
| Masuk kamar tidur | Interaksi dengan tempat tidur | Doa sebelum tidur |
| Bercermin/berpakaian | Interaksi dengan cermin/lemari | Doa terkait, jika tersedia pada sumber terpilih |

**Penting:** hujan dan cuaca adalah pemicu edukasi yang alami. Jangan menggambarkan doa sebagai “sihir” yang membuat cuaca berubah. Hujan terjadi sebagai bagian dari simulasi dunia; pemain belajar doa yang dianjurkan saat situasi tersebut.

## 5. Sistem doa

Setiap entri doa sebaiknya memiliki:
- ID tetap dan judul.
- Kategori dan situasi pemicu.
- Teks Arab yang telah diverifikasi.
- Transliterasi.
- Terjemahan/arti.
- Audio pelafalan jika tersedia dan sudah ditinjau.
- Sumber dan keterangan rujukan.
- Tingkat usia/bahasa yang sesuai.
- Status: belum ditemukan, pernah dipelajari, atau sudah dilatih.

Doa ditampilkan dalam kartu sederhana. Sediakan tombol **Dengarkan**, **Ulangi**, **Lihat Arti**, dan **Nanti Dulu**. Jangan mewajibkan pemain menjawab kuis setiap kali doa muncul.

Sumber konten awal: https://equran.id/doa. Simpan URL sumber pada data setiap doa bila halaman spesifik tersedia. Verifikasi teks Arab, transliterasi, arti, dan keterangan sumber secara manual sebelum rilis; jangan menganggap semua teks dari sumber mana pun otomatis bebas dari kesalahan.

## 6. Mini-game yang ada di dalam dunia

Semua mini-game dibuat pendek, sekitar 30 detik sampai 3 menit, dengan sistem skor dan komponen UI yang dapat dipakai ulang.

### A. Tebak Doa
- Pemain melihat situasi, misalnya hendak makan.
- Pilih doa yang sesuai dari 3–4 kartu.
- Setelah menjawab, tampilkan bacaan, arti, dan konteks.
- Logika: pilihan benar meningkatkan progres latihan; jawaban salah memberi penjelasan singkat dan kesempatan mencoba lagi.

### B. Tebak Ayat
- Tampilkan potongan ayat pendek yang kontennya telah diverifikasi.
- Pemain memilih nama surah, kelanjutan, atau arti yang benar sesuai mode.
- Gunakan materi yang sudah ditandai sesuai usia dan tingkat belajar.
- Jangan menampilkan potongan ayat tanpa konteks atau membuat teks ayat secara otomatis tanpa verifikasi.

### C. Sambung Ayat
- Tampilkan awal ayat dan beberapa pilihan kelanjutan.
- Untuk versi awal, gunakan surah pendek yang sudah ditentukan guru/penelaah.
- Jawaban benar memberi umpan balik dan audio bacaan jika tersedia.
- Tidak ada timer wajib; mode tantangan waktu hanya opsi tambahan.

### D. Petualang Tajwid
- Pemain menemukan papan, buku, atau NPC di sekolah/masjid.
- Tandai huruf atau bagian bacaan yang sesuai dengan materi tajwid yang sedang dipelajari.
- Gunakan warna bersama label/ikon agar informasi tidak hanya bergantung pada warna.
- Contoh materi: pengenalan nun sukun/tanwin atau mim sukun sesuai urutan kurikulum.
- Teks dan contoh bacaan harus ditinjau guru Al-Qur’an.

### E. Rukun Iman
- Susun enam kartu rukun iman ke urutan yang diminta atau cocokkan nama dengan penjelasan sederhana.
- Materi disampaikan singkat, sesuai usia, dan tidak membuat konsep akidah menjadi sekadar hadiah/kompetisi.

### F. Rukun Islam
- Susun lima rukun Islam atau cocokkan istilah dengan penjelasan.
- Bisa dibuka di perpustakaan, sekolah, atau masjid.

### G. Puzzle Hijaiyah
- Cocokkan huruf, nama, dan titik pembeda.
- Tingkat lanjut bisa menampilkan bentuk huruf bersambung setelah siswa memahami huruf dasar.

### H. Memori Kartu
- Balik kartu untuk mencocokkan doa dengan situasi, huruf dengan nama, atau istilah dengan arti.
- Gunakan jumlah kartu kecil agar cocok untuk anak-anak dan HP.

### I. Susun Kata Arab
- Susun potongan huruf menjadi kata sederhana yang sudah diperkenalkan.
- Jangan mencampur tingkat kesulitan terlalu tinggi pada tahap awal.

### J. Misi Adab
- NPC memberi situasi sehari-hari, misalnya teman butuh bantuan.
- Pemain memilih tindakan yang baik dari beberapa pilihan.
- Berikan penjelasan positif, bukan label keras seperti “anak buruk”.

## 7. Misi kecil di dunia

Misi tidak perlu panjang. Contoh:
- “Bantu siapkan meja makan.”
- “Keluar rumah dengan adab yang benar.”
- “Antarkan buku ke perpustakaan.”
- “Temui guru di sekolah untuk belajar tajwid.”
- “Kunjungi masjid dan pelajari adabnya.”
- “Temani teman yang sedang sakit.”
- “Cari tiga papan pengetahuan di taman.”
- “Buka Buku Doa dan ulangi satu doa yang pernah ditemukan.”

Hadiah: stiker, lencana, aksesori karakter sederhana, dekorasi kamar, atau halaman buku koleksi. Hindari loot box, transaksi acak, dan tekanan untuk bermain terus-menerus.

## 8. Flow keseluruhan

1. **Menu awal** — Lanjutkan, Jelajah Dunia, Buku Doa, Mini-game, Pengaturan.
2. **Masuk dunia** — karakter muncul di rumah.
3. **Eksplorasi bebas** — pemain bergerak ke lokasi yang terlihat dan berinteraksi dengan objek.
4. **Kejadian kontekstual** — aktivitas atau cuaca memicu kartu doa/adab yang relevan.
5. **Mini-game opsional** — papan atau NPC menawarkan tantangan pendek.
6. **Hadiah dan progres** — buku, lencana, dan misi diperbarui.
7. **Kembali bermain** — pemain bebas menjelajahi area berikutnya.
8. **Simpan otomatis** — progres penting tersimpan di perangkat.

## 9. Sistem teknis agar tetap ringan

- Prototipe menggunakan HTML, CSS, JavaScript, dan Three.js hanya untuk dunia 3D.
- Gunakan model low-poly sederhana dan material bersama.
- Batasi ukuran peta dan jumlah NPC.
- Gunakan satu peta kecil dengan beberapa area, bukan dunia terbuka tanpa batas.
- Mini-game berupa UI 2D di atas game, sehingga tidak membutuhkan scene 3D tersendiri.
- Simpan progres lokal pada MVP; sinkronisasi akun bisa menjadi tahap berikutnya.
- Muat audio hanya ketika diperlukan dan sediakan kontrol volume.
- HUD minimal: tujuan, ikon Buku Doa, interaksi, dan jeda.
- Pastikan tombol dan teks cukup besar untuk layar sentuh.

## 10. Prioritas pengerjaan

### Tahap 1 — Prototipe yang bisa dimainkan
- Rumah kecil, jalan, taman mini, warung, dan masjid.
- Karakter third-person, jalan/lari, interaksi dasar.
- Tiga konteks doa: bangun tidur, makan, dan keluar rumah.
- Buku Doa sederhana.
- Satu mini-game Tebak Doa.
- Penyimpanan lokal.

### Tahap 2 — Tambah variasi
- Cuaca hujan.
- Doa kendaraan, tidur, masuk masjid, dan situasi harian lainnya.
- Sekolah/perpustakaan dan mini-game Rukun Iman/Rukun Islam.
- Petualang Tajwid, Tebak Ayat, dan Sambung Ayat.

### Tahap 3 — Poles pengalaman
- Audio pelafalan terverifikasi.
- Animasi karakter dan interaksi lebih halus.
- Misi harian ringan, koleksi lencana, pengaturan aksesibilitas.
- Uji dengan anak/remaja dan pendamping/guru.

## 11. Hal yang sengaja tidak dibuat

- Tidak ada open world raksasa.
- Tidak ada multiplayer real-time pada MVP.
- Tidak ada pertarungan sebagai mekanik utama.
- Tidak ada crafting atau ekonomi rumit.
- Tidak ada 50 game yang semuanya dibangun sebagai aplikasi terpisah.
- Tidak ada hukuman besar ketika salah menjawab.
- Tidak ada klaim bahwa mengucapkan doa otomatis mengubah cuaca atau kejadian dunia.

## 12. Definisi keberhasilan

Prototipe pertama dianggap berhasil jika pemain dapat menjelajah satu area kecil, berinteraksi dengan beberapa objek, melihat doa yang cocok dengan situasi, membuka Buku Doa, memainkan satu mini-game, dan melanjutkan progres setelah browser ditutup dan dibuka kembali.

**Arah final:** satu dunia petualangan ringan + sistem Action → Doa → Pahami + kumpulan mini-game Islam yang singkat. Dunia memberi konteks; mini-game memperkuat ingatan.
