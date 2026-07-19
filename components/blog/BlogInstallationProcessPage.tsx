import Navbar from "@/components/Navbar";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

const faq = [
  {
    q: "How long does window film installation take?",
    a: "Most residential jobs take 2–4 hours depending on the number of windows. Larger homes or commercial properties may take a full day. CoolVu will give you a time estimate when you book so you can plan accordingly.",
  },
  {
    q: "Do I need to be home during the installation?",
    a: "Yes, someone should be home for the entire job so we can access all rooms, answer any questions, and walk you through the finished work before we leave. We make sure you're happy with every window before we pack up.",
  },
  {
    q: "Will the film look hazy or bubbly after installation?",
    a: "It's completely normal to see a slight haze or small water bubbles for the first 30 days — this is just the adhesive curing and the water drying out. It disappears on its own. Do not scratch or peel at the film during this time.",
  },
  {
    q: "When can I clean the windows after film is installed?",
    a: "Wait at least 30 days before cleaning filmed windows. After that, clean with a soft cloth and a mild soap-and-water solution or ammonia-free window cleaner. Avoid razor blades, abrasive scrubbers, or anything with ammonia — these can scratch or lift the film.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "CoolVu stands behind every installation with a lifetime residential warranty. If you notice any peeling, bubbling, or discoloration after the curing period, call us and we will fix or replace it at no charge.",
  },
];

export default function BlogInstallationProcessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isTransparent={false} />
      <BlogArticleLayout
        tag="Installation · What to Expect"
        title="Window Film Installation: What to Expect on Install Day on Long Island"
        metaLine="By Paul Silverman · CoolVu of Long Island · May 2026 · 5 min read"
        answerText="Window film installation is fast, clean, and low-disruption. Most Long Island homes are done in 2–4 hours. Your installer preps each window, cuts the film to fit, and applies it with a squeegee — no mess, no demolition. You'll be back to normal the same day."
        faqItems={faq}
        ctaHeadline="Ready to Schedule Your Window Film Installation?"
        ctaBody="CoolVu of Long Island offers free estimates with no pressure. We serve all of Nassau County and Suffolk County — from Great Neck and Garden City to Babylon and Riverhead. Call 516-535-9555 or visit coolvulongisland.com to get started."
      >
        <p>A lot of Long Island homeowners put off window film because they picture a big, messy home improvement project — ladders everywhere, dust, workers in every room for days. The reality is nothing like that.</p>

        <p>Window film installation is one of the quickest upgrades you can do. Most homes are finished in a single morning. There's no demolition, no drywall, no painting. When your installer leaves, everything looks the same — except your windows actually work now.</p>

        <p>Here's a step-by-step look at exactly what happens on install day so you know what to expect.</p>

        <h2>Step 1: The Walkthrough (10–15 Minutes)</h2>
        <p>Before anything gets touched, your CoolVu installer walks through the house with you. We confirm which windows are getting film, double-check the film type for each room (solar, privacy, decorative, or safety), and note anything unusual — like specialty glass, leaded windows, or windows with existing tint.</p>

        <p>This is also a good time to ask questions. Want the bedroom windows darker? Not sure which side of the house to prioritize? We'll talk it through before we start.</p>

        <h2>Step 2: Preparing the Windows (10–20 Minutes per Window)</h2>
        <p>Clean glass is everything. Film does not stick properly to dirty windows, and any dust or debris trapped under the film will show up as a bump or streak once it cures. Your installer thoroughly cleans every window that's getting film — front and back — with a professional-grade solution and a squeegee.</p>

        <p>Furniture near the windows gets moved slightly or covered with drop cloths. The work area stays contained to each window. No whole-room disruption, no moving everything out.</p>

        <h2>Step 3: Cutting the Film (5–10 Minutes per Window)</h2>
        <p>Film comes in large rolls and gets cut to the exact size of each pane — with a small overlap on the edges. The installer uses a straight-edge and a precision blade to make clean cuts. Every pane gets its own custom piece. There's no stretching, no misalignment.</p>

        <p>For homes in Oyster Bay, Massapequa, or anywhere else on Long Island with older homes and non-standard window sizes, this custom-cut approach is what makes the final result look seamless instead of slapped on.</p>

        <h2>Step 4: Applying the Film (10–15 Minutes per Window)</h2>
        <p>This is the part most people find satisfying to watch. The film gets peeled from its backing, misted with a slip solution (basically water with a tiny amount of soap), and laid onto the glass. The slip solution lets the installer reposition the film to get it perfectly aligned before locking it in.</p>

        <p>Once it's in position, a hard squeegee pushes out all the water and smooths the film flat against the glass. The edges get trimmed with a blade for a clean, finished look. It's precise, methodical work — not rushed.</p>

        <h2>Step 5: The Final Walkthrough (10–15 Minutes)</h2>
        <p>When all the windows are done, your installer walks through every room with you. You get to inspect each window up close. We point out what to expect during the curing period (more on that in a moment) and answer any last questions.</p>

        <p>We don't leave until you're satisfied.</p>

        <h2>What Happens After Installation: The Curing Period</h2>
        <p>Here's the one thing that surprises almost every first-time customer: the windows may look slightly hazy or have small water bubbles right after installation. This is 100% normal. It's not a defect.</p>

        <p>The film uses a water-activated adhesive. After installation, small amounts of water get trapped between the film and the glass. Over the next 30 days — faster in summer, slower in winter — that water works its way out through the edges. The haze and bubbles disappear completely on their own.</p>

        <p>Do not try to push the bubbles out yourself. Do not scratch or pick at the film. Just leave it alone and let it cure. By Day 30, the glass will look perfectly clear.</p>

        <h2>Post-Installation Care: Keep It Simple</h2>
        <p>After the 30-day curing period, filmed windows are easy to maintain. Clean them with a soft cloth — microfiber works great — and a mild soap-and-water solution or any ammonia-free window cleaner. Avoid:</p>
        <ul>
          <li>Ammonia-based cleaners (Windex original formula contains ammonia — use the ammonia-free version)</li>
          <li>Abrasive scrubbers or steel wool</li>
          <li>Razor blades</li>
          <li>High-pressure washing directly at the edges</li>
        </ul>
        <p>That's really it. Most customers forget the film is even there — they just notice their house is cooler, their furniture isn't fading, and their electric bill is lower.</p>

        <h2>How Long Does the Whole Job Take?</h2>
        <p>Here's a rough guide for Long Island homes:</p>
        <ul>
          <li><strong>4–8 windows:</strong> 2–3 hours</li>
          <li><strong>10–15 windows:</strong> 3–5 hours (half day)</li>
          <li><strong>Full house (16+ windows):</strong> Full day</li>
          <li><strong>Commercial job (office, storefront, restaurant):</strong> 1–2 days depending on size</li>
        </ul>
        <p>We'll give you a specific time estimate when you book so you're not left guessing.</p>

        <h2>What CoolVu's Lifetime Warranty Covers</h2>
        <p>Every residential installation CoolVu does on Long Island comes with a lifetime warranty. If you ever see peeling, bubbling, or discoloration after the curing period has passed, call us. We'll come out and fix or replace it — no charge, no hassle. Commercial installations come with a manufacturer's warranty on the film itself.</p>

        <p>The warranty is one of the reasons CoolVu has been able to build its reputation across Nassau County and Suffolk County. We're a local business. We're not disappearing after the job is done.</p>

        <h2>Ready to Schedule?</h2>
        <p>Window film installation is one of the simplest home upgrades you can do. No permits, no contractors, no weeks of disruption. You pick a morning, we show up, and a few hours later your home is quieter, cooler, and more private — with a warranty that lasts as long as you own the house.</p>

        <p>CoolVu of Long Island serves all of Nassau County and Suffolk County — from Manhasset and Great Neck on the North Shore to Oceanside and Babylon on the South Shore, and everywhere in between: Hicksville, Plainview, Farmingdale, Smithtown, Hauppauge, East Islip, Patchogue, and beyond. Call 516-535-9555 or visit coolvulongisland.com for a free estimate.</p>
      </BlogArticleLayout>
    </div>
  );
}
