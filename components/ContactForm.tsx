"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  zip: z.string().min(5, "Zip code is required"),
  project: z.string().min(5, "Please tell us a bit about your project"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // In a real app, this would send to an API endpoint / Zapier webhook
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
  };

  return (
    <section id="contact-form" className="py-20 md:py-32 bg-coolvu-dark-blue relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Info */}
          <div className="lg:w-2/5 bg-coolvu-dark-blue text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/grid-images/5.png')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-coolvu-dark-blue/90"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Let's Discuss Your Project</h2>
              <p className="text-coolvu-light-blue font-sans mb-12 text-lg">
                Fill out the form to request your free, no-obligation estimate. We'll get back to you within 24 hours.
              </p>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-coolvu-medium-blue w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Call Us Directly</h4>
                    <a href="tel:516-535-9555" className="text-coolvu-light-blue hover:text-white transition-colors">516-535-9555</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="text-coolvu-medium-blue w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Email Us</h4>
                    <a href="mailto:info@coolvu.com" className="text-coolvu-light-blue hover:text-white transition-colors">info@coolvu.com</a>
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

          {/* Right Side: Form */}
          <div className="lg:w-3/5 p-10 md:p-16">
            {isSubmitSuccessful ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-bold font-heading text-coolvu-dark-blue">Request Received!</h3>
                <p className="text-lg text-gray-600 font-sans max-w-md">
                  Thank you for reaching out. Paul or Claire will contact you shortly to schedule your free estimate.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="text-2xl font-bold font-heading text-coolvu-dark-blue mb-8">Request a Free Estimate</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Full Name</label>
                    <input 
                      id="name"
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      placeholder="John Doe"
                      {...register("name")}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Phone Number</label>
                    <input 
                      id="phone"
                      type="tel" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      placeholder="(516) 535-9555"
                      {...register("phone")}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      placeholder="john@example.com"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="zip" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Zip Code</label>
                    <input 
                      id="zip"
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.zip ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      placeholder="11501"
                      {...register("zip")}
                    />
                    {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="project" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Project Details</label>
                  <textarea 
                    id="project"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.project ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors resize-none`}
                    placeholder="Tell us what you're looking for (e.g. heat reduction for living room, security film for storefront...)"
                    {...register("project")}
                  ></textarea>
                  {errors.project && <p className="text-red-500 text-xs mt-1">{errors.project.message}</p>}
                </div>

                <div className="pt-4">
                  <AnimatedButton 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white py-4 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-xl shadow-md border-none disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </AnimatedButton>
                </div>
                <p className="text-center text-xs text-gray-400 mt-4">Your information is secure and will never be shared.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}