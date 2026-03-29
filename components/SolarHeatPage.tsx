"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export default function SolarHeatPage() {
  const images = [
    "/solar-heat/1.png",
    "/solar-heat/2.png",
    "/solar-heat/3.png",
    "/solar-heat/4.png",
    "/solar-heat/5.png",
    "/solar-heat/6.png",
    "/solar-heat/7.png",
    "/solar-heat/8.png",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <Link 
            href="/#solutions"
            className="inline-flex items-center gap-2 text-coolvu-dark-blue hover:text-coolvu-medium-blue transition-colors font-sans font-bold text-sm uppercase tracking-wider mb-12"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>

          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-coolvu-dark-blue mb-6 leading-tight">
                Solar & Heat Reduction
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-sans mb-8 leading-relaxed">
                Excessive sunlight can make your home or business uncomfortable, drive up energy costs, and cause your valuable furnishings to fade. Our premium 3M™ solar window films block up to 63% of solar heat and reject 99% of harmful UV rays, all while letting natural light pour in.
              </p>
              <p className="text-base md:text-lg text-gray-600 font-sans mb-10 leading-relaxed">
                Keep your view, lose the heat, and start saving on cooling costs today with a professional installation backed by a lifetime warranty.
              </p>
              
              <AnimatedButton href="/#contact-form" className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
                Get Your Free Estimate
              </AnimatedButton>
            </div>

            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={images[0]} 
                alt="Solar Window Film Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtypes Section */}
      <div className="py-20 md:py-32 bg-coolvu-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-10 text-center">
            Our Solar & Heat Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-white mb-4">Anti-Glare & Fade Protection</h3>
              <p className="text-coolvu-light-blue font-sans text-sm leading-relaxed">
                Block harsh glare without losing your view. Our films reject 99.9% of UV rays, dramatically slowing the fading of your hardwood floors, artwork, and expensive furniture.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-white mb-4">Transitional Window Film</h3>
              <p className="text-coolvu-light-blue font-sans text-sm leading-relaxed">
                Smart film that dynamically adapts to the sun. It remains clear on cloudy days and automatically darkens when exposed to direct sunlight to maximize comfort and energy savings.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-white mb-4">Energy Efficiency Tinting</h3>
              <p className="text-coolvu-light-blue font-sans text-sm leading-relaxed">
                Significantly reduce your HVAC load by blocking up to 63% of solar heat gain. An environmentally friendly upgrade that pays for itself through lower energy bills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 md:py-32 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-coolvu-dark-blue mb-8 text-center">
            Recent Projects
          </h2>
          <div className="columns-2 md:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
            {images.slice(1).map((src, index) => (
              <div key={index} className="break-inside-avoid relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg group">
                <Image 
                  src={src} 
                  alt={`Solar Heat Reduction Project ${index + 2}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}