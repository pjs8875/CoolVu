import Navbar from "@/components/Navbar";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

const faq = [
  {
    q: "Does window film qualify for the federal energy tax credit?",
    a: "The federal Energy Efficient Home Improvement Credit (25C) currently covers qualifying replacement windows and skylights — not window film as a standalone product. That said, tax law changes frequently. Always confirm your specific situation with a tax professional before filing. The bigger financial win from window film is the direct energy savings, which reduce your monthly bills every single month with no expiration date.",
  },
  {
    q: "Does PSEG Long Island or LIPA offer rebates for window film?",
    a: "PSEG Long Island and LIPA periodically offer rebates and incentive programs for energy-efficient home upgrades. Eligibility and available programs change from year to year. Visit pseg.com/li or lipower.org and search their energy efficiency programs, or call CoolVu at 516-535-9555 and we can walk you through what's currently available.",
  },
  {
    q: "What does NYSERDA offer for Long Island homeowners?",
    a: "NYSERDA (the New York State Energy Research and Development Authority) runs multiple programs for Long Island homeowners, including the EmPower+ program for income-qualified households and the RetroFit NY program for whole-home energy improvements. Window treatments including film may qualify under certain programs. Visit nyserda.ny.gov or call 1-800-787-3732 to check current eligibility.",
  },
  {
    q: "How much can I actually save on energy bills with window film?",
    a: "Most Long Island homeowners with south- or west-facing windows see cooling costs drop 20–30% in those rooms. That typically translates to $200–$600 per summer season depending on your home size and how many windows are filmed. Unlike a rebate that comes once, the energy savings repeat every year for the life of the film — backed by CoolVu's lifetime residential warranty.",
  },
  {
    q: "Is window film a good investment even without a rebate?",
    a: "Yes. A typical residential window film installation on Long Island costs a fraction of replacement windows and pays back the investment in energy savings within 2–4 summers. Add in UV protection for your floors and furniture, year-round comfort, and a lifetime warranty — and window film delivers real financial value with or without a rebate program.",
  },
];

export default function BlogTaxCreditsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isTransparent={false} />
      <BlogArticleLayout
        tag="Energy Savings · Rebates & Incentives"
        title="Window Film Tax Credits and Energy Rebates for Long Island Homeowners: The Full Picture"
        metaLine="By Paul Silverman · CoolVu of Long Island · June 2026 · 6 min read"
        answerText="Window film is one of the most cost-effective energy upgrades a Long Island homeowner can make. While tax credit eligibility for film specifically can vary and should be verified with a tax professional, PSEG LI, LIPA, and NYSERDA all offer energy efficiency incentive programs — and the direct energy savings from window film pay back the cost in as little as two summers."
        faqItems={faq}
        ctaHeadline="Find Out What You Can Save"
        ctaBody="Call CoolVu of Long Island at 516-535-9555 for a free estimate. We'll show you exactly which windows to film, how much heat they're letting in, and what your expected energy savings look like — no pressure, no obligation."
      >
        <p>Every spring, Long Island homeowners start thinking about their energy bills. Summer is coming. The AC is about to run non-stop. And PSEG or LIPA bills that were manageable in April are going to double by July.</p>

        <p>Window film is one of the most effective ways to cut those bills — and smart homeowners want to know: are there any tax credits or rebates that make the investment even better?</p>

        <p>The honest answer is: it depends. Tax law changes, utility rebate programs come and go, and what qualifies can vary by program. But here's a clear breakdown of exactly what's available in 2026 for Long Island homeowners — and why the direct energy savings may be the most compelling number of all.</p>

        <h2>Federal Tax Credits: What You Need to Know</h2>

        <p>The Inflation Reduction Act created the Energy Efficient Home Improvement Credit (also called the 25C credit). It covers 30% of the cost of qualifying energy efficiency upgrades, up to certain limits per category.</p>

        <p>Here's the honest truth about window film and the federal credit: the 25C credit specifically covers qualifying replacement windows and skylights — not window film applied to existing glass. As of 2026, standalone window film does not appear on the IRS's list of qualifying products under this credit.</p>

        <div className="not-prose my-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-gray-800"><strong className="text-blue-800">Important note:</strong> Tax law changes frequently, and individual circumstances vary. Always confirm your specific situation with a qualified tax professional or CPA before filing. This article is informational, not tax advice.</p>
        </div>

        <p>That said, there are real financial incentives available — they're just not always federal tax credits. Let's look at what Long Island homeowners actually have access to.</p>

        <h2>PSEG Long Island and LIPA Rebate Programs</h2>

        <p>PSEG Long Island (which manages power delivery for the Long Island Power Authority, or LIPA) runs energy efficiency rebate programs for residential customers. These programs change from year to year, but they've historically covered a range of home energy upgrades including insulation, HVAC improvements, and in some cycles, window treatments that reduce solar heat gain.</p>

        <p>The key steps to check eligibility:</p>

        <ul>
          <li>Visit <strong>pseg.com/li</strong> and navigate to "Residential Energy Efficiency Programs"</li>
          <li>Visit <strong>lipower.org</strong> and search "rebates" or "energy efficiency"</li>
          <li>Call PSEG LI directly at <strong>1-800-490-0025</strong> and ask specifically about solar control window treatments</li>
        </ul>

        <p>These programs are first-come, first-served and funding can run out. Check early in the year for the best availability.</p>

        <h2>NYSERDA: New York State Energy Programs</h2>

        <p>NYSERDA (the New York State Energy Research and Development Authority) runs multiple programs that Long Island homeowners may qualify for. Two worth knowing about:</p>

        <table>
          <thead><tr><th>Program</th><th>Who It's For</th><th>What It Covers</th></tr></thead>
          <tbody>
            <tr><td><strong>EmPower+</strong></td><td>Income-qualified households</td><td>Free or low-cost energy efficiency upgrades including insulation, windows, and more</td></tr>
            <tr><td><strong>RetroFit NY</strong></td><td>Most homeowners</td><td>Whole-home energy efficiency improvements with financing options</td></tr>
            <tr><td><strong>NY-Sun</strong></td><td>Homeowners adding solar</td><td>Incentives for solar installations — pairs well with window film to maximize savings</td></tr>
          </tbody>
        </table>

        <p>Contact NYSERDA at <strong>1-800-787-3732</strong> or visit <strong>nyserda.ny.gov</strong> to find programs specific to Nassau County and Suffolk County homeowners.</p>

        <h2>The Bigger Financial Picture: Direct Energy Savings</h2>

        <p>Here's what most homeowners miss when they focus only on rebates and tax credits: the direct energy savings from window film often outweigh any one-time incentive — because they repeat every single year.</p>

        <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "20–30%", label: "typical drop in cooling costs" },
            { num: "$200–600", label: "typical annual savings per home" },
            { num: "2–4", label: "summers to break even on cost" },
            { num: "Lifetime", label: "residential warranty from CoolVu" },
          ].map((s) => (
            <div key={s.num} className="bg-[#EBF3FB] rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-[#1F4E79]">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <p>Think about it this way: a $600 federal tax credit is a one-time benefit. But if window film saves you $400 per year on energy bills, that's $4,000 over 10 years — and $8,000 over 20 years. The film keeps working long after any rebate or credit has been spent.</p>

        <h2>How Window Film Saves Energy on Long Island Specifically</h2>

        <p>Long Island's climate creates a specific energy problem. South-facing and west-facing windows take the full force of afternoon sun from June through September. Standard double-pane windows stop about 25% of solar heat — which sounds decent until you realize that 75% of the heat is still getting through.</p>

        <p>CoolVu's solar window films block up to 60% of total solar heat at the glass, before it enters your home. Your AC runs less. Your home stays cooler longer after the sun sets. And you're protecting your floors, furniture, and artwork from 99% of UV rays that cause fading — a benefit that has real dollar value when you price out replacing a hardwood floor or a set of upholstered couches.</p>

        <div className="not-prose my-6 bg-amber-50 border border-amber-300 rounded-xl p-5">
          <p className="text-sm text-gray-800"><strong className="text-orange-700">Real example:</strong> A homeowner in Rockville Centre had three large south-facing windows in her living room. After solar film installation, her PSEG bill dropped $87 in the first full summer month — and the film paid for itself entirely in two summers. The UV protection kept her hardwood floors from fading, which she estimates saved thousands in refinishing costs.</p>
        </div>

        <h2>Window Film vs. Replacement Windows: The Financial Comparison</h2>

        <p>Replacement windows do qualify for the federal 25C credit (up to $600 per year, or 30% of cost). But that credit is limited — and replacement windows cost significantly more than window film. Here's the honest comparison:</p>

        <table>
          <thead><tr><th></th><th>Window Film</th><th>Replacement Windows</th></tr></thead>
          <tbody>
            <tr><td><strong>Average cost (per window)</strong></td><td>$75–$200</td><td>$500–$1,500+</td></tr>
            <tr><td><strong>Heat blocked</strong></td><td>Up to 60%</td><td>Marginal improvement over existing glass</td></tr>
            <tr><td><strong>UV protection</strong></td><td>99%</td><td>Varies by glass type</td></tr>
            <tr><td><strong>Federal tax credit</strong></td><td>Verify with tax pro</td><td>Yes (25C, up to $600/yr)</td></tr>
            <tr><td><strong>Payback period</strong></td><td>2–4 summers</td><td>10–20+ years</td></tr>
            <tr><td><strong>Warranty</strong></td><td>Lifetime (CoolVu)</td><td>Varies by manufacturer</td></tr>
          </tbody>
        </table>

        <p>For most Long Island homeowners, window film delivers a faster financial return — even if replacement windows technically qualify for a credit that film may not.</p>

        <h2>Serving All of Long Island</h2>

        <p>CoolVu of Long Island installs energy-saving solar window film throughout Nassau County and Suffolk County. We serve homeowners in Westbury, Garden City, Great Neck, Manhasset, Rockville Centre, Massapequa, Levittown, East Meadow, Valley Stream, Freeport, Merrick, Oceanside, Wantagh, Bellmore, Seaford, Babylon, Bay Shore, Huntington, Smithtown, Commack, Hauppauge, Syosset, Plainview, Melville, Ronkonkoma, Patchogue, and all communities across Long Island.</p>

        <p>Free estimates. Lifetime residential warranty. No high-pressure sales. Just honest advice on which windows will give you the most energy savings — and what you can expect your bills to look like after installation.</p>

        <p>Call us at <strong>516-535-9555</strong> or visit <strong>coolvulongisland.com</strong> to schedule your free estimate.</p>
      </BlogArticleLayout>
    </div>
  );
}
