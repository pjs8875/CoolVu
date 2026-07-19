import Link from "next/link";
import Navbar from "@/components/Navbar";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

const faq = [
  {
    q: "Can window film give my front door glass privacy without making it dark?",
    a: "Yes. Frosted or decorative film on your front door sidelights and glass panels lets daylight flow into your entryway while blocking the view inside. From the street, people see a soft, elegant frosted panel instead of straight into your foyer. CoolVu installs this all over Nassau and Suffolk County.",
  },
  {
    q: "Does window film make a glass front door harder to break into?",
    a: "It helps. Safety and security film holds shattered glass together so a burglar can't just punch through the glass, reach in, and unlock the door. The glass may crack, but it stays in the frame — buying you time and making your Long Island home a harder target.",
  },
  {
    q: "Will film on my entry door block the afternoon sun and glare?",
    a: "Yes. Solar film on glass entry doors and sidelights cuts up to 60% of the heat and blocks 99% of UV rays, so your foyer stays cooler and your entryway floors and furniture stop fading. West-facing front doors on Long Island benefit the most.",
  },
  {
    q: "How much does window film for a front door cost on Long Island?",
    a: "Front door and sidelight jobs are usually small, so they're one of the more affordable projects. CoolVu offers free estimates across Nassau and Suffolk County and every install comes with a lifetime residential warranty. Call 516-535-9555 for a quote.",
  },
];

export default function BlogFrontDoorEntrywayPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isTransparent={false} />
      <BlogArticleLayout
        tag="Privacy & Security · July 2026"
        title="Window Film for Front Doors and Glass Entryways on Long Island"
        metaLine="By Paul Silverman · CoolVu of Long Island · July 2026 · 5 min read"
        answerText="Window film on your front door glass and sidelights does three jobs at once: it stops strangers from seeing into your home, holds the glass together if someone tries to break in, and blocks the heat and UV rays that fade your entryway. One install, lifetime warranty."
        faqItems={faq}
        ctaHeadline="Give Your Front Door Privacy, Style, and Security"
        ctaBody="Get a free estimate from CoolVu of Long Island. We'll show you privacy, decorative, and security film options for your front door and sidelights — no pressure, no sales tricks."
      >
        <p>Your front door is the first thing guests see — and the first thing a passerby looks through. If your entry door has glass panels or those tall skinny windows on either side (called sidelights), anyone walking up your Long Island driveway can see straight into your foyer, your staircase, and sometimes your whole living room.</p>

        <p>The good news: you don't have to cover it up with a curtain or replace the door. <Link href="/privacy-window-film-long-island" className="text-[#1F4E79] font-semibold underline">Window film for your front door</Link> solves the problem in an afternoon.</p>

        <p>And privacy is just the start. The right film also makes your door harder to break into and keeps the sun from cooking your entryway. Let's break down all three.</p>

        <h2>Problem #1: Everyone Can See Inside</h2>

        <p>Think of clear door glass like a fish tank — it works both ways. You look out, but the whole neighborhood looks in. At night, with your lights on, it's even worse: your lit-up foyer is on full display while the street stays dark.</p>

        <p>Frosted or decorative privacy film fixes this instantly. It turns clear glass into a soft, cloudy panel — like the look of a fancy shower door or an old office door with the pebbled glass. Daylight still pours in and your entryway stays bright, but the view inside is gone.</p>

        <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "100%", label: "of the view inside blocked" },
            { num: "99%", label: "of UV rays blocked" },
            { num: "60%", label: "of solar heat blocked at the glass" },
            { num: "1 day", label: "typical install time" },
          ].map((s) => (
            <div key={s.num} className="bg-[#EBF3FB] rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-[#1F4E79]">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2>Problem #2: Glass Doors Are Easy to Break Into</h2>

        <p>Here's a scary fact most people never think about: if your front door has glass near the handle, a burglar doesn't need to pick your lock. They just break the glass, reach in, and turn the deadbolt from the inside. It takes seconds.</p>

        <p>Safety and security film changes that. It's a thick, tough layer that bonds to the glass and holds it together even when it's hit hard. The glass might crack — but it stays in one piece in the frame. The burglar can't reach through, gets frustrated, and moves on. It works like the plastic layer inside a car windshield that keeps it from shattering into pieces.</p>

        <div className="not-prose my-6 bg-amber-50 border border-amber-300 rounded-xl p-5">
          <p className="text-sm text-gray-800"><strong className="text-orange-700">Real example:</strong> A homeowner in Massapequa had a beautiful glass-paneled front door but felt uneasy leaving it while traveling. We added clear security film to the door and both sidelights. It looks exactly the same — but now the glass acts like a locked barrier instead of an open door.</p>
        </div>

        <h2>Problem #3: The Sun Is Wrecking Your Entryway</h2>

        <p>A west-facing front door on Long Island takes a beating from 2pm to 7pm — the hottest part of the day. That sun heats up your foyer, blasts glare across your hallway, and slowly fades your entry table, your rug, and your hardwood floors.</p>

        <p>Solar film blocks up to 60% of that heat and 99% of UV rays, so your entryway stays cooler and your finishes stop fading. You can even combine looks — a decorative frosted pattern that also has solar protection built in.</p>

        <h2>Which Film Is Right for Your Door?</h2>

        <table>
          <thead><tr><th>What You Want</th><th>Best Film</th><th>What It Does</th></tr></thead>
          <tbody>
            <tr><td>Stop people seeing in</td><td>Frosted / Privacy Film</td><td>Cloudy glass look, keeps light, blocks the view</td></tr>
            <tr><td>A custom or fancy look</td><td>Decorative Film</td><td>Patterns, etched-glass styles, house numbers, designs</td></tr>
            <tr><td>Protect against break-ins</td><td>Safety / Security Film</td><td>Holds glass together, slows intruders</td></tr>
            <tr><td>Block heat & glare</td><td>Solar Film</td><td>Cuts heat, stops fading, reduces glare</td></tr>
          </tbody>
        </table>

        <p>Not sure which you need? Many Long Island homeowners combine two — for example, decorative privacy film on the sidelights plus security film on the main door glass. During your free estimate, we'll walk your entry and recommend exactly what fits your door and your goals.</p>

        <h2>Serving All of Long Island</h2>

        <p>CoolVu of Long Island installs front door and entryway film throughout Nassau County and Suffolk County — from Great Neck, Garden City, Westbury, Manhasset, Rockville Centre, and Massapequa in the west, to Huntington, Smithtown, Commack, Babylon, and Patchogue in the east. Every install comes with a lifetime residential warranty and free estimates. Call <strong>516-535-9555</strong> or visit <a href="https://www.coolvulongisland.com" className="text-[#1F4E79] font-semibold underline">coolvulongisland.com</a>.</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faq.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          }) }}
        />
      </BlogArticleLayout>
    </div>
  );
}
