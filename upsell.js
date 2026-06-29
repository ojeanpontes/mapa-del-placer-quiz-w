const UPSELL_CONFIG = {
  playerId: "69c5a5345610b6167abf0645",
  playerScript:
    "https://scripts.converteai.net/078ca594-053b-427b-a22f-58f182182f25/players/69c5a5345610b6167abf0645/v4/player.js",
  declineUrl: "./downsell.html",
  timerKey: "upsell_sentada_perfecta_timer_started_at",
  confettiKey: "upsell_sentada_perfecta_confetti_seen",
  exitModalKey: "upsell_sentada_perfecta_exit_modal_seen",
  toastCountKey: "upsell_sentada_perfecta_toast_count",
  countdownMs: 15 * 60 * 1000,
  buttonDelaySeconds: 0,
  unlocks: {
    progress: 120,
    countdown: 600,
  },
};

const upsellState = {
  videoStarted: false,
  revealed: new Set(),
  countdownTimer: null,
  toastTimer: null,
};

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => Array.from(document.querySelectorAll(selector));
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function safeGet(storage, key) {
  try {
    return storage.getItem(key);
  } catch (error) {
    return null;
  }
}

function safeSet(storage, key, value) {
  try {
    storage.setItem(key, value);
  } catch (error) {
    return false;
  }

  return true;
}

function safeRemove(storage, key) {
  try {
    storage.removeItem(key);
  } catch (error) {
    return false;
  }

  return true;
}

function trackUpsellEvent(eventName, params = {}, once = false) {
  const analytics = window.funnelAnalytics;
  const method = once ? analytics?.trackOnce : analytics?.track;

  if (typeof method === "function") {
    method.call(analytics, eventName, params);
  }
}

function buildDeclineUrl(reason) {
  const currentUrl = new URL(window.location.href);
  const nextUrl = new URL(UPSELL_CONFIG.declineUrl, window.location.href);

  currentUrl.searchParams.forEach((value, key) => {
    if (!nextUrl.searchParams.has(key)) {
      nextUrl.searchParams.append(key, value);
    }
  });

  if (reason && !nextUrl.searchParams.has("upsell_reason")) {
    nextUrl.searchParams.append("upsell_reason", reason);
  }

  return nextUrl.toString();
}

function redirectToDownsell(reason = "decline") {
  trackUpsellEvent("upsell_decline_click", {
    destination: UPSELL_CONFIG.declineUrl,
    reason,
  });

  window.location.href = buildDeclineUrl(reason);
}

function runConfetti() {
  if (
    safeGet(sessionStorage, UPSELL_CONFIG.confettiKey) ||
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  safeSet(sessionStorage, UPSELL_CONFIG.confettiKey, "1");

  const canvas = qs("[data-confetti-canvas]");
  const context = canvas?.getContext?.("2d");

  if (!canvas || !context) {
    return;
  }

  const colors = ["#FFD700", "#B71C1C", "#FF6B6B", "#FFA000"];
  const duration = 2500;
  const start = performance.now();
  const particleCount = window.innerWidth < 600 ? 40 : 80;
  const particles = [];

  function resizeCanvas() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.ceil(window.innerWidth * ratio);
    canvas.height = Math.ceil(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  resizeCanvas();

  for (let index = 0; index < particleCount; index += 1) {
    particles.push({
      x: window.innerWidth * (0.22 + Math.random() * 0.56),
      y: window.innerHeight * (0.06 + Math.random() * 0.08),
      vx: (Math.random() - 0.5) * 7,
      vy: -3 - Math.random() * 5,
      size: 4 + Math.random() * 8,
      color: colors[index % colors.length],
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.18,
      gravity: 0.18 + Math.random() * 0.1,
    });
  }

  function draw(now) {
    const elapsed = now - start;
    const progress = elapsed / duration;

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += particle.gravity;
      particle.rotation += particle.spin;

      const alpha = progress < 0.55 ? 1 : Math.max(0, 1 - (progress - 0.55) / 0.45);

      context.save();
      context.globalAlpha = alpha;
      context.translate(particle.x, particle.y);
      context.rotate(particle.rotation);
      context.fillStyle = particle.color;
      context.beginPath();
      context.ellipse(0, 0, particle.size * 0.45, particle.size, 0, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });

    if (elapsed < duration) {
      requestAnimationFrame(draw);
    } else {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      canvas.style.display = "none";
    }
  }

  requestAnimationFrame(draw);
}

function revealSection(name) {
  if (upsellState.revealed.has(name)) {
    return;
  }

  const section = qs(`[data-unlock="${name}"]`);

  if (!section) {
    return;
  }

  upsellState.revealed.add(name);
  section.hidden = false;

  requestAnimationFrame(() => {
    section.classList.remove("is-locked");
  });

  trackUpsellEvent(`upsell_${name}_visible`, {}, true);

}

function updateProgressStep() {
  const copy = qs("[data-progress-copy]");
  const message = qs("[data-progress-message]");

  if (copy) {
    copy.textContent = "en progreso...";
  }

  message?.classList.add("is-progressing");
  trackUpsellEvent("upsell_video_progress_2min", {}, true);
}

function startRevealTimeline() {
  const { progress, countdown } = UPSELL_CONFIG.unlocks;

  window.setTimeout(updateProgressStep, progress * 1000);
  window.setTimeout(() => revealSection("offer"), UPSELL_CONFIG.buttonDelaySeconds * 1000);
  window.setTimeout(startCountdown, countdown * 1000);
  scheduleSocialProof();
}

function injectPlayer() {
  const stage = qs("[data-player-stage]");

  if (!stage) {
    return;
  }

  stage.innerHTML = `<vturb-smartplayer id="vid-${UPSELL_CONFIG.playerId}" style="display:block;margin:0 auto;width:100%;max-width:100%;"></vturb-smartplayer>`;

  if (qs("[data-upsell-player-script]")) {
    return;
  }

  const script = document.createElement("script");
  script.src = UPSELL_CONFIG.playerScript;
  script.async = true;
  script.defer = true;
  script.dataset.upsellPlayerScript = "true";
  document.head.appendChild(script);
}

function setupVideoThumbnail() {
  const playButton = qs("[data-play-video]");

  if (!playButton) {
    return;
  }

  playButton.addEventListener(
    "click",
    () => {
      if (upsellState.videoStarted) {
        return;
      }

      upsellState.videoStarted = true;
      injectPlayer();
      startRevealTimeline();
      trackUpsellEvent("upsell_video_play");
    },
    { once: true },
  );
}

function getTimerStart() {
  const saved = Number(safeGet(localStorage, UPSELL_CONFIG.timerKey));

  if (Number.isFinite(saved) && saved > 0) {
    return saved;
  }

  const now = Date.now();
  safeSet(localStorage, UPSELL_CONFIG.timerKey, String(now));
  return now;
}

function startCountdown() {
  const countdown = qs("[data-countdown]");
  const clock = qs("[data-countdown-clock]");

  if (!countdown || !clock || upsellState.countdownTimer) {
    return;
  }

  const startTime = getTimerStart();
  countdown.hidden = false;
  trackUpsellEvent("upsell_countdown_started", {}, true);

  function tick() {
    const remaining = UPSELL_CONFIG.countdownMs - (Date.now() - startTime);

    if (remaining <= 0) {
      clock.textContent = "00:00";
      safeRemove(localStorage, UPSELL_CONFIG.timerKey);
      window.clearInterval(upsellState.countdownTimer);
      redirectToDownsell("expired");
      return;
    }

    const totalSeconds = Math.ceil(remaining / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    clock.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0",
    )}`;
    countdown.classList.toggle("is-last-5", remaining <= 5 * 60 * 1000);
    countdown.classList.toggle("is-last-2", remaining <= 2 * 60 * 1000);
    countdown.classList.toggle("is-last-1", remaining <= 60 * 1000);
  }

  tick();
  upsellState.countdownTimer = window.setInterval(tick, 1000);
}

function restoreTimedState() {
  if (!safeGet(localStorage, UPSELL_CONFIG.timerKey)) {
    return;
  }

  revealSection("offer");
  updateProgressStep();
  startCountdown();
}

function getToastCount() {
  return Number(safeGet(sessionStorage, UPSELL_CONFIG.toastCountKey)) || 0;
}

function setToastCount(value) {
  safeSet(sessionStorage, UPSELL_CONFIG.toastCountKey, String(value));
}

function showToast() {
  const region = qs("[data-toast-region]");
  const currentCount = getToastCount();

  if (!region || currentCount >= 3) {
    return;
  }

  const names = [
    "María",
    "Valentina",
    "Camila",
    "Daniela",
    "Paula",
    "Laura",
    "Juliana",
    "Carolina",
    "Gabriela",
    "Natalia",
    "Andrea",
    "Sofía",
  ];
  const countries = ["Colombia", "México", "Chile", "Perú", "Ecuador", "Argentina"];
  const times = ["hace 47 segundos", "hace 2 minutos", "hace 3 minutos", "hace 5 minutos"];
  const toast = document.createElement("div");

  toast.className = "upsell-toast";
  toast.innerHTML = `<strong>✨ ${names[randomBetween(0, names.length - 1)]} de ${
    countries[randomBetween(0, countries.length - 1)]
  }</strong> acaba de agregar La Sentada Perfecta<br><span>${
    times[randomBetween(0, times.length - 1)]
  }</span>`;

  region.appendChild(toast);
  setToastCount(currentCount + 1);
  window.setTimeout(() => toast.remove(), 4300);
}

function scheduleSocialProof() {
  window.setTimeout(() => {
    const scheduleNext = () => {
      if (getToastCount() >= 3) {
        return;
      }

      upsellState.toastTimer = window.setTimeout(() => {
        showToast();
        scheduleNext();
      }, randomBetween(25000, 40000));
    };

    scheduleNext();
  }, 180000);
}

function showExitModal() {
  const modal = qs("[data-exit-modal]");

  if (!modal) {
    redirectToDownsell("decline");
    return;
  }

  modal.hidden = false;
  safeSet(sessionStorage, UPSELL_CONFIG.exitModalKey, "1");
  trackUpsellEvent("upsell_exit_modal_visible", {}, true);

  const keepButton = qs("button[data-modal-keep]");
  window.setTimeout(() => keepButton?.focus?.(), 40);
}

function hideExitModal() {
  const modal = qs("[data-exit-modal]");

  if (modal) {
    modal.hidden = true;
  }

  qs("[data-video-embed]")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function setupDeclineFlow() {
  qsa("[data-decline]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      trackUpsellEvent("upsell_decline_attempt");

      if (safeGet(sessionStorage, UPSELL_CONFIG.exitModalKey)) {
        redirectToDownsell("decline_confirmed");
        return;
      }

      showExitModal();
    });
  });

  qsa("[data-modal-keep]").forEach((button) => {
    button.addEventListener("click", hideExitModal);
  });

  qs("[data-decline-confirm]")?.addEventListener("click", () => {
    redirectToDownsell("decline_confirmed");
  });
}

function addButtonRipple(button, event) {
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement("span");
  const x = event.clientX ? event.clientX - rect.left : rect.width / 2;
  const y = event.clientY ? event.clientY - rect.top : rect.height / 2;

  ripple.className = "button-ripple";
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  button.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 540);
}

function setupCtaButtons() {
  const acceptButton = qs("#llupsell-C13A7D2AF-");
  const proxyButton = qs("[data-accept-proxy]");

  if (acceptButton) {
    acceptButton.addEventListener("click", (event) => {
      addButtonRipple(acceptButton, event);
      trackUpsellEvent("upsell_accept_click", {
        destination: window.upsellRedirect || "./members.html",
      });
    });
  }

  proxyButton?.addEventListener("click", (event) => {
    addButtonRipple(proxyButton, event);
    trackUpsellEvent("upsell_accept_proxy_click");
    acceptButton?.click();
  });
}

function setupKeyboardFallback() {
  qsa(".button-default[role='button']").forEach((button) => {
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        button.click();
      }
    });
  });
}

function setupUpsellPage() {
  trackUpsellEvent("upsell_view", {}, true);
  runConfetti();
  setupVideoThumbnail();
  setupDeclineFlow();
  setupCtaButtons();
  setupKeyboardFallback();
  restoreTimedState();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupUpsellPage);
} else {
  setupUpsellPage();
}
