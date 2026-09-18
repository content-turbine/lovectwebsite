import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    __CONTENT_TURBINE_SCANNER__?: boolean;
  }
}

function schemaTypes(): string[] {
  const found = new Set<string>();
  document.querySelectorAll('script[type="application/ld+json"]').forEach((element) => {
    try {
      const value = JSON.parse(element.textContent ?? "null");
      const visit = (item: unknown) => {
        if (!item || typeof item !== "object") return;
        const record = item as Record<string, unknown>;
        const type = record["@type"];
        if (typeof type === "string") found.add(type.slice(0, 100));
        if (Array.isArray(type)) {
          type.filter((entry) => typeof entry === "string").forEach((entry) => found.add(entry.slice(0, 100)));
        }
        const graph = record["@graph"];
        if (Array.isArray(graph)) graph.forEach(visit);
      };
      Array.isArray(value) ? value.forEach(visit) : visit(value);
    } catch {
      // Invalid third-party JSON-LD should not affect the page.
    }
  });
  return Array.from(found).slice(0, 20);
}

function contentMarkers(): string[] {
  const text = `${location.pathname} ${document.body.innerText.slice(0, 20_000)}`.toLowerCase();
  const tests: Array<[string, RegExp]> = [
    ["pricing", /\bpricing\b/],
    ["contact", /\bcontact\b/],
    ["trial", /\b(?:trial|demo)\b/],
    ["services", /\bservices?\b/],
    ["research", /\b(?:research|guide|insight)\b/],
    ["proof", /\b(?:results|testimonial|proof)\b/],
    ["customers", /\bcustomers?\b/],
    ["case_study", /\bcase stud(?:y|ies)\b/],
    ["api", /\bapi\b/],
    ["documentation", /\b(?:docs|documentation)\b/],
  ];
  return tests.filter(([, pattern]) => pattern.test(text)).map(([name]) => name);
}

function sessionKey(): string {
  const key = "ct_agent_session_v1";
  const existing = sessionStorage.getItem(key);
  if (existing) return existing;
  const created = crypto.randomUUID();
  sessionStorage.setItem(key, created);
  return created;
}

function referrerHost(): string | null {
  if (!document.referrer) return null;
  try {
    return new URL(document.referrer).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return null;
  }
}

export function AgentVisibility() {
  const location = useLocation();

  useEffect(() => {
    if (window.__CONTENT_TURBINE_SCANNER__) return;
    const userAgent = navigator.userAgent;
    const signals: string[] = [];
    if (navigator.webdriver) signals.push("webdriver", "browser_automation");
    if (/headless/i.test(userAgent)) signals.push("headless", "browser_automation");
    if (signals.length === 0) return;

    const dedupeKey = `ct_agent_last_${location.pathname}`;
    const lastSent = Number(sessionStorage.getItem(dedupeKey) ?? 0);
    if (Date.now() - lastSent < 2_000) return;
    sessionStorage.setItem(dedupeKey, String(Date.now()));

    const timer = window.setTimeout(() => {
      const payload = JSON.stringify({
        event_id: crypto.randomUUID(),
        path: location.pathname,
        referrer_host: referrerHost(),
        user_agent: userAgent,
        session_key: sessionKey(),
        title: document.title,
        signals: Array.from(new Set(signals)),
        schema_types: schemaTypes(),
        content_markers: contentMarkers(),
      });
      const blob = new Blob([payload], { type: "application/json" });
      if (!navigator.sendBeacon("/api/agent-event", blob)) {
        void fetch("/api/agent-event", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        });
      }
    }, 250);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return null;
}
