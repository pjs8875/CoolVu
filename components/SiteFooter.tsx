import Link from "next/link";

const GEO_PAGES = [
  { href: "/solar-window-film-long-island", label: "Solar Window Film" },
  { href: "/privacy-window-film-long-island", label: "Privacy Window Film" },
  { href: "/safety-security-window-film-long-island", label: "Safety & Security Film" },
  { href: "/decorative-window-film-long-island", label: "Decorative Window Film" },
  { href: "/best-window-film-installer-long-island", label: "Best Installer on Long Island" },
  { href: "/press/county-advisory-board-recognition", label: "Awards & Recognition" },
];

const BLOG_POSTS = [
  { href: "/blog/summer-heat-solar-window-film-long-island", label: "Summer Heat & Solar Film" },
  { href: "/blog/one-way-privacy-window-film-long-island", label: "One-Way Privacy Film" },
  { href: "/blog/frosted-bathroom-window-film-long-island", label: "Frosted Bathroom Film" },
  { href: "/blog/safety-window-film-storms-long-island", label: "Safety Film for Storms" },
  { href: "/blog/uv-damage-furniture-floors-window-film-long-island", label: "UV Damage Protection" },
  { href: "/blog/how-long-does-window-film-last", label: "How Long Does Film Last?" },
  { href: "/blog/window-film-vs-new-windows", label: "Film vs. New Windows" },
  { href: "/blog/commercial-window-film-long-island", label: "Commercial Window Film" },
  { href: "/blog/window-film-cost-long-island", label: "Window Film Cost Guide" },
  { href: "/blog/glare-reduction-window-film-long-island", label: "Glare Reduction Film" },
  { href: "/blog/window-film-vs-window-tinting-long-island", label: "Film vs. Tinting Explained" },
  { href: "/blog", label: "View All Articles →" },
];

const LOCATIONS = [
  { href: "/locations/garden-city", label: "Garden City" },
  { href: "/locations/great-neck", label: "Great Neck" },
  { href: "/locations/manhasset", label: "Manhasset" },
  { href: "/locations/rockville-centre", label: "Rockville Centre" },
  { href: "/locations/massapequa", label: "Massapequa" },
  { href: "/locations/levittown", label: "Levittown" },
  { href: "/locations/commack", label: "Commack" },
  { href: "/locations/east-meadow", label: "East Meadow" },
  { href: "/locations/plainview", label: "Plainview" },
  { href: "/locations/syosset", label: "Syosset" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-coolvu-dark-blue text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand column */}
          <div>
            <h3 className="font-bold text-lg mb-3">CoolVu of Long Island</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Nassau County&apos;s most trusted window film installer. Serving all of Nassau &amp; Suffolk County.
            </p>
            <p className="text-sm text-gray-300">📞 <a href="tel:5165359555" className="hover:text-white">516-535-9555</a></p>
            <p className="text-sm text-gray-300 mt-1">✉️ <a href="mailto:paul.silverman@coolvu.com" className="hover:text-white">paul.silverman@coolvu.com</a></p>
            <p className="text-sm text-gray-300 mt-1">📍 Westbury, NY</p>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-bold text-lg mb-3">Our Services</h3>
            <ul className="space-y-2">
              {GEO_PAGES.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog column */}
          <div>
            <h3 className="font-bold text-lg mb-3">Window Film Guide</h3>
            <ul className="space-y-2">
              {BLOG_POSTS.map((post) => (
                <li key={post.href}>
                  <Link href={post.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {post.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations column */}
          <div>
            <h3 className="font-bold text-lg mb-3">Service Areas</h3>
            <ul className="space-y-2">
              {LOCATIONS.map((loc) => (
                <li key={loc.href}>
                  <Link href={loc.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {loc.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-3">And all of Long Island, NY</p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} CoolVu of Long Island. All rights reserved. Serving Nassau &amp; Suffolk County, NY.
          </p>
          <p className="text-xs text-gray-400">
            Nassau County Advisory Board — Top Gun Professional Business 🏆
          </p>
        </div>
      </div>
    </footer>
  );
}
