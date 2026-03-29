"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export default function SurfaceFinishesPage() {
  const images = [
    "/surface-finishes/1.png",
    "/surface-finishes/2.png",
    "/surface-finishes/3.png",
    "/surface-finishes/4.png",
    "/surface-finishes/5.png",
    "/surface-finishes/6.png",
    "/surface-finishes/7.png",
    "/surface-finishes/8.png",
    "/surface-finishes/9.png",
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
              Surface Finishes
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-sans mb-8 leading-relaxed">
              Renovate without the mess, noise, or downtime of traditional construction. Our architectural finishes allow you to transform existing surfaces—like doors, cabinets, reception desks, and walls—with stunning realism.
            </p>
            <p className="text-base md:text-lg text-gray-600 font-sans mb-10 leading-relaxed">
              Choose from hundreds of premium textures including authentic wood grains, sleek metals, natural stone, and leather. These durable, sustainable films are perfect for breathing new life into dated commercial interiors and residential spaces at a fraction of the cost of replacement.
            </p>
            
            <Link href="/#contact-form">
              <AnimatedButton className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
                Get Your Free Estimate
              </AnimatedButton>
            </Link>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={images[3]} // Using the beautiful wood-grain door finish as hero
              alt="Architectural Surface Finishes"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Subtypes Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-coolvu-dark-blue mb-10 text-center">
            Architectural Finishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-coolvu-off-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Wood & Stone Fusion</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Hundreds of stunning architectural vinyl films offering the authentic look and feel of real wood grain, marble, and granite. Upcycle doors and columns for pennies on the dollar.
              </p>
            </div>
            <div className="bg-coolvu-off-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Decorative Metals & Leather</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Elevate elevators, reception desks, and outdated interiors with textured metallic or synthetic leather finishes. These durable wraps adhere perfectly to existing substrates.
              </p>
            </div>
            <div className="bg-coolvu-off-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Anti-Microbial & Protective</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Silver-ion integrated films designed to inhibit the growth of bacteria and mold. Ideal for healthcare environments, touch screens, pushing plates, and high-traffic municipal facilities.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-coolvu-dark-blue mb-8">
            Recent Transformations
          </h2>
          <div className="columns-2 md:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
            {images.filter((_, i) => i !== 3).map((src, index) => (
              <div key={index} className="break-inside-avoid relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg group">
                <Image 
                  src={src} 
                  alt={`Surface Finish Project ${index + 1}`}
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