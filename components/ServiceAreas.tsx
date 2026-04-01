"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurText } from "@/components/ui/blur-text";

const localAreas = [
  { name: "Brooklyn", slug: "brooklyn", x: 7.5, y: 71.5 },
  { name: "Queens", slug: "queens", x: 16.5, y: 53.5 },
  { name: "Hempstead", slug: "hempstead", x: 30.5, y: 81 },
  { name: "Oyster Bay", slug: "oyster-bay", x: 29.5, y: 39.5 },
  { name: "Huntington", slug: "huntington", x: 40, y: 36 },
  { name: "Babylon", slug: "babylon", x: 45, y: 74 },
  { name: "Islip", slug: "islip", x: 54, y: 69 },
  { name: "Smithtown", slug: "smithtown", x: 47, y: 39 },
];

export default function ServiceAreas() {
  return (
    <section id="locations" className="py-20 md:py-32 bg-coolvu-dark-blue relative overflow-hidden">
      
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <BlurText 
            text="Local Service Areas"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4 md:mb-6 justify-center"
          />
          <BlurText 
            text="CoolVu of Long Island proudly serves the greater NY Metro area."
            as="p"
            className="text-sm md:text-lg text-coolvu-light-blue font-sans leading-relaxed justify-center"
            delay={80}
          />
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-5xl mt-4 md:mt-10 flex justify-center">
          <Image 
            src="/long-island-map-final.png"
            alt="Long Island Map"
            width={1200}
            height={600}
            className="w-full h-auto object-contain pointer-events-none select-none"
            priority
          />

          {/* Interactive Location Pills */}
          {localAreas.map((area, index) => (
            <div 
              key={index}
              className="absolute z-20"
              style={{ 
                left: `${area.x}%`, 
                top: `${area.y}%` 
              }}
            >
              <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                <Link 
                  href={`/locations/${area.slug}`} 
                  className="group relative flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 bg-coolvu-dark-blue border-2 border-white/20 rounded-full shadow-xl hover:bg-coolvu-medium-blue hover:border-white/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300 min-w-[100px] md:min-w-[120px]"
                >
                  <span className="text-white font-sans text-[10px] md:text-sm font-bold tracking-wide">
                    {area.name}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
