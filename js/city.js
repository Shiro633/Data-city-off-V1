/* ==========================================================================
   DATA CITY OFFICER: Canvas exploration, interactions and city progression
   ========================================================================== */

const CityWorld = {
  width: 1800,
  height: 1280,
  canvas: null,
  context: null,
  player: { x: 900, y: 640, radius: 15, speed: 230, direction: "down", walk: 0 },
  camera: { x: 0, y: 0 },
  keys: new Set(),
  touchKeys: new Set(),
  paused: false,
  dialogue: null,
  pendingMission: null,
  lastTimestamp: 0,
  lastSavedAt: 0,
  lastFootstepAt: 0,
  locations: [
    { id: "school", x: 270, y: 130, w: 340, h: 235, icon: "🏫", label: "SCHOOL", npc: "ms_rina", npcX: 440, npcY: 405, color: "#8e7cff" },
    { id: "hospital", x: 1190, y: 130, w: 350, h: 235, icon: "🏥", label: "HOSPITAL", npc: "dr_maya", npcX: 1360, npcY: 405, color: "#36c9e8" },
    { id: "restaurant", x: 270, y: 900, w: 350, h: 230, icon: "🍽️", label: "RESTAURANT", npc: "chef_budi", npcX: 445, npcY: 850, color: "#ff9f43" },
    { id: "eshop", x: 1190, y: 900, w: 350, h: 230, icon: "🛒", label: "E-SHOP", npc: "alex", npcX: 1365, npcY: 850, color: "#4ade80" }
  ],
  npcs: [
    { id: "dr_maya", district: "hospital", x: 1360, y: 405, name: "Dr. Maya", role: "Chief Medical Officer", avatar: "👩‍⚕️", color: "#ed7894" },
    { id: "alex", district: "eshop", x: 1365, y: 850, name: "Alex", role: "Cybersecurity Lead", avatar: "🧑‍💻", color: "#53c8ed" },
    { id: "ms_rina", district: "school", x: 440, y: 405, name: "Ms. Rina", role: "Principal & EdTech Head", avatar: "👩‍🏫", color: "#ffcd69" },
    { id: "chef_budi", district: "restaurant", x: 445, y: 850, name: "Chef Budi", role: "Restaurant Owner", avatar: "👨‍🍳", color: "#ff9f43" }
  ],
  props: [
    { id: "terminal", x: 910, y: 460, radius: 48, icon: "💻", name: "Public terminal" }
  ],
  trees: [[110, 110], [720, 150], [1060, 130], [1660, 145], [110, 450], [1685, 440], [120, 800], [1680, 790], [710, 1120], [1050, 1140], [700, 910], [1050, 390]],
  benches: [[690, 465], [1080, 785], [710, 805], [1085, 465]],

  init() {
    this.canvas = document.getElementById("city-canvas");
    if (!this.canvas) return;
    this.context = this.canvas.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());
    window.addEventListener("keydown", event => this.onKeyDown(event));
    window.addEventListener("keyup", event => this.onKeyUp(event));
    document.querySelectorAll("[data-move]").forEach(button => {
      const direction = button.dataset.move;
      button.addEventListener("pointerdown", event => {
        event.preventDefault();
        this.touchKeys.add(direction);
        button.setPointerCapture(event.pointerId);
      });
      const release = () => this.touchKeys.delete(direction);
      button.addEventListener("pointerup", release);
      button.addEventListener("pointercancel", release);
      button.addEventListener("lostpointercapture", release);
    });
    document.getElementById("city-touch-interact").addEventListener("click", () => this.interact());
    document.getElementById("city-pause-button").addEventListener("click", () => this.togglePause());
    document.getElementById("city-resume").addEventListener("click", () => this.togglePause(false));
    document.getElementById("city-save").addEventListener("click", () => this.saveGame());
    document.getElementById("city-settings").addEventListener("click", () => {
      const soundSwitch = document.getElementById("settings-sound-switch");
      if (soundSwitch) soundSwitch.checked = GameState.state.settings.soundEnabled;
      document.getElementById("modal-settings").classList.add("active");
    });
    document.getElementById("city-district-map").addEventListener("click", () => {
      this.savePlayerPosition();
      this.togglePause(false);
      UIManager.renderMap(GameState.state);
      UIManager.showScreen("map");
    });
    document.getElementById("city-main-menu").addEventListener("click", () => {
      this.savePlayerPosition();
      this.togglePause(false);
      UIManager.showScreen("menu");
    });
    document.getElementById("city-dialog-close").addEventListener("click", () => this.closeDialogue());
    document.getElementById("city-dialog-skip").addEventListener("click", () => this.skipDialogue());
    document.getElementById("city-dialog-next").addEventListener("click", () => this.nextDialogue());
    document.getElementById("city-briefing-start").addEventListener("click", () => this.beginMission());
    document.getElementById("city-briefing-cancel").addEventListener("click", () => this.cancelBriefing());
    document.getElementById("city-map-toggle").addEventListener("click", () => {
      document.getElementById("city-minimap").classList.toggle("expanded");
    });
    this.renderMinimap();
    requestAnimationFrame(time => this.loop(time));
  },

  resetPlayer() {
    this.player.x = 900;
    this.player.y = 640;
    GameState.state.playerPosition = { x: this.player.x, y: this.player.y };
  },

  enter() {
    const saved = GameState.state.playerPosition;
    this.player.x = Math.min(this.width - 30, Math.max(30, saved?.x || 900));
    this.player.y = Math.min(this.height - 30, Math.max(30, saved?.y || 640));
    this.paused = false;
    this.keys.clear();
    this.touchKeys.clear();
    this.updateHud();
    this.renderMinimap();
    UIManager.showScreen("city");
    this.resize();
    const welcome = document.getElementById("city-welcome");
    if (!GameState.state.cityVisited) {
      welcome.hidden = false;
      GameState.state.cityVisited = true;
      window.setTimeout(() => { welcome.hidden = true; }, 3200);
    }
    StorageManager.saveGame(GameState.state);
    const continueButton = document.getElementById("btn-menu-continue");
    if (continueButton) continueButton.disabled = !StorageManager.hasSaveGame();
  },

  resize() {
    if (!this.canvas || !this.context) return;
    const bounds = this.canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.max(1, Math.round(bounds.width * ratio));
    this.canvas.height = Math.max(1, Math.round(bounds.height * ratio));
    this.context.setTransform(ratio, 0, 0, ratio, 0, 0);
  },

  onKeyDown(event) {
    if (!document.getElementById("screen-city").classList.contains("active")) return;
    const key = event.key.toLowerCase();
    const directions = { arrowup: "up", w: "up", arrowdown: "down", s: "down", arrowleft: "left", a: "left", arrowright: "right", d: "right" };
    if (directions[key]) {
      event.preventDefault();
      this.keys.add(directions[key]);
      return;
    }
    if (event.code === "Escape") {
      event.preventDefault();
      this.togglePause();
    } else if (key === "e" && !event.repeat) {
      event.preventDefault();
      this.interact();
    } else if (this.dialogue && (event.code === "Enter" || event.code === "Space")) {
      event.preventDefault();
      this.nextDialogue();
    }
  },

  onKeyUp(event) {
    const key = event.key.toLowerCase();
    const directions = { arrowup: "up", w: "up", arrowdown: "down", s: "down", arrowleft: "left", a: "left", arrowright: "right", d: "right" };
    if (directions[key]) this.keys.delete(directions[key]);
  },

  togglePause(force) {
    const shade = document.getElementById("city-pause-shade");
    if (typeof force === "boolean") this.paused = force;
    else this.paused = !this.paused;
    shade.hidden = !this.paused;
    if (this.paused) {
      this.keys.clear();
      this.touchKeys.clear();
    }
  },

  loop(timestamp) {
    const delta = this.lastTimestamp ? Math.min((timestamp - this.lastTimestamp) / 1000, 0.05) : 0;
    this.lastTimestamp = timestamp;
    const active = document.getElementById("screen-city")?.classList.contains("active");
    if (active) {
      if (!this.paused && !this.dialogue && document.getElementById("city-briefing-shade").hidden &&
        !document.querySelector(".modal-overlay.active")) this.update(delta);
      this.draw(timestamp);
    }
    requestAnimationFrame(time => this.loop(time));
  },

  update(delta) {
    let dx = Number(this.keys.has("right") || this.touchKeys.has("right")) - Number(this.keys.has("left") || this.touchKeys.has("left"));
    let dy = Number(this.keys.has("down") || this.touchKeys.has("down")) - Number(this.keys.has("up") || this.touchKeys.has("up"));
    if (dx || dy) {
      const length = Math.hypot(dx, dy);
      dx /= length;
      dy /= length;
      this.player.direction = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up");
      this.player.walk += delta * 12;
      this.movePlayer(dx * this.player.speed * delta, dy * this.player.speed * delta);
      const now = Date.now();
      if (now - this.lastFootstepAt > 420) {
        AudioManager.playFootstep();
        this.lastFootstepAt = now;
      }
      if (now - this.lastSavedAt > 2000) {
        this.savePlayerPosition();
        this.lastSavedAt = now;
      }
    }
    this.camera.x = Math.max(0, Math.min(this.width - this.viewportWidth(), this.player.x - this.viewportWidth() / 2));
    this.camera.y = Math.max(0, Math.min(this.height - this.viewportHeight(), this.player.y - this.viewportHeight() / 2));
    this.updatePrompt();
    this.updateMinimapPlayer();
  },

  viewportWidth() { return this.canvas.getBoundingClientRect().width; },
  viewportHeight() { return this.canvas.getBoundingClientRect().height; },

  movePlayer(dx, dy) {
    this.tryMove(dx, 0);
    this.tryMove(0, dy);
  },

  tryMove(dx, dy) {
    const nextX = this.player.x + dx;
    const nextY = this.player.y + dy;
    if (nextX < this.player.radius || nextY < this.player.radius || nextX > this.width - this.player.radius || nextY > this.height - this.player.radius) return;
    const collides = this.locations.some(({ x, y, w, h }) =>
      nextX + this.player.radius > x && nextX - this.player.radius < x + w &&
      nextY + this.player.radius > y && nextY - this.player.radius < y + h
    ) || this.npcs.some(npc => Math.hypot(nextX - npc.x, nextY - npc.y) < this.player.radius + 18) ||
      this.props.some(prop => Math.hypot(nextX - prop.x, nextY - prop.y) < this.player.radius + 20) ||
      this.trees.some(([x, y]) => Math.hypot(nextX - x, nextY - y) < this.player.radius + 25) ||
      this.benches.some(([x, y]) =>
        nextX + this.player.radius > x - 24 && nextX - this.player.radius < x + 24 &&
        nextY + this.player.radius > y && nextY - this.player.radius < y + 24
      );
    if (!collides) {
      this.player.x = nextX;
      this.player.y = nextY;
    }
  },

  nearbyTarget() {
    const candidates = [
      ...this.npcs.map(npc => ({ kind: "mission", item: npc, distance: Math.hypot(this.player.x - npc.x, this.player.y - npc.y) })),
      ...this.props.map(prop => ({ kind: "object", item: prop, distance: Math.hypot(this.player.x - prop.x, this.player.y - prop.y) }))
    ].filter(target => target.distance < (target.kind === "mission" ? 76 : 68));
    candidates.sort((a, b) => (a.kind === b.kind ? a.distance - b.distance : a.kind === "mission" ? -1 : 1));
    return candidates[0] || null;
  },

  updatePrompt() {
    const target = this.nearbyTarget();
    const prompt = document.getElementById("city-interact-prompt");
    prompt.hidden = !target;
    if (target) {
      prompt.textContent = target.kind === "mission" ? `E  Talk to ${target.item.name}` : `E  Inspect ${target.item.name}`;
      prompt.dataset.target = target.item.id;
    }
  },

  interact() {
    if (this.paused || this.dialogue || !document.getElementById("city-briefing-shade").hidden) return;
    const target = this.nearbyTarget();
    if (!target) return;
    AudioManager.playClick();
    if (target.kind === "mission") this.openNpcDialogue(target.item);
    else this.openObjectDialogue(target.item);
  },

  openNpcDialogue(npc) {
    const config = DISTRICTS_CONFIG[npc.district];
    const district = GameState.state.districts[npc.district];
    const missionLevel = district.level1Complete ? (district.level2Complete ? 0 : 2) : 1;
    const lines = [
      config.briefing.quote,
      missionLevel === 0
        ? `Terima kasih, Officer. ${config.name} sekarang aman.`
        : `Bantu kami menyelesaikan misi "${missionLevel === 1 ? config.briefing.level1Title : config.briefing.level2Title}".`
    ];
    this.dialogue = { npc, lines, index: 0, missionLevel };
    const shade = document.getElementById("city-dialog-shade");
    shade.hidden = false;
    document.getElementById("city-dialog-avatar").textContent = npc.avatar;
    document.getElementById("city-dialog-title").textContent = npc.name;
    document.getElementById("city-dialog-role").textContent = npc.role;
    this.renderDialogueLine();
  },

  openObjectDialogue(prop) {
    this.dialogue = { npc: { name: prop.name, role: "City terminal", avatar: prop.icon }, lines: ["Terminal ini meminta kata sandi administrator. Petugas yang baik tidak pernah membagikan kata sandi atau membiarkan perangkat terbuka tanpa pengawasan."], index: 0, missionLevel: 0 };
    document.getElementById("city-dialog-shade").hidden = false;
    document.getElementById("city-dialog-avatar").textContent = prop.icon;
    document.getElementById("city-dialog-title").textContent = prop.name;
    document.getElementById("city-dialog-role").textContent = "Cybersecurity tip";
    this.renderDialogueLine();
  },

  renderDialogueLine() {
    if (!this.dialogue) return;
    const { lines, index, missionLevel, npc } = this.dialogue;
    const last = index >= lines.length - 1;
    document.getElementById("city-dialog-text").textContent = lines[index];
    document.getElementById("city-dialog-progress").textContent = `${Math.min(index + 1, lines.length)} / ${lines.length}`;
    document.getElementById("city-dialog-next").hidden = last;
    document.getElementById("city-dialog-skip").hidden = last || missionLevel === 0;
    const actions = document.getElementById("city-mission-actions");
    actions.hidden = !last;
    actions.replaceChildren();
    if (last && missionLevel) {
      const district = GameState.state.districts[npc.district];
      [1, 2].forEach(level => {
        const completed = level === 1 ? district.level1Complete : district.level2Complete;
        const locked = !district.unlocked || (level === 2 && !district.level1Complete);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn-primary";
        button.disabled = locked || completed;
        button.textContent = completed
          ? `✓ MISSION ${level} COMPLETE`
          : locked
            ? `🔒 MISSION ${level} — COMPLETE PREVIOUS STAGE`
            : `START MISSION ${level}`;
        button.addEventListener("click", () => this.showMissionBriefing(npc.district, level));
        actions.appendChild(button);
      });
    }
    if (last && !missionLevel) {
      const done = document.createElement("span");
      done.className = "city-district-done";
      done.textContent = "✓ DISTRICT SECURED";
      actions.appendChild(done);
    }
  },

  nextDialogue() {
    if (!this.dialogue) return;
    if (this.dialogue.index < this.dialogue.lines.length - 1) {
      this.dialogue.index++;
      AudioManager.playClick();
      this.renderDialogueLine();
    }
  },

  skipDialogue() {
    if (!this.dialogue) return;
    this.dialogue.index = this.dialogue.lines.length - 1;
    AudioManager.playClick();
    this.renderDialogueLine();
  },

  closeDialogue() {
    this.dialogue = null;
    document.getElementById("city-dialog-shade").hidden = true;
  },

  showMissionBriefing(districtKey, level) {
    const config = DISTRICTS_CONFIG[districtKey];
    this.pendingMission = { districtKey, level };
    document.getElementById("city-dialog-shade").hidden = true;
    document.getElementById("city-briefing-icon").textContent = config.icon;
    document.getElementById("city-briefing-district").textContent = `${config.name.replace(" District", "").toUpperCase()} SECURITY`;
    document.getElementById("city-briefing-title").textContent = level === 1 ? config.briefing.level1Title : config.briefing.level2Title;
    document.getElementById("city-briefing-shade").hidden = false;
  },

  cancelBriefing() {
    document.getElementById("city-briefing-shade").hidden = true;
    if (this.dialogue) document.getElementById("city-dialog-shade").hidden = false;
    this.pendingMission = null;
  },

  beginMission() {
    if (!this.pendingMission) return;
    const { districtKey, level } = this.pendingMission;
    this.savePlayerPosition();
    document.getElementById("city-dialog-shade").hidden = true;
    document.getElementById("city-briefing-shade").classList.add("mission-start");
    AudioManager.playClick();
    window.setTimeout(() => {
      document.getElementById("city-briefing-shade").classList.remove("mission-start");
      document.getElementById("city-briefing-shade").hidden = true;
      this.dialogue = null;
      this.pendingMission = null;
      GameEngine.closeModals();
      if (!GameEngine.selectDistrict(districtKey)) return;
      GameEngine.startLevel(level);
    }, 350);
  },

  objective() {
    const order = DISTRICT_ORDER;
    for (const key of order) {
      const progress = GameState.state.districts[key];
      if (!progress.level1Complete || !progress.level2Complete) {
        const location = this.locations.find(item => item.id === key);
        const npc = this.npcs.find(item => item.district === key);
        const mission = progress.level1Complete ? DISTRICTS_CONFIG[key].briefing.level2Title : DISTRICTS_CONFIG[key].briefing.level1Title;
        return `${progress.level1Complete ? "Return to" : "Visit"} ${location.label} and talk to ${npc.name} — ${mission}.`;
      }
    }
    return "All districts secured. Data City is safe!";
  },

  updateHud() {
    const state = GameState.state;
    const score = document.getElementById("city-score");
    const xp = document.getElementById("city-xp");
    const lives = document.getElementById("city-lives");
    const security = document.getElementById("city-security");
    const securityFill = document.getElementById("city-security-fill");
    const objective = document.getElementById("city-objective-text");
    const rank = document.getElementById("city-rank");
    if (score) score.textContent = state.score.totalScore.toLocaleString();
    if (xp) xp.textContent = `${(state.xp || 0).toLocaleString()} XP`;
    if (lives) lives.textContent = state.lives;
    if (security) security.textContent = `${state.citySecurity || 0}%`;
    if (securityFill) securityFill.style.width = `${state.citySecurity || 0}%`;
    if (objective) objective.textContent = this.objective();
    if (rank) rank.textContent = GameState.getRank(state.score.baseScore).title.toUpperCase();
  },

  savePlayerPosition() {
    GameState.state.playerPosition = { x: this.player.x, y: this.player.y };
    StorageManager.saveGame(GameState.state);
    const continueButton = document.getElementById("btn-menu-continue");
    if (continueButton) continueButton.disabled = !StorageManager.hasSaveGame();
  },

  saveGame() {
    GameState.state.playerPosition = { x: this.player.x, y: this.player.y };
    this.updateHud();
    const saved = StorageManager.saveGame(GameState.state);
    const continueButton = document.getElementById("btn-menu-continue");
    if (continueButton) continueButton.disabled = !StorageManager.hasSaveGame();
    UIManager.showToast(
      saved ? "GAME SAVED" : "SAVE FAILED",
      saved ? "Posisi dan progress Data City tersimpan." : "Penyimpanan lokal tidak tersedia. Progress sesi ini tetap aktif.",
      saved ? "normal" : "danger"
    );
    this.togglePause(false);
  },

  renderMinimap() {
    const minimap = document.getElementById("city-minimap");
    if (!minimap) return;
    minimap.innerHTML = `<span class="minimap-road horizontal"></span><span class="minimap-road vertical"></span>`;
    this.locations.forEach(location => {
      const marker = document.createElement("span");
      marker.className = "minimap-location";
      marker.textContent = location.icon;
      marker.style.left = `${(location.x + location.w / 2) / this.width * 100}%`;
      marker.style.top = `${(location.y + location.h / 2) / this.height * 100}%`;
      minimap.appendChild(marker);
    });
    const dot = document.createElement("span");
    dot.className = "minimap-player";
    dot.id = "minimap-player";
    minimap.appendChild(dot);
    this.updateMinimapPlayer();
  },

  updateMinimapPlayer() {
    const dot = document.getElementById("minimap-player");
    if (!dot) return;
    dot.style.left = `${this.player.x / this.width * 100}%`;
    dot.style.top = `${this.player.y / this.height * 100}%`;
  },

  draw(timestamp) {
    const ctx = this.context;
    const viewW = this.viewportWidth();
    const viewH = this.viewportHeight();
    if (!viewW || !viewH) return;
    ctx.clearRect(0, 0, viewW, viewH);
    ctx.save();
    ctx.translate(-this.camera.x, -this.camera.y);
    ctx.fillStyle = "#8bcf78";
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.fillStyle = "rgba(255,255,255,.09)";
    for (let x = 35; x < this.width; x += 90) {
      for (let y = 35; y < this.height; y += 90) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    this.drawRoads(ctx);
    this.drawDecorations(ctx);
    this.locations.forEach(location => this.drawBuilding(ctx, location));
    this.props.forEach(prop => this.drawProp(ctx, prop));
    this.npcs.forEach(npc => this.drawNpc(ctx, npc, timestamp));
    this.drawPlayer(ctx, timestamp);
    ctx.restore();
  },

  drawRoads(ctx) {
    ctx.fillStyle = "#d9c794";
    ctx.fillRect(0, 525, this.width, 235);
    ctx.fillRect(780, 0, 240, this.height);
    ctx.fillStyle = "#606f7d";
    ctx.fillRect(0, 558, this.width, 170);
    ctx.fillRect(813, 0, 174, this.height);
    ctx.strokeStyle = "#fff2a8";
    ctx.lineWidth = 5;
    ctx.setLineDash([30, 26]);
    ctx.beginPath();
    ctx.moveTo(0, 643);
    ctx.lineTo(this.width, 643);
    ctx.moveTo(900, 0);
    ctx.lineTo(900, this.height);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#82909b";
    ctx.fillRect(810, 558, 180, 170);
    ctx.strokeStyle = "rgba(255,255,255,.35)";
    ctx.lineWidth = 3;
    ctx.strokeRect(813, 558, 174, 170);
  },

  drawDecorations(ctx) {
    this.trees.forEach(([x, y]) => {
      ctx.fillStyle = "#855d3b";
      ctx.fillRect(x - 6, y + 8, 12, 24);
      ctx.fillStyle = "#288b5d";
      ctx.beginPath(); ctx.arc(x, y, 25, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#55b96f";
      ctx.beginPath(); ctx.arc(x - 7, y - 7, 15, 0, Math.PI * 2); ctx.fill();
    });
    this.benches.forEach(([x, y]) => {
      ctx.fillStyle = "#9b613a"; ctx.fillRect(x - 24, y, 48, 9);
      ctx.fillRect(x - 20, y + 10, 5, 14); ctx.fillRect(x + 15, y + 10, 5, 14);
    });
  },

  drawBuilding(ctx, building) {
    ctx.fillStyle = "rgba(24,45,51,.23)";
    ctx.fillRect(building.x + 9, building.y + 12, building.w, building.h);
    ctx.fillStyle = "#f7f4ed";
    ctx.fillRect(building.x, building.y + 25, building.w, building.h - 25);
    ctx.fillStyle = building.color;
    ctx.fillRect(building.x - 7, building.y + 18, building.w + 14, 48);
    ctx.fillStyle = "#fff";
    ctx.fillRect(building.x + 12, building.y + 75, building.w - 24, 7);
    ctx.fillStyle = "#a8dff0";
    const cols = 4;
    for (let i = 0; i < cols; i++) {
      const wx = building.x + 25 + i * ((building.w - 60) / cols);
      ctx.fillRect(wx, building.y + 100, 38, 48);
      ctx.strokeStyle = "#68a7c0"; ctx.lineWidth = 3; ctx.strokeRect(wx, building.y + 100, 38, 48);
    }
    ctx.fillStyle = "#8c6042";
    ctx.fillRect(building.x + building.w / 2 - 24, building.y + building.h - 65, 48, 65);
    ctx.fillStyle = "#17324c";
    ctx.font = "bold 20px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(`${building.icon}  ${building.label}`, building.x + building.w / 2, building.y + 51);
    ctx.textAlign = "left";
    ctx.fillStyle = "#f4d35e";
    ctx.beginPath(); ctx.arc(building.x + building.w / 2, building.y + building.h + 27, 12, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "bold 17px system-ui";
    ctx.textAlign = "center";
    ctx.fillText("!", building.x + building.w / 2, building.y + building.h + 33);
    ctx.textAlign = "left";
  },

  drawNpc(ctx, npc, timestamp) {
    const bob = Math.sin(timestamp / 280 + npc.x) * 2;
    const progress = GameState.state.districts[npc.district];
    const marker = progress.level2Complete ? "✓" : "!";
    ctx.fillStyle = "rgba(15,36,47,.22)";
    ctx.beginPath(); ctx.ellipse(npc.x, npc.y + 29, 19, 8, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#29384d";
    ctx.fillRect(npc.x - 10, npc.y + 19 + bob, 8, 14);
    ctx.fillRect(npc.x + 2, npc.y + 19 + bob, 8, 14);
    ctx.fillStyle = npc.color;
    ctx.fillRect(npc.x - 14, npc.y - 3 + bob, 28, 25);
    ctx.fillRect(npc.x - 19, npc.y + bob, 5, 19);
    ctx.fillRect(npc.x + 14, npc.y + bob, 5, 19);
    ctx.fillStyle = "#f0bd91";
    ctx.beginPath(); ctx.arc(npc.x, npc.y - 13 + bob, 13, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#29384d";
    ctx.fillRect(npc.x - 13, npc.y - 26 + bob, 26, 9);
    ctx.fillStyle = "#f5d85b";
    ctx.fillRect(npc.x - 3, npc.y - 2 + bob, 7, 7);
    ctx.fillStyle = marker === "✓" ? "#38c979" : "#ffdb65";
    ctx.beginPath(); ctx.arc(npc.x, npc.y - 43 + bob, 14, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#234"; ctx.font = "bold 17px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(marker, npc.x, npc.y - 37 + bob);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 14px system-ui";
    ctx.fillText(npc.name, npc.x, npc.y + 54);
    ctx.textAlign = "left";
  },

  drawProp(ctx, prop) {
    ctx.fillStyle = "#314b57";
    ctx.fillRect(prop.x - 26, prop.y - 20, 52, 36);
    ctx.fillStyle = "#63e0da";
    ctx.fillRect(prop.x - 21, prop.y - 15, 42, 25);
    ctx.font = "20px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(prop.icon, prop.x, prop.y - 24);
    ctx.textAlign = "left";
  },

  drawPlayer(ctx, timestamp) {
    const isWalking = this.keys.size || this.touchKeys.size;
    const walking = isWalking ? Math.sin(timestamp / 65) * 3 : 0;
    const armSwing = isWalking ? Math.sin(timestamp / 65 + Math.PI / 2) * 5 : 0;
    ctx.fillStyle = "rgba(10,25,40,.25)";
    ctx.beginPath(); ctx.ellipse(this.player.x, this.player.y + 14, 19, 8, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#153147";
    ctx.fillRect(this.player.x - 10, this.player.y + 22 + walking, 8, 14);
    ctx.fillRect(this.player.x + 2, this.player.y + 22 - walking, 8, 14);
    ctx.fillStyle = "#263b50";
    ctx.fillRect(this.player.x - 11, this.player.y + 34 + walking, 10, 5);
    ctx.fillRect(this.player.x + 1, this.player.y + 34 - walking, 10, 5);
    ctx.fillStyle = "#18b7c7";
    ctx.fillRect(this.player.x - 14, this.player.y - 3 + walking, 28, 32);
    ctx.fillStyle = "#18b7c7";
    ctx.fillRect(this.player.x - 19, this.player.y + walking + armSwing, 5, 19);
    ctx.fillRect(this.player.x + 14, this.player.y + walking - armSwing, 5, 19);
    ctx.fillStyle = "#f0bd91";
    ctx.fillRect(this.player.x - 19, this.player.y + 16 + walking + armSwing, 5, 5);
    ctx.fillRect(this.player.x + 14, this.player.y + 16 + walking - armSwing, 5, 5);
    ctx.fillStyle = "#f0bd91";
    ctx.beginPath(); ctx.arc(this.player.x, this.player.y - 13 + walking, 13, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#143c68";
    ctx.fillRect(this.player.x - 13, this.player.y - 26 + walking, 26, 9);
    ctx.fillStyle = "#f5d85b";
    ctx.fillRect(this.player.x - 3, this.player.y - 2 + walking, 7, 7);
    ctx.fillStyle = "#153147";
    ctx.font = "bold 12px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(GameState.state.playerName || "OFFICER", this.player.x, this.player.y - 34 + walking);
    ctx.textAlign = "left";
  }
};

window.CityWorld = CityWorld;
