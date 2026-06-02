const SALES_CONFIG = {
  ctaLabel: "Acceso no disponible en este momento",
};

const ctaButtons = [
  document.getElementById("cta-button"),
  document.getElementById("cta-button-bottom"),
].filter(Boolean);

function trackSalesEvent(eventName, params = {}) {
  window.funnelAnalytics?.track(eventName, params);
}

function trackSalesEventOnce(eventName, params = {}) {
  window.funnelAnalytics?.trackOnce(eventName, params);
}

function setupSalesPage() {
  trackSalesEventOnce("vsl_view");
  trackSalesEventOnce("vsl_cta_visible");

  ctaButtons.forEach((button) => {
    button.removeAttribute("href");
    button.setAttribute("role", "button");
    button.setAttribute("aria-disabled", "true");
    button.textContent = SALES_CONFIG.ctaLabel;
    button.addEventListener("click", (event) => {
      event.preventDefault();
      trackSalesEvent("vsl_cta_click", {
        destination: "disabled",
      });
    });
  });
}

setupSalesPage();
