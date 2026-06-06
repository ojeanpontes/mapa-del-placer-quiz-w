(function () {
  const SESSION_KEY = "sv_funnel_session_id";
  const TRACKED_EVENTS_KEY = "sv_funnel_tracked_events";

  function getSessionStorage() {
    try {
      if (!window.sessionStorage) {
        return null;
      }

      return window.sessionStorage;
    } catch (error) {
      return null;
    }
  }

  function readTrackedEvents() {
    const storage = getSessionStorage();

    if (!storage) {
      return [];
    }

    try {
      const rawValue = storage.getItem(TRACKED_EVENTS_KEY);
      const parsedValue = rawValue ? JSON.parse(rawValue) : [];

      return Array.isArray(parsedValue) ? parsedValue : [];
    } catch (error) {
      return [];
    }
  }

  function writeTrackedEvents(eventNames) {
    const storage = getSessionStorage();

    if (!storage) {
      return;
    }

    try {
      storage.setItem(TRACKED_EVENTS_KEY, JSON.stringify(eventNames));
    } catch (error) {
      // Ignore storage write failures so analytics never break the funnel.
    }
  }

  function getSessionId() {
    const storage = getSessionStorage();

    if (!storage) {
      return "anonymous-session";
    }

    let sessionId = storage.getItem(SESSION_KEY);

    if (!sessionId) {
      sessionId = `sv-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      storage.setItem(SESSION_KEY, sessionId);
    }

    return sessionId;
  }

  function canTrack() {
    return typeof window.gtag === "function";
  }

  function track(eventName, params) {
    if (!canTrack() || !eventName) {
      return false;
    }

    window.gtag("event", eventName, {
      transport_type: "beacon",
      funnel_session_id: getSessionId(),
      page_location: window.location.href,
      page_path: window.location.pathname,
      ...params,
    });

    return true;
  }

  function trackOnce(eventName, params) {
    const trackedEvents = readTrackedEvents();

    if (trackedEvents.includes(eventName)) {
      return false;
    }

    const sent = track(eventName, params);

    if (sent) {
      trackedEvents.push(eventName);
      writeTrackedEvents(trackedEvents);
    }

    return sent;
  }

  window.funnelAnalytics = {
    getSessionId,
    track,
    trackOnce,
  };
})();
