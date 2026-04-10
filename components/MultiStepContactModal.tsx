"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, ArrowRight, ArrowLeft, CheckCircle2, Home, Building2, GraduationCap, Landmark, HeartPulse, Church, Store, Server } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { motion, AnimatePresence } from "framer-motion";
import { useForm as useFormspree } from "@formspree/react";

const TOTAL_STEPS = 2;

const formSchema = z.object({
  // Step 1 — Needs
  propertyType: z.string().min(1, "Please select a property type"),
  problemToSolve: z.string().min(1, "Please select the problem you are trying to solve"),
  productsInterested: z.string().min(1, "Please select the products you are interested in"),

  // Step 2 — Contact
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  howDidYouFindUs: z.string().min(1, "Please tell us how you found us"),
  smsConsent: z.boolean().refine(val => val === true, "You must agree to the privacy policy"),
});

type FormData = z.infer<typeof formSchema>;

const propertyTypes = [
  { id: "Residential", label: "Residential", icon: Home },
  { id: "Commercial", label: "Commercial", icon: Building2 },
  { id: "Educational", label: "Educational", icon: GraduationCap },
  { id: "Government", label: "Government", icon: Landmark },
  { id: "Healthcare", label: "Healthcare", icon: HeartPulse },
  { id: "Places of Worship", label: "Places of Worship", icon: Church },
  { id: "Retail", label: "Retail", icon: Store },
  { id: "Data Centers", label: "Data Centers", icon: Server },
];

export default function MultiStepContactModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isOpen = searchParams.get("contact") === "true";

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formspreeState, handleSubmitFormspree] = useFormspree("xaqlkbdg");

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    getValues,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      propertyType: "",
      problemToSolve: "",
      productsInterested: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      howDidYouFindUs: "",
      smsConsent: false,
    }
  });

  const selectedPropertyType = watch("propertyType");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form if closed
      setTimeout(() => {
        if (!isOpen) {
          setStep(1);
          setIsSuccess(false);
          reset();
        }
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, reset]);

  useEffect(() => {
    if (formspreeState.succeeded) {
      setIsSuccess(true);
      setIsSubmitting(false);

      if (typeof window !== "undefined") {
        const values = getValues();
        const leadParams = {
          form_id: "booking_modal",
          how_did_you_find_us: values.howDidYouFindUs,
          property_type: values.propertyType,
          problem_to_solve: values.problemToSolve,
          products_interested: values.productsInterested,
        };

        const w = window as Window & { dataLayer?: Record<string, unknown>[]; gtag?: (...args: unknown[]) => void };
        w.dataLayer = w.dataLayer || [];

        if (typeof w.gtag === "function") {
          w.gtag("event", "generate_lead", leadParams);
        } else {
          w.dataLayer.push({ event: "generate_lead", ...leadParams });
        }
      }
    }
    if (formspreeState.errors) {
      console.error("Formspree errors:", formspreeState.errors);
      alert("There was a problem submitting your form. Please check the fields and try again.");
      setIsSubmitting(false);
    }
  }, [formspreeState.succeeded, formspreeState.errors, getValues]);

  const closeModal = () => {
    router.push("/");
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) {
      fieldsToValidate = ["propertyType", "problemToSolve", "productsInterested"];
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => prev + 1);
      // Scroll to top of the modal body when advancing
      setTimeout(() => {
        const modalBody = document.getElementById("modal-form-body");
        if (modalBody) {
          modalBody.scrollTo({ top: 0, behavior: "instant" });
        }
      }, 10);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    setTimeout(() => {
      const modalBody = document.getElementById("modal-form-body");
      if (modalBody) {
        modalBody.scrollTo({ top: 0, behavior: "instant" });
      }
    }, 10);
  };

  const onSubmit = async (data: FormData) => {
    console.log("Submitting form data:", data);
    setIsSubmitting(true);
    
    try {
      // Pass the validated data directly to Formspree's handler
      await handleSubmitFormspree({
        ...data,
        _replyto: data.email,
        _subject: `New Lead from ${data.firstName} ${data.lastName}`,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was a problem submitting your form. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-coolvu-dark-blue/80 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            {!isSuccess && <div className="w-3 h-3 rounded-full bg-[#007bff]" />}
            <h2 className="text-lg font-bold font-sans text-gray-600 uppercase tracking-wider">
              {isSuccess ? "Request Received" : "Booking Progress"}
            </h2>
          </div>
          <button 
            onClick={closeModal}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSuccess && (
          <div className="w-full bg-white px-8 pt-12 pb-12 border-b border-gray-100">
            <div className="relative max-w-lg mx-auto">
              {/* Background Line */}
              <div className="absolute top-1/2 left-0 w-full h-3 bg-gray-100 -translate-y-1/2 rounded-full" />
              
              {/* Active Line */}
              <div 
                className="absolute top-1/2 left-0 h-3 bg-[#007bff] -translate-y-1/2 rounded-full transition-all duration-700 ease-in-out"
                style={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
              />

              {/* Step Indicators */}
              <div className="relative flex justify-between z-0">
                {[1, 2].map((i) => (
                  <div key={i} className="flex flex-col items-center justify-center relative">
                    <div 
                      className={`w-6 h-6 rounded-full border-[3px] transition-colors duration-700 z-10 ${
                        step >= i ? "border-[#007bff] bg-[#007bff]" : "border-gray-400 bg-white"
                      }`}
                    />
                    <span className={`text-sm font-bold absolute top-8 whitespace-nowrap transition-colors duration-700 ${
                      step >= i ? "text-[#007bff]" : "text-gray-500"
                    }`}>
                      {i === 1 ? "Needs" : "Contact"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Van Image */}
              <div 
                className="absolute top-1/2 transition-all duration-700 ease-in-out z-20"
                style={{ 
                  left: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%`,
                  transform: `translate(-50%, -50%)`
                }}
              >
                <div className="relative w-32 h-14 -mt-8">
                  <Image 
                    src="/coolvu-van-transparent.png" 
                    alt="CoolVu Van" 
                    fill 
                    sizes="128px"
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form Body & Footer */}
        {isSuccess ? (
          <div id="modal-form-body" className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar flex flex-col items-center justify-center text-center py-12 space-y-6">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-3xl font-bold font-heading text-coolvu-dark-blue">Thank You!</h3>
            <p className="text-lg text-gray-600 font-sans max-w-md">
              Your request has been successfully submitted. Paul or Claire will contact you shortly to schedule your free estimate.
            </p>
            <AnimatedButton 
              onClick={closeModal}
              className="mt-8 bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none whitespace-nowrap"
            >
              Close Window
            </AnimatedButton>
          </div>
        ) : (
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1 overflow-hidden">
            
            <div id="modal-form-body" className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar space-y-8">
              {/* STEP 1 */}
              <div className={step === 1 ? "block" : "hidden"}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-base font-bold text-gray-800 font-sans uppercase tracking-wider">
                      1. What type of property is this for? *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {propertyTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = selectedPropertyType === type.id;
                        return (
                          <div 
                            key={type.id}
                            onClick={() => {
                              setValue("propertyType", type.id, { shouldValidate: true });
                              setTimeout(() => {
                                const nextEl = document.getElementById("problemToSolve");
                                if (nextEl) {
                                  nextEl.scrollIntoView({ behavior: "smooth", block: "center" });
                                  nextEl.focus();
                                }
                              }, 150);
                            }}
                            className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 transition-all ${
                              isSelected 
                                ? "border-coolvu-medium-blue bg-blue-50 text-coolvu-medium-blue" 
                                : "border-gray-200 hover:border-coolvu-light-blue hover:bg-gray-50 text-gray-600"
                            }`}
                          >
                            <Icon size={24} className={isSelected ? "text-coolvu-medium-blue" : "text-gray-400"} />
                            <span className="text-sm font-semibold">{type.label}</span>
                          </div>
                        );
                      })}
                    </div>
                    {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="problemToSolve" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">What Problem Are You Trying to Solve? *</label>
                    <select 
                      id="problemToSolve"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.problemToSolve ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      {...register("problemToSolve")}
                      onChange={(e) => {
                        setValue("problemToSolve", e.target.value, { shouldValidate: true });
                        setTimeout(() => {
                          const nextEl = document.getElementById("productsInterested");
                          if (nextEl) {
                            nextEl.scrollIntoView({ behavior: "smooth", block: "center" });
                            nextEl.focus();
                          }
                        }, 150);
                      }}
                    >
                      <option value="">Select Problem</option>
                      <option value="Heat/Glare">Heat / Glare</option>
                      <option value="Security">Security</option>
                      <option value="Privacy">Privacy</option>
                      <option value="Fading">Fading</option>
                      <option value="Aesthetics">Aesthetics</option>
                    </select>
                    {errors.problemToSolve && <p className="text-red-500 text-sm mt-1">{errors.problemToSolve.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="productsInterested" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">What Products Are You Interested In? *</label>
                    <select 
                      id="productsInterested"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.productsInterested ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                      {...register("productsInterested")}
                      onChange={(e) => {
                        setValue("productsInterested", e.target.value, { shouldValidate: true });
                        setTimeout(() => {
                          const nextEl = document.getElementById("next-step-btn");
                          if (nextEl) {
                            nextEl.scrollIntoView({ behavior: "smooth", block: "center" });
                            nextEl.focus();
                          }
                        }, 150);
                      }}
                    >
                      <option value="">Select Product</option>
                      <option value="Solar Film">Solar Film</option>
                      <option value="Security Film">Security Film</option>
                      <option value="Decorative Film">Decorative Film</option>
                      <option value="Surface Finishes">Surface Finishes</option>
                      <option value="I'm Not Sure">I'm Not Sure</option>
                    </select>
                    {errors.productsInterested && <p className="text-red-500 text-sm mt-1">{errors.productsInterested.message}</p>}
                  </div>
                </div>
              </div>

              {/* STEP 2 — Contact */}
              <div className={step === 2 ? "block" : "hidden"}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">First Name *</label>
                      <input 
                        id="firstName"
                        type="text" 
                        className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                        {...register("firstName")}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Last Name *</label>
                      <input 
                        id="lastName"
                        type="text" 
                        className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                        {...register("lastName")}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Email *</label>
                      <input 
                        id="email"
                        type="email" 
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                        {...register("email")}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">Phone Number *</label>
                      <input 
                        id="phone"
                        type="tel" 
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-coolvu-medium-blue'} focus:outline-none focus:ring-2 bg-gray-50/50 transition-colors`}
                        {...register("phone")}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="howDidYouFindUs" className="text-sm font-bold text-gray-700 font-sans uppercase tracking-wider">How did you find us? *</label>
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
                    {errors.howDidYouFindUs && <p className="text-red-500 text-sm mt-1">{errors.howDidYouFindUs.message}</p>}
                  </div>

                  <div className="space-y-2 pt-4">
                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="smsConsent" 
                        className="mt-1 w-4 h-4 text-coolvu-medium-blue rounded border-gray-300 focus:ring-coolvu-medium-blue"
                        {...register("smsConsent")}
                      />
                      <div className="space-y-2">
                        <label htmlFor="smsConsent" className="text-sm font-bold text-gray-700 cursor-pointer uppercase tracking-wider">I agree to the privacy policy *</label>
                        <p className="text-xs text-gray-500 leading-relaxed border border-gray-200 p-3 rounded-lg bg-gray-50">
                          By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. Message frequency may vary. Privacy Policy — www.coolvu.com/terms/ - Reply HELP for more information. Reply STOP to opt-out.
                        </p>
                      </div>
                    </div>
                    {errors.smsConsent && <p className="text-red-500 text-sm mt-1">{errors.smsConsent.message}</p>}
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between mt-auto">
              {step > 1 ? (
                <button 
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 text-gray-600 hover:text-coolvu-medium-blue font-bold text-sm uppercase tracking-wider transition-colors"
                >
                  <ArrowLeft size={16} /> Back
                </button>
              ) : (
                <div></div> // Empty div to keep 'Next' button on the right
              )}

              {step < TOTAL_STEPS ? (
                <AnimatedButton 
                  id="next-step-btn"
                  type="button"
                  onClick={nextStep}
                  className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none whitespace-nowrap"
                >
                  Next Step
                </AnimatedButton>
              ) : (
                <AnimatedButton 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-6 py-3 md:px-8 md:py-4 font-sans font-bold text-xs md:text-sm tracking-wider uppercase transition-colors rounded-xl shadow-lg border-none whitespace-nowrap disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </AnimatedButton>
              )}
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}
