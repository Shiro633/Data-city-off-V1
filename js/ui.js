/* ==========================================================================
   DATA CITY OFFICER: GUARDIANS OF DATA CITY
   UI Renderer, Character Expressions, Effects & Visuals
   ========================================================================== */

const UIManager = {
  // Current active character expression
  characterState: "idle",

  /**
   * Switch active screen with transition
   * @param {string} screenId 
   */
  showScreen(screenId) {
    document.querySelectorAll(".game-screen").forEach(screen => {
      screen.classList.remove("active");
    });

    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
      target.classList.add("active");
      AudioManager.setBackgroundMusic(
        screenId === "menu" || screenId === "splash" ? "menu" : "game"
      );
    }

    // Scroll viewport to top
    const viewport = document.getElementById("screens-viewport");
    if (viewport) viewport.scrollTop = 0;
  },

  /**
   * Update top global status bar
   */
  updateHeader(state) {
    const scoreVal = document.getElementById("header-score-val");
    const speedVal = document.getElementById("header-speed-val");
    const livesVal = document.getElementById("header-lives-val");
    const soundBtn = document.getElementById("btn-sound-toggle");

    if (scoreVal) scoreVal.textContent = state.score.baseScore;
    if (speedVal) speedVal.textContent = `+${state.score.speedBonus}`;

    if (livesVal) {
      let hearts = "";
      for (let i = 0; i < 3; i++) {
        hearts += (i < state.lives) ? "❤️ " : "🖤 ";
      }
      livesVal.textContent = hearts.trim();
    }

    if (soundBtn) {
      const isSoundEnabled = state.settings.soundEnabled || state.settings.musicEnabled;
      soundBtn.textContent = isSoundEnabled ? "🔊" : "🔇";
      soundBtn.setAttribute("aria-label", isSoundEnabled ? "Mute Sound" : "Unmute Sound");
    }
  },

  /**
   * Generate SVG Vector Illustration for Main Character
   * @param {string} state - idle | thinking | happy | worried | shocked | victory
   */
  renderCharacterSVG(state = "idle") {
    // Face expressions based on state
    let mouth = '<path d="M 65 95 Q 80 110 95 95" stroke="#051020" stroke-width="4" fill="none" stroke-linecap="round" />';
    let eyes = `
      <ellipse cx="65" cy="75" rx="5" ry="6" fill="#051020" />
      <ellipse cx="95" cy="75" rx="5" ry="6" fill="#051020" />
      <circle cx="63" cy="73" r="2" fill="#ffffff" />
      <circle cx="93" cy="73" r="2" fill="#ffffff" />
    `;
    let eyebrows = `
      <path d="M 58 64 Q 65 60 72 64" stroke="#051020" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M 88 64 Q 95 60 102 64" stroke="#051020" stroke-width="3" fill="none" stroke-linecap="round" />
    `;
    let sweatDrop = "";
    let auraGlow = "rgba(0, 242, 254, 0.4)";

    if (state === "happy" || state === "victory") {
      mouth = '<path d="M 60 90 Q 80 118 100 90 Z" fill="#ff3366" stroke="#051020" stroke-width="3" />';
      eyes = `
        <path d="M 58 76 Q 65 68 72 76" stroke="#051020" stroke-width="4" fill="none" stroke-linecap="round" />
        <path d="M 88 76 Q 95 68 102 76" stroke="#051020" stroke-width="4" fill="none" stroke-linecap="round" />
      `;
      eyebrows = `
        <path d="M 58 62 Q 65 56 72 62" stroke="#051020" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M 88 62 Q 95 56 102 62" stroke="#051020" stroke-width="3" fill="none" stroke-linecap="round" />
      `;
      auraGlow = "rgba(0, 240, 144, 0.6)";
    } else if (state === "worried") {
      mouth = '<path d="M 65 100 Q 80 92 95 100" stroke="#051020" stroke-width="4" fill="none" stroke-linecap="round" />';
      eyebrows = `
        <path d="M 58 60 Q 65 65 72 61" stroke="#051020" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M 88 61 Q 95 65 102 60" stroke="#051020" stroke-width="3" fill="none" stroke-linecap="round" />
      `;
      sweatDrop = '<path d="M 108 65 Q 112 75 108 80 Q 104 75 108 65 Z" fill="#38bdf8" />';
      auraGlow = "rgba(245, 158, 11, 0.5)";
    } else if (state === "shocked") {
      mouth = '<ellipse cx="80" cy="100" rx="10" ry="14" fill="#051020" />';
      eyes = `
        <circle cx="65" cy="74" r="9" fill="#ffffff" stroke="#051020" stroke-width="3" />
        <circle cx="65" cy="74" r="3" fill="#051020" />
        <circle cx="95" cy="74" r="9" fill="#ffffff" stroke="#051020" stroke-width="3" />
        <circle cx="95" cy="74" r="3" fill="#051020" />
      `;
      eyebrows = `
        <path d="M 58 58 Q 65 52 72 58" stroke="#051020" stroke-width="3.5" fill="none" stroke-linecap="round" />
        <path d="M 88 58 Q 95 52 102 58" stroke="#051020" stroke-width="3.5" fill="none" stroke-linecap="round" />
      `;
      auraGlow = "rgba(255, 51, 102, 0.8)";
    } else if (state === "thinking") {
      mouth = '<path d="M 68 96 Q 80 96 92 94" stroke="#051020" stroke-width="3" fill="none" stroke-linecap="round" />';
      eyebrows = `
        <path d="M 58 60 Q 65 55 72 63" stroke="#051020" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M 88 66 Q 95 60 102 62" stroke="#051020" stroke-width="3" fill="none" stroke-linecap="round" />
      `;
      auraGlow = "rgba(0, 242, 254, 0.5)";
    }

    return `
      <svg viewBox="0 0 160 180" class="character-avatar ${state}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="officer-glow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="${auraGlow}" />
          </filter>
          <linearGradient id="jacket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#111a2e" />
            <stop offset="50%" stop-color="#1a2744" />
            <stop offset="100%" stop-color="#0a0e17" />
          </linearGradient>
          <linearGradient id="cyan-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00f2fe" />
            <stop offset="100%" stop-color="#4facfe" />
          </linearGradient>
        </defs>

        <!-- Headset band -->
        <path d="M 40 70 A 42 42 0 0 1 120 70" stroke="#00f2fe" stroke-width="6" fill="none" stroke-linecap="round" filter="url(#officer-glow)" />
        
        <!-- Officer Hair -->
        <path d="M 46 68 C 42 45 60 30 80 30 C 100 30 118 45 114 68 C 114 68 108 42 80 42 C 52 42 46 68 46 68 Z" fill="#1e293b" />

        <!-- Head / Face -->
        <ellipse cx="80" cy="80" rx="35" ry="38" fill="#fed7aa" />

        <!-- Eyes, Eyebrows, Mouth, Sweat -->
        ${eyes}
        ${eyebrows}
        ${mouth}
        ${sweatDrop}

        <!-- Headset Ear Cushions & Mic -->
        <rect x="36" y="66" width="10" height="24" rx="5" fill="#00f2fe" />
        <rect x="114" y="66" width="10" height="24" rx="5" fill="#00f2fe" />
        <path d="M 118 80 Q 115 105 92 108" stroke="#00f2fe" stroke-width="3" fill="none" stroke-linecap="round" />
        <circle cx="90" cy="108" r="4" fill="#00f090" />

        <!-- Jacket & Body -->
        <path d="M 40 135 L 25 180 L 135 180 L 120 135 Q 80 120 40 135 Z" fill="url(#jacket-grad)" stroke="#00f2fe" stroke-width="2" />
        
        <!-- Jacket Neon Collar Trim -->
        <path d="M 55 128 L 80 152 L 105 128" stroke="url(#cyan-accent)" stroke-width="4" fill="none" stroke-linecap="round" />
        
        <!-- Data City Officer Shield Badge -->
        <polygon points="80,140 89,146 86,160 80,165 74,160 71,146" fill="#00f2fe" filter="url(#officer-glow)" />
        <polygon points="80,144 86,148 84,158 80,161 76,158 74,148" fill="#051020" />
        
        <!-- Cyber Tablet in Hand -->
        <rect x="95" y="130" width="38" height="48" rx="4" fill="#0f172a" stroke="#00f2fe" stroke-width="2" transform="rotate(-10 95 130)" />
        <rect x="99" y="134" width="30" height="40" rx="2" fill="#00f2fe" opacity="0.3" transform="rotate(-10 95 130)" />
        <line x1="102" y1="145" x2="124" y2="141" stroke="#00f2fe" stroke-width="2" />
        <line x1="103" y1="153" x2="120" y2="150" stroke="#00f090" stroke-width="2" />
        <line x1="105" y1="161" x2="122" y2="158" stroke="#38bdf8" stroke-width="2" />
      </svg>
    `;
  },

  /**
   * Set Character Expression across UI
   */
  setCharacterExpression(state = "idle") {
    this.characterState = state;
    document.querySelectorAll(".character-avatar-wrapper").forEach(wrapper => {
      wrapper.innerHTML = this.renderCharacterSVG(state);
    });
  },

  /**
   * Render Map Districts Cards with Security Progress Bars
   */
  renderMap(state) {
    const districts = state.districts;
    let totalSec = 0;
    const districtKeys = DISTRICT_ORDER;

    districtKeys.forEach((key, index) => {
      const dConfig = DISTRICTS_CONFIG[key];
      let dState = districts[key];
      if (!dState) {
        districts[key] = { unlocked: index === 0, level1Complete: false, level2Complete: false, security: 20 };
        dState = districts[key];
      }
      totalSec += dState.security;

      const card = document.getElementById(`card-${key}`);
      if (!card) return;

      // Classes
      card.classList.toggle("locked", !dState.unlocked);
      card.classList.toggle("completed", dState.level2Complete);

      // Security Fill & Color
      const fill = card.querySelector(".sec-progress-fill");
      const valText = card.querySelector(".sec-percent-val");
      const statusBadge = card.querySelector(".district-badge-status");
      const actionBtn = card.querySelector(".district-action-btn");

      if (fill && valText) {
        fill.style.width = `${dState.security}%`;
        valText.textContent = `${dState.security}%`;

        fill.classList.remove("danger", "warning", "secure");
        if (dState.security < 40) {
          fill.classList.add("danger");
          valText.style.color = "var(--crimson)";
        } else if (dState.security < 80) {
          fill.classList.add("warning");
          valText.style.color = "var(--amber)";
        } else {
          fill.classList.add("secure");
          valText.style.color = "var(--emerald)";
        }
      }

      if (statusBadge) {
        statusBadge.className = "district-badge-status";
        if (dState.level2Complete) {
          statusBadge.classList.add("badge-completed");
          statusBadge.textContent = "SECURED";
        } else if (dState.unlocked) {
          statusBadge.classList.add("badge-unlocked");
          statusBadge.textContent = dState.level1Complete ? "LVL 2 READY" : "UNLOCKED";
        } else {
          statusBadge.classList.add("badge-locked");
          statusBadge.textContent = "LOCKED";
        }
      }

      if (actionBtn) {
        if (!dState.unlocked) {
          actionBtn.textContent = "🔒 LOCKED";
          actionBtn.disabled = true;
        } else if (dState.level2Complete) {
          actionBtn.textContent = "✓ REVISIT";
          actionBtn.disabled = false;
        } else {
          actionBtn.textContent = "ENTER DISTRICT";
          actionBtn.disabled = false;
        }
      }
    });

    // Update Global City Security %
    const avgSec = Math.round(totalSec / districtKeys.length);
    const globalVal = document.getElementById("global-sec-val");
    if (globalVal) {
      globalVal.textContent = `${avgSec}%`;
      globalVal.style.color = avgSec === 100 ? "var(--emerald)" : avgSec >= 50 ? "var(--cyan)" : "var(--crimson)";
    }

    // HQ node status
    const hqStatus = document.getElementById("hq-firewall-status");
    if (hqStatus) {
      if (avgSec === 100) {
        hqStatus.textContent = "FIREWALL SHIELD: 100% MAXIMUM";
        hqStatus.style.color = "var(--emerald)";
      } else {
        hqStatus.textContent = `FIREWALL INTEGRITY: ${avgSec}%`;
        hqStatus.style.color = "var(--cyan)";
      }
    }

    // Continue game button in main menu
    const continueBtn = document.getElementById("btn-menu-continue");
    if (continueBtn) {
      continueBtn.disabled = !StorageManager.hasSaveGame();
    }
  },

  /**
   * Render District Briefing Modal
   */
  renderBriefing(districtKey, state) {
    const dConfig = DISTRICTS_CONFIG[districtKey];
    const dState = state.districts[districtKey];
    if (!dConfig) return;

    const modal = document.getElementById("modal-briefing");
    const title = document.getElementById("briefing-district-name");
    const avatar = document.getElementById("briefing-npc-avatar");
    const name = document.getElementById("briefing-npc-name");
    const role = document.getElementById("briefing-npc-role");
    const quote = document.getElementById("briefing-npc-quote");
    const lvl1Btn = document.getElementById("briefing-lvl1-btn");
    const lvl2Btn = document.getElementById("briefing-lvl2-btn");

    if (title) title.textContent = `${dConfig.icon} ${dConfig.name}`;
    if (avatar) avatar.textContent = dConfig.npcAvatar;
    if (name) name.textContent = dConfig.npcName;
    if (role) role.textContent = dConfig.npcRole;
    if (quote) quote.textContent = `"${dConfig.briefing.quote}"`;

    if (lvl1Btn) {
      document.getElementById("briefing-lvl1-title").textContent = dConfig.briefing.level1Title;
      document.getElementById("briefing-lvl1-desc").textContent = dConfig.briefing.level1Desc;
      document.getElementById("briefing-lvl1-badge").textContent = dState.level1Complete ? "✓ COMPLETED" : "LEVEL 1";
    }

    if (lvl2Btn) {
      document.getElementById("briefing-lvl2-title").textContent = dConfig.briefing.level2Title;
      document.getElementById("briefing-lvl2-desc").textContent = dConfig.briefing.level2Desc;

      const lvl2Locked = !dState.level1Complete;
      lvl2Btn.classList.toggle("locked", lvl2Locked);
      lvl2Btn.disabled = lvl2Locked;
      document.getElementById("briefing-lvl2-badge").textContent = dState.level2Complete
        ? "✓ COMPLETED"
        : lvl2Locked ? "🔒 LOCKED" : "LEVEL 2";
    }

    if (modal) modal.classList.add("active");
  },

  /**
   * Render Question Card & HUD
   */
  renderQuestion(question, state) {
    const dConfig = DISTRICTS_CONFIG[question.district];
    const dState = state.districts[question.district];

    // HUD District details
    const hudBadge = document.getElementById("hud-district-icon");
    const hudTitle = document.getElementById("hud-district-title");
    const hudSec = document.getElementById("hud-district-sec");
    const hudCounter = document.getElementById("hud-question-counter");

    if (hudBadge) hudBadge.textContent = dConfig ? dConfig.icon : "🛡️";
    if (hudTitle) hudTitle.textContent = `${dConfig ? dConfig.name : ""} - LVL ${question.level}`;
    if (hudSec) hudSec.textContent = `DATA SECURITY: ${dState ? dState.security : 20}%`;
    if (hudCounter) hudCounter.textContent = `QUESTION ${state.currentQuestionIndex + 1}/5`;
    this.updateQuestionProgress(state.currentQuestionIndex);

    // Question Content
    const scenarioBox = document.getElementById("quiz-scenario");
    const questionText = document.getElementById("quiz-question-text");
    const optionsContainer = document.getElementById("quiz-options-grid");

    if (scenarioBox) scenarioBox.textContent = question.scenario || "";
    if (questionText) questionText.textContent = question.question;

    // Build 4 Options
    if (optionsContainer) {
      optionsContainer.innerHTML = "";
      const letters = ["A", "B", "C", "D"];
      question.options.forEach((optText, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.id = `option-btn-${idx}`;
        btn.setAttribute("data-index", idx);
        btn.setAttribute("aria-label", `Pilihan ${letters[idx]}: ${optText}`);
        btn.innerHTML = `
          <span class="option-letter-badge">${letters[idx]}</span>
          <span class="option-text">${optText}</span>
        `;
        optionsContainer.appendChild(btn);
      });
    }

    // Power-ups Buttons Status
    this.updatePowerUps(state);

    // Question card entrance animation
    const card = document.getElementById("quiz-main-card");
    if (card) {
      card.classList.remove("question-card-anim");
      void card.offsetWidth; // trigger reflow
      card.classList.add("question-card-anim");
    }

    this.setCharacterExpression("thinking");
  },

  updateQuestionProgress(answeredCount, total = 5) {
    const fill = document.getElementById("quiz-progress-fill");
    const track = document.getElementById("quiz-progress-track");
    const progress = Math.max(0, Math.min(total, answeredCount));
    const percentage = total > 0 ? (progress / total) * 100 : 0;
    if (fill) fill.style.width = `${percentage}%`;
    if (track) track.setAttribute("aria-valuenow", String(progress));
  },

  /**
   * Update Power-up Buttons
   */
  updatePowerUps(state) {
    const auditBtn = document.getElementById("btn-powerup-audit");
    const encryptBtn = document.getElementById("btn-powerup-encrypt");
    const auditCount = document.getElementById("powerup-audit-count");
    const encryptCount = document.getElementById("powerup-encrypt-count");

    const auditStock = (state.powerUps && typeof state.powerUps.auditLog === "number") ? state.powerUps.auditLog : 0;
    const encryptStock = (state.powerUps && typeof state.powerUps.encryption === "number") ? state.powerUps.encryption : 0;

    if (auditCount) auditCount.textContent = auditStock;
    if (encryptCount) encryptCount.textContent = encryptStock;

    const isAuditUsedThisQ = Boolean(window.GameEngine && window.GameEngine.auditLogUsedForCurrentQuestion);
    const isEncryptUsedThisQ = Boolean(window.GameEngine && window.GameEngine.encryptionUsedForCurrentQuestion);

    if (auditBtn) {
      auditBtn.disabled = auditStock <= 0 || isAuditUsedThisQ;
      auditBtn.classList.toggle("disabled", auditBtn.disabled);
    }
    if (encryptBtn) {
      const isPaused = Boolean(state.isTimerPaused);
      encryptBtn.disabled = encryptStock <= 0 || isEncryptUsedThisQ || isPaused;
      encryptBtn.classList.toggle("disabled", encryptBtn.disabled);
      encryptBtn.classList.toggle("active-pause", isPaused);
    }
  },

  /**
   * Update Timer UI state
   */
  updateTimerUI(seconds, isPaused = false) {
    const timerBox = document.getElementById("hud-timer-display");
    const timerVal = document.getElementById("hud-timer-val");

    if (timerVal) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      timerVal.textContent = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    if (timerBox) {
      timerBox.classList.remove("normal", "warning", "critical", "paused");
      if (isPaused) {
        timerBox.classList.add("paused");
      } else if (seconds > 20) {
        timerBox.classList.add("normal");
      } else if (seconds > 10) {
        timerBox.classList.add("warning");
      } else {
        timerBox.classList.add("critical");
      }
    }
  },

  /**
   * Highlight Answer Choices & Show Feedback Modal
   */
  showFeedback(isCorrect, selectedIndex, question, speedBonus, warningNotice = null) {
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === question.answer) {
        btn.classList.add("correct");
      } else if (idx === selectedIndex) {
        btn.classList.add("wrong");
      }
    });

    const modal = document.getElementById("modal-feedback");
    const container = document.getElementById("feedback-modal-content");

    if (container) {
      container.className = `feedback-container ${isCorrect ? "feedback-correct" : "feedback-wrong"}`;

      let html = `
        <div class="feedback-status-badge">
          ${isCorrect ? "✓ BENAR! (CORRECT)" : "✕ SALAH (INCORRECT)"}
        </div>
        <div class="feedback-points">
          ${isCorrect ? "+100 POIN" : "+0 POIN"}
          ${speedBonus > 0 ? ` <span style="color:var(--cyan);font-size:0.9rem;">(+${speedBonus} SPEED BONUS!)</span>` : ""}
        </div>
        <div class="feedback-principle-badge">
          PRINSIP KEAMANAN: ${question.principle || "DATA PROTECTION"}
        </div>
        <div class="feedback-explanation">
          <strong>Mengapa?</strong><br>
          ${question.explanation}
        </div>
      `;

      if (warningNotice) {
        html += `<div class="feedback-penalty-notice">${warningNotice}</div>`;
      }

      container.innerHTML = html;
    }

    this.setCharacterExpression(isCorrect ? "happy" : "worried");

    if (isCorrect) {
      this.triggerConfetti();
    } else {
      this.triggerScreenShake();
    }

    if (modal) modal.classList.add("active");
  },

  /**
   * Trigger Light Confetti on Correct Answer
   */
  triggerConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#00f2fe", "#00f090", "#4facfe", "#f59e0b", "#ffffff"];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height / 2 + (Math.random() - 0.5) * 100,
        vx: (Math.random() - 0.5) * 10,
        vy: -Math.random() * 8 - 2,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        life: 0
      });
    }

    let frame = 0;
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25; // gravity
        p.alpha -= 0.015;

        if (p.alpha > 0) {
          alive = true;
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
      });

      ctx.globalAlpha = 1;
      if (alive && frame < 70) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    requestAnimationFrame(animate);
  },

  /**
   * Screen Shake for wrong answer
   */
  triggerScreenShake() {
    const app = document.getElementById("game-app");
    if (!app) return;
    app.classList.remove("shake-active");
    void app.offsetWidth;
    app.classList.add("shake-active");
    setTimeout(() => {
      app.classList.remove("shake-active");
    }, 550);
  },

  /**
   * Trigger Violent Data Breach Sequence
   */
  triggerDataBreachSequence(onFinished) {
    const overlay = document.getElementById("breach-overlay");
    const app = document.getElementById("game-app");

    this.setCharacterExpression("shocked");

    if (overlay) overlay.classList.add("active");
    if (app) app.classList.add("breach-shake-active");

    this.showToast("🚨 DATA BREACH DETECTED!", "Security protocol failed. Mengulang level...", "danger", 3500);

    setTimeout(() => {
      if (overlay) overlay.classList.remove("active");
      if (app) app.classList.remove("breach-shake-active");
      if (typeof onFinished === "function") onFinished();
    }, 2500);
  },

  triggerGameOverSequence(onFinished) {
    const overlay = document.getElementById("game-over-overlay");
    if (!overlay) {
      throw new Error("Game Over overlay is missing from the page.");
    }

    overlay.hidden = false;
    AudioManager.setBackgroundMusic("defeat");
    if (typeof onFinished === "function") {
      setTimeout(() => {
        overlay.hidden = true;
        onFinished();
      }, 7000);
    }
  },

  /**
   * Render Level Complete Screen
   */
  renderLevelComplete(districtKey, level, levelScore, restoredSec, isDistrictSecured, rewards = {}) {
    const dConfig = DISTRICTS_CONFIG[districtKey];

    const icon = document.getElementById("complete-icon");
    const title = document.getElementById("complete-title");
    const sub = document.getElementById("complete-subtitle");
    const scoreVal = document.getElementById("complete-score-val");
    const secVal = document.getElementById("complete-sec-val");
    const xpVal = document.getElementById("complete-xp-val");
    const badgeBox = document.getElementById("complete-badge-box");
    const actionBtn = document.getElementById("btn-complete-continue");

    if (icon) icon.textContent = isDistrictSecured ? "🏆" : "🛡️";
    if (title) title.textContent = isDistrictSecured ? "DISTRICT SECURED!" : "LEVEL COMPLETE!";
    if (sub) {
      sub.textContent = isDistrictSecured
        ? `Selamat! Distrik ${dConfig ? dConfig.name : ""} berhasil diselamatkan 100%!`
        : `Tingkat keamanan berhasil dipulihkan sebesar ${restoredSec}%`;
    }
    if (scoreVal) scoreVal.textContent = `${levelScore} / 500`;
    if (secVal) secVal.textContent = `${restoredSec}%`;
    if (xpVal) xpVal.textContent = `+${rewards.xpEarned || 0} XP`;

    if (badgeBox) {
      if (isDistrictSecured && dConfig) {
        badgeBox.style.display = "flex";
        document.getElementById("badge-reward-icon").textContent = dConfig.badgeIcon;
        document.getElementById("badge-reward-name").textContent = dConfig.badge;
      } else {
        badgeBox.style.display = "none";
      }
    }

    if (actionBtn) {
      actionBtn.textContent = isDistrictSecured ? "RETURN TO CITY" : "CONTINUE MISSION";
    }
    if (sub && Number.isFinite(rewards.citySecurityGain)) {
      sub.textContent += ` • Mission +250 XP • City Security +${rewards.citySecurityGain}%`;
      if (isDistrictSecured) sub.textContent += " • District +500 XP";
    }

    this.setCharacterExpression("victory");
    this.showScreen("complete");
  },

  /**
   * Render Final Ending Screen
   */
  renderEnding(state) {
    const totalScore = state.score.totalScore;
    const baseScore = state.score.baseScore;
    const speedBonus = state.score.speedBonus;
    const rank = GameState.getRank(baseScore);

    const rankTag = document.getElementById("ending-rank-tag");
    const scoreVal = document.getElementById("ending-score-val");
    const speedVal = document.getElementById("ending-speed-val");

    if (rankTag) {
      rankTag.textContent = `${rank.badge} ${rank.title.toUpperCase()}`;
      rankTag.style.color = rank.color;
      rankTag.style.borderColor = rank.color;
    }

    if (scoreVal) scoreVal.textContent = `${baseScore} / 4000`;
    if (speedVal) speedVal.textContent = `+${speedBonus}`;
    const securityVal = document.getElementById("ending-security-val");
    const securityFill = document.getElementById("ending-security-fill");
    if (securityVal) securityVal.textContent = `${state.citySecurity}%`;
    if (securityFill) securityFill.style.width = `${state.citySecurity}%`;

    this.setCharacterExpression("victory");
    this.showScreen("ending");
  },

  /**
   * Display a Toast Notification
   */
  showToast(title, desc, type = "normal", duration = 3000) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type === "achievement" ? "toast-achievement" : type === "danger" ? "toast-danger" : ""}`;

    let icon = "🛡️";
    if (type === "achievement") icon = "🏆";
    if (type === "danger") icon = "⚠️";

    toast.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-content">
        <span class="toast-title">${title}</span>
        <span class="toast-desc">${desc}</span>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 350);
    }, duration);
  }
};

window.UIManager = UIManager;
