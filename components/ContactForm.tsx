"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  companyName: z.string().optional(),
  streetAddress: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "Zip code is required"),
  role: z.string().min(1, "Role is required"),
  projectStage: z.string().min(1, "Project stage is required"),
  propertyType: z.string().min(1, "Property type is required"),
  problemToSolve: z.string().min(1, "Please select the problem you are trying to solve"),
  windowsCount: z.string().min(1, "Please select the number of windows"),
  productsInterested: z.string().min(1, "Please select the products you are interested in"),
  howDidYouFindUs: z.string().min(1, "Please tell us how you found us"),
  projectDetails: z.string().min(5, "Please tell us a bit about your project"),
  smsConsent: z.boolean().refine(val => val === true, "You must agree to the privacy policy"),
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
                    <a href="tel:844-426-6588" className="text-coolvu-light-blue hover:text-white transition-colors">(844) 426-6588</a>
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
                <p className="text-sm text-gray-500 mb-6 -mt-6">Fields marked with an <span className="text-red-500">*</span> are required</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">First Name *</label>
                    <input 
                      id="firstName"
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      {...register("firstName")}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Last Name *</label>
                    <input 
                      id="lastName"
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      {...register("lastName")}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Email Address *</label>
                    <input 
                      id="email"
                      type="email" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Phone Number *</label>
                    <input 
                      id="phone"
                      type="tel" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      {...register("phone")}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="companyName" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Company Name</label>
                  <input 
                    id="companyName"
                    type="text" 
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors border-gray-200 focus:ring-coolvu-medium-blue`}
                    {...register("companyName")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="streetAddress" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Street Address</label>
                  <input 
                    id="streetAddress"
                    type="text" 
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors border-gray-200 focus:ring-coolvu-medium-blue`}
                    {...register("streetAddress")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">City *</label>
                    <input 
                      id="city"
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.city ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      {...register("city")}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="state" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">State *</label>
                    <select 
                      id="state"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.state ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      {...register("state")}
                    >
                      <option value="">Select State</option>
                      <option value="NY">New York</option>
                      <option value="NJ">New Jersey</option>
                      <option value="CT">Connecticut</option>
                    </select>
                    {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="zipCode" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Zip Code *</label>
                    <input 
                      id="zipCode"
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.zipCode ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      {...register("zipCode")}
                    />
                    {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">My Role *</label>
                  <select 
                    id="role"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.role ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                    {...register("role")}
                  >
                    <option value="">Select Role</option>
                    <option value="Homeowner">Homeowner</option>
                    <option value="Business Owner">Business Owner</option>
                    <option value="Architect">Architect</option>
                    <option value="Contractor">Contractor</option>
                    <option value="Property Manager">Property Manager</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectStage" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Stage of Project *</label>
                  <select 
                    id="projectStage"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.projectStage ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                    {...register("projectStage")}
                  >
                    <option value="">Select Stage</option>
                    <option value="Needing Information">Needing Information</option>
                    <option value="Ready to Buy">Ready to Buy</option>
                    <option value="Budgeting">Budgeting</option>
                  </select>
                  {errors.projectStage && <p className="text-red-500 text-xs mt-1">{errors.projectStage.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="propertyType" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Property Type *</label>
                  <select 
                    id="propertyType"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.propertyType ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                    {...register("propertyType")}
                  >
                    <option value="">Select Property Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Educational">Educational</option>
                    <option value="Government">Government</option>
                  </select>
                  {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="problemToSolve" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">What Problem Are You Trying to Solve For? *</label>
                  <select 
                    id="problemToSolve"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.problemToSolve ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                    {...register("problemToSolve")}
                  >
                    <option value="">Select Problem</option>
                    <option value="Heat/Glare">Heat / Glare</option>
                    <option value="Security">Security</option>
                    <option value="Privacy">Privacy</option>
                    <option value="Fading">Fading</option>
                    <option value="Aesthetics">Aesthetics</option>
                  </select>
                  {errors.problemToSolve && <p className="text-red-500 text-xs mt-1">{errors.problemToSolve.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="windowsCount" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">How Many Windows Need Treatment? *</label>
                  <select 
                    id="windowsCount"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.windowsCount ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                    {...register("windowsCount")}
                  >
                    <option value="">Select Amount</option>
                    <option value="1-10">1-10</option>
                    <option value="11-25">11-25</option>
                    <option value="26-50">26-50</option>
                    <option value="50+">50+</option>
                  </select>
                  {errors.windowsCount && <p className="text-red-500 text-xs mt-1">{errors.windowsCount.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="productsInterested" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">What Types of Products Are You Interested In? *</label>
                  <select 
                    id="productsInterested"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.productsInterested ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                    {...register("productsInterested")}
                  >
                    <option value="">Select Product</option>
                    <option value="Solar Film">Solar Film</option>
                    <option value="Security Film">Security Film</option>
                    <option value="Decorative Film">Decorative Film</option>
                    <option value="Surface Finishes">Surface Finishes</option>
                    <option value="I'm Not Sure">I'm Not Sure</option>
                  </select>
                  {errors.productsInterested && <p className="text-red-500 text-xs mt-1">{errors.productsInterested.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="howDidYouFindUs" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">How Did You Find Out About Us? *</label>
                  <select 
                    id="howDidYouFindUs"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.howDidYouFindUs ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                    {...register("howDidYouFindUs")}
                  >
                    <option value="">Select Source</option>
                    <option value="Google">Google</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral</option>
                    <option value="Advertisement">Advertisement</option>
                  </select>
                  {errors.howDidYouFindUs && <p className="text-red-500 text-xs mt-1">{errors.howDidYouFindUs.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectDetails" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Tell Us About Your Project *</label>
                  <textarea 
                    id="projectDetails"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.projectDetails ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors resize-none`}
                    {...register("projectDetails")}
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">Notes, details, open questions, etc.</p>
                  {errors.projectDetails && <p className="text-red-500 text-xs mt-1">{errors.projectDetails.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Upload Projects, Files, Images, Etc.</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
                    <p className="text-sm text-gray-600 mb-4">Drop files here or</p>
                    <button type="button" className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-md font-sans text-sm transition-colors">
                      Select files
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Max. file size: 50 MB.</p>
                </div>

                <div className="space-y-2 pt-4">
                  <label className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">SMS Messages *</label>
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="smsConsent" 
                      className="mt-1 w-4 h-4 text-coolvu-medium-blue rounded border-gray-300 focus:ring-coolvu-medium-blue"
                      {...register("smsConsent")}
                    />
                    <div className="space-y-2">
                      <label htmlFor="smsConsent" className="text-sm text-gray-700 cursor-pointer">I agree to the privacy policy.</label>
                      <p className="text-xs text-gray-500 leading-relaxed border border-gray-200 p-3 rounded-lg bg-gray-50">
                        By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. Message frequency may vary. Privacy Policy — www.coolvu.com/terms/ - Reply HELP for more information. Reply STOP to opt-out.
                      </p>
                    </div>
                  </div>
                  {errors.smsConsent && <p className="text-red-500 text-xs mt-1">{errors.smsConsent.message}</p>}
                </div>

                <div className="pt-6">
                  <AnimatedButton 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-10 py-4 font-sans font-bold text-sm tracking-wider uppercase transition-colors rounded-md shadow-md border-none disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </AnimatedButton>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}