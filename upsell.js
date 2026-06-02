const UPSELL_VSL_CONFIG = {
  ctaDelaySeconds: 443,
};

const UPSELL_DENY_REDIRECT = "./downsell.html";
const upsellElements = {
  offer: document.querySelector(".upsell-offer"),
  acceptButton: document.getElementById("llupsell-C13A7D2AF-"),
};

function trackUpsellEvent(eventName, params = {}) {
  window.funnelAnalytics?.track(eventName, params);
}

function trackUpsellEventOnce(eventName, params = {}) {
  window.funnelAnalytics?.trackOnce(eventName, params);
}

function redirectToDownsell() {
  trackUpsellEvent("upsell_decline_click", {
    destination: UPSELL_DENY_REDIRECT,
  });

  const currentUrl = new URL(window.location.href);
  const newUrl = new URL(UPSELL_DENY_REDIRECT, window.location.href);

  currentUrl.searchParams.forEach((value, key) => {
    if (!newUrl.searchParams.has(key)) {
      newUrl.searchParams.append(key, value);
    }
  });

  window.location.href = newUrl.toString();
}

function setupDenyButtons() {
  document.querySelectorAll('[id^="denyButton"]').forEach((button) => {
    button.onclick = redirectToDownsell;
    button.onkeydown = function onDenyKeydown(event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        redirectToDownsell();
      }
    };
  });
}

function setupKeyboardFallback() {
  document.querySelectorAll(".button-default[role='button']").forEach((button) => {
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        button.click();
      }
    });
  });
}

function isUpsellOfferVisible() {
  return (
    Boolean(upsellElements.offer) &&
    !upsellElements.offer.hidden &&
    !upsellElements.offer.classList.contains("hide")
  );
}

function setupUpsellTracking() {
  trackUpsellEventOnce("upsell_view");

  if (upsellElements.acceptButton) {
    upsellElements.acceptButton.addEventListener("click", () => {
      trackUpsellEvent("upsell_accept_click", {
        destination: window.upsellRedirect || "./support.html",
      });
    });
  }

  if (upsellElements.offer) {
    const trackReveal = () => {
      if (isUpsellOfferVisible()) {
        trackUpsellEventOnce("upsell_offer_visible");
      }
    };

    trackReveal();

    const observer = new MutationObserver(trackReveal);
    observer.observe(upsellElements.offer, {
      attributes: true,
      attributeFilter: ["class", "hidden", "style"],
    });
  }
}

function setupPlayerSyncedDelay() {
  const delaySeconds = Math.max(0, Number(UPSELL_VSL_CONFIG.ctaDelaySeconds) || 0);
  const playerElement = document.querySelector("vturb-smartplayer");

  if (!playerElement || typeof playerElement.addEventListener !== "function") {
    return;
  }

  const initializeDelay = (event) => {
    const readyPlayer = event?.detail?.player || playerElement;

    if (
      !readyPlayer ||
      typeof readyPlayer.displayHiddenElements !== "function"
    ) {
      return;
    }

    readyPlayer.displayHiddenElements(delaySeconds, [".hide"], {
      persist: true,
    });
  };

  playerElement.addEventListener("player:ready", initializeDelay, {
    once: true,
  });

  document.addEventListener("player:ready", initializeDelay, {
    once: true,
  });
}

function setupUpsellPage() {
  setupUpsellTracking();
  setupDenyButtons();
  setupKeyboardFallback();
  setupPlayerSyncedDelay();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupUpsellPage);
} else {
  setupUpsellPage();
}
