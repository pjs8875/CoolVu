"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export default function CommercialGraphicsPage() {
  const images = [
    "/commercial-graphics/1.png",
    "/commercial-graphics/2.png",
    "/commercial-graphics/3.png",
    "/commercial-graphics/4.png",
    "/commercial-graphics/5.png",
    "/commercial-graphics/6.png",
    "/commercial-graphics/7.png",
    "/commercial-graphics/8.png",
    "/commercial-graphics/9.png",
    "/commercial-graphics/10.png",
    "/commercial-graphics/11.png",
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
              Commercial Graphics
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-sans mb-8 leading-relaxed">
              Transform your blank windows and empty walls into powerful branding and marketing assets. Our custom commercial graphics help your business stand out, attract more foot traffic, and clearly communicate your message.
            </p>
            <p className="text-base md:text-lg text-gray-600 font-sans mb-10 leading-relaxed">
              From full storefront window wraps and perforated "one-way vision" films to interior wall murals and promotional signage, we handle everything from printing to professional installation.
            </p>
            
            <Link href="/#contact-form">
              <AnimatedButton className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-dark-blue px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
                Get Your Free Estimate
              </AnimatedButton>
            </Link>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={images[6]} // Using the Spectrum storefront graphic as the hero
              alt="Commercial Window Graphics"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Subtypes Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-coolvu-dark-blue mb-10 text-center">
            Branding & Graphics Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-coolvu-off-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Custom Printed Murals</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Turn massive blank walls into inspiring art. We design, print, and install high-resolution custom wallpaper and wall coverings to boost employee morale and customer engagement.
              </p>
            </div>
            <div className="bg-coolvu-off-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Storefront Window Wraps</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Utilize your glass real estate. From elegant cut-vinyl lettering displaying your hours and logo to full-color perforated window films that show graphics outside while you see out.
              </p>
            </div>
            <div className="bg-coolvu-off-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Whiteboard Film</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Convert almost any flat surface—glass, walls, or old chalkboards—into a high-performance dry erase canvas. Perfect for collaborative offices, schools, and design agencies.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-coolvu-dark-blue mb-8">
            Recent Installations
          </h2>
          <div className="columns-2 md:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
            {images.filter((_, i) => i !== 6).map((src, index) => (
              <div key={index} className="break-inside-avoid relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg group">
                <Image 
                  src={src} 
                  alt={`Commercial Graphic Installation ${index + 1}`}
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