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

function inferredTarget(email) {
  return `https://${email.split("@")[1].toLowerCase()}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body ?? {};
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const correlationId =
    typeof body?.correlationId === "string" ? body.correlationId.trim() : "";

  if (!email || !isWorkEmail(email)) {
    res.status(400).json({ error: "Please use a company email address." });
    return;
  }
  if (!/^[A-Za-z0-9._:-]{1,80}$/.test(correlationId)) {
    res.status(400).json({ error: "Invalid lead request ID." });
    return;
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SLACK_WEBHOOK_URL is not configured");
    res.status(500).json({ error: "Something went wrong. Please try again shortly." });
    return;
  }

  const target = inferredTarget(email);
  const aeoApiUrl = process.env.AEO_API_URL?.replace(/\/$/, "");
  const serviceToken = process.env.AEO_SERVICE_TOKEN;
  let report = null;
  let queueError = null;

  if (!aeoApiUrl || !serviceToken) {
    queueError = "AEO_API_URL or AEO_SERVICE_TOKEN is not configured";
    console.error(queueError);
  } else {
    try {
      const aeoRes = await fetch(`${aeoApiUrl}/v1/aeo/intake/reports`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${serviceToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "website",
          correlation_id: correlationId,
        }),
      });
      if (!aeoRes.ok) {
        throw new Error(`AEO API responded with ${aeoRes.status}`);
      }
      report = await aeoRes.json();
    } catch (error) {
      queueError = error instanceof Error ? error.message : "Unknown AEO queue error";
      console.error("Failed to queue AEO report", error);
    }
  }

  const requestedAt = new Date().toISOString();
  const slackText = report
    ? [
        `:zap: New AI-visibility lead: *${email}*`,
        `Target: *${report.normalized_url}*`,
        `Report ID: \`${report.id}\``,
        `Status: queued at ${requestedAt}`,
      ].join("\n")
    : [
        `:warning: New AI-visibility lead: *${email}*`,
        `Target: *${target}*`,
        `Report queue failed: ${queueError}`,
        `Lead retained in Slack at ${requestedAt}; queue manually using request ID \`${correlationId}\`.`,
      ].join("\n");

  try {
    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: slackText }),
    });
    if (!slackRes.ok) {
      throw new Error(`Slack webhook responded with ${slackRes.status}`);
    }

    res.status(report ? 200 : 202).json({
      ok: true,
      reportQueued: Boolean(report),
      reportId: report?.id ?? null,
    });
  } catch (error) {
    console.error("Failed to notify Slack", error);
    res.status(500).json({ error: "Something went wrong. Please try again shortly." });
  }
}
