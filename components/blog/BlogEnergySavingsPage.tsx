import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

const faq = [
  {
    q: "How much money can I really save with window film on Long Island?",
    a: "Most Long Island homeowners save 20–30% on cooling costs in filmed rooms. On a home running a $300–$400 PSEG bill in peak summer, that can mean $60–$120 a month in real savings — just from the windows. The payback period for most homes is 2–4 summers.",
  },
  {
    q: "Does window film help with heating costs in winter too?",
    a: "Yes. In winter, certain window films act as an insulating layer — reducing heat loss through the glass. Long Island winters aren't extreme, but filmed windows can help reduce drafts and cold spots near large windows, which means your heating system works a little less hard.",
  },
  {
    q: "Will I notice a difference immediately after installation?",
    a: "Most homeowners notice it the same afternoon. Rooms that used to feel stuffy or warm near the windows hold their temperature better. You'll feel less radiant heat when you sit near a filmed window — even on a blazing summer day.",
  },
  {
    q: "What's the cost of window film installation on Long Island?",
    a: "It depends on the number and size of windows. A typical Long Island home runs $500–$2,000 for a full solar film installation. CoolVu offers free estimates — call 516-535-9555 or visit coolvulongisland.com to get an exact number for your home.",
  },
  {
    q: "Does window film work on double-pane windows?",
    a: "Yes. Most Long Island homes have double-pane windows already, and solar film adds another layer of heat rejection on top of what those windows already do. Interior film is safe for double-pane glass and comes with a lifetime residential warranty through CoolVu.",
  },
];

export default function BlogEnergySavingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isTransparent={false} />
      <BlogArticleLayout
        tag="Energy Savings · Solar Film"
        title="Real Energy Savings from Window Film: A Long Island Homeowner Case Study"
        metaLine="By Paul Silverman · CoolVu of Long Island · May 2026 · 5 min read"
        answerText="Window film typically cuts cooling costs 20–30% in treated rooms — with no monthly fees, no maintenance, and a lifetime warranty. For most Long Island homes, the installation pays for itself within 2–4 summers."
        faqItems={faq}
        ctaHeadline="See What Window Film Can Save You"
        ctaBody="Get a free estimate from CoolVu of Long Island. We'll walk through your home, identify which windows are costing you the most money, and give you a realistic savings estimate — no obligation."
      >
        <p>Every Long Island summer, the same conversation happens at kitchen tables across Nassau and Suffolk County: "Why is the PSEG bill so high this month?" The AC is running nonstop, the house still feels warm by 3pm, and there's no obvious explanation.</p>

        <p>For one Massapequa homeowner — we'll call her Linda — the answer turned out to be sitting right in front of her. Literally. Her windows.</p>

        <p>Linda's west-facing living room had three large windows and a sliding glass door. Every afternoon from about 2pm to 7pm, the sun hammered those windows directly. Even with the AC cranked to 70°F, the room hit 80°F near the windows. She was running her PSEG bill up to $420 in July and August — and the living room still felt like a greenhouse.</p>

        <p>After CoolVu installed solar window film on those four openings, her July bill dropped to $298. The living room stayed comfortable without constantly running the AC. And she noticed her wood floors — which had been slowly fading for years — stopped getting worse.</p>

        <p>Her payback period: two summers. After that, it's just savings.</p>

        <h2>Why Windows Are the Weak Spot in Every Long Island Home</h2>

        <p>Your walls have insulation. Your attic has insulation. Your doors are solid and sealed. But your windows? They're basically holes in the wall covered with glass — and glass is a terrible insulator.</p>

        <p>Here's the physics in plain English: sunlight passes through glass easily, hits your floors and furniture, and turns into heat. That heat gets trapped inside — the same way a parked car gets blazing hot on a sunny day even if it's only 75°F outside. Your double-pane windows stop maybe 25–30% of that solar heat. The other 70–75% walks right in.</p>

        <p>Solar window film changes that equation. CoolVu's films block up to 60% of total solar heat at the glass — before it ever enters your home. Your AC doesn't have to fight as hard, and your rooms stay at the temperature you actually set.</p>

        <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "60%", label: "of solar heat blocked at the glass" },
            { num: "99%", label: "of UV rays eliminated" },
            { num: "2–4", label: "summers to typical payback" },
            { num: "30%", label: "average cooling cost reduction" },
          ].map((s) => (
            <div key={s.num} className="bg-[#EBF3FB] rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-[#1F4E79]">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2>A Tale of Two Rooms: Before and After Window Film</h2>

        <p>To make the numbers real, here's a side-by-side look at what changes after solar film installation on a typical Long Island home:</p>

        <table>
          <thead>
            <tr>
              <th>Situation</th>
              <th>Before Film</th>
              <th>After Film</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>West-facing room at 4pm</td>
              <td>80–84°F near windows</td>
              <td>74–76°F throughout</td>
            </tr>
            <tr>
              <td>AC cycles per hour</td>
              <td>Every 10–12 minutes</td>
              <td>Every 20–25 minutes</td>
            </tr>
            <tr>
              <td>Peak summer PSEG bill</td>
              <td>$380–$450</td>
              <td>$270–$330</td>
            </tr>
            <tr>
              <td>UV damage to floors/furniture</td>
              <td>Ongoing fading</td>
              <td>99% blocked</td>
            </tr>
            <tr>
              <td>Glare on TV/screens at certain hours</td>
              <td>Constant problem</td>
              <td>Significantly reduced</td>
            </tr>
          </tbody>
        </table>

        <p>These are real-world ranges from actual CoolVu installations across Long Island — not manufacturer estimates from a brochure.</p>

        <h2>How to Calculate Your Own Payback Period</h2>

        <p>You don't need a spreadsheet. Here's a rough back-of-napkin calculation that works for most Long Island homes:</p>

        <ol>
          <li><strong>Take your average summer PSEG bill</strong> (July or August). Let's say $350.</li>
          <li><strong>Multiply by 25%</strong> (conservative savings estimate): $350 × 0.25 = $87.50/month saved.</li>
          <li><strong>Assume 4 hot months per year</strong> (June–September): $87.50 × 4 = $350/year in savings.</li>
          <li><strong>Divide your installation cost by your annual savings</strong>: If your installation is $1,200 and you save $350/year, that's a 3.4-year payback.</li>
        </ol>

        <p>After that payback point, every summer is just money back in your pocket. And unlike a new AC unit or replacement windows, window film doesn't need maintenance, replacement filters, or annual servicing.</p>

        <div className="not-prose my-6 bg-amber-50 border border-amber-300 rounded-xl p-5">
          <p className="text-sm text-gray-800"><strong className="text-orange-700">Long Island note:</strong> Our peak cooling season runs roughly June through September — about 4 months. Some years it stretches into October. That's 4+ months of savings every single year, every year the film is on your windows. And CoolVu's lifetime residential warranty means it stays on your windows for as long as you own the home.</p>
        </div>

        <h2>Which Windows Deliver the Most Savings?</h2>

        <p>Not all windows are equal when it comes to heat gain. On Long Island, the sun tracks from east to west through the southern sky — which means south, west, and southwest-facing windows get hit hardest. If your home has large windows or glass doors facing any of these directions, those are your biggest energy leaks.</p>

        <table>
          <thead>
            <tr>
              <th>Window Direction</th>
              <th>Peak Heat Time</th>
              <th>Savings Potential</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>South-facing</td>
              <td>All day (direct sun)</td>
              <td>🔴 Highest</td>
            </tr>
            <tr>
              <td>West-facing</td>
              <td>2pm–7pm (hottest part of day)</td>
              <td>🔴 Highest</td>
            </tr>
            <tr>
              <td>Sliding glass doors (any direction)</td>
              <td>Varies — huge glass area</td>
              <td>🔴 Highest</td>
            </tr>
            <tr>
              <td>East-facing</td>
              <td>Morning only</td>
              <td>🟡 Medium</td>
            </tr>
            <tr>
              <td>North-facing</td>
              <td>Rarely direct sun</td>
              <td>🟢 Lower (but still UV protection)</td>
            </tr>
          </tbody>
        </table>

        <p>A good window film installer — like CoolVu — will walk your home, identify the problem windows, and give you an honest recommendation on where to start. You don't always need to film every window to see meaningful savings. Sometimes 4–5 strategic windows make all the difference.</p>

        <h2>It's Not Just About Money</h2>

        <p>The savings are real and worth calculating. But homeowners who get window film often say the comfort improvement is what they notice first. No more hot spots. No more closing blinds and sitting in a dark room to stay cool. No more arguing over the thermostat because one room is 10 degrees hotter than the rest of the house.</p>

        <p>The UV protection matters too. Long Island homes with lots of natural light are also homes where floors fade, furniture fades, and artwork yellows over the years. Solar film blocks 99% of UV rays — the same rays that bleach your car's upholstery and your skin at the beach. Your hardwood floors, your rugs, your couch — all quietly protected from that ongoing invisible damage.</p>

        <h2>Serving All of Long Island</h2>

        <p>CoolVu of Long Island installs solar energy film throughout Nassau County and Suffolk County — including Garden City, Westbury, Merrick, Massapequa, Freeport, Valley Stream, Rockville Centre, Great Neck, Hempstead, Hicksville, Levittown, Plainview, Syosset, Huntington, Smithtown, Commack, Hauppauge, Bay Shore, Patchogue, Bohemia, Ronkonkoma, Islip, Medford, and Riverhead. Free estimates, no-pressure consultations, and a lifetime residential warranty on every job.</p>

        <p>Call <strong>516-535-9555</strong> or visit <strong>coolvulongisland.com</strong> to schedule your free estimate.</p>
      </BlogArticleLayout>
      <Footer />
    </div>
  );
}
