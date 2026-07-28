import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { getSiteUrl } from "@/lib/seo/site";

const title = "Trade Partners | CoolVu of Long Island";
const description =
  "CoolVu of Long Island works with interior designers, architects, glass companies, and property managers across Nassau and Suffolk County. Referral partnerships, trade pricing, and free samples.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${getSiteUrl()}/partners` },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: `${getSiteUrl()}/partners`,
    type: "website",
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold font-heading text-coolvu-dark-blue mb-3">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <main className="bg-white">
      <section className="bg-coolvu-dark-blue text-white pt-28 pb-16 md:pt-36 md:pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-widest text-blue-200 text-sm font-bold mb-4">
            For The Trade
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 leading-tight">
            Trade Partners
          </h1>
          <p className="text-blue-100 text-lg">
            Designers, architects, glass companies, and property managers across
            Nassau and Suffolk County
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 md:py-20">
        <p className="text-gray-700 leading-relaxed mb-10 text-lg">
          Window film sits in an odd spot. It solves problems designers and glass
          companies run into constantly &mdash; glare, heat, fading fabrics, privacy,
          safety glass requirements &mdash; but it is not really anyone&apos;s specialty.
          That is where we come in. CoolVu of Long Island installs film on glass that
          is already there, which means your client keeps their windows, their timeline,
          and most of their budget.
        </p>

        <Section title="For Interior Designers and Architects">
          <p>
            You have specified the perfect fabric and the west-facing windows are going
            to destroy it. Or the client wants privacy in a glass conference room without
            losing the light. Or the sunroom is beautiful and unusable from June to
            September.
          </p>
          <p>Film handles all three without touching the glass:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Decorative films &mdash; frosted, gradient, etched, and custom patterns</li>
            <li>Blocks 99% of UV, the main cause of faded furniture, art, and flooring</li>
            <li>Cuts heat and glare while keeping the view</li>
            <li>Installed in a day, on existing glass, with no construction</li>
          </ul>
          <p>
            We bring samples to your studio, spec alongside you, and stay out of the way
            on client-facing calls unless you want us there.
          </p>
        </Section>

        <Section title="For Glass Companies and Glaziers">
          <p>
            Film goes <em>on</em> glass, not instead of it. We are not competing with your
            core business &mdash; we are the answer for the client who needs solar,
            security, or privacy performance and cannot justify a full replacement.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Retrofit performance on glass you already installed</li>
            <li>Security and safety film for storefronts and ground-floor glass</li>
            <li>A referral arrangement that pays you without adding work</li>
            <li>We stay in our lane and hand the client back</li>
          </ul>
        </Section>

        <Section title="For Property Managers and Facility Teams">
          <p>
            Tenant complaints about heat and glare, west-facing units nobody wants,
            lobbies that need privacy without losing light, or a building that needs
            safety glazing to meet code. Film is usually the fastest and least disruptive
            fix, and we can phase it building by building.
          </p>
        </Section>

        <Section title="How the Partnership Works">
          <ul className="list-disc pl-6 space-y-2">
            <li>Free sample kit sent to your office or studio</li>
            <li>Trade pricing on all residential and commercial film</li>
            <li>Referral fees on jobs you send our way</li>
            <li>We list you here as a Long Island trade partner</li>
            <li>No exclusivity, no contract, no minimum</li>
          </ul>
        </Section>

        <Section title="Our Partners">
          <p>
            We are building this list. If you have worked with us and would like to be
            included, email Paul directly and we will add you, with a link to your site.
          </p>
        </Section>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold font-heading text-coolvu-dark-blue mb-3">
            Let&apos;s talk
          </h2>
          <p className="text-gray-700 mb-6">
            Paul Silverman owns CoolVu of Long Island and answers his own phone. Fifteen
            minutes, no pitch &mdash; just whether this is useful to you.
          </p>
          <a
            href="tel:5165359555"
            className="inline-flex items-center gap-2 bg-coolvu-dark-blue text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition"
          >
            <Phone className="w-5 h-5" />
            (516) 535-9555
          </a>
          <p className="text-gray-600 mt-4">
            Or email{" "}
            <a
              href="mailto:paul.silverman@coolvu.com"
              className="text-coolvu-dark-blue font-semibold underline"
            >
              paul.silverman@coolvu.com
            </a>
          </p>
          <p className="text-gray-600 mt-6">
            <Link href="/" className="text-coolvu-dark-blue font-semibold underline">
              Back to CoolVu of Long Island
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
