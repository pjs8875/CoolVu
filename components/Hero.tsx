"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

import { BlurText } from "@/components/ui/blur-text";

import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative bg-coolvu-off-white">
      {/* Container */}
      <div className="h-screen h-[100dvh] w-full p-2 md:p-3 lg:p-4 flex flex-col">
        {/* Frame Container */}
        <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-coolvu-dark-blue text-white shadow-2xl">
        
        {/* Navbar — above hero overlay so logo/controls are never covered */}
        <Navbar isTransparent={true} />

        {/* Hero Content: outer padding clears navbar+logo; inner flex-1 centers only in space below that (no pull-up on md+) */}
        <div className="absolute inset-0 z-10 flex flex-col px-6 pb-8 pt-24 text-left sm:pt-28 md:px-16 md:pb-12 md:pt-32 lg:pt-36">
          {/* Background Video with Overlay */}
          <div className="absolute inset-0 z-[-1] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-center"
            >
              <source src="/Waves_crashing_shore,_202604090117.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative flex min-h-0 flex-1 flex-col justify-center py-6 sm:py-8">
          <div className="max-w-7xl w-full mx-auto flex flex-col items-start px-4">
            <BlurText 
              text="Premium Window Film & Surface Solutions"
              as="h1"
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-3 md:mb-4 text-white drop-shadow-md uppercase tracking-wide max-w-4xl"
            />

            {/* Below headline so it never sits in the logo / tagline band */}
            <div className="mb-6 inline-flex w-fit max-w-full shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 shadow-lg backdrop-blur-md sm:gap-3 sm:px-4">
              <Image 
                src="/google-logo.png" 
                alt="Google" 
                width={20} 
                height={20} 
                className="h-5 w-5 shrink-0 object-contain"
              />
              <div className="flex shrink-0 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              <span className="whitespace-nowrap font-sans text-sm font-medium tracking-wide text-white">
                5.0 Stars
              </span>
            </div>

            <BlurText 
              text="Enhance Security, Comfort & Lower Energy Costs for Residential, Commercial, Educational, Healthcare & Government Facilities"
              as="p"
              className="text-base sm:text-lg md:text-2xl font-sans text-coolvu-light-blue max-w-3xl text-left mb-6 md:mb-8 drop-shadow-sm font-medium"
              delay={80}
            />
            <AnimatedButton href="?contact=true" className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
              Get Your Free Estimate
            </AnimatedButton>
          </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
