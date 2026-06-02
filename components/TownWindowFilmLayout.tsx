"use client";
import React from "react";
import ContactModalWrapper from "@/components/ContactModalWrapper";

interface TownData {
  county: string;
  tagline: string;
  housingContext: string;
  nearbyTowns: string;
  solarNote: string;
  safetyNote: string;
}

const TOWN_DATA: Record<string, TownData> = {
  "Garden City": {
    county: "Nassau County",
    tagline: "Garden City homes are known for their elegant architecture and large windows — exactly where professional window film makes the biggest difference.",
    housingContext: "Garden City's classic colonials, cape cods, and newer construction all face the same challenge: south- and west-facing glass that turns living rooms into ovens every summer.",
    nearbyTowns: "Mineola · Hempstead · East Garden City · New Hyde Park · Carle Place · Westbury · Garden City South",
    solarNote: "Garden City sits in a south-facing pocket that gets intense afternoon sun — solar film cuts that heat by up to 63% without changing how your home looks.",
    safetyNote: "Even in Garden City, storm prep matters. Nor'easters hit Nassau County hard, and safety film keeps your glass in one piece.",
  },
  "Great Neck": {
    county: "Nassau County",
    tagline: "Great Neck's waterfront views and large glass surfaces deserve protection — not blackout curtains.",
    housingContext: "Great Neck homes along the Sound have spectacular views and equally spectacular sun exposure. Solar film blocks the heat without blocking the water view.",
    nearbyTowns: "Kings Point · Great Neck Estates · Lake Success · Manhasset · Port Washington · Sands Point · Little Neck",
    solarNote: "North Shore waterfront properties face intense glare off the Long Island Sound. Solar film eliminates that glare while keeping your view crystal clear.",
    safetyNote: "Great Neck's coastal location means wind and storm exposure. Security film holds your glass together during nor'easters and summer storms.",
  },
  "Manhasset": {
    county: "Nassau County",
    tagline: "Manhasset's luxury homes demand the best — and the best window film is CoolVu.",
    housingContext: "Manhasset has some of the most valuable residential real estate on Long Island. Protecting those homes with professional-grade window film is an investment that pays back every summer.",
    nearbyTowns: "Great Neck · Port Washington · Roslyn · Roslyn Heights · New Hyde Park · Lake Success · Albertson",
    solarNote: "Large floor-to-ceiling windows in Manhasset's luxury homes are beautiful — until July, when your AC runs constantly. Solar film blocks up to 63% of heat at the glass.",
    safetyNote: "Manhasset's historic homes often have original single-pane glass. Safety film adds a critical layer of protection without replacing irreplaceable windows.",
  },
  "Rockville Centre": {
    county: "Nassau County",
    tagline: "Rockville Centre's charming Victorian and colonial homes deserve windows that work as hard as their owners.",
    housingContext: "Rockville Centre is one of Long Island's most walkable villages, with classic architecture and a mix of Victorian, colonial, and cape cod homes — many with large south-facing windows.",
    nearbyTowns: "Lynbrook · Valley Stream · Oceanside · Malverne · Baldwin · Freeport · Merrick",
    solarNote: "Rockville Centre's older homes lose enormous amounts of energy through glass. Solar film is the fastest, most cost-effective upgrade you can make.",
    safetyNote: "During South Shore storms and coastal flooding events, safety film keeps your windows intact and your home protected.",
  },
  "Massapequa": {
    county: "Nassau County",
    tagline: "Massapequa families know Long Island summers — solar film turns your hottest rooms into cool, comfortable spaces.",
    housingContext: "Massapequa's large ranch homes and split-levels are built for families — which means lots of glass, lots of sun exposure, and sky-high summer cooling bills.",
    nearbyTowns: "Massapequa Park · Seaford · Wantagh · Amityville · Copiague · Bethpage · Farmingdale",
    solarNote: "Massapequa's South Shore location means full afternoon sun. Solar film blocks up to 63% of that heat before it enters your home — and your PSEG bill will show it.",
    safetyNote: "Massapequa sits close to Great South Bay and experiences serious nor'easter exposure. Safety film holds your windows together when storms hit.",
  },
  "Levittown": {
    county: "Nassau County",
    tagline: "Levittown was built for families. Solar window film keeps those homes cooler, more efficient, and more comfortable for the next generation.",
    housingContext: "Levittown's iconic Cape Cod homes have been renovated and expanded for decades — but the windows still let in every bit of Long Island summer heat. Solar film is the modern upgrade these classic homes need.",
    nearbyTowns: "Hicksville · Bethpage · Wantagh · East Meadow · Westbury · Farmingdale · Old Bethpage",
    solarNote: "Levittown's original cape cods and expanded ranches face brutal west-afternoon sun. Solar film cuts that solar heat gain by up to 63% — a massive comfort and energy savings upgrade.",
    safetyNote: "Safety film is especially valuable in Levittown's older homes with original single-pane windows, which are far more vulnerable to storm damage.",
  },
  "Commack": {
    county: "Suffolk County",
    tagline: "Commack's upscale homes and newer construction deserve window film that matches the investment.",
    housingContext: "Commack is one of Suffolk County's most sought-after communities, with newer construction featuring large open-plan layouts and expansive glass. That glass needs protection.",
    nearbyTowns: "Kings Park · Hauppauge · Smithtown · Dix Hills · Huntington Station · Deer Park · East Northport",
    solarNote: "Commack's newer homes with open floor plans and large windows are beautiful — but those windows transfer enormous heat in summer. Solar film solves it without touching the architecture.",
    safetyNote: "Suffolk County sees the full force of Long Island's coastal storms. Safety film keeps your large glass panels intact when wind and debris come calling.",
  },
  "East Meadow": {
    county: "Nassau County",
    tagline: "East Meadow homeowners are smart about upgrades — solar window film delivers real, measurable energy savings.",
    housingContext: "East Meadow is one of Nassau County's largest communities, with thousands of ranch homes, split-levels, and colonials that all share the same problem: Long Island summers are getting hotter, and window glass is the weakest link.",
    nearbyTowns: "Uniondale · Levittown · Westbury · Carle Place · Old Bethpage · Mitchel Field · Eisenhower Park",
    solarNote: "East Meadow homes face full sun exposure on south and west elevations. Solar film blocks up to 63% of solar heat — most homeowners feel the difference the same day it's installed.",
    safetyNote: "East Meadow's large family homes benefit enormously from safety film during the storm season that runs from August through November on Long Island.",
  },
  "Plainview": {
    county: "Nassau County",
    tagline: "Plainview's hillside homes get more sun exposure than most — solar film turns that into an advantage.",
    housingContext: "Plainview's elevated terrain and open lots mean homes here get hit from multiple angles by the sun. Large windows — common in Plainview's colonial and ranch homes — amplify the problem.",
    nearbyTowns: "Syosset · Woodbury · Old Bethpage · Hicksville · Bethpage · Jericho · Melville",
    solarNote: "Plainview's elevation gives its homes extra sun exposure on all sides. Solar film protects against heat and UV from every angle — blocking 99% of UV rays and up to 63% of solar heat.",
    safetyNote: "Plainview's mid-Nassau location puts it squarely in the path of nor'easters. Safety film adds storm protection to every window, without replacing the glass.",
  },
  "Southampton": {
    county: "Suffolk County",
    tagline: "Southampton's luxury estates and oceanfront homes deserve window film that protects priceless interiors without sacrificing those views.",
    housingContext: "Southampton is home to some of the most valuable residential real estate in New York State. Floor-to-ceiling glass, oceanfront exposures, and designer interiors make professional window film not just a comfort upgrade — it's asset protection.",
    nearbyTowns: "Water Mill · Bridgehampton · Sagaponack · Shinnecock Hills · Hampton Bays · Westhampton Beach · Quogue",
    solarNote: "Southampton's oceanfront and bay-facing homes get relentless sun from multiple directions. Solar film blocks up to 63% of heat while keeping your ocean views crystal clear — no dark tint, no obstructed view.",
    safetyNote: "Southampton sits directly in the path of Atlantic hurricanes and nor'easters. Safety film holds your windows together during storm events, protecting the people and possessions inside.",
  },
  "East Hampton": {
    county: "Suffolk County",
    tagline: "East Hampton's iconic homes and world-class art collections need serious UV protection — and solar film delivers it invisibly.",
    housingContext: "East Hampton's most sought-after properties feature spectacular glass walls and views. They also face intense UV exposure that fades hardwood floors, damages artwork, and drives up cooling costs. Professional window film solves all three without changing the look of your home.",
    nearbyTowns: "Amagansett · Springs · Wainscott · Bridgehampton · Sag Harbor · Montauk · Shelter Island",
    solarNote: "East Hampton's high-end homes often feature original art, custom rugs, and designer furniture worth hundreds of thousands of dollars. Solar film blocks 99% of UV rays — the #1 cause of fading — and up to 63% of solar heat.",
    safetyNote: "East Hampton's proximity to the Atlantic makes it one of Long Island's most hurricane-exposed communities. Safety film keeps glass intact when storms arrive, protecting irreplaceable interiors.",
  },
  "Westhampton Beach": {
    county: "Suffolk County",
    tagline: "Westhampton Beach homeowners know what ocean exposure does to a home — solar film is the smart defense.",
    housingContext: "Westhampton Beach sits right on the Atlantic barrier beach, with homes that get maximum sun, salt air exposure, and storm risk. Solar and safety film are among the most practical upgrades any Westhampton homeowner can make.",
    nearbyTowns: "Quogue · East Quogue · Hampton Bays · Remsenburg · Eastport · Mastic Beach · Center Moriches",
    solarNote: "Westhampton Beach homes face direct ocean sun from the south and southeast. Solar film blocks up to 63% of that heat at the glass level — before it enters your home — cutting cooling costs dramatically.",
    safetyNote: "Westhampton Beach was badly hit by Hurricane Sandy in 2012. Safety film holds glass together when Atlantic storms strike, protecting your home and family.",
  },
  "Montauk": {
    county: "Suffolk County",
    tagline: "Montauk's dramatic oceanfront setting is beautiful — and brutal on glass. Solar film protects your views and your investment.",
    housingContext: "Montauk sits at the very tip of Long Island, fully exposed to the Atlantic Ocean. Homes here face extreme UV exposure, intense heat from multiple angles, and direct storm risk. Solar film is one of the most effective upgrades a Montauk homeowner can make.",
    nearbyTowns: "Amagansett · East Hampton · Springs · Shelter Island · Sag Harbor · East Moriches · Greenport",
    solarNote: "Montauk's oceanfront homes get hit by sun from sunrise to sunset with nothing blocking it. Solar film blocks 99% of UV rays and up to 63% of solar heat — keeping interiors cool, furniture protected, and views completely unobstructed.",
    safetyNote: "Montauk is the most storm-exposed community on Long Island. Safety film is essential — it holds glass together during the coastal storms and hurricanes that regularly impact the East End.",
  },
  "Syosset": {
    county: "Nassau County",
    tagline: "Syosset homeowners invest in their homes — solar window film is one of the smartest investments you can make.",
    housingContext: "Syosset's luxury market includes some of the most valuable homes in Nassau County, with modern construction featuring lots of glass. That glass is the #1 source of summer heat gain and UV damage.",
    nearbyTowns: "Woodbury · Plainview · Jericho · Cold Spring Harbor · Oyster Bay · Muttontown · Brookville",
    solarNote: "In Syosset's premium homes, UV damage to hardwood floors, artwork, and designer furniture is a real concern. Solar film blocks 99% of UV rays while maintaining the look of your windows.",
    safetyNote: "Syosset's high-value homes deserve professional-grade safety film. It holds glass together during storms and deters smash-and-grab break-ins.",
  },
};

function getTownData(city: string): TownData {
  return TOWN_DATA[city] || {
    county: "Nassau or Suffolk County",
    tagline: `${city} homeowners trust CoolVu of Long Island for professional window film installation.`,
    housingContext: `${city} homes and businesses face Long Island's intense summer heat and UV exposure. Professional window film is the smart, cost-effective solution.`,
    nearbyTowns: "Nassau County · Suffolk County · Long Island",
    solarNote: "Solar film blocks up to 63% of solar heat and 99% of UV rays, dramatically lowering summer cooling costs.",
    safetyNote: "Safety film holds glass together during Long Island's nor'easters, hurricanes, and coastal storms.",
  };
}

export default function TownWindowFilmLayout({ city }: { city: string }) {
  const d = getTownData(city);
  const slug = city.toLowerCase().replace(/\s+/g, "-");
  const pageUrl = `https://www.coolvulongisland.com/locations/${slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: `How much does window film cost in ${city}, NY?`, acceptedAnswer: { "@type": "Answer", text: `Most residential window film projects in ${city} range from $8–$15 per square foot installed, depending on the film type and number of windows. CoolVu of Long Island offers free in-home estimates with no obligation. Call 516-535-9555.` } },
      { "@type": "Question", name: `Does CoolVu install window film in ${city}, Long Island?`, acceptedAnswer: { "@type": "Answer", text: `Yes. CoolVu of Long Island serves all of ${city} and surrounding ${d.county} communities. We install solar, privacy, decorative, and safety/security window film with same-week availability and a lifetime residential warranty.` } },
      { "@type": "Question", name: `What is the best window film for ${city} homes?`, acceptedAnswer: { "@type": "Answer", text: `For most ${city} homes, solar/heat-reduction film delivers the fastest return on investment by cutting summer cooling costs. CoolVu will recommend the right film after a free in-home assessment of your windows, orientation, and goals.` } },
      { "@type": "Question", name: `How long does window film installation take in ${city}?`, acceptedAnswer: { "@type": "Answer", text: `Most ${city} residential installations are completed in a single day. CoolVu's certified installers work efficiently and clean up completely before leaving. Same-week appointments are usually available throughout ${d.county}.` } },
    ],
  };

  const bizSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CoolVu of Long Island",
    description: `Window film installer serving ${city} and all of ${d.county}. Solar, privacy, decorative, and safety film. Lifetime residential warranty. Free estimates.`,
    telephone: "+15165359555",
    url: "https://www.coolvulongisland.com",
    address: { "@type": "PostalAddress", addressLocality: "Westbury", addressRegion: "NY", addressCountry: "US" },
    areaServed: `${city}, ${d.county}, Long Island, NY`,
  };

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-8">
            <p className="text-sm uppercase tracking-widest text-blue-300 mb-2">Serving {city}, {d.county}</p>
            <p className="text-lg leading-relaxed font-semibold">{d.tagline}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Window Film in {city}, NY</h1>
          <p className="text-xl text-gray-300 mb-8">Solar, privacy, decorative, and safety/security window film — professionally installed throughout {city} and {d.county}. Free estimates. Lifetime residential warranty.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5165359555" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center">Call 516-535-9555</a>
            <ContactModalWrapper>
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors border border-white/30">Get a Free Estimate</button>
            </ContactModalWrapper>
          </div>
        </div>
      </section>

      {/* Why window film for this town */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why {city} Homeowners Choose Window Film</h2>
          <p className="text-lg text-gray-700 mb-6">{d.housingContext}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: `Solar Heat Reduction in ${city}`, desc: d.solarNote, icon: "☀️" },
              { title: `Safety Film for ${city} Homes`, desc: d.safetyNote, icon: "🛡️" },
              { title: "Privacy Film", desc: `Privacy film lets you see out but nobody can see in — perfect for ${city} homes on busy streets, near neighbors, or with street-level windows.`, icon: "👁️" },
              { title: "Decorative Film", desc: `Transform plain glass into frosted, patterned, or branded designs. Popular for ${city} home offices, bathrooms, and front doors.`, icon: "✨" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Every {city} Install Includes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Free In-Home Estimate", desc: "We come to your home, assess your windows, and give you an exact price — no surprises." },
              { title: "Same-Week Installation", desc: "Most projects in " + city + " are booked within days, not weeks." },
              { title: "Lifetime Residential Warranty", desc: "Every residential installation comes with a lifetime warranty. If the film fails, we fix it." },
              { title: "Certified Installers", desc: "Our team is trained and certified — clean edges, no bubbles, professional finish every time." },
              { title: "All 4 Film Types", desc: "Solar, privacy, decorative, or safety film — one contractor, one call." },
              { title: "Nassau County Recognized", desc: "Paul and Claire Silverman are recognized by the Nassau County Advisory Board as Top Gun Professional Business." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started in {city}?</h2>
          <p className="text-blue-100 mb-8 text-lg">Free in-home estimate. No obligation. Same-week availability throughout {d.county}.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5165359555" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition-colors">Call 516-535-9555</a>
            <ContactModalWrapper>
              <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">Request Free Estimate</button>
            </ContactModalWrapper>
          </div>
        </div>
      </section>

      {/* Nearby towns */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Also Serving Communities Near {city}</h2>
          <p className="text-sm text-gray-500 leading-relaxed">{d.nearbyTowns}</p>
          <p className="text-sm text-gray-500 mt-4">
            Westbury · Garden City · Mineola · Hempstead · Valley Stream · Rockville Centre · Long Beach · Oceanside · Freeport · Merrick · Bellmore · Wantagh · Seaford · Massapequa · Hicksville · Syosset · Plainview · Woodbury · Huntington · Commack · Smithtown · Hauppauge · Ronkonkoma · Patchogue · Bay Shore · Islip · Babylon · Farmingdale · Great Neck · Manhasset · Port Washington · Roslyn
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bizSchema) }}
      />
    </main>
  );
}
