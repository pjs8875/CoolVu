"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

interface MarketPageLayoutProps {
  title: string;
  description: string;
  features: { title: string; description: string }[];
}

export default function MarketPageLayout({ title, description, features }: MarketPageLayoutProps) {
  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/#markets"
          className="inline-flex items-center gap-2 text-coolvu-dark-blue hover:text-coolvu-medium-blue transition-colors font-sans font-bold text-sm uppercase tracking-wider mb-12"
        >
          <ArrowLeft size={18} />
          Back to Markets
        </Link>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-coolvu-medium-blue rounded-full"></div>
              <span className="text-xs md:text-sm font-sans font-bold tracking-[0.2em] text-coolvu-dark-blue uppercase">
                Market Spotlight
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-coolvu-dark-blue mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-sans mb-8 leading-relaxed whitespace-pre-line">
              {description}
            </p>
            
            <Link href="/#contact-form">
              <AnimatedButton className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
                Get Your Free Estimate
              </AnimatedButton>
            </Link>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
             <span className="text-gray-400 font-sans">Image Placeholder</span>
          </div>
        </div>

        {/* Features Section */}
        {features.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-coolvu-dark-blue mb-10 text-center">
              Our Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-coolvu-off-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">{feature.title}</h3>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}