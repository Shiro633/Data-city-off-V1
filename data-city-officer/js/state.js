/* ==========================================================================
   DATA CITY OFFICER: GUARDIANS OF DATA CITY
   Game State & Districts Registry
   ========================================================================== */

const DISTRICTS_CONFIG = {
  hospital: {
    id: "hospital",
    name: "Hospital District",
    npcName: "Dr. Maya",
    npcRole: "Chief Medical Officer",
    npcAvatar: "👩‍⚕️",
    icon: "🏥",
    topic: "Medical Data Privacy",
    briefing: {
      quote: "Officer! Rumah sakit kami menghadapi tantangan serius dalam pengelolaan rekam medis dan data pasien. Sebagian staf belum memahami batasan privasi data dan ada ancaman serangan ransomware yang mengintai. Bantu kami mengamankan data pasien!",
      level1Title: "Pendaftaran Pasien Baru",
      level1Desc: "Aturan minimisasi data dan hak akses data medis",
      level2Title: "Perlindungan Data Pasien",
      level2Desc: "Enkripsi, audit log, penanganan ransomware & pembagian data"
    },
    badge: "Medical Data Guardian",
    badgeIcon: "🩺"
  },
  eshop: {
    id: "eshop",
    name: "E-Shop District",
    npcName: "Alex",
    npcRole: "Cybersecurity Lead",
    npcAvatar: "🧑‍💻",
    icon: "🛒",
    topic: "Customer & Transaction Data",
    briefing: {
      quote: "Officer, sistem transaksi toko online kami dibanjiri upaya peretasan dan kebocoran kartu pembayaran! Kami butuh arahan tegas untuk menerapkan standar PCI-DSS, 2FA, HTTPS, dan mencegah injeksi SQL berbahaya!",
      level1Title: "Transaksi Pelanggan",
      level1Desc: "Pengumpulan data pembayaran, privasi lokasi & CVV",
      level2Title: "Menghadapi Ancaman Siber",
      level2Desc: "Serangan SQLi, Brute Force, Phishing & HTTPS"
    },
    badge: "Cyber Commerce Shield",
    badgeIcon: "💳"
  },
  school: {
    id: "school",
    name: "School District",
    npcName: "Ms. Rina",
    npcRole: "Principal & EdTech Head",
    npcAvatar: "👩‍🏫",
    icon: "🏫",
    topic: "Student Data Privacy",
    briefing: {
      quote: "Selamat datang di Akademi Data City, Officer! Era digital memudahkan administrasi, namun data pribadi anak-anak, biometrik, dan rapor sekolah sangat rentan dieksploitasi pihak ketiga. Lindungi masa depan generasi muda!",
      level1Title: "Pendaftaran Siswa Baru",
      level1Desc: "Data sensitif, biometrik, dan hak privasi anak",
      level2Title: "Melindungi Data Sekolah",
      level2Desc: "Keamanan cloud, phishing, akun admin & sanitasi harddisk"
    },
    badge: "Campus Privacy Defender",
    badgeIcon: "🎓"
  },
  restaurant: {
    id: "restaurant",
    name: "Restaurant District",
    npcName: "Chef Budi",
    npcRole: "Restaurant Owner & Manager",
    npcAvatar: "👨‍🍳",
    icon: "🍽️",
    topic: "Customer Privacy & Network Security",
    briefing: {
      quote: "Halo Officer! Di restoran kami, pelanggan ingin menikmati hidangan dengan nyaman. Namun Free Wi-Fi dan mesin kasir POS cloud kami perlu dipastikan aman dari pengintaian data kartu dan kebocoran akun member!",
      level1Title: "Program Loyalitas Pelanggan",
      level1Desc: "Minimisasi data member, izin aplikasi & opt-out SMS",
      level2Title: "Keamanan Jaringan Restoran",
      level2Desc: "Segmentasi Wi-Fi tamu, password default & respon insiden"
    },
    badge: "Hospitality Security Chief",
    badgeIcon: "🍴"
  }
};

const INITIAL_STATE = {
  screen: "splash",
  playerName: "Officer",
  playerPosition: { x: 900, y: 620 },
  xp: 0,
  citySecurity: 0,
  cityVisited: false,
  currentDistrict: "hospital",
  currentLevel: 1,
  currentQuestionIndex: 0,
  levelQuestions: [],

  lives: 3,

  score: {
    baseScore: 0,
    speedBonus: 0,
    totalScore: 0
  },

  currentLevelScore: 0,
  currentLevelSpeedBonus: 0,
  currentLevelStartXP: 0,

  timer: 90,
  isTimerPaused: false,
  timerFrozenUntil: null,

  powerUps: {
    auditLog: 1,
    encryption: 1
  },
  powerUpsUsedThisLevel: {
    auditLog: false,
    encryption: false
  },

  districts: {
    hospital: {
      unlocked: true,
      level1Complete: false,
      level2Complete: false,
      security: 20
    },
    eshop: {
      unlocked: true,
      level1Complete: false,
      level2Complete: false,
      security: 20
    },
    school: {
      unlocked: true,
      level1Complete: false,
      level2Complete: false,
      security: 20
    },
    restaurant: {
      unlocked: true,
      level1Complete: false,
      level2Complete: false,
      security: 20
    }
  },

  completedDistricts: [],

  achievements: [
    {
      id: "data_guardian",
      name: "Data Guardian",
      icon: "🔐",
      desc: "Menjawab 10 soal benar",
      unlocked: false
    },
    {
      id: "privacy_protector",
      name: "Privacy Protector",
      icon: "🛡️",
      desc: "Menyelesaikan distrik tanpa Data Breach",
      unlocked: false
    },
    {
      id: "speed_officer",
      name: "Speed Officer",
      icon: "⚡",
      desc: "Mendapatkan 5 speed bonus",
      unlocked: false
    },
    {
      id: "audit_master",
      name: "Audit Master",
      icon: "🔍",
      desc: "Menggunakan Audit Log secara efektif",
      unlocked: false
    },
    {
      id: "chief_guardian",
      name: "Chief Data Guardian",
      icon: "🏆",
      desc: "Mencapai score 3501+",
      unlocked: false
    }
  ],

  stats: {
    totalCorrect: 0,
    totalSpeedBonuses: 0,
    breachesInCurrentDistrict: 0,
    auditLogsUsed: 0
  },

  settings: {
    soundEnabled: true,
    musicEnabled: true
  }
};

class GameStateManager {
  constructor() {
    this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
  }

  reset() {
    this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
    return this.state;
  }

  load(saved) {
    if (!saved) return;
    if (saved.playerName) this.state.playerName = saved.playerName;
    if (saved.playerPosition && Number.isFinite(saved.playerPosition.x) && Number.isFinite(saved.playerPosition.y)) {
      this.state.playerPosition = { x: saved.playerPosition.x, y: saved.playerPosition.y };
    }
    if (typeof saved.cityVisited === "boolean") this.state.cityVisited = saved.cityVisited;
    if (Number.isFinite(saved.xp)) this.state.xp = Math.max(0, saved.xp);
    if (Number.isFinite(saved.citySecurity)) this.state.citySecurity = Math.min(100, Math.max(0, saved.citySecurity));
    if (saved.currentDistrict) this.state.currentDistrict = saved.currentDistrict;
    if (saved.completedDistricts) this.state.completedDistricts = saved.completedDistricts;
    if (saved.districts) {
      this.state.districts = { ...this.state.districts, ...saved.districts };
      // Ensure all 4 districts are accessible
      ["hospital", "eshop", "school", "restaurant"].forEach(dKey => {
        if (this.state.districts[dKey]) {
          this.state.districts[dKey].unlocked = true;
        }
      });
    }
    if (saved.score) {
      this.state.score.baseScore = saved.score.baseScore || 0;
      this.state.score.speedBonus = saved.score.speedBonus || 0;
      this.state.score.totalScore = this.state.score.baseScore + this.state.score.speedBonus;
    }
    if (saved.settings) {
      this.state.settings = { ...this.state.settings, ...saved.settings };
    }
    if (saved.achievements && Array.isArray(saved.achievements)) {
      this.state.achievements.forEach(ach => {
        const found = saved.achievements.find(s => s.id === ach.id);
        if (found && found.unlocked) ach.unlocked = true;
      });
    }
    if (saved.powerUps) {
      this.state.powerUps = {
        auditLog: Math.max(1, saved.powerUps.auditLog || 1),
        encryption: Math.max(1, saved.powerUps.encryption || 1)
      };
    } else {
      this.state.powerUps = { auditLog: 1, encryption: 1 };
    }
    const completedMissions = ["hospital", "eshop", "school", "restaurant"].reduce((count, key) => {
      const district = this.state.districts[key];
      return count + Number(district.level1Complete) + Number(district.level2Complete);
    }, 0);
    this.state.citySecurity = Number((completedMissions * 12.5).toFixed(1));
  }

  getRank(baseScore) {
    if (baseScore <= 1000) return { title: "Rookie Officer", badge: "🥉", color: "#8b9bb4" };
    if (baseScore <= 2500) return { title: "Junior Officer", badge: "🥈", color: "#38bdf8" };
    if (baseScore <= 3500) return { title: "Senior Officer", badge: "🥇", color: "#00f090" };
    return { title: "Chief Data Guardian", badge: "👑", color: "#f59e0b" };
  }
}

window.DISTRICTS_CONFIG = DISTRICTS_CONFIG;
window.GameState = new GameStateManager();
