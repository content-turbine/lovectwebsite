const SITE_KEY = "ct_contentturbine_v1";

function bodyValue(req) {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body || "{}");
    } catch {
      return {};
    }
  }
  return req.body ?? {};
}

function cleanArray(value) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item) => typeof item === "string")
    .map((item) => item.trim().slice(0, 100))
    .filter(Boolean)
    .slice(0, 20);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiUrl = process.env.AEO_API_URL?.replace(/\/$/, "");
  const serviceToken = process.env.AEO_SERVICE_TOKEN;
  if (!apiUrl || !serviceToken) {
    console.error("AEO_API_URL or AEO_SERVICE_TOKEN is not configured");
    res.status(503).json({ accepted: false });
    return;
  }

  const body = bodyValue(req);
  const host = String(req.headers.host ?? "")
    .split(":", 1)[0]
    .toLowerCase()
    .replace(/^www\./, "");
  if (host !== "contentturbine.com") {
    res.status(422).json({ accepted: false });
    return;
  }

  const payload = {
    event_id: typeof body.event_id === "string" ? body.event_id : crypto.randomUUID(),
    site_key: SITE_KEY,
    host,
    source: "browser",
    event_type: "page_view",
    path: typeof body.path === "string" ? body.path.slice(0, 500) : "/",
    method: "GET",
    referrer_host:
      typeof body.referrer_host === "string" ? body.referrer_host.slice(0, 253) : null,
    user_agent:
      typeof body.user_agent === "string" ? body.user_agent.slice(0, 500) : null,
    session_key:
      typeof body.session_key === "string" ? body.session_key.slice(0, 128) : null,
    rendered: true,
    title: typeof body.title === "string" ? body.title.slice(0, 200) : null,
    signals: cleanArray(body.signals),
    schema_types: cleanArray(body.schema_types),
    content_markers: cleanArray(body.content_markers),
  };

  try {
    const response = await fetch(`${apiUrl}/v1/agent/events`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${serviceToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error("Agent event API rejected browser telemetry", response.status);
      res.status(response.status).json({ accepted: false });
      return;
    }
    res.status(202).json({ accepted: true });
  } catch (error) {
    console.error("Could not forward browser telemetry", error);
    res.status(503).json({ accepted: false });
  }
}
