"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isTransparent?: boolean;
}

export default function Navbar({ isTransparent = false }: NavbarProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: "Solar & Heat Reduction", path: "/services/solar-and-heat-reduction" },
    { name: "Safety & Security Film", path: "/services/safety-and-security-film" },
    { name: "Privacy & Decorative", path: "/services/privacy-and-decorative-film" },
    { name: "Commercial Graphics", path: "/services/commercial-graphics" },
    { name: "Surface Finishes", path: "/services/surface-finishes" },
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
            className={cn("object-contain w-full h-auto", !isTransparent && "brightness-0")} // if background is white, logo needs to be visible
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
          <button className="flex items-center gap-1 hover:text-coolvu-medium-blue transition-colors py-2">
            Services <ChevronDown size={16} className={cn("transition-transform", isServicesOpen && "rotate-180")} />
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
                className="block px-6 py-3 text-sm text-coolvu-dark-blue hover:text-coolvu-medium-blue hover:bg-gray-50 transition-colors capitalize tracking-normal font-semibold"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/#solutions" className="hover:text-coolvu-medium-blue transition-colors">Solutions</Link>
        <Link href="/#markets" className="hover:text-coolvu-medium-blue transition-colors">Markets</Link>
        <Link href="/#about" className="hover:text-coolvu-medium-blue transition-colors">About Us</Link>
      </div>

      {/* Contact & CTA */}
      <div className="hidden md:flex items-center gap-4">
        <a href="tel:516-535-9555" className="flex items-center gap-2 font-sans font-medium hover:text-coolvu-medium-blue transition-colors">
          <Phone size={18} />
          <span>516-535-9555</span>
        </a>
        <Link href="#contact-form">
          <AnimatedButton className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-lg border-none shadow-md">
            Free Estimate
          </AnimatedButton>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center gap-4">
        <a href="tel:516-535-9555" className="flex items-center text-coolvu-medium-blue md:hidden">
          <Phone size={24} />
        </a>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-4 text-coolvu-dark-blue lg:hidden rounded-b-2xl border-t border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Services</p>
          <div className="flex flex-col gap-3 pl-2 border-l-2 border-coolvu-medium-blue mb-4">
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.path}
                className="text-base font-semibold hover:text-coolvu-medium-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}
          </div>
          
          <Link href="/#solutions" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-coolvu-medium-blue">Solutions</Link>
          <Link href="/#markets" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-coolvu-medium-blue">Markets</Link>
          <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-coolvu-medium-blue">About Us</Link>
          
          <Link href="#contact-form" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
            <AnimatedButton className="w-full bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white py-4 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-lg border-none shadow-md">
              Get Your Free Estimate
            </AnimatedButton>
          </Link>
        </div>
      )}
    </nav>
  );
}