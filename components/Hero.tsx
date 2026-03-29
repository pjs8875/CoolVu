"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative bg-coolvu-off-white">
      {/* Container */}
      <div className="h-[100dvh] w-full p-2 md:p-3 lg:p-4 flex flex-col">
        {/* Frame Container */}
        <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-coolvu-dark-blue text-white shadow-2xl">
        
        {/* Navbar */}
        <Navbar isTransparent={true} />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 md:p-16 text-center">
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
              Commercial & Residential
            </h1>
            <p className="text-base sm:text-lg md:text-2xl font-sans text-coolvu-light-blue max-w-3xl text-center mb-6 md:mb-8 drop-shadow-sm font-medium">
              Enhance Security, Comfort & Lower Energy Costs
            </p>
            <AnimatedButton href="/#contact-form" className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
              Get Your Free Estimate
            </AnimatedButton>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}