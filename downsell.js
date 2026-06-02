const DOWNSELL_CONFIG = {
  ctaHref: "https://lastlink.com/p/C4B89F167/checkout-payment",
  dashboardHref: "./support.html",
  ctaLabel: "QUIERO COMPLETAR MI JORNADA POR R$67",
};

function trackDownsellEvent(eventName, params = {}) {
  window.funnelAnalytics?.track(eventName, params);
}

function trackDownsellEventOnce(eventName, params = {}) {
  window.funnelAnalytics?.trackOnce(eventName, params);
}

function mergeCurrentQuery(baseHref) {
  if (!baseHref || baseHref === "#") {
    return baseHref || "#";
  }

  const currentUrl = new URL(window.location.href);
  const nextUrl = new URL(baseHref, window.location.href);

  currentUrl.searchParams.forEach((value, key) => {
    if (!nextUrl.searchParams.has(key)) {
      nextUrl.searchParams.append(key, value);
    }
  });

  return nextUrl.toString();
}

function redirectToDashboard(event) {
  if (event) {
    event.preventDefault();
  }

  trackDownsellEvent("downsell_decline_click", {
    destination: DOWNSELL_CONFIG.dashboardHref,
  });

  window.location.href = mergeCurrentQuery(DOWNSELL_CONFIG.dashboardHref);
}

function applyCtas() {
  const finalHref = mergeCurrentQuery(DOWNSELL_CONFIG.ctaHref);

  document.querySelectorAll("[data-downsell-accept]").forEach((element) => {
    element.href = finalHref;
    element.textContent = DOWNSELL_CONFIG.ctaLabel;
    element.addEventListener("click", () => {
      trackDownsellEvent("downsell_accept_click", {
        destination: finalHref,
      });
    });
  });

  document.querySelectorAll("[data-downsell-decline]").forEach((element) => {
    element.href = mergeCurrentQuery(DOWNSELL_CONFIG.dashboardHref);
    element.addEventListener("click", redirectToDashboard);
  });
}

function setupRevealObserver() {
  const revealables = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealables.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -32px 0px",
    },
  );

  revealables.forEach((element) => observer.observe(element));
}

function setupDownsellPage() {
  trackDownsellEventOnce("downsell_view");
  applyCtas();
  setupRevealObserver();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupDownsellPage);
} else {
  setupDownsellPage();
}
