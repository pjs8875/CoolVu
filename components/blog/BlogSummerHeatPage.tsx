import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

const faq = [
  {
    q: "How much can solar window film lower my electric bill on Long Island?",
    a: "Most Long Island homeowners see cooling costs drop 20–30% in rooms where film is installed. The exact savings depend on how many south- and west-facing windows you have and how much direct sun they get. Solar film blocks up to 60% of heat at the glass.",
  },
  {
    q: "Which windows should I film first to get the most cooling benefit?",
    a: "Start with south-facing and west-facing windows. West-facing windows are particularly brutal on Long Island in the 2–7pm window when outdoor temps peak. Sliding glass doors are also high-impact because of their large glass area.",
  },
  {
    q: "Does solar window film make rooms dark?",
    a: "No. Modern solar films reduce heat and glare while still letting in plenty of natural light. The room stays bright and the film is nearly invisible from inside — it's not like putting up curtains or shades.",
  },
  {
    q: "How does solar window film actually block heat?",
    a: "Window glass lets solar energy pass through and traps it inside as heat — like how a car heats up in a parking lot. Solar film reflects a large portion of that energy back outside before it enters. CoolVu's films block up to 99% of UV rays and up to 60% of total solar heat.",
  },
  {
    q: "Is solar window film worth the cost on Long Island?",
    a: "For most homeowners, yes. It's a one-time installation with no monthly cost, and it comes with a lifetime residential warranty from CoolVu. Energy savings typically cover the cost within a few summers — and you also get UV protection for floors and furniture as a bonus.",
  },
];

export default function BlogSummerHeatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isTransparent={false} />
      <BlogArticleLayout
        tag="Solar Film · Summer 2026"
        title="How Solar Window Film Cuts Your AC Bill This Summer on Long Island"
        metaLine="By Paul Silverman · CoolVu of Long Island · May 2026 · 5 min read"
        answerText="Solar window film blocks up to 60% of the heat that tries to push through your windows — so your AC runs less, your house stays cooler, and your electric bill drops. One install, no monthly cost, lifetime warranty."
        faqItems={faq}
        ctaHeadline="Ready to Stop Fighting the Heat?"
        ctaBody="Get a free estimate from CoolVu of Long Island. We'll tell you exactly which windows to film and how much you can expect to save — no pressure, no sales tricks."
      >
        <p>Every summer on Long Island, the same thing happens. June arrives, temperatures climb, and PSEG bills start looking like a car payment. You crank the AC. The house cools down. You turn it off. It gets hot again. Repeat.</p>

        <p>Here's what most people don't realize: a huge chunk of that heat isn't sneaking in under your doors or through your walls. It's coming straight through your windows — and your AC is fighting a losing battle against the sun.</p>

        <p>Solar window film fixes this at the source.</p>

        <h2>Why Your Windows Are Your Home's Biggest Heat Problem</h2>

        <p>Think of your window glass like a magnifying glass for heat. Sunlight passes right through it, hits your floor and furniture, and turns into heat trapped inside your home. Standard double-pane windows only stop about 25–30% of solar heat.</p>

        <p>On a 90°F Long Island afternoon, the air right next to a sun-facing window can feel 15–20 degrees hotter than the rest of the room. Your thermostat senses this warmth and tells the AC to kick on — even if the rest of the house is fine.</p>

        <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "60%", label: "of solar heat blocked at the glass" },
            { num: "99%", label: "of UV rays blocked" },
            { num: "15°F", label: "typical drop in temp near windows" },
            { num: "30%", label: "typical reduction in cooling costs" },
          ].map((s) => (
            <div key={s.num} className="bg-[#EBF3FB] rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-[#1F4E79]">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2>How Solar Window Film Works</h2>

        <p>Solar film is a thin, transparent layer applied directly to the inside surface of your glass. You can barely see it — but it acts like a one-way mirror for heat energy. When sunlight hits your window, the film reflects a large portion of the infrared energy (the heat part of sunlight) back outside before it ever gets into your home. Visible light still passes through — your room stays bright — but the heat stays out.</p>

        <p>It's the difference between wearing a white shirt and a black shirt on a hot day. Same material, very different temperature.</p>

        <h2>Which Windows Matter Most on Long Island?</h2>

        <table>
          <thead><tr><th>Window Direction</th><th>When It Hits Hardest</th><th>Priority</th></tr></thead>
          <tbody>
            <tr><td>South-facing</td><td>All day — direct sun from morning to late afternoon</td><td>🔴 Highest</td></tr>
            <tr><td>West-facing</td><td>2pm–7pm — worst heat of the day hits here</td><td>🔴 Highest</td></tr>
            <tr><td>East-facing</td><td>Morning only — less intense, cools by noon</td><td>🟡 Medium</td></tr>
            <tr><td>North-facing</td><td>Rarely gets direct sun</td><td>🟢 Lower</td></tr>
            <tr><td>Sliding glass doors</td><td>Large glass area = large heat gain, any direction</td><td>🔴 Highest</td></tr>
          </tbody>
        </table>

        <div className="not-prose my-6 bg-amber-50 border border-amber-300 rounded-xl p-5">
          <p className="text-sm text-gray-800"><strong className="text-orange-700">Real example:</strong> A customer in Merrick had a west-facing living room that hit 82°F by 5pm even with the AC running. After we filmed the three large windows and the sliding glass door, the room stayed below 74°F — and her AC stopped cycling every 10 minutes.</p>
        </div>

        <h2>Will the Film Make My Rooms Dark?</h2>

        <p>This is the #1 question we get — and the honest answer is no, if it's done right. Modern solar films are designed to reduce heat without turning your home into a cave. The best ones look nearly invisible from the inside. From the outside, they may have a slight reflective appearance — similar to modern office building glass — which most homeowners actually like because it also adds daytime privacy.</p>

        <h2>Solar Film vs. Other Solutions</h2>

        <table>
          <thead><tr><th>Solution</th><th>Blocks Heat?</th><th>Keeps Light?</th><th>One-Time Cost?</th></tr></thead>
          <tbody>
            <tr><td><strong>Solar Window Film</strong></td><td>✅ Up to 60%</td><td>✅ Yes</td><td>✅ Yes</td></tr>
            <tr><td>Blackout curtains</td><td>✅ Yes</td><td>❌ Room goes dark</td><td>✅ Yes</td></tr>
            <tr><td>Replacing windows</td><td>🟡 Some improvement</td><td>✅ Yes</td><td>❌ $$$$$</td></tr>
            <tr><td>Bigger AC unit</td><td>❌ Doesn't block heat</td><td>✅ Yes</td><td>❌ Expensive + monthly</td></tr>
          </tbody>
        </table>

        <h2>The Hidden Benefit: UV Protection</h2>

        <p>UV rays are invisible but constantly fading your floors, furniture, artwork, and curtains. Long Island homes with a lot of natural light — especially south-facing rooms — can see significant fading damage within just a few years. Solar film blocks 99% of UV rays. Your hardwood floors, your couch, your kids' artwork on the wall — all protected.</p>

        <h2>Serving All of Long Island</h2>

        <p>CoolVu of Long Island installs solar film throughout Nassau County and Suffolk County — from Great Neck, Garden City, Westbury, Merrick, Massapequa, Freeport, and Valley Stream in the west, to Babylon, Bay Shore, Huntington, Smithtown, Commack, Hauppauge, Ronkonkoma, and Patchogue in the east. Free estimates, lifetime warranty on every installation.</p>
      </BlogArticleLayout>
      <Footer />
    </div>
  );
}
