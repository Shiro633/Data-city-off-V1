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
    this.districtOrder = DISTRICT_ORDER;
    this.currentTutorialStep = 0;
    this.purchaseInProgress = false;
    this.lastPurchaseAt = {};
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
        state.districts[k].levels = [false, false, false];
        state.districts[k].level1Complete = false;
        state.districts[k].level2Complete = false;
        state.districts[k].level3Complete = false;
        state.districts[k].security = 20;
      }
    });
    GameState.updateDistrictUnlocks();
    state.completedDistricts = [];
    state.currentDistrict = "hospital";
    state.currentLevel = 1;
    state.currentQuestionIndex = 0;
    state.levelQuestions = [];
    state.currentQuestionAnswered = false;
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
      const state = GameState.state;
      if (state.levelQuestions.length === 5 && state.lives > 0) {
        UIManager.showScreen("quiz");
        if (state.currentQuestionAnswered) {
          this.advanceQuestion();
        } else {
          this.loadQuestion(state.timer);
        }
      } else {
        CityWorld.enter();
      }
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
    const dState = GameState.state.districts[districtKey];
    if (!DISTRICTS_CONFIG[districtKey] || !dState) return false;
    if (!dState.unlocked) {
      AudioManager.playWarning();
      UIManager.showToast("DISTRIK TERKUNCI", "Selesaikan Level 3 di stage sebelumnya terlebih dahulu!", "danger");
      return false;
    }

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
    return true;
  }

  /**
   * Start a Specific Level in Current District
   */
  startLevel(levelNumber) {
    const districtKey = GameState.state.currentDistrict;
    const dState = GameState.state.districts[districtKey];

    if (!dState?.unlocked) {
      AudioManager.playWarning();
      UIManager.showToast("DISTRIK TERKUNCI", "Selesaikan Level 3 di stage sebelumnya terlebih dahulu!", "danger");
      return;
    }

    if (!Number.isInteger(levelNumber) || levelNumber < 1 || levelNumber > 3) return;

    if (levelNumber > 1 && !GameState.isLevelComplete(districtKey, levelNumber - 1)) {
      AudioManager.playWarning();
      UIManager.showToast(`LEVEL ${levelNumber} TERKUNCI`, `Selesaikan Level ${levelNumber - 1} terlebih dahulu!`, "danger");
      return;
    }

    this.closeModals();
    this.stopTimer();

    GameState.state.currentLevel = levelNumber;
    GameState.state.currentQuestionIndex = 0;
    GameState.state.currentQuestionAnswered = false;
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

    GameState.state.levelQuestions = this.selectQuestionSet(districtKey, levelNumber);
    if (!GameState.state.levelQuestions) {
      return;
    }

    GameState.state.timer = 90;
    StorageManager.saveGame(GameState.state);
    UIManager.updateHeader(GameState.state);
    UIManager.updatePowerUps(GameState.state);
    UIManager.showScreen("quiz");
    this.loadQuestion();
  }

  selectQuestionSet(districtKey, levelNumber) {
    const questions = QUESTIONS_DATA.filter(
      question => question.district === districtKey && question.level === levelNumber
    );
    if (questions.length !== 30) {
      console.error(`Level ${districtKey} ${levelNumber} has ${questions.length} questions; exactly 30 are required.`);
      return null;
    }

    for (let index = questions.length - 1; index > 0; index--) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [questions[index], questions[swapIndex]] = [questions[swapIndex], questions[index]];
    }
    return questions.slice(0, 5);
  }

  /**
   * Load and Display Current Question
   */
  loadQuestion(seconds = 90) {
    const state = GameState.state;
    const question = state.levelQuestions[state.currentQuestionIndex];
    if (!question) return;

    this.isAnsweringLocked = false;
    state.currentQuestionAnswered = false;
    // Reset status penggunaan power-up per pertanyaan sehingga setiap soal dapat menggunakan stok yang tersedia
    this.auditLogUsedForCurrentQuestion = false;
    this.encryptionUsedForCurrentQuestion = false;
    state.isTimerPaused = false;
    state.timerFrozenUntil = null;

    UIManager.renderQuestion(question, state);
    UIManager.updateHeader(state);
    UIManager.updatePowerUps(state);

    // Setup 1:30 Min (90s) Timer
    this.startTimer(seconds);
    StorageManager.saveGame(state);
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
    if (!currentQ || state.currentQuestionAnswered) return;
    state.currentQuestionAnswered = true;
    UIManager.updateQuestionProgress(state.currentQuestionIndex + 1);

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
      if (state.activeShield && state.inventory.encryptionShield > 0) {
        state.inventory.encryptionShield--;
        state.activeShield = false;
        warningNotice = "🛡️ ENCRYPTION SHIELD menyerap penalti dan mencegah kehilangan 1 nyawa.";
        UIManager.updateHeader(state);
        UIManager.showFeedback(false, selectedIndex, currentQ, 0, warningNotice);
      } else {
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
    StorageManager.saveGame(state);
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
    state.currentQuestionAnswered = false;
    state.levelQuestions = this.selectQuestionSet(state.currentDistrict, state.currentLevel);
    if (!state.levelQuestions) return;
    state.timer = 90;
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
    if (state.levelQuestions.length !== 5 || state.currentQuestionIndex !== 4 || !state.currentQuestionAnswered) {
      return;
    }
    const districtKey = state.currentDistrict;
    const level = state.currentLevel;
    const dState = state.districts[districtKey];
    if (!dState || !Number.isInteger(level) || level < 1 || level > 3) return;
    const xpBeforeLevel = state.currentLevelStartXP || 0;
    const citySecurityBefore = state.citySecurity || 0;
    const levelId = `${districtKey}-level-${level}`;
    const wasAlreadyComplete = GameState.isLevelComplete(districtKey, level);

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

    isDistrictSecured = GameState.markLevelComplete(districtKey, level);
    state.xp += 250;
    newSec = dState.security;
    if (isDistrictSecured) {
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
      UIManager.showToast(
        "STAGE SELESAI!",
        livesRestored
          ? `Level 3 tuntas, ${DISTRICTS_CONFIG[districtKey].name} aman! +1 nyawa (${state.lives}/3 ❤️).`
          : `Level 3 tuntas, ${DISTRICTS_CONFIG[districtKey].name} aman!`,
        "normal"
      );
    } else {
      UIManager.showToast(
        "LEVEL SELESAI!",
        `Level ${level} selesai. +1 ${rewardName} didapatkan! (Total: ${rewardTotal})`,
        "normal"
      );
    }

    let payment = 0;
    if (!wasAlreadyComplete && !state.paidLevels.includes(levelId)) {
      const difficulty = ECONOMY_CONFIG.levelDifficulty[districtKey][level];
      payment = ECONOMY_CONFIG.payments[difficulty];
      state.balance += payment;
      state.paidLevels.push(levelId);
      state.paymentHistory.push({
        levelId,
        amount: payment,
        difficulty,
        paidAt: Date.now()
      });
      UIManager.showToast(
        "PEMBAYARAN LEVEL",
        `Warga yang kamu bantu membayar jasamu sebesar ${UIManager.formatCurrency(payment)}!`,
        "normal"
      );
    }
    state.activeShield = false;

    GameState.updateDistrictUnlocks();

    const completedMissions = this.districtOrder.reduce((total, key) => {
      const district = state.districts[key];
      return total + district.levels.filter(Boolean).length;
    }, 0);
    state.citySecurity = Number((completedMissions / 12 * 100).toFixed(1));

    this.checkAchievements();
    state.levelQuestions = [];
    state.currentQuestionIndex = 0;
    state.currentQuestionAnswered = false;
    StorageManager.saveGame(state);
    UIManager.updateHeader(state);

    const allSecured = this.districtOrder.every(key => GameState.isStageComplete(key));

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
          payment,
          livesRestored,
          recoveredHearts,
          currentLives: state.lives
        }
      );
    }
  }

  openShop() {
    CityWorld.keys.clear();
    CityWorld.touchKeys.clear();
    UIManager.renderShop(GameState.state);
    const modal = document.getElementById("modal-shop");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }

  closeShop() {
    const modal = document.getElementById("modal-shop");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  openInventory() {
    const quizScreen = document.getElementById("screen-quiz");
    if (!quizScreen?.classList.contains("active")) return;
    UIManager.renderInventory(GameState.state);
    const modal = document.getElementById("modal-inventory");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }

  closeInventory() {
    const modal = document.getElementById("modal-inventory");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  purchaseSupply(itemId) {
    if (this.purchaseInProgress) return false;
    const item = SUPPLY_ITEMS[itemId];
    if (!item) return false;
    const now = Date.now();
    if (now - (this.lastPurchaseAt[itemId] || 0) < 500) return false;

    this.purchaseInProgress = true;
    try {
      const state = GameState.state;
      if (state.balance < item.price) {
        UIManager.showToast(
          "SALDO TIDAK MENCUKUPI",
          `Kamu membutuhkan ${UIManager.formatCurrency(item.price)} untuk membeli ${item.name}.`,
          "danger"
        );
        AudioManager.playWarning();
        return false;
      }

      state.balance -= item.price;
      state.inventory[itemId] = (state.inventory[itemId] || 0) + 1;
      this.lastPurchaseAt[itemId] = now;
      StorageManager.saveGame(state);
      UIManager.updateHeader(state);
      UIManager.showToast("PEMBELIAN BERHASIL", `${item.name} ditambahkan ke inventaris.`, "normal");
      AudioManager.playClick();
      return true;
    } finally {
      this.purchaseInProgress = false;
    }
  }

  useSupplyItem(itemId) {
    const state = GameState.state;
    const quizScreen = document.getElementById("screen-quiz");
    const question = state.levelQuestions[state.currentQuestionIndex];

    if (!quizScreen?.classList.contains("active") || this.isAnsweringLocked ||
        state.currentQuestionAnswered || !question) {
      UIManager.showToast("PERLENGKAPAN TIDAK TERSEDIA", "Gunakan item saat soal kuis aktif dan belum dijawab.", "danger");
      return false;
    }

    if (!SUPPLY_ITEMS[itemId]) return false;
    if ((state.inventory[itemId] || 0) < 1) {
      UIManager.showToast("STOK HABIS", "Item ini tidak tersedia di inventaris.", "danger");
      return false;
    }

    if (itemId === "recoveryKit") {
      if (state.lives >= 3) {
        UIManager.showToast("NYAWA SUDAH PENUH", "Recovery Kit hanya dapat digunakan saat nyawa kurang dari 3.", "danger");
        return false;
      }
      state.inventory[itemId]--;
      state.lives = Math.min(3, state.lives + 1);
      UIManager.updateHeader(state);
      UIManager.showToast("RECOVERY KIT DIGUNAKAN", `1 nyawa dipulihkan (${state.lives}/3 ❤️).`, "normal");
    } else if (itemId === "timeToken") {
      state.inventory[itemId]--;
      state.timer += 15;
      UIManager.updateTimerUI(state.timer, Boolean(state.isTimerPaused));
      UIManager.showToast("TIME EXTENSION AKTIF", `Timer soal bertambah 15 detik (${state.timer} detik).`, "normal");
    } else if (itemId === "threatScanner") {
      const wrongOptions = question.options
        .map((_, index) => index)
        .filter(index => index !== question.answer)
        .filter(index => {
          const button = document.getElementById(`option-btn-${index}`);
          return button && !button.disabled;
        });
      if (wrongOptions.length === 0) {
        UIManager.showToast("TIDAK ADA TARGET", "Semua pilihan salah sudah dieliminasi.", "danger");
        return false;
      }
      const target = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
      state.inventory[itemId]--;
      this.eliminateAnswerOption(target, "THREAT SCANNER");
      UIManager.showToast("THREAT SCANNER AKTIF", "Satu pilihan yang salah telah dieliminasi.", "normal");
    } else if (itemId === "encryptionShield") {
      if (state.activeShield) {
        UIManager.showToast("ENCRYPTION SHIELD AKTIF", "Shield akan mencegah kehilangan satu nyawa berikutnya.", "normal");
        return false;
      }
      state.activeShield = true;
      UIManager.showToast("ENCRYPTION SHIELD AKTIF", "Shield akan mencegah kehilangan satu nyawa berikutnya.", "normal");
    } else if (itemId === "forensicAnalyzer") {
      state.inventory[itemId]--;
      const principle = question.principle || "Data Protection";
      UIManager.showToast(
        "FORENSIC ANALYZER",
        `Petunjuk: tinjau prinsip ${principle} dan pilih tindakan yang paling melindungi data warga.`,
        "normal"
      );
    }

    StorageManager.saveGame(state);
    UIManager.updateHeader(state);
    UIManager.renderInventory(state);
    return true;
  }

  eliminateAnswerOption(index, source) {
    const button = document.getElementById(`option-btn-${index}`);
    if (!button || button.disabled) return;
    button.classList.add("option-eliminated");
    button.disabled = true;
    const text = button.querySelector(".option-text");
    if (text) {
      text.innerHTML = `<s>${text.textContent}</s> <span class="option-eliminated-tag">[ELIMINATED BY ${source}]</span>`;
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
      this.eliminateAnswerOption(idx, "AUDIT LOG");
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
    state.stats.encryptionUses++;
    this.encryptionUsedForCurrentQuestion = true;
    state.timerFrozenUntil = Date.now() + 7000;
    state.isTimerPaused = true;
    StorageManager.saveGame(state);

    AudioManager.playEncryption();
    UIManager.updatePowerUps(state);
    UIManager.updateTimerUI(state.timer, true);
    UIManager.showToast("🔐 SYSTEM ENCRYPTED", `Timer dibekukan 7 detik! Sisa stok: ${state.powerUps.encryption}`, "normal");
    this.checkAchievements();
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

    const newAchievements = [
      {
        id: "clean_sweep",
        unlocked: state.currentLevelScore >= 500,
        message: "Clean Sweep: Semua 5 soal dalam satu level dijawab benar!"
      },
      {
        id: "speed_demon",
        unlocked: state.stats.totalSpeedBonuses >= 10,
        message: "Speed Demon: 10x Speed Bonus!"
      },
      {
        id: "first_audit",
        unlocked: state.stats.auditLogsUsed >= 1,
        message: "First Audit: Audit Log digunakan untuk pertama kalinya!"
      },
      {
        id: "encryption_expert",
        unlocked: state.stats.encryptionUses >= 5,
        message: "Encryption Expert: Encryption digunakan 5 kali!"
      },
      {
        id: "city_savior",
        unlocked: state.completedDistricts.length === DISTRICT_ORDER.length,
        message: "City Savior: Keempat distrik berhasil diamankan!"
      }
    ];

    newAchievements.forEach(({ id, unlocked, message }) => {
      const achievement = state.achievements.find(item => item.id === id);
      if (achievement && !achievement.unlocked && unlocked) {
        achievement.unlocked = true;
        UIManager.showToast("🏆 ACHIEVEMENT UNLOCKED!", message, "achievement");
      }
    });

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

    window.addEventListener("pagehide", () => {
      const quizScreen = document.getElementById("screen-quiz");
      if (quizScreen && quizScreen.classList.contains("active") && GameState.state.levelQuestions.length === 5) {
        StorageManager.saveGame(GameState.state);
      }
    });

    // Keyboard Shortcuts
    window.addEventListener("keydown", (e) => {
      // Audio trigger on user input
      AudioManager.ensureContext();

      // Only listen when quiz screen is active
      const quizScreen = document.getElementById("screen-quiz");
      const isQuizActive = quizScreen && quizScreen.classList.contains("active");
      const shopModal = document.getElementById("modal-shop");
      const inventoryModal = document.getElementById("modal-inventory");
      const isSupplyPanelOpen = shopModal?.classList.contains("active") ||
        inventoryModal?.classList.contains("active");
      const feedbackModal = document.getElementById("modal-feedback");
      const isFeedbackActive = feedbackModal && feedbackModal.classList.contains("active");
      if (isSupplyPanelOpen) {
        if (e.code === "Escape") {
          e.preventDefault();
          if (shopModal?.classList.contains("active")) this.closeShop();
          if (inventoryModal?.classList.contains("active")) this.closeInventory();
        }
        return;
      }
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
