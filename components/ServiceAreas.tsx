"use client";

import Image from "next/image";
import { BlurText } from "@/components/ui/blur-text";

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
        </div>

      </div>
    </section>
  );
}
