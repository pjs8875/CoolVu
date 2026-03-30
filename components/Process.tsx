"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { BlurText } from "@/components/ui/blur-text";

const processSteps = [
  {
    title: "Request an Estimate",
    description: "Fill out our quick online form or give us a call. We'll schedule a convenient time to visit your property.",
  },
  {
    title: "Expert Consultation",
    description: "We assess your needs, take precise measurements, and recommend the perfect 3M™ solution for your space.",
  },
  {
    title: "Professional Installation",
    description: "Our certified technicians arrive on time and complete the installation cleanly and efficiently.",
  },
  {
    title: "Lifetime Warranty",
    description: "Enjoy your upgraded space with total peace of mind, backed by our comprehensive lifetime warranty.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"]
  });

  // Calculate positions for the single squeegee
  // Squeegee wipes diagonally from Top-Left to Bottom-Right across the section
  const sqLeft = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]);
  const sqTop = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]);
  
  // Squeegee visibility (fade in at start, fade out at end)
  const sqOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="process" className="pt-12 md:pt-20 pb-20 md:pb-32 bg-white relative overflow-hidden">
      
      {/* Animated Squeegee - Moved to z-0 so it's behind the content */}
      <motion.div 
        className="absolute w-64 h-64 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] z-0 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ left: sqLeft, top: sqTop, rotate: -45, opacity: sqOpacity }}
      >
        <Image src="/squeegee.png" alt="Squeegee" fill className="object-contain opacity-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <BlurText 
            text="Our Simple Process"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-coolvu-dark-blue mb-6 justify-center"
          />
          <BlurText 
            text="Getting premium window film installed shouldn't be complicated. Follow these easy steps to upgrade your comfort and security."
            as="p"
            className="text-base md:text-lg text-gray-600 font-sans"
            delay={80}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative h-[600px] lg:h-full min-h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image 
              src="/paul-owner.png" 
              alt="Paul Silverman, Owner"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coolvu-dark-blue/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-heading font-bold text-xl md:text-2xl">
                "We treat your home like our own."
              </p>
              <p className="text-coolvu-light-blue font-sans mt-2">
                — Paul Silverman, Owner
              </p>
            </div>
          </div>

          {/* Steps Side - Redesigned Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 order-1 lg:order-2 h-full content-center">
            {processSteps.map((step, index) => {
              return (
                <div 
                  key={index}
                  className="flex flex-col bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-coolvu-medium-blue/5 rounded-full blur-2xl group-hover:bg-coolvu-medium-blue/10 transition-colors"></div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl md:text-4xl font-black font-heading text-coolvu-medium-blue/20 select-none pointer-events-none">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-lg md:text-xl font-bold font-heading text-coolvu-dark-blue mb-2">
                      {step.title}
                    </h3>
                    <div className="w-8 h-1 bg-coolvu-medium-blue rounded-full mb-3"></div>
                    <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
