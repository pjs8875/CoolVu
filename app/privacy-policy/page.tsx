import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { getSiteUrl } from "@/lib/seo/site";

const title = "Privacy Policy | CoolVu of Long Island";
const description =
  "How CoolVu of Long Island collects, uses, and protects your information when you request a free window film estimate. Plain-English privacy policy.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${getSiteUrl()}/privacy-policy` },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: `${getSiteUrl()}/privacy-policy`,
    type: "website",
  },
};

const LAST_UPDATED = "July 18, 2026";

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

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="bg-coolvu-dark-blue text-white pt-28 pb-16 md:pt-36 md:pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-widest text-blue-200 text-sm font-bold mb-4">
            Your Information, Explained Simply
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-blue-100 text-lg">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 md:py-20">
        <p className="text-gray-700 leading-relaxed mb-10 text-lg">
          CoolVu of Long Island (&quot;CoolVu,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) installs window film for homes and businesses across
          Nassau and Suffolk County, New York. This page explains, in plain
          English, what information we collect when you visit our website or
          ask us for a free estimate, how we use it, and how you can control
          it. We wrote this the same way we&apos;d explain it to a customer
          standing in their driveway — no legal jargon.
        </p>

        <Section title="1. What Information We Collect">
          <p>When you request a free estimate, call us, fill out a form on our website, or reach out through Facebook or Instagram, we may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your name, phone number, email address, and city or address</li>
            <li>Details about your project (type of windows, home or business, timing, budget)</li>
            <li>Photos you choose to send us of your windows</li>
            <li>Messages you send us by phone, text, email, or social media</li>
          </ul>
          <p>
            We also automatically collect some technical information when you visit our
            website, like the pages you viewed, your general location (city-level,
            from your IP address), and the device or browser you used. This comes from
            tools like Google Analytics and the Meta (Facebook/Instagram) pixel, which
            work the same way on most business websites.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact you about your free estimate and answer your questions</li>
            <li>Schedule and confirm your appointment</li>
            <li>Send you your quote, invoice, or project updates</li>
            <li>Follow up after a job to make sure you&apos;re happy (and ask for a review)</li>
            <li>Show you relevant ads on Google, Facebook, and Instagram, and measure whether those ads are working</li>
            <li>Improve our website and services</li>
          </ul>
        </Section>

        <Section title="3. We Never Sell Your Information">
          <p>
            CoolVu does not sell, rent, or trade your personal information to
            anyone. Period. We only share information with trusted companies
            that help us run our business, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Meta (Facebook/Instagram)</strong> — when you submit a lead
              form on Facebook or Instagram, Meta shares that information with us
              so we can follow up, and helps us measure ad performance
            </li>
            <li>
              <strong>Google</strong> — for website analytics and ad measurement
            </li>
            <li>
              <strong>Our scheduling, invoicing, and email tools</strong> — used
              only to run our business (sending quotes, scheduling jobs, and
              contacting you about your project)
            </li>
          </ul>
          <p>
            We may also share information if required by law, such as in
            response to a valid subpoena or court order.
          </p>
        </Section>

        <Section title="4. Calls, Texts, and Emails">
          <p>
            By submitting a form on our website or through a Facebook/Instagram
            ad, or by giving us your phone number or email, you agree that CoolVu
            of Long Island may contact you by phone, text message, or email about
            your free estimate, appointment, or project. Message and data rates
            may apply. You can opt out of text messages at any time by replying
            &quot;STOP,&quot; and you can unsubscribe from emails using the link at
            the bottom of any email we send. You can also just call or text us at{" "}
            <a href="tel:+15165359555" className="text-coolvu-medium-blue font-semibold hover:underline">
              516-535-9555
            </a>{" "}
            and ask us to stop.
          </p>
        </Section>

        <Section title="5. Cookies">
          <p>
            Our website uses cookies — small files stored in your browser — to
            remember how you use the site and to help us understand which pages
            are most helpful. This also allows us to show you relevant ads if
            you&apos;ve visited our site before. You can turn off cookies in
            your browser settings at any time; the site will still work, though
            some features may not remember your preferences.
          </p>
        </Section>

        <Section title="6. Your Choices">
          <p>You can, at any time:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ask us what information we have about you</li>
            <li>Ask us to correct or delete your information</li>
            <li>Ask us to stop contacting you</li>
            <li>Unsubscribe from emails or texts (see Section 4)</li>
          </ul>
          <p>
            To make any of these requests, just email{" "}
            <a
              href="mailto:paul.silverman@coolvu.com"
              className="text-coolvu-medium-blue font-semibold hover:underline"
            >
              paul.silverman@coolvu.com
            </a>{" "}
            or call{" "}
            <a href="tel:+15165359555" className="text-coolvu-medium-blue font-semibold hover:underline">
              516-535-9555
            </a>
            . We&apos;ll take care of it personally.
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>
            Our website and services are intended for adults. We do not
            knowingly collect information from anyone under 18 years old.
          </p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            If we ever change how we handle your information, we&apos;ll update
            this page and change the &quot;Last updated&quot; date at the top.
            We won&apos;t make changes that reduce your privacy without letting
            you know.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>
            CoolVu of Long Island
            <br />
            1055 Old Country Road, Westbury, NY 11590
            <br />
            Phone:{" "}
            <a href="tel:+15165359555" className="text-coolvu-medium-blue font-semibold hover:underline">
              516-535-9555
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:paul.silverman@coolvu.com"
              className="text-coolvu-medium-blue font-semibold hover:underline"
            >
              paul.silverman@coolvu.com
            </a>
            <br />
            Website:{" "}
            <Link href="/" className="text-coolvu-medium-blue font-semibold hover:underline">
              coolvulongisland.com
            </Link>
          </p>
        </Section>
      </section>

      <section className="bg-coolvu-dark-blue text-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Ready for your free estimate?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Serving all of Nassau &amp; Suffolk County. Lifetime residential warranty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/?contact=true"
              className="bg-white text-coolvu-dark-blue px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-blue-50 transition-colors"
            >
              Get My Free Estimate
            </Link>
            <a
              href="tel:+15165359555"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm border border-white/40 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" /> (516) 535-9555
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
