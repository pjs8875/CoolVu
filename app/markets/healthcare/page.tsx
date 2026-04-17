import MarketPageLayout from "@/components/MarketPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Healthcare & Hospital Window Film",
  description:
    "Patient privacy, glare control, hygiene-friendly surfaces, and energy savings for clinics and hospitals. CoolVu healthcare window and surface solutions across Long Island and nearby markets.",
  path: "/markets/healthcare",
});

export default function HealthcareMarketPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <MarketPageLayout 
        title="Enhance Security and Hygiene for Healthcare"
        description={`CoolVu Window Films offer healthcare facilities solutions to improve patient privacy, maintain hygienic surfaces, and enhance energy efficiency.\n\nFrom hospitals to private clinics, our specialized films provide essential benefits including anti-microbial protection, glare reduction, and temperature control to ensure a comfortable environment for both patients and staff.`}
        features={[
          {
            title: "Anti-Microbial Protection",
            description: "Maintain a clean and safe environment with anti-microbial surface films that inhibit the growth of bacteria and other harmful microbes on high-touch surfaces."
          },
          {
            title: "Patient Privacy",
            description: "Ensure confidentiality and comfort with privacy and decorative films. Frost and patterned films obscure views while still allowing natural light to brighten patient rooms and waiting areas."
          },
          {
            title: "Energy Efficiency & Comfort",
            description: "Keep indoor temperatures stable and reduce HVAC costs with solar control films. By blocking heat and UV rays, these films create a more comfortable setting for recovery and care."
          }
        ]}
      />
      <Footer />
    </div>
  );
}
