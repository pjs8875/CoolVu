import Link from "next/link";

interface BlogArticleLayoutProps {
  tag: string;
  title: string;
  metaLine: string;
  answerLabel?: string;
  answerText: string;
  children: React.ReactNode;
  faqItems: { q: string; a: string }[];
  ctaHeadline: string;
  ctaBody: string;
}

export default function BlogArticleLayout({
  tag,
  title,
  metaLine,
  answerLabel = "The Short Answer",
  answerText,
  children,
  faqItems,
  ctaHeadline,
  ctaBody,
}: BlogArticleLayoutProps) {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 text-sm text-gray-500">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-[#1F4E79] hover:underline">Home</Link>
          {" › "}
          <Link href="/blog" className="text-[#1F4E79] hover:underline">Blog</Link>
          {" › "}
          <span>{title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1F4E79] to-[#2E75B6] text-white px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-xs uppercase tracking-wider font-bold rounded px-2 py-1 mb-4">
            {tag}
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">{title}</h1>
          <p className="text-sm opacity-75">{metaLine}</p>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-[#EBF3FB] border-b border-[#d0dcea]">
        <div className="max-w-3xl mx-auto px-6 py-3 flex flex-wrap gap-x-6 gap-y-1 text-xs font-semibold text-[#1F4E79]">
          <span>✓ Nassau County Advisory Board Recognized</span>
          <span>✓ Lifetime Residential Warranty</span>
          <span>✓ Blocks 99% of UV Rays</span>
          <span>✓ Free Estimates</span>
        </div>
      </div>

      {/* Answer box */}
      <div className="max-w-3xl mx-auto px-6 mt-10">
        <div className="border-l-4 border-[#2E75B6] bg-[#EBF3FB] rounded-r-xl px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2E75B6] mb-2">{answerLabel}</p>
          <p className="text-base font-semibold text-gray-900 leading-relaxed">{answerText}</p>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 py-10 prose prose-blue max-w-none
        prose-h2:text-[#1F4E79] prose-h2:font-extrabold prose-h2:text-2xl prose-h2:mt-10
        prose-h3:text-gray-800 prose-h3:font-bold prose-h3:mt-6
        prose-p:text-gray-700 prose-p:leading-relaxed
        prose-li:text-gray-700 prose-li:leading-relaxed
        prose-table:text-sm prose-th:bg-[#1F4E79] prose-th:text-white prose-th:p-3 prose-td:p-3 prose-td:border-b prose-td:border-gray-100
        prose-strong:text-gray-900">
        {children}
      </article>

      {/* FAQ */}
      <div className="bg-gray-50 border-t-2 border-[#EBF3FB] mt-4">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-extrabold text-[#1F4E79] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <p className="font-bold text-[#1F4E79] mb-2">{item.q}</p>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#1F4E79] to-[#2E75B6] text-white px-6 py-14 text-center">
        <h2 className="text-2xl font-extrabold mb-3">{ctaHeadline}</h2>
        <p className="opacity-85 mb-8 max-w-xl mx-auto">{ctaBody}</p>
        <a
          href="tel:5165359555"
          className="inline-block bg-[#FF6B00] hover:bg-[#e55f00] text-white font-extrabold px-10 py-4 rounded-lg text-lg transition-colors"
        >
          📞 Call 516-535-9555
        </a>
      </div>
    </div>
  );
}
