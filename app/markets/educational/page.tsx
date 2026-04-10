import MarketPageLayout from "@/components/MarketPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Schools & Campuses",
  description:
    "Glare reduction, temperature control, security, and privacy for classrooms and campus buildings. CoolVu supports safer, more comfortable learning environments on Long Island and nearby regions.",
  path: "/markets/educational",
});

export default function EducationalMarketPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <MarketPageLayout 
        title="Enhance Security, Comfort, and Safety for Schools"
        description={`CoolVu Window Films provide educational institutions with advanced solutions for temperature control, glare reduction, security, and privacy, creating safer and more comfortable learning environments for students and staff.\n\nCoolVu Window Film provides schools and educational facilities with essential solutions that promote a safe, energy-efficient, and comfortable learning environment. By offering specialized window film products tailored to the unique needs of educational institutions, CoolVu helps schools protect their students, faculty, and resources.`}
        features={[
          {
            title: "Why Choose CoolVu?",
            description: "Security and safety films are a key asset for schools, reinforcing windows against breakage and intrusion. In cases of potential vandalism or emergency situations, these films make glass harder to penetrate, holding shattered glass in place to reduce the risk of injuries. With anti-graffiti films, CoolVu allows schools to maintain a clean and welcoming appearance by creating a protective layer that resists scratches and damage, keeping maintenance costs low and campus appearances professional.\n\nEnergy-saving films are another invaluable addition for schools aiming to reduce overhead costs and create stable learning environments. By minimizing heat gain and blocking UV rays, these films help regulate indoor temperatures, making classrooms more comfortable while reducing cooling expenses. Additionally, solar control films protect students and teachers from harmful UV exposure, ensuring a healthier atmosphere. Decorative and privacy films are ideal for specialized spaces like counseling offices, nurse stations, and testing areas. Frosted or patterned films offer privacy while allowing natural light to filter through, fostering an open yet secure environment."
          },
          {
            title: "Comprehensive Solutions",
            description: "CoolVu Window Film empowers educational facilities with practical and affordable solutions that elevate safety, efficiency, and overall campus aesthetics, supporting a better, more focused learning experience for all."
          }
        ]}
      />
      <Footer />
    </div>
  );
}