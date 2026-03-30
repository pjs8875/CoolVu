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
    <div className="min-h-screen flex flex-col">
      <div className="py-12 md:py-20 bg-white">
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
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-coolvu-dark-blue mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-sans mb-10 leading-relaxed whitespace-pre-line">
              {description}
            </p>
            
              <AnimatedButton href="?contact=true" className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-8 py-4 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none">
                Get Your Free Estimate
              </AnimatedButton>
          </div>
        </div>
      </div>

      {/* Features Section */}
      {features.length > 0 && (
        <div className="py-20 md:py-32 bg-coolvu-dark-blue flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-10 text-center">
              Our Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold font-heading text-coolvu-dark-blue mb-4">{feature.title}</h3>
                  <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
