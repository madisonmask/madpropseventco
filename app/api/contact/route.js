
export const runtime = "nodejs";

const reply = (message, status) =>
  Response.json({ message }, { status });

export async function POST(request) {
  const origin = request.headers.get("origin");

  if (!origin || origin !== new URL(request.url).origin) {
    return reply("Request not allowed.", 403);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return reply("Expected JSON.", 415);
  }

  let data;

  try {
    const reader = request.body?.getReader();

    if (!reader) {
      return reply("Missing request.", 400);
    }

    const chunks = [];
    let size = 0;

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      size += value.length;

      if (size > 16000) {
        await reader.cancel();
        return reply("Inquiry is too long.", 413);
      }

      chunks.push(value);
    }

    data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return reply("Invalid inquiry.", 400);
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return reply("Invalid inquiry.", 400);
  }

  if (data.website) {
    return reply("Unable to submit this inquiry.", 400);
  }

  const limits = {
    name: 120,
    email: 200,
    phone: 40,
    date: 10,
    budget: 80,
    details: 1800,
  };

  const clean = {};
  
  for (const [key, max] of Object.entries(limits)) {
    if (data[key] != null && typeof data[key] !== "string") {
      return reply("Invalid field.", 400);
    }

    clean[key] = (data[key] || "").trim();

    if (clean[key].length > max) {
      return reply("A field is too long.", 400);
    }
  }

  if (
    !clean.name ||
    !clean.details ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email) ||
    /[\r\n]/.test(clean.name)
  ) {
    return reply(
      "Enter your name, a valid email, and project details.",
      400
    );
  }

  const dateValid = /^\d{4}-\d{2}-\d{2}$/.test(clean.date)
    && !Number.isNaN(Date.parse(clean.date))
    && new Date(clean.date).toISOString().slice(0, 10) === clean.date;
  if (!dateValid) return reply("Enter a valid event date.", 400);
  const allowedBudgets = [
  "$2,000–$5,000",
  "$5,000–$10,000",
  "$10,000–$15,000",
  "$15,000–$25,000",
  "$25,000+"
];
  if (!allowedBudgets.includes(clean.budget)) {
    return reply("Select a budget range.", 400);
  }
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    return reply(
      "Email delivery is temporarily unavailable. Please email madison@madpropsevent.co.",
      503
    );
  }

  const text = Object.entries(clean)
    .map(([key, value]) => `${key}: ${value || "Not provided"}`)
    .join("\n\n");

  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: ["madison@madpropsevent.co"],
        reply_to: clean.email,
        subject: `Mad Props inquiry — ${clean.name}`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });

    const payload = await result.json().catch(() => ({}));

    if (!result.ok || !payload.id) {
      return reply(
        "We could not send your inquiry. Please try again or email madison@madpropsevent.co.",
        502
      );
    }

    return reply("Thanks! Your inquiry has been submitted.", 200);
  } catch {
    return reply(
      "We could not confirm submission. Please email madison@madpropsevent.co if you need help.",
      502
    );
  }
}
