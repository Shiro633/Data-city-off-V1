/* ==========================================================================
   DATA CITY OFFICER: GUARDIANS OF DATA CITY
   Comprehensive 40 Educational Questions Bank
   4 Districts x 2 Levels x 5 Questions = 40 Questions
   ========================================================================== */

const QUESTIONS_DATA = [
  // =========================================================================
  // 1. HOSPITAL DISTRICT (Dr. Maya)
  // =========================================================================
  
  // Level 1: Pendaftaran Pasien Baru (Data Collection & Minimization)
  {
    id: 1,
    district: "hospital",
    level: 1,
    scenario: "Seorang pasien datang ke loket pendaftaran rawat jalan poli umum untuk berobat flu.",
    question: "Data pribadi mana di bawah ini yang TIDAK BOLEH diminta oleh petugas pendaftaran?",
    options: [
      "Nama Lengkap sesuai kartu identitas",
      "Nomor Induk Kependudukan (NIK)",
      "Kata Sandi (Password) Akun Media Sosial Pasien",
      "Tanggal Lahir dan Kontak Darurat"
    ],
    answer: 2,
    explanation: "Password media sosial sama sekali tidak memiliki korelasi dengan rekam medis atau pelayanan kesehatan. Meminta password melanggar prinsip minimisasi data dan menimbulkan risiko pencurian akun.",
    principle: "Data Minimization"
  },
  {
    id: 2,
    district: "hospital",
    level: 1,
    scenario: "Petugas administrasi mewajibkan pasien melampirkan slip gaji 3 bulan terakhir dan bukti rekening koran saat berobat demam.",
    question: "Apakah tindakan petugas administrasi ini dapat dibenarkan?",
    options: [
      "Dibenarkan agar rumah sakit tahu kondisi finansial pasien",
      "Tidak tepat, karena informasi riwayat perbankan tidak relevan untuk tujuan pengobatan",
      "Dibenarkan hanya jika pasien belum menikah",
      "Dibenarkan sebagai jaminan pembayaran tanpa persetujuan"
    ],
    answer: 1,
    explanation: "Data finansial pribadi yang berlebihan tidak boleh dikumpulkan untuk layanan medis umum tanpa dasar hukum atau tujuan spesifik. Pengumpulan data harus dibatasi hanya pada hal yang benar-benar esensial.",
    principle: "Purpose Limitation"
  },
  {
    id: 3,
    district: "hospital",
    level: 1,
    scenario: "Formulir pendaftaran fisik pasien berisi nama, alamat, riwayat penyakit, dan NIK dibiarkan tergeletak terbuka di atas meja resepsionis.",
    question: "Prinsip keamanan apa yang dilanggar dalam situasi di atas?",
    options: [
      "Prinsip Efisiensi Kerja Petugas",
      "Prinsip Keterbukaan Informasi Publik",
      "Prinsip Kerahasiaan (Confidentiality) dan Keamanan Fisik Dokumen",
      "Prinsip Kecepatan Pelayanan Rumah Sakit"
    ],
    answer: 2,
    explanation: "Dokumen yang memuat data pribadi sensitif (seperti kondisi kesehatan dan identitas) wajib dijaga dari pandangan orang lain yang tidak berwenang dengan menerapkan kebijakan Clear Desk Policy.",
    principle: "Privacy & Physical Security"
  },
  {
    id: 4,
    district: "hospital",
    level: 1,
    scenario: "Perusahaan asuransi meminta seluruh riwayat rekam medis pasien selama 10 tahun, padahal klaim yang diajukan hanya untuk perawatan radang tenggorokan akut.",
    question: "Bagaimana tindakan terbaik yang harus diambil oleh Data City Officer?",
    options: [
      "Menyerahkan seluruh rekam medis 10 tahun tanpa filter agar cepat cair",
      "Hanya memberikan ringkasan diagnosa dan catatan medis yang secara langsung relevan dengan klaim tersebut",
      "Menolak semua komunikasi dengan pihak asuransi",
      "Mengunggah seluruh berkas pasien ke platform penyimpanan publik"
    ],
    answer: 1,
    explanation: "Prinsip 'Need to Know' menyatakan bahwa pihak luar hanya boleh diberikan akses terhadap porsi data yang mutlak diperlukan untuk menyelesaikan tugas atau klaim spesifik tersebut.",
    principle: "Need to Know"
  },
  {
    id: 5,
    district: "hospital",
    level: 1,
    scenario: "Saat pasien menginstal aplikasi registrasi online rumah sakit, aplikasi meminta izin akses kamera, mikrofon, dan daftar kontak telepon.",
    question: "Mengapa izin akses tersebut menjadi ancaman bagi privasi pasien?",
    options: [
      "Karena aplikasi kesehatan hanya memerlukan akses data medis dan identitas dasar, bukan buku kontak pribadi pasien",
      "Karena ponsel pasien akan kehabisan baterai lebih cepat",
      "Karena rumah sakit tidak diperbolehkan memiliki aplikasi mobile",
      "Karena kontak telepon pasien otomatis terhapus jika aplikasi ditutup"
    ],
    answer: 0,
    explanation: "Aplikasi kesehatan harus mematuhi prinsip minimisasi hak akses perangkat (permission minimization). Meminta akses kontak dan mikrofon tanpa alasan fungsional medis yang jelas adalah praktik berisiko tinggi.",
    principle: "Data Minimization"
  },

  // Level 2: Perlindungan Data Pasien (Data Protection & Sharing)
  {
    id: 6,
    district: "hospital",
    level: 2,
    scenario: "Seorang dokter mengakses sistem Electronic Health Record (EHR) rumah sakit melalui laptop pribadi menggunakan Wi-Fi umum di kafe tanpa VPN.",
    question: "Apa risiko keamanan terbesar dari aktivitas tersebut?",
    options: [
      "File rekam medis otomatis terkonversi menjadi format PDF",
      "Koneksi jaringan kafe menjadi lebih lambat bagi pengunjung lain",
      "Data pasien dapat disadap dan dicuri oleh penyerang melalui serangan Man-in-the-Middle (MitM)",
      "Dokter tidak dapat memesan makanan di kafe tersebut"
    ],
    answer: 2,
    explanation: "Wi-Fi publik yang tidak terenkripsi sangat rentan terhadap sniffing dan serangan Man-in-the-Middle. Akses ke data pasien sensitif dari luar rumah sakit wajib menggunakan jalur terenkripsi (VPN aman) dan perangkat terverifikasi.",
    principle: "Encryption & Network Security"
  },
  {
    id: 7,
    district: "hospital",
    level: 2,
    scenario: "Rumah sakit menghadapi ancaman Ransomware yang dapat mengunci dan mengenkripsi seluruh database pasien.",
    question: "Langkah mitigasi preventif utama apa yang wajib diterapkan oleh tim IT rumah sakit?",
    options: [
      "Membayar uang tebusan segera kepada peretas melalui transfer bank",
      "Mematikan seluruh server selamanya dan kembali ke catatan kertas manual",
      "Melakukan pencadangan (backup) data berkala yang terenkripsi dan disimpan secara offline (air-gapped)",
      "Mengganti nama rumah sakit agar tidak dikenali oleh peretas"
    ],
    answer: 2,
    explanation: "Backup data berkala yang terisolasi secara offline (air-gapped backup) memastikan sistem dapat dipulihkan dengan cepat tanpa harus tunduk pada pemerasan peretas ransomware.",
    principle: "Ransomware Mitigation & Backup"
  },
  {
    id: 8,
    district: "hospital",
    level: 2,
    scenario: "Seorang perawat ingin membagikan foto rontgen kasus medis langka ke grup obrolan rekan dokter untuk tujuan studi edukasi.",
    question: "Prosedur apa yang WAJIB dilakukan sebelum gambar tersebut dibagikan?",
    options: [
      "Mengunggahnya langsung ke media sosial agar publik tahu",
      "Melakukan de-identifikasi atau anonimisasi dengan menghapus nama, NIK, dan elemen pengenal pasien pada rontgen",
      "Meminta bayaran dari anggota grup obrolan",
      "Menambahkan watermark nama perawat di atas wajah pasien"
    ],
    answer: 1,
    explanation: "Data medis untuk keperluan riset atau pembelajaran wajib di-anonimkan (de-identified) sehingga identitas pasien sama sekali tidak dapat dihubungkan kembali dengan catatan medisnya.",
    principle: "Anonymization & De-identification"
  },
  {
    id: 9,
    district: "hospital",
    level: 2,
    scenario: "Sistem rekam medis digital rumah sakit mencatat log riwayat setiap kali ada akun pengguna yang membuka, mengedit, atau mengunduh data pasien.",
    question: "Mengapa fitur Audit Log ini sangat krusial dalam keamanan data kesehatan?",
    options: [
      "Untuk memperlambat staf rumah sakit saat mencari berkas",
      "Untuk akuntabilitas dan mendeteksi akses tanpa hak atau kebocoran data dari pihak internal",
      "Sebagai tempat menyimpan cadangan password dokter dalam teks biasa",
      "Agar pasien dapat melihat dokter mana yang sedang istirahat"
    ],
    answer: 1,
    explanation: "Audit Log memberikan jejak audit digital (forensic trail) yang tidak dapat dimanipulasi, memungkinkan petugas keamanan mengidentifikasi siapa yang mengakses berkas pasien dan kapan akses tersebut terjadi.",
    principle: "Audit Log"
  },
  {
    id: 10,
    district: "hospital",
    level: 2,
    scenario: "Sebuah perusahaan farmasi menawarkan bantuan alat kesehatan gratis asalkan rumah sakit menyerahkan data kontak nomor telepon 5.000 pasien penyakit kronis.",
    question: "Bagaimana keputusan etis dan legal yang harus diambil oleh Data City Officer?",
    options: [
      "Menyetujui tawaran karena alat medis sangat dibutuhkan",
      "Menjual data tersebut dengan harga lebih tinggi kepada kompetitor",
      "Menolak tegas tawaran tersebut karena melanggar persetujuan (consent) dan aturan perlindungan data pribadi",
      "Menyerahkan data secara diam-diam tanpa memberi tahu direktur"
    ],
    answer: 2,
    explanation: "Data kesehatan dan kontak pasien adalah informasi rahasia. Membagikan atau menjual data tersebut kepada pihak ketiga untuk kepentingan komersial tanpa persetujuan eksplisit merupakan pelanggaran berat regulasi perlindungan data.",
    principle: "Consent & Data Sharing"
  },

  // =========================================================================
  // 2. E-SHOP DISTRICT (Alex)
  // =========================================================================
  
  // Level 1: Transaksi Pelanggan (Data Collection & Minimization)
  {
    id: 11,
    district: "eshop",
    level: 1,
    scenario: "Pelanggan melakukan pembayaran belanja online menggunakan kartu kredit di platform e-shop.",
    question: "Elemen data pembayaran kartu kredit mana yang TIDAK BOLEH disimpan secara permanen di server toko online?",
    options: [
      "Nama pemegang kartu",
      "Kode keamanan verifikasi kartu 3-4 digit (CVV/CVC)",
      "Tanggal kedaluwarsa kartu (Bulan/Tahun)",
      "4 digit terakhir nomor kartu untuk bukti transaksi"
    ],
    answer: 1,
    explanation: "Standar global keamanan data pembayaran (PCI-DSS) melarang keras penyimpanan nilai verifikasi kartu (CVV/CVC) setelah proses otorisasi pembayaran selesai guna mencegah penyalahgunaan saat server diretas.",
    principle: "Data Minimization & PCI-DSS"
  },
  {
    id: 12,
    district: "eshop",
    level: 1,
    scenario: "Seorang pembeli memesan baju kaus polos seharga Rp 75.000 di toko online.",
    question: "Mengapa e-shop TIDAK PERLU meminta foto selfie memegang e-KTP dari pembeli tersebut?",
    options: [
      "Karena foto selfie hanya boleh diambil di studio foto",
      "Karena kartu identitas resmi berlebihan dan tidak proporsional untuk pembelian barang kebutuhan ritel umum",
      "Karena e-KTP tidak memiliki nilai hukum di internet",
      "Karena sistem e-shop tidak memiliki ruang penyimpanan untuk foto"
    ],
    answer: 1,
    explanation: "Prinsip proporsionalitas dan minimisasi data menuntut bahwa pengumpulan data identitas tinggi (seperti foto KTP) hanya dibenarkan pada layanan khusus (misal perbankan/fintech KYC), bukan belanja pakaian kasual.",
    principle: "Data Minimization"
  },
  {
    id: 13,
    district: "eshop",
    level: 1,
    scenario: "Pada formulir registrasi akun toko online, kotak centang 'Saya setuju membagikan data belanja saya kepada 100 mitra iklan pihak ketiga' sudah tercentang otomatis (pre-ticked).",
    question: "Praktik ini tergolong pelanggaran privasi apa dan bagaimana perbaikan yang benar?",
    options: [
      "Ini adalah praktik normal yang disarankan semua platform",
      "Ini adalah Dark Pattern; persetujuan (consent) harus bersifat aktif, sukarela, dan un-checked secara default",
      "Ini disebut enkripsi data otomatis yang aman",
      "Pengguna harus membayar biaya tambahan jika membatalkan centang"
    ],
    answer: 1,
    explanation: "Persetujuan pemrosesan data (Consent) menurut UU PDP dan GDPR harus diberikan secara eksplisit dan sukarela. Penggunaan kotak centang bawaan yang sudah tercentang (dark patterns) dianggap tidak sah.",
    principle: "Consent"
  },
  {
    id: 14,
    district: "eshop",
    level: 1,
    scenario: "Aplikasi e-commerce meminta izin pelacakan lokasi GPS akurat setiap 10 detik, padahal pengguna hanya mencari resep masakan di blog platform.",
    question: "Apa rekomendasi terbaik dari Data City Officer kepada pengembang aplikasi?",
    options: [
      "Mengubah pencarian menjadi berbasis kota atau input teks alamat manual tanpa pelacakan lokasi latar belakang konstan",
      "Menambah izin pelacakan riwayat panggilan telepon",
      "Memaksa pengguna mengaktifkan GPS sepanjang waktu agar diskon aktif",
      "Mengirim koordinat pengguna ke grup perpesanan publik"
    ],
    answer: 0,
    explanation: "Pelacakan koordinat GPS real-time secara terus-menerus adalah invasi privasi yang berat jika fungsionalitas aplikasi tidak membutuhkannya. Cukup gunakan input lokasi manual atau perkiraan area umum.",
    principle: "Privacy by Design"
  },
  {
    id: 15,
    district: "eshop",
    level: 1,
    scenario: "Seorang pelanggan memutuskan untuk menutup akunnya dan meminta agar seluruh histori penelusuran serta data profilnya dihapus bersih dari sistem.",
    question: "Hak perlindungan data pribadi apa yang sedang diajukan oleh pelanggan tersebut?",
    options: [
      "Hak Mendapatkan Diskon Seumur Hidup",
      "Hak untuk Dihapus / Pemusnahan Data Pribadi (Right to Erasure)",
      "Hak Memperbanyak Lisensi Aplikasi",
      "Hak Mengubah Algoritma Rekomendasi Toko"
    ],
    answer: 1,
    explanation: "Right to Erasure (Hak Penghapusan) memberikan hak kepada pemilik data untuk meminta pengelola data menghapus informasi pribadinya apabila data tersebut tidak lagi dibutuhkan untuk tujuan awal atau izinnya ditarik kembali.",
    principle: "Right to Erasure"
  },

  // Level 2: Menghadapi Ancaman Siber (Data Protection & Sharing)
  {
    id: 16,
    district: "eshop",
    level: 2,
    scenario: "Saat mengakses halaman login admin e-shop, URL browser menunjukkan 'http://' tanpa ikon gembok aman (tanpa SSL/TLS).",
    question: "Apa bahaya utama mengirimkan kata sandi admin melalui protokol HTTP biasa?",
    options: [
      "Kecepatan website menjadi terlalu tinggi sehingga browser mogok",
      "Data kata sandi dikirim dalam teks polos dan dapat disadap oleh siapa saja di jalur jaringan (packet sniffing)",
      "Akun admin otomatis mendapatkan saldo belanja gratis",
      "Tampilan layar komputer berubah menjadi monokrom hitam putih"
    ],
    answer: 1,
    explanation: "Protokol HTTPS mengenkripsi seluruh komunikasi antara browser dan server. Tanpa HTTPS, kredensial login dan nomor kartu kredit dikirim dalam format plain text yang sangat mudah dibaca peretas jaringan.",
    principle: "HTTPS & Encryption"
  },
  {
    id: 17,
    district: "eshop",
    level: 2,
    scenario: "Seorang penyerang memasukkan teks '' OR '1'='1' ke dalam kolom input pencarian barang e-shop dan berhasil melihat seluruh database pelanggan.",
    question: "Jenis serangan keamanan apa yang berhasil dieksploitasi oleh penyerang tersebut?",
    options: [
      "Phishing Email",
      "Distributed Denial of Service (DDoS)",
      "SQL Injection (SQLi)",
      "Bluetooth Hijacking"
    ],
    answer: 2,
    explanation: "SQL Injection terjadi saat input pengguna tidak disaring (sanitized) dan langsung dieksekusi sebagai query basis data, memungkinkan penyerang memanipulasi logika query untuk mengekstrak data sensitif.",
    principle: "SQL Injection Prevention"
  },
  {
    id: 18,
    district: "eshop",
    level: 2,
    scenario: "Untuk melindungi akun penjual dari pengambilalihan (account takeover) akibat kata sandi yang bocor di internet, fitur apa yang paling esensial diaktifkan?",
    question: "Fitur keamanan apa yang paling efektif untuk mencegah pengambilalihan akun penjual?",
    options: [
      "Autentikasi Dua Faktor (Two-Factor Authentication / 2FA)",
      "Mengganti warna latar belakang halaman toko",
      "Membuat password yang sama dengan tanggal lahir",
      "Menonaktifkan notifikasi email"
    ],
    answer: 0,
    explanation: "2FA menambahkan lapisan pertahanan kedua (seperti kode OTP atau kunci keamanan fisik). Meskipun password berhasil ditebak peretas, akun tetap aman karena peretas tidak memiliki faktor verifikasi kedua.",
    principle: "2FA & Authentication"
  },
  {
    id: 19,
    district: "eshop",
    level: 2,
    scenario: "Manajer e-shop menerima email mengatasnamakan bank mitra dengan pesan 'Akun pembayaran ditutup dalam 1 jam! Segera verifikasi password di link ini!'.",
    question: "Apa karakteristik utama dari serangan Phishing berbasis rekayasa sosial (social engineering) ini?",
    options: [
      "Pemberitahuan resmi yang selalu dikirim pada jam kerja",
      "Menciptakan kepanikan palsu (sense of urgency) dan mengarahkan ke situs tiruan untuk menjebak kredensial",
      "Pesan yang meminta pengguna menghapus antivirus mereka",
      "Email yang otomatis memperbaiki bug pada komputer penerima"
    ],
    answer: 1,
    explanation: "Ciri khas serangan phishing adalah manipulasi psikologis berupa urgensi waktu palsu dan ancaman instan agar korban panik lalu memasukkan kredensial rahasia di portal tiruan buatan penyerang.",
    principle: "Phishing Awareness"
  },
  {
    id: 20,
    district: "eshop",
    level: 2,
    scenario: "Sistem pendeteksi intrusi e-shop mendeteksi 10.000 percobaan login per menit terhadap akun kasir menggunakan daftar kombinasi kata sandi otomatis.",
    question: "Serangan siber apa yang sedang terjadi dan bagaimana cara mitigasinya?",
    options: [
      "Serangan Brute Force; mitigasi dengan menerapkan Rate Limiting dan penguncian akun sementara (Account Lockout)",
      "Serangan Phishing; mitigasi dengan mencetak kartu nama baru",
      "Serangan Ransomware; mitigasi dengan menghapus semua foto barang",
      "Serangan Man-in-the-Middle; mitigasi dengan mematikan monitor kasir"
    ],
    answer: 0,
    explanation: "Brute Force / Credential Stuffing mencoba ribuan kombinasi password secara bertubi-tubi. Solusinya adalah membatasi laju percobaan (rate limiting), CAPTCHA, dan penguncian sementara akun setelah beberapa kali gagal.",
    principle: "Access Control & Rate Limiting"
  },

  // =========================================================================
  // 3. SCHOOL DISTRICT (Ms. Rina)
  // =========================================================================
  
  // Level 1: Pendaftaran Siswa Baru (Data Collection & Minimization)
  {
    id: 21,
    district: "school",
    level: 1,
    scenario: "Formulir Pendaftaran Peserta Didik Baru (PPDB) memuat pertanyaan mengenai afiliasi partai politik orang tua dan pandangan keagamaan mendalam.",
    question: "Apakah pihak sekolah berhak mengumpulkan informasi tersebut dari calon siswa?",
    options: [
      "Berhak, agar guru tahu bagaimana cara mengajar siswa",
      "Tidak boleh, karena preferensi politik dan keyakinan adalah data sensitif yang tidak relevan dengan tujuan pendidikan formal",
      "Boleh asalkan dicatat dalam buku tulis biasa",
      "Boleh hanya jika siswa berprestasi di bidang olahraga"
    ],
    answer: 1,
    explanation: "Opini politik dan rincian keyakinan pribadi termasuk dalam kategori 'Data Pribadi Spesifik/Sensitif'. Sekolah tidak memiliki dasar hukum atau kepentingan operasional yang sah untuk mengumpulkannya.",
    principle: "Sensitive Data Protection"
  },
  {
    id: 22,
    district: "school",
    level: 1,
    scenario: "Sekolah memerlukan verifikasi usia dan identitas hukum siswa untuk pendaftaran ujian nasional.",
    question: "Dokumen mana yang paling proporsional dan minim risiko untuk diminta salinannya?",
    options: [
      "Buku tabungan bank dan pinjaman online orang tua",
      "Salinan Akta Kelahiran dan Kartu Keluarga tanpa data finansial tambahan",
      "Riwayat percakapan WhatsApp pribadi orang tua",
      "Hasil tes DNA lengkap seluruh anggota keluarga"
    ],
    answer: 1,
    explanation: "Akta Kelahiran dan KK adalah dokumen resmi yang sah dan memadai untuk verifikasi kependudukan siswa tanpa perlu mengumpulkan riwayat finansial keluarga.",
    principle: "Data Minimization"
  },
  {
    id: 23,
    district: "school",
    level: 1,
    scenario: "Kepala sekolah berencana memasang sistem absensi pemindaian wajah biometrik (facial recognition AI) untuk siswa sekolah dasar.",
    question: "Syarat utama apa yang wajib dipenuhi sebelum sistem biometrik ini diterapkan?",
    options: [
      "Cukup membeli kamera dari toko elektronik terdekat",
      "Persetujuan eksplisit tertulis dari orang tua/wali serta evaluasi dampak perlindungan data (DPIA)",
      "Tidak perlu persetujuan karena anak-anak wajib menaati peraturan sekolah",
      "Memberikan hadiah permen kepada siswa yang wajahnya terdeteksi"
    ],
    answer: 1,
    explanation: "Data biometrik anak adalah data sensitif permanen berisiko tinggi. Implementasinya wajib mengantongi izin sah dari orang tua/wali (parental consent) serta mekanisme penyimpanan template enkripsi yang ketat.",
    principle: "Biometric Data & Consent"
  },
  {
    id: 24,
    district: "school",
    level: 1,
    scenario: "Seorang siswa memiliki kondisi medis khusus (alergi kacang parah dan asma akut).",
    question: "Siapa pihak di sekolah yang berhak memiliki akses terhadap data catatan medis tersebut?",
    options: [
      "Seluruh siswa di kelas agar mereka bisa saling mengejek",
      "Hanya petugas UKS, wali kelas terkait, dan staf tanggap darurat (prinsip Need-to-Know)",
      "Penjaga kantin dan tukang fotokopi di luar sekolah",
      "Dipajang di papan pengumuman lobi utama sekolah"
    ],
    answer: 1,
    explanation: "Informasi kesehatan siswa harus dikelola dengan prinsip Need-to-Know: hanya personel yang bertanggung jawab langsung atas keselamatan siswa dalam situasi darurat yang berhak mengakses catatan tersebut.",
    principle: "Need to Know"
  },
  {
    id: 25,
    district: "school",
    level: 1,
    scenario: "Sekolah ingin menggunakan foto wajah jelas siswa berprestasi untuk dipasang di baliho reklame komersial pinggir jalan raya, namun orang tua menolak izinnya.",
    question: "Bagaimana tindakan yang wajib diambil oleh pihak sekolah?",
    options: [
      "Tetap memasang baliho karena siswa adalah murid sekolah tersebut",
      "Menghormati penolakan orang tua dan tidak mempublikasikan identitas serta foto anak tersebut",
      "Memberikan sanksi penurunan nilai akademik kepada siswa",
      "Mengunggah foto siswa ke forum internet tanpa nama"
    ],
    answer: 1,
    explanation: "Hak privasi anak dilindungi oleh undang-undang. Penggunaan citra anak untuk kepentingan promosi eksternal mutlak memerlukan persetujuan orang tua; jika ditolak, sekolah wajib menghormatinya.",
    principle: "Child Privacy & Consent"
  },

  // Level 2: Melindungi Data Sekolah (Data Protection & Sharing)
  {
    id: 26,
    district: "school",
    level: 2,
    scenario: "Staf administrasi sekolah mengunggah berkas Excel berisi daftar nilai rapor, NIK, dan alamat rumah seluruh siswa ke Google Drive dengan setelan akses 'Anyone with the link can view'.",
    question: "Tindakan mitigasi darurat apa yang harus segera dilakukan?",
    options: [
      "Menghapus seluruh file rapor siswa dan membuat rapor baru dari ingatan",
      "Segera mengubah izin akses menjadi Restricted/Private dan hanya mengizinkan akun resmi staf pengajar yang relevan",
      "Membiarkannya agar orang tua bisa mengecek nilai dari mana saja",
      "Mengirimkan link berkas tersebut ke media sosial"
    ],
    answer: 1,
    explanation: "Menyebarkan berkas berisi NIK dan alamat anak ke publik adalah pelanggaran keamanan data parah. Izin berkas penyimpanan awan harus dikunci secara ketat dan diaudit hak aksesnya.",
    principle: "Access Control & Cloud Security"
  },
  {
    id: 27,
    district: "school",
    level: 2,
    scenario: "Seorang guru menerima kiriman email dari alamat tak dikenal dengan lampiran bernama 'Silabus_Ujian_Nasional.pdf.exe'.",
    question: "Apa indikasi bahaya dari file tersebut dan apa yang harus dilakukan?",
    options: [
      "File aman karena berakhiran .pdf, langsung klik dua kali untuk membukanya",
      "Itu adalah file program yang dapat mengeksekusi malware/trojan yang menyamar sebagai dokumen; jangan buka dan laporkan ke tim IT",
      "File itu adalah kuis rahasia dari dinas pendidikan",
      "Ubah nama file menjadi .mp3 agar bisa didengarkan"
    ],
    answer: 1,
    explanation: "Ekstensi ganda seperti '.pdf.exe' adalah taktik umum peretas untuk mengelabui pengguna agar mengeksekusi program jahat (malware) yang berakibat pada pencurian data komputer sekolah.",
    principle: "Malware & Phishing Defense"
  },
  {
    id: 28,
    district: "school",
    level: 2,
    scenario: "Seluruh komputer di laboratorium komputer sekolah menggunakan satu akun bersama bernama 'admin' dengan kata sandi 'sekolah123'.",
    question: "Apa celah kelemahan terbesar dari konfigurasi akun bersama seperti ini?",
    options: [
      "Komputer menjadi lebih lambat menyala di pagi hari",
      "Hilangnya akuntabilitas individu dan tidak mungkin melacak siapa yang melakukan modifikasi, infeksi malware, atau penyalahgunaan data",
      "Biaya listrik lab komputer meningkat dua kali lipat",
      "Keyboard komputer lebih cepat kotor"
    ],
    answer: 1,
    explanation: "Prinsip akuntabilitas mengharuskan setiap pengguna memiliki identitas login terpisah (individual account). Penggunaan password bersama membuat penyelidikan insiden keamanan menjadi mustahil ditelusuri pelakunya.",
    principle: "Access Control & Accountability"
  },
  {
    id: 29,
    district: "school",
    level: 2,
    scenario: "Sebuah bimbingan belajar swasta meminta daftar nomor WhatsApp dan email 1.000 siswa sekolah untuk keperluan promosi program berbayar.",
    question: "Bagaimana sikap sekolah yang patuh terhadap prinsip perlindungan data pribadi?",
    options: [
      "Memberikan nomor kontak asalkan bimbel memberi komisi kepada staf",
      "Menolak memberikan kontak siswa kepada pihak ketiga tanpa persetujuan eksplisit tertulis dari orang tua/wali siswa",
      "Menyerahkan kontak siswa yang nilainya rendah saja",
      "Memajang nomor kontak siswa di papan pengumuman gerbang sekolah"
    ],
    answer: 1,
    explanation: "Membagikan data kontak anak kepada pihak ketiga untuk kepentingan pemasaran komersial tanpa dasar persetujuan eksplisit melanggar UU Perlindungan Data Pribadi.",
    principle: "Data Sharing & Third-Party Risk"
  },
  {
    id: 30,
    district: "school",
    level: 2,
    scenario: "Sekolah berencana membuang atau menjual 10 unit komputer lama yang sebelumnya menyimpan arsip data siswa dan guru.",
    question: "Prosedur apa yang wajib dilakukan terhadap media penyimpanan (harddisk) sebelum perangkat dilepas?",
    options: [
      "Cukup memindahkan file ke Recycle Bin dan mengosongkannya",
      "Melakukan sanitasi data menyeluruh (data wiping dengan penulisan ulang sektor / degaussing) atau penghancuran fisik",
      "Mengubah nama folder menjadi 'KOSONG'",
      "Mencabut kabel power komputer saja"
    ],
    answer: 1,
    explanation: "Menghapus file secara biasa di komputer hanya menghapus penunjuk file, datanya masih dapat dipulihkan dengan software recovery. Sanitasi data permanen (wiping/shredding) wajib dilakukan sebelum hardware dibuang.",
    principle: "Data Disposal & Lifecycle"
  },

  // =========================================================================
  // 4. RESTAURANT DISTRICT (Chef Budi)
  // =========================================================================
  
  // Level 1: Program Loyalitas Pelanggan (Data Collection & Minimization)
  {
    id: 31,
    district: "restaurant",
    level: 1,
    scenario: "Restoran membuat program kartu member loyalitas untuk mengumpulkan poin makan siang.",
    question: "Data pribadi apa yang CUKUP dan proporsional untuk dikumpulkan dari pelanggan?",
    options: [
      "Nomor Paspor dan Kartu Keluarga lengkap",
      "Nama panggilan dan nomor kontak (ponsel/email) untuk verifikasi poin dan info promo",
      "Slip gaji bulanan dan bukti kepemilikan rumah",
      "Riwayat penyakit turunan dan golongan darah"
    ],
    answer: 1,
    explanation: "Untuk program loyalitas restoran makan, hanya diperlukan kontak dasar untuk mengidentifikasi akun pelanggan dan mengirimkan notifikasi voucher diskon. Mengumpulkan NIK atau slip gaji jelas berlebihan.",
    principle: "Data Minimization"
  },
  {
    id: 32,
    district: "restaurant",
    level: 1,
    scenario: "Aplikasi pesan makanan berbasis QR-Code di atas meja restoran meminta izin mengakses riwayat penelusuran internet dan mikrofon ponsel tamu.",
    question: "Bagaimana penilaian Data City Officer terhadap aplikasi pemesanan tersebut?",
    options: [
      "Aplikasi sangat hebat karena bisa mendengar obrolan pelanggan",
      "Permintaan izin tersebut melanggar privasi karena tidak ada relevansinya dengan memilih menu makanan dan memesan hidangan",
      "Izin tersebut wajar agar makanan tidak cepat dingin",
      "Pengunjung restoran wajib memberikan izin agar mendapat sendok dan garpu"
    ],
    answer: 1,
    explanation: "Aplikasi pemesanan menu restoran hanya memerlukan akses koneksi data/tampilan menu. Mengakses riwayat browser dan mikrofon melanggar prinsip keabsahan dan keterbatasan tujuan pemrosesan data.",
    principle: "Privacy by Design"
  },
  {
    id: 33,
    district: "restaurant",
    level: 1,
    scenario: "Seorang kasir mencatat nomor kartu debit 16 digit dan masa berlaku kartu pelanggan pada buku catatan kertas di samping mesin EDC.",
    question: "Mengapa tindakan kasir tersebut sangat berbahaya?",
    options: [
      "Karena tulisan tangan kasir mungkin sulit dibaca oleh manajer",
      "Catatan fisik kartu perbankan sangat rentan disalin, difoto, atau disalahgunakan oleh siapa pun untuk transaksi ilegal online",
      "Karena kertas kasir mudah basah terkena kuah sop",
      "Karena mesin EDC akan mogok jika kasir memegang pulpen"
    ],
    answer: 1,
    explanation: "Mencatat nomor kartu pembayaran di atas kertas melanggar standar keamanan pembayaran dan membuka celah penipuan finansial serta pencurian identitas rekening nasabah.",
    principle: "Payment Security & Handling"
  },
  {
    id: 34,
    district: "restaurant",
    level: 1,
    scenario: "Pelanggan merasa terganggu karena menerima 5 pesan SMS promosi diskon setiap hari dari restoran dan ingin berhenti menerima pesan tersebut.",
    question: "Fasilitas apa yang wajib disediakan oleh restoran dalam setiap pesan promosi?",
    options: [
      "Mekanisme berhenti berlangganan (Unsubscribe/Opt-Out) yang mudah, jelas, dan tanpa biaya tambahan",
      "Nomor rekening untuk membayar biaya pembatalan SMS",
      "Tautan survei 50 pertanyaan sebelum pesan dihentikan",
      "Peringatan bahwa pelanggan tidak boleh makan di restoran lagi jika berhenti langganan"
    ],
    answer: 0,
    explanation: "Regulasi privasi mewajibkan setiap komunikasi pemasaran langsung menyertakan mekanisme Opt-Out / Unsubscribe yang mudah diakses kapan saja oleh pelanggan tanpa syarat memberatkan.",
    principle: "Consent & Right to Object"
  },
  {
    id: 35,
    district: "restaurant",
    level: 1,
    scenario: "Sebuah agensi telemarketing menawarkan kerja sama untuk membeli seluruh basis data nomor telepon tamu restoran Chef Budi.",
    question: "Sebelum membagikan data pelanggan ke pihak eksternal, apa syarat mutlak yang harus dipenuhi?",
    options: [
      "Cukup memberi tahu koki di dapur",
      "Memastikan adanya dasar persetujuan eksplisit (opt-in consent) dari setiap pelanggan yang datanya akan dibagikan",
      "Meminta bayaran tunai tanpa kuitansi",
      "Mengganti format nomor telepon dari 08 menjadi +62"
    ],
    answer: 1,
    explanation: "Data pribadi pelanggan yang dikumpulkan untuk reservasi restoran tidak boleh dialihkan atau dijual ke agensi pemasaran pihak ketiga tanpa persetujuan tegas dan transparan dari para pelanggan.",
    principle: "Consent & Data Sharing"
  },

  // Level 2: Keamanan Jaringan Restoran (Data Protection & Sharing)
  {
    id: 36,
    district: "restaurant",
    level: 2,
    scenario: "Restoran menyediakan fasilitas Free Wi-Fi untuk pelanggan yang datang makan.",
    question: "Bagaimana konfigurasi jaringan yang benar untuk mengamankan mesin kasir (POS) dan data transaksi?",
    options: [
      "Menghubungkan mesin kasir dan ponsel seluruh pelanggan ke dalam satu jaringan Wi-Fi yang sama tanpa password",
      "Memisahkan jaringan Wi-Fi untuk tamu (Guest Wi-Fi) dan jaringan internal mesin kasir menggunakan VLAN atau router terpisah",
      "Menonaktifkan password router agar tamu tidak perlu bertanya ke pelayan",
      "Mengubah nama Wi-Fi restoran menjadi nama samaran"
    ],
    answer: 1,
    explanation: "Segmentasi jaringan (Network Segmentation) wajib diterapkan. Jaringan publik untuk tamu harus diisolasi dari jaringan internal operasional restoran agar transaksi kasir tidak dapat disusupi peretas.",
    principle: "Network Segmentation"
  },
  {
    id: 37,
    district: "restaurant",
    level: 2,
    scenario: "Router Wi-Fi utama restoran masih menggunakan username 'admin' dan password default pabrik 'admin123'.",
    question: "Apa risiko terbesar dari kelalaian pengaturan kata sandi bawaan pabrik ini?",
    options: [
      "Lampu indikator router akan berkedip lebih cepat",
      "Penyerang di restoran dapat dengan mudah mengambil alih router, mengubah DNS, dan mengarahkan tamu ke halaman phishing (DNS Hijacking)",
      "Piring di meja kasir lebih mudah pecah",
      "Sinyal Wi-Fi hanya bisa ditangkap oleh laptop bermerek mahal"
    ],
    answer: 1,
    explanation: "Kredensial bawaan pabrik (default credentials) sudah diketahui secara publik oleh seluruh peretas. Mengganti kata sandi router dengan password yang kuat dan unik adalah pertahanan dasar jaringan.",
    principle: "Default Credential Security"
  },
  {
    id: 38,
    district: "restaurant",
    level: 2,
    scenario: "Sistem Point of Sales (POS) restoran mengirimkan rekapitulasi data penjualan harian ke server cloud perusahaan.",
    question: "Mekanisme keamanan apa yang wajib aktif saat data transaksi dikirim melalui jaringan internet?",
    options: [
      "Protokol Enkripsi End-to-End dalam transit menggunakan TLS/HTTPS modern",
      "Mengirim data melalui SMS biasa tanpa sandi",
      "Mengurangi ukuran font tulisan kasir",
      "Mengirim data hanya saat jam restoran tutup"
    ],
    answer: 0,
    explanation: "Enkripsi dalam transit (In-Transit Encryption) via protokol TLS/HTTPS melindungi aliran data dari intersepsi di jalur kabel atau frekuensi internet antara mesin kasir dan server cloud.",
    principle: "In-Transit Encryption"
  },
  {
    id: 39,
    district: "restaurant",
    level: 2,
    scenario: "Kasir meninggalkan tablet kasir berisi data kontak pelanggan dan rekap penjualan dalam keadaan menyala tanpa PIN pengunci saat pergi ke toilet selama 15 menit.",
    question: "Prinsip keamanan apa yang diabaikan oleh kasir tersebut?",
    options: [
      "Prinsip Kebersihan Dapur",
      "Prinsip Clear Screen Policy (Kunci Layar Otomatis saat Ditinggalkan)",
      "Prinsip Desain Grafis UI",
      "Prinsip Kecepatan Memasak Koki"
    ],
    answer: 1,
    explanation: "Kebijakan Clear Screen and Auto-lock mewajibkan setiap perangkat kerja yang memuat data operasional untuk dikunci secara otomatis atau manual saat ditinggalkan oleh staf guna mencegah akses fisik ilegal.",
    principle: "Physical Security & Screen Lock"
  },
  {
    id: 40,
    district: "restaurant",
    level: 2,
    scenario: "Restoran menemukan bukti bahwa akun cloud admin telah diretas dan data 2.000 member bocor ke forum peretas gelap.",
    question: "Menurut standar regulasi perlindungan data pribadi, apa respons pertama yang paling bertanggung jawab?",
    options: [
      "Menyembunyikan kabar tersebut dari publik dan berpura-pura tidak terjadi apa-apa",
      "Segera mengisolasi akun yang disusupi, melakukan audit investigasi, serta memberikan notifikasi resmi kepada pihak berwenang dan pelanggan terdampak",
      "Menghapus seluruh website restoran dan menyalahkan penyedia internet",
      "Mengirimkan voucher diskon palsu kepada peretas"
    ],
    answer: 1,
    explanation: "Regulasi perlindungan data pribadi (termasuk UU PDP Indonesia) mewajibkan pengendali data memberitahukan insiden kegagalan perlindungan data kepada otoritas terkait dan pemilik data maksimal 3 x 24 jam dengan langkah mitigasi konkret.",
    principle: "Incident Response & Breach Notification"
  }
];

const ADDITIONAL_QUESTION_BANKS = [
  {
    district: "hospital",
    level: 1,
    distractors: [
      "Meminta seluruh informasi pasien tanpa membatasi tujuan",
      "Mengumpulkan data tambahan untuk berjaga-jaga tanpa alasan",
      "Menyimpan data selamanya dan membagikannya kepada semua staf"
    ],
    questions: [
      ["Pasien anak datang untuk pemeriksaan rutin dan didampingi orang tuanya.", "Data apa yang sebaiknya diminta untuk memastikan identitas pasien anak?", "Nama dan tanggal lahir pasien serta identitas wali yang diperlukan untuk persetujuan layanan.", "Identitas pasien dan wali secukupnya mendukung pencocokan rekam medis dan persetujuan.", "Data Minimization"],
      ["Formulir klinik meminta golongan darah meski pasien hanya membuat janji konsultasi umum.", "Apa langkah yang sesuai dengan prinsip minimisasi data?", "Tanyakan hanya jika ada tujuan klinis atau administratif yang jelas dan relevan.", "Informasi yang tidak diperlukan untuk membuat janji tidak perlu dikumpulkan.", "Data Minimization"],
      ["Pasien mengisi alamat email untuk menerima konfirmasi janji temu.", "Bagaimana alamat email tersebut seharusnya digunakan?", "Gunakan untuk konfirmasi janji sesuai tujuan yang dijelaskan kepada pasien.", "Penggunaan data harus dibatasi pada tujuan yang diberitahukan.", "Purpose Limitation"],
      ["Petugas meminta nomor identitas setiap anggota keluarga pasien dewasa yang datang sendiri.", "Apakah permintaan tersebut diperlukan untuk pendaftaran pasien?", "Tidak, kecuali ada kebutuhan layanan khusus yang sah dan dijelaskan.", "Data anggota keluarga tidak relevan untuk pendaftaran pasien dewasa.", "Data Minimization"],
      ["Rumah sakit ingin mengetahui apakah pasien setuju menerima informasi promosi.", "Bagaimana persetujuan untuk promosi sebaiknya dikumpulkan?", "Pisahkan persetujuan promosi dari persetujuan layanan kesehatan.", "Persetujuan harus spesifik dan tidak menjadi syarat layanan yang berbeda.", "Consent & Purpose Limitation"],
      ["Pasien meminta salinan data yang sebelumnya dimasukkan ke formulir pendaftaran.", "Apa praktik yang membantu pasien memeriksa ketepatan datanya?", "Sediakan cara yang aman untuk melihat dan mengoreksi data identitasnya.", "Kesempatan koreksi membantu menjaga akurasi data pasien.", "Data Accuracy"],
      ["Petugas ingin menyalin nomor identitas pasien ke papan antrean yang terlihat pengunjung.", "Informasi apa yang sebaiknya tampil pada papan antrean?", "Nomor antrean atau pengenal samaran yang tidak mengungkap identitas pasien.", "Papan yang terlihat umum tidak seharusnya memaparkan identitas pasien.", "Confidentiality"],
      ["Pasien menolak memberikan data yang tidak wajib untuk konsultasi.", "Bagaimana petugas seharusnya menangani penolakan tersebut?", "Jelaskan data yang benar-benar diperlukan dan jangan memaksa untuk data opsional.", "Kebutuhan data harus dijelaskan dan data opsional tidak boleh dipaksakan.", "Transparency & Data Minimization"],
      ["Formulir baru meminta foto KTP pasien untuk konsultasi yang bisa diverifikasi dengan nomor identitas.", "Apa yang perlu dipertimbangkan sebelum menyimpan foto KTP?", "Pastikan foto benar-benar diperlukan; pilih verifikasi yang lebih minim bila memadai.", "Salinan identitas memuat lebih banyak informasi daripada nomor yang diverifikasi.", "Data Minimization"],
      ["Rumah sakit meminta nomor telepon pasien untuk memberi kabar perubahan jadwal.", "Apakah nomor telepon boleh dipakai untuk mengirim iklan produk?", "Tidak tanpa tujuan dan persetujuan promosi yang terpisah.", "Nomor yang dikumpulkan untuk pelayanan tidak otomatis boleh dipakai untuk iklan.", "Purpose Limitation"],
      ["Formulir meminta pekerjaan dan penghasilan pasien untuk layanan rawat jalan biasa.", "Bagaimana petugas menilai apakah data tersebut patut diminta?", "Tentukan kebutuhan spesifiknya dan hapus kolom bila tidak relevan dengan layanan.", "Setiap kolom harus memiliki tujuan yang relevan dan dapat dijelaskan.", "Data Minimization"],
      ["Pasien salah mengetik tanggal lahir pada formulir pendaftaran.", "Tindakan apa yang paling tepat sebelum data dipakai?", "Konfirmasi kepada pasien lalu koreksi data pada sistem sumber.", "Data identitas perlu diverifikasi dan diperbaiki secara akurat.", "Data Accuracy"],
      ["Petugas pendaftaran membuat catatan medis sementara pada kertas saat sistem lambat.", "Bagaimana catatan sementara itu harus ditangani?", "Batasi isi pada kebutuhan layanan, lindungi dari pandangan, lalu masukkan dan musnahkan dengan aman.", "Catatan sementara tetap mengandung data pribadi dan harus dilindungi.", "Data Minimization & Secure Disposal"],
      ["Pasien meminta agar informasi diagnosisnya tidak disebut keras di ruang tunggu.", "Apa penyesuaian sederhana yang melindungi privasi pasien?", "Gunakan komunikasi pribadi dan panggil pasien dengan nomor antrean.", "Menghindari pengumuman diagnosis mencegah pengungkapan kepada pengunjung.", "Confidentiality"],
      ["Aplikasi pendaftaran meminta lokasi presisi terus-menerus meski hanya untuk memilih jadwal.", "Apa yang sebaiknya dilakukan pengelola aplikasi?", "Hapus izin lokasi yang tidak diperlukan untuk fungsi pendaftaran.", "Izin perangkat harus sepadan dengan fungsi layanan.", "Permission Minimization"]
    ]
  },
  {
    district: "hospital",
    level: 2,
    distractors: [
      "Gunakan akun bersama dan matikan pencatatan aktivitas",
      "Kirim seluruh rekam medis melalui jaringan publik tanpa enkripsi",
      "Abaikan permintaan karena semua data medis bebas dibagikan"
    ],
    questions: [
      ["Dokter perlu membuka rekam medis pasien dari luar rumah sakit.", "Langkah apa yang melindungi akses jarak jauh tersebut?", "Gunakan VPN atau akses tepercaya, autentikasi kuat, dan perangkat yang dikelola.", "Koneksi aman dan autentikasi kuat mengurangi risiko penyadapan dan penyalahgunaan.", "Secure Remote Access"],
      ["Staf pindah unit tetapi akun lamanya masih memiliki akses ke semua rekam medis.", "Apa tindakan pengelola akses yang benar?", "Tinjau ulang dan sesuaikan hak akses sesuai tugas barunya.", "Hak akses perlu mengikuti peran kerja terkini.", "Least Privilege"],
      ["Sebuah laboratorium meminta hasil pasien untuk pemeriksaan lanjutan.", "Apa yang perlu diverifikasi sebelum data dikirim?", "Pastikan dasar dan tujuan permintaan, lalu kirim hanya data yang dibutuhkan melalui kanal aman.", "Pembagian data perlu sah, terbatas, dan terlindungi.", "Secure Data Sharing"],
      ["Rumah sakit akan mengganti komputer yang menyimpan data pasien.", "Bagaimana data pada perangkat lama sebaiknya ditangani?", "Hapus atau musnahkan media secara aman dan dokumentasikan prosesnya.", "Penghapusan aman mencegah pemulihan data setelah perangkat dilepas.", "Secure Disposal"],
      ["Seorang pegawai menerima tautan tak dikenal yang mengaku berisi hasil pasien.", "Apa respons pertama yang aman?", "Jangan membuka tautan; laporkan pesan sebagai dugaan phishing ke tim keamanan.", "Pelaporan cepat membantu mencegah pencurian kredensial atau infeksi.", "Phishing Response"],
      ["Administrator ingin mengetahui siapa yang melihat rekam medis pasien tertentu.", "Fitur apa yang harus tersedia pada sistem EHR?", "Audit log yang mencatat identitas pengguna, waktu, dan aktivitas akses.", "Log yang dapat ditinjau mendukung deteksi akses tidak sah.", "Audit Logging"],
      ["Rumah sakit mengirim data rujukan ke klinik mitra.", "Bagaimana data perlu dilindungi saat berpindah melalui internet?", "Enkripsi data dalam transit dengan protokol TLS pada kanal terverifikasi.", "Enkripsi transit mengurangi risiko pembacaan data saat dikirim.", "Encryption in Transit"],
      ["Perangkat staf hilang dan diketahui menyimpan data pasien lokal.", "Apa tindakan segera yang tepat?", "Laporkan insiden, cabut sesi atau kredensial, dan lakukan penghapusan jarak jauh bila tersedia.", "Pembatasan akses segera mengurangi dampak kehilangan perangkat.", "Incident Response"],
      ["Seorang pegawai meminta akses permanen ke seluruh rekam medis untuk berjaga-jaga.", "Bagaimana permintaan akses tersebut sebaiknya dinilai?", "Berikan akses minimum sesuai tugas dan batasi durasi bila kebutuhannya sementara.", "Akses luas tanpa kebutuhan melanggar prinsip least privilege.", "Least Privilege"],
      ["Basis data rekam medis dicadangkan untuk pemulihan bencana.", "Apa kontrol penting untuk salinan cadangan?", "Enkripsi dan batasi aksesnya, serta uji pemulihan secara berkala.", "Cadangan harus terlindungi dan terbukti dapat dipulihkan.", "Backup Security"],
      ["Staf membicarakan kondisi pasien di lift yang digunakan umum.", "Apa praktik yang seharusnya diterapkan?", "Bahas informasi pasien hanya di ruang privat dengan pihak yang berwenang.", "Percakapan di area umum dapat mengungkap data kepada pihak lain.", "Confidentiality"],
      ["Pihak asuransi meminta informasi tambahan yang tidak terkait klaim pasien.", "Apa batas pembagian data yang tepat?", "Batasi jawaban pada informasi yang relevan dan memiliki dasar pengungkapan.", "Permintaan pihak ketiga bukan izin untuk membuka seluruh rekam medis.", "Data Minimization"],
      ["Terdapat indikasi ransomware mengenkripsi server rekam medis.", "Apa prioritas respons teknis awal?", "Isolasi sistem terdampak dan aktifkan prosedur tanggap insiden serta pemulihan.", "Isolasi membatasi penyebaran sambil menjaga bukti untuk investigasi.", "Ransomware Response"],
      ["Perawat menggunakan kata sandi yang sama untuk EHR dan akun pribadinya.", "Apa perbaikan yang paling tepat?", "Gunakan kata sandi unik dan kuat serta aktifkan autentikasi multifaktor.", "Kredensial unik dan MFA mengurangi dampak kebocoran kata sandi.", "Authentication"],
      ["Vendor aplikasi meminta salinan data pasien untuk menguji fitur baru.", "Apa pendekatan yang lebih aman untuk pengujian?", "Gunakan data sintetis atau anonim; bila tidak memungkinkan, minimalkan dan lindungi data uji.", "Data nyata tidak seharusnya dipakai untuk pengujian tanpa kebutuhan dan perlindungan.", "Privacy by Design"]
    ]
  },
  {
    district: "eshop",
    level: 1,
    distractors: [
      "Simpan CVV dan kata sandi pelanggan untuk transaksi berikutnya",
      "Minta semua data pembayaran meskipun tidak dibutuhkan",
      "Bagikan data checkout kepada mitra tanpa memberi tahu pelanggan"
    ],
    questions: [
      ["Pelanggan membeli barang tanpa membuat akun di toko daring.", "Data apa yang perlu dikumpulkan untuk menyelesaikan pesanan?", "Data kontak, alamat pengiriman, dan informasi pembayaran yang diperlukan untuk transaksi.", "Checkout hanya membutuhkan data yang diperlukan untuk pemrosesan dan pengiriman.", "Data Minimization"],
      ["Formulir checkout meminta tanggal lahir untuk pembelian barang rumah tangga.", "Apa tindakan yang sesuai?", "Hapus kolom tanggal lahir bila tidak ada kebutuhan hukum atau layanan yang jelas.", "Tanggal lahir tidak diperlukan untuk sebagian besar transaksi barang umum.", "Data Minimization"],
      ["Pelanggan memilih menerima kabar diskon setelah bertransaksi.", "Bagaimana pilihan berlangganan promosi seharusnya ditampilkan?", "Sediakan pilihan terpisah, sukarela, dan tidak dicentang otomatis.", "Persetujuan promosi harus jelas dan tidak digabung dengan pembelian.", "Consent"],
      ["Toko meminta kode keamanan kartu setelah pembayaran berhasil diproses.", "Bagaimana data CVV seharusnya ditangani?", "Jangan simpan CVV setelah otorisasi pembayaran selesai.", "Standar pembayaran melarang penyimpanan CVV pascaotorisasi.", "Payment Data Security"],
      ["Pelanggan ingin menyimpan metode pembayaran untuk pembelian berikutnya.", "Apa cara yang tepat untuk mendukung fitur ini?", "Gunakan token dari penyedia pembayaran dan jangan simpan nomor kartu mentah.", "Tokenisasi mengurangi paparan data kartu di sistem toko.", "Tokenization"],
      ["Pelanggan mengisi nomor telepon untuk menerima kabar pengiriman.", "Bolehkah nomor tersebut dipakai untuk pemasaran SMS?", "Hanya jika pelanggan menyetujui tujuan pemasaran secara terpisah.", "Tujuan pengiriman berbeda dari tujuan pemasaran.", "Purpose Limitation"],
      ["Toko ingin menampilkan ulasan pembeli beserta nama lengkap dan alamatnya.", "Informasi apa yang sebaiknya ditampilkan pada ulasan publik?", "Nama samaran atau nama tampilan yang dipilih pelanggan tanpa alamat pribadi.", "Ulasan publik tidak memerlukan alamat dan identitas lengkap pembeli.", "Privacy by Design"],
      ["Pelanggan bertanya bagaimana cara menghapus akun dan data yang tidak lagi diperlukan.", "Bagaimana toko sebaiknya merespons?", "Sediakan proses penghapusan yang jelas dengan pengecualian retensi yang diwajibkan hukum.", "Pelanggan perlu mendapat jalur yang jelas untuk mengelola data mereka.", "Data Retention"],
      ["Situs mengisi kotak persetujuan berbagi data secara otomatis.", "Apa perubahan yang menghormati pilihan pelanggan?", "Jadikan persetujuan opsional tidak terpilih sampai pelanggan memilihnya.", "Pilihan aktif harus berasal dari tindakan yang jelas, bukan pilihan bawaan tersembunyi.", "Consent"],
      ["Toko meminta nomor identitas nasional untuk mengirim aksesori biasa.", "Apakah pengumpulan itu proporsional?", "Tidak, kecuali ada kewajiban atau kebutuhan transaksi spesifik yang dapat dijelaskan.", "Nomor identitas sensitif dan biasanya tidak diperlukan untuk pesanan biasa.", "Data Minimization"],
      ["Alamat pelanggan digunakan untuk memperkirakan biaya pengiriman.", "Bagaimana toko seharusnya menjelaskan penggunaan alamat itu?", "Jelaskan bahwa alamat dipakai untuk pengiriman dan perhitungan ongkos kirim.", "Pemberitahuan yang transparan menjelaskan tujuan sebelum data digunakan.", "Transparency"],
      ["Pelanggan ingin memperbaiki alamat email yang salah pada akun.", "Fitur apa yang membantu menjaga data akun tetap akurat?", "Berikan mekanisme aman untuk memperbarui dan memverifikasi alamat email.", "Pembaruan dan verifikasi membantu menjaga akurasi kontak.", "Data Accuracy"],
      ["Layanan analitik pihak ketiga meminta seluruh riwayat pembelian individual.", "Apa langkah sebelum data diberikan?", "Tinjau kebutuhan, dasar pemrosesan, dan batasi atau agregasikan data yang dibagikan.", "Analitik tidak otomatis membenarkan pembagian seluruh data identitas.", "Third-Party Sharing"],
      ["Toko menyimpan alamat pengiriman lama bertahun-tahun setelah transaksi selesai.", "Apa kebijakan retensi yang lebih tepat?", "Tetapkan masa simpan sesuai tujuan dan kewajiban, lalu hapus data saat tak diperlukan.", "Retensi harus memiliki batas sesuai tujuan dan kewajiban yang berlaku.", "Data Retention"],
      ["Pelanggan menggunakan komputer umum untuk checkout.", "Apa desain checkout yang mengurangi risiko paparan data?", "Hindari menyimpan detail sensitif di browser dan sediakan opsi keluar serta hapus sesi.", "Perangkat bersama memerlukan perlindungan agar data tidak tertinggal.", "Privacy by Design"]
    ]
  },
  {
    district: "eshop",
    level: 2,
    distractors: [
      "Menonaktifkan kontrol keamanan agar transaksi lebih cepat",
      "Mengirim kata sandi admin melalui pesan grup",
      "Membiarkan semua pegawai memakai akun administrator yang sama"
    ],
    questions: [
      ["Kolom pencarian produk mengirim masukan pengguna langsung ke kueri basis data.", "Kontrol apa yang mencegah injeksi SQL?", "Gunakan kueri berparameter dan validasi masukan sesuai tipe yang diharapkan.", "Parameterisasi mencegah masukan dianggap sebagai bagian dari perintah SQL.", "SQL Injection Prevention"],
      ["Sebuah akun pelanggan menerima ratusan percobaan kata sandi dalam waktu singkat.", "Kontrol apa yang membantu menghambat serangan brute force?", "Pembatasan laju percobaan, jeda bertahap, dan pemantauan aktivitas mencurigakan.", "Kontrol laju menahan percobaan berulang tanpa mengekspos kredensial.", "Brute Force Protection"],
      ["Pengelola toko menerima email mendesak yang meminta kata sandi panel admin.", "Bagaimana permintaan itu seharusnya ditangani?", "Verifikasi melalui kanal resmi dan jangan pernah mengirim kata sandi lewat email.", "Phishing sering menyamar sebagai permintaan mendesak untuk mencuri kredensial.", "Phishing Prevention"],
      ["Halaman checkout masih dapat dibuka menggunakan HTTP.", "Apa perbaikan yang melindungi data selama sesi pelanggan?", "Terapkan HTTPS/TLS untuk seluruh situs dan alihkan HTTP ke HTTPS.", "TLS melindungi data yang dikirim antara browser dan layanan.", "HTTPS"],
      ["Pengembang menemukan kata sandi basis data tertulis di berkas sumber yang dipublikasikan.", "Apa tindakan yang harus segera dilakukan?", "Cabut dan rotasi kredensial, lalu simpan rahasia di pengelola rahasia.", "Rahasia yang terekspos harus dianggap telah diketahui pihak lain.", "Secrets Management"],
      ["Situs memakai pustaka pembayaran yang memiliki kerentanan kritis.", "Bagaimana tim e-commerce memelihara pustaka pembayaran yang rentan?", "Perbarui ke versi aman setelah pengujian dan pantau advisori keamanan.", "Pembaruan terverifikasi menutup kerentanan yang diketahui.", "Vulnerability Management"],
      ["Log aplikasi mencatat nomor kartu lengkap untuk memudahkan debugging.", "Apa yang perlu dilakukan pada pencatatan tersebut?", "Hentikan pencatatan data kartu dan redaksi data sensitif dari log.", "Log operasional tidak boleh menjadi salinan baru data pembayaran sensitif.", "Secure Logging"],
      ["Pegawai layanan pelanggan membutuhkan akses untuk memeriksa status pesanan.", "Bagaimana hak akses akun pegawai sebaiknya diberikan?", "Berikan peran terbatas pada status pesanan dan catat setiap akses.", "Peran terbatas sesuai tugas mengurangi risiko penyalahgunaan.", "Least Privilege"],
      ["Akun admin toko hanya dilindungi kata sandi.", "Kontrol autentikasi tambahan apa yang disarankan?", "Aktifkan autentikasi multifaktor untuk semua akun administratif.", "MFA menambah lapisan perlindungan bila kata sandi dicuri.", "Multi-Factor Authentication"],
      ["Tim menerima laporan halaman pembayaran palsu yang meniru toko.", "Apa yang harus dilakukan tim terlebih dahulu?", "Verifikasi laporan, amankan domain dan akun terkait, lalu beri tahu penyedia dan pelanggan berisiko.", "Respons terkoordinasi membatasi penipuan dan dampak terhadap pelanggan.", "Incident Response"],
      ["Server toko menyimpan data transaksi yang tidak lagi diperlukan.", "Apa kontrol yang mengurangi dampak kebocoran di masa depan?", "Hapus data sesuai jadwal retensi dan minimalkan data yang disimpan.", "Data yang tidak disimpan tidak dapat ikut terungkap dalam kebocoran.", "Data Retention"],
      ["Toko memproses pembayaran melalui penyedia eksternal.", "Bagaimana koneksi integrasi API sebaiknya diamankan?", "Autentikasi API dengan rahasia unik, TLS, dan hak akses minimum.", "Integrasi juga memerlukan autentikasi kuat dan kanal terenkripsi.", "API Security"],
      ["Akun admin mengunduh data pelanggan dalam jumlah tidak biasa pada malam hari.", "Apa mekanisme yang membantu menemukan aktivitas seperti ini?", "Pemantauan anomali dan peringatan audit untuk pola akses tidak wajar.", "Deteksi aktivitas membantu menemukan insiden sebelum dampaknya membesar.", "Security Monitoring"],
      ["Cadangan basis data toko berada di bucket cloud yang dapat diakses publik.", "Apa tindakan konfigurasi yang benar?", "Batasi akses bucket ke identitas tepercaya dan enkripsi cadangannya.", "Cadangan harus privat dan terlindungi seperti data produksi.", "Cloud Security"],
      ["Tim menemukan kerentanan XSS pada halaman ulasan produk.", "Kontrol apa yang mencegah skrip pengguna dijalankan di browser?", "Lakukan output encoding sesuai konteks dan sanitasi HTML yang diizinkan.", "Encoding keluaran mencegah masukan pengguna menjadi kode yang dapat dijalankan.", "XSS Prevention"]
    ]
  },
  {
    district: "school",
    level: 1,
    distractors: [
      "Publikasikan data siswa agar mudah diakses semua orang",
      "Kumpulkan biometrik seluruh keluarga tanpa tujuan",
      "Anggap data anak tidak memerlukan perlindungan khusus"
    ],
    questions: [
      ["Sekolah mendaftarkan siswa baru untuk mengikuti kelas.", "Data apa yang seharusnya diprioritaskan pada formulir awal?", "Identitas siswa dan kontak wali yang diperlukan untuk administrasi serta keselamatan.", "Pengumpulan terbatas pada kebutuhan pendidikan dan keselamatan siswa.", "Data Minimization"],
      ["Formulir pendaftaran meminta agama dan kondisi kesehatan seluruh anggota keluarga.", "Apa prinsip yang sebaiknya dipakai untuk menilai kolom tersebut?", "Minta hanya data sensitif yang benar-benar diperlukan, dengan dasar dan perlindungan memadai.", "Data sensitif memerlukan kebutuhan yang jelas dan penanganan lebih ketat.", "Sensitive Data"],
      ["Aplikasi kelas meminta akses kontak dan mikrofon setiap saat.", "Apa tindakan sekolah sebelum menyetujui aplikasi itu?", "Tinjau izin berdasarkan fungsi belajar dan tolak akses yang tidak diperlukan.", "Izin harus proporsional terhadap fungsi aplikasi pendidikan.", "Permission Minimization"],
      ["Sekolah ingin mengunggah foto siswa ke media sosial resmi.", "Apa langkah privasi sebelum publikasi foto?", "Periksa persetujuan yang sesuai dan gunakan pilihan privasi bagi siswa yang tidak menyetujui.", "Foto siswa dapat mengidentifikasi anak dan perlu ditangani dengan persetujuan yang tepat.", "Consent & Child Privacy"],
      ["Rapor siswa dipasang di papan pengumuman koridor.", "Bagaimana hasil belajar sebaiknya disampaikan?", "Sampaikan secara pribadi melalui kanal yang hanya dapat diakses siswa dan wali berwenang.", "Rapor adalah data pribadi dan bukan informasi untuk dipajang umum.", "Confidentiality"],
      ["Guru hendak mengirim daftar nilai melalui grup percakapan kelas.", "Cara apa yang lebih aman untuk menyampaikan nilai?", "Kirim nilai secara individual melalui sistem sekolah yang terautentikasi.", "Pengiriman individual mencegah siswa lain melihat nilai temannya.", "Secure Data Sharing"],
      ["Sekolah meminta sidik jari untuk meminjam buku perpustakaan.", "Apa pilihan yang lebih minim risiko jika tersedia?", "Gunakan kartu anggota atau nomor siswa yang memadai untuk peminjaman.", "Biometrik bersifat sensitif dan sebaiknya tidak dipakai bila alternatif cukup.", "Data Minimization"],
      ["Wali siswa meminta salinan data identitas anak yang tersimpan.", "Apa respons sekolah yang tepat?", "Verifikasi kewenangan wali, lalu sediakan akses melalui kanal yang aman.", "Akses data anak memerlukan verifikasi pihak yang berwenang dan perlindungan.", "Access Rights"],
      ["Sekolah meminta informasi kesehatan siswa untuk perjalanan lapangan.", "Bagaimana data kesehatan seharusnya dikumpulkan?", "Kumpulkan hanya informasi darurat yang relevan, jelaskan penggunaannya, dan batasi penerima.", "Data kesehatan hanya perlu dibagikan kepada staf yang menangani keselamatan.", "Sensitive Data"],
      ["Kolom tanggal lahir siswa dipakai untuk memastikan batas usia program.", "Bagaimana sekolah menjaga data itu tetap akurat?", "Verifikasi tanggal lahir dengan dokumen yang sesuai dan sediakan proses koreksi.", "Data akurat membantu keputusan program dan layanan sekolah.", "Data Accuracy"],
      ["Sekolah memakai nomor telepon wali untuk pemberitahuan darurat.", "Apakah nomor tersebut boleh dipakai untuk promosi sponsor?", "Tidak tanpa pemberitahuan dan persetujuan terpisah untuk tujuan promosi.", "Data kontak darurat dikumpulkan untuk tujuan yang berbeda dari pemasaran.", "Purpose Limitation"],
      ["Sekolah mengumpulkan alamat rumah lengkap padahal layanan hanya berupa buletin digital.", "Bagaimana formulir perlu disesuaikan?", "Hapus alamat rumah jika tidak diperlukan untuk mengirim buletin.", "Alamat fisik tidak dibutuhkan untuk layanan yang sepenuhnya digital.", "Data Minimization"],
      ["Siswa meminta nama panggilan digunakan saat dipanggil di kelas.", "Apa pendekatan yang menghormati privasi dan kebutuhan siswa?", "Catat preferensi yang relevan secara terbatas dan bagikan hanya kepada staf terkait.", "Informasi preferensi perlu digunakan secara terbatas dan sesuai kebutuhan.", "Purpose Limitation"],
      ["Sekolah ingin membagikan daftar peserta lomba kepada penyelenggara eksternal.", "Data apa yang sebaiknya dikirim?", "Hanya data pendaftaran yang diminta dan diperlukan penyelenggara.", "Penyelenggara tidak memerlukan seluruh berkas siswa.", "Data Minimization"],
      ["Formulir siswa mencantumkan akun media sosial pribadi sebagai syarat wajib.", "Bagaimana sekolah sebaiknya menangani permintaan akun media sosial pribadi siswa?", "Jadikan opsional atau hapus jika akun itu tidak diperlukan untuk pendidikan.", "Akun pribadi tidak relevan sebagai syarat umum pendaftaran siswa.", "Data Minimization"]
    ]
  },
  {
    district: "school",
    level: 2,
    distractors: [
      "Bagikan kredensial admin kepada seluruh tenaga pengajar",
      "Biarkan tautan data siswa terbuka untuk siapa saja",
      "Hapus bukti insiden sebelum melakukan pemeriksaan"
    ],
    questions: [
      ["Guru menerima email yang meminta masuk ke portal sekolah melalui tautan baru.", "Apa langkah yang membantu menghindari phishing?", "Periksa alamat pengirim dan buka portal melalui alamat resmi yang sudah diketahui.", "Memeriksa domain melalui kanal tepercaya membantu menghindari situs tiruan.", "Phishing Prevention"],
      ["Akun administrator portal sekolah menggunakan kata sandi yang sama selama bertahun-tahun.", "Apa tindakan pengamanan yang tepat?", "Ganti dengan kredensial unik yang kuat, aktifkan MFA, dan tinjau sesi aktif.", "Kredensial yang kuat dan MFA mengurangi risiko pengambilalihan akun.", "Authentication"],
      ["Berkas rapor disimpan di folder cloud dengan tautan publik.", "Bagaimana izin folder harus diperbaiki?", "Matikan akses publik dan berikan akses hanya kepada staf serta wali yang berwenang.", "Tautan publik memungkinkan pihak tak berwenang melihat data pendidikan.", "Cloud Access Control"],
      ["Sekolah menggunakan komputer laboratorium bersama untuk mengakses data siswa.", "Apa yang harus dilakukan setelah sesi kerja selesai?", "Keluar dari akun dan pastikan data lokal maupun unduhan tidak tertinggal.", "Perangkat bersama dapat mengekspos data bila sesi tetap terbuka.", "Endpoint Security"],
      ["Laptop guru berisi data siswa dicuri saat perjalanan.", "Apa yang perlu dilakukan segera?", "Laporkan insiden, cabut akses akun, dan jalankan penghapusan jarak jauh bila tersedia.", "Tindakan cepat membatasi akses terhadap data pada perangkat hilang.", "Incident Response"],
      ["Penyedia aplikasi pendidikan meminta salinan penuh basis data sekolah.", "Apa yang harus dilakukan sebelum menyetujui permintaan vendor?", "Tinjau tujuan, kontrak, kontrol keamanan, dan minimalkan data yang dibagikan.", "Vendor harus memiliki kebutuhan dan perlindungan yang dapat diverifikasi.", "Vendor Risk Management"],
      ["Sekolah mendaur ulang hard disk lama yang berisi arsip siswa.", "Apa prosedur yang tepat sebelum perangkat dilepas?", "Hapus data secara aman atau hancurkan media, lalu catat hasil verifikasinya.", "Format biasa tidak menjamin data tidak dapat dipulihkan.", "Secure Disposal"],
      ["Akun staf yang sudah berhenti bekerja masih aktif di sistem sekolah.", "Kontrol apa yang mencegah akses sisa tersebut?", "Cabut akun dan token akses segera saat hubungan kerja berakhir.", "Akun lama dapat disalahgunakan jika tidak dinonaktifkan.", "Identity Lifecycle"],
      ["Sistem sekolah mencatat kata sandi siswa dalam log kesalahan.", "Apa perbaikan yang diperlukan?", "Hapus atau redaksi kredensial dari log dan batasi akses ke log yang tersimpan.", "Log kesalahan tidak boleh menyimpan rahasia autentikasi.", "Secure Logging"],
      ["Tim TI perlu menguji pembaruan sistem rapor.", "Data apa yang sebaiknya digunakan dalam lingkungan uji?", "Data sintetis atau anonim yang tidak mengungkap identitas siswa.", "Lingkungan uji sebaiknya tidak menyalin data pribadi produksi.", "Privacy by Design"],
      ["Sekolah menerima laporan bahwa hasil ujian dapat dilihat oleh siswa lain.", "Apa langkah respons pertama?", "Batasi akses yang terbuka, simpan bukti, dan mulai investigasi insiden.", "Penutupan paparan dan pelestarian bukti perlu dilakukan segera.", "Incident Response"],
      ["Akun guru memiliki izin mengubah seluruh data administrasi sekolah.", "Bagaimana akses sebaiknya disesuaikan?", "Batasi izin berdasarkan peran guru dan pisahkan hak administrasi.", "Pembatasan peran mengurangi risiko perubahan data yang tidak disengaja.", "Least Privilege"],
      ["Server sekolah dicadangkan ke layanan cloud pihak ketiga.", "Kontrol apa yang wajib diterapkan pada cadangan?", "Enkripsi cadangan, batasi akses, dan uji pemulihan secara berkala.", "Cadangan menyimpan data sensitif dan harus aman serta dapat dipulihkan.", "Backup Security"],
      ["Sistem mendeteksi unduhan data siswa dalam jumlah besar di luar jam kerja.", "Apa praktik yang mendukung deteksi dan investigasi?", "Buat peringatan berdasarkan pola akses dan tinjau audit log pengguna.", "Pemantauan dan log membantu mengenali serta menelusuri perilaku tidak wajar.", "Security Monitoring"],
      ["Mantan vendor masih memiliki kunci API untuk mengakses portal nilai.", "Apa tindakan yang harus dilakukan sekolah?", "Cabut kunci vendor yang tidak lagi diperlukan dan tinjau aktivitas sebelumnya.", "Kredensial pihak ketiga yang usang harus dicabut untuk menutup akses.", "Credential Management"]
    ]
  },
  {
    district: "restaurant",
    level: 1,
    distractors: [
      "Tambahkan semua pengunjung ke daftar pemasaran tanpa pilihan",
      "Simpan data pelanggan tanpa batas meski sudah tidak digunakan",
      "Minta data identitas sensitif untuk setiap pemesanan meja"
    ],
    questions: [
      ["Restoran membuat kartu loyalitas untuk memberi poin pada pelanggan.", "Data apa yang cukup untuk mengelola kartu tersebut?", "Pengenal akun dan kontak yang dipilih pelanggan serta catatan poin.", "Data program loyalitas harus dibatasi pada identitas akun dan transaksi poin.", "Data Minimization"],
      ["Pelanggan memesan meja melalui telepon dan hanya membutuhkan konfirmasi.", "Apakah tanggal lahir perlu diminta?", "Tidak, kecuali pelanggan meminta layanan khusus yang benar-benar memerlukannya.", "Tanggal lahir tidak diperlukan untuk mengonfirmasi reservasi biasa.", "Data Minimization"],
      ["Aplikasi restoran ingin mengakses lokasi pelanggan meski pemesanan dilakukan manual.", "Apa pengaturan privasi yang tepat?", "Jangan meminta lokasi bila pemesanan dapat berfungsi tanpa data tersebut.", "Izin lokasi harus dibutuhkan oleh fitur, bukan sekadar dikumpulkan.", "Permission Minimization"],
      ["Pelanggan mendaftar poin dan menerima kotak pilihan promosi melalui SMS.", "Bagaimana pilihan itu seharusnya diatur?", "Biarkan tidak terpilih sampai pelanggan secara aktif menyetujuinya.", "Persetujuan pemasaran harus bersifat sukarela dan eksplisit.", "Consent"],
      ["Staf ingin menampilkan nomor telepon pelanggan pada layar dapur.", "Data apa yang cukup terlihat oleh staf dapur?", "Nomor pesanan dan detail hidangan yang diperlukan untuk menyiapkan pesanan.", "Dapur tidak memerlukan nomor kontak untuk menyiapkan makanan.", "Least Privilege"],
      ["Pelanggan meminta berhenti menerima pesan promosi restoran.", "Apa yang perlu disediakan oleh sistem pemasaran?", "Mekanisme berhenti berlangganan yang mudah dan segera diterapkan.", "Permintaan opt-out harus dihormati tanpa hambatan.", "Marketing Preferences"],
      ["Restoran meminta alamat rumah lengkap untuk pelanggan yang makan di tempat.", "Apa praktik pengumpulan yang tepat?", "Jangan kumpulkan alamat rumah bila tidak diperlukan untuk layanan yang dipilih.", "Layanan makan di tempat tidak memerlukan alamat pengiriman.", "Data Minimization"],
      ["Pelanggan mengisi nama dan alergi untuk meminta penyesuaian hidangan.", "Bagaimana informasi alergi perlu ditangani?", "Gunakan hanya untuk menyiapkan makanan dengan aman dan batasi kepada staf terkait.", "Alergi dapat mengungkap informasi kesehatan dan harus dibatasi penggunaannya.", "Sensitive Data"],
      ["Restoran mengambil foto pelanggan untuk materi promosi.", "Apa yang harus dilakukan sebelum foto dipublikasikan?", "Minta persetujuan yang jelas dan hormati penolakan pelanggan.", "Publikasi foto untuk promosi memerlukan persetujuan yang sesuai.", "Consent"],
      ["Nomor telepon pelanggan salah tercatat pada akun loyalitas.", "Apa langkah yang menjaga akurasi data?", "Verifikasi nomor dengan pelanggan dan sediakan cara memperbaruinya.", "Kontak yang akurat mencegah pesan salah kirim.", "Data Accuracy"],
      ["Penyedia reservasi meminta daftar pelanggan untuk menawarkan layanan lain.", "Apa yang sebaiknya dilakukan restoran?", "Jangan bagikan untuk tujuan baru tanpa pemberitahuan dan dasar yang sesuai.", "Data reservasi tidak otomatis boleh digunakan pihak lain untuk pemasaran.", "Third-Party Sharing"],
      ["Pelanggan ingin menghapus akun loyalitasnya.", "Bagaimana restoran menangani data akun yang tidak lagi diperlukan?", "Hapus atau anonimisasi data sesuai kebijakan retensi dan kewajiban yang berlaku.", "Data tidak perlu disimpan tanpa tujuan yang masih berlaku.", "Data Retention"],
      ["Struk pesanan menampilkan nama lengkap dan nomor telepon pelanggan.", "Informasi apa yang sebaiknya dicetak pada struk biasa?", "Nomor transaksi dan rincian pembelian tanpa kontak pribadi yang tidak diperlukan.", "Struk dapat tertinggal dan sebaiknya meminimalkan data pelanggan.", "Data Minimization"],
      ["Restoran meminta akses daftar kontak telepon untuk mengundang teman pelanggan.", "Apa pendekatan yang menghormati privasi?", "Biarkan pelanggan memilih dan memasukkan penerima sendiri tanpa mengunggah kontak.", "Mengunggah buku kontak orang lain mengumpulkan data tanpa pilihan mereka.", "Permission Minimization"],
      ["Pelanggan memberi alamat email untuk kuitansi elektronik.", "Bagaimana restoran seharusnya menggunakan email itu?", "Kirim kuitansi yang diminta dan minta persetujuan terpisah untuk promosi.", "Email kuitansi diberikan untuk transaksi, bukan otomatis untuk pemasaran.", "Purpose Limitation"]
    ]
  },
  {
    district: "restaurant",
    level: 2,
    distractors: [
      "Gabungkan jaringan tamu dan perangkat kasir tanpa kontrol",
      "Biarkan kredensial bawaan router tetap digunakan",
      "Tunda penanganan insiden dan hapus catatan aktivitas"
    ],
    questions: [
      ["Pelanggan menggunakan Wi-Fi gratis sementara terminal POS memproses pembayaran.", "Bagaimana jaringan sebaiknya dikonfigurasi?", "Pisahkan Wi-Fi tamu dari jaringan POS dengan segmentasi dan aturan firewall.", "Segmentasi membatasi akses pelanggan ke perangkat transaksi internal.", "Network Segmentation"],
      ["Router restoran menggunakan kata sandi admin bawaan pabrik.", "Apa langkah pengamanan pertama?", "Ganti dengan kata sandi unik yang kuat dan batasi akses administrasi router.", "Kredensial bawaan mudah ditebak dan sering diketahui publik.", "Default Credential Security"],
      ["Terminal POS mengirim informasi transaksi ke layanan cloud.", "Bagaimana koneksi tersebut harus dilindungi?", "Gunakan TLS/HTTPS dan verifikasi sertifikat layanan tujuan.", "TLS melindungi data dalam perjalanan dari penyadapan dan manipulasi.", "In-Transit Encryption"],
      ["Tablet kasir ditinggalkan tanpa pengawasan dengan akun aktif.", "Kontrol perangkat apa yang mengurangi risiko akses fisik?", "Aktifkan kunci layar otomatis dan kunci perangkat saat ditinggalkan.", "Kunci layar mencegah orang sekitar memakai sesi kasir yang terbuka.", "Physical Security"],
      ["Akun admin sistem POS dipakai beberapa pegawai dengan kata sandi yang sama.", "Bagaimana akses admin POS sebaiknya diberikan kepada tiap pegawai?", "Buat akun individual, gunakan MFA, dan berikan hak akses sesuai peran.", "Akun individual memungkinkan atribusi aktivitas dan kontrol akses.", "Identity & Access Management"],
      ["Wi-Fi tamu restoran tidak memerlukan isolasi antarperangkat.", "Apa pengaturan yang mengurangi risiko serangan dari satu pelanggan ke pelanggan lain?", "Aktifkan isolasi klien pada jaringan tamu dan batasi akses ke jaringan internal.", "Isolasi mencegah perangkat tamu saling menjangkau dan mencapai POS.", "Wi-Fi Security"],
      ["Perangkat POS lama tidak lagi menerima pembaruan keamanan.", "Apa rencana yang bertanggung jawab?", "Ganti atau isolasi perangkat dan susun migrasi ke sistem yang didukung.", "Perangkat usang rentan karena kerentanan baru tidak lagi diperbaiki.", "Vulnerability Management"],
      ["Pegawai menerima lampiran email yang mengaku sebagai faktur pemasok.", "Apa tindakan yang aman sebelum membuka lampiran?", "Verifikasi pengirim melalui kontak yang dikenal dan laporkan pesan mencurigakan.", "Verifikasi mencegah lampiran berbahaya menginfeksi perangkat restoran.", "Phishing Prevention"],
      ["Data akun admin cloud restoran diduga dicuri.", "Apa tindakan segera untuk membatasi akses penyerang?", "Cabut sesi aktif, rotasi kredensial, aktifkan MFA, dan investigasi log.", "Pencabutan sesi dan rotasi kredensial menahan pengambilalihan akun.", "Incident Response"],
      ["Router restoran memakai firmware dengan kerentanan yang telah diperbaiki vendor.", "Bagaimana firmware router restoran diperbarui dengan aman?", "Perbarui firmware dari sumber resmi setelah menguji konfigurasi dan konektivitas.", "Pembaruan resmi menutup kerentanan yang diketahui.", "Patch Management"],
      ["Restoran menyimpan cadangan konfigurasi POS di komputer kasir yang sama.", "Bagaimana cadangan seharusnya dilindungi?", "Simpan salinan terenkripsi terpisah dengan akses terbatas dan uji pemulihan.", "Cadangan terpisah membantu pemulihan jika perangkat kasir gagal atau diserang.", "Backup Security"],
      ["Mesin POS mengirim log yang memuat nomor kartu ke layanan pemantauan.", "Apa perubahan yang perlu dilakukan?", "Redaksi data pembayaran dari log sebelum dikirim atau disimpan.", "Log sebaiknya tidak mengandung data kartu sensitif.", "Secure Logging"],
      ["Wi-Fi tamu menggunakan kata sandi yang sama selama bertahun-tahun.", "Bagaimana akses tamu dikelola lebih aman?", "Gunakan kredensial tamu yang diganti berkala atau portal akses dengan isolasi jaringan.", "Rotasi kredensial dan isolasi mengurangi penyalahgunaan akses lama.", "Wi-Fi Security"],
      ["Karyawan yang berhenti masih mengetahui kode akses panel router.", "Apa tindakan yang perlu dilakukan?", "Cabut akses karyawan dan ubah kredensial bersama yang pernah ia ketahui.", "Perubahan personel harus diikuti pencabutan akses dan rotasi rahasia.", "Identity Lifecycle"],
      ["Restoran mendeteksi pengiriman data transaksi ke alamat server yang tidak dikenal.", "Apa respons yang paling tepat?", "Isolasi perangkat terdampak, pertahankan log, dan aktifkan prosedur tanggap insiden.", "Isolasi membatasi kebocoran sementara bukti membantu investigasi.", "Incident Response"]
    ]
  }
];

ADDITIONAL_QUESTION_BANKS.push(
  {
    district: "hospital", level: 1,
    distractors: [
      "Minta seluruh data tersedia agar formulir terlihat lengkap",
      "Jadikan pemberian data opsional sebagai syarat semua layanan",
      "Simpan salinan identitas pasien pada perangkat pribadi petugas"
    ],
    questions: [
      ["Pasien hanya ingin memesan jadwal kontrol melalui telepon.", "Data apa yang paling relevan untuk mencocokkan jadwal?", "Nama atau nomor rekam medis dan waktu yang diminta.", "Pencocokan janji tidak memerlukan rincian kesehatan yang tidak terkait.", "Data Minimization"],
      ["Petugas mengirim kode verifikasi ke telepon pasien saat pendaftaran.", "Bagaimana kode satu kali itu sebaiknya diperlakukan?", "Gunakan hanya untuk verifikasi saat itu dan jangan mencatatnya sebagai kata sandi.", "Kode autentikasi bersifat sementara dan rahasia.", "Authentication Security"],
      ["Formulir meminta agama pasien untuk semua jenis kunjungan tanpa alasan layanan.", "Apa tinjauan yang patut dilakukan?", "Nilai apakah ada tujuan layanan atau kewajiban yang relevan sebelum mengumpulkannya.", "Informasi sensitif memerlukan tujuan yang jelas dan pembatasan.", "Sensitive Data Minimization"],
      ["Pasien mengisi nomor telepon pada komputer bersama di lobi.", "Apa yang perlu dilakukan aplikasi setelah formulir dikirim?", "Hapus isian dari layar dan sesi agar pengunjung berikutnya tidak melihatnya.", "Perangkat publik tidak boleh mempertahankan data pasien sebelumnya.", "Privacy by Design"],
      ["Petugas menyalin informasi alergi pasien untuk layanan klinis.", "Siapa yang seharusnya dapat melihat catatan tersebut?", "Tenaga kesehatan yang terlibat dan memerlukannya untuk perawatan.", "Akses dibatasi pada orang dengan kebutuhan kerja yang sah.", "Need to Know"],
      ["Rumah sakit meminta tanggal lahir untuk mencegah tertukarnya rekam medis.", "Bagaimana pasien diberi tahu tentang kolom tersebut?", "Jelaskan tujuan pencocokan identitas dan gunakan hanya untuk tujuan itu.", "Transparansi menjelaskan alasan pengumpulan data.", "Transparency"],
      ["Pasien mengisi formulir pada tablet pendaftaran lalu pergi.", "Kontrol apa yang mencegah data tertinggal di perangkat?", "Akhiri sesi dan bersihkan data lokal setelah pengiriman berhasil.", "Pembersihan sesi mengurangi pengungkapan kepada pengguna berikutnya.", "Session Security"],
      ["Petugas ingin memotret kartu pasien dengan ponsel pribadinya untuk mempercepat antrean.", "Apa tindakan yang benar?", "Gunakan pemindai rumah sakit yang disetujui atau masukkan data minimum secara aman.", "Salinan pada perangkat pribadi menghilangkan kendali organisasi atas data.", "Device Security"],
      ["Pasien meminta komunikasi hasil janji melalui email, tetapi alamatnya belum diverifikasi.", "Apa yang sebaiknya dilakukan sebelum mengirim rincian pasien?", "Verifikasi alamat dan gunakan kanal yang disetujui dengan isi minimum.", "Salah alamat dan pesan terbuka dapat mengungkap data kesehatan.", "Secure Communication"],
      ["Klinik menambah kolom nomor kontak darurat pada formulir semua pasien.", "Bagaimana kebutuhan kolom ini dinilai?", "Kumpulkan hanya bila relevan untuk jenis pelayanan dan jelaskan penggunaannya.", "Kontak darurat tidak selalu diperlukan untuk setiap kunjungan.", "Purpose Limitation"]
    ]
  },
  {
    district: "hospital", level: 2,
    distractors: [
      "Bagikan satu akun dokter ke seluruh unit agar akses lebih cepat",
      "Kirim kata sandi dan data pasien melalui grup percakapan umum",
      "Matikan pencatatan akses agar pengguna tidak terganggu"
    ],
    questions: [
      ["Perawat sementara menggantikan staf pada unit lain selama satu sif.", "Bagaimana akses rekam medisnya diberikan?", "Berikan akses sementara sesuai pasien dan tugas selama sif.", "Akses berbatas waktu mengurangi hak yang tertinggal setelah penugasan.", "Just-in-Time Access"],
      ["Dokter menerima notifikasi login EHR yang tidak ia lakukan.", "Bagaimana dokter menangani notifikasi login EHR yang tidak dikenali?", "Tolak permintaan, laporkan, lalu amankan akun melalui kanal resmi.", "Persetujuan login yang tidak dikenal bisa memberi penyerang akses klinis.", "MFA Fatigue Defense"],
      ["Laporan pasien dikirim ke alamat email mitra yang salah.", "Bagaimana rumah sakit merespons salah kirim laporan pasien?", "Segera laporkan insiden, minta penerima mengamankan atau menghapus salinan, dan ikuti prosedur insiden.", "Pelaporan cepat mendukung pembatasan dan penilaian dampak.", "Incident Response"],
      ["Vendor perlu memelihara server rekam medis.", "Bagaimana akses vendor dibatasi?", "Gunakan akun bernama, akses sementara yang diawasi, dan catat aktivitasnya.", "Akun individual dan pengawasan memberi akuntabilitas.", "Third-Party Access"],
      ["Staf mengunduh daftar pasien ke laptop untuk bekerja saat kunjungan.", "Kontrol apa yang perlu diterapkan?", "Gunakan perangkat terkelola terenkripsi dan simpan hanya data minimum yang diperlukan.", "Data portabel mudah hilang sehingga memerlukan kontrol perangkat.", "Endpoint Security"],
      ["Pimpinan meminta ekspor semua rekam medis untuk membuat statistik layanan.", "Apa cara aman memenuhi kebutuhan statistik?", "Gunakan data agregat atau de-identifikasi bila identitas pasien tidak diperlukan.", "Menghapus pengenal mengurangi risiko pada analisis populasi.", "De-identification"],
      ["Pembaruan EHR meminta administrator menggunakan akun pribadi yang sama dengan akun harian.", "Apa praktik yang lebih aman?", "Pisahkan akun administrasi, gunakan MFA, dan batasi sesi istimewa.", "Akun terpisah mengurangi dampak kompromi akun rutin.", "Privileged Access"],
      ["Database cadangan pasien dipulihkan untuk latihan pemulihan.", "Apa yang perlu dipastikan sebelum latihan?", "Gunakan lingkungan terisolasi dengan akses terbatas dan data uji bila memungkinkan.", "Salinan pemulihan tetap mengandung data sensitif.", "Backup Isolation"],
      ["Sistem mencatat diagnosis lengkap pada log pemecahan masalah.", "Bagaimana log pemecahan masalah EHR harus diperbaiki?", "Redaksi identitas dan rincian klinis dari log yang tidak memerlukannya.", "Log operasional juga perlu menerapkan minimisasi data.", "Secure Logging"],
      ["Rekam medis kertas harus dikirim ke arsip di gedung lain.", "Bagaimana pengiriman dilakukan?", "Gunakan wadah tertutup, serah terima tercatat, dan akses petugas yang berwenang.", "Pengamanan fisik dan rantai penguasaan mencegah kehilangan dokumen.", "Physical Security"]
    ]
  },
  {
    district: "hospital", level: 3,
    distractors: [
      "Hapus log dan perangkat segera agar layanan terlihat normal",
      "Kirim seluruh basis data pasien kepada semua kepala unit",
      "Bayar pengirim pesan sebelum memverifikasi insiden"
    ],
    questions: [
      ["Server klinik menampilkan catatan bahwa berkas pasien dienkripsi oleh ransomware.", "Apa langkah awal tim respons?", "Isolasi server terdampak tanpa mematikan bukti, lalu aktifkan prosedur insiden.", "Isolasi membatasi penyebaran sambil menjaga bukti untuk investigasi.", "Ransomware Response"],
      ["Petugas menemukan USB tak dikenal terpasang di komputer ruang perawat.", "Bagaimana petugas menangani USB tak dikenal di komputer ruang perawat?", "Jangan membuka isinya; amankan perangkat dan laporkan kepada tim keamanan.", "USB tak dikenal dapat menjadi media malware atau eksfiltrasi.", "Removable Media Security"],
      ["Tim forensik perlu menyalin disk server yang diduga membocorkan data.", "Bagaimana integritas bukti dijaga?", "Buat salinan forensik, catat hash, waktu, pengambil, dan setiap serah terima.", "Hash dan rantai penguasaan membantu membuktikan bukti tidak berubah.", "Digital Forensics"],
      ["Rumah sakit melihat kueri massal rekam medis dari satu akun staf pada dini hari.", "Bagaimana aktivitas ini ditangani?", "Tangguhkan sesi secara proporsional, simpan log, dan verifikasi dengan pemilik akun.", "Pola tidak biasa perlu dibatasi dan diselidiki tanpa menghapus bukti.", "Anomaly Detection"],
      ["Sistem laboratorium tidak tersedia setelah pembaruan gagal.", "Apa prioritas pemulihan?", "Aktifkan prosedur kesinambungan layanan dan pulihkan dari cadangan teruji.", "Pemulihan terencana menjaga pelayanan sekaligus integritas data.", "Business Continuity"],
      ["Cadangan EHR terakhir dibuat enam bulan lalu dan tidak pernah diuji.", "Apa tindakan perbaikan jangka panjang?", "Buat cadangan berkala yang terpisah dan uji pemulihan serta konsistensi datanya.", "Cadangan yang belum diuji belum terbukti dapat memulihkan layanan.", "Backup & Recovery"],
      ["Rumah sakit mempertimbangkan memberi tahu pasien tentang dugaan akses ilegal.", "Informasi apa yang harus menjadi dasar notifikasi?", "Fakta terverifikasi, jenis data terdampak, langkah perlindungan, dan kanal bantuan.", "Notifikasi yang jelas membantu pasien merespons risiko nyata.", "Breach Notification"],
      ["Penyerang mengaku memiliki hasil pemeriksaan pasien dan meminta uang.", "Apa yang sebaiknya dilakukan pimpinan?", "Jangan bernegosiasi sendiri; libatkan tim respons, legal, dan otoritas sesuai prosedur.", "Keputusan terkoordinasi menghindari tindakan yang memperburuk insiden.", "Incident Governance"],
      ["Tim memulihkan server klinis dari cadangan setelah malware dibersihkan.", "Kontrol apa yang harus dilakukan sebelum sistem kembali online?", "Verifikasi sumber pemulihan, pasang pembaruan, rotasi kredensial, dan uji integritas.", "Pemulihan harus memastikan penyebab kompromi tidak ikut dipulihkan.", "Secure Recovery"],
      ["Satu akun dokter digunakan untuk mengekspor ribuan catatan tanpa alasan klinis.", "Bagaimana investigasi menentukan cakupan akses?", "Korelasikan audit log, waktu, perangkat, pasien, dan hak akses akun tersebut.", "Korelasi bukti menunjukkan catatan mana yang benar-benar diakses.", "Audit & Accountability"],
      ["Media penyimpanan rusak berisi hasil radiologi yang akan dikembalikan ke vendor.", "Bagaimana media diproses?", "Hapus secara kriptografis atau musnahkan dengan metode terverifikasi sebelum keluar.", "Penghapusan terverifikasi mencegah pemulihan data pasien oleh pihak lain.", "Media Sanitization"],
      ["Dokter menggunakan layanan berbagi berkas konsumen untuk mengirim CT scan.", "Apa alternatif yang tepat?", "Gunakan portal rujukan rumah sakit yang disetujui dengan penerima terverifikasi.", "Portal terkelola memberi kontrol akses dan audit yang sesuai.", "Secure Data Exchange"],
      ["Petugas menerima telepon seseorang yang mengaku keluarga pasien dan meminta diagnosis.", "Bagaimana identitas peminta diperiksa?", "Verifikasi identitas dan kewenangan melalui prosedur resmi sebelum mengungkapkan apa pun.", "Hubungan keluarga saja tidak otomatis membuktikan hak akses.", "Identity Verification"],
      ["Vendor EHR meminta dump produksi untuk memperbaiki bug.", "Apa yang lebih aman diberikan?", "Reproduksi masalah dengan data sintetis atau data yang telah di-de-identifikasi.", "Lingkungan uji tidak perlu memuat identitas pasien sebenarnya.", "Data Minimization"],
      ["Tim respons menemukan token akses API klinis di repositori kode publik.", "Apa tindakan segera?", "Cabut dan rotasi token, periksa log penggunaan, lalu pindahkan rahasia ke penyimpanan aman.", "Kredensial yang terekspos harus dianggap telah dikompromikan.", "Secrets Management"],
      ["Serangan membuat jadwal klinik berubah dan pasien menerima pesan palsu.", "Bagaimana kanal komunikasi dipulihkan?", "Verifikasi sistem pengirim, hentikan pesan palsu, dan umumkan kanal resmi alternatif.", "Pasien perlu mengetahui sumber informasi yang tepercaya.", "Crisis Communication"],
      ["Klinik harus menjalankan pendaftaran manual selama jaringan pulih.", "Bagaimana formulir darurat dilindungi?", "Catat data minimum, simpan terkunci, batasi petugas, dan masukkan ke sistem dengan aman setelah pulih.", "Prosedur darurat tetap harus melindungi kerahasiaan dan akurasi.", "Downtime Procedure"],
      ["Log menunjukkan unduhan rekam medis terus terjadi setelah akun dinonaktifkan.", "Apa yang perlu diperiksa?", "Cabut sesi dan token aktif, lalu periksa akun layanan atau kunci lain yang terkait.", "Menonaktifkan akun saja belum tentu membatalkan semua kredensial aktif.", "Session Revocation"],
      ["Rumah sakit ingin menghitung pasien terdampak setelah akses tak sah.", "Data apa yang harus dipakai?", "Audit log dan bukti forensik yang tervalidasi dengan periode serta kriteria jelas.", "Penilaian cakupan harus dapat ditelusuri dan tidak sekadar perkiraan.", "Forensic Scoping"],
      ["Penyerang masuk melalui akun yang tidak memakai MFA.", "Perbaikan pencegahan mana yang paling relevan?", "Wajibkan MFA tahan phishing untuk akses jarak jauh dan akun istimewa.", "MFA kuat mengurangi risiko kata sandi curian digunakan kembali.", "Phishing-Resistant MFA"],
      ["Staf membagikan foto layar pasien melalui grup internal yang terlalu luas.", "Apa koreksi yang diperlukan?", "Hentikan pembagian, gunakan kanal klinis terbatas, dan laporkan pengungkapan sesuai prosedur.", "Kanal internal tetap berisiko bila penerimanya tidak memiliki kebutuhan.", "Internal Data Sharing"],
      ["Setelah pemulihan, rumah sakit perlu memastikan layanan dan data akurat.", "Uji apa yang perlu dilakukan?", "Validasi integritas rekam medis, kontrol akses, konektivitas, dan alur klinis sebelum operasi penuh.", "Pemulihan teknis belum cukup tanpa validasi keselamatan layanan.", "Recovery Validation"],
      ["Perangkat medis terhubung menjalankan sistem operasi yang tidak lagi didukung.", "Bagaimana risikonya dikelola bila perangkat belum dapat diganti?", "Segmentasikan perangkat, batasi komunikasi, pantau anomali, dan rencanakan penggantian.", "Kontrol kompensasi membatasi eksposur sampai pembaruan tersedia.", "Network Segmentation"],
      ["Tim komunikasi hendak menyebut nama pasien tertentu dalam siaran pers insiden.", "Apa prinsip yang harus dipakai?", "Jangan mengungkap identitas pasien; sampaikan informasi agregat yang diperlukan.", "Komunikasi publik harus tetap menjaga privasi individu.", "Confidentiality"],
      ["Seorang pegawai melaporkan ia mengklik lampiran mencurigakan pada komputer klinis.", "Apa yang harus dilakukan setelah lampiran mencurigakan dibuka di komputer klinis?", "Laporkan segera, putuskan koneksi sesuai prosedur, dan jangan menghapus bukti atau mencoba memperbaiki sendiri.", "Pelaporan dini memberi tim kesempatan membatasi dampak dan menginvestigasi.", "Malware Incident Response"],
      ["Akun pemasok cloud memiliki hak administrator permanen untuk dukungan.", "Bagaimana hak ini seharusnya diubah?", "Gunakan persetujuan per sesi, hak minimum, batas waktu, dan rekaman aktivitas.", "Akses istimewa sementara mengurangi peluang penyalahgunaan jangka panjang.", "Vendor Least Privilege"],
      ["Audit menemukan salinan ekspor pasien tertinggal di folder bersama setelah proyek selesai.", "Tindakan penutupan proyek apa yang diperlukan?", "Hapus salinan sesuai retensi, verifikasi penghapusan, dan cabut akses proyek.", "Penutupan mencakup data turunan dan akses yang tidak lagi dibutuhkan.", "Data Lifecycle"],
      ["Rumah sakit menilai apakah proses pemulihan siap menghadapi pemadaman panjang.", "Latihan apa yang memberi bukti kesiapan?", "Simulasikan skenario, ukur target waktu pemulihan, lalu catat dan tindak lanjuti kekurangan.", "Latihan menguji prosedur dan ketergantungan nyata sebelum krisis.", "Disaster Recovery Testing"],
      ["Bukti awal menunjukkan data pasien mungkin telah dilihat, tetapi belum diunduh.", "Bagaimana status insiden sebaiknya dinilai?", "Bedakan akses, akuisisi, dan eksfiltrasi berdasarkan log serta bukti yang tersedia.", "Istilah yang tepat mencegah klaim terlalu luas atau menyesatkan.", "Evidence-Based Assessment"],
      ["Sebuah sistem penting dipulihkan tetapi administrator belum mengganti kata sandi layanan.", "Risiko apa yang masih tersisa?", "Kredensial lama yang diketahui penyerang dapat dipakai untuk masuk kembali.", "Rotasi rahasia pascainsiden menutup jalur akses yang mungkin masih aktif.", "Credential Rotation"]
    ]
  },
  {
    district: "eshop", level: 1,
    distractors: [
      "Simpan CVV setelah transaksi untuk memudahkan pembelian berikutnya",
      "Wajibkan pelanggan mengirim kata sandi lewat formulir dukungan",
      "Kumpulkan data kartu keluarga meski tidak diperlukan untuk pembayaran"
    ],
    questions: [
      ["Pelanggan membeli barang dan memilih kartu sebagai metode pembayaran.", "Informasi sensitif apa yang tidak boleh disimpan setelah otorisasi?", "Kode verifikasi kartu (CVV/CVC).", "Kode keamanan kartu tidak boleh disimpan setelah transaksi diotorisasi.", "Payment Card Security"],
      ["Toko menawarkan notifikasi promosi setelah checkout.", "Bagaimana pilihan pemasaran diberikan?", "Jadikan persetujuan promosi opsional dan terpisah dari penyelesaian pesanan.", "Pembelian tidak boleh bergantung pada persetujuan untuk tujuan lain.", "Consent"],
      ["Alamat pengiriman pelanggan dimasukkan untuk pesanan satu kali.", "Berapa lama alamat tersebut disimpan?", "Sesuai kebutuhan pemenuhan, kewajiban yang berlaku, dan kebijakan retensi yang dijelaskan.", "Retensi dibatasi menurut tujuan dan kewajiban yang sah.", "Data Retention"],
      ["Pelanggan ingin mengembalikan barang dan agen layanan meminta foto kartu pembayaran penuh.", "Apa data yang sebaiknya dipakai untuk memverifikasi transaksi?", "Referensi pesanan atau detail transaksi yang disamarkan.", "Nomor kartu penuh tidak diperlukan untuk mengidentifikasi pesanan.", "Data Minimization"],
      ["Checkout menawarkan menyimpan kartu untuk pembelian berikutnya.", "Bagaimana toko sebaiknya menangani pilihan ini?", "Minta persetujuan eksplisit dan gunakan token penyedia pembayaran, bukan nomor kartu mentah.", "Tokenisasi menghindari penyimpanan rincian kartu langsung di toko.", "Tokenization"],
      ["Formulir checkout meminta tanggal lahir pelanggan untuk mengirim paket biasa.", "Apa yang sebaiknya dilakukan?", "Hapus kolom bila tidak ada tujuan transaksi yang sah dan diperlukan.", "Usia pelanggan tidak relevan bagi sebagian besar pengiriman.", "Purpose Limitation"],
      ["Pelanggan memasukkan alamat email dengan salah ketik.", "Bagaimana toko mencegah detail pesanan dikirim ke orang lain?", "Verifikasi alamat atau tampilkan konfirmasi sebelum mengirim informasi pesanan.", "Kesalahan alamat dapat mengungkap rincian pembelian.", "Data Accuracy"],
      ["Toko meminta pelanggan mengunggah identitas untuk semua transaksi bernilai kecil.", "Bagaimana kebijakan ini dinilai?", "Batasi verifikasi identitas pada kasus yang memang memerlukan pemeriksaan tersebut.", "Pengumpulan identitas harus sebanding dengan risiko dan tujuan.", "Proportionality"],
      ["Pelanggan mengisi alamat rumah pada perangkat umum di gerai.", "Perlindungan apa yang seharusnya diterapkan?", "Hapus data sesi lokal setelah transaksi dan jangan menyimpan isian pada browser bersama.", "Data checkout dapat tertinggal dan terlihat oleh pengguna berikutnya.", "Shared Device Privacy"],
      ["Toko ingin membagikan daftar pembeli kepada merek mitra.", "Apa langkah yang benar sebelum berbagi?", "Tentukan dasar dan tujuan yang jelas, beri pemberitahuan, dan batasi data yang dibagikan.", "Pembagian untuk tujuan pemasaran baru memerlukan transparansi dan dasar yang sesuai.", "Third-Party Sharing"]
    ]
  },
  {
    district: "eshop", level: 2,
    distractors: [
      "Nonaktifkan HTTPS agar halaman checkout memuat lebih cepat",
      "Izinkan kueri basis data menyusun SQL langsung dari masukan",
      "Gunakan akun administrator bersama untuk semua agen"
    ],
    questions: [
      ["Endpoint pencarian pesanan menyisipkan teks pelanggan langsung ke perintah SQL.", "Perbaikan utama apa yang mencegah injeksi?", "Gunakan kueri berparameter dan validasi masukan sesuai konteks.", "Parameter memisahkan data masukan dari sintaks kueri.", "SQL Injection Prevention"],
      ["Pelanggan memakai ulang kata sandi yang bocor di situs lain.", "Kontrol login apa yang menambah perlindungan?", "Aktifkan MFA dan deteksi kredensial yang diketahui telah bocor.", "MFA dan pemeriksaan kata sandi bocor menghambat pengambilalihan akun.", "Account Security"],
      ["Halaman pembayaran hanya menggunakan HTTP pada jaringan kafe.", "Apa perubahan yang wajib dilakukan?", "Lindungi seluruh sesi checkout menggunakan HTTPS dengan konfigurasi TLS yang benar.", "TLS melindungi data saat transit dari penyadapan dan perubahan.", "Transport Security"],
      ["Agen dukungan menerima pesan pelanggan berisi nomor kartu lengkap.", "Bagaimana informasi itu ditangani?", "Jangan menyalinnya ke tiket; hapus atau redaksi sesuai prosedur pembayaran aman.", "Tiket dukungan tidak boleh menjadi tempat penyimpanan data kartu.", "Secure Support"],
      ["Banyak login gagal terjadi pada akun pelanggan yang sama.", "Tindakan mitigasi apa yang tepat?", "Terapkan pembatasan laju, deteksi otomatis, dan verifikasi tambahan yang proporsional.", "Kontrol ini menahan percobaan otomatis tanpa membocorkan kata sandi.", "Brute Force Defense"],
      ["Email konfirmasi pembayaran meminta pelanggan membalas dengan kata sandi.", "Bagaimana pelanggan sebaiknya memverifikasinya?", "Jangan membalas; akses toko dari alamat resmi dan laporkan pesan tersebut.", "Toko tidak membutuhkan kata sandi pelanggan melalui email.", "Phishing Awareness"],
      ["Aplikasi pihak ketiga meminta token API untuk mengakses seluruh pesanan.", "Apa yang harus dilakukan pemilik toko?", "Batasi cakupan dan masa berlaku token pada fungsi yang diperlukan.", "Hak API minimum mengurangi dampak token yang dicuri.", "API Least Privilege"],
      ["Operator menemukan file cadangan dengan ekspor data pelanggan dapat diakses publik.", "Apa tindakan awal?", "Cabut akses publik, amankan salinan, dan mulai penilaian serta respons insiden.", "Membatasi paparan lebih dulu menghentikan akses berkelanjutan.", "Cloud Storage Security"],
      ["Kode promo dapat diterapkan berkali-kali karena pemeriksaan hanya di browser.", "Di mana validitas transaksi harus diperiksa?", "Validasi batas promo dan harga pada server sebelum menyelesaikan pesanan.", "Klien dapat dimanipulasi; keputusan bisnis harus ditegakkan server.", "Server-Side Validation"],
      ["Log aplikasi e-commerce menyimpan token sesi pelanggan secara utuh.", "Bagaimana risiko ini dikurangi?", "Redaksi token dari log dan batasi akses serta masa retensi log.", "Token di log dapat digunakan untuk mengambil alih sesi.", "Session Confidentiality"]
    ]
  },
  {
    district: "eshop", level: 3,
    distractors: [
      "Bayar refund tanpa memeriksa transaksi sumber",
      "Kirim semua data pelanggan ke setiap penyedia integrasi",
      "Pertahankan akses vendor permanen tanpa pencatatan"
    ],
    questions: [
      ["Sistem mendeteksi lonjakan pembelian dari banyak akun dengan kartu berbeda dan satu alamat pengiriman.", "Bagaimana tim mencegah transaksi fraud tanpa menolak semua pelanggan?", "Tahan transaksi berisiko untuk pemeriksaan berbasis sinyal dan verifikasi tambahan.", "Penilaian berbasis risiko menyeimbangkan pencegahan fraud dan layanan.", "Fraud Detection"],
      ["Penipu menelepon agen dan mengaku pemilik akun yang kehilangan ponsel.", "Bagaimana agen memproses permintaan reset MFA?", "Gunakan verifikasi identitas yang independen dan catat proses pemulihan.", "Pemulihan akun yang lemah dapat melewati kontrol MFA.", "Account Recovery"],
      ["Webhook pembayaran mengirim status order dua kali setelah gangguan jaringan.", "Bagaimana aplikasi mencegah pemenuhan atau tagihan ganda?", "Proses webhook secara idempoten menggunakan ID kejadian unik.", "Idempotensi menghindari efek ganda dari pengiriman ulang yang sah.", "Payment Integrity"],
      ["Pelanggan mengklaim tidak melakukan pembayaran, sedangkan akun memiliki sesi aktif di perangkat asing.", "Apa yang perlu dilakukan dukungan?", "Amankan akun dan sesi, selidiki jejak transaksi, lalu ikuti prosedur sengketa pembayaran.", "Pemeriksaan sesi dan transaksi membantu membedakan penyalahgunaan dari kesalahan.", "Account Takeover Response"],
      ["Kunci API gateway pembayaran ditemukan pada log build yang dapat dibaca semua pengembang.", "Bagaimana tim e-commerce merespons kunci API pembayaran yang terekspos?", "Rotasi kunci, periksa penggunaan, dan pindahkan rahasia ke secret manager.", "Kunci yang terekspos harus dianggap bocor walau belum ada penyalahgunaan.", "Secrets Management"],
      ["Pihak eksternal meminta daftar pelanggan untuk menguji program loyalitas baru.", "Data apa yang digunakan untuk uji coba?", "Data sintetis atau terde-identifikasi dengan persetujuan dan akses yang sesuai.", "Pengujian tidak seharusnya memerlukan data pelanggan nyata.", "Privacy-Preserving Testing"],
      ["Toko menghentikan kerja sama dengan layanan analitik.", "Apa langkah penutupan akses yang penting?", "Cabut token dan akun vendor serta minta penghapusan salinan sesuai kontrak.", "Penghentian layanan harus mengakhiri akses dan mengelola data tersisa.", "Vendor Offboarding"],
      ["Pelanggan menghapus akun tetapi laporan pajak transaksi masih wajib disimpan.", "Bagaimana permintaan penghapusan dipenuhi?", "Hapus data yang tidak lagi diperlukan dan jelaskan pengecualian retensi yang diwajibkan.", "Hak penghapusan harus diseimbangkan dengan kewajiban retensi yang sah.", "Retention & Erasure"],
      ["Penyerang mengganti rekening tujuan pembayaran pada profil penjual.", "Kontrol apa yang membantu mendeteksi perubahan berbahaya?", "Minta verifikasi kuat dan notifikasi ke kanal lama saat rekening pembayaran berubah.", "Pemberitahuan terpisah memberi pemilik kesempatan mengenali perubahan ilegal.", "Merchant Account Security"],
      ["Layanan antarmuka pembayaran menerima asal domain yang tidak dikenal.", "Apa pemeriksaan konfigurasi yang tepat?", "Batasi origin, endpoint callback, dan kredensial pada domain resmi.", "Daftar origin tepercaya menahan penyalahgunaan integrasi lintas situs.", "Integration Security"],
      ["Fraudster membuat banyak akun menggunakan alamat email sekali pakai.", "Sinyal apa yang dapat digunakan tanpa mengandalkan satu atribut saja?", "Gabungkan pola perangkat, laju pendaftaran, histori transaksi, dan verifikasi risiko.", "Sinyal gabungan lebih kuat dan lebih adil dibanding aturan tunggal.", "Risk-Based Monitoring"],
      ["Pelanggan menghubungi akun media sosial tidak resmi yang meniru toko.", "Bagaimana toko membantu mencegah penipuan lanjutan?", "Publikasikan kanal resmi dan ajarkan pelanggan memverifikasi domain serta tidak membagikan OTP.", "Informasi resmi dan edukasi mengurangi keberhasilan impersonasi.", "Brand Impersonation"],
      ["Tim e-commerce menemukan file konfigurasi produksi di repositori publik.", "Apa urutan respons yang sesuai?", "Batasi akses repositori, rotasi rahasia, telusuri penggunaan, dan perbaiki sumber kebocoran.", "Menghapus file saja tidak membatalkan rahasia yang sudah terekspos.", "Exposure Response"],
      ["Refund besar diminta ke metode pembayaran baru yang tidak digunakan saat pembelian.", "Apa langkah pemeriksaan yang tepat?", "Ikuti kebijakan refund ke sumber pembayaran terverifikasi dan eskalasi pengecualian.", "Mengubah penerima refund membuka peluang pengalihan dana.", "Refund Fraud"],
      ["Satu alamat IP mencoba menebak kata sandi pada ratusan akun.", "Bagaimana respons yang tepat terhadap pola serangan ini?", "Terapkan rate limit adaptif, deteksi bot, dan pemantauan tanpa mengunci massal akun sah.", "Mitigasi adaptif mengurangi serangan dan dampak denial-of-service terhadap pelanggan.", "Credential Stuffing Defense"],
      ["Sertifikat TLS domain pembayaran hampir kedaluwarsa.", "Kontrol operasional apa yang mencegah gangguan?", "Pantau masa berlaku sertifikat dan lakukan perpanjangan otomatis yang teruji.", "Pemantauan mencegah putusnya layanan serta konfigurasi TLS yang tidak aman.", "Certificate Management"],
      ["Agen ingin mengambil alih sesi pelanggan untuk melihat halaman pembayaran.", "Praktik dukungan apa yang lebih aman?", "Gunakan alat dukungan terkontrol yang menyamarkan pembayaran dan tidak menyalin rahasia sesi.", "Pengambilalihan sesi dapat membuka data dan tindakan pelanggan.", "Support Tool Security"],
      ["Penyedia pembayaran mengirim notifikasi perubahan endpoint yang tidak diminta.", "Bagaimana keasliannya diverifikasi?", "Konfirmasi melalui portal atau kontak vendor yang sudah dikenal, bukan tautan pesan.", "Verifikasi kanal independen mengurangi risiko phishing pemasok.", "Supplier Verification"],
      ["Penjual mengunggah file pelanggan ke layanan berbagi umum untuk mengatur pengiriman.", "Perubahan proses apa yang tepat?", "Gunakan integrasi pengiriman resmi dengan data penerima minimum dan akses terbatas.", "Kanal resmi menghindari salinan tak terkendali pada layanan publik.", "Data Processor Security"],
      ["Situs mencurigakan memuat skrip pihak ketiga pada halaman checkout.", "Apa perlindungan yang relevan?", "Batasi skrip yang disetujui, pantau perubahan, dan gunakan kontrol integritas konten.", "Skrip berbahaya dapat membaca data pembayaran yang dimasukkan pelanggan.", "Web Supply Chain"],
      ["Manajer menemukan staf mengekspor seluruh daftar pembeli untuk pekerjaan harian.", "Bagaimana ekspor daftar pembeli dapat dibatasi sesuai kebutuhan kerja?", "Sediakan laporan agregat atau ekspor terfilter sesuai kebutuhan peran.", "Ekspor minimum mengurangi dampak kebocoran dan penyalahgunaan internal.", "Insider Risk"],
      ["Anomali menunjukkan checkout menerima harga nol dari permintaan yang dimodifikasi.", "Di mana harga harus ditentukan?", "Hitung dan otorisasi harga dari data produk tepercaya di server.", "Harga kiriman browser tidak boleh dianggap sebagai sumber kebenaran.", "Transaction Integrity"],
      ["Pelanggan berbagi tangkapan layar pesanan di forum publik dan nomor telepon terlihat.", "Bagaimana tim layanan sebaiknya membantu?", "Sarankan menghapus atau menyamarkan informasi pribadi dan lanjutkan melalui kanal privat resmi.", "Nomor pesanan dan kontak dapat dipakai untuk rekayasa sosial.", "Customer Privacy"],
      ["Dugaan kebocoran token sesi pelanggan sedang diselidiki.", "Langkah yang segera melindungi sesi aktif adalah?", "Cabut token terdampak, paksa autentikasi ulang, dan pantau pola akses lanjutan.", "Pencabutan token memutus sesi yang mungkin telah disalin penyerang.", "Session Revocation"],
      ["Toko hendak mengirim email pemberitahuan insiden kepada pembeli terdampak.", "Bagaimana penerima dan isi pesan dilindungi?", "Gunakan daftar penerima terverifikasi, kirim satu per satu, dan hindari menampilkan alamat pelanggan lain.", "Pengumuman insiden tidak boleh menciptakan kebocoran baru.", "Breach Communication"],
      ["Tim keamanan perlu membandingkan aktivitas pembelian sebelum dan sesudah kompromi.", "Bagaimana log transaksi dijaga agar berguna sebagai bukti?", "Batasi perubahan, sinkronkan waktu, dan simpan salinan log dengan integritas terverifikasi.", "Log tepercaya mendukung rekonstruksi urutan kejadian.", "Evidence Preservation"],
      ["Aplikasi kasir merchant meminta izin membaca semua kontak perangkat.", "Bagaimana tim menilai permintaan itu?", "Tolak izin yang tidak diperlukan dan uji alur pembayaran dengan cakupan minimum.", "Izin perangkat berlebih membuka data yang tidak relevan terhadap pembayaran.", "Mobile App Privacy"],
      ["Pemulihan toko setelah serangan memerlukan pemrosesan order yang tertunda.", "Bagaimana mencegah pesanan diproses dua kali?", "Rekonsiliasi dengan ledger pembayaran dan ID order unik sebelum mengulang pemrosesan.", "Rekonsiliasi menjaga konsistensi uang dan status pesanan.", "Reconciliation"],
      ["Pemasok menolak memberi bukti bahwa ekspor pelanggan sudah dihapus.", "Apa tindak lanjut tata kelola yang tepat?", "Eskalasi kepada pemilik vendor dan legal, dokumentasikan kewajiban, dan batasi akses sampai diverifikasi.", "Penghapusan pihak ketiga perlu dapat dibuktikan dan ditindaklanjuti.", "Third-Party Assurance"],
      ["Toko ingin memprediksi fraud dengan model otomatis yang menolak transaksi secara permanen.", "Apa kontrol keputusan yang bertanggung jawab?", "Sediakan ambang risiko, peninjauan manusia, alasan keputusan, dan jalur banding pelanggan.", "Pengawasan mencegah kesalahan model merugikan pelanggan tanpa pemulihan.", "Responsible Fraud Controls"]
    ]
  },
  {
    district: "school", level: 1,
    distractors: [
      "Publikasikan daftar siswa lengkap agar mudah dicari masyarakat",
      "Minta kata sandi akun belajar sebagai bagian dari pendaftaran",
      "Wajibkan biometrik tanpa menjelaskan pilihan atau kebutuhan"
    ],
    questions: [
      ["Formulir kegiatan ekstrakurikuler meminta nomor rekening orang tua meski tidak ada biaya.", "Kolom apa yang tidak diperlukan pada formulir ekstrakurikuler tanpa biaya?", "Hapus kolom rekening yang tidak diperlukan untuk pendaftaran kegiatan.", "Informasi finansial tidak relevan bila tidak ada pembayaran.", "Data Minimization"],
      ["Siswa baru diminta mengunggah foto untuk kartu perpustakaan.", "Bagaimana sekolah melindungi foto tersebut?", "Jelaskan tujuan, batasi akses, dan hindari pemakaian untuk publikasi tanpa izin terpisah.", "Foto siswa dapat mengidentifikasi anak dan memerlukan penggunaan terbatas.", "Student Privacy"],
      ["Formulir meminta riwayat kesehatan siswa untuk seluruh kegiatan kelas biasa.", "Apa evaluasi yang perlu dilakukan?", "Kumpulkan hanya informasi kesehatan yang diperlukan untuk keselamatan kegiatan tertentu.", "Data kesehatan siswa sensitif dan harus sebanding dengan kebutuhan.", "Sensitive Data Minimization"],
      ["Sekolah mengumumkan nama lengkap siswa yang mendapat konseling.", "Apa cara yang lebih menjaga privasi?", "Sampaikan informasi konseling secara pribadi kepada siswa dan wali yang berwenang.", "Pengungkapan di depan umum dapat menstigma dan melanggar kerahasiaan.", "Confidentiality"],
      ["Orang tua meminta salinan data pendaftaran anak.", "Apa langkah sebelum menyerahkan salinan?", "Verifikasi identitas dan kewenangan wali serta gunakan kanal yang aman.", "Data anak perlu diberikan kepada pihak yang benar-benar berwenang.", "Identity Verification"],
      ["Aplikasi tugas meminta lokasi siswa sepanjang hari.", "Apa yang harus ditinjau sekolah?", "Nonaktifkan pelacakan terus-menerus bila lokasi tidak diperlukan untuk tugas.", "Pelacakan lokasi anak berlebihan meningkatkan risiko privasi.", "Permission Minimization"],
      ["Guru memasukkan nomor telepon wali untuk keadaan darurat.", "Penggunaan apa yang sesuai?", "Gunakan untuk komunikasi darurat yang dijelaskan dan batasi penerima internal.", "Tujuan darurat tidak otomatis membolehkan promosi atau penyebaran.", "Purpose Limitation"],
      ["Siswa memakai komputer laboratorium untuk membuka portal nilai.", "Apa perlindungan setelah siswa selesai?", "Keluar dari akun, tutup sesi, dan hapus kredensial yang tersimpan di perangkat bersama.", "Logout mencegah pengguna berikutnya melihat nilai atau mengubah akun.", "Shared Device Security"],
      ["Sekolah ingin memasang foto siswa pada situs publik.", "Apa tindakan sebelum publikasi?", "Dapatkan izin yang sesuai, jelaskan jangkauan publikasi, dan sediakan pilihan menolak.", "Publikasi terbuka merupakan tujuan berbeda dari administrasi sekolah.", "Consent & Student Privacy"],
      ["Daftar kelas memuat alamat rumah dan alergi siswa lalu ditempel di pintu.", "Bagaimana informasi operasional dibagikan?", "Bagikan hanya rincian yang dibutuhkan kepada petugas terkait melalui lokasi terbatas.", "Papan umum memperluas akses data anak tanpa kebutuhan.", "Need to Know"]
    ]
  },
  {
    district: "school", level: 2,
    distractors: [
      "Gunakan kata sandi administrator yang sama untuk semua guru",
      "Buka tautan email dan masukkan kredensial untuk memeriksa hadiah",
      "Biarkan akun mantan pegawai tetap aktif untuk berjaga-jaga"
    ],
    questions: [
      ["Guru menerima email yang meminta login ulang melalui halaman mirip portal sekolah.", "Apa cara aman memeriksa pesan itu?", "Buka portal melalui bookmark resmi dan laporkan email mencurigakan.", "Menghindari tautan pesan mencegah pencurian kredensial melalui situs tiruan.", "Phishing Defense"],
      ["Akun siswa kelas enam memakai kata sandi yang sama untuk email dan game.", "Apa saran keamanan yang tepat?", "Gunakan kata sandi unik dan pengelola kata sandi yang disetujui dengan bantuan wali.", "Kata sandi unik membatasi dampak kebocoran dari layanan lain.", "Password Hygiene"],
      ["Guru kehilangan laptop sekolah yang memuat berkas nilai.", "Apa yang harus dilakukan guru segera setelah laptop sekolah hilang?", "Laporkan segera agar perangkat dan sesi dapat dikunci atau dihapus dari jarak jauh.", "Kecepatan pelaporan membatasi akses ke berkas dan akun.", "Lost Device Response"],
      ["Administrator membagikan akun platform belajar kepada guru pengganti.", "Bagaimana akses seharusnya diberikan?", "Buat akun individual dengan peran dan masa berlaku yang sesuai.", "Akun bernama menjaga akuntabilitas dan memudahkan pencabutan akses.", "Identity & Access Management"],
      ["Sekolah menyimpan daftar nilai dalam lembar kerja cloud yang dapat dibuka siapa pun dengan tautan.", "Apa pengaturan yang tepat?", "Batasi akses ke akun sekolah tertentu dan nonaktifkan tautan publik.", "Pembatasan penerima mengurangi penyebaran tautan di luar sekolah.", "Cloud Access Control"],
      ["Siswa mengirim kata sandi kepada temannya agar tugas dapat dikumpulkan.", "Bagaimana guru menangani kebiasaan ini?", "Ajarkan untuk tidak berbagi akun dan sediakan kolaborasi melalui fitur resmi.", "Akun personal membuat perubahan dan akses dapat dipertanggungjawabkan.", "Account Security"],
      ["Komputer ruang guru masih memakai perangkat lunak lama yang rentan.", "Langkah perawatan apa yang tepat?", "Terapkan pembaruan keamanan teruji dan inventaris perangkat yang dikelola.", "Pembaruan memperbaiki kerentanan yang sudah diketahui.", "Patch Management"],
      ["Aplikasi pembelajaran meminta akses ke mikrofon meski hanya menampilkan bacaan.", "Apa respons sekolah?", "Tolak izin yang tidak relevan dan tinjau kebutuhan aplikasi sebelum digunakan.", "Izin minimum membatasi pengumpulan data dari perangkat siswa.", "App Permissions"],
      ["Guru menemukan flash drive hadiah tanpa pemilik di ruang kelas.", "Bagaimana guru sebaiknya menangani flash drive tanpa pemilik?", "Serahkan ke petugas TI tanpa memasukkannya ke komputer sekolah.", "Media tak dikenal dapat membawa malware ke jaringan pendidikan.", "Removable Media Security"],
      ["Mantan guru masih dapat mengakses kelas digital setelah kontraknya selesai.", "Bagaimana akses ditangani?", "Nonaktifkan akun dan tokennya serta pindahkan kepemilikan materi secara resmi.", "Offboarding yang cepat mencegah akses setelah hubungan kerja berakhir.", "Access Revocation"]
    ]
  },
  {
    district: "school", level: 3,
    distractors: [
      "Unggah catatan disiplin ke grup pesan seluruh wali kelas",
      "Setel akun siswa menjadi publik agar wali mudah menemukannya",
      "Abaikan kejadian sampai ada orang tua yang mengeluh"
    ],
    questions: [
      ["Portal sekolah menampilkan nilai seorang siswa kepada akun siswa lain.", "Apa langkah pertama petugas?", "Batasi akses yang salah, simpan bukti, dan laporkan melalui prosedur insiden sekolah.", "Pembatasan dan pelestarian bukti mencegah paparan meluas.", "Student Data Incident"],
      ["Serangan ransomware mengunci server absensi menjelang ujian.", "Bagaimana sekolah menjaga kegiatan sambil merespons?", "Isolasi sistem terdampak dan aktifkan prosedur kesinambungan dengan catatan minimum yang aman.", "Operasi dapat berlanjut melalui proses darurat tanpa menyebarkan malware.", "Business Continuity"],
      ["Guru menerima permintaan transfer dana dari kepala sekolah melalui email mendesak.", "Apa verifikasi yang aman?", "Konfirmasi melalui nomor atau kanal internal yang telah dikenal sebelum mengubah pembayaran.", "Verifikasi out-of-band menahan penipuan perubahan instruksi pembayaran.", "Business Email Compromise"],
      ["Database siswa disalin untuk pemeriksaan forensik setelah akses ilegal.", "Bagaimana salinan dijaga?", "Batasi pemeriksa, buat hash, catat waktu dan serah terima, serta simpan terenkripsi.", "Kontrol bukti mendukung integritas dan privasi selama investigasi.", "Forensic Evidence"],
      ["Akun admin sekolah digunakan dari lokasi yang tidak biasa saat malam hari.", "Apa respons yang proporsional?", "Cabut sesi mencurigakan, verifikasi pemilik akun, dan telaah log serta perubahan.", "Sesi yang berisiko dibatasi sambil investigasi berbasis bukti berlangsung.", "Account Compromise Response"],
      ["Sekolah ingin memulihkan nilai setelah kerusakan basis data.", "Apa syarat cadangan yang layak?", "Gunakan cadangan terisolasi yang teruji dan validasi konsistensi sebelum dibuka kepada pengguna.", "Cadangan perlu aman dari serangan dan benar secara akademik.", "Backup Recovery"],
      ["Daftar kontak siswa bocor dari penyedia aplikasi ekstrakurikuler.", "Apa tindakan tata kelola sekolah?", "Koordinasikan pembatasan, tentukan siswa terdampak, dokumentasikan insiden, dan beri notifikasi sesuai kewajiban.", "Sekolah tetap perlu mengawasi pengelolaan data oleh penyedia.", "Processor Incident Management"],
      ["Petugas menemukan catatan konseling tercetak di mesin fotokopi umum.", "Bagaimana bukti dan dokumen ditangani?", "Amankan dokumen, catat lokasi penemuan, dan laporkan tanpa menyebarkan salinannya.", "Dokumen yang tercecer dapat menjadi pengungkapan data sensitif.", "Physical Incident Response"],
      ["Pihak tak berwenang meminta hasil belajar melalui telepon dan menyebut dirinya wali.", "Apa prosedur yang benar?", "Verifikasi identitas serta kewenangan melalui data resmi sebelum memberikan informasi.", "Pengakuan lisan tidak cukup untuk membuka data pendidikan.", "Disclosure Verification"],
      ["Situs sekolah disisipi tautan unduhan malware.", "Apa langkah respons web?", "Tarik situs dari layanan publik bila perlu, simpan bukti, bersihkan sumber dan verifikasi sebelum dibuka kembali.", "Menutup kanal berbahaya mencegah pengunjung terinfeksi.", "Web Incident Response"],
      ["Sekolah mengetahui rekaman kelas daring tersimpan pada akun pribadi guru.", "Bagaimana sekolah mengelola rekaman kelas yang tersimpan di akun pribadi guru?", "Pindahkan ke penyimpanan sekolah yang disetujui, batasi akses, dan hapus salinan pribadi sesuai kebijakan.", "Akun pribadi tidak menyediakan kontrol institusi yang memadai.", "Shadow IT"],
      ["Malware menyebar dari satu laptop ke jaringan lab komputer.", "Kontrol apa yang membatasi penyebaran lateral?", "Isolasi endpoint, segmentasikan jaringan laboratorium, dan periksa perangkat terhubung.", "Segmentasi menghambat malware mencapai sistem lain.", "Network Containment"],
      ["Sekolah harus memberi kabar insiden kepada keluarga siswa.", "Bagaimana pesan dibuat bermanfaat dan menjaga privasi?", "Kirim secara individual melalui kanal resmi dengan fakta, langkah mitigasi, dan kontak bantuan.", "Pesan individual menghindari pengungkapan identitas keluarga lain.", "Privacy-Preserving Notification"],
      ["Akun layanan LMS memiliki hak baca dan tulis ke seluruh sistem sekolah.", "Apa koreksi desain yang tepat?", "Pisahkan akun layanan dan batasi izin pada kelas serta operasi yang diperlukan.", "Cakupan akses sempit mengurangi dampak salah konfigurasi atau kompromi.", "Service Account Least Privilege"],
      ["Laptop siswa hilang dan enkripsinya tidak diketahui aktif.", "Apa yang harus segera dilakukan?", "Laporkan, cabut sesi akun terkait, kunci perangkat jarak jauh, dan nilai data tersimpan.", "Tindakan cepat mengurangi risiko perangkat hilang dipakai membuka data.", "Endpoint Incident Response"],
      ["Sekolah menemukan arsip lama data siswa yang sudah lulus tanpa jadwal retensi.", "Bagaimana arsip dikelola?", "Tentukan kewajiban retensi, hapus data yang tak lagi diperlukan secara terverifikasi, dan dokumentasikan.", "Data lama tetap menimbulkan risiko bila disimpan tanpa dasar.", "Records Retention"],
      ["Tim IT ingin menguji filter phishing memakai kotak surat guru sebenarnya.", "Apa pendekatan yang lebih aman?", "Gunakan lingkungan simulasi dan materi uji yang tidak mengambil kredensial nyata.", "Latihan harus mendidik tanpa mengumpulkan rahasia akun.", "Security Awareness Testing"],
      ["Log audit platform menunjukkan perubahan nilai setelah batas waktu tanpa alasan tercatat.", "Bagaimana sekolah memverifikasi perubahan nilai terlambat yang tidak memiliki alasan?", "Pertahankan log, verifikasi dengan guru berwenang, dan koreksi melalui alur akademik tercatat.", "Audit membantu membedakan koreksi sah dari perubahan tidak sah.", "Auditability"],
      ["Sebuah aplikasi pendidikan menggunakan subkontraktor baru untuk analitik siswa.", "Apa yang perlu diperiksa sebelum integrasi?", "Tinjau tujuan, data yang dibagikan, perlindungan kontrak, dan akses subkontraktor.", "Rantai vendor dapat memperluas penerima data anak.", "Subprocessor Governance"],
      ["Siswa mengalami pengambilalihan akun dan pesan palsu dikirim ke teman sekelas.", "Bagaimana sekolah menahan penyebaran?", "Bekukan sesi, reset kredensial lewat proses terverifikasi, dan beri tahu penerima agar mengabaikan tautan.", "Pemulihan akun dan peringatan memutus kampanye penipuan.", "Student Account Recovery"],
      ["Cadangan sekolah terhubung dengan akun administrator yang sama seperti server produksi.", "Mengapa desain itu berisiko?", "Penyerang yang menguasai akun tersebut dapat mengenkripsi sistem dan cadangan sekaligus.", "Cadangan terisolasi membutuhkan kredensial serta jalur akses terpisah.", "Immutable Backups"],
      ["Orang luar meminta file daftar hadir lengkap untuk lomba sekolah.", "Apa yang sebaiknya diberikan?", "Bagikan data peserta minimum yang diperlukan setelah tujuan dan kewenangan dikonfirmasi.", "Daftar hadir lengkap dapat memuat informasi siswa yang tidak terkait.", "External Disclosure"],
      ["Sekolah menerima permintaan penghapusan akun siswa dari wali.", "Apa yang harus diperiksa sebelum memprosesnya?", "Verifikasi pemohon, identifikasi data terkait, lalu terapkan retensi wajib dan hapus sisanya.", "Permintaan perlu diproses tanpa menghapus catatan yang wajib disimpan.", "Data Rights Handling"],
      ["Perangkat ruang ujian terinfeksi tetapi masih tersambung ke jaringan administrasi.", "Tindakan containment apa yang tepat?", "Putuskan perangkat dari jaringan dan gunakan perangkat cadangan yang bersih setelah verifikasi.", "Isolasi mencegah kompromi meluas ke sistem akademik.", "Endpoint Containment"],
      ["Tim menemukan akun administrator LMS tanpa MFA yang digunakan bersama.", "Apa perubahan yang harus diprioritaskan?", "Buat akun admin individual dan wajibkan MFA dengan pencatatan aktivitas.", "Akun individual dan MFA memperkuat kontrol istimewa.", "Privileged Identity"],
      ["Data ujian bocor sebelum pelaksanaan dan salinan beredar di media sosial.", "Bagaimana sekolah merespons integritas akademik?", "Batasi akses dokumen, nilai cakupan kebocoran, dan tetapkan proses ujian pengganti yang adil.", "Respons perlu melindungi materi sekaligus keadilan bagi siswa.", "Exam Integrity"],
      ["Sistem belajar pulih tetapi akun guru masih memakai kata sandi sementara yang dikirim email.", "Apa langkah pascapemulihan?", "Paksa reset melalui portal aman dan cabut kredensial sementara yang sudah terekspos.", "Kredensial sementara harus segera diganti dan tidak dikirim terbuka.", "Credential Hygiene"],
      ["Penyedia LMS meminta file produksi berisi profil dan nilai siswa untuk debugging.", "Data uji apa yang tepat?", "Buat rekaman sintetis yang menyerupai struktur masalah tanpa identitas siswa.", "Data sintetis memungkinkan debugging tanpa membocorkan catatan anak.", "Synthetic Data"],
      ["Insiden menghentikan layanan belajar daring selama satu hari.", "Bagaimana kesiapan untuk insiden berikutnya ditingkatkan?", "Lakukan tinjauan pascainsiden, tetapkan pemilik tindakan, dan uji ulang rencana pemulihan.", "Perbaikan terukur mengubah pengalaman menjadi peningkatan kesiapan.", "Lessons Learned"],
      ["Penyelidik menemukan token akses siswa tetap berlaku setelah reset kata sandi.", "Apa penguatan teknis yang diperlukan?", "Cabut token refresh dan sesi aktif saat reset, lalu minta autentikasi ulang.", "Reset kata sandi perlu membatalkan kredensial sesi yang telah dicuri.", "Token Revocation"]
    ]
  },
  {
    district: "restaurant", level: 1,
    distractors: [
      "Simpan nomor kartu utuh bersama CVV dalam catatan reservasi",
      "Kirim nomor telepon pelanggan kepada semua pegawai",
      "Wajibkan izin lokasi permanen untuk setiap pemesanan"
    ],
    questions: [
      ["Pelanggan memesan meja untuk dua orang lewat telepon.", "Data apa yang cukup untuk mengelola reservasi?", "Nama panggilan, waktu, jumlah tamu, dan kontak seperlunya untuk konfirmasi.", "Reservasi tidak membutuhkan data identitas serta pembayaran yang berlebihan.", "Data Minimization"],
      ["Pelanggan memberi nomor telepon untuk kabar meja siap.", "Bolehkah nomor itu otomatis dimasukkan ke daftar promosi?", "Tidak; minta persetujuan terpisah untuk pesan pemasaran.", "Kontak reservasi dikumpulkan untuk tujuan layanan yang berbeda.", "Purpose Limitation"],
      ["Program member menawarkan diskon ulang tahun.", "Bagaimana tanggal lahir dikumpulkan?", "Jadikan opsional, jelaskan manfaatnya, dan minta hanya informasi yang dibutuhkan.", "Tanggal lahir penuh sering lebih banyak daripada yang diperlukan untuk manfaat.", "Data Minimization"],
      ["Restoran memotret pelanggan untuk mengiklankan menu baru.", "Apa yang perlu dilakukan sebelum mengunggah foto?", "Minta izin publikasi yang jelas dan hormati penolakan pelanggan.", "Foto yang dapat mengenali pelanggan adalah data pribadi dalam konteks ini.", "Consent"],
      ["Aplikasi pemesanan meja meminta akses ke daftar kontak ponsel.", "Apa pilihan yang tepat untuk fungsi reservasi?", "Tolak akses kontak jika pelanggan dapat memasukkan penerima secara manual.", "Daftar kontak perangkat tidak diperlukan untuk membuat reservasi.", "Mobile Privacy"],
      ["Kartu antrean meja menampilkan nama lengkap dan nomor telepon.", "Bagaimana papan antrean dibuat lebih aman?", "Tampilkan nomor antrean atau nama depan tanpa detail kontak.", "Pengunjung lain tidak perlu melihat informasi kontak pelanggan.", "Privacy by Design"],
      ["Pelanggan meminta mengubah waktu reservasi.", "Data apa yang perlu diverifikasi?", "Referensi reservasi dan satu detail konfirmasi minimum melalui kanal yang sesuai.", "Verifikasi terbatas mencegah pengambilalihan reservasi tanpa meminta data berlebih.", "Identity Verification"],
      ["Restoran mengumpulkan alamat rumah untuk pesanan makan di tempat.", "Data apa yang patut diminta untuk pesanan makan di tempat?", "Jangan kumpulkan alamat pengiriman bila pesanan tidak memerlukan pengiriman.", "Tujuan layanan menentukan data yang benar-benar diperlukan.", "Purpose Limitation"],
      ["Pelanggan meminta tagihan dikirim ke email setelah makan.", "Bagaimana email tersebut dilindungi?", "Verifikasi alamat dan kirim hanya rincian transaksi yang diperlukan.", "Tagihan dapat mengungkap kebiasaan dan waktu kunjungan pelanggan.", "Secure Communication"],
      ["Restoran menjalankan undian dan meminta nomor identitas seluruh pengunjung.", "Bagaimana pengumpulan data undian dinilai?", "Tentukan persyaratan yang sah dan kumpulkan data minimum hanya dari peserta.", "Keikutsertaan opsional tidak membenarkan pengumpulan identitas semua pengunjung.", "Fair Collection"]
    ]
  },
  {
    district: "restaurant", level: 2,
    distractors: [
      "Hubungkan jaringan tamu langsung ke komputer kasir",
      "Biarkan router memakai kata sandi bawaan pabrik",
      "Berikan akun POS supervisor kepada seluruh pegawai"
    ],
    questions: [
      ["Wi-Fi tamu dan sistem kasir memakai jaringan lokal yang sama.", "Apa perubahan jaringan yang tepat?", "Pisahkan jaringan tamu dari POS dan perangkat operasional.", "Segmentasi menahan pengguna Wi-Fi umum mencapai sistem pembayaran.", "Network Segmentation"],
      ["Pegawai menerima pesan QR menu baru yang meminta login email.", "Apa langkah aman?", "Verifikasi dengan manajer melalui kanal internal dan laporkan QR mencurigakan.", "Kode QR dapat menyembunyikan tautan phishing.", "QR Phishing"],
      ["Router baru dipasang dengan kata sandi admin default.", "Apa konfigurasi awal yang benar?", "Ganti kredensial default dengan rahasia unik dan batasi akses administrasi.", "Kredensial bawaan mudah diketahui dan sering ditargetkan.", "Secure Configuration"],
      ["Kasir meninggalkan terminal POS tanpa pengawasan saat jam sibuk.", "Kontrol apa yang perlu digunakan?", "Kunci sesi otomatis dan wajibkan autentikasi ulang untuk tindakan sensitif.", "Penguncian melindungi transaksi dari akses pengunjung atau staf lain.", "POS Access Control"],
      ["Pegawai magang membutuhkan akses untuk mencetak struk saja.", "Hak apa yang sebaiknya diberikan?", "Peran kasir terbatas tanpa akses laporan atau konfigurasi pembayaran.", "Hak minimum membatasi kesalahan dan penyalahgunaan.", "Least Privilege"],
      ["Restoran memasang aplikasi kasir dari tautan forum.", "Bagaimana perangkat lunak diperoleh?", "Pasang versi resmi dari vendor tepercaya dan verifikasi pembaruan.", "Sumber resmi menekan risiko aplikasi yang dimodifikasi.", "Software Supply Chain"],
      ["Kamera keamanan dapat diakses dari internet memakai kata sandi lemah.", "Apa tindakan pengamanan?", "Ubah kata sandi, nonaktifkan akses publik yang tidak perlu, dan batasi jaringan.", "Antarmuka kamera terbuka dapat menjadi pintu masuk jaringan.", "IoT Security"],
      ["Pegawai membagikan jadwal kerja melalui akun cloud pribadi.", "Apa proses yang lebih aman?", "Gunakan sistem kerja yang disetujui dengan akses hanya untuk staf terkait.", "Akun pribadi menghilangkan kendali organisasi atas jadwal dan akses.", "Approved Services"],
      ["Tablet pemesanan masih login setelah pelanggan sebelumnya selesai.", "Bagaimana sesi tamu ditangani?", "Akhiri sesi, bersihkan data lokal, dan cegah pesanan sebelumnya terlihat.", "Perangkat bersama dapat membocorkan nama, alergi, atau pilihan pelanggan.", "Session Management"],
      ["Pemasok meminta kredensial Wi-Fi utama untuk mendiagnosis printer.", "Akses apa yang sebaiknya disediakan?", "Buat akses dukungan sementara pada jaringan terpisah dan cabut setelah pekerjaan.", "Akses terbatas dan sementara mengurangi paparan jaringan restoran.", "Vendor Access"]
    ]
  },
  {
    district: "restaurant", level: 3,
    distractors: [
      "Hapus rekaman transaksi agar tidak ada bukti yang tersisa",
      "Berikan akun cloud global kepada teknisi tanpa batas waktu",
      "Pindahkan cadangan POS ke USB yang selalu tersambung"
    ],
    questions: [
      ["POS tidak dapat menyelesaikan pembayaran dan mencatat transaksi yang sama dua kali.", "Bagaimana kasir mencegah tagihan ganda saat pemulihan?", "Cocokkan nomor transaksi dengan konfirmasi acquirer sebelum mencoba ulang.", "Rekonsiliasi mencegah pelanggan ditagih lebih dari sekali.", "Payment Reconciliation"],
      ["Teknisi jarak jauh meminta akses tanpa batas ke jaringan restoran saat makan malam.", "Bagaimana akses dukungan diberikan?", "Jadwalkan sesi yang disetujui dengan hak minimum, MFA, pengawasan, dan batas waktu.", "Akses vendor terkontrol mengurangi risiko saat sistem sedang sibuk.", "Remote Vendor Access"],
      ["Tablet pemesanan hilang setelah layanan selesai.", "Apa respons awal yang tepat?", "Cabut sesi, kunci atau hapus perangkat dari jarak jauh, lalu periksa data yang tersimpan.", "Pencabutan akses membatasi penyalahgunaan perangkat yang hilang.", "Lost Device Response"],
      ["Karyawan menerima pesan dari 'pemilik' yang meminta membeli kartu hadiah dan merahasiakannya.", "Apa cara mencegah penipuan ini?", "Konfirmasi permintaan pembayaran lewat kanal yang sudah dikenal dan laporkan tekanan rahasia.", "Urgensi dan kerahasiaan adalah tanda umum rekayasa sosial.", "Social Engineering"],
      ["Pelanggan menerima struk digital milik meja lain.", "Apa yang perlu dilakukan restoran?", "Hentikan pengiriman yang keliru, laporkan, identifikasi transaksi terdampak, dan koreksi alamat penerima.", "Kesalahan penerima dapat mengungkap detail kunjungan dan pembayaran.", "Data Disclosure Response"],
      ["Akun layanan POS cloud masih aktif milik mantan manajer.", "Apa langkah offboarding?", "Nonaktifkan akun dan token, pindahkan kepemilikan, serta tinjau perubahan terakhir.", "Akun lama merupakan jalur akses yang tidak lagi memiliki pemilik.", "Identity Lifecycle"],
      ["Jaringan restoran menunjukkan perangkat asing memindai port komputer kasir.", "Apa langkah containment?", "Isolasi segmen atau perangkat terdampak dan simpan log untuk investigasi.", "Containment mengurangi perpindahan penyerang tanpa menghancurkan bukti.", "Network Incident Response"],
      ["Pegawai melihat pembaruan aplikasi POS muncul dari situs yang tidak dikenal.", "Apa tindakan yang aman?", "Jangan pasang; verifikasi paket melalui kanal vendor resmi dan beri tahu TI.", "Pembaruan palsu dapat membawa malware ke sistem pembayaran.", "Patch Integrity"],
      ["Sistem reservasi cloud tak tersedia saat jam makan malam.", "Bagaimana restoran tetap melayani tanpa menyebarkan data?", "Gunakan prosedur offline minimum yang disetujui dan masukkan catatan secara aman setelah pulih.", "Prosedur darurat menjaga layanan tanpa mencatat data pelanggan secara sembarangan.", "Operational Resilience"],
      ["Ransomware mengunci komputer kantor tetapi terminal pembayaran masih berjalan.", "Bagaimana jaringan ditangani?", "Isolasi komputer terdampak dan pastikan segmen pembayaran tidak terhubung sebelum operasi lanjut.", "Pemisahan mencegah ancaman merambat ke sistem transaksi.", "Ransomware Containment"],
      ["Cadangan konfigurasi router disimpan pada folder publik pemasok.", "Apa perlindungan yang tepat?", "Pindahkan ke repositori terenkripsi dengan akses bernama dan tinjau siapa yang mengunduh.", "Konfigurasi dapat mengungkap rahasia jaringan dan harus dikendalikan.", "Configuration Security"],
      ["Perangkat pemesanan meminta data alergi tetapi kemudian mengirimkannya ke sistem analitik iklan.", "Apa tindakan desain yang tepat?", "Pisahkan data layanan dari analitik dan larang pengiriman data sensitif untuk iklan.", "Informasi alergi tidak relevan dengan pelacakan pemasaran.", "Sensitive Data Purpose Limitation"],
      ["Pelanggan meminta riwayat pesanan member dihapus.", "Bagaimana permintaan ditangani?", "Verifikasi akun, hapus data yang tidak wajib dipertahankan, dan dokumentasikan pengecualian.", "Proses penghapusan tetap mempertimbangkan kewajiban transaksi.", "Data Rights"],
      ["Kasir mengirim foto struk yang memuat empat digit kartu dan waktu transaksi ke grup umum.", "Bagaimana kebiasaan ini diperbaiki?", "Hapus unggahan, gunakan tiket privat, dan redaksi pengenal transaksi sebelum berbagi.", "Detail transaksi dapat membantu penipu walau nomor kartu tidak lengkap.", "Payment Data Confidentiality"],
      ["Kode QR pada meja diganti stiker yang mengarah ke situs pembayaran palsu.", "Apa respons operasionalnya?", "Tarik QR yang dimanipulasi, pasang kode tepercaya, dan peringatkan pelanggan melalui staf.", "Pemulihan fisik dan pemberitahuan mengurangi korban lanjutan.", "QR Tampering"],
      ["Aplikasi pemasok meminta akses ke semua lokasi restoran untuk mencetak pesanan.", "Apa evaluasi yang diperlukan?", "Batasi izin pada lokasi dan fungsi yang benar-benar diperlukan atau pilih integrasi lain.", "Izin luas dapat membuka data atau kontrol lokasi lain.", "Integration Permissions"],
      ["Penyelia mengunduh laporan penjualan ke flash drive pribadi.", "Apa tindakan pencegahan?", "Gunakan ekspor terkontrol ke perangkat terenkripsi milik organisasi dengan data minimum.", "Media pribadi mudah hilang dan tidak dapat diaudit.", "Removable Media Control"],
      ["Restoran menduga kredensial Wi-Fi staf bocor di media sosial.", "Bagaimana restoran mengamankan Wi-Fi setelah kredensial staf bocor?", "Rotasi kredensial, cabut sesi lama, dan gunakan jaringan tamu terpisah.", "Rotasi dan segmentasi mencegah kredensial bocor mencapai POS.", "Credential Exposure"],
      ["Mesin kasir tidak menerima pembaruan karena sertifikat vendor tidak cocok.", "Apa yang harus dilakukan teknisi?", "Hentikan instalasi dan verifikasi paket serta sertifikat melalui dukungan resmi.", "Ketidakcocokan sertifikat dapat menandakan paket palsu atau gangguan.", "Update Verification"],
      ["Pelanggan melaporkan akun member dipakai untuk menukar poin tanpa izin.", "Apa langkah pemulihan?", "Kunci sesi, verifikasi pemilik melalui kanal resmi, dan periksa jejak penukaran.", "Pengamanan akun dan audit membantu menghentikan penyalahgunaan lanjutan.", "Loyalty Account Security"],
      ["Server reservasi menyimpan nomor telepon dalam log kesalahan tanpa batas waktu.", "Bagaimana log reservasi menghindari penyimpanan nomor telepon berlebihan?", "Redaksi nomor dari log dan tetapkan retensi serta akses terbatas.", "Log diagnostik tidak perlu menjadi arsip identitas pelanggan.", "Log Minimization"],
      ["Pelanggan mengirim data kartu melalui pesan media sosial restoran.", "Apa respons agen?", "Jangan meneruskan atau menyimpan data; minta pelanggan memakai kanal pembayaran resmi.", "Pesan sosial bukan kanal yang aman untuk rincian kartu.", "Secure Payment Channel"],
      ["Toko pemasok meminta membuka port firewall POS untuk selamanya.", "Bagaimana permintaan ini dikelola?", "Tolak akses permanen; gunakan koneksi yang dibatasi, disetujui, dipantau, dan berakhir otomatis.", "Port terbuka jangka panjang memperbesar permukaan serangan.", "Firewall Change Control"],
      ["Seorang pegawai melihat pesanan meja VIP pada akun yang tidak terkait pekerjaannya.", "Apa perilaku yang sesuai?", "Jangan menyalin informasi dan laporkan kemungkinan salah konfigurasi kepada manajer.", "Akses tidak sengaja tetap harus ditangani tanpa memperluas paparan.", "Insider Privacy"],
      ["Penyedia cloud mengumumkan insiden yang mungkin mencakup data reservasi.", "Informasi apa yang perlu diminta restoran?", "Cakupan data, waktu paparan, mitigasi, bukti, dan langkah pemberitahuan yang relevan.", "Informasi terperinci membantu restoran menilai dampak pada pelanggan.", "Vendor Incident Assurance"],
      ["Setelah router diganti, perangkat tamu dapat menjangkau printer dapur dan POS.", "Apa perbaikan konfigurasi?", "Terapkan aturan segmentasi dan uji bahwa jaringan tamu tidak dapat mencapai perangkat internal.", "Uji konektivitas membuktikan batas keamanan benar-benar berlaku.", "Segmentation Validation"],
      ["Pencadangan POS gagal beberapa hari dan tidak ada peringatan yang ditinjau.", "Bagaimana proses diperkuat?", "Pantau kegagalan, tetapkan pemilik peringatan, dan lakukan uji pemulihan berkala.", "Cadangan tanpa pemantauan dapat gagal diam-diam saat dibutuhkan.", "Backup Monitoring"],
      ["Pelanggan mengirim foto anaknya dan nomor meja untuk meminta unggahan media sosial.", "Bagaimana staf menangani foto tersebut?", "Pastikan izin publikasi mencakup orang yang tampak dan hindari menambahkan data lokasi atau identitas.", "Foto anak dan metadata lokasi dapat mengungkap lebih dari yang disadari.", "Image Privacy"],
      ["Log akses POS menunjukkan perubahan rekening penyelesaian setelah jam tutup.", "Bagaimana perubahan itu diverifikasi?", "Hubungi pemilik melalui kanal tepercaya, tahan pembayaran bila prosedur mengizinkan, dan simpan audit log.", "Verifikasi independen mendeteksi pengalihan dana dan menjaga bukti.", "Settlement Fraud"],
      ["Restoran selesai memulihkan operasi setelah insiden dan beberapa perangkat diganti.", "Bagaimana memastikan lingkungan baru aman?", "Inventaris perangkat, pasang konfigurasi dasar, rotasi rahasia, dan uji pemisahan jaringan.", "Penggantian perangkat perlu diikuti penguatan serta validasi kontrol.", "Post-Incident Hardening"]
    ]
  }
);

let nextAdditionalQuestionId = 41;
ADDITIONAL_QUESTION_BANKS.forEach(bank => {
  bank.questions.forEach((entry, index) => {
    const [scenario, question, correctOption, explanation, principle] = entry;
    const answer = index % 4;
    const options = bank.distractors.slice();
    options.splice(answer, 0, correctOption);
    QUESTIONS_DATA.push({
      id: nextAdditionalQuestionId++,
      district: bank.district,
      level: bank.level,
      scenario,
      question,
      options,
      answer,
      explanation,
      principle
    });
  });
});

const bankCounts = new Map();
QUESTIONS_DATA.forEach(question => {
  const bankId = `${question.district}-${question.level}`;
  bankCounts.set(bankId, (bankCounts.get(bankId) || 0) + 1);
});
["hospital", "eshop", "school", "restaurant"].forEach(district => {
  for (let level = 1; level <= 3; level++) {
    const count = bankCounts.get(`${district}-${level}`) || 0;
    if (count !== 30) {
      console.error(`Question bank ${district} level ${level} has ${count} questions; exactly 30 are required.`);
    }
  }
});

window.QUESTIONS_DATA = QUESTIONS_DATA;
