"use client";
import React from "react";
import ContactModalWrapper from "@/components/ContactModalWrapper";

export default function PrivacyFilmGEOPage() {
  return (
    <main className="flex-1">
      {/* Answer-First Hero */}
      <section className="bg-[#1a1a2e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-8">
            <p className="text-sm uppercase tracking-widest text-blue-300 mb-2">Quick Answer</p>
            <p className="text-lg leading-relaxed">
              Privacy window film lets you see out while blocking the view from outside — without losing natural light. CoolVu of Long Island installs frosted, one-way, and decorative privacy film for homes and businesses throughout Nassau and Suffolk County. Free estimates. Lifetime residential warranty.
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Window Film on Long Island
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            See out. Not in. CoolVu transforms your glass into a privacy barrier — without blinds, curtains, or frosted glass replacement.
          </p>
          <ContactModalWrapper>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Get a Free Estimate → 516-535-9555
            </button>
          </ContactModalWrapper>
        </div>
      </section>

      {/* Privacy Film Types */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Types of Privacy Film We Install</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🪞", title: "One-Way Mirror Film", desc: "See out clearly during the day while people outside see only a mirror reflection. Perfect for street-facing windows and offices." },
              { icon: "❄️", title: "Frosted / Etched Film", desc: "Creates a beautiful frosted glass effect — ideal for bathroom windows, glass doors, partitions, and shower enclosures. No glass replacement needed." },
              { icon: "🎨", title: "Decorative Film", desc: "Custom patterns, gradients, and designs that provide privacy while adding style. Great for storefronts, conference rooms, and front doors." },
            ].map((t) => (
              <div key={t.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{t.title}</h3>
                <p className="text-gray-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Privacy Film Instead of Blinds or New Glass?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "💡", title: "Keep Your Natural Light", desc: "Unlike blinds and curtains, privacy film blocks the view without blocking your light. Your rooms stay bright and open." },
              { icon: "💰", title: "Fraction of the Cost of New Glass", desc: "Frosted or privacy glass replacement costs thousands. Window film delivers the same look for a fraction of the price." },
              { icon: "🏠", title: "Works on Existing Windows", desc: "No replacement, no construction. We apply the film directly to your existing glass — typically in a single day." },
              { icon: "🎯", title: "Precise Privacy Control", desc: "Choose exactly how much privacy you want — from lightly tinted to fully frosted. We have dozens of options." },
              { icon: "✂️", title: "Custom Cut to Any Shape", desc: "Film can be precision-cut to fit any window, door, or glass partition — including arched and specialty shapes." },
              { icon: "🛡️", title: "Lifetime Residential Warranty", desc: "Every CoolVu installation on a Long Island home comes backed by our lifetime residential warranty." },
            ].map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Serving All of Long Island</h2>
          <p className="text-gray-600 mb-6 text-lg">CoolVu of Long Island installs privacy window film throughout Nassau and Suffolk County.</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Westbury · Garden City · Mineola · Hempstead · Valley Stream · Lynbrook · Rockville Centre · Long Beach · Oceanside · Freeport · Merrick · Bellmore · Wantagh · Seaford · Massapequa · Hicksville · Syosset · Plainview · Woodbury · Huntington · Commack · Smithtown · Hauppauge · Ronkonkoma · Patchogue · Bay Shore · Islip · Amityville · Babylon · Farmingdale · Great Neck · Manhasset · Port Washington · Roslyn · Glen Cove · Oyster Bay · Cold Spring Harbor · Northport · Dix Hills · Melville · East Meadow · Levittown · Bethpage · Jericho · Centerport
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Common Questions About Privacy Window Film</h2>
          <div className="space-y-6">
            {[
              { q: "Does one-way mirror film work at night?", a: "One-way mirror film works based on the light difference between inside and outside. During the day, outside is brighter so people see a mirror. At night when your lights are on inside, visibility reverses. For nighttime privacy, frosted film is the better choice." },
              { q: "Can privacy film be removed?", a: "Yes. Window film is removable without damaging the glass. This makes it a great option for renters or businesses that may want to change their look down the road." },
              { q: "How long does privacy film installation take?", a: "Most residential privacy film jobs take 2–4 hours. Commercial projects vary by scope. We're typically in and out in a single day." },
              { q: "Will frosted film look cheap or DIY?", a: "No. Professionally installed frosted film looks identical to etched or sandblasted glass. The key is professional installation — no bubbles, perfect edges, precision cut to your window dimensions." },
              { q: "Can I get privacy film on my bathroom windows?", a: "Absolutely — this is one of our most popular residential applications. Frosted film on bathroom windows provides complete privacy while still allowing light in." },
              { q: "How much does privacy window film cost?", a: "Privacy film typically ranges from $8–$18 per square foot installed, depending on the film type and window size. CoolVu offers free in-home estimates for exact pricing." },
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
          <h2 className="text-3xl font-bold mb-4">Get Privacy Without Losing Your View</h2>
          <p className="text-gray-300 mb-8 text-lg">Free in-home estimates. Same-week availability. All of Nassau and Suffolk County.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5165359555" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">Call 516-535-9555</a>
            <ContactModalWrapper>
              <button className="bg-white text-[#1a1a2e] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors">Request Free Estimate</button>
            </ContactModalWrapper>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Does one-way mirror film work at night?", acceptedAnswer: { "@type": "Answer", text: "One-way mirror film works based on light difference. During the day outside is brighter so people see a mirror. At night when your lights are on, visibility reverses. For nighttime privacy, frosted film is better." } },
          { "@type": "Question", name: "Can privacy film be removed?", acceptedAnswer: { "@type": "Answer", text: "Yes. Window film is removable without damaging the glass." } },
          { "@type": "Question", name: "How much does privacy window film cost?", acceptedAnswer: { "@type": "Answer", text: "Privacy film typically ranges from $8–$18 per square foot installed. CoolVu offers free in-home estimates." } },
        ]
      })}} />
    </main>
  );
}
