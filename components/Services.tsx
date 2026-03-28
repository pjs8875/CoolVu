import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Solar & Heat Reduction",
    description: "Block up to 63% of solar heat, reduce glare, and protect your furnishings from 99% of harmful UV rays.",
    image: "/grid-images/1.png", // Using existing placeholder images for now
  },
  {
    title: "Safety & Security Film",
    description: "Strengthen glass to protect against break-ins, severe weather, and accidents. Includes DefenseLite systems.",
    image: "/grid-images/2.png",
  },
  {
    title: "Privacy & Decorative",
    description: "Enhance aesthetics and add privacy with frosted, patterned, or switchable smart glass films.",
    image: "/grid-images/3.png",
  },
  {
    title: "Commercial Graphics",
    description: "Custom window graphics, printed wall murals, and storefront lettering to elevate your brand.",
    image: "/grid-images/4.png",
  },
  {
    title: "Surface Finishes",
    description: "Transform existing surfaces with architectural vinyl, decorative metal, and wood fusion finishes.",
    image: "/grid-images/5.png",
  },
];

export default function Services() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-coolvu-medium-blue rounded-full"></div>
            <span className="text-xs md:text-sm font-sans font-bold tracking-[0.2em] text-coolvu-dark-blue uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-coolvu-dark-blue mb-6">
            What we offer?
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-sans max-w-2xl">
            From residential heat reduction to commercial security systems, we provide premium 3M™ solutions tailored to your needs.
          </p>
          <div className="w-full h-[1px] bg-gray-200 mt-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-coolvu-dark-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-sans mb-8 flex-grow">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-xs font-bold font-sans tracking-wider uppercase text-coolvu-dark-blue group-hover:text-coolvu-medium-blue transition-colors w-fit">
                  Learn More
                  <div className="w-8 h-8 rounded-full bg-coolvu-medium-blue/10 flex items-center justify-center group-hover:bg-coolvu-medium-blue group-hover:text-white transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}