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
      <div className="flex h-screen h-[100dvh] w-full flex-col p-2 md:p-3 lg:p-4">
        {/* Frame Container */}
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-coolvu-dark-blue text-white shadow-2xl md:rounded-3xl">
          {/* Navbar — above hero overlay so logo/controls are never covered */}
          <Navbar isTransparent={true} />

          {/* Hero Content: outer padding clears navbar+logo; inner flex-1 centers only in space below that */}
          <div className="absolute inset-0 z-10 flex flex-col px-6 pb-8 pt-24 text-left sm:pt-28 md:px-16 md:pb-12 md:pt-32 lg:pt-36">
            {/* Background Video with Overlay */}
            <div className="absolute inset-0 z-[-1] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-center"
              >
                <source src="/Waves_crashing_shore,_202604090117.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative flex min-h-0 flex-1 flex-col justify-center py-6 sm:py-8">
              <div className="mx-auto flex w-full max-w-7xl flex-col items-start px-4">
                <BlurText
                  text="Premium Window Film & Surface Solutions"
                  as="h1"
                  className="mb-3 max-w-4xl font-heading text-3xl font-bold uppercase leading-tight tracking-wide text-white drop-shadow-md sm:text-4xl md:mb-4 md:text-6xl lg:text-7xl"
                />

                {/* Below headline so it does not sit in the logo / tagline band */}
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
                  text="Enhance Security, Comfort & Lower Energy Costs on Long Island for Residential, Commercial, Educational, Healthcare & Government Facilities"
                  as="p"
                  className="mb-6 max-w-3xl text-left font-sans text-base font-medium text-coolvu-light-blue drop-shadow-sm sm:text-lg md:mb-8 md:text-2xl"
                  delay={80}
                />
                <AnimatedButton
                  href="?contact=true"
                  className="rounded-xl border-none bg-coolvu-medium-blue px-6 py-3 font-sans text-xs font-bold uppercase tracking-wider text-coolvu-off-white shadow-lg transition-colors hover:bg-coolvu-light-blue md:px-8 md:py-4 md:text-sm"
                >
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
