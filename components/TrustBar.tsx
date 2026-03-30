"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

const trustItems = [
  {
    isNumber: true,
    endValue: 30,
    suffix: "+",
    title: "Years Experience",
    subtitle: "National Brand Quality",
  },
  {
    isNumber: false,
    textValue: "3M™",
    title: "Premium Products",
    subtitle: "50+ Years Proven Performance",
  },
  {
    isNumber: false,
    textValue: "Lifetime",
    title: "Warranty",
    subtitle: "On All Installations",
  },
  {
    isNumber: true,
    endValue: 25,
    suffix: "+",
    title: "5-Star Reviews",
    subtitle: "Trusted Local Experts",
  },
  {
    isNumber: false,
    textValue: "Certified",
    title: "Installers",
    subtitle: "IWFA & Impact Security",
  },
];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.floor(v).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>0</span>;
}

export default function TrustBar() {
  return (
    <section className="w-full bg-coolvu-dark-blue py-12 md:py-16 relative z-20 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
          {trustItems.map((item, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col items-center text-center ${
                index === trustItems.length - 1 ? "col-span-2 md:col-span-1 lg:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              <span className="text-4xl md:text-5xl font-extrabold font-heading text-coolvu-light-blue mb-2 drop-shadow-sm">
                {item.isNumber ? (
                  <>
                    <AnimatedNumber value={item.endValue!} />
                    {item.suffix}
                  </>
                ) : (
                  item.textValue
                )}
              </span>
              <h3 className="text-white font-heading font-bold text-sm md:text-base tracking-wider uppercase mb-1">
                {item.title}
              </h3>
              <p className="text-gray-300 font-sans text-xs md:text-sm max-w-[200px]">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
