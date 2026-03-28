"use client";

import { useRef } from "react";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Increased height to 350vh to make the scroll distance longer,
    // which naturally slows down the animation.
    offset: ["start start", "end end"],
  });

  const easeInOut = cubicBezier(0.65, 0, 0.35, 1);

  // We reverse the order: Commercial is now on top and slides away, Residential is underneath.
  
  // The residential image starts still, underneath the commercial one.
  const residentialX = "0%";

  // The commercial image starts on top and slides left.
  const commercialX = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.85, 1], 
    ["0%", "0%", "-100%", "-100%"],
    { clamp: true, ease: easeInOut } 
  );

  return (
    <section ref={containerRef} className="h-[350vh] relative bg-coolvu-off-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-[100dvh] w-full p-2 md:p-3 lg:p-4 flex flex-col">
        {/* Frame Container */}
        <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-coolvu-dark-blue text-white shadow-2xl">
        
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-6 bg-transparent text-white">
          <div className="flex items-center w-32 md:w-auto">
            <Image 
              src="/logo.png" 
              alt="CoolVu Logo" 
              width={180} 
              height={60} 
              className="object-contain w-full h-auto"
              priority
            />
          </div>
          <div className="hidden lg:flex items-center gap-8 font-sans font-medium text-sm tracking-widest uppercase">
            <Link href="#solutions" className="hover:text-coolvu-medium-blue transition-colors">Solutions</Link>
            <Link href="#commercial" className="hover:text-coolvu-medium-blue transition-colors">Commercial</Link>
            <Link href="#residential" className="hover:text-coolvu-medium-blue transition-colors">Residential</Link>
            <Link href="#about" className="hover:text-coolvu-medium-blue transition-colors">About Us</Link>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <a href="tel:516-535-9555" className="flex items-center gap-2 font-sans font-medium hover:text-coolvu-medium-blue transition-colors">
              <Phone size={18} />
              <span className="hidden sm:inline">516-535-9555</span>
            </a>
            <button className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-dark-blue px-3 py-2 md:px-6 md:py-3 font-sans font-bold text-[10px] md:text-sm tracking-wider uppercase transition-colors rounded-lg whitespace-nowrap">
              Free Estimate
            </button>
          </div>
        </nav>

        {/* Top Layer (Slides Away) */}
        <motion.div 
          className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 md:p-16 text-center"
          style={{ x: commercialX }}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-[-1] bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/hero/commercial.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="max-w-5xl mx-auto flex flex-col items-center mt-20 md:mt-0 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-3 md:mb-4 text-white drop-shadow-md uppercase tracking-wide">
              Commercial & Institutional
            </h1>
            <p className="text-base sm:text-lg md:text-2xl font-sans text-coolvu-light-blue max-w-3xl text-center mb-6 md:mb-8 drop-shadow-sm font-medium">
              Enhance Security, Comfort & Lower Energy Costs
            </p>
            <button className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-dark-blue px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg">
              Get Your Free Estimate
            </button>
          </div>
        </motion.div>

        {/* Bottom Layer (Revealed) */}
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 md:p-16 text-center"
          style={{ x: residentialX }}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-[-1] bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/hero/residential.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col items-center mt-20 md:mt-0 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-3 md:mb-4 text-white drop-shadow-md uppercase tracking-wide">
              Residential Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-2xl font-sans text-coolvu-light-blue max-w-3xl text-center mb-6 md:mb-8 drop-shadow-sm font-medium">
              Keep Your Home Cooler Without Replacing Your Windows
            </p>
            <button className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-dark-blue px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg">
              Schedule a Free Consultation
            </button>
          </div>
        </motion.div>

        </div>
      </div>
    </section>
  );
}