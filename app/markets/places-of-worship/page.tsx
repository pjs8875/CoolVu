import MarketPageLayout from "@/components/MarketPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PlacesOfWorshipMarketPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <MarketPageLayout 
        title="Security for Churches"
        description={`Glass security systems for places of worship.\n\nWe understand the importance of providing a secure environment for places of worship. Churches, mosques, synagogues, temples, and other religious institutions are meant to be sanctuaries where worshippers find solace, peace, and community. However, in today's world, ensuring the safety and security of these sacred spaces has become a critical concern.`}
        features={[
          {
            title: "Protection for Synagogue's",
            description: "Security window films are commonly referred to as \"ballistic window films\". However, security window films are not ballistically rated unless installed on ballistically rated glass. Appropriate for churches and other at-risk 'soft targets', security window films help contain and in some cases prevent glass fragmentation which can cause severe or fatal injuries. Like ballistic glass, window film is designed to delay entry through glass upon attack. In most cases, bullets and other projectiles will penetrate these films when installed on typical glass. Security window film is designed to hold glass in place when broken, which creates delayed access into a building by an active shooter."
          },
          {
            title: "Security for Places of Worship",
            description: "CoolVu has a proven track record of providing top-notch security solutions to religious institutions across diverse faiths. Our dedicated team of experts understands the sensitivity and importance of creating a secure yet welcoming atmosphere within places of worship. We work closely with religious communities, understanding their specific requirements, and offering solutions aligned with their values and practices while educating how bullet-resistant protective glass and films can help slow, disrupt, or prevent active shooter situations. Available in many thicknesses, glass protection or security film products are installed on the interior of churches and synagogues, creating a clear shield to intruders. Properly installed, these security film products are \"anchored\", or attached, to the existing glazing frame with a structural caulk that bonds the film and broken glass to the existing window frame upon attack.\n\n• Free on-site glass security assessments\n• Guidance navigating security grants available for religious institutions seeking to enhance their security infrastructure\n• Available in thicknesses from 4 - 33 mil"
          }
        ]}
      />
      <Footer />
    </div>
  );
}