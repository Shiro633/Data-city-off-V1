/* ==========================================================================
   DATA CITY OFFICER: GUARDIANS OF DATA CITY
   Storage Management (LocalStorage with Safe Fallback)
   ========================================================================== */

const STORAGE_KEY = "DCO_GUARDIANS_SAVE_V1";

const StorageManager = {
  /**
   * Check if LocalStorage is supported and available
   */
  isAvailable() {
    try {
      const testKey = "__dco_test__";
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.warn("LocalStorage is not available, falling back to memory.", e);
      return false;
    }
  },

  /**
   * Save game progress
   * @param {Object} data 
   */
  saveGame(data) {
    if (!this.isAvailable()) return false;
    try {
      const payload = JSON.stringify({
        playerName: data.playerName || "Officer",
        playerPosition: data.playerPosition || { x: 900, y: 620 },
        xp: Number.isFinite(data.xp) ? data.xp : 0,
        citySecurity: Number.isFinite(data.citySecurity) ? data.citySecurity : 0,
        cityVisited: Boolean(data.cityVisited),
        currentDistrict: data.currentDistrict,
        currentLevel: data.currentLevel,
        completedDistricts: data.completedDistricts || [],
        districts: data.districts,
        score: {
          baseScore: data.score.baseScore || 0,
          speedBonus: data.score.speedBonus || 0,
          totalScore: data.score.totalScore || 0
        },
        achievements: data.achievements || [],
        powerUps: data.powerUps || { auditLog: 1, encryption: 1 },
        settings: {
          soundEnabled: data.settings?.soundEnabled !== false
        },
        timestamp: Date.now()
      });
      localStorage.setItem(STORAGE_KEY, payload);
      return true;
    } catch (err) {
      console.error("Failed to save game state:", err);
      return false;
    }
  },

  /**
   * Load saved game progress
   * @returns {Object|null}
   */
  loadGame() {
    if (!this.isAvailable()) return null;
    try {
      const item = localStorage.getItem(STORAGE_KEY);
      if (!item) return null;
      const parsed = JSON.parse(item);
      if (!parsed || typeof parsed !== "object") return null;
      return parsed;
    } catch (err) {
      console.error("Failed to load save state from storage:", err);
      return null;
    }
  },

  /**
   * Check if a valid save exists
   * @returns {boolean}
   */
  hasSaveGame() {
    const save = this.loadGame();
    return save !== null && (
      (save.score && save.score.baseScore > 0) ||
      (save.completedDistricts && save.completedDistricts.length > 0) ||
      save.cityVisited === true ||
      (save.playerPosition && (save.playerPosition.x !== 900 || save.playerPosition.y !== 620))
    );
  },

  /**
   * Clear all saved game data
   */
  resetGame() {
    if (!this.isAvailable()) return;
    try {
      localStorage.removeItem(STORAGE_KEY);
      console.log("Game progress cleared.");
    } catch (err) {
      console.error("Failed to clear game storage:", err);
    }
  }
};

window.StorageManager = StorageManager;
