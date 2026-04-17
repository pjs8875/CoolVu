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

type NavMenuItem = { name: string; path: string };

/** Desktop dropdown panel — matches SERVICES / MARKETS reference styling */
function NavMenuDropdown({
  id,
  title,
  items,
  isOpen,
  align = "left",
  variant = "services",
}: {
  id: string;
  title: string;
  items: NavMenuItem[];
  isOpen: boolean;
  align?: "left" | "center";
  variant?: "services" | "markets";
}) {
  return (
    <div
      id={id}
      role="menu"
      aria-hidden={!isOpen}
      className={cn(
        "absolute top-full z-[70] pt-1.5",
        align === "left" ? "left-0" : "left-1/2 -translate-x-1/2",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        className={cn(
          "origin-top rounded-xl border border-gray-100 bg-white py-2 shadow-xl ring-1 ring-black/5 transition-[opacity,transform,visibility] duration-200 ease-out",
          variant === "markets"
            ? "w-[min(100vw-2rem,20rem)]"
            : "w-[min(100vw-2rem,16.75rem)]",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        )}
      >
        <p className="px-4 pb-1 pt-1 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          {title.toUpperCase()}
        </p>
        <nav
          className={cn(
            "mx-3 mb-1 mt-1 overflow-y-auto border-l-2 border-coolvu-medium-blue pl-3 pr-1 custom-scrollbar",
            variant === "markets"
              ? "max-h-[min(72vh,26rem)]"
              : "max-h-[min(70vh,20rem)]"
          )}
          aria-label={title}
        >
          <ul className="flex flex-col gap-0.5 py-1">
            {items.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  role="menuitem"
                  className="block rounded-r-md py-2 pl-1 text-sm font-semibold uppercase tracking-wide text-coolvu-dark-blue transition-colors hover:bg-gray-50 hover:text-coolvu-medium-blue"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

/** Phone + Free Estimate — beside full nav on lg+; alone on md until lg. */
function NavPhoneAndCta({
  isTransparent,
  withDivider,
  className,
}: {
  isTransparent: boolean;
  withDivider?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-2 sm:gap-3",
        withDivider &&
          cn(
            "ml-1 border-l pl-3 sm:ml-2 sm:pl-4",
            isTransparent ? "border-white/40" : "border-gray-200"
          ),
        className
      )}
    >
      <a
        href="tel:516-535-9555"
        className={cn(
          "flex shrink-0 items-center gap-1 whitespace-nowrap font-sans text-[11px] font-medium tabular-nums tracking-tight transition-colors sm:gap-1.5 sm:text-xs lg:text-[11px] xl:gap-2 xl:text-sm",
          isTransparent
            ? "text-white hover:text-coolvu-light-blue"
            : "text-coolvu-dark-blue hover:text-coolvu-medium-blue"
        )}
        aria-label="Call CoolVu at (516) 535-9555"
      >
        <Phone size={15} className="shrink-0" aria-hidden />
        <span className="whitespace-nowrap">(516) 535-9555</span>
      </a>
      <AnimatedButton
        href="?contact=true"
        className="shrink-0 rounded-lg border-none bg-coolvu-medium-blue px-3 py-2 font-sans text-[11px] font-bold uppercase tracking-wider text-coolvu-off-white shadow-md transition-colors hover:bg-coolvu-light-blue sm:px-4 sm:py-2.5 sm:text-xs lg:px-3 lg:py-2 lg:text-[11px] xl:px-6 xl:py-3 xl:text-sm"
      >
        Free Estimate
      </AnimatedButton>
    </div>
  );
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
    <nav
      className={cn(
        "top-0 left-0 right-0 z-[60] isolate flex w-full min-h-[4.5rem] flex-nowrap items-center justify-between gap-2 px-4 py-4 sm:gap-3 md:min-h-[5rem] md:px-6 md:py-5 lg:justify-start lg:gap-4 lg:px-8 lg:py-6 xl:gap-5 xl:px-10 2xl:gap-6 2xl:px-12",
        "transition-colors duration-300",
        isTransparent ? "absolute bg-transparent text-white" : "relative bg-white text-coolvu-dark-blue shadow-sm"
      )}
    >
      {/* Logo */}
      <div className="relative z-[1] flex w-28 shrink-0 items-center justify-self-start sm:w-32 md:w-auto xl:min-w-0">
        <Link href="/" className="block shrink-0">
          <Image 
            src="/logo.png" 
            alt="CoolVu Logo" 
            width={180} 
            height={60} 
            className="h-auto max-h-10 w-auto max-w-[118px] object-contain object-left sm:max-h-11 sm:max-w-[128px] md:max-h-12 md:max-w-[148px] lg:max-h-10 lg:max-w-[124px] xl:max-h-14 xl:max-w-[180px]"
            priority
          />
        </Link>
      </div>

      {/* lg+: single-row bar — links + phone + CTA (scrolls horizontally only if viewport is too narrow) */}
      <div className="relative z-0 hidden min-h-0 min-w-0 flex-1 flex-nowrap items-center justify-end gap-2 lg:flex lg:gap-2 xl:gap-3 2xl:gap-4">
        <div className="flex min-h-0 min-w-0 flex-1 flex-nowrap items-center justify-end gap-x-1 font-sans text-[10px] font-medium uppercase tracking-tight sm:gap-x-1.5 sm:text-[11px] md:gap-x-2 lg:gap-x-1.5 lg:text-[11px] lg:tracking-wide xl:gap-x-2 xl:text-xs xl:tracking-wider 2xl:gap-x-2.5 2xl:text-sm">
        <div 
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button
            type="button"
            className={cn(
              "flex shrink-0 items-center gap-0.5 whitespace-nowrap py-1 uppercase transition-colors lg:gap-1 lg:py-1.5 xl:py-2",
              isTransparent
                ? "text-white hover:text-coolvu-light-blue"
                : "text-coolvu-dark-blue hover:text-coolvu-medium-blue"
            )}
            aria-expanded={isServicesOpen}
            aria-haspopup="true"
            aria-controls="nav-services-menu"
          >
            SERVICES{" "}
            <ChevronDown size={14} className={cn("shrink-0 transition-transform", isServicesOpen && "rotate-180")} />
          </button>
          <NavMenuDropdown
            id="nav-services-menu"
            title="Services"
            items={services}
            isOpen={isServicesOpen}
            variant="services"
          />
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsMarketsOpen(true)}
          onMouseLeave={() => setIsMarketsOpen(false)}
        >
          <button
            type="button"
            className={cn(
              "flex shrink-0 items-center gap-0.5 whitespace-nowrap py-1 uppercase transition-colors lg:gap-1 lg:py-1.5 xl:py-2",
              isTransparent
                ? "text-white hover:text-coolvu-light-blue"
                : "text-coolvu-dark-blue hover:text-coolvu-medium-blue"
            )}
            aria-expanded={isMarketsOpen}
            aria-haspopup="true"
            aria-controls="nav-markets-menu"
          >
            MARKETS{" "}
            <ChevronDown size={14} className={cn("shrink-0 transition-transform", isMarketsOpen && "rotate-180")} />
          </button>
          <NavMenuDropdown
            id="nav-markets-menu"
            title="Markets"
            items={markets}
            isOpen={isMarketsOpen}
            variant="markets"
          />
        </div>

        <Link
          href="/#process"
          className={cn(
            "shrink-0 whitespace-nowrap py-1 transition-colors lg:py-1.5 xl:py-2",
            isTransparent ? "hover:text-coolvu-light-blue" : "hover:text-coolvu-medium-blue"
          )}
        >
          Our Process
        </Link>
        
        <div 
          className="relative group"
          onMouseEnter={() => setIsLocationsOpen(true)}
          onMouseLeave={() => { setIsLocationsOpen(false); setExpandedState(null); }}
        >
          <button
            type="button"
            className={cn(
              "flex shrink-0 items-center gap-0.5 whitespace-nowrap py-1 uppercase transition-colors lg:gap-1 lg:py-1.5 xl:py-2",
              isTransparent
                ? "text-white hover:text-coolvu-light-blue"
                : "text-coolvu-dark-blue hover:text-coolvu-medium-blue"
            )}
            aria-expanded={isLocationsOpen}
            aria-haspopup="true"
          >
            LOCATIONS{" "}
            <ChevronDown size={14} className={cn("shrink-0 transition-transform", isLocationsOpen && "rotate-180")} />
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

        <Link
          href="/#videos"
          className={cn(
            "shrink-0 whitespace-nowrap py-1 transition-colors lg:py-1.5 xl:py-2",
            isTransparent ? "hover:text-coolvu-light-blue" : "hover:text-coolvu-medium-blue"
          )}
        >
          Videos
        </Link>
        <Link
          href="/#testimonials"
          className={cn(
            "shrink-0 whitespace-nowrap py-1 transition-colors lg:py-1.5 xl:py-2",
            isTransparent ? "hover:text-coolvu-light-blue" : "hover:text-coolvu-medium-blue"
          )}
        >
          Testimonials
        </Link>
        <Link
          href="/#faq"
          className={cn(
            "shrink-0 whitespace-nowrap py-1 transition-colors lg:py-1.5 xl:py-2",
            isTransparent ? "hover:text-coolvu-light-blue" : "hover:text-coolvu-medium-blue"
          )}
        >
          FAQ
        </Link>
        </div>

        <NavPhoneAndCta isTransparent={isTransparent} withDivider />
      </div>

      {/* md–lg: phone + CTA beside logo until full nav appears */}
      <NavPhoneAndCta
        isTransparent={isTransparent}
        className="hidden shrink-0 md:flex lg:hidden"
      />

      {/* Mobile / compact menu */}
      <div className="flex items-center gap-3 sm:gap-4 lg:hidden">
        <a href="tel:516-535-9555" className="flex items-center text-coolvu-medium-blue md:hidden">
          <Phone size={24} />
        </a>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile / tablet menu panel */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 flex max-h-[min(85dvh,calc(100dvh-5rem))] flex-col gap-5 overflow-y-auto rounded-b-2xl border-t border-gray-100 bg-white p-6 text-coolvu-dark-blue shadow-2xl lg:hidden">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">Services</p>
            <nav className="border-l-2 border-coolvu-medium-blue pl-3" aria-label="Services">
              <ul className="flex flex-col gap-1">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link
                      href={service.path}
                      className="block py-1.5 text-sm font-semibold uppercase tracking-wide text-coolvu-dark-blue transition-colors hover:text-coolvu-medium-blue"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">Markets</p>
            <nav className="border-l-2 border-coolvu-medium-blue pl-3" aria-label="Markets">
              <ul className="flex flex-col gap-1">
                {markets.map((market) => (
                  <li key={market.path}>
                    <Link
                      href={market.path}
                      className="block py-1.5 text-sm font-semibold uppercase tracking-wide text-coolvu-dark-blue transition-colors hover:text-coolvu-medium-blue"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {market.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
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
