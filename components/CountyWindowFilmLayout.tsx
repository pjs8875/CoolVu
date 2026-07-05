import Link from "next/link";
import { getSiteUrl } from "@/lib/seo/site";

interface Town {
  slug: string;
  name: string;
}
interface FaqItem {
  q: string;
  a: string;
}
interface CountyWindowFilmLayoutProps {
  county: string;
  countySlug: string;
  intro: string;
  towns: Town[];
  faq: FaqItem[];
}

const SERVICES = [
  { href: "/solar-window-film-long-island", label: "Solar & Heat-Reduction Film", desc: "Blocks up to 63% of heat and 99% of UV rays." },
  { href: "/privacy-window-film-long-island", label: "Privacy Film", desc: "Frosted and one-way film — see out, not in." },
  { href: "/safety-security-window-film-long-island", label: "Safety & Security Film", desc: "Holds glass together in storms and break-ins." },
  { href: "/decorative-window-film-long-island", label: "Decorative Film", desc: "Custom frosted, patterned, and branded glass." },
];

export default function CountyWindowFilmLayout({ county, countySlug, intro, towns, faq }: CountyWindowFilmLayoutProps) {
  const base = getSiteUrl();
  const url = `${base}/locations/${countySlug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "CoolVu of Long Island",
        telephone: "+1-516-535-9555",
        url,
        areaServed: { "@type": "AdministrativeArea", name: `${county}, NY` },
        address: { "@type": "PostalAddress", addressLocality: "Westbury", addressRegion: "NY", addressCountry: "US" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: base },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${base}/locations` },
          { "@type": "ListItem", position: 3, name: county, item: url },
        ],
      },
    ],
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-coolvu-dark-blue text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-widest text-blue-200 text-sm font-bold mb-4">
            Serving {county}, New York
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            Window Film &amp; Tinting in {county}
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">{intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5165359555" className="bg-white text-coolvu-dark-blue font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition">
              Call 516-535-9555
            </a>
            <Link href="/#contact" className="border border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-coolvu-dark-blue mb-8 text-center">Window Film Services in {county}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className="block border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="font-bold text-xl text-coolvu-dark-blue mb-2">{s.label}</h3>
              <p className="text-gray-700">{s.desc}</p>
            </Link>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/best-window-film-installer-long-island" className="text-[#1F4E79] font-semibold underline">
            See why CoolVu is the best window film installer on Long Island →
          </Link>
        </p>
      </section>

      <section className="bg-[#F8F9FA] py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-coolvu-dark-blue mb-4 text-center">Towns We Serve in {county}</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
            CoolVu installs window film for homes and businesses across {county}. Choose your town for local details:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {towns.map((t) => (
              <Link key={t.slug} href={`/locations/${t.slug}`} className="block bg-white border border-gray-200 rounded-xl px-4 py-3 text-center font-semibold text-coolvu-dark-blue hover:shadow-md hover:border-coolvu-dark-blue transition">
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-coolvu-dark-blue mb-8 text-center">
          {county} Window Film — Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faq.map((f, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{f.q}</h3>
              <p className="text-gray-700 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-coolvu-dark-blue text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Free Estimates Across {county}</h2>
          <p className="text-blue-100 text-lg mb-8">
            Blocks 99% of UV rays. Lifetime residential warranty. Serving all of {county} and Long Island.
          </p>
          <a href="tel:5165359555" className="bg-white text-coolvu-dark-blue font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition inline-block">
            Call CoolVu: 516-535-9555
          </a>
        </div>
      </section>
    </main>
  );
}
