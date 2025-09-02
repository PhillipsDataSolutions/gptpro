export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  if (req.method && req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      full_name,
      email,
      websiteform_message,
      hp,
    } = req.body ?? {};

    // Honeypot
    if (hp) return res.status(200).json({ ok: true });

    if (!email || !websiteform_message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const portalId = process.env.HS_PORTAL_ID;
    const formGuid = process.env.HS_FORM_GUID;

    const payload = {
      fields: [
        { name: "email", value: email },
        { name: "Full Name", value: full_name || "" },
        { name: "What's Not Working Today", value: websiteform_message },
      ],
      context: {
        pageUri: "https://phillipsdatasolutions.com/contact",
        pageName: "Website Contact",
      },
    };

    const r = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!r.ok) {
      const detail = await r.text();
      return res.status(502).json({ error: "HubSpot submit failed", detail });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact submit error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
