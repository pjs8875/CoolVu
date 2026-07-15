import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

const faq = [
  {
    q: "Does window film really prevent fading on Long Island?",
    a: "Yes. Window film blocks up to 99% of UV rays, which are responsible for 40–60% of furniture and floor fading. Long Island homes get intense sun exposure, especially south- and west-facing rooms. Film stops UV damage at the glass before it reaches your belongings.",
  },
  {
    q: "Will window film completely stop fading?",
    a: "No film eliminates fading entirely — visible light and heat also play a role. But by blocking 99% of UV rays, quality film dramatically slows the fading process, often extending the life of floors, furniture, and fabrics by years.",
  },
  {
    q: "How long does it take for UV damage to show up on hardwood floors?",
    a: "On Long Island, you can see noticeable color change in unprotected hardwood floors within 1–3 years in sun-facing rooms. Fading on fabric and leather furniture can begin even sooner. The damage is gradual — but it's happening every day the sun shines.",
  },
  {
    q: "What types of items does window film protect?",
    a: "Window film protects hardwood floors, area rugs, upholstered furniture, leather sofas, artwork, photographs, curtains, drapes, and any décor near windows. Anything the sun touches inside your home is at risk without UV-blocking film.",
  },
  {
    q: "How much does window film cost compared to replacing sun-damaged furniture?",
    a: "A professional window film installation typically costs $8–$25 per square foot depending on the film type. Compare that to refinishing hardwood floors ($3–$8 per sq ft), replacing a sofa ($1,000–$4,000), or reupholstering furniture. One film job pays for itself quickly.",
  },
];

export default function BlogUVDamagePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isTransparent={false} />
      <BlogArticleLayout
        tag="UV Protection · Solar Film"
        title="UV Damage to Furniture and Floors: How Window Film Protects Your Long Island Home"
        metaLine="By Paul Silverman · CoolVu of Long Island · May 2026 · 5 min read"
        answerText="UV rays coming through your windows are silently fading your hardwood floors, bleaching your furniture, and destroying artwork — every single day. Window film blocks 99% of those UV rays at the glass, protecting everything inside your home without changing how your rooms look."
        faqItems={faq}
        ctaHeadline="Stop the Fading Before It Gets Worse"
        ctaBody="Get a free estimate from CoolVu of Long Island. We'll tell you which windows are putting your floors and furniture at risk and give you an honest price — no pressure, no surprises."
      >
        <p>You spent real money on that hardwood floor. Or that leather sofa. Or the custom blinds. But if your windows face south or west, the sun is quietly destroying all of it — and most homeowners don&apos;t notice until the damage is obvious and expensive to fix.</p>

        <p>This is one of the most overlooked problems on Long Island, and the fix is simpler than most people think.</p>

        <h2>Why UV Rays Are the Real Enemy</h2>

        <p>Sunlight is made up of three things: visible light (what you see), infrared radiation (heat), and ultraviolet radiation (UV). Your windows let in all three. But UV rays are the silent destroyers — invisible and relentless.</p>

        <p>Think of it like leaving a colored shirt in the sun all summer. The heat doesn&apos;t bleach it — the UV does. Your floor is basically that shirt, sitting in the sun every day through your windows.</p>

        <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "99%", label: "of UV rays blocked by CoolVu film" },
            { num: "40–60%", label: "of fading caused by UV rays" },
            { num: "1–3 yrs", label: "before visible fading on unprotected hardwood" },
            { num: "$3–8/sqft", label: "cost to refinish damaged hardwood floors" },
          ].map((s) => (
            <div key={s.num} className="bg-[#EBF3FB] rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-[#1F4E79]">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2>What Gets Damaged First in a Long Island Home?</h2>

        <p>Sun damage isn&apos;t random — it follows predictable patterns based on which way your windows face and how much direct sun they get. Here&apos;s what&apos;s at risk in your home:</p>

        <table>
          <thead><tr><th>Item at Risk</th><th>How Quickly It Fades</th><th>Replacement Cost</th></tr></thead>
          <tbody>
            <tr><td>Hardwood floors</td><td>Noticeable change in 1–3 years</td><td>$3–8/sqft to refinish</td></tr>
            <tr><td>Area rugs</td><td>6–18 months near south windows</td><td>$200–$2,000+ to replace</td></tr>
            <tr><td>Upholstered furniture</td><td>1–2 years of daily sun</td><td>$500–$4,000 to replace</td></tr>
            <tr><td>Leather sofas</td><td>Cracking and fading in 2–4 years</td><td>$1,000–$5,000 to replace</td></tr>
            <tr><td>Framed artwork &amp; photos</td><td>Color shifts in as little as 6 months</td><td>Irreplaceable</td></tr>
            <tr><td>Curtains &amp; drapes</td><td>1–3 years, especially light colors</td><td>$200–$1,500 to replace</td></tr>
          </tbody>
        </table>

        <h2>The Long Island Sun Problem Is Worse Than You Think</h2>

        <p>Long Island gets intense sun exposure — especially from late spring through early fall. Homes with southern exposure, large picture windows, or west-facing living rooms and bedrooms are hit the hardest.</p>

        <p>The salt air and humidity here don&apos;t cause the fading — but they do mean your windows stay clean and clear year-round, which means more unobstructed UV coming through. There&apos;s no fog or pollution layer softening it.</p>

        <div className="not-prose my-6 bg-amber-50 border border-amber-300 rounded-xl p-5">
          <p className="text-sm text-gray-800"><strong className="text-orange-700">Real example:</strong> A homeowner in Garden City contacted us after noticing her light oak floors had turned noticeably darker near the south-facing bay window — but stayed the original color under the area rug. The rug had been protecting the floor underneath while the exposed sections faded. Solar film on those windows would have stopped that from happening in the first place.</p>
        </div>

        <h2>How Window Film Stops UV Damage</h2>

        <p>Window film acts like sunscreen for your glass. It sits on the inside surface of your windows — almost invisible — and blocks 99% of UV radiation before it can enter your home. The visible light still comes through, so your rooms stay bright. Your view stays clear. But the UV rays that cause fading are blocked at the source.</p>

        <p>It&apos;s the same principle as SPF 50 sunscreen on a summer day. You can still be outside, you can still see the sun — but the damaging rays aren&apos;t getting through to your skin (or in this case, your floors and furniture).</p>

        <h2>Will It Make My Rooms Dark?</h2>

        <p>No — and this is the most common concern we hear. Modern solar film is designed to block UV and heat while keeping visible light coming through. The room stays bright. From the inside, you often can&apos;t tell the film is there at all. From the outside, there may be a slight reflective appearance, which most homeowners actually prefer because it also adds daytime privacy.</p>

        <p>If you want to go lighter, there are high-clarity options — like our HD70 film — that are nearly invisible and still block 99% of UV rays. If you want to add heat reduction and some privacy at the same time, the dual-reflective films do all three at once.</p>

        <h2>Window Film vs. Other UV Protection Options</h2>

        <table>
          <thead><tr><th>Solution</th><th>Blocks UV?</th><th>Keeps Light In?</th><th>One-Time Cost?</th></tr></thead>
          <tbody>
            <tr><td><strong>Window Film</strong></td><td>✅ 99% blocked</td><td>✅ Yes</td><td>✅ Yes</td></tr>
            <tr><td>Blackout curtains</td><td>✅ Yes</td><td>❌ Room goes dark</td><td>✅ Yes</td></tr>
            <tr><td>UV-filtering blinds</td><td>⚠️ Partial only</td><td>⚠️ Reduced</td><td>✅ Yes</td></tr>
            <tr><td>Low-E replacement windows</td><td>⚠️ Some improvement</td><td>✅ Yes</td><td>❌ $$$$$</td></tr>
            <tr><td>Do nothing</td><td>❌ No protection</td><td>✅ Yes</td><td>❌ Damage costs later</td></tr>
          </tbody>
        </table>

        <h2>The Hidden Bonus: Heat Reduction Too</h2>

        <p>UV protection is the topic of this article, but solar film does double duty — it also blocks up to 60% of heat at the glass. So the same film that&apos;s protecting your furniture is also reducing your AC costs each summer. One installation. Two major benefits. Lifetime residential warranty from CoolVu.</p>

        <h2>Serving All of Long Island</h2>

        <p>CoolVu of Long Island installs solar and UV-blocking film throughout Nassau County and Suffolk County — from Great Neck, Garden City, Westbury, Merrick, Massapequa, Freeport, and Valley Stream in the west, to Babylon, Bay Shore, Huntington, Smithtown, Commack, Hauppauge, Ronkonkoma, and Patchogue in the east. Free estimates, lifetime warranty on every installation.</p>
        <p className="mt-4">Protect everything inside your home with the <Link href="/best-window-film-installer-long-island" className="text-[#1F4E79] hover:underline">best window film installer on Long Island</Link> — CoolVu of Long Island.</p>
      </BlogArticleLayout>
      <Footer />
    </div>
  );
}
