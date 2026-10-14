/* ==========================================================================
   DATA CITY OFFICER: GUARDIANS OF DATA CITY
   Procedural Audio Engine (Web Audio API Synthesizer)
   ========================================================================== */

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.musicEnabled = true;
    this.initialized = false;
    this.resumePromise = null;
    this.musicTrack = null;
    this.musicTimer = null;
    this.musicGain = null;
    this.musicVoices = new Set();
  }

  /**
   * Lazily initialize AudioContext on user interaction
   */
  init() {
    if (this.initialized && this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.initialized = true;
      }
    } catch (e) {
      console.warn("Web Audio API not supported in this browser:", e);
    }
  }

  /**
   * Ensure context is running (handles browser autoplay policy)
   */
  ensureContext() {
    this.init();
    if (!this.ctx) return Promise.resolve(false);
    if (this.ctx.state === "running") return Promise.resolve(true);
    if (this.resumePromise) return this.resumePromise;

    try {
      this.resumePromise = this.ctx.resume()
        .then(() => this.ctx.state === "running")
        .catch(error => {
          console.warn("Unable to resume Web Audio API context:", error);
          return false;
        })
        .then(isRunning => {
          this.resumePromise = null;
          if (isRunning && this.musicEnabled && this.musicTrack && this.musicTimer === null) {
            this.startBackgroundMusic();
          }
          return isRunning;
        });
    } catch (error) {
      console.warn("Unable to resume Web Audio API context:", error);
      return Promise.resolve(false);
    }

    return this.resumePromise;
  }

  prepareContext(retry) {
    this.init();
    if (!this.ctx) return false;
    if (this.ctx.state === "running") return true;

    this.ensureContext().then(isRunning => {
      if (isRunning) retry();
    });
    return false;
  }

  toggleSound(enabled) {
    if (typeof enabled === "boolean") {
      this.enabled = enabled;
    } else {
      this.enabled = !this.enabled;
    }

    return this.enabled;
  }

  toggleMusic(enabled) {
    this.musicEnabled = typeof enabled === "boolean" ? enabled : !this.musicEnabled;
    if (this.musicEnabled) {
      this.startBackgroundMusic();
    } else {
      this.stopBackgroundMusic();
    }
    return this.musicEnabled;
  }

  setBackgroundMusic(track) {
    if (this.musicTrack === track) {
      this.startBackgroundMusic();
      return;
    }

    this.stopBackgroundMusic();
    this.musicTrack = track;
    this.startBackgroundMusic();
  }

  startBackgroundMusic() {
    if (!this.musicEnabled || !this.musicTrack || this.musicTimer !== null) return;
    if (!this.prepareContext(() => this.startBackgroundMusic())) return;

    if (!this.musicGain) {
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0;
      this.musicGain.connect(this.ctx.destination);
    }

    this.musicGain.gain.setTargetAtTime(0.25, this.ctx.currentTime, 0.15);
    this.scheduleMusicPhrase();
  }

  stopBackgroundMusic() {
    if (this.musicTimer !== null) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }

    const now = this.ctx ? this.ctx.currentTime : 0;
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setTargetAtTime(0, now, 0.04);
    }

    this.musicVoices.forEach(voice => {
      voice.gain.gain.setTargetAtTime(0, now, 0.02);
      try {
        voice.oscillator.stop(now + 0.12);
      } catch (error) {
        console.warn("Unable to stop background music voice:", error);
      }
    });
  }

  scheduleMusicPhrase() {
    if (!this.musicEnabled || !this.musicTrack || !this.ctx || this.ctx.state !== "running") return;

    const patterns = {
      menu: {
        stepDuration: 0.62,
        chord: [220, 277.18, 329.63],
        melody: [523.25, 659.25, 783.99, 659.25, 587.33, 659.25, 523.25, 440],
        chordVolume: 0.035,
        melodyVolume: 0.07,
        melodyType: "sine"
      },
      game: {
        stepDuration: 0.44,
        chord: [146.83, 220, 293.66],
        melody: [440, 523.25, 659.25, 523.25, 392, 493.88, 587.33, 493.88],
        chordVolume: 0.025,
        melodyVolume: 0.055,
        melodyType: "triangle",
        loop: true
      },
      defeat: {
        stepDuration: 0.68,
        chord: [110, 164.81, 196],
        melody: [392, 349.23, 293.66, 261.63, 220, 196, 164.81, 146.83],
        chordVolume: 0.03,
        melodyVolume: 0.065,
        melodyType: "sine",
        loop: false
      }
    };
    const pattern = patterns[this.musicTrack];
    if (!pattern) return;

    const phraseDuration = pattern.stepDuration * pattern.melody.length;
    const startTime = this.ctx.currentTime + 0.03;
    pattern.chord.forEach(frequency => {
      this.playMusicNote(frequency, startTime, phraseDuration - 0.08, pattern.chordVolume, "sine");
    });
    pattern.melody.forEach((frequency, index) => {
      this.playMusicNote(
        frequency,
        startTime + index * pattern.stepDuration,
        pattern.stepDuration * 0.78,
        pattern.melodyVolume,
        pattern.melodyType
      );
    });

    this.musicTimer = setTimeout(() => {
      this.musicTimer = null;
      if (pattern.loop) {
        this.scheduleMusicPhrase();
      } else if (this.musicTrack === "defeat") {
        this.stopBackgroundMusic();
        this.musicTrack = null;
      }
    }, phraseDuration * 1000);
  }

  playMusicNote(frequency, startTime, duration, volume, type) {
    try {
      const oscillator = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, startTime);
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(volume, startTime + Math.min(0.12, duration * 0.25));
      gain.gain.setTargetAtTime(0.001, startTime + duration * 0.55, duration * 0.12);
      oscillator.connect(gain);
      gain.connect(this.musicGain);
      oscillator.start(startTime);
      oscillator.stop(startTime + duration);

      const voice = { oscillator, gain };
      this.musicVoices.add(voice);
      oscillator.addEventListener("ended", () => this.musicVoices.delete(voice), { once: true });
    } catch (error) {
      console.warn("Unable to play background music:", error);
    }
  }

  playFootstep() {
    if (!this.enabled || !this.prepareContext(() => this.playFootstep())) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(105, now);
    osc.frequency.exponentialRampToValueAtTime(65, now + 0.07);
    gain.gain.setValueAtTime(0.035, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  /**
   * Button Click Blip
   */
  playClick() {
    if (!this.enabled || !this.prepareContext(() => this.playClick())) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch (error) { console.warn("Unable to play game sound:", error); }
  }

  /**
   * Correct Answer Chime (Harmonic Triad: C5 - E5 - G5 - C6)
   */
  playCorrect() {
    if (!this.enabled || !this.prepareContext(() => this.playCorrect())) return;

    try {
      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.50];

      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.36);
      });
    } catch (error) { console.warn("Unable to play game sound:", error); }
  }

  /**
   * Wrong Answer Buzzer (Dissonant Sawtooth Decay)
   */
  playWrong() {
    if (!this.enabled || !this.prepareContext(() => this.playWrong())) return;

    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = "sawtooth";
      osc2.type = "sawtooth";

      osc1.frequency.setValueAtTime(160, now);
      osc1.frequency.exponentialRampToValueAtTime(80, now + 0.35);

      osc2.frequency.setValueAtTime(140, now);
      osc2.frequency.exponentialRampToValueAtTime(70, now + 0.35);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.4);
      osc2.stop(now + 0.4);
    } catch (error) { console.warn("Unable to play game sound:", error); }
  }

  /**
   * Warning Beep (Rapid Two-Tone Pulsing)
   */
  playWarning() {
    if (!this.enabled || !this.prepareContext(() => this.playWarning())) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.setValueAtTime(900, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch (error) { console.warn("Unable to play game sound:", error); }
  }

  /**
   * Breach Alarm (Two-Tone Wailing Siren)
   */
  playBreachAlarm() {
    if (!this.enabled || !this.prepareContext(() => this.playBreachAlarm())) return;

    try {
      const now = this.ctx.currentTime;
      const sirenOsc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      sirenOsc.type = "sawtooth";
      // 3 cycles of wailing
      for (let i = 0; i < 3; i++) {
        const t = now + i * 0.4;
        sirenOsc.frequency.setValueAtTime(350, t);
        sirenOsc.frequency.linearRampToValueAtTime(800, t + 0.2);
        sirenOsc.frequency.linearRampToValueAtTime(350, t + 0.4);
      }

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 1.25);

      sirenOsc.connect(gain);
      gain.connect(this.ctx.destination);

      sirenOsc.start(now);
      sirenOsc.stop(now + 1.3);
    } catch (error) { console.warn("Unable to play game sound:", error); }
  }

  /**
   * Power-up: Encryption (Cyber Lock Shimmer)
   */
  playEncryption() {
    if (!this.enabled || !this.prepareContext(() => this.playEncryption())) return;

    try {
      const now = this.ctx.currentTime;
      const freqs = [350, 440, 554, 659, 880];

      freqs.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now + idx * 0.05);

        gain.gain.setValueAtTime(0.1, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.32);
      });
    } catch (error) { console.warn("Unable to play game sound:", error); }
  }

  /**
   * Power-up: Audit Log (Digital Scanner Swoosh)
   */
  playAuditLog() {
    if (!this.enabled || !this.prepareContext(() => this.playAuditLog())) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.25);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.32);
    } catch (error) { console.warn("Unable to play game sound:", error); }
  }

  /**
   * Level Complete Fanfare
   */
  playLevelComplete() {
    if (!this.enabled || !this.prepareContext(() => this.playLevelComplete())) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [
        { f: 523.25, d: 0.15 }, // C5
        { f: 659.25, d: 0.15 }, // E5
        { f: 783.99, d: 0.15 }, // G5
        { f: 1046.50, d: 0.45 } // C6
      ];

      let elapsed = 0;
      notes.forEach((note) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(note.f, now + elapsed);

        gain.gain.setValueAtTime(0.01, now + elapsed);
        gain.gain.linearRampToValueAtTime(0.22, now + elapsed + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + elapsed + note.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + elapsed);
        osc.stop(now + elapsed + note.d + 0.05);

        elapsed += note.d * 0.9;
      });
    } catch (error) { console.warn("Unable to play game sound:", error); }
  }

  /**
   * Victory Game Anthem
   */
  playVictory() {
    if (!this.enabled || !this.prepareContext(() => this.playVictory())) return;

    try {
      const now = this.ctx.currentTime;
      const melody = [
        { f: 523.25, t: 0.0, d: 0.15 },
        { f: 523.25, t: 0.16, d: 0.15 },
        { f: 523.25, t: 0.32, d: 0.15 },
        { f: 659.25, t: 0.48, d: 0.3 },
        { f: 783.99, t: 0.80, d: 0.3 },
        { f: 1046.50, t: 1.15, d: 0.6 }
      ];

      melody.forEach(m => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(m.f, now + m.t);

        gain.gain.setValueAtTime(0.2, now + m.t);
        gain.gain.exponentialRampToValueAtTime(0.001, now + m.t + m.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + m.t);
        osc.stop(now + m.t + m.d + 0.05);
      });
    } catch (error) { console.warn("Unable to play game sound:", error); }
  }

  /**
   * Timer Countdown Tick
   */
  playTick(isCritical = false) {
    if (!this.enabled || !this.prepareContext(() => this.playTick(isCritical))) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(isCritical ? 950 : 550, now);

      gain.gain.setValueAtTime(isCritical ? 0.12 : 0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (error) { console.warn("Unable to play game sound:", error); }
  }
}

window.AudioManager = new SoundSystem();
