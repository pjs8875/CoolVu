"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export default function PrivacyFilmPage() {
  const images = [
    "/privacy-film/1.png",
    "/privacy-film/2.png",
    "/privacy-film/3.png",
    "/privacy-film/4.png",
    "/privacy-film/5.png",
    "/privacy-film/6.png",
    "/privacy-film/7.png",
    "/privacy-film/8.png",
    "/privacy-film/9.png",
    "/privacy-film/10.png",
    "/privacy-film/11.png",
    "/privacy-film/12.png",
    "/privacy-film/13.png",
  ];

  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-coolvu-medium-blue rounded-full"></div>
              <span className="text-xs md:text-sm font-sans font-bold tracking-[0.2em] text-coolvu-dark-blue uppercase">
                Service Spotlight
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-coolvu-dark-blue mb-6 leading-tight">
              Privacy & Decorative Film
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-sans mb-8 leading-relaxed">
              Achieve the perfect balance of natural light and privacy without the need for bulky blinds or expensive frosted glass. Our decorative films transform plain glass into stunning architectural features while keeping prying eyes out.
            </p>
            <p className="text-base md:text-lg text-gray-600 font-sans mb-10 leading-relaxed">
              From elegant frosted finishes for bathroom windows to custom-patterned bands for office conference rooms, we offer endless design possibilities. Create private, comfortable spaces that still feel open and bright.
            </p>
            
            <Link href="/#contact-form">
              <AnimatedButton className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
                Get Your Free Estimate
              </AnimatedButton>
            </Link>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={images[3]} // Using one of the nice split-screen or frosted examples as hero
              alt="Privacy and Decorative Window Film"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Subtypes Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-coolvu-dark-blue mb-10 text-center">
            Privacy & Design Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-coolvu-off-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Frosted & Patterned Glass</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Replicate the look of expensive sandblasted or etched glass. Perfect for conference room bands, bathroom windows, and interior partitions where light is needed but privacy is essential.
              </p>
            </div>
            <div className="bg-coolvu-off-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Switchable Smart Glass</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Instantly turn transparent glass into an opaque white wall at the flick of a switch. PDLC film technology provides on-demand privacy, doubling as a projection screen for modern offices.
              </p>
            </div>
            <div className="bg-coolvu-off-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Blackout & Cloaking Films</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Need total light blocking or data protection? Our specialized cloaking films obscure LED screens from outside viewing while leaving the glass transparent, protecting sensitive information.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-coolvu-dark-blue mb-8">
            Recent Privacy & Design Projects
          </h2>
          <div className="columns-2 md:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
            {images.filter((_, i) => i !== 3).map((src, index) => (
              <div key={index} className="break-inside-avoid relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg group">
                <Image 
                  src={src} 
                  alt={`Privacy Film Project ${index + 1}`}
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