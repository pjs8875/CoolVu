"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlurText } from "@/components/ui/blur-text";

const faqs = [
  {
    question: "Will window film make my home or office too dark?",
    answer: "Not at all. Modern 3M™ window films are engineered to block heat and harmful UV rays while still allowing natural visible light to pass through. We even offer virtually clear options that provide massive heat reduction without changing the look of your glass."
  },
  {
    question: "How much does window film installation cost?",
    answer: "Pricing depends on the total square footage of glass and the specific type of film or finish you choose. Because every project is unique, we provide fast, free, no-obligation estimates so you know exactly what to expect before we begin."
  },
  {
    question: "How long does the installation process take?",
    answer: "Most residential installations are completed in a single day. Larger commercial projects may take longer, but our certified technicians work efficiently and cleanly to minimize any disruption to your daily operations."
  },
  {
    question: "What kind of warranty do you offer?",
    answer: "We stand behind our work. We provide a comprehensive lifetime warranty on residential installations and an industry-leading warranty for commercial projects. This covers both the premium 3M™ materials and our professional labor."
  },
  {
    question: "Can window film really help lower my energy bills?",
    answer: "Absolutely. By rejecting up to 63% of solar heat gain, our window films significantly reduce the workload on your HVAC system during the summer. Many of our clients find that the installation pays for itself in energy savings over time."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BlurText 
            text="Long Island Window Film FAQs"
            as="h2"
            className="text-4xl md:text-5xl font-bold font-heading text-coolvu-dark-blue mb-6 justify-center"
          />
          <BlurText 
            text="Everything you need to know about our products, in-home process, and guarantees."
            as="p"
            className="text-base md:text-lg text-gray-600 font-sans justify-center"
            delay={80}
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-heading font-bold text-lg text-coolvu-dark-blue pr-8">
                  {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                  openIndex === index ? "bg-coolvu-medium-blue text-white" : "bg-gray-100 text-coolvu-dark-blue"
                )}>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 transition-transform duration-300", 
                      openIndex === index && "rotate-180"
                    )} 
                  />
                </div>
              </button>
              
              <div 
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-gray-600 font-sans leading-relaxed border-t border-gray-50 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
