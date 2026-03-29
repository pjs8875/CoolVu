"use client";

import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";

const markets = [
  {
    title: "Residential Homes",
    description: "Keep your home cool, protect furnishings from fading, and enhance privacy without losing your view.",
  },
  {
    title: "Commercial Office",
    description: "Lower HVAC costs, reduce screen glare for employees, and update interiors with architectural finishes.",
  },
  {
    title: "Schools & Education",
    description: "Protect students and staff with DefenseLite and ballistic-resistant security films.",
  },
  {
    title: "Retail Storefronts",
    description: "Attract customers with custom window graphics while protecting merchandise from UV damage.",
  },
  {
    title: "Government Buildings",
    description: "Fortify municipal facilities against severe weather, blasts, and forced entry threats.",
  },
  {
    title: "Healthcare",
    description: "Ensure patient privacy and maintain hygienic surfaces with anti-microbial window films.",
  }
];

export default function MarketsServed() {
  return (
    <section id="markets" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-coolvu-dark-blue mb-6">
            Solutions For Every Industry
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-sans">
            From single-family homes to massive corporate campuses, CoolVu provides tailored window and surface solutions that solve your specific challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-20">
          {markets.map((market, index) => (
            <div 
              key={index} 
              className="border-t-2 border-coolvu-medium-blue pt-6"
            >
              <h3 className="text-2xl font-bold font-heading text-coolvu-dark-blue mb-4">
                {market.title}
              </h3>
              <p className="text-gray-600 font-sans text-base leading-relaxed">
                {market.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="#contact-form">
            <AnimatedButton className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-dark-blue px-8 py-4 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
              Discuss Your Project
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
}