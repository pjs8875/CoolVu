"use client";

import { AnimatedButton } from "@/components/ui/animated-button";
import { BlurText } from "@/components/ui/blur-text";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact-form" className="py-20 md:py-32 bg-coolvu-dark-blue relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Left Side: Contact Info */}
          <div className="md:w-1/2 bg-coolvu-dark-blue text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/grid-images/5.png')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-coolvu-dark-blue/90"></div>
            
            <div className="relative z-10">
              <BlurText 
                text="Let's Discuss Your Long Island Project"
                as="h2"
                className="text-3xl md:text-4xl font-bold font-heading mb-6"
              />
              <BlurText 
                text="Ready to enhance your Long Island home or business? Reach out directly or request a free, no-obligation estimate online."
                as="p"
                className="text-coolvu-light-blue font-sans mb-12 text-lg"
                delay={80}
              />
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-coolvu-medium-blue w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Call Us Directly</h4>
                    <a href="tel:516-535-9555" className="text-coolvu-light-blue hover:text-white transition-colors">(516) 535-9555</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="text-coolvu-medium-blue w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Email Us</h4>
                    <a href="mailto:paul.silverman@coolvu.com" className="text-coolvu-light-blue hover:text-white transition-colors">paul.silverman@coolvu.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-coolvu-medium-blue w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Service Area</h4>
                    <p className="text-coolvu-light-blue">Long Island, NYC, NJ, CT</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="text-coolvu-medium-blue w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Business Hours</h4>
                    <p className="text-coolvu-light-blue">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: CTA */}
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col items-center justify-center text-center bg-gray-50">
            <h3 className="text-3xl font-bold font-heading text-coolvu-dark-blue mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 font-sans mb-8 max-w-sm">
              Use our quick online form to tell us about your project and schedule your free estimate.
            </p>
            <AnimatedButton 
              href="?contact=true"
              className="w-full sm:w-auto bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-10 py-5 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none whitespace-nowrap"
            >
              Request Free Estimate
            </AnimatedButton>
          </div>

        </div>
      </div>
    </section>
  );
}
