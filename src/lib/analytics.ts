const GA_MEASUREMENT_ID = "G-34YXKYYKVH";
const ANALYTICS_LOAD_DELAY_MS = 8000;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  if (window.gtag || document.querySelector(`script[data-ga-id="${GA_MEASUREMENT_ID}"]`)) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.dataset.gaId = GA_MEASUREMENT_ID;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.onerror = () => {
    script.remove();
  };

  document.head.appendChild(script);
}

export function scheduleAnalytics() {
  if (import.meta.env.DEV || typeof window === "undefined") {
    return;
  }

  const schedule = () => {
    window.setTimeout(loadGoogleAnalytics, ANALYTICS_LOAD_DELAY_MS);
  };

  if ("requestIdleCallback" in window && window.requestIdleCallback) {
    window.requestIdleCallback(schedule, { timeout: 3000 });
    return;
  }

  if (document.readyState === "complete") {
    schedule();
    return;
  }

  window.addEventListener("load", schedule, { once: true });
}
