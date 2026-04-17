"use client";

import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";
import { BlurText } from "@/components/ui/blur-text";

const markets = [
  {
    title: "Residential",
    description: "Keep your home cool, protect furnishings from fading, and enhance privacy without losing your view.",
    path: "/markets/residential"
  },
  {
    title: "Commercial",
    description: "Lower HVAC costs, reduce screen glare for employees, and update interiors with architectural finishes.",
    path: "/markets/commercial"
  },
  {
    title: "Educational",
    description: "Protect students and staff with DefenseLite and ballistic-resistant security films.",
    path: "/markets/educational"
  },
  {
    title: "Energy",
    description: "Optimize building energy efficiency by rejecting solar heat and insulating against winter heat loss.",
    path: "/markets/energy"
  },
  {
    title: "FEMA",
    description: "Meet stringent safety requirements with specialized security films designed to mitigate blast and windstorm hazards.",
    path: "/markets/fema"
  },
  {
    title: "Government & Healthcare",
    description: "Fortify municipal facilities and ensure patient privacy with specialized security and anti-microbial window films.",
    path: "/markets/government"
  },
  {
    title: "Places of Worship",
    description: "Protect historic stained glass, enhance security, and improve comfort for your congregation.",
    path: "/markets/places-of-worship"
  },
  {
    title: "Retail",
    description: "Attract customers with custom window graphics while protecting merchandise from UV damage.",
    path: "/markets/retail"
  },
  {
    title: "Data Centers",
    description: "Maintain critical temperature control and obscure sensitive equipment from outside view with specialized cloaking films.",
    path: "/markets/data-centers"
  }
];

export default function MarketsServed() {
  return (
    <section id="markets" className="py-16 md:py-24 bg-coolvu-dark-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurText 
            text="Long Island Solutions for Every Industry"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 justify-center"
          />
          <BlurText 
            text="From single-family homes to corporate campuses, CoolVu of Long Island provides tailored window and surface solutions that solve your specific challenges."
            as="p"
            className="text-base md:text-lg text-coolvu-light-blue font-sans justify-center"
            delay={80}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-20">
          {markets.map((market, index) => (
            <div 
              key={index} 
              className="border-t-2 border-coolvu-medium-blue pt-6 flex flex-col"
            >
              <h3 className="text-2xl font-bold font-heading text-white mb-4">
                {market.title}
              </h3>
              <p className="text-gray-300 font-sans text-base leading-relaxed mb-6 flex-grow">
                {market.description}
              </p>
              <Link 
                href={market.path} 
                className="inline-flex items-center text-coolvu-light-blue font-sans font-bold text-sm uppercase tracking-wider hover:text-white transition-colors group"
              >
                Learn More 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <AnimatedButton href="?contact=true" className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-8 py-4 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
            Discuss Your Project
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
