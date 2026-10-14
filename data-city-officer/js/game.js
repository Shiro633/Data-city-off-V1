/* ==========================================================================
   DATA CITY OFFICER: GUARDIANS OF DATA CITY
   Game Core Controller, Logic Engine, Rules & Mechanics
   ========================================================================== */

class GameController {
  constructor() {
    this.timerInterval = null;
    this.isAnsweringLocked = false;
    this.auditLogUsedForCurrentQuestion = false;
    this.encryptionUsedForCurrentQuestion = false;
    this.districtOrder = ["hospital", "eshop", "school", "restaurant"];
    this.currentTutorialStep = 0;
  }

  /**
   * Initialize or resume game
   */
  init() {
    const saved = StorageManager.loadGame();
    if (saved) {
      GameState.load(saved);
      console.log("Loaded existing progress from LocalStorage.");
    }
    this.auditLogUsedForCurrentQuestion = false;
    this.encryptionUsedForCurrentQuestion = false;
    AudioManager.toggleSound(GameState.state.settings.soundEnabled);
    UIManager.updateHeader(GameState.state);
    UIManager.renderMap(GameState.state);
    this.bindEvents();
  }

  /**
   * Start New Game Flow
   */
  startNewGame() {
    GameState.reset();
    this.auditLogUsedForCurrentQuestion = false;
    this.encryptionUsedForCurrentQuestion = false;
    StorageManager.saveGame(GameState.state);
    UIManager.updateHeader(GameState.state);
    UIManager.renderMap(GameState.state);
    CityWorld.resetPlayer();
    UIManager.setCharacterExpression("idle");
    this.openTutorial();
  }

  /**
   * Play Again Flow (Main Lagi setelah menuntaskan seluruh distrik)
   * Mengulang distrik tapi tetap menjamin dan mempertahankan stok Power-Up (Audit Log & Encryption)
   */
  playAgain() {
    const state = GameState.state;
    // Reset status level distrik agar bisa dimainkan lagi
    this.districtOrder.forEach(k => {
      if (state.districts[k]) {
        state.districts[k].level1Complete = false;
        state.districts[k].level2Complete = false;
        state.districts[k].security = 20;
        state.districts[k].unlocked = true;
      }
    });
    state.completedDistricts = [];
    state.currentDistrict = "hospital";
    state.currentLevel = 1;
    state.currentQuestionIndex = 0;
    state.lives = 3;
    state.currentLevelScore = 0;
    state.currentLevelSpeedBonus = 0;
    state.currentLevelStartXP = state.xp || 0;

    // Pastikan power-up selalu tersedia (minimal 1 masing-masing, atau pertahankan reward yang sudah terkumpul)
    if (!state.powerUps) {
      state.powerUps = { auditLog: 1, encryption: 1 };
    } else {
      state.powerUps.auditLog = Math.max(1, state.powerUps.auditLog || 0);
      state.powerUps.encryption = Math.max(1, state.powerUps.encryption || 0);
    }
    state.powerUpsUsedThisLevel = { auditLog: false, encryption: false };
    this.auditLogUsedForCurrentQuestion = false;
    this.encryptionUsedForCurrentQuestion = false;
    state.isTimerPaused = false;
    state.timerFrozenUntil = null;

    StorageManager.saveGame(state);
    UIManager.updateHeader(state);
    UIManager.renderMap(state);
    UIManager.setCharacterExpression("idle");
    UIManager.showToast("MISI BARU AKTIF!", "Semua distrik siap dimainkan kembali. Power-up siap digunakan!", "normal");
    this.goToCity();
  }

  /**
   * Continue Existing Game
   */
  continueGame() {
    const saved = StorageManager.loadGame();
    if (saved) {
      GameState.load(saved);
      UIManager.updateHeader(GameState.state);
      UIManager.renderMap(GameState.state);
      UIManager.showToast("PROGRESS LOADED", "Melanjutkan misi terakhir...", "normal");
      CityWorld.enter();
    } else {
      this.startNewGame();
    }
  }

  /**
   * Navigate to City Map
   */
  goToMap() {
    this.stopTimer();
    this.closeModals();
    UIManager.setCharacterExpression("idle");
    UIManager.renderMap(GameState.state);
    UIManager.updateHeader(GameState.state);
    UIManager.showScreen("map");
  }

  goToCity() {
    this.stopTimer();
    this.closeModals();
    CityWorld.enter();
  }

  /**
   * Open Interactive Tutorial
   */
  openTutorial() {
    this.currentTutorialStep = 0;
    this.renderTutorialSlide();
    UIManager.showScreen("tutorial");
  }

  renderTutorialSlide() {
    const slides = document.querySelectorAll(".tutorial-slide");
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === this.currentTutorialStep);
    });

    const stepLabel = document.getElementById("tutorial-step-indicator");
    if (stepLabel) {
      stepLabel.textContent = `PANDUAN ${this.currentTutorialStep + 1} / ${slides.length}`;
    }

    const prevBtn = document.getElementById("btn-tutorial-prev");
    const nextBtn = document.getElementById("btn-tutorial-next");

    if (prevBtn) prevBtn.disabled = this.currentTutorialStep === 0;
    if (nextBtn) {
      nextBtn.textContent = this.currentTutorialStep === slides.length - 1 ? "MULAI MISI 🚀" : "LANJUT ➔";
    }
  }

  nextTutorial() {
    const totalSlides = document.querySelectorAll(".tutorial-slide").length;
    if (this.currentTutorialStep < totalSlides - 1) {
      this.currentTutorialStep++;
      this.renderTutorialSlide();
      AudioManager.playClick();
    } else {
      AudioManager.playClick();
      this.goToCity();
    }
  }

  prevTutorial() {
    if (this.currentTutorialStep > 0) {
      this.currentTutorialStep--;
      this.renderTutorialSlide();
      AudioManager.playClick();
    }
  }

  /**
   * Select District from Map
   */
  selectDistrict(districtKey) {
    let dState = GameState.state.districts[districtKey];
    if (!dState) {
      GameState.state.districts[districtKey] = {
        unlocked: true,
        level1Complete: false,
        level2Complete: false,
        security: 20
      };
      dState = GameState.state.districts[districtKey];
    }
    // Ensure district is unlocked and accessible
    dState.unlocked = true;

    // Ensure power-ups inventory exists
    if (!GameState.state.powerUps) {
      GameState.state.powerUps = { auditLog: 1, encryption: 1 };
    } else {
      GameState.state.powerUps.auditLog = Math.max(1, GameState.state.powerUps.auditLog || 0);
      GameState.state.powerUps.encryption = Math.max(1, GameState.state.powerUps.encryption || 0);
    }

    GameState.state.currentDistrict = districtKey;
    AudioManager.playClick();
    UIManager.renderBriefing(districtKey, GameState.state);
  }

  /**
   * Start a Specific Level in Current District
   */
  startLevel(levelNumber) {
    const districtKey = GameState.state.currentDistrict;
    const dState = GameState.state.districts[districtKey];

    if (levelNumber === 2 && !dState.level1Complete && !dState.level2Complete) {
      AudioManager.playWarning();
      UIManager.showToast("LEVEL 2 TERKUNCI", "Selesaikan Level 1 terlebih dahulu!", "danger");
      return;
    }

    this.closeModals();
    this.stopTimer();

    GameState.state.currentLevel = levelNumber;
    GameState.state.currentQuestionIndex = 0;
    GameState.state.currentLevelScore = 0;
    GameState.state.currentLevelSpeedBonus = 0;
    GameState.state.currentLevelStartXP = GameState.state.xp || 0;

    // Menjamin ketersediaan Power-Up: jika bermain lagi atau revisit, minimal 1 tetap terjamin
    if (!GameState.state.powerUps) {
      GameState.state.powerUps = { auditLog: 1, encryption: 1 };
    } else {
      GameState.state.powerUps.auditLog = Math.max(1, GameState.state.powerUps.auditLog || 0);
      GameState.state.powerUps.encryption = Math.max(1, GameState.state.powerUps.encryption || 0);
    }
    GameState.state.powerUpsUsedThisLevel = { auditLog: false, encryption: false };
    this.auditLogUsedForCurrentQuestion = false;
    this.encryptionUsedForCurrentQuestion = false;
    GameState.state.isTimerPaused = false;
    GameState.state.timerFrozenUntil = null;
    GameState.state.stats.breachesInCurrentDistrict = 0;

    // Filter questions
    GameState.state.levelQuestions = QUESTIONS_DATA.filter(
      q => q.district === districtKey && q.level === levelNumber
    );

    if (GameState.state.levelQuestions.length === 0) {
      console.error("No questions found for district", districtKey, "level", levelNumber);
      return;
    }

    UIManager.updateHeader(GameState.state);
    UIManager.updatePowerUps(GameState.state);
    UIManager.showScreen("quiz");
    this.loadQuestion();
  }

  /**
   * Load and Display Current Question
   */
  loadQuestion() {
    const state = GameState.state;
    const question = state.levelQuestions[state.currentQuestionIndex];
    if (!question) return;

    this.isAnsweringLocked = false;
    // Reset status penggunaan power-up per pertanyaan sehingga setiap soal dapat menggunakan stok yang tersedia
    this.auditLogUsedForCurrentQuestion = false;
    this.encryptionUsedForCurrentQuestion = false;
    state.isTimerPaused = false;
    state.timerFrozenUntil = null;

    UIManager.renderQuestion(question, state);
    UIManager.updateHeader(state);
    UIManager.updatePowerUps(state);

    // Setup 1:30 Min (90s) Timer
    this.startTimer(90);
  }

  /**
   * Start 90 Seconds (1:30 Min) Countdown Timer
   */
  startTimer(seconds = 90) {
    this.stopTimer();
    const state = GameState.state;
    state.timer = seconds;
    state.isTimerPaused = false;
    state.timerFrozenUntil = null;

    UIManager.updateTimerUI(state.timer, false);

    this.timerInterval = setInterval(() => {
      // Check if paused via Encryption
      if (state.timerFrozenUntil && Date.now() < state.timerFrozenUntil) {
        UIManager.updateTimerUI(state.timer, true);
        return;
      } else if (state.timerFrozenUntil && Date.now() >= state.timerFrozenUntil) {
        state.timerFrozenUntil = null;
        state.isTimerPaused = false;
        UIManager.showToast("ENCRYPTION EXPIRED", "Timer kembali berjalan!", "normal");
        UIManager.updatePowerUps(state);
      }

      state.timer--;
      UIManager.updateTimerUI(state.timer, false);

      if (state.timer === 20) {
        AudioManager.playWarning();
      } else if (state.timer <= 10 && state.timer > 0) {
        AudioManager.playTick(true);
      }

      if (state.timer <= 0) {
        this.stopTimer();
        this.handleTimeout();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  /**
   * Handle Question Timeout (0 seconds reached)
   */
  handleTimeout() {
    if (this.isAnsweringLocked) return;
    this.isAnsweringLocked = true;

    AudioManager.playWrong();
    this.processAnswer(-1); // -1 indicates timeout
  }

  /**
   * Answer Selected
   */
  selectAnswer(selectedIndex) {
    if (this.isAnsweringLocked) return;
    this.isAnsweringLocked = true;
    this.stopTimer();

    this.processAnswer(selectedIndex);
  }

  /**
   * Process Evaluation of Answer
   */
  processAnswer(selectedIndex) {
    const state = GameState.state;
    const currentQ = state.levelQuestions[state.currentQuestionIndex];
    if (!currentQ) return;

    const isCorrect = (selectedIndex === currentQ.answer);
    let speedBonus = 0;
    let warningNotice = null;

    if (isCorrect) {
      AudioManager.playCorrect();
      state.xp += 100;
      state.score.baseScore += 100;
      state.currentLevelScore += 100;
      state.stats.totalCorrect++;

      // Speed bonus: answered in first 30 seconds of 90s (> 60s remaining)
      if (state.timer > 60) {
        speedBonus = 50;
        state.xp += 50;
        state.score.speedBonus += speedBonus;
        state.currentLevelSpeedBonus += speedBonus;
        state.stats.totalSpeedBonuses++;
      }

      state.score.totalScore = state.score.baseScore + state.score.speedBonus;
      this.checkAchievements();
      UIManager.updateHeader(state);

      UIManager.showFeedback(true, selectedIndex, currentQ, speedBonus, null);

    } else {
      AudioManager.playWrong();
      state.lives--;
      UIManager.updateHeader(state);

      if (state.lives === 2) {
        warningNotice = "⚠️ PERINGATAN (1 Salah): Keputusanmu membuka potensi risiko data!";
        AudioManager.playWarning();
        UIManager.showFeedback(false, selectedIndex, currentQ, 0, warningNotice);
      } else if (state.lives === 1) {
        warningNotice = "⚠️ SECURITY ALERT (2 Salah): Keamanan semakin lemah! Skor level berkurang 50%!";
        state.currentLevelScore = Math.floor(state.currentLevelScore * 0.5);
        AudioManager.playWarning();
        UIManager.showFeedback(false, selectedIndex, currentQ, 0, warningNotice);
      } else if (state.lives <= 0) {
        state.stats.breachesInCurrentDistrict++;
        state.score.baseScore = Math.max(0, state.score.baseScore - state.currentLevelScore);
        state.score.speedBonus = Math.max(0, state.score.speedBonus - state.currentLevelSpeedBonus);
        state.score.totalScore = state.score.baseScore + state.score.speedBonus;
        state.currentLevelScore = 0;
        state.currentLevelSpeedBonus = 0;
        this.closeModals();
        this.stopTimer();
        StorageManager.saveGame(state);
        UIManager.updateHeader(state);
        AudioManager.playBreachAlarm();

        UIManager.triggerGameOverSequence(() => {
          this.closeModals();
          CityWorld.keys.clear();
          CityWorld.touchKeys.clear();
          CityWorld.paused = false;
          UIManager.renderMap(state);
          UIManager.showScreen("menu");
        });
        return;
      }
    }
  }

  /**
   * Reset Level after Data Breach
   */
  restartCurrentLevel() {
    const state = GameState.state;
    // Deduct level score gathered in this failed attempt from baseScore
    state.score.baseScore = Math.max(0, state.score.baseScore - state.currentLevelScore);
    state.score.speedBonus = Math.max(0, state.score.speedBonus - state.currentLevelSpeedBonus);
    state.score.totalScore = state.score.baseScore + state.score.speedBonus;

    state.currentLevelScore = 0;
    state.currentLevelSpeedBonus = 0;
    state.currentLevelStartXP = state.xp || 0;
    state.lives = 3;
    state.currentQuestionIndex = 0;
    if (!state.powerUps) {
      state.powerUps = { auditLog: 1, encryption: 1 };
    } else {
      state.powerUps.auditLog = Math.max(1, state.powerUps.auditLog || 0);
      state.powerUps.encryption = Math.max(1, state.powerUps.encryption || 0);
    }
    state.powerUpsUsedThisLevel = { auditLog: false, encryption: false };
    this.auditLogUsedForCurrentQuestion = false;
    this.encryptionUsedForCurrentQuestion = false;
    state.isTimerPaused = false;
    state.timerFrozenUntil = null;

    UIManager.updateHeader(state);
    UIManager.updatePowerUps(state);
    UIManager.showToast("LEVEL RESET", "Mencoba kembali level dengan protokol segar.", "normal");
    this.loadQuestion();
  }

  /**
   * Advance to Next Question or Complete Level
   */
  advanceQuestion() {
    this.closeModals();
    const state = GameState.state;

    if (state.currentQuestionIndex < state.levelQuestions.length - 1) {
      state.currentQuestionIndex++;
      this.loadQuestion();
    } else {
      this.finishLevel();
    }
  }

  /**
   * Finish Level Handling
   */
  finishLevel() {
    const state = GameState.state;
    const districtKey = state.currentDistrict;
    const level = state.currentLevel;
    const dState = state.districts[districtKey];
    const xpBeforeLevel = state.currentLevelStartXP || 0;
    const citySecurityBefore = state.citySecurity || 0;

    AudioManager.playLevelComplete();

    let isDistrictSecured = false;
    let newSec = dState.security;

    // 1. REWARD FOR COMPLETING A LEVEL (+1 Audit Log or +1 Encryption)
    if (!state.powerUps) {
      state.powerUps = { auditLog: 1, encryption: 1 };
    }

    let rewardType = "";
    if (state.powerUps.auditLog < state.powerUps.encryption) {
      rewardType = "auditLog";
    } else if (state.powerUps.encryption < state.powerUps.auditLog) {
      rewardType = "encryption";
    } else {
      rewardType = Math.random() < 0.5 ? "auditLog" : "encryption";
    }

    state.powerUps[rewardType]++;
    const rewardName = rewardType === "auditLog" ? "Audit Log 🔍" : "Encryption 🔐";
    const rewardTotal = state.powerUps[rewardType];
    if (AudioManager.playPowerUpReward) AudioManager.playPowerUpReward();

    // 2. STAGE COMPLETION CHECK (District 100% Secured)
    let livesRestored = false;
    let recoveredHearts = 0;

    if (level === 1) {
      dState.level1Complete = true;
      state.xp += 250;
      dState.security = Math.max(dState.security, 50);
      newSec = dState.security;
      isDistrictSecured = false;
      UIManager.showToast("LEVEL SELESAI!", `+1 ${rewardName} didapatkan! (Total: ${rewardTotal})`, "normal");
    } else if (level === 2) {
      dState.level2Complete = true;
      state.xp += 250;
      dState.security = 100;
      newSec = 100;
      isDistrictSecured = true;

      // Completing a district stage restores one life, up to the maximum of three.
      if (state.lives < 3) {
        recoveredHearts = 1;
        state.lives = Math.min(3, state.lives + recoveredHearts);
        livesRestored = true;
        if (AudioManager.playHeal) AudioManager.playHeal();
      }

      if (!state.completedDistricts.includes(districtKey)) {
        state.completedDistricts.push(districtKey);
        state.xp += 500;
      }

      // Unlock next district in chain
      const currentIndex = this.districtOrder.indexOf(districtKey);
      if (currentIndex >= 0 && currentIndex < this.districtOrder.length - 1) {
        const nextKey = this.districtOrder[currentIndex + 1];
        state.districts[nextKey].unlocked = true;
      }

      UIManager.showToast(
        "STAGE SELESAI!",
        livesRestored
          ? `+1 ${rewardName} & +1 nyawa (${state.lives}/3 ❤️)!`
          : `+1 ${rewardName} & Nyawa tetap penuh (3/3 ❤️)!`,
        "normal"
      );
    }

    const completedMissions = this.districtOrder.reduce((total, key) => {
      const district = state.districts[key];
      return total + Number(district.level1Complete) + Number(district.level2Complete);
    }, 0);
    state.citySecurity = Number((completedMissions / 8 * 100).toFixed(1));

    this.checkAchievements();
    StorageManager.saveGame(state);
    UIManager.updateHeader(state);

    // Check if entire game completed (all 4 districts level2Complete)
    const allSecured = this.districtOrder.every(k => state.districts[k].level2Complete);

    if (allSecured) {
      CityWorld.savePlayerPosition();
      AudioManager.playVictory();
      UIManager.renderEnding(state);
    } else {
      UIManager.renderLevelComplete(
        districtKey,
        level,
        state.currentLevelScore,
        newSec,
        isDistrictSecured,
        {
          xpEarned: state.xp - xpBeforeLevel,
          citySecurityGain: state.citySecurity - citySecurityBefore,
          rewardType,
          rewardName,
          rewardTotal,
          livesRestored,
          recoveredHearts,
          currentLives: state.lives
        }
      );
    }
  }

  /**
   * Power-up: Audit Log (Eliminate 2 wrong answers)
   */
  useAuditLog() {
    const state = GameState.state;
    if (this.isAnsweringLocked) return;
    if (!state.powerUps || state.powerUps.auditLog <= 0 || this.auditLogUsedForCurrentQuestion) {
      AudioManager.playWarning();
      return;
    }

    const currentQ = state.levelQuestions[state.currentQuestionIndex];
    if (!currentQ) return;

    state.powerUps.auditLog--;
    this.auditLogUsedForCurrentQuestion = true;
    state.stats.auditLogsUsed++;
    StorageManager.saveGame(state);

    AudioManager.playAuditLog();

    // Identify wrong options
    const wrongIndices = [];
    currentQ.options.forEach((_, idx) => {
      if (idx !== currentQ.answer) wrongIndices.push(idx);
    });

    // Shuffle and pick 2
    for (let i = wrongIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wrongIndices[i], wrongIndices[j]] = [wrongIndices[j], wrongIndices[i]];
    }

    const eliminated = wrongIndices.slice(0, 2);
    eliminated.forEach(idx => {
      const btn = document.getElementById(`option-btn-${idx}`);
      if (btn) {
        btn.classList.add("option-eliminated");
        btn.disabled = true;
        const textSpan = btn.querySelector(".option-text");
        if (textSpan) {
          textSpan.innerHTML = `<s>${textSpan.textContent}</s> <span class="option-eliminated-tag">[ELIMINATED BY AUDIT LOG]</span>`;
        }
      }
    });

    UIManager.updatePowerUps(state);
    UIManager.showToast("🔍 AUDIT LOG DIGUNAKAN", `2 jawaban salah dieliminasi! Sisa stok: ${state.powerUps.auditLog}`, "normal");
    this.checkAchievements();
  }

  /**
   * Power-up: Encryption (Freeze timer for 7 seconds)
   */
  useEncryption() {
    const state = GameState.state;
    if (this.isAnsweringLocked) return;
    if (!state.powerUps || state.powerUps.encryption <= 0 || state.isTimerPaused || this.encryptionUsedForCurrentQuestion) {
      AudioManager.playWarning();
      return;
    }

    state.powerUps.encryption--;
    this.encryptionUsedForCurrentQuestion = true;
    state.timerFrozenUntil = Date.now() + 7000;
    state.isTimerPaused = true;
    StorageManager.saveGame(state);

    AudioManager.playEncryption();
    UIManager.updatePowerUps(state);
    UIManager.updateTimerUI(state.timer, true);
    UIManager.showToast("🔐 SYSTEM ENCRYPTED", `Timer dibekukan 7 detik! Sisa stok: ${state.powerUps.encryption}`, "normal");
  }

  /**
   * Check and Unlock Achievements
   */
  checkAchievements() {
    const state = GameState.state;

    // 1. Data Guardian (10 correct)
    const achData = state.achievements.find(a => a.id === "data_guardian");
    if (achData && !achData.unlocked && state.stats.totalCorrect >= 10) {
      achData.unlocked = true;
      UIManager.showToast("🏆 ACHIEVEMENT UNLOCKED!", "Data Guardian: 10 Jawaban Benar!", "achievement");
    }

    // 2. Privacy Protector (Complete district with 0 breaches)
    const achPriv = state.achievements.find(a => a.id === "privacy_protector");
    if (achPriv && !achPriv.unlocked && state.completedDistricts.length > 0 && state.stats.breachesInCurrentDistrict === 0) {
      achPriv.unlocked = true;
      UIManager.showToast("🏆 ACHIEVEMENT UNLOCKED!", "Privacy Protector: Distrik aman tanpa Data Breach!", "achievement");
    }

    // 3. Speed Officer (5 speed bonus)
    const achSpeed = state.achievements.find(a => a.id === "speed_officer");
    if (achSpeed && !achSpeed.unlocked && state.stats.totalSpeedBonuses >= 5) {
      achSpeed.unlocked = true;
      UIManager.showToast("🏆 ACHIEVEMENT UNLOCKED!", "Speed Officer: 5x Speed Bonus!", "achievement");
    }

    // 4. Audit Master (Used audit log effectively)
    const achAudit = state.achievements.find(a => a.id === "audit_master");
    if (achAudit && !achAudit.unlocked && state.stats.auditLogsUsed >= 2) {
      achAudit.unlocked = true;
      UIManager.showToast("🏆 ACHIEVEMENT UNLOCKED!", "Audit Master: Audit Log Mastered!", "achievement");
    }

    // 5. Chief Data Guardian (Score >= 3501)
    const achChief = state.achievements.find(a => a.id === "chief_guardian");
    if (achChief && !achChief.unlocked && state.score.baseScore >= 3501) {
      achChief.unlocked = true;
      UIManager.showToast("🏆 ACHIEVEMENT UNLOCKED!", "Chief Data Guardian: Pangkat Tertinggi Tercapai!", "achievement");
    }

    StorageManager.saveGame(state);
  }

  /**
   * Reset All Game Data
   */
  resetGameData() {
    StorageManager.resetGame();
    GameState.reset();
    CityWorld.resetPlayer();
    UIManager.updateHeader(GameState.state);
    UIManager.renderMap(GameState.state);
    this.closeModals();
    UIManager.showScreen("menu");
    UIManager.showToast("DATA TERESET", "Semua kemajuan telah dikembalikan ke awal.", "danger");
  }

  closeModals() {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  }

  /**
   * Setup Event Listeners & Keyboard Shortcuts
   */
  bindEvents() {
    // Option Click Delegation
    const optionsGrid = document.getElementById("quiz-options-grid");
    if (optionsGrid) {
      optionsGrid.addEventListener("click", (e) => {
        const btn = e.target.closest(".option-btn");
        if (!btn || btn.disabled) return;
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        this.selectAnswer(idx);
      });
    }

    // Keyboard Shortcuts
    window.addEventListener("keydown", (e) => {
      // Audio trigger on user input
      AudioManager.ensureContext();

      // Only listen when quiz screen is active
      const quizScreen = document.getElementById("screen-quiz");
      const isQuizActive = quizScreen && quizScreen.classList.contains("active");
      const feedbackModal = document.getElementById("modal-feedback");
      const isFeedbackActive = feedbackModal && feedbackModal.classList.contains("active");
      if (isFeedbackActive && (e.code === "Space" || e.code === "Enter")) {
        e.preventDefault();
        this.advanceQuestion();
        return;
      }

      if (isQuizActive && !this.isAnsweringLocked) {
        if (e.key === "1" || e.code === "KeyA") {
          e.preventDefault();
          this.selectAnswer(0);
        } else if (e.key === "2" || e.code === "KeyB") {
          e.preventDefault();
          this.selectAnswer(1);
        } else if (e.key === "3" || e.code === "KeyC") {
          e.preventDefault();
          this.selectAnswer(2);
        } else if (e.key === "4" || e.code === "KeyD") {
          e.preventDefault();
          this.selectAnswer(3);
        } else if (e.code === "KeyL") {
          e.preventDefault();
          this.useAuditLog();
        } else if (e.code === "KeyE") {
          e.preventDefault();
          this.useEncryption();
        }
      }
    });
  }
}

window.GameEngine = new GameController();
