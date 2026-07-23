import Link from "next/link";

const SERVICES = [
  { href: "/solar-window-film-long-island", label: "☀️ Solar Window Film" },
  { href: "/privacy-window-film-long-island", label: "🔒 Privacy Film" },
  { href: "/safety-security-window-film-long-island", label: "🛡️ Safety & Security Film" },
  { href: "/decorative-window-film-long-island", label: "🎨 Decorative Film" },
  { href: "/best-window-film-installer-long-island", label: "⭐ Why Choose CoolVu" },
  { href: "/complete-guide-window-film-long-island", label: "📖 Complete Window Film Guide" },
];

const DEFAULT_ARTICLES = [
  { href: "/blog/summer-heat-solar-window-film-long-island", label: "Summer Heat & Solar Film on Long Island" },
  { href: "/blog/window-film-vs-new-windows-long-island", label: "Window Film vs. New Windows: Is It Worth It?" },
  { href: "/blog/how-long-does-window-film-last-long-island", label: "How Long Does Window Film Last?" },
  { href: "/blog/energy-savings-window-film-long-island", label: "How Much Can Window Film Save on Energy Bills?" },
  { href: "/blog/safety-window-film-storms-long-island", label: "Safety Film for Long Island Storms & Hurricanes" },
  { href: "/blog/one-way-privacy-window-film-long-island", label: "One-Way Privacy Film: See Out, Not In" },
];

interface RelatedArticle {
  href: string;
  label: string;
}

interface RelatedContentProps {
  showArticles?: boolean;
  articles?: RelatedArticle[];
}

export default function RelatedContent({ showArticles = true, articles }: RelatedContentProps) {
  const featuredArticles = articles && articles.length > 0 ? articles : DEFAULT_ARTICLES;

  return (
    <div className="bg-[#EBF3FB] border-t-4 border-[#2E75B6] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Services Grid */}
        <h2 className="text-xl font-extrabold text-[#1F4E79] mb-2">
          Explore Our Window Film Services
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          CoolVu of Long Island installs all four types of window film — serving all of Nassau and Suffolk County.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {SERVICES.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block bg-white border border-[#c0d0e8] rounded-lg px-4 py-3 text-sm font-bold text-[#1F4E79] hover:bg-[#1F4E79] hover:text-white hover:border-[#1F4E79] transition-all text-center shadow-sm"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Featured Articles */}
        {showArticles && (
          <>
            <h2 className="text-xl font-extrabold text-[#1F4E79] mb-2">
              Related Articles
            </h2>
            <p className="text-sm text-gray-600 mb-5">
              Learn more about window film for Long Island homes and businesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {featuredArticles.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block bg-white border border-[#c0d0e8] rounded-lg px-4 py-3 text-sm font-semibold text-[#1F4E79] hover:bg-[#1F4E79] hover:text-white hover:border-[#1F4E79] transition-all shadow-sm"
                >
                  → {label}
                </Link>
              ))}
            </div>
            <Link
              href="/blog"
              className="inline-block text-sm font-bold text-[#2E75B6] hover:text-[#1F4E79] hover:underline"
            >
              View All Window Film Articles →
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
