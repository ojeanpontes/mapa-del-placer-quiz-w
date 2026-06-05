const VSL_CONFIG = {
  ctaDelaySeconds: 348,
  ctaHref: "https://lastlink.com/p/CCA0BE781/checkout-payment",
  ctaLabel: "QUIERO QUE ÉL SE VENGA COMO NUNCA",
};

const elements = {
  videoEmbed: document.querySelector("[data-video-embed]"),
  videoPlaceholder: document.querySelector("[data-video-placeholder]"),
  offerReveal: document.getElementById("offer-reveal"),
  ctaButton: document.getElementById("cta-button"),
};

function trackVslEvent(eventName, params = {}) {
  window.funnelAnalytics?.track(eventName, params);
}

function trackVslEventOnce(eventName, params = {}) {
  window.funnelAnalytics?.trackOnce(eventName, params);
}

function applyOfferContent() {
  elements.ctaButton.href = buildTrackedCheckoutUrl(VSL_CONFIG.ctaHref);
  elements.ctaButton.textContent = VSL_CONFIG.ctaLabel;
}

function buildTrackedCheckoutUrl(baseUrl) {
  try {
    const checkoutUrl = new URL(baseUrl);
    const currentParams = new URLSearchParams(window.location.search);

    currentParams.forEach((value, key) => {
      if (!checkoutUrl.searchParams.has(key)) {
        checkoutUrl.searchParams.append(key, value);
      }
    });

    return checkoutUrl.toString();
  } catch (error) {
    return baseUrl;
  }
}

function syncEmbedPlaceholder() {
  const hasRealEmbed = Array.from(elements.videoEmbed.children).some(
    (child) => child !== elements.videoPlaceholder,
  );

  if (hasRealEmbed && elements.videoPlaceholder) {
    elements.videoPlaceholder.hidden = true;
  }
}

function isOfferVisible() {
  return (
    Boolean(elements.offerReveal) &&
    !elements.offerReveal.hidden &&
    !elements.offerReveal.classList.contains("hide")
  );
}

function setupOfferRevealTracking() {
  if (!elements.offerReveal) {
    return;
  }

  const trackReveal = () => {
    if (isOfferVisible()) {
      trackVslEventOnce("vsl_cta_visible");
    }
  };

  trackReveal();

  const observer = new MutationObserver(trackReveal);
  observer.observe(elements.offerReveal, {
    attributes: true,
    attributeFilter: ["class", "hidden", "style"],
  });
}

function setupVslTracking() {
  trackVslEventOnce("vsl_view");

  if (elements.ctaButton) {
    elements.ctaButton.addEventListener("click", () => {
      trackVslEvent("vsl_cta_click", {
        destination: elements.ctaButton.href,
      });
    });
  }
}

function setupPlayerSyncedDelay() {
  const delaySeconds = Math.max(0, Number(VSL_CONFIG.ctaDelaySeconds) || 0);
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

applyOfferContent();
syncEmbedPlaceholder();
setupVslTracking();
setupOfferRevealTracking();
setupPlayerSyncedDelay();
