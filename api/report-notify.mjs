import { timingSafeEqual } from "node:crypto";

function isAuthorized(req, expectedToken) {
  const header = typeof req.headers.authorization === "string"
    ? req.headers.authorization
    : "";
  const provided = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!expectedToken || !provided) return false;

  const actualBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expectedToken);
  return (
    actualBuffer.length === expectedBuffer.length &&
    timingSafeEqual(actualBuffer, expectedBuffer)
  );
}

function safeHttpsUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" && Boolean(parsed.hostname)
      ? parsed.toString()
      : null;
  } catch {
    return null;
  }
}

function cleanText(value, maxLength = 300) {
  return String(value ?? "")
    .replace(/[\r\n<>]+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!isAuthorized(req, process.env.AEO_CALLBACK_TOKEN)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body ?? {};
  const event = body?.event;
  const reportId = cleanText(body?.reportId, 80);
  const target = cleanText(body?.target, 250);
  const reportUrl = safeHttpsUrl(body?.reportUrl);

  if (!["completed", "failed"].includes(event) || !reportId || !target) {
    res.status(400).json({ error: "Invalid report event." });
    return;
  }
  if (event === "completed" && !reportUrl) {
    res.status(400).json({ error: "A valid HTTPS report URL is required." });
    return;
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SLACK_WEBHOOK_URL is not configured");
    res.status(500).json({ error: "Slack delivery is not configured." });
    return;
  }

  const text =
    event === "completed"
      ? [
          ":white_check_mark: *AI-visibility report ready*",
          `Target: *${target}*`,
          `Report ID: \`${reportId}\``,
          `<${reportUrl}|Open customer report>`,
          "This link is ready to forward to the customer.",
        ].join("\n")
      : [
          ":x: *AI-visibility report failed*",
          `Target: *${target}*`,
          `Report ID: \`${reportId}\``,
          `Error: ${cleanText(body?.error) || "Unknown processing error"}`,
          "Retry using the report ID above.",
        ].join("\n");

  try {
    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (!slackRes.ok) {
      throw new Error(`Slack webhook responded with ${slackRes.status}`);
    }
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to deliver report event to Slack", error);
    res.status(502).json({ error: "Slack delivery failed." });
  }
}
