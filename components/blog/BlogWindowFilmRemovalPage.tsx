import Link from "next/link";
import Navbar from "@/components/Navbar";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

const faq = [
  {
    q: "Why does old window film turn purple or bubble?",
    a: "Older window film used dyes and glue that break down after years of Long Island sun and humidity. The dye fades from grey to purple, and the adhesive dries out and lifts, which creates bubbles and creases. It is the film wearing out, not your glass failing.",
  },
  {
    q: "Can I remove old window film myself?",
    a: "You can try, but most Long Island homeowners regret it. The top layer peels off easily and leaves a stubborn glue haze behind that takes hours to scrape. On double-pane or tempered glass, aggressive scraping and heat can scratch or crack the window. Professional removal is faster and far safer.",
  },
  {
    q: "How long does professional window film removal take?",
    a: "For a typical Long Island home, CoolVu removes and replaces film on an average room in a few hours, and most whole-house jobs finish in one day. We strip the old film, clean every trace of adhesive off the glass, and install the new film the same visit.",
  },
  {
    q: "Do I have to replace the film after it is removed?",
    a: "No, but almost everyone does. If you had film on those windows, it was solving a heat, glare, or privacy problem that comes right back the day it is gone. New film blocks 99% of UV rays and up to 60% of solar heat, and it will not turn purple like the old stuff.",
  },
  {
    q: "Does CoolVu remove film installed by another company?",
    a: "Yes. CoolVu of Long Island removes and replaces window film installed by anyone, anywhere in Nassau County and Suffolk County. You get a free estimate up front and a lifetime residential warranty on the new film. Call 516-535-9555.",
  },
];

export default function BlogWindowFilmRemovalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isTransparent={false} />
      <BlogArticleLayout
        tag="Window Film Care · Long Island"
        title="Old Window Film Bubbling or Turning Purple? How Removal and Replacement Works on Long Island"
        metaLine="By Paul Silverman · CoolVu of Long Island · July 2026 · 6 min read"
        answerText="Bubbling, hazy, or purple window film means the old film's dye and adhesive have worn out — the glass underneath is almost always fine. A professional strips the film and every bit of leftover glue, then installs new film that blocks 99% of UV rays and up to 60% of solar heat. CoolVu removes and replaces film anywhere in Nassau and Suffolk County, with a free estimate and a lifetime residential warranty."
        faqItems={faq}
        ctaHeadline="Ready to Get Rid of That Ugly Old Film?"
        ctaBody="CoolVu of Long Island removes worn-out window film and replaces it with modern film that stays clear for the life of your home. Free estimate, lifetime residential warranty. Call 516-535-9555."
      >
        <p>You bought the house ten years ago and the windows already had film on them. For a while it looked fine. Now the living room glass has a purple tint, there are bubbles along the edges, and one panel looks like a wrinkled candy wrapper.</p>

        <p>Here is the reassuring part: your windows are almost certainly fine. It is the film that wore out — and that is a straightforward fix.</p>

        <h2>Why Old Window Film Goes Bad</h2>

        <p>Think of old window film like a cheap pair of sunglasses left on a car dashboard all summer. The lenses fade, the frames get brittle, and eventually the whole thing falls apart. Film that was made 10, 15, or 20 years ago works the same way.</p>

        <p>Older film relied on two things that do not age well:</p>

        <p><strong>Dye.</strong> Early film got its color from a dye layer. Long Island sun beats on that dye every day from spring through fall. Over time the dye breaks down, and because the blue pigment fades first, what is left reads as purple. That is why so many old-film windows across Nassau and Suffolk have that unmistakable grape color.</p>

        <p><strong>Adhesive.</strong> The glue holding the film to the glass dries out and loses its grip. Air sneaks in underneath, and you get bubbles, silvery patches, and peeling corners. Our humid summers and freezing winters speed this up — the glass expands and contracts all year, working the old glue loose a little more each season.</p>

        <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "10-20 yr", label: "when old dyed film typically fails" },
            { num: "1 day", label: "typical whole-home removal + replacement" },
            { num: "99%", label: "of UV blocked by new film" },
            { num: "Lifetime", label: "residential warranty on new film" },
          ].map((s) => (
            <div key={s.num} className="bg-[#EBF3FB] rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-[#1F4E79]">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2>The Four Warning Signs</h2>

        <p><strong>1. Purple or brown color.</strong> The dye has broken down. The film is no longer blocking heat the way it did when it was new — it is mostly just discoloring your view now.</p>

        <p><strong>2. Bubbles.</strong> Air pockets under the film mean the adhesive has let go. Bubbles spread; they never shrink back.</p>

        <p><strong>3. Cloudy or hazy glass.</strong> The film layers are separating. From inside it looks like your windows never quite come clean, no matter how much you scrub.</p>

        <p><strong>4. Peeling edges or scratches.</strong> Once a corner lifts, the rest follows, and every cleaning session pulls it a little further.</p>

        <div className="not-prose my-6 bg-amber-50 border border-amber-300 rounded-xl p-5">
          <p className="text-sm text-gray-800"><strong className="text-orange-700">Real example:</strong> A homeowner in Levittown called us about four purple, bubbled windows in a sunroom — film the previous owner had installed sometime in the early 2000s. We stripped all four, cleaned the adhesive off the glass, and installed new film in a single afternoon. The room was noticeably cooler that same week, and the glass finally looked like clear glass again.</p>
        </div>

        <h2>Why DIY Removal Usually Goes Sideways</h2>

        <p>Peeling old film off is deceptively easy for about thirty seconds. The top layer comes away in a satisfying sheet — then you are staring at a full window of dried, cloudy glue that will not budge.</p>

        <p>That adhesive is the real job. Getting it off takes steady heat, the right solution, and a careful blade angle. Push too hard and you scratch the glass. Overheat one spot on a double-pane window and you risk cracking it or damaging the seal between the panes, which turns a cosmetic problem into a window replacement.</p>

        <table>
          <thead><tr><th>Approach</th><th>Time on 4 Windows</th><th>Risk to Your Glass</th><th>Result</th></tr></thead>
          <tbody>
            <tr><td><strong>CoolVu professional removal</strong></td><td>A few hours</td><td>✅ Low — proper tools and technique</td><td>✅ Clean glass, new film same visit</td></tr>
            <tr><td>DIY scraping</td><td>A full weekend</td><td>❌ Scratches, seal damage, cracks</td><td>🟡 Often streaky glue haze left behind</td></tr>
            <tr><td>Leaving it alone</td><td>None</td><td>✅ None</td><td>❌ Keeps getting worse, no heat protection</td></tr>
          </tbody>
        </table>

        <h2>What Professional Removal and Replacement Looks Like</h2>

        <p><strong>Step 1 — Free estimate.</strong> We look at the windows, confirm the glass type, and count the panels. You get a clear price before anything starts.</p>

        <p><strong>Step 2 — Protect the room.</strong> Floors, sills, and furniture get covered before we touch a window.</p>

        <p><strong>Step 3 — Strip the film.</strong> Controlled heat and steam release the old adhesive so the film lifts off without gouging the glass.</p>

        <p><strong>Step 4 — Clean the glass.</strong> Every trace of leftover glue comes off. This is the step DIY attempts almost always skip, and it is why the new film goes on flawlessly.</p>

        <p><strong>Step 5 — Install the new film.</strong> Modern film uses no dye layer that can fade to purple. It blocks 99% of UV rays and up to 60% of solar heat, and it is backed by a lifetime residential warranty.</p>

        <h2>Pick the Right Replacement While You Are At It</h2>

        <p>Removal day is the perfect moment to reconsider what that window actually needs. The old film was probably chosen twenty years ago by someone else.</p>

        <table>
          <thead><tr><th>If the problem is…</th><th>Choose</th></tr></thead>
          <tbody>
            <tr><td>Heat, glare, high cooling bills</td><td><Link href="/solar-window-film-long-island" className="text-[#1F4E79] font-semibold underline">Solar film</Link></td></tr>
            <tr><td>Neighbors seeing in, street-facing rooms</td><td><Link href="/privacy-window-film-long-island" className="text-[#1F4E79] font-semibold underline">Privacy film</Link></td></tr>
            <tr><td>Storms, break-ins, glass safety</td><td><Link href="/safety-security-window-film-long-island" className="text-[#1F4E79] font-semibold underline">Safety film</Link></td></tr>
            <tr><td>Plain glass you want to dress up</td><td><Link href="/decorative-window-film-long-island" className="text-[#1F4E79] font-semibold underline">Decorative film</Link></td></tr>
          </tbody>
        </table>

        <h2>Will the New Film Do This Again?</h2>

        <p>No. That is the honest short answer. The film we install today does not depend on a dye layer that bleaches out, and the adhesive technology is a generation past what caused those bubbles. Long Island homeowners who had film replaced years ago still have clear, flat, correctly-colored glass today — which is exactly why we can put a lifetime residential warranty behind it.</p>

        <h2>Serving All of Long Island</h2>

        <p>CoolVu of Long Island removes and replaces window film throughout Nassau County and Suffolk County — Westbury, Garden City, Levittown, Great Neck, Manhasset, Massapequa, East Meadow, Rockville Centre, Plainview, Syosset, Commack, Huntington, Smithtown, and everywhere in between. It does not matter who installed the old film or how long ago.</p>

        <p>Stop looking at purple, bubbled glass. Call CoolVu at <strong>516-535-9555</strong> or visit <a href="https://www.coolvulongisland.com" className="text-[#1F4E79] font-semibold underline">coolvulongisland.com</a> for your free estimate.</p>
      </BlogArticleLayout>

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
    </div>
  );
}
