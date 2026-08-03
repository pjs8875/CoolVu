import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  sub?: string;
  job?: string;
  event?: string;
  localTime?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }

  const sub = (body.sub || "").toString().slice(0, 60).trim();
  const job = (body.job || "").toString().slice(0, 120).trim();
  const event = body.event === "FINISHED" ? "FINISHED" : "ARRIVED";
  const when =
    (body.localTime || "").toString().slice(0, 60) ||
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

  if (!sub || !job) {
    return NextResponse.json({ error: "missing sub or job" }, { status: 400 });
  }

  const token = process.env.MAILTRAP_TOKEN;
  if (!token) {
    // Not configured yet — tell the page so it falls back to a text message.
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }

  const verb = event === "ARRIVED" ? "arrived at" : "finished at";
  const line = `${sub} ${verb} ${job}`;

  try {
    const res = await fetch("https://send.api.mailtrap.io/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Token": token,
      },
      body: JSON.stringify({
        from: { email: "outreach@coolvulongisland.com", name: "CoolVu Crew Check-In" },
        to: [{ email: "paul.silverman@coolvu.com" }],
        subject: `CREW ${event} — ${sub} — ${job}`,
        text:
          `${line}\n\n` +
          `Time: ${when}\n` +
          `Event: ${event}\n` +
          `Crew: ${sub}\n` +
          `Job: ${job}\n\n` +
          `— sent automatically from the CoolVu crew check-in page`,
        category: "crew-checkin",
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "send failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "send error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, event, sub, job, when });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    note: "CoolVu crew check-in endpoint. POST {sub, job, event}.",
    configured: Boolean(process.env.MAILTRAP_TOKEN),
  });
}
