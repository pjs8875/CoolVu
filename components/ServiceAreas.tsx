"use client";

import Link from "next/link";

const localAreas = [
  { name: "Hempstead", slug: "hempstead" },
  { name: "Huntington", slug: "huntington" },
  { name: "Oyster Bay", slug: "oyster-bay" },
  { name: "Babylon", slug: "babylon" },
  { name: "Smithtown", slug: "smithtown" },
  { name: "Islip", slug: "islip" },
  { name: "Brookhaven", slug: "brookhaven" },
  { name: "Riverhead", slug: "riverhead" },
  { name: "Long Beach", slug: "long-beach" },
  { name: "Glen Cove", slug: "glen-cove" },
  { name: "Massapequa", slug: "massapequa" },
  { name: "Levittown", slug: "levittown" },
  { name: "Southampton", slug: "southampton" },
  { name: "Queens", slug: "queens" },
  { name: "Brooklyn", slug: "brooklyn" },
];

export default function ServiceAreas() {
  return (
    <section id="locations" className="py-20 md:py-32 bg-coolvu-dark-blue text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: "radial-gradient(#60A5FA 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Local Service Areas
          </h2>
          <p className="text-base md:text-lg text-coolvu-light-blue font-sans leading-relaxed">
            CoolVu of Long Island proudly serves the greater NY Metro area. Find your local community below to learn more about our services near you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {localAreas.map((area, index) => (
            <Link 
              key={index} 
              href={`/locations/${area.slug}`}
              className="bg-white/5 border border-white/10 hover:bg-coolvu-medium-blue hover:border-coolvu-medium-blue transition-all duration-300 rounded-xl p-4 text-center group"
            >
              <span className="font-heading font-bold text-white group-hover:text-white">{area.name}</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}