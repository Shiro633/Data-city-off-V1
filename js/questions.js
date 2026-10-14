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
      ["Situs memakai pustaka pembayaran yang memiliki kerentanan kritis.", "Apa langkah pemeliharaan yang tepat?", "Perbarui ke versi aman setelah pengujian dan pantau advisori keamanan.", "Pembaruan terverifikasi menutup kerentanan yang diketahui.", "Vulnerability Management"],
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
      ["Formulir siswa mencantumkan akun media sosial pribadi sebagai syarat wajib.", "Apa yang sebaiknya dilakukan sekolah?", "Jadikan opsional atau hapus jika akun itu tidak diperlukan untuk pendidikan.", "Akun pribadi tidak relevan sebagai syarat umum pendaftaran siswa.", "Data Minimization"]
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
      ["Akun admin sistem POS dipakai beberapa pegawai dengan kata sandi yang sama.", "Apa perbaikan yang tepat?", "Buat akun individual, gunakan MFA, dan berikan hak akses sesuai peran.", "Akun individual memungkinkan atribusi aktivitas dan kontrol akses.", "Identity & Access Management"],
      ["Wi-Fi tamu restoran tidak memerlukan isolasi antarperangkat.", "Apa pengaturan yang mengurangi risiko serangan dari satu pelanggan ke pelanggan lain?", "Aktifkan isolasi klien pada jaringan tamu dan batasi akses ke jaringan internal.", "Isolasi mencegah perangkat tamu saling menjangkau dan mencapai POS.", "Wi-Fi Security"],
      ["Perangkat POS lama tidak lagi menerima pembaruan keamanan.", "Apa rencana yang bertanggung jawab?", "Ganti atau isolasi perangkat dan susun migrasi ke sistem yang didukung.", "Perangkat usang rentan karena kerentanan baru tidak lagi diperbaiki.", "Vulnerability Management"],
      ["Pegawai menerima lampiran email yang mengaku sebagai faktur pemasok.", "Apa tindakan yang aman sebelum membuka lampiran?", "Verifikasi pengirim melalui kontak yang dikenal dan laporkan pesan mencurigakan.", "Verifikasi mencegah lampiran berbahaya menginfeksi perangkat restoran.", "Phishing Prevention"],
      ["Data akun admin cloud restoran diduga dicuri.", "Apa tindakan segera untuk membatasi akses penyerang?", "Cabut sesi aktif, rotasi kredensial, aktifkan MFA, dan investigasi log.", "Pencabutan sesi dan rotasi kredensial menahan pengambilalihan akun.", "Incident Response"],
      ["Router restoran memakai firmware dengan kerentanan yang telah diperbaiki vendor.", "Apa langkah pemeliharaan yang tepat?", "Perbarui firmware dari sumber resmi setelah menguji konfigurasi dan konektivitas.", "Pembaruan resmi menutup kerentanan yang diketahui.", "Patch Management"],
      ["Restoran menyimpan cadangan konfigurasi POS di komputer kasir yang sama.", "Bagaimana cadangan seharusnya dilindungi?", "Simpan salinan terenkripsi terpisah dengan akses terbatas dan uji pemulihan.", "Cadangan terpisah membantu pemulihan jika perangkat kasir gagal atau diserang.", "Backup Security"],
      ["Mesin POS mengirim log yang memuat nomor kartu ke layanan pemantauan.", "Apa perubahan yang perlu dilakukan?", "Redaksi data pembayaran dari log sebelum dikirim atau disimpan.", "Log sebaiknya tidak mengandung data kartu sensitif.", "Secure Logging"],
      ["Wi-Fi tamu menggunakan kata sandi yang sama selama bertahun-tahun.", "Bagaimana akses tamu dikelola lebih aman?", "Gunakan kredensial tamu yang diganti berkala atau portal akses dengan isolasi jaringan.", "Rotasi kredensial dan isolasi mengurangi penyalahgunaan akses lama.", "Wi-Fi Security"],
      ["Karyawan yang berhenti masih mengetahui kode akses panel router.", "Apa tindakan yang perlu dilakukan?", "Cabut akses karyawan dan ubah kredensial bersama yang pernah ia ketahui.", "Perubahan personel harus diikuti pencabutan akses dan rotasi rahasia.", "Identity Lifecycle"],
      ["Restoran mendeteksi pengiriman data transaksi ke alamat server yang tidak dikenal.", "Apa respons yang paling tepat?", "Isolasi perangkat terdampak, pertahankan log, dan aktifkan prosedur tanggap insiden.", "Isolasi membatasi kebocoran sementara bukti membantu investigasi.", "Incident Response"]
    ]
  }
];

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

window.QUESTIONS_DATA = QUESTIONS_DATA;
