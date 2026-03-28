import { AnimatedButton } from "@/components/ui/animated-button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-coolvu-off-white relative">
      {/* Diagonal background split */}
      <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-coolvu-medium-blue rounded-full"></div>
              <span className="text-xs md:text-sm font-sans font-bold tracking-[0.2em] text-coolvu-dark-blue uppercase">
                Book Your Service
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-coolvu-dark-blue mb-6 leading-tight">
              Ready for <br className="hidden md:block" />
              Comfort?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-sans mb-10 max-w-lg">
              Schedule your free estimate in just a few minutes. Paul and the team are ready to help you find the perfect window film solution.
            </p>
            <AnimatedButton className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-dark-blue px-8 py-4 md:px-10 md:py-6 font-sans font-bold text-sm md:text-base tracking-wider uppercase transition-colors rounded-xl shadow-xl border-none">
              Get Your Free Estimate
            </AnimatedButton>
          </div>

          {/* Contact Info Card */}
          <div className="bg-coolvu-dark-blue rounded-3xl p-8 md:p-12 shadow-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-8">
              Contact Us Directly
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-coolvu-medium-blue/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-coolvu-light-blue" />
                </div>
                <div>
                  <p className="text-sm font-sans text-coolvu-light-blue mb-1 uppercase tracking-wider font-bold">Phone Number</p>
                  <a href="tel:516-535-9555" className="text-xl md:text-2xl font-sans font-medium hover:text-coolvu-medium-blue transition-colors">
                    (516) 535-9555
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-coolvu-medium-blue/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-coolvu-light-blue" />
                </div>
                <div>
                  <p className="text-sm font-sans text-coolvu-light-blue mb-1 uppercase tracking-wider font-bold">Email Address</p>
                  <a href="mailto:info@coolvu-li.com" className="text-lg md:text-xl font-sans font-medium hover:text-coolvu-medium-blue transition-colors">
                    info@coolvu-li.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-coolvu-medium-blue/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-coolvu-light-blue" />
                </div>
                <div>
                  <p className="text-sm font-sans text-coolvu-light-blue mb-1 uppercase tracking-wider font-bold">Service Area</p>
                  <p className="text-lg md:text-xl font-sans font-medium">
                    Long Island, Brooklyn, Queens, CT & NJ
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}