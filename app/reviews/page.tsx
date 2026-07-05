import type { Metadata } from "next";
import Link from "next/link";
import { Star, Phone, MapPin } from "lucide-react";
import { REVIEWS, REVIEW_COUNT, AVERAGE_RATING } from "@/lib/data/reviews";
import { getSiteUrl } from "@/lib/seo/site";

const title = "CoolVu of Long Island Reviews — 31 Five-Star Ratings";
const description =
  "Read 31 five-star Google reviews of CoolVu of Long Island — trusted by Nassau & Suffolk homeowners for window film & tinting. Free estimate: 516-535-9555.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${getSiteUrl()}/reviews` },
  openGraph: {
    title,
    description,
    url: `${getSiteUrl()}/reviews`,
    type: "website",
  },
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "CoolVu of Long Island",
            telephone: "+1-516-535-9555",
            url: `${getSiteUrl()}/reviews`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Westbury",
              addressRegion: "NY",
              addressCountry: "US",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: AVERAGE_RATING.toFixed(1),
              reviewCount: String(REVIEW_COUNT),
            },
          }),
        }}
      />
      <section className="bg-coolvu-dark-blue text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-widest text-blue-200 text-sm font-bold mb-4">
            Verified Google Reviews
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            What Long Island Homeowners Say About CoolVu
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl font-bold">{AVERAGE_RATING.toFixed(1)}</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-blue-100 text-lg">
            {REVIEW_COUNT} five-star reviews across Nassau &amp; Suffolk County
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <article
              key={index}
              className="bg-[#F8F9FA] border border-gray-200 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <Stars count={review.rating} />
              <p className="text-gray-800 leading-relaxed font-medium mt-4 mb-6 flex-grow">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                <p className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" /> {review.town}, NY &middot; Google Review
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-coolvu-dark-blue text-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Ready to join {REVIEW_COUNT}+ happy Long Island customers?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Free in-home estimates. Lifetime residential warranty. Serving all of Nassau &amp; Suffolk County.
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
