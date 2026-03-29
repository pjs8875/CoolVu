"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";
import StackingCards, { StackingCardItem } from "@/components/fancy/blocks/stacking-cards";

const services = [
  {
    id: "solar-and-heat-reduction",
    title: "Solar & Heat Reduction",
    description: "Block up to 63% of solar heat, reduce glare, and protect your furnishings from 99% of harmful UV rays.",
    image: "/solar-heat/1.png", 
  },
  {
    id: "safety-and-security-film",
    title: "Safety & Security Film",
    description: "Strengthen glass to protect against break-ins, severe weather, and accidents. Includes DefenseLite systems.",
    image: "/security-film/9.png", 
  },
  {
    id: "privacy-and-decorative-film",
    title: "Privacy & Decorative",
    description: "Enhance aesthetics and add privacy with frosted, patterned, or switchable smart glass films.",
    image: "/privacy-film/4.png", 
  },
  {
    id: "commercial-graphics",
    title: "Commercial Graphics",
    description: "Custom window graphics, printed wall murals, and storefront lettering to elevate your brand.",
    image: "/commercial-graphics/7.png",
  },
  {
    id: "surface-finishes",
    title: "Surface Finishes",
    description: "Transform existing surfaces with architectural vinyl, decorative metal, and wood fusion finishes.",
    image: "/surface-finishes/4.png", // Use the beautiful wood-grain door as the card image
  },
];

export default function Services() {
  const scrollToCard = (index: number) => {
    const container = document.getElementById("services-stacking-container");
    if (container) {
      const cards = container.querySelectorAll(".stacking-card-wrapper");
      if (cards[index]) {
        const containerTop = container.getBoundingClientRect().top + window.scrollY;
        const card = cards[index] as HTMLElement;
        // Scroll perfectly to the card's native sticky trigger point
        window.scrollTo({
          top: containerTop + card.offsetTop, 
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section id="solutions" className="pt-12 md:pt-16 pb-10 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-coolvu-dark-blue mb-6">
            What we offer?
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-sans max-w-2xl">
            From residential heat reduction to commercial security systems, we provide premium 3M™ solutions tailored to your needs.
          </p>
        </div>

        <StackingCards 
          id="services-stacking-container"
          totalCards={services.length} 
          className="relative w-full mt-10 pb-[60vh]"
        >
          {services.map((service, index) => {
            return (
            <StackingCardItem 
              key={index} 
              index={index} 
              className="w-full lg:w-10/12 mx-auto stacking-card-wrapper h-[60vh] md:h-[500px] lg:h-[550px]"
              topPosition={`calc(10vh + ${index * 65}px)`}
            >
              <div className="w-full h-full bg-white border border-gray-200 rounded-[2rem] shadow-[0_-5px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col relative group overflow-hidden">
                
                {/* Header banner that remains visible when stacked - Clickable */}
                <div 
                  onClick={() => scrollToCard(index)}
                  className="h-[60px] md:h-[70px] lg:h-[80px] w-full flex items-center px-4 md:px-8 border-b border-gray-100 bg-white shrink-0 z-20 cursor-pointer hover:bg-gray-50 transition-colors"
                  title="Click to view full card"
                >
                  <div className="w-3 h-3 bg-coolvu-medium-blue rounded-full mr-4 hidden md:block group-hover:scale-125 transition-transform"></div>
                  <h3 className="text-lg sm:text-xl md:text-3xl font-bold font-heading text-coolvu-dark-blue group-hover:text-coolvu-medium-blue transition-colors flex-grow">
                    {service.title}
                  </h3>
                  <div className="text-xs font-sans text-gray-400 font-medium uppercase tracking-wider hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view
                  </div>
                </div>

                {/* Content area that gets covered */}
                <div className="flex flex-col md:flex-row flex-grow h-[calc(100%-60px)] md:h-[calc(100%-70px)] lg:h-[calc(100%-80px)]">
                  <div className="p-4 sm:p-6 md:p-10 flex flex-col justify-center w-full md:w-1/2 z-10 bg-white h-1/2 md:h-full">
                    <p className="text-xs sm:text-sm md:text-lg text-gray-600 font-sans mb-4 md:mb-10 line-clamp-3 md:line-clamp-none">
                      {service.description}
                    </p>
                    <div className="mt-auto md:mt-0">
                      <Link href={`/services/${service.id}`}>
                        <AnimatedButton 
                          className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-dark-blue px-4 py-2 md:px-6 md:py-3 font-sans font-bold text-[10px] md:text-sm tracking-wider uppercase transition-colors rounded-xl border-none w-fit shadow-md"
                        >
                          Learn More
                        </AnimatedButton>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-[#f8f9fa] flex items-center justify-center">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            </StackingCardItem>
            );
          })}
        </StackingCards>
      </div>
    </section>
  );
}