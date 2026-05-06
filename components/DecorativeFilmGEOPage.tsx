"use client";
import React from "react";
import ContactModalWrapper from "@/components/ContactModalWrapper";

export default function DecorativeFilmGEOPage() {
  return (
    <main className="flex-1">
      <section className="bg-[#1a1a2e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-8">
            <p className="text-sm uppercase tracking-widest text-blue-300 mb-2">Quick Answer</p>
            <p className="text-lg leading-relaxed">
              Decorative window film transforms plain glass into beautiful, custom designs — without replacing the glass. From frosted patterns to branded logos, CoolVu of Long Island installs decorative film on homes and businesses throughout Nassau and Suffolk County. Free estimates. Lifetime residential warranty.
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Decorative Window Film on Long Island</h1>
          <p className="text-xl text-gray-300 mb-8">Turn ordinary glass into something extraordinary. Custom designs, frosted patterns, and branded graphics — installed on your existing windows at a fraction of the cost of new glass.</p>
          <ContactModalWrapper>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">Get a Free Estimate → 516-535-9555</button>
          </ContactModalWrapper>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Popular Decorative Film Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🏢", title: "Office & Conference Rooms", desc: "Frosted or patterned film on glass partitions and conference room windows creates privacy while keeping an open, professional look." },
              { icon: "🏪", title: "Storefront Graphics", desc: "Custom branded film on your storefront windows — logos, hours, promotions. Makes your business stand out and look polished." },
              { icon: "🚪", title: "Front Doors & Sidelights", desc: "Decorative film on door glass adds curb appeal and privacy without sacrificing natural light. Dozens of patterns available." },
              { icon: "🛁", title: "Bathrooms & Showers", desc: "Frosted film on bathroom windows and shower enclosures looks like etched glass at a fraction of the cost — and still lets light through." },
              { icon: "🏠", title: "Living Room & Dining Room", desc: "Add a design element to plain windows — subtle patterns, gradient fades, or bold geometric designs that complement your interior." },
              { icon: "🎓", title: "Schools & Healthcare", desc: "Decorative film creates visual interest and partial privacy in schools, medical offices, and waiting rooms without making spaces feel closed in." },
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

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Serving All of Long Island</h2>
          <p className="text-gray-600 mb-6 text-lg">CoolVu installs decorative window film for homes and businesses throughout Nassau and Suffolk County.</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Westbury · Garden City · Mineola · Hempstead · Valley Stream · Lynbrook · Rockville Centre · Long Beach · Oceanside · Freeport · Merrick · Bellmore · Wantagh · Seaford · Massapequa · Hicksville · Syosset · Plainview · Woodbury · Huntington · Commack · Smithtown · Hauppauge · Ronkonkoma · Patchogue · Bay Shore · Islip · Amityville · Babylon · Farmingdale · Great Neck · Manhasset · Port Washington · Roslyn · Glen Cove · Oyster Bay · Cold Spring Harbor · Northport · Dix Hills · Melville · East Meadow · Levittown · Bethpage · Jericho · Centerport
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Common Questions About Decorative Film</h2>
          <div className="space-y-6">
            {[
              { q: "Can decorative film be custom designed?", a: "Yes. We can work with custom designs, logos, and patterns. For businesses especially, we can match your branding exactly. Bring us your logo or design concept and we'll make it happen." },
              { q: "Does decorative film look cheap?", a: "Not when professionally installed. The key difference between DIY and professional film is the installation quality — clean edges, no bubbles, precision cut to your exact window size. CoolVu installations are indistinguishable from etched glass." },
              { q: "How long does decorative film last?", a: "With professional installation, decorative film typically lasts 7–15 years. Residential installations come with our lifetime warranty." },
              { q: "Can decorative film be removed or changed?", a: "Yes — film can be removed without damaging the glass. This is great for businesses that want to update their look or seasonal promotions." },
              { q: "What's the difference between decorative and frosted film?", a: "Frosted film is a type of decorative film — it creates a soft, translucent look. Decorative film is the broader category that includes patterns, graphics, gradients, and custom designs." },
            ].map((faq) => (
              <details key={faq.q} className="bg-gray-50 rounded-xl p-6 cursor-pointer">
                <summary className="font-bold text-gray-900 text-lg list-none flex justify-between items-center">{faq.q}<span className="text-blue-500 ml-4">+</span></summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Glass Today</h2>
          <p className="text-gray-300 mb-8 text-lg">Free in-home estimates. Same-week availability. All of Nassau and Suffolk County.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5165359555" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">Call 516-535-9555</a>
            <ContactModalWrapper>
              <button className="bg-white text-[#1a1a2e] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors">Request Free Estimate</button>
            </ContactModalWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
