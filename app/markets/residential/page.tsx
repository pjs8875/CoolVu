import MarketPageLayout from "@/components/MarketPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Residential Window Film & Tinting",
  description:
    "Solar control, privacy, decorative, and security window film for Long Island homes. CoolVu improves comfort, UV protection, and curb appeal with professional residential installation.",
  path: "/markets/residential",
});

export default function ResidentialMarketPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <MarketPageLayout 
        title="Enhance Security and Comfort for Residential Homes"
        description={`CoolVu Window Films offer homeowners solutions to improve energy efficiency, privacy, and security, all while enhancing the comfort and aesthetics of your home.\n\nCoolVu Window Film provides homeowners with a range of high-quality window film solutions that enhance comfort, protect interiors, and increase privacy. Each product is carefully designed to meet the unique needs of residential settings, whether you're looking to reduce energy costs, protect your family, or improve your home's aesthetic.`}
        features={[
          {
            title: "Why Choose CoolVu?",
            description: "CoolVu's solar control films are designed to block heat and reduce glare, helping homeowners create a comfortable indoor environment and lower cooling costs. By reducing heat gain, solar films lower the strain on air conditioning, resulting in significant energy savings. Solar control films block up to 99% of harmful UV rays, preventing fading and extending the life of your furniture, flooring, and artwork."
          },
          {
            title: "Privacy and Decorative Films: Style and Discretion",
            description: "Privacy is essential in a home, and CoolVu's privacy and decorative films provide a perfect blend of style and discretion. Homeowners can choose from various patterns and designs to enhance the appearance of their windows while creating a more private space. Frosted and etched films allow natural light to enter while obscuring visibility from the outside, ideal for bathrooms, bedrooms, and street-facing windows. Decorative films offer customizable designs that add an elegant touch to any room, transforming standard windows into eye-catching features.\n\nCoolVu also offers transitional, smart and electrochromic films that allow designers to create dynamic spaces where windows and partitions can switch from clear to opaque on demand. These solutions add a high-tech, luxurious touch to any interior."
          },
          {
            title: "Security and Safety Films: Peace of Mind for Your Family",
            description: "CoolVu's security window films are specially crafted to strengthen your windows, providing additional protection for you and your loved ones. These films are ideal for homeowners looking to improve safety and security without replacing their windows. Security films make glass harder to break, adding a delay that deters intruders."
          },
          {
            title: "Comprehensive Solutions",
            description: "With a broad range of film solutions, homeowners can select the perfect option to meet their needs. Whether looking for added security, UV protection, privacy, or decorative options, CoolVu is here to help make your home a more beautiful, secure, and comfortable place to live."
          }
        ]}
      />
      <Footer />
    </div>
  );
}