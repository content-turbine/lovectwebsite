function isWorkEmail(email) {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;

  const personalDomains = new Set([
    "gmail.com",
    "googlemail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "live.com",
    "icloud.com",
    "me.com",
    "aol.com",
    "proton.me",
    "protonmail.com",
  ]);

  return !personalDomains.has(domain);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body ?? {};
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email || !isWorkEmail(email)) {
    res.status(400).json({ error: "Please use a company email address." });
    return;
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SLACK_WEBHOOK_URL is not configured");
    res.status(500).json({ error: "Something went wrong. Please try again shortly." });
    return;
  }

  try {
    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `:zap: New AI-visibility lead: *${email}* — requested their AI visibility report at ${new Date().toISOString()}`,
      }),
    });

    if (!slackRes.ok) throw new Error(`Slack webhook responded with ${slackRes.status}`);

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to notify Slack", err);
    res.status(500).json({ error: "Something went wrong. Please try again shortly." });
  }
}
