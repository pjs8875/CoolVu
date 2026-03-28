import Image from "next/image";
import { CalendarCheck, Clock, ShieldCheck, ThumbsUp } from "lucide-react";

const processSteps = [
  {
    icon: CalendarCheck,
    title: "Request an Estimate",
    description: "Fill out our quick online form or give us a call. We'll schedule a convenient time to visit your property.",
  },
  {
    icon: Clock,
    title: "Expert Consultation",
    description: "We assess your needs, take precise measurements, and recommend the perfect 3M™ solution for your space.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Installation",
    description: "Our certified technicians arrive on time and complete the installation cleanly and efficiently.",
  },
  {
    icon: ThumbsUp,
    title: "Lifetime Warranty",
    description: "Enjoy your upgraded space with total peace of mind, backed by our comprehensive lifetime warranty.",
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-32 bg-coolvu-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 bg-coolvu-medium-blue rounded-full"></div>
            <span className="text-xs md:text-sm font-sans font-bold tracking-[0.2em] text-coolvu-dark-blue uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-coolvu-dark-blue mb-6">
            Our Simple Process
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-sans">
            Getting premium window film installed shouldn't be complicated. Follow these easy steps to upgrade your comfort and security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image 
              src="/grid-images/6.png" 
              alt="Professional window film installation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coolvu-dark-blue/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-heading font-bold text-xl md:text-2xl">
                "We treat your home like our own."
              </p>
              <p className="text-coolvu-light-blue font-sans mt-2">
                — Paul & Claire Silverman, Owners
              </p>
            </div>
          </div>

          {/* Steps Side */}
          <div className="flex flex-col gap-6 md:gap-8 order-1 lg:order-2">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-coolvu-medium-blue/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-coolvu-medium-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-heading text-coolvu-dark-blue mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-sans leading-relaxed">
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