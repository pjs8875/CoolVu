"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, Phone } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";
import React, { useRef } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    location: "Long Island, NY",
    text: "Paul was incredibly professional. The 3M film he installed in our sunroom dropped the temperature by at least 10 degrees. We can finally use the room in the afternoon!",
    rating: 5,
    avatarColor: "from-blue-400 to-blue-600",
    showContact: false,
    rotation: -4,
  },
  {
    name: "David R.",
    role: "Retail Store Owner",
    location: "Brooklyn, NY",
    text: "We needed security film for our storefront after a recent break-in down the street. CoolVu responded immediately, gave a fair quote, and the installation was flawless.",
    rating: 5,
    avatarColor: "from-indigo-400 to-indigo-600",
    showContact: false,
    rotation: -2,
  },
  {
    name: "Jennifer L.",
    role: "Property Manager",
    location: "Queens, NY",
    text: "I was worried the window tint would make my house too dark, but Paul helped me pick the perfect shade. It cuts the glare on my TV perfectly and you can barely tell it's there.",
    rating: 5,
    avatarColor: "from-sky-400 to-sky-600",
    showContact: false,
    rotation: 0,
  },
  {
    name: "Michael T.",
    role: "Homeowner",
    location: "Stamford, CT",
    text: "Highly recommend! They showed up exactly when they said they would, left the house spotless, and the lifetime warranty gives us great peace of mind.",
    rating: 5,
    avatarColor: "from-cyan-400 to-cyan-600",
    showContact: true,
    rotation: 2,
  },
  {
    name: "Amanda K.",
    role: "Office Manager",
    location: "Hoboken, NJ",
    text: "The frosted privacy film they added to our office conference room looks incredibly sleek and professional. Great communication throughout the whole process.",
    rating: 5,
    avatarColor: "from-blue-500 to-indigo-500",
    showContact: true,
    rotation: 4,
  },
];

// 3D Tilt Card Component
function TiltCard({ 
  testimonial, 
  index, 
  total,
  hoveredIndex,
  setHoveredIndex,
  isLoaded
}: { 
  testimonial: any; 
  index: number; 
  total: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  isLoaded: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the rotation
  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25, mass: 0.5 });

  // Map mouse position to rotation degrees (-5 to 5 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredIndex(null);
  };

  // Calculate staggering from right to left
  const reverseIndex = total - 1 - index;
  
  // Calculate base horizontal offset (fanned out)
  const baseOffset = (index - (total - 1) / 2) * 50; 
  
  // Calculate dynamic offset based on hover state
  let dynamicOffset = baseOffset;
  if (hoveredIndex !== null) {
    if (index < hoveredIndex) {
      dynamicOffset = baseOffset - 35; // Push left cards away slightly
    } else if (index > hoveredIndex) {
      dynamicOffset = baseOffset + 35; // Push right cards away slightly
    }
  }

  // Alternate background colors
  const isDarkCard = index % 2 !== 0;
  const bgColor = isDarkCard ? "bg-white" : "bg-[#F8F9FA]";
  const textColor = "text-gray-900";
  const subTextColor = "text-gray-500";
  const iconBg = "bg-blue-50";
  const iconColor = "text-coolvu-dark-blue";

  // Only apply the staggered delay during the initial entrance animation
  const animationDelay = isLoaded ? 0 : reverseIndex * 0.15;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX, // Always apply the motion value (it naturally resets to 0 on mouse leave)
        rotateY, // Always apply the motion value
        transformStyle: "preserve-3d",
        zIndex: hoveredIndex === index ? 50 : index + 10, 
      }}
      // Cards fly in from the right side, rotated, and settle into their fanned positions
      initial={{ 
        opacity: 0, 
        scale: 0.8, 
        x: "50vw", 
        y: 100, 
        rotate: 20 
      }}
      animate={{
        opacity: 1,
        scale: hoveredIndex === index ? 1.05 : 1,
        x: `${dynamicOffset}%`,
        y: hoveredIndex === index ? -20 : (index % 2 === 0 ? 10 : -10), // Funky vertical staggering
        rotate: hoveredIndex === index ? 0 : testimonial.rotation,
      }}
      transition={{ 
        type: "spring",
        stiffness: 250, // Consistent, smooth spring for layout changes
        damping: 25,
        mass: 1,
        delay: animationDelay, 
      }}
      className="absolute top-0 w-full max-w-[300px] md:max-w-[340px] lg:max-w-[380px] origin-bottom cursor-pointer"
    >
      <motion.div 
        className={`${bgColor} border border-gray-200 rounded-[24px] p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-300 flex flex-col h-[400px] md:h-[450px] group`}
        animate={{ z: hoveredIndex === index ? 30 : 0 }} // Smooth 3D pop-out
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        
        {/* Header: Stars & Contact */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#F97316] text-[#F97316]" />
            ))}
          </div>
          
          <div className={`flex items-center gap-2 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${textColor}`}>Contact Sales</span>
            <div className={`w-6 h-6 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}>
              <Phone className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <p className={`text-base md:text-lg lg:text-xl font-sans ${textColor} leading-relaxed font-medium mb-8 flex-grow`}>
          "{testimonial.text}"
        </p>
        
        {/* Footer: Author Info */}
        <div className="flex items-center gap-4 mt-auto">
          {/* Author Details */}
          <div className="flex flex-col">
            <p className={`font-bold font-sans text-sm md:text-base ${textColor} leading-tight`}>
              {testimonial.name}
            </p>
            <p className={`text-xs md:text-sm font-sans ${subTextColor} leading-tight mt-0.5`}>
              {testimonial.role} @ {testimonial.location}
            </p>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-coolvu-dark-blue relative overflow-hidden perspective-1000">
      <motion.div 
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        onViewportEnter={() => {
          // After the initial entrance animation completes, mark as loaded
          // so subsequent hovers don't trigger the staggered entrance delay
          setTimeout(() => setIsLoaded(true), 1200);
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Header Section */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-24 px-4">
          <BlurText 
            text="What Our Customers Are Saying"
            as="h2"
            className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 sm:whitespace-nowrap"
          />
          <p className="text-xl text-blue-100 font-sans">
            Trusted by +400 customers across Long Island and beyond.
          </p>
        </div>

        {/* Desktop: Horizontal Stack Grid */}
        <div 
          className="hidden md:flex relative h-[500px] w-full justify-center mt-10"
          onMouseLeave={() => setHoveredIndex(null)} // Failsafe to ensure reset
        >
          {testimonials.map((testimonial, index) => (
            <TiltCard 
              key={index} 
              testimonial={testimonial} 
              index={index} 
              total={testimonials.length} 
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              isLoaded={isLoaded}
            />
          ))}
        </div>

        {/* Mobile: Simple Snap Carousel */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-4 -mx-4 mt-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((testimonial, index) => {
            const isDarkCard = index % 2 !== 0;
            const bgColor = isDarkCard ? "bg-white" : "bg-[#F8F9FA]";
            const textColor = "text-gray-900";
            const subTextColor = "text-gray-500";
            const iconBg = "bg-blue-50";
            const iconColor = "text-coolvu-dark-blue";

            return (
              <div 
                key={index}
                className={`snap-center shrink-0 w-[85vw] max-w-[320px] ${bgColor} border border-gray-200 rounded-[24px] p-6 shadow-sm flex flex-col h-[400px]`}
              >
                {/* Header: Stars & Contact */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                    ))}
                  </div>
                  
                  {testimonial.showContact && (
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${textColor}`}>Contact Sales</span>
                      <div className={`w-6 h-6 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}>
                        <Phone className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <p className={`text-base font-sans ${textColor} leading-relaxed font-medium mb-8 flex-grow`}>
                  "{testimonial.text}"
                </p>
                
                {/* Footer: Author Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="flex flex-col">
                    <p className={`font-bold font-sans text-sm ${textColor} leading-tight`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-xs font-sans ${subTextColor} leading-tight mt-0.5`}>
                      {testimonial.role} @ {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}