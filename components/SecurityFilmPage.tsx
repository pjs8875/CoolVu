"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export default function SecurityFilmPage() {
  const images = [
    "/security-film/1.png",
    "/security-film/2.png",
    "/security-film/3.png",
    "/security-film/4.png",
    "/security-film/5.png",
    "/security-film/6.png",
    "/security-film/7.png",
    "/security-film/8.png",
    "/security-film/9.png",
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
                Safety & Security Film
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-sans mb-8 leading-relaxed">
                Protect your property, inventory, and most importantly, your people. Our premium security films and DefenseLite systems are designed to hold shattered glass together, creating a powerful barrier against forced entry, severe weather, and accidents.
              </p>
              <p className="text-base md:text-lg text-gray-600 font-sans mb-10 leading-relaxed">
                Whether you need to secure a retail storefront, a school, or your home, our certified installers provide solutions that delay intruders and mitigate damage. Trust the experts to fortify your glass without compromising visibility.
              </p>
              
              <AnimatedButton href="?contact=true" className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
                Get Your Free Estimate
              </AnimatedButton>
            </div>

            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={images[8]} // Using the hand-on-glass image as hero
                alt="Safety and Security Window Film"
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
            Advanced Security Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-white mb-4">DefenseLite® Panels</h3>
              <p className="text-coolvu-light-blue font-sans text-sm leading-relaxed">
                A heavy-duty, clear polycarbonate shield that installs over your existing glass. It creates an impenetrable barrier designed to keep the bad guys outside, stopping smash-and-grab crimes instantly.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-white mb-4">BulletShield™</h3>
              <p className="text-coolvu-light-blue font-sans text-sm leading-relaxed">
                Ballistic-resistant over-glazing that provides transparent, bullet-resisting protection. Often used in schools, government buildings, and high-risk commercial retail without the need to replace window frames.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-white mb-4">Safety & Anti-Shatter Film</h3>
              <p className="text-coolvu-light-blue font-sans text-sm leading-relaxed">
                Heavy-duty multi-layered polyester films that hold shattered glass fragments together upon impact. Protects occupants from severe weather, accidental impacts, and flying glass shards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 md:py-32 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-coolvu-dark-blue mb-8 text-center">
            Recent Projects & Demonstrations
          </h2>
          <div className="columns-2 md:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
            {images.slice(0, 8).map((src, index) => (
              <div key={index} className="break-inside-avoid relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg group">
                <Image 
                  src={src} 
                  alt={`Security Film Installation ${index + 1}`}
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
