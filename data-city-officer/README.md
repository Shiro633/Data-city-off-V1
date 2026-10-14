# DATA CITY OFFICER: GUARDIANS OF DATA CITY

**Game 2D Trivia / Edukatif Cybersecurity & Data Privacy Berbasis Browser (HTML5, CSS3, JS ES6+)**

---

## 🎮 TENTANG GAME

Pemain berperan sebagai **Data City Officer**, seorang petugas pertahanan siber muda yang bertugas melindungi **Data City** dari ancaman kebocoran privasi, serangan ransomware, phising, pencurian kredensial, dan eksploitasi data ilegal.

Game ini mencakup **4 Distrik** dengan total **40 Skenario Pertanyaan Edukatif**:

1. 🏥 **Hospital District (Dr. Maya - Chief Medical Officer)**
   * **Level 1:** Pendaftaran Pasien Baru *(Data Collection & Minimization)*
   * **Level 2:** Perlindungan Data Pasien *(Data Protection & Sharing, Encryption, Ransomware, Audit Log)*
2. 🛒 **E-Shop District (Alex - Cybersecurity Lead)**
   * **Level 1:** Transaksi Pelanggan *(PCI-DSS, CVV, Consent, Right to Erasure)*
   * **Level 2:** Menghadapi Ancaman Siber *(HTTPS, SQL Injection, 2FA, Phishing, Brute Force)*
3. 🏫 **School District (Ms. Rina - Principal & EdTech Head)**
   * **Level 1:** Pendaftaran Siswa Baru *(Sensitive Data, Biometrics, Need to Know, Child Privacy)*
   * **Level 2:** Melindungi Data Sekolah *(Cloud Security, Malware, Account Sharing, Data Disposal)*
4. 🍽️ **Restaurant District (Chef Budi - Restaurant Owner)**
   * **Level 1:** Program Loyalitas Pelanggan *(Minimisasi Data, Opt-Out SMS, Privacy by Design)*
   * **Level 2:** Keamanan Jaringan Restoran *(Segmentasi Wi-Fi Tamu, Default Passwords, Incident Response)*

---

## 🚀 CARA MENJALANKAN GAME

Game ini 100% *client-side* murni tanpa membutuhkan database atau backend server.

### Cara 1: Python HTTP Server (Rekomendasi)
Buka terminal di folder project, lalu jalankan:
```bash
python -m http.server 8000
```
Buka browser di alamat: `http://localhost:8000`

### Cara 2: Live Server di VS Code
1. Klik kanan pada `index.html`.
2. Pilih **"Open with Live Server"**.

### Cara 3: Langsung Buka File di Browser
Klik dua kali file `index.html` langsung dari file explorer Windows.

---

## 📁 STRUKTUR PROJECT

```text
data-city-officer/
│
├── index.html            # Halaman utama game
├── DCO.html              # Entry point alternatif / redirect
│
├── css/
│   ├── style.css         # Desain sistem global, warna cyber neon, tipografi
│   ├── city.css          # Canvas world, HUD, minimap, dialog & kontrol sentuh
│   ├── menu.css          # Splash screen, menu utama, tutorial, modal briefing
│   ├── map.css           # Peta 2D kota, node distrik, progress bar security
│   ├── quiz.css          # UI pertanyaan, timer HUD, opsi jawaban, feedback modal
│   └── animations.css    # Animasi CSS, glitch, red strobe, shake, victory jump
│
├── js/
│   ├── main.js           # Entry point, canvas cyber background, event listeners
│   ├── game.js           # Core game engine, 30s timer, sistem lives, data breach, evaluasi
│   ├── city.js           # Eksplorasi 2D, camera follow, collision, NPC & misi
│   ├── state.js          # Central game state, konfigurasi distrik, peringkat, achievement
│   ├── questions.js      # Bank 40 soal skenario lengkap dengan penjelasan & prinsip
│   ├── ui.js             # Render tampilan, SVG karakter adaptif, feedback, toast, confetti
│   ├── audio.js          # Procedural Web Audio API sound synthesizer
│   └── storage.js        # LocalStorage save/load/reset manager dengan safe fallback
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── audio/
│
└── README.md
```

---

## ⚙️ FITUR UTAMA & ATURAN GAME

* **Timer 90 Detik:**
  * 90–21 detik: Normal. Jawab dalam 30 detik pertama (saat waktu tersisa >60 detik) untuk mendapatkan **+50 Speed Bonus**!
  * 20–11 detik: Peringatan (Warning pulse).
  * 10–0 detik: Kritis (Critical beep). Waktu habis dihitung sebagai jawaban salah.
* **Sistem Nyawa (Lives):**
  * ❤️❤️❤️ (3 Nyawa per level).
  * Salah 1: Warning risiko privasi.
  * Salah 2: Security Alert & pemotongan 50% skor level.
  * Salah 3: **DATA BREACH!** Layar bergetar keras, strobe merah, sirine berbunyi, dan level diulang dari awal (tanpa menghapus distrik lain yang sudah tamat).
* **Power-Ups (1x per level):**
  * 🔍 **Audit Log (Tombol L):** Mengeliminasi 2 opsi jawaban yang salah.
  * 🔐 **Encryption (Tombol E):** Membekukan timer selama 7 detik.
* **Karakter Utama Interaktif:**
  * Dibuat menggunakan SVG/CSS murni dengan ekspresi dinamis (*idle, thinking, happy, worried, shocked, victory*).
* **Web Audio API Synthesizer:**
  * Bebas dari ketergantungan file audio eksternal. Menghasilkan suara prosedural (*correct chime, wrong buzz, warning, breach alarm, victory tune, powerup sound*).
  * Efek suara dapat dimatikan atau dinyalakan melalui tombol suara di navigasi atas dan pengaturan.
* **Penyimpanan Lokal (LocalStorage):**
  * Otomatis menyimpan skor, distrik yang terbuka, badge, dan achievement.
  * Dilengkapi tombol *Continue Mission* dan opsi *Reset Game Data* dengan dialog konfirmasi.
* **Sistem Peringkat Akhir (0–4000 Base Score):**
  * 0–1000: *Rookie Officer*
  * 1001–2500: *Junior Officer*
  * 2501–3500: *Senior Officer*
  * 3501–4000: *Chief Data Guardian*

---

## ⌨️ KONTROL KEYBOARD & AKSESIBILITAS

Di world kota, gunakan `WASD` atau tombol panah untuk bergerak, `E` untuk berbicara/memeriksa objek, dan `Esc` untuk pause. Pada perangkat sentuh, directional pad dan tombol interaksi akan muncul otomatis. Dekati NPC distrik untuk memulai dua misi bertahap; setiap misi menjalankan lima pertanyaan asli dari bank 40 soal.

Setelah tutorial, game masuk ke world 2D Data City. Pemain dapat menjelajahi empat lokasi, menyelesaikan misi melalui NPC, lalu kembali ke kota untuk melanjutkan progression. Posisi, XP, security kota, skor, badge, dan progression distrik tersimpan secara lokal. Peta distrik berbasis kartu tetap tersedia sebagai layar lama.

* `1` atau `A`: Memilih Opsi A
* `2` atau `B`: Memilih Opsi B
* `3` atau `C`: Memilih Opsi C
* `4` atau `D`: Memilih Opsi D
* `L`: Mengaktifkan Power-Up *Audit Log*
* `E`: Mengaktifkan Power-Up *Encryption*
* `Spasi` / `Enter`: Melanjutkan dialog feedback atau tutorial
* Dukungan penuh navigasi keyboard, tab fokus, dan layar sentuh responsif di perangkat mobile/tablet.
