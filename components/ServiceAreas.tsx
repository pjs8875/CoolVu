"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { BlurText } from "@/components/ui/blur-text";

const localAreas = [
  { name: "Brooklyn", slug: "brooklyn", x: 80, y: 170, align: "bottom" },
  { name: "Queens", slug: "queens", x: 110, y: 130, align: "top" },
  { name: "Hempstead", slug: "hempstead", x: 190, y: 160, align: "top" },
  { name: "Oyster Bay", slug: "oyster-bay", x: 280, y: 90, align: "top" },
  { name: "Huntington", slug: "huntington", x: 360, y: 95, align: "top" },
  { name: "Babylon", slug: "babylon", x: 390, y: 190, align: "bottom" },
  { name: "Islip", slug: "islip", x: 480, y: 185, align: "bottom" },
  { name: "Smithtown", slug: "smithtown", x: 490, y: 105, align: "top" },
];

function MapPin({ 
  area, 
  index, 
  total, 
  scrollYProgress 
}: { 
  area: any, 
  index: number, 
  total: number, 
  scrollYProgress: MotionValue<number> 
}) {
  // Pins start appearing after the map draws (0.3)
  const start = 0.3 + (index * (0.6 / total));
  const end = start + (0.4 / total); // animate in quickly
  
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [20, 0]);

  return (
    <div 
      className="absolute z-20"
      style={{ 
        left: `${(area.x / 1000) * 100}%`, 
        top: `${(area.y / 300) * 100}%` 
      }}
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      >
        <Link href={`/locations/${area.slug}`} className="group relative flex items-center justify-center">
          {/* Pin Point */}
          <div className="w-3 h-3 md:w-4 md:h-4 bg-coolvu-medium-blue rounded-full shadow-[0_0_15px_rgba(0,123,255,0.8)] border-2 border-white group-hover:scale-125 transition-transform" />
          
          {/* Label */}
          <span className={`absolute whitespace-nowrap text-white font-sans text-[10px] md:text-sm font-bold tracking-wide group-hover:text-coolvu-medium-blue transition-colors ${
            area.align === 'top' ? 'bottom-full mb-1.5 md:mb-2' :
            area.align === 'bottom' ? 'top-full mt-1.5 md:mt-2' :
            area.align === 'left' ? 'right-full mr-1.5 md:mr-2' :
            'left-full ml-1.5 md:ml-2'
          }`}>
            {area.name}
          </span>
        </Link>
      </motion.div>
    </div>
  );
}

export default function ServiceAreas() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map drawing animation
  const pathLength = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section ref={containerRef} id="locations" className="h-[400vh] bg-coolvu-dark-blue relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
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
              text="CoolVu of Long Island proudly serves the greater NY Metro area. Scroll to explore our service regions."
              as="p"
              className="text-sm md:text-lg text-coolvu-light-blue font-sans leading-relaxed"
              delay={80}
            />
          </div>

          {/* Map Container */}
          <div className="relative w-full max-w-5xl aspect-[2/1] md:aspect-[3/1] mt-4 md:mt-10">
            <motion.svg 
              viewBox="0 0 1000 300" 
              className="w-full h-full drop-shadow-[0_0_20px_rgba(96,165,250,0.2)]"
              style={{ opacity: mapOpacity }}
            >
              {/* Stylized Long Island Path */}
              <motion.path 
                d="M 50 180 C 50 140, 80 120, 120 120 C 160 120, 180 80, 220 80 C 300 80, 400 100, 600 100 C 700 100, 850 80, 950 60 C 970 55, 960 70, 940 75 C 900 80, 800 110, 750 120 C 800 130, 900 140, 980 150 C 990 155, 980 165, 950 165 C 850 165, 750 170, 600 180 C 400 200, 250 210, 150 200 C 100 190, 60 190, 50 180 Z"
                stroke="#60A5FA"
                strokeWidth="4"
                fill="rgba(96, 165, 250, 0.1)"
                style={{ pathLength }}
              />
            </motion.svg>

            {/* Location Pins */}
            {localAreas.map((area, index) => (
              <MapPin 
                key={index} 
                area={area} 
                index={index} 
                total={localAreas.length} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}