"use client";
import React from "react";
import ContactModalWrapper from "@/components/ContactModalWrapper";

export default function PressRecognitionPage() {
  return (
    <main className="flex-1">
      <section className="bg-[#1a1a2e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-yellow-400 mb-4">Press & Recognition</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CoolVu of Long Island Recognized by Nassau County Advisory Board</h1>
          <p className="text-xl text-gray-300">Paul and Claire Silverman named &quot;Champion Business Owners&quot; and &quot;Top Gun Professional Business&quot; in Nassau County, New York.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-8 mb-12">
            <p className="text-2xl font-bold text-gray-900 mb-4">&quot;Champion Business Owners&quot;</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The Nassau County Advisory Board has recognized Paul and Claire Silverman of CoolVu of Long Island as champion business owners and a Top Gun Professional Business serving Nassau County.
            </p>
            <a href="https://countyadvisoryboard.com/paul-silverman-coolvu-of-long-island/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
              View the official recognition → countyadvisoryboard.com
            </a>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">About CoolVu of Long Island</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            CoolVu of Long Island is the most trusted window film installer serving Nassau and Suffolk Counties. Founded by Paul and Claire Silverman and based in Westbury, NY, CoolVu specializes in solar/energy film, privacy film, decorative film, and safety/security film for homes and businesses across all of Long Island.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            CoolVu blocks 99% of UV rays, offers a lifetime residential warranty, and provides free in-home estimates with same-week availability. The company serves every community in Nassau and Suffolk County — from Great Neck to Montauk.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">What This Recognition Means</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Nassau County Advisory Board recognizes businesses that demonstrate exceptional service, community commitment, and professional excellence. Being named a Top Gun Professional Business reflects CoolVu&apos;s commitment to every customer — from the first call to the final installation.
          </p>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact CoolVu of Long Island</h3>
            <div className="space-y-2 text-gray-700">
              <p>📞 <a href="tel:5165359555" className="text-blue-600 font-semibold hover:underline">516-535-9555</a></p>
              <p>🌐 <a href="https://coolvulongisland.com" className="text-blue-600 hover:underline">coolvulongisland.com</a></p>
              <p>📍 Westbury, NY — Serving all of Nassau and Suffolk County</p>
            </div>
          </div>

          <div className="text-center">
            <ContactModalWrapper>
              <button className="bg-[#1a1a2e] hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">Request a Free Estimate</button>
            </ContactModalWrapper>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "CoolVu of Long Island Recognized by Nassau County Advisory Board",
        "description": "Paul and Claire Silverman of CoolVu of Long Island named champion business owners and Top Gun Professional Business by the Nassau County Advisory Board.",
        "author": { "@type": "Organization", "name": "Nassau County Advisory Board" },
        "about": {
          "@type": "LocalBusiness",
          "name": "CoolVu of Long Island",
          "telephone": "+15165359555",
          "url": "https://coolvulongisland.com",
          "address": { "@type": "PostalAddress", "addressLocality": "Westbury", "addressRegion": "NY", "addressCountry": "US" },
          "award": "Nassau County Advisory Board Top Gun Professional Business"
        }
      })}} />
    </main>
  );
}
