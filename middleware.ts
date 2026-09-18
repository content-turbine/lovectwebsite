import { geolocation, ipAddress, next } from "@vercel/functions";

const SITE_KEY = "ct_contentturbine_v1";
const MACHINE_PATHS = new Set([
  "/robots.txt",
  "/llms.txt",
  "/sitemap.xml",
  "/openapi.json",
  "/swagger.json",
]);
const AGENT_TOKENS = [
  "gptbot",
  "chatgpt-user",
  "oai-searchbot",
  "claudebot",
  "claude-user",
  "claude-searchbot",
  "perplexitybot",
  "perplexity-user",
  "google-extended",
  "googleother",
  "bytespider",
  "amazonbot",
  "applebot-extended",
  "headless",
  "crawler",
  "spider",
];
const AI_REFERRERS = [
  "chatgpt.com",
  "claude.ai",
  "perplexity.ai",
  "gemini.google.com",
  "copilot.microsoft.com",
];

type MiddlewareContext = {
  waitUntil(promise: Promise<unknown>): void;
};

function hostname(value: string | null): string | null {
  if (!value) return null;
  try {
    return new URL(value).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return null;
  }
}

function contentMarkers(path: string): string[] {
  const normalized = path.toLowerCase();
  const markers: string[] = [];
  if (normalized.includes("pricing")) markers.push("pricing");
  if (normalized.startsWith("/contact")) markers.push("contact");
  if (normalized.startsWith("/services")) markers.push("services");
  if (normalized.startsWith("/blog")) markers.push("research");
  if (normalized.startsWith("/citable") || normalized.startsWith("/ai")) {
    markers.push("ai_visibility");
  }
  return markers;
}

function detect(request: Request) {
  const url = new URL(request.url);
  const userAgent = request.headers.get("user-agent")?.toLowerCase() ?? "";
  const referrerHost = hostname(request.headers.get("referer"));
  const signals: string[] = [];

  if (AGENT_TOKENS.some((token) => userAgent.includes(token))) {
    signals.push("declared_or_automated_user_agent");
  }
  if (
    referrerHost &&
    AI_REFERRERS.some(
      (host) => referrerHost === host || referrerHost.endsWith(`.${host}`),
    )
  ) {
    signals.push("ai_referrer");
  }
  if (MACHINE_PATHS.has(url.pathname) || url.pathname.startsWith("/.well-known/")) {
    signals.push("machine_endpoint");
  }

  return { signals, referrerHost };
}

async function sessionKey(request: Request, secret: string): Promise<string> {
  const day = new Date().toISOString().slice(0, 10);
  const material = [
    ipAddress(request) ?? "unknown",
    request.headers.get("user-agent") ?? "unknown",
    day,
    secret,
  ].join("|");
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(material),
  );
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export default function middleware(request: Request, context: MiddlewareContext) {
  if (request.headers.get("x-content-turbine-scanner") === "1") return next();
  const userAgent = request.headers.get("user-agent") ?? "";
  if (userAgent.toLowerCase().includes("contentturbine-aeo-crawler")) return next();

  const apiUrl = process.env.AEO_API_URL?.replace(/\/$/, "");
  const serviceToken = process.env.AEO_SERVICE_TOKEN;
  const detection = detect(request);
  if (!apiUrl || !serviceToken || detection.signals.length === 0) return next();

  const url = new URL(request.url);
  const eventId = crypto.randomUUID();
  const send = async () => {
    const response = await fetch(`${apiUrl}/v1/agent/events`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${serviceToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_id: eventId,
        site_key: SITE_KEY,
        host: url.hostname,
        source: "edge",
        event_type: "request",
        path: url.pathname,
        method: request.method,
        referrer_host: detection.referrerHost,
        user_agent: userAgent.slice(0, 500),
        session_key: await sessionKey(request, serviceToken),
        country: geolocation(request).country ?? null,
        rendered: false,
        signals: detection.signals,
        schema_types: [],
        content_markers: contentMarkers(url.pathname),
      }),
    });
    if (!response.ok) {
      console.error("Agent telemetry rejected", response.status, eventId);
    }
  };

  context.waitUntil(send().catch((error) => console.error("Agent telemetry failed", error)));
  return next();
}

export const config = {
  matcher: [
    "/robots.txt",
    "/llms.txt",
    "/sitemap.xml",
    "/openapi.json",
    "/swagger.json",
    "/.well-known/:path*",
    "/((?!api/|assets/|favicon.ico|.*\\.(?:js|css|png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|map)$).*)",
  ],
};
