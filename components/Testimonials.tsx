import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Long Island, NY",
    text: "Paul was incredibly professional. The 3M film he installed in our sunroom dropped the temperature by at least 10 degrees. We can finally use the room in the afternoon!",
    rating: 5,
  },
  {
    name: "David R.",
    location: "Brooklyn, NY",
    text: "We needed security film for our storefront after a recent break-in down the street. CoolVu responded immediately, gave a fair quote, and the installation was flawless.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Queens, NY",
    text: "I was worried the window tint would make my house too dark, but Paul helped me pick the perfect shade. It cuts the glare on my TV perfectly and you can barely tell it's there.",
    rating: 5,
  },
  {
    name: "Michael T.",
    location: "Stamford, CT",
    text: "Highly recommend! They showed up exactly when they said they would, left the house spotless, and the lifetime warranty gives us great peace of mind.",
    rating: 5,
  },
  {
    name: "Amanda K.",
    location: "Hoboken, NJ",
    text: "The frosted privacy film they added to our office conference room looks incredibly sleek and professional. Great communication throughout the whole process.",
    rating: 5,
  },
  {
    name: "Robert W.",
    location: "Nassau County, NY",
    text: "You can tell Paul really cares about his customers. He didn't try to upsell us on things we didn't need. Honest, local business doing great work.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-coolvu-dark-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            What Our Customers Are Saying
          </h2>
          <p className="text-base md:text-lg text-coolvu-light-blue font-sans">
            Don't just take our word for it. See why home and business owners across the NY Metro area trust CoolVu.
          </p>
        </div>

        <div className="columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="break-inside-avoid bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 relative"
            >
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-10 md:h-10 text-coolvu-medium-blue/10" />
              <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 font-sans text-xs md:text-base leading-relaxed mb-4 md:mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold font-heading text-sm md:text-base text-coolvu-dark-blue">
                  {testimonial.name}
                </p>
                <p className="text-xs md:text-sm font-sans text-gray-500">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-white/20 shadow-xl">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600 border-2 border-white">G</div>
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-xs font-bold text-red-600 border-2 border-white">O</div>
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-xs font-bold text-yellow-600 border-2 border-white">O</div>
            </div>
            <p className="text-sm font-sans font-medium text-coolvu-dark-blue">
              Based on <span className="font-bold">25+ Google Reviews</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}