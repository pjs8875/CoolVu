import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

const faq = [
  {
    q: "What is anti-graffiti window film?",
    a: "Anti-graffiti film is a clear, tough layer that goes over your existing storefront glass — like a screen protector for your phone. It is nearly invisible once installed. If a vandal scratches, etches, or spray-paints the glass, the damage hits the film instead of the glass underneath. You peel off the ruined film and put on a fresh piece for a fraction of the cost of new glass.",
  },
  {
    q: "How much money does anti-graffiti film actually save?",
    a: "A single large storefront pane can cost anywhere from several hundred to a few thousand dollars to replace once you add custom glass, labor, and downtime. Anti-graffiti film costs a small fraction of that — and swapping the film takes hours, not days. For Long Island businesses that get tagged or scratched more than once, the film usually pays for itself the first time it gets hit.",
  },
  {
    q: "Can you see the film once it is installed?",
    a: "No. Quality anti-graffiti film is optically clear, so your windows look exactly the same as before. Your customers will not notice it is there — but a vandal's damage will land on it instead of your glass.",
  },
  {
    q: "Does anti-graffiti film stop scratched and acid-etched graffiti too?",
    a: "Yes — this is where it really shines. Scratched tags (sometimes called scratchiti) and acid etching permanently ruin bare glass and cannot be buffed out. With anti-graffiti film, the scratches and etching stay on the sacrificial film. Remove the film and your glass underneath is untouched.",
  },
  {
    q: "Where can anti-graffiti film be installed on Long Island?",
    a: "CoolVu of Long Island installs anti-graffiti film on storefronts, restaurants, banks, offices, schools, and more across all of Nassau County and Suffolk County — including Hempstead, Westbury, Garden City, Freeport, Hicksville, Huntington, and Patchogue. Call 516-535-9555 for a free estimate.",
  },
];

export default function BlogAntiGraffitiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isTransparent={false} />
      <BlogArticleLayout
        tag="Security Film · Commercial"
        title="Anti-Graffiti Window Film for Long Island Storefronts and Businesses"
        metaLine="By Paul Silverman · CoolVu of Long Island · June 2026 · 5 min read"
        answerText="Anti-graffiti window film is a clear, tough layer applied over your storefront glass — like a screen protector for your phone. When vandals scratch, etch, or tag the glass, the damage hits the film instead. You peel off the ruined film and replace it for a fraction of the cost of new glass."
        faqItems={faq}
        ctaHeadline="Protect Your Storefront Before the Next Tag"
        ctaBody="Get a free estimate from CoolVu of Long Island. We'll measure your storefront glass and show you how anti-graffiti film saves you thousands on replacement — no pressure, no sales tricks. Call 516-535-9555."
      >
        <p>If you own a business on Long Island, you know the sinking feeling. You pull up to your store in the morning and there it is — a spray-painted tag across your front window, or a name scratched deep into the glass with a key. Now you are staring at an expensive glass replacement and a window that screams "vandalized" to every customer who walks by.</p>

        <p>There is a simple way to stop paying that bill over and over. It is called anti-graffiti window film.</p>

        <h2>Why Storefront Glass Is a Vandal's Favorite Target</h2>

        <p>Big, flat, street-facing windows are easy to reach and easy to mark. Spray paint, markers, stickers, scratched tags, and acid etching all leave their damage right where everyone can see it. And here is the painful part: scratched and acid-etched glass cannot be cleaned off. Once the glass itself is damaged, your only fix is to replace the entire pane — which on a large storefront can run into the thousands.</p>

        <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "Clear", label: "optically invisible once installed" },
            { num: "Fraction", label: "of the cost of replacing glass" },
            { num: "99%", label: "of UV rays also blocked" },
            { num: "Hours", label: "to swap out a damaged film" },
          ].map((s) => (
            <div key={s.label} className="bg-[#EBF3FB] rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-[#1F4E79]">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2>How Anti-Graffiti Film Works (Think Screen Protector)</h2>

        <p>You know the thin plastic protector people put on their phone screens? When the phone gets dropped, the protector cracks — but the actual screen underneath is fine. You peel off the cracked protector, stick on a new one, and your phone looks brand new. You did not buy a new phone.</p>

        <p>Anti-graffiti film does the exact same job for your storefront glass. It is an optically clear layer applied to the surface of your window. When a vandal scratches, etches, or paints the glass, all of that damage lands on the film instead. We peel off the ruined film, apply a fresh sheet, and your window looks new again — at a tiny fraction of what new glass would cost.</p>

        <h2>The Damage It Takes So Your Glass Does Not</h2>

        <table>
          <thead><tr><th>Type of Vandalism</th><th>What It Does to Bare Glass</th><th>With Anti-Graffiti Film</th></tr></thead>
          <tbody>
            <tr><td>Spray paint &amp; markers</td><td>Sticks to the glass, hard to fully remove</td><td>✅ Lands on the film</td></tr>
            <tr><td>Scratched tags (scratchiti)</td><td>Permanent — cannot be buffed out</td><td>✅ Lands on the film</td></tr>
            <tr><td>Acid etching</td><td>Permanent cloudy burns in the glass</td><td>✅ Lands on the film</td></tr>
            <tr><td>Stickers &amp; posting</td><td>Leaves sticky residue and stains</td><td>✅ Lands on the film</td></tr>
          </tbody>
        </table>

        <h2>Replace a Sheet of Film, Not a Wall of Glass</h2>

        <p>This is where the math gets easy. When your bare glass is destroyed, you have to order a custom pane, wait days for it to arrive, and pay for skilled labor to swap it out — all while your storefront looks broken. When film takes the hit, we simply remove it and re-apply. Same day. Done.</p>

        <table>
          <thead><tr><th></th><th>Replace the Glass</th><th>Replace the Film</th></tr></thead>
          <tbody>
            <tr><td>Cost</td><td>❌ Very high</td><td>✅ A fraction</td></tr>
            <tr><td>Downtime</td><td>❌ Days (custom glass order)</td><td>✅ Hours</td></tr>
            <tr><td>Storefront looks damaged meanwhile</td><td>❌ Yes</td><td>✅ No</td></tr>
            <tr><td>Protected again right away</td><td>❌ No — bare glass again</td><td>✅ Yes — new film on</td></tr>
          </tbody>
        </table>

        <div className="not-prose my-6 bg-amber-50 border border-amber-300 rounded-xl p-5">
          <p className="text-sm text-gray-800"><strong className="text-orange-700">The repeat-target problem:</strong> Some Long Island businesses get hit again and again on the same window. Without film, that is a brand-new glass bill every single time. With anti-graffiti film, each hit just means a quick, low-cost film swap — and vandals often give up when their "work" disappears the next day.</p>
        </div>

        <h2>It Is Not Just for Storefronts</h2>

        <p>Anti-graffiti film protects more than front windows. Long Island businesses and property owners use it on glass entry doors, office partitions, bank windows, restaurant glass, bus and train shelters, school windows, elevator panels, and even bathroom mirrors and stainless steel surfaces that get scratched. Anywhere a smooth surface is a target, the film can guard it.</p>

        <h2>A Bonus: UV Protection and Daytime Privacy</h2>

        <p>Because anti-graffiti film still blocks 99% of UV rays, it also protects the products in your window display from fading in the sun. Some versions add a light tint for daytime privacy and glare control too — so one upgrade can solve several problems at once.</p>

        <h2>Serving Businesses Across Long Island</h2>

        <p>CoolVu of Long Island installs anti-graffiti and security film for businesses throughout Nassau County and Suffolk County — from Hempstead, Westbury, Garden City, Freeport, Valley Stream, and Hicksville in the west, to Huntington, Smithtown, Bay Shore, Hauppauge, and Patchogue in the east. Every job comes with a free estimate and workmanship you can count on. Protect your glass before the next tag — call <strong>516-535-9555</strong> or visit <strong>coolvulongisland.com</strong>.</p>
      </BlogArticleLayout>
      <Footer />
    </div>
  );
}
