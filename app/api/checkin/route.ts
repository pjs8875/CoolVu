import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Push notifications go through ntfy.sh, which needs NO account and NO API key.
// The topic name is the address, so it is long and random. Paul subscribes to it
// once in the free ntfy app and every crew tap becomes an instant phone push.
const NTFY_TOPIC = "coolvu-crew-e05c7bd5d9576713";

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

  const verb = event === "ARRIVED" ? "arrived at" : "finished at";
  const title = event === "ARRIVED" ? `${sub} is on site` : `${sub} finished`;
  const line = `${sub} ${verb} ${job}`;

  let pushed = false;
  let emailed = false;

  // ---- 1. Push notification (no credentials required) ----
  try {
    const res = await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
      method: "POST",
      headers: {
        Title: title,
        Priority: event === "ARRIVED" ? "high" : "default",
        Tags: event === "ARRIVED" ? "round_pushpin" : "white_check_mark",
      },
      body: `${job}\n${when}`,
    });
    pushed = res.ok;
  } catch {
    pushed = false;
  }

  // ---- 2. Email as well, only if a token happens to be configured ----
  const token = process.env.MAILTRAP_TOKEN;
  if (token) {
    try {
      const res = await fetch("https://send.api.mailtrap.io/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Api-Token": token },
        body: JSON.stringify({
          from: {
            email: "outreach@coolvulongisland.com",
            name: "CoolVu Crew Check-In",
          },
          to: [{ email: "paul.silverman@coolvu.com" }],
          subject: `CREW ${event} — ${sub} — ${job}`,
          text: `${line}\n\nTime: ${when}\nEvent: ${event}\nCrew: ${sub}\nJob: ${job}\n\n— sent automatically from the CoolVu crew check-in page`,
          category: "crew-checkin",
        }),
      });
      emailed = res.ok;
    } catch {
      emailed = false;
    }
  }

  if (!pushed && !emailed) {
    return NextResponse.json({ error: "no channel available" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, event, sub, job, when, pushed, emailed });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    note: "CoolVu crew check-in endpoint. POST {sub, job, event}.",
    pushTopic: NTFY_TOPIC,
    emailConfigured: Boolean(process.env.MAILTRAP_TOKEN),
  });
}
