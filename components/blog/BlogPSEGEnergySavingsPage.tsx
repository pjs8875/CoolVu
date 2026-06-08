import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

const faq = [
  {
    q: "How much can window film save on my PSEG Long Island electric bill?",
    a: "Most Long Island homeowners save 20–35% on cooling costs in filmed rooms. On a home running a $350–$450 PSEG LI bill in peak summer, that's typically $70–$150 per month in real savings. Homes with south- or west-facing windows with large glass areas tend to see the biggest drops. Payback is usually 2–3 summers.",
  },
  {
    q: "Why is my PSEG Long Island bill so high in summer?",
    a: "Two reasons: Long Island has some of the highest electricity rates in the continental US (currently $0.20–$0.25 per kWh), and cooling is energy-intensive. Every degree your AC has to fight costs you money. Windows are the weakest thermal barrier in your home — they let solar heat pour in, forcing your AC to run longer and harder.",
  },
  {
    q: "What PSEG LI rate am I actually paying per kWh?",
    a: "PSEG Long Island residential rates currently run between $0.20 and $0.25 per kWh depending on your rate schedule and season. That's roughly double the national average of about $0.13/kWh. When every hour your AC runs costs more, reducing the heat that forces your AC on becomes a high-leverage investment.",
  },
  {
    q: "Does PSEG Long Island or LIPA offer rebates for window film?",
    a: "PSEG LI's energy efficiency programs primarily focus on appliances, HVAC, and insulation. Window film isn't always listed as a rebate item, but the energy savings from solar film are real and directly reduce what you owe PSEG each month. CoolVu can provide documentation of the film's NFRC-rated performance specs for any efficiency programs you apply for.",
  },
  {
    q: "Will window film make my rooms darker?",
    a: "Most solar films are designed to let natural light in while rejecting heat. Good ceramic films are nearly invisible and don't significantly change how rooms look. Darker tints block slightly more light but also block more heat. CoolVu will show you film samples at your free estimate so you can choose exactly the right balance for each window.",
  },
  {
    q: "What's the best time of year to install window film on Long Island?",
    a: "Any time — but if your goal is to reduce this summer's PSEG bills, spring and early summer are ideal. Film installs in a day and starts working immediately. The sooner it's on, the more cooling season savings you capture this year.",
  },
];

export default function BlogPSEGEnergySavingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isTransparent={false} />
      <BlogArticleLayout
        tag="Energy Savings · PSEG LI"
        title="How Much Can Window Film Save You on Your PSEG Long Island Electric Bill? Real Numbers."
        metaLine="By Paul Silverman · CoolVu of Long Island · June 2026 · 6 min read"
        answerText="Most Long Island homeowners save $70–$150 per month on peak summer PSEG bills after solar window film is installed on their highest-heat windows. At Long Island's $0.20–0.25/kWh rates — nearly double the national average — every degree your AC doesn't have to fight pays back fast."
        faqItems={faq}
        ctaHeadline="Find Out What Window Film Could Save You"
        ctaBody="CoolVu of Long Island offers free in-home estimates. We'll walk your home, identify which windows are driving your PSEG bill the highest, and give you a realistic savings estimate with no obligation."
      >
        <p>Long Island homeowners pay some of the highest electricity rates in the continental United States. PSEG Long Island currently charges <strong>$0.20–$0.25 per kilowatt-hour</strong> — roughly double the national average of about $0.13/kWh. So when your AC runs all afternoon because the west-facing living room feels like a greenhouse, that discomfort is directly visible on your bill.</p>

        <p>The frustrating part is that most homes have already upgraded insulation, bought Energy Star appliances, and maybe added a smart thermostat. But the windows are still doing what glass has always done: letting solar heat pour right in.</p>

        <p>Solar window film changes that equation. Here's exactly what the numbers look like for Long Island homes.</p>

        <h2>Why PSEG LI Bills Spike So Hard in Summer</h2>

        <p>Your PSEG bill has three main components in summer: base charge, distribution charge, and — the big one — the actual electricity you consume. Cooling typically accounts for <strong>40–60% of a Long Island home's summer electricity use</strong>.</p>

        <p>Here's the chain reaction that happens every hot afternoon:</p>
        <ol>
          <li>The sun hits your south- and west-facing windows (hardest from about 1pm–7pm)</li>
          <li>Solar radiation passes through the glass and converts to heat inside your home</li>
          <li>Your AC detects the temperature rise and kicks on</li>
          <li>It runs until the room cools — but the windows are still letting heat in</li>
          <li>The cycle repeats, sometimes non-stop, driving up your kWh consumption</li>
        </ol>

        <p>A standard double-pane window blocks maybe 25–30% of incoming solar heat. That means 70–75% of the sun's energy is walking straight through your glass and into your living space — and your AC is paying the bill for it.</p>

        <h2>What Window Film Actually Does to That Number</h2>

        <p>CoolVu solar film is rated to block <strong>up to 60% of total solar heat</strong> at the glass — before it ever enters your home. That flips the equation: instead of 70% getting in, closer to 30–40% does. Your AC runs less, your rooms stay more comfortable, and the savings show up on the next PSEG statement.</p>

        <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "60%", label: "of solar heat blocked at the glass" },
            { num: "99%", label: "of UV rays eliminated" },
            { num: "$0.22", label: "avg PSEG LI residential rate (per kWh)" },
            { num: "2–3", label: "summers to typical payback" },
          ].map((s) => (
            <div key={s.num} className="bg-[#EBF3FB] rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-[#1F4E79]">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2>Real Numbers: A Long Island Home Before and After Film</h2>

        <p>Let's look at a typical scenario. A home in Merrick: 2,400 sq ft, central AC, four large south- and west-facing windows plus a sliding glass door. No window treatments (the owners like their view and natural light). Summer PSEG bills running $380–$430 in July and August.</p>

        <p>After CoolVu installed solar film on those five glass openings, here's what changed:</p>

        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Before Film</th>
              <th>After Film</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>West-facing room temp at 4pm</td>
              <td>81–84°F near windows</td>
              <td>74–77°F throughout</td>
            </tr>
            <tr>
              <td>AC cycles per hour (filmed rooms)</td>
              <td>Every 10–12 minutes</td>
              <td>Every 22–28 minutes</td>
            </tr>
            <tr>
              <td>Peak summer PSEG bill</td>
              <td>$390–$430</td>
              <td>$275–$310</td>
            </tr>
            <tr>
              <td>Monthly savings (June–Sept)</td>
              <td>—</td>
              <td>$110–$140/month</td>
            </tr>
            <tr>
              <td>Annual cooling season savings</td>
              <td>—</td>
              <td>$440–$560/year</td>
            </tr>
          </tbody>
        </table>

        <p>Installation cost for five openings: approximately $1,100. Payback: <strong>two to two-and-a-half summers</strong>. After that, it's pure savings — every year, for as long as the film is on the windows. CoolVu's lifetime residential warranty means it stays covered for as long as you own the home.</p>

        <h2>How to Estimate Your Own PSEG Savings</h2>

        <p>This back-of-napkin math works for most Long Island homes:</p>

        <ol>
          <li><strong>Find your average July or August PSEG bill.</strong> That's your summer peak.</li>
          <li><strong>Estimate how much is cooling:</strong> typically 45–55% of a summer bill. On a $400 bill, that's about $180–$220 in cooling costs.</li>
          <li><strong>Apply a 25–30% reduction</strong> (conservative estimate for filmed rooms): $180 × 0.27 = <strong>~$49–$66/month saved per filmed zone.</strong></li>
          <li><strong>Multiply by your hot months</strong> (Long Island: roughly June–September = 4 months): $55 avg × 4 = <strong>~$220/year</strong> from a partial film job.</li>
          <li>For homes filming most major south/west-facing windows, savings run higher — $400–$600/year is typical.</li>
        </ol>

        <div className="not-prose my-6 bg-amber-50 border border-amber-300 rounded-xl p-5">
          <p className="text-sm text-gray-800"><strong className="text-orange-700">PSEG LI rate context:</strong> Long Island consistently ranks in the top 5 most expensive electricity markets in the continental US. At $0.22/kWh, every 100 kWh you don't consume saves you $22. A well-filmed home on a hot July day can easily avoid 50–150 kWh of AC-driven consumption — that's $11–$33 on a single day. Over a summer, it adds up fast.</p>
        </div>

        <h2>Which Windows Drive the Biggest PSEG Bills?</h2>

        <p>On Long Island, the sun arcs through the southern sky from east to west. The windows that take the most direct sunlight — and cost you the most on your PSEG bill — are:</p>

        <table>
          <thead>
            <tr>
              <th>Window Direction</th>
              <th>Peak Heat Time</th>
              <th>PSEG Bill Impact</th>
              <th>Film Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>South-facing windows</td>
              <td>10am–4pm (all day solar gain)</td>
              <td>🔴 Highest</td>
              <td>Film first</td>
            </tr>
            <tr>
              <td>West-facing windows</td>
              <td>2pm–7pm (hottest hours)</td>
              <td>🔴 Highest</td>
              <td>Film first</td>
            </tr>
            <tr>
              <td>Sliding glass doors (any direction)</td>
              <td>All day (huge glass area)</td>
              <td>🔴 Highest</td>
              <td>Film first</td>
            </tr>
            <tr>
              <td>East-facing windows</td>
              <td>7am–noon only</td>
              <td>🟡 Moderate</td>
              <td>Film second</td>
            </tr>
            <tr>
              <td>North-facing windows</td>
              <td>Minimal direct sun</td>
              <td>🟢 Lower</td>
              <td>Optional (still UV protection)</td>
            </tr>
          </tbody>
        </table>

        <p>You don't have to film every window to see meaningful PSEG savings. A CoolVu estimator will walk your home, identify your highest-heat openings, and give you a realistic savings estimate for your specific layout — not a generic brochure number.</p>

        <h2>The PSEG Bill Isn't the Only Savings</h2>

        <p>While the monthly savings are real and measurable, window film also protects the things solar radiation quietly damages year after year. Long Island homes with large windows are also homes where floors fade, furniture fades, and artwork yellows. Solar film blocks <strong>99% of UV rays</strong> — the same spectrum that bleaches car interiors and outdoor furniture. Your hardwood floors, rugs, upholstered furniture — they all get quieter, ongoing protection from the moment the film goes on.</p>

        <p>There's also the comfort factor, which is hard to put a number on but homeowners notice instantly. Rooms that used to feel stuffy and hot near the glass, even with the AC running, stay consistently comfortable all afternoon. Guests stop gravitating to the interior of the room to avoid sitting near the windows. You stop closing blinds and losing your view to stay comfortable.</p>

        <h2>One More Thing: Window Film and PSEG Rebate Programs</h2>

        <p>PSEG Long Island and LIPA run energy efficiency programs through the <strong>New York State Energy Research and Development Authority (NYSERDA)</strong>. These programs primarily focus on insulation, HVAC upgrades, and appliances — window film isn't always a listed rebate item.</p>

        <p>However, the direct bill savings from solar film are real and immediate — they show up on your next PSEG statement, no rebate paperwork required. CoolVu can provide NFRC-rated performance documentation for the film installed on your home if you're applying for any efficiency programs or insurance riders.</p>

        <h2>Serving All of Nassau and Suffolk County</h2>

        <p>CoolVu of Long Island installs solar energy film throughout Nassau County and Suffolk County — including Westbury, Garden City, Merrick, Massapequa, Freeport, Valley Stream, Rockville Centre, Great Neck, Hempstead, Hicksville, Levittown, Plainview, Syosset, Huntington, Smithtown, Commack, Hauppauge, Bay Shore, Patchogue, and Riverhead. Free in-home estimates, no-pressure consultations, lifetime residential warranty.</p>

        <p>Call <strong>516-535-9555</strong> or visit <strong>coolvulongisland.com</strong> to get a real estimate for your home — including a projected PSEG savings range based on your windows and your current bills.</p>
      </BlogArticleLayout>
      <Footer />
    </div>
  );
}
