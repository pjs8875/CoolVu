"use client";
import React from "react";
import ContactModalWrapper from "@/components/ContactModalWrapper";

export default function SolarFilmGEOPage() {
  return (
    <main className="flex-1">
      {/* Answer-First Hero */}
      <section className="bg-[#1a1a2e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-8">
            <p className="text-sm uppercase tracking-widest text-blue-300 mb-2">Quick Answer</p>
            <p className="text-lg leading-relaxed">
              Solar window film blocks up to 63% of solar heat and 99% of UV rays — lowering your electric bill, protecting your furniture, and keeping your home or business comfortable year-round. CoolVu of Long Island installs premium solar film on homes and businesses across Nassau and Suffolk County. Free estimates. Lifetime residential warranty.
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Solar Window Film on Long Island
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Stop paying to air-condition the sun. CoolVu installs professional solar film that makes your windows work <em>for</em> you — instead of against you.
          </p>
          <ContactModalWrapper>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Get a Free Estimate → 516-535-9555
            </button>
          </ContactModalWrapper>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Long Island Homeowners & Businesses Choose Solar Film
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "☠️", title: "Blocks 63% of Solar Heat", desc: "Your AC doesn't have to fight the sun anymore. Rooms stay cooler and your electric bill drops — especially during Long Island summers." },
              { icon: "🛡️", title: "Blocks 99% of UV Rays", desc: "UV rays fade hardwood floors, furniture, and artwork. Solar film acts like SPF sunscreen for your home — invisible protection that lasts." },
              { icon: "👁️", title: "Keep Your View", desc: "Unlike blinds or curtains, solar film lets you keep the natural light and the view. It's nearly invisible from inside." },
              { icon: "⚡", title: "Lower Electric Bills", desc: "Less solar heat coming in means less work for your AC. Most Long Island homeowners see real savings on their PSEG bill." },
              { icon: "🏡", title: "Lifetime Residential Warranty", desc: "We stand behind every installation with a lifetime warranty on residential projects. That's our promise to Long Island homeowners." },
              { icon: "🔧", title: "Professional Installation", desc: "No bubbles, no peeling, no streaks. Our certified installers serve all of Nassau and Suffolk County with same-week availability." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Solar Film vs. Other Options
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#1a1a2e] text-white">
                  <th className="text-left p-4">Option</th>
                  <th className="text-center p-4">Blocks Heat</th>
                  <th className="text-center p-4">Keeps View</th>
                  <th className="text-center p-4">One-Time Cost</th>
                  <th className="text-center p-4">Warranty</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["CoolVu Solar Film", "✅ Up to 63%", "✅ Yes", "✅ Yes", "✅ Lifetime"],
                  ["Blinds / Shades", "⚠️ Partial", "❌ Blocks(view", "✅ Yes", "❌ None"],
                  ["New Windows", "★ Yes", "✅ Yes", "❌ Very expensive", "⚠️ Varies"],
                  ["No Treatment", "❌ None", "✅ Yes", "ℂ Free now", "❌ None"],
                ].map(([option, heat, view, cost, warranty], i) => (
                  <tr key={option} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-semibold text-gray-900">{option}</td>
                    <td className="p-4 text-center">{heat}</td>
                    <td className="p-4 text-center">{view}</td>
                    <td className="p-4 text-center">{cost}</td>
                    <td className="p-4 text-center">{warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Serving All of Long Island</h2>
          <p className="text-gray-600 mb-8 text-lg">
            CoolVu of Long Island installs solar window film throughout Nassau and Suffolk County — from Great Neck to Montauk, from the North Shore to the South Shore.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Westbury · Garden City · Mineola · Hempstead · Valley Stream · Lynbrook · Rockville Centre · Long Beach · Oceanside · Freeport · Merrick · Bellmore · Wantagh · Seaford · Massapequa · Hicksville · Syosset · Plainview · Woodbury w Huntington · Commack · Smithtown · Hauppauge · Ronkonkoma · Patchogue · Bay Shore · Islip · Amityville · Babylon · Farmingdale · Great Neck · Manhasset · Port Washington · Roslyn · Glen Cove · Oyster Bay · Cold Spring Harbor · Northport · East Northport · Dix Hills · Melville · East Meadow · Levittown · Bethpage · Old Bethpage · Jericho · Brookville · Locust Valley · Sea Cliff · Centerport
          </p>
        </div>
      </section>

      {/* FAQ with Schema */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Common Questions About Solar Window Film
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does solar window film cost on Long Island?",
                a: "Most residential solar window film projects on Long Island range from $8–$15 per square foot installed, depending on the film type and number of windows. CoolVu offers free in-home estimates so you get an exact price for your home."
              },
              {
                q: "Will solar film make my rooms too dark?",
                a: "No. Modern solar film is designed to block heat and UV while maintaining natural light. Most homeowners can't tell the difference visually — the film is nearly invisible from inside."
              },
              {
                q: "How long does solar window film last?",
                a: "CoolVu's professional solar film installations come with a lifetime residential warranty. The film itself typically lasts 15–25 years when professionally installed."
              },
              {
                q: "Can solar film be installed on any type of window?",
                a: "Solar film works on most residential and commercial windows including single-pane, double-pane, and tempered glass. We'll evaluate your windows during your free estimate and recommend the right film."
              },
              {
                q: "How long does installation take?",
                a: "Most homes can be completed in a single day. A typical Long Island home with 10–20 windows takes 4–6 hours. We work around your schedule and clean up completely when we're done."
              },
              {
                q: "Does solar window film reduce electric bills?",
                a: "Yes. By blocking up to 63% of solar heat from entering your home, your air conditioner doesn't have to work as hard. Most Long Island homeowners see a noticeable reduction in their summer PSEG bills."
              },
              {
                q: "Is CoolVu of Long Island licensed and insured?",
                a: "Yes. CoolVu of Long Island is a fully licensed and insured window film installer serving Nassau and Suffolk County. We are also recognized by the Nassau County Advisory Board as a Top Gun Professional Business."
              },
              {
                q: "What's the difference between solar film and privacy film?",
                a: "Solar film is designed primarily to block heat and UV rays while keeping visibility. Privacy film restricts visibility from outside. CoolVu offers both — and some films do both at once. We'll help you choose during your free estimate."
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-gray-50 rounded-xl p-6 cursor-pointer">
                <summary className="font-bold text-gray-900 text-lg list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-500 ml-4">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a2e] text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Stop the Heat?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Call CoolVu of Long Island today for a free in-home estimate. We serve all of Nassau and Suffolk County with same-week availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5165359555" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Call 516-535-9555
            </a>
            <ContactModalWrapper>
              <button className="bg-white text-[#1a1a2e] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Request Free Estimate
              </button>
            </ContactModalWrapper>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "How much does solar window film cost on Long Island?", acceptedAnswer: { "@type": "Answer", text: "Most residential solar window film projects on Long Island range from $8–$15 per square foot installed. CoolVu offers free in-home estimates." } },
              { "@type": "Question", name: "Will solar film make my rooms too dark?", acceptedAnswer: { "@type": "Answer", text: "No. Modern solar film blocks heat and UV while maintaining natural light. Most homeowners can't tell the difference visually." } },
              { "@type": "Question", name: "How long does solar window film last?", acceptedAnswer: { "@type": "Answer", text: "CoolVu's professional solar film installations come with a lifetime residential warranty. The film itself typically lasts 15–25 years." } },
              { "@type": "Question", name: "Does solar window film reduce electric bills?", acceptedAnswer: { "@type": "Answer", text: "Yes. By blocking up to 63% of solar heat, your AC doesn't work as hard. Most Long Island homeowners see a reduction in summer PSEG bills." } },
            ],
          }),
        }}
      />
    </main>
  );
}
