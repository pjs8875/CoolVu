import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    slug: "summer-heat-solar-window-film-long-island",
    tag: "Solar Film · Summer 2026",
    title: "How Solar Window Film Cuts Your AC Bill This Summer on Long Island",
    excerpt:
      "Long Island summers drive electric bills sky-high. Solar window film blocks up to 60% of heat at the glass — before it enters your home. Learn which windows matter most and how much you can realistically save.",
    readTime: "5 min read",
    featured: true,
    stat: "60%",
    statLabel: "of heat blocked at the glass",
  },
  {
    slug: "one-way-privacy-window-film-long-island",
    tag: "Privacy Film",
    title: "One-Way Privacy Window Film: See Out, Nobody Sees In",
    excerpt:
      "Keep your view and your natural light while blocking neighbors from seeing into your home. We explain how it works, where it works best, and the one nighttime limitation you should know before deciding.",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "frosted-bathroom-window-film-long-island",
    tag: "Privacy Film · Decorative",
    title: "Frosted Window Film for Bathrooms: Privacy That Still Lets Light In",
    excerpt:
      "The simplest upgrade for any Long Island bathroom — no curtains, no blinds, no remodeling. Frosted film looks like expensive etched glass, blocks visibility completely day and night, and is covered by a lifetime warranty.",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "safety-window-film-storms-long-island",
    tag: "Safety & Security Film",
    title: "Safety Window Film for Long Island Storms: What It Does and Why It Matters",
    excerpt:
      "When a nor'easter shatters a window, glass can explode into your home. Safety film holds broken pieces together — invisible, always-on protection that storm shutters can't match for everyday living.",
    readTime: "5 min read",
    featured: false,
  },
];

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1F4E79] to-[#2E75B6] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest opacity-70 mb-3">CoolVu of Long Island</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Window Film Tips &amp; Guides for Long Island Homeowners
          </h1>
          <p className="text-lg opacity-85 max-w-2xl">
            Straight talk from Paul Silverman and the CoolVu team — no jargon, just helpful answers to the questions Long Island homeowners actually ask.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#EBF3FB] border-b border-[#d0dcea]">
        <div className="max-w-4xl mx-auto px-6 py-3 flex flex-wrap gap-x-8 gap-y-1 text-sm font-semibold text-[#1F4E79]">
          <span>✓ Nassau County Advisory Board Recognized</span>
          <span>✓ Lifetime Residential Warranty</span>
          <span>✓ Blocks 99% of UV Rays</span>
          <span>✓ Free Estimates — 516-535-9555</span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 flex-1 w-full">

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="block mb-10 rounded-2xl border-2 border-[#2E75B6] overflow-hidden hover:shadow-lg transition-shadow md:grid md:grid-cols-2"
        >
          <div className="p-8">
            <span className="inline-block bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-wider rounded px-2 py-1 mb-3">
              🔥 Most Timely Right Now
            </span>
            <span className="block text-xs font-bold text-[#2E75B6] uppercase tracking-wide mb-2">
              {featured.tag}
            </span>
            <h2 className="text-xl font-extrabold text-[#1F4E79] leading-snug mb-3">
              {featured.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
            <span className="text-[#2E75B6] font-bold text-sm">Read article →</span>
          </div>
          <div className="bg-gradient-to-br from-[#EBF3FB] to-[#D6E8F8] flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-6xl font-black text-[#1F4E79]">{featured.stat}</div>
              <div className="text-gray-600 text-sm mt-2">{featured.statLabel}</div>
            </div>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 flex-1">
                <span className="inline-block bg-[#EBF3FB] text-[#1F4E79] text-xs font-bold uppercase tracking-wide rounded px-2 py-1 mb-3">
                  {post.tag}
                </span>
                <h2 className="text-base font-extrabold text-[#1F4E79] leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                <span className="text-xs text-gray-400">{post.readTime}</span>
                <span className="text-[#2E75B6] font-bold text-sm">Read →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 rounded-2xl bg-gradient-to-br from-[#1F4E79] to-[#2E75B6] text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-extrabold mb-1">Have a question we didn't answer?</h2>
            <p className="opacity-85 text-sm">Free estimates · No pressure · All of Nassau &amp; Suffolk County</p>
          </div>
          <a
            href="tel:5165359555"
            className="bg-[#FF6B00] hover:bg-[#e55f00] text-white font-extrabold px-8 py-3 rounded-lg text-base whitespace-nowrap transition-colors"
          >
            📞 516-535-9555
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
