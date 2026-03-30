"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Sun, Eye, Building } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { BlurText } from "@/components/ui/blur-text";

interface LocationPageLayoutProps {
  city: string;
}

export default function LocationPageLayout({ city }: LocationPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link 
            href="/#locations"
            className="inline-flex items-center gap-2 text-coolvu-dark-blue hover:text-coolvu-medium-blue transition-colors font-sans font-bold text-sm uppercase tracking-wider mb-12"
          >
            <ArrowLeft size={18} />
            Back to Locations
          </Link>

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <BlurText 
              text={`Premium Window Film & Surface Solutions in ${city}`}
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-coolvu-dark-blue mb-6 leading-tight justify-center"
            />
            <BlurText 
              text={`CoolVu is proud to serve the ${city} community with top-rated residential and commercial window tinting, security films, and architectural surface finishes. Enhance your property's comfort, security, and energy efficiency today.`}
              as="p"
              className="text-base md:text-lg text-gray-600 font-sans mb-10 leading-relaxed"
              delay={50}
            />
            
            <AnimatedButton href="?contact=true" className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-8 py-4 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
              Get Your Free Estimate in {city}
            </AnimatedButton>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 md:py-32 bg-coolvu-dark-blue flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <BlurText 
              text={`Our Services in ${city}`}
              as="h2"
              className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 justify-center"
            />
            <BlurText 
              text={`We provide a comprehensive range of 3M™ window film and surface solutions tailored to the unique climate and security needs of ${city} properties.`}
              as="p"
              className="text-coolvu-light-blue font-sans max-w-2xl mx-auto"
              delay={50}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
              <Sun className="w-10 h-10 text-coolvu-medium-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Solar & Heat Reduction</h3>
              <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed flex-grow">
                Keep your {city} home or business cool during the summer. Our solar control films block up to 63% of solar heat and 99% of harmful UV rays, protecting your interiors from fading while lowering your energy bills.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
              <ShieldCheck className="w-10 h-10 text-coolvu-medium-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Safety & Security Film</h3>
              <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed flex-grow">
                Protect your {city} property against break-ins, severe weather, and accidents. Our safety films and DefenseLite systems strengthen your existing glass, holding shattered pieces in place to prevent entry and injury.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
              <Eye className="w-10 h-10 text-coolvu-medium-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Privacy & Decorative</h3>
              <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed flex-grow">
                Enhance the aesthetics and privacy of your space without sacrificing natural light. We offer frosted, patterned, and custom decorative films perfect for {city} offices, bathrooms, and storefronts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
              <Building className="w-10 h-10 text-coolvu-medium-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">Surface Finishes</h3>
              <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed flex-grow">
                Renovate your {city} commercial space sustainably. Our architectural vinyl and surface finishes can transform doors, desks, and walls with realistic wood, metal, and stone textures at a fraction of the cost of replacement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurText 
            text={`Why ${city} Chooses CoolVu`}
            as="h2"
            className="text-3xl md:text-4xl font-bold font-heading text-coolvu-dark-blue mb-6 justify-center"
          />
          <BlurText 
            text={`As a local business, we understand the specific needs of properties in ${city} and the surrounding Long Island area. Our certified technicians provide flawless installations backed by comprehensive lifetime warranties. We pride ourselves on honest pricing, punctual service, and treating your property with the utmost respect.`}
            as="p"
            className="text-base md:text-lg text-gray-600 font-sans mb-10 leading-relaxed"
            delay={50}
          />
          <AnimatedButton href="?contact=true" className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-8 py-4 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
            Schedule Your Consultation
          </AnimatedButton>
        </div>
      </div>

    </div>
  );
}