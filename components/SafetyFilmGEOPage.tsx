"use client";
import React from "react";
import ContactModalWrapper from "@/components/ContactModalWrapper";

export default function SafetyFilmGEOPage() {
  return (
    <main className="flex-1">
      <section className="bg-[#1a1a2e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-8">
            <p className="text-sm uppercase tracking-widest text-blue-300 mb-2">Quick Answer</p>
            <p className="text-lg leading-relaxed">
              Safety and security window film holds broken glass together so it doesn&apos;t shatter into dangerous shards. It protects against storms, accidental impacts, and forced entry. CoolVu of Long Island installs safety film on homes and businesses throughout Nassau and Suffolk County. Free estimates. Lifetime residential warranty.
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Safety & Security Window Film on Long Island</h1>
          <p className="text-xl text-gray-300 mb-8">Your windows are your home&apos;s most vulnerable point. Safety film keeps broken glass from becoming a danger — during storms, accidents, or break-in attempts.</p>
          <ContactModalWrapper>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">Get a Free Estimate → 516-535-9555</button>
          </ContactModalWrapper>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Safety Film Protects Against</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🌀", title: "Hurricanes & Nor'easters", desc: "Long Island gets hit hard. Safety film holds glass in place when wind, debris, or storm surge impacts your windows — reducing injury risk and keeping your home sealed." },
              { icon: "🔓", title: "Forced Entry & Break-Ins", desc: "Smash-and-grab burglars rely on breaking glass fast and quietly. Safety film makes that nearly impossible — the glass holds together, slowing them down and alerting neighbors." },
              { icon: "💥", title: "Accidental Impacts", desc: "Kids, sports equipment, falling objects — accidents happen. Safety film prevents dangerous glass shards from flying into living spaces." },
              { icon: "💣", title: "Blast Mitigation", desc: "For commercial properties, safety film significantly reduces injury from glass fragmentation in the event of an explosion or pressure wave." },
              { icon: "☀️", title: "UV Protection Too", desc: "Most safety films also block 99% of UV rays — protecting your family and furnishings as an added benefit." },
              { icon: "👁️", title: "Clear & Invisible", desc: "Safety film looks completely clear. Your windows look exactly the same — nobody can tell it&apos;s there until they need it." },
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
          <p className="text-gray-600 mb-6 text-lg">CoolVu installs safety and security window film throughout Nassau and Suffolk County — storm prep season or anytime.</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Westbury · Garden City · Mineola · Hempstead · Valley Stream · Lynbrook · Rockville Centre · Long Beach · Oceanside · Freeport · Merrick · Bellmore · Wantagh · Seaford · Massapequa · Hicksville · Syosset · Plainview · Woodbury · Huntington · Commack · Smithtown · Hauppauge · Ronkonkoma · Patchogue · Bay Shore · Islip · Amityville · Babylon · Farmingdale · Great Neck · Manhasset · Port Washington · Roslyn · Glen Cove · Oyster Bay · Cold Spring Harbor · Northport · Dix Hills · Melville · East Meadow · Levittown · Bethpage · Jericho · Centerport
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Common Questions About Safety Window Film</h2>
          <div className="space-y-6">
            {[
              { q: "Does safety film stop a window from breaking?", a: "Safety film doesn't prevent glass from cracking, but it holds the broken pieces together so they don't shatter into dangerous shards. Think of it like the windshield of a car — it cracks but stays in one piece." },
              { q: "How thick is safety window film?", a: "Safety film comes in various thicknesses — typically 4 mil, 8 mil, or 12 mil. Thicker film provides more protection. CoolVu will recommend the right thickness based on your security goals and window type." },
              { q: "Can safety film be combined with solar or privacy film?", a: "Yes. Many of our clients combine safety film properties with solar heat reduction or privacy. We carry combination films that do both." },
              { q: "Is safety film worth it for Long Island homes?", a: "Absolutely. With nor'easters, tropical storms, and the occasional hurricane affecting Long Island, safety film is one of the most practical upgrades a homeowner can make. It also deters break-ins — a real concern in Nassau and Suffolk County." },
              { q: "How is safety film installed?", a: "Our certified installers apply the film to the interior surface of your glass using a precision process. The film bonds to the glass and dries clear. Most homes are completed in a single day." },
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
          <h2 className="text-3xl font-bold mb-4">Protect Your Home Before the Next Storm</h2>
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
