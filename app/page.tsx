import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import MarketsServed from "@/components/MarketsServed";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ServiceAreas from "@/components/ServiceAreas";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <MarketsServed />
      <Process />
      <ServiceAreas />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}

