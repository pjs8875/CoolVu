"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { cn } from "@/lib/utils";
import { locationsData } from "@/lib/locations";

interface NavbarProps {
  isTransparent?: boolean;
}

export default function Navbar({ isTransparent = false }: NavbarProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMarketsOpen, setIsMarketsOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedState, setExpandedState] = useState<string | null>(null);

  const services = [
    { name: "Solar & Heat Reduction", path: "/services/solar-and-heat-reduction" },
    { name: "Safety & Security Film", path: "/services/safety-and-security-film" },
    { name: "Privacy & Decorative", path: "/services/privacy-and-decorative-film" },
    { name: "Commercial Graphics", path: "/services/commercial-graphics" },
    { name: "Surface Finishes", path: "/services/surface-finishes" },
  ];

  const markets = [
    { name: "Residential", path: "/markets/residential" },
    { name: "Commercial", path: "/markets/commercial" },
    { name: "Educational", path: "/markets/educational" },
    { name: "Energy", path: "/markets/energy" },
    { name: "FEMA", path: "/markets/fema" },
    { name: "Government", path: "/markets/government" },
    { name: "Places of Worship", path: "/markets/places-of-worship" },
    { name: "Retail", path: "/markets/retail" },
    { name: "Data Centers", path: "/markets/data-centers" },
    { name: "Healthcare", path: "/markets/healthcare" },
  ];

  return (
    <nav className={cn(
      "top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-6 transition-colors duration-300",
      isTransparent ? "absolute bg-transparent text-white" : "relative bg-white text-coolvu-dark-blue shadow-sm"
    )}>
      {/* Logo */}
      <div className="flex items-center w-32 md:w-auto">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="CoolVu Logo" 
            width={180} 
            height={60} 
            className="object-contain w-full h-auto"
            priority
          />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8 font-sans font-medium text-sm tracking-widest uppercase relative">
        <div 
          className="relative group"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-coolvu-medium-blue transition-colors py-2 uppercase">
            SERVICES <ChevronDown size={16} className={cn("transition-transform", isServicesOpen && "rotate-180")} />
          </button>
          
          {/* Dropdown */}
          <div className={cn(
            "absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 transition-all duration-200 transform origin-top",
            isServicesOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
          )}>
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.path}
                className="block px-6 py-3 text-sm text-coolvu-dark-blue hover:text-coolvu-medium-blue hover:bg-gray-50 transition-colors uppercase tracking-wider font-semibold"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsMarketsOpen(true)}
          onMouseLeave={() => setIsMarketsOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-coolvu-medium-blue transition-colors py-2 uppercase">
            MARKETS <ChevronDown size={16} className={cn("transition-transform", isMarketsOpen && "rotate-180")} />
          </button>
          
          {/* Dropdown */}
          <div className={cn(
            "absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 transition-all duration-200 transform origin-top",
            isMarketsOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
          )}>
            {markets.map((market, index) => (
              <Link 
                key={index}
                href={market.path}
                className="block px-6 py-3 text-sm text-coolvu-dark-blue hover:text-coolvu-medium-blue hover:bg-gray-50 transition-colors uppercase tracking-wider font-semibold"
              >
                {market.name}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/#process" className="hover:text-coolvu-medium-blue transition-colors">Our Process</Link>
        
        <div 
          className="relative group"
          onMouseEnter={() => setIsLocationsOpen(true)}
          onMouseLeave={() => { setIsLocationsOpen(false); setExpandedState(null); }}
        >
          <button className="flex items-center gap-1 hover:text-coolvu-medium-blue transition-colors py-2 uppercase">
            LOCATIONS <ChevronDown size={16} className={cn("transition-transform", isLocationsOpen && "rotate-180")} />
          </button>
          
          {/* Dropdown */}
          <div className={cn(
            "absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-xl rounded-xl border border-gray-100 py-4 transition-all duration-200 transform origin-top",
            isLocationsOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
          )}>
            <div className="px-6 pb-2 mb-2 border-b border-gray-100">
              <h3 className="text-sm font-bold text-coolvu-dark-blue uppercase tracking-wider">National Reach</h3>
              <p className="text-xs text-gray-500 font-normal normal-case mt-1">Select a state to view our service areas</p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 px-4 max-h-[400px] overflow-y-auto custom-scrollbar">
              {locationsData.map((data, index) => (
                <div key={index} className="mb-1">
                  <button 
                    onClick={() => setExpandedState(expandedState === data.state ? null : data.state)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm text-coolvu-dark-blue hover:text-coolvu-medium-blue hover:bg-gray-50 rounded-lg transition-colors uppercase tracking-wider font-semibold"
                  >
                    {data.state}
                    <ChevronDown size={14} className={cn("transition-transform text-gray-400", expandedState === data.state && "rotate-180")} />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-200",
                    expandedState === data.state ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="pl-6 py-1 pr-2 space-y-1">
                      {data.cities.map((city, idx) => (
                        <div key={idx} className="text-xs text-gray-600 font-normal normal-case py-1 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-coolvu-medium-blue shrink-0"></div>
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link href="/#videos" className="hover:text-coolvu-medium-blue transition-colors">Videos</Link>
        <Link href="/#testimonials" className="hover:text-coolvu-medium-blue transition-colors">Testimonials</Link>
        <Link href="/#faq" className="hover:text-coolvu-medium-blue transition-colors">FAQ</Link>
      </div>

      {/* Contact & CTA */}
      <div className="hidden md:flex items-center gap-4">
        <a href="tel:844-426-6588" className="flex items-center gap-2 font-sans font-medium hover:text-coolvu-medium-blue transition-colors">
          <Phone size={18} />
          <span>(844) 426-6588</span>
        </a>
          <AnimatedButton href="?contact=true" className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-lg border-none shadow-md">
            Free Estimate
          </AnimatedButton>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center gap-4">
        <a href="tel:844-426-6588" className="flex items-center text-coolvu-medium-blue md:hidden">
          <Phone size={24} />
        </a>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-4 text-coolvu-dark-blue lg:hidden rounded-b-2xl border-t border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">SERVICES</p>
          <div className="flex flex-col gap-3 pl-2 border-l-2 border-coolvu-medium-blue mb-4">
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.path}
                className="text-base font-semibold hover:text-coolvu-medium-blue transition-colors uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}
          </div>
          
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 mb-2">MARKETS</p>
          <div className="flex flex-col gap-3 pl-2 border-l-2 border-coolvu-medium-blue mb-4">
            {markets.map((market, index) => (
              <Link 
                key={index}
                href={market.path}
                className="text-base font-semibold hover:text-coolvu-medium-blue transition-colors uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {market.name}
              </Link>
            ))}
          </div>

          <Link href="/#process" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-coolvu-medium-blue">Our Process</Link>
          
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setIsLocationsOpen(!isLocationsOpen)}
              className="flex items-center justify-between text-lg font-bold uppercase tracking-widest hover:text-coolvu-medium-blue w-full text-left"
            >
              LOCATIONS
              <ChevronDown size={20} className={cn("transition-transform", isLocationsOpen && "rotate-180")} />
            </button>
            
            <div className={cn(
              "overflow-hidden transition-all duration-300",
              isLocationsOpen ? "max-h-[300px] opacity-100 overflow-y-auto custom-scrollbar" : "max-h-0 opacity-0"
            )}>
              <div className="flex flex-col gap-2 pl-2 border-l-2 border-coolvu-medium-blue mt-2 mb-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">National Reach</p>
                {locationsData.map((data, index) => (
                  <div key={index} className="flex flex-col">
                    <button 
                      onClick={() => setExpandedState(expandedState === data.state ? null : data.state)}
                      className="text-sm font-semibold hover:text-coolvu-medium-blue transition-colors uppercase tracking-wider text-left py-1 flex items-center justify-between pr-2"
                    >
                      {data.state}
                      <ChevronDown size={14} className={cn("transition-transform text-gray-400", expandedState === data.state && "rotate-180")} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-200",
                      expandedState === data.state ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="pl-3 py-1 space-y-1">
                        {data.cities.map((city, idx) => (
                          <div key={idx} className="text-xs text-gray-600 font-normal normal-case py-1 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-coolvu-medium-blue shrink-0"></div>
                            {city}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href="/#videos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-coolvu-medium-blue">Videos</Link>
          <Link href="/#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-coolvu-medium-blue">Testimonials</Link>
          <Link href="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-coolvu-medium-blue">FAQ</Link>
          
          <AnimatedButton href="?contact=true" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white py-4 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-lg border-none shadow-md mt-4">
            Get Your Free Estimate
          </AnimatedButton>
        </div>
      )}
    </nav>
  );
}
