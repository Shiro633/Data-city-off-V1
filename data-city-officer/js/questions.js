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

window.QUESTIONS_DATA = QUESTIONS_DATA;
