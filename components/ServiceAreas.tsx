"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurText } from "@/components/ui/blur-text";

const localAreas = [
  { name: "Brooklyn", slug: "brooklyn", x: 7, y: 62, align: "left" },
  { name: "Queens", slug: "queens", x: 12, y: 48, align: "top" },
  { name: "Hempstead", slug: "hempstead", x: 22, y: 58, align: "bottom" },
  { name: "Oyster Bay", slug: "oyster-bay", x: 30, y: 42, align: "top" },
  { name: "Huntington", slug: "huntington", x: 38, y: 40, align: "top" },
  { name: "Babylon", slug: "babylon", x: 38, y: 62, align: "bottom" },
  { name: "Islip", slug: "islip", x: 48, y: 58, align: "bottom" },
  { name: "Smithtown", slug: "smithtown", x: 50, y: 38, align: "top" },
];

export default function ServiceAreas() {
  return (
    <section id="locations" className="py-20 md:py-32 bg-coolvu-dark-blue relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: "radial-gradient(#60A5FA 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }}></div>

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
        <div className="relative w-full max-w-5xl mt-4 md:mt-10">
          <Image 
            src="/long-island-map.png"
            alt="Long Island Map"
            width={1000}
            height={850}
            className="w-full h-auto opacity-60 brightness-150 invert drop-shadow-[0_0_30px_rgba(96,165,250,0.3)]"
          />

          {/* Location Pins */}
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
                <Link href={`/locations/${area.slug}`} className="group relative flex items-center justify-center">
                  {/* Pin Pulse */}
                  <div className="absolute w-6 h-6 md:w-8 md:h-8 bg-coolvu-medium-blue/30 rounded-full animate-ping" />
                  {/* Pin Point */}
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-coolvu-medium-blue rounded-full shadow-[0_0_15px_rgba(0,123,255,0.8)] border-2 border-white group-hover:scale-150 transition-transform relative z-10" />
                  
                  {/* Label */}
                  <span className={`absolute whitespace-nowrap text-white font-sans text-[10px] md:text-sm font-bold tracking-wide group-hover:text-coolvu-medium-blue transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] ${
                    area.align === 'top' ? 'bottom-full mb-2 md:mb-3' :
                    area.align === 'bottom' ? 'top-full mt-2 md:mt-3' :
                    area.align === 'left' ? 'right-full mr-2 md:mr-3' :
                    'left-full ml-2 md:ml-3'
                  }`}>
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
