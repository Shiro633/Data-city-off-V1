/* ==========================================================================
   DATA CITY OFFICER: GUARDIANS OF DATA CITY
   Main Application Entry Point, Canvas Cyber Background & Event Bindings
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Cyber Background Canvas
  initBackgroundCanvas();

  // 2. Initialize Game Engine
  GameEngine.init();
  CityWorld.init();

  // 3. Render Initial Character Avatar
  UIManager.setCharacterExpression("idle");

  // 4. Bind Global DOM Events
  bindUIEvents();

  console.log("Data City Officer Engine initialized successfully.");
});

/**
 * Animated Cyber Background Canvas
 * Draws floating cyber grid and glowing data particle packets
 */
function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Cyber particles
  const particles = [];
  const particleCount = Math.min(60, Math.floor(width / 25));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? "rgba(0, 242, 254, 0.4)" : "rgba(0, 240, 144, 0.3)"
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw subtle perspective cyber grid
    ctx.strokeStyle = "rgba(0, 242, 254, 0.04)";
    ctx.lineWidth = 1;
    const gridSize = 45;

    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Connect close particles with cyber data lines
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      p1.x += p1.vx;
      p1.y += p1.vy;

      if (p1.x < 0) p1.x = width;
      if (p1.x > width) p1.x = 0;
      if (p1.y < 0) p1.y = height;
      if (p1.y > height) p1.y = 0;

      ctx.fillStyle = p1.color;
      ctx.beginPath();
      ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        if (dist < 110) {
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.15 * (1 - dist / 110)})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/**
 * Bind Click & UI Interactions
 */
function bindUIEvents() {
  // Mobile browsers may suspend audio again after the page returns from the background.
  const unlockAudio = () => AudioManager.unlockFromGesture();
  document.addEventListener("click", unlockAudio, true);
  document.addEventListener("keydown", unlockAudio, true);
  document.addEventListener("pointerdown", unlockAudio, { capture: true, passive: true });
  document.addEventListener("touchstart", unlockAudio, { capture: true, passive: true });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) unlockAudio();
  });

  // Header Brand Logo -> Return to Main Menu
  const brandLogo = document.getElementById("header-brand-logo");
  if (brandLogo) {
    brandLogo.addEventListener("click", () => {
      AudioManager.playClick();
      GameEngine.stopTimer();
      CityWorld.savePlayerPosition();
      UIManager.showScreen("menu");
    });
  }

  // Header Sound Toggle Button
  const soundBtn = document.getElementById("btn-sound-toggle");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      const isNowEnabled = AudioManager.toggleSound();
      GameState.state.settings.soundEnabled = isNowEnabled;
      StorageManager.saveGame(GameState.state);
      UIManager.updateHeader(GameState.state);
      AudioManager.playClick();
    });
  }

  const shopOpenBtn = document.getElementById("btn-open-shop");
  if (shopOpenBtn) {
    shopOpenBtn.addEventListener("click", () => {
      AudioManager.playClick();
      GameEngine.openShop();
    });
  }

  const shopCloseButtons = [
    document.getElementById("btn-close-shop"),
    document.getElementById("btn-shop-back")
  ];
  shopCloseButtons.forEach(button => {
    if (button) {
      button.addEventListener("click", () => {
        AudioManager.playClick();
        GameEngine.closeShop();
      });
    }
  });

  const shopItemGrid = document.getElementById("shop-item-grid");
  if (shopItemGrid) {
    shopItemGrid.addEventListener("click", event => {
      const button = event.target.closest("[data-buy-item]");
      if (!button) return;
      GameEngine.purchaseSupply(button.dataset.buyItem);
    });
  }

  const inventoryOpenBtn = document.getElementById("btn-open-inventory");
  if (inventoryOpenBtn) {
    inventoryOpenBtn.addEventListener("click", () => {
      AudioManager.playClick();
      GameEngine.openInventory();
    });
  }

  const inventoryCloseButtons = [
    document.getElementById("btn-close-inventory"),
    document.getElementById("btn-inventory-back")
  ];
  inventoryCloseButtons.forEach(button => {
    if (button) {
      button.addEventListener("click", () => {
        AudioManager.playClick();
        GameEngine.closeInventory();
      });
    }
  });

  const inventoryList = document.getElementById("inventory-item-list");
  if (inventoryList) {
    inventoryList.addEventListener("click", event => {
      const button = event.target.closest("[data-use-item]");
      if (!button || button.disabled) return;
      GameEngine.useSupplyItem(button.dataset.useItem);
    });
  }

  // Splash Screen -> Enter Menu
  const splashBtn = document.getElementById("btn-splash-enter");
  if (splashBtn) {
    splashBtn.addEventListener("click", () => {
      AudioManager.playClick();
      UIManager.showScreen("menu");
    });
  }

  // Main Menu: START GAME
  const startBtn = document.getElementById("btn-menu-start");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      AudioManager.playClick();
      GameEngine.startNewGame();
    });
  }

  // Main Menu: CONTINUE GAME
  const continueBtn = document.getElementById("btn-menu-continue");
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      AudioManager.playClick();
      GameEngine.continueGame();
    });
  }

  // Main Menu: TUTORIAL
  const tutBtn = document.getElementById("btn-menu-tutorial");
  if (tutBtn) {
    tutBtn.addEventListener("click", () => {
      AudioManager.playClick();
      GameEngine.openTutorial();
    });
  }

  // Main Menu: HOW TO PLAY
  const howBtn = document.getElementById("btn-menu-how");
  if (howBtn) {
    howBtn.addEventListener("click", () => {
      AudioManager.playClick();
      document.getElementById("modal-how-to-play").classList.add("active");
    });
  }

  // Main Menu: SETTINGS
  const settingsBtn = document.getElementById("btn-menu-settings");
  if (settingsBtn) {
    settingsBtn.addEventListener("click", () => {
      AudioManager.playClick();
      const soundSwitch = document.getElementById("settings-sound-switch");
      if (soundSwitch) {
        soundSwitch.checked = GameState.state.settings.soundEnabled;
      }
      document.getElementById("modal-settings").classList.add("active");
    });
  }

  // Settings: Sound Switch
  const soundSwitch = document.getElementById("settings-sound-switch");
  if (soundSwitch) {
    soundSwitch.addEventListener("change", (e) => {
      AudioManager.toggleSound(e.target.checked);
      GameState.state.settings.soundEnabled = e.target.checked;
      StorageManager.saveGame(GameState.state);
      UIManager.updateHeader(GameState.state);
      AudioManager.playClick();
    });
  }

  // Settings: Reset Game Data Prompt
  const resetBtn = document.getElementById("btn-settings-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      AudioManager.playWarning();
      document.getElementById("modal-reset-confirm").classList.add("active");
    });
  }

  // Confirm Reset Game
  const confirmResetBtn = document.getElementById("btn-confirm-reset-yes");
  if (confirmResetBtn) {
    confirmResetBtn.addEventListener("click", () => {
      GameEngine.resetGameData();
    });
  }

  // Tutorial Navigation
  const tutPrev = document.getElementById("btn-tutorial-prev");
  const tutNext = document.getElementById("btn-tutorial-next");
  if (tutPrev) tutPrev.addEventListener("click", () => GameEngine.prevTutorial());
  if (tutNext) tutNext.addEventListener("click", () => GameEngine.nextTutorial());

  // Map: District Cards Selection
  ["hospital", "eshop", "school", "restaurant"].forEach(key => {
    const card = document.getElementById(`card-${key}`);
    if (card) {
      card.addEventListener("click", () => {
        GameEngine.selectDistrict(key);
      });
      const btn = card.querySelector(".district-action-btn");
      if (btn) {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          GameEngine.selectDistrict(key);
        });
      }
    }
  });

  // Map: Return to Menu Button
  const mapBackBtn = document.getElementById("btn-map-back-menu");
  if (mapBackBtn) {
    mapBackBtn.addEventListener("click", () => {
      AudioManager.playClick();
      UIManager.showScreen("menu");
    });
  }

  const returnCityBtn = document.getElementById("btn-map-return-city");
  if (returnCityBtn) {
    returnCityBtn.addEventListener("click", () => {
      AudioManager.playClick();
      GameEngine.goToCity();
    });
  }

  // Map: View Achievements Button
  const achBtn = document.getElementById("btn-map-achievements");
  if (achBtn) {
    achBtn.addEventListener("click", () => {
      AudioManager.playClick();
      renderAchievementsModal();
      document.getElementById("modal-achievements").classList.add("active");
    });
  }

  const briefingLevelList = document.getElementById("briefing-levels-list");
  if (briefingLevelList) {
    briefingLevelList.addEventListener("click", event => {
      const button = event.target.closest("[data-briefing-level]");
      if (!button || button.disabled) return;
      AudioManager.playClick();
      GameEngine.startLevel(Number(button.dataset.briefingLevel));
    });
  }

  // Quiz: Power-ups
  const auditBtn = document.getElementById("btn-powerup-audit");
  if (auditBtn) {
    auditBtn.addEventListener("click", () => {
      GameEngine.useAuditLog();
    });
  }

  const encryptBtn = document.getElementById("btn-powerup-encrypt");
  if (encryptBtn) {
    encryptBtn.addEventListener("click", () => {
      GameEngine.useEncryption();
    });
  }

  // Quiz: Feedback Modal Advance
  const feedbackBtn = document.getElementById("btn-feedback-continue");
  if (feedbackBtn) {
    feedbackBtn.addEventListener("click", () => {
      AudioManager.playClick();
      GameEngine.advanceQuestion();
    });
  }

  // Level Complete Continue
  const completeBtn = document.getElementById("btn-complete-continue");
  if (completeBtn) {
    completeBtn.addEventListener("click", () => {
      AudioManager.playClick();
      GameEngine.goToCity();
    });
  }

  // Final Ending Actions
  const endingPlayAgain = document.getElementById("btn-ending-play-again");
  if (endingPlayAgain) {
    endingPlayAgain.addEventListener("click", () => {
      AudioManager.playClick();
      GameEngine.playAgain();
    });
  }

  const endingViewMap = document.getElementById("btn-ending-view-map");
  if (endingViewMap) {
    endingViewMap.addEventListener("click", () => {
      AudioManager.playClick();
      GameEngine.goToMap();
    });
  }

  // Close All Modals Buttons
  document.querySelectorAll(".btn-modal-close").forEach(btn => {
    btn.addEventListener("click", () => {
      AudioManager.playClick();
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
    });
  });
}

/**
 * Render Achievements List in Modal
 */
function renderAchievementsModal() {
  const container = document.getElementById("achievements-list-container");
  if (!container) return;

  container.innerHTML = "";
  GameState.state.achievements.forEach(ach => {
    const item = document.createElement("div");
    item.className = `achievement-item ${ach.unlocked ? "unlocked" : "locked"}`;
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.gap = "14px";
    item.style.padding = "12px";
    item.style.background = ach.unlocked ? "rgba(0, 240, 144, 0.1)" : "rgba(255, 255, 255, 0.04)";
    item.style.border = `1px solid ${ach.unlocked ? "var(--emerald)" : "var(--border-color)"}`;
    item.style.borderRadius = "var(--radius-sm)";
    item.style.marginBottom = "8px";

    item.innerHTML = `
      <div style="font-size: 2rem;">${ach.icon}</div>
      <div style="flex:1;">
        <div style="font-weight: 800; color: ${ach.unlocked ? "var(--emerald)" : "#fff"}">
          ${ach.name} ${ach.unlocked ? "✓" : "🔒"}
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">${ach.desc}</div>
      </div>
      <div style="font-size: 0.75rem; font-weight:800; color: ${ach.unlocked ? "var(--emerald)" : "var(--text-dim)"}">
        ${ach.unlocked ? "TERBUKA" : "TERKUNCI"}
      </div>
    `;
    container.appendChild(item);
  });
}
