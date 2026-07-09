export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const scriptUrl = process.env.GOOGLEADS_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      console.warn("GOOGLEADS_APPS_SCRIPT_URL is not defined. Simulating a successful submission for testing.");
      return res.status(200).json({ status: "success", mock: true, message: "Successfully simulated submission" });
    }

    const payload = { ...req.body };

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: 'follow'
    });

    const text = await response.text();
    res.status(response.status).send(text);
  } catch (error) {
    console.error("Serverless proxy error:", error);
    res.status(500).json({ error: "Failed to submit lead" });
  }
}
