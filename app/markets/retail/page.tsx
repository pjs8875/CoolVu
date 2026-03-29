import MarketPageLayout from "@/components/MarketPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RetailMarketPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <MarketPageLayout 
        title="Enhance Security, Comfort, and Branding for Retail Stores"
        description={`CoolVu Window Films offer tailored solutions for retail environments, providing security, energy efficiency, UV protection, and customized aesthetics to create a comfortable, safe, and visually appealing shopping experience.\n\nRetail stores have unique needs when it comes to window treatments, balancing aesthetics, customer comfort, and security. CoolVu Window Film offers tailored solutions to address these challenges, enhancing the store environment, protecting merchandise, and reducing operational costs.`}
        features={[
          {
            title: "Energy Efficiency and Temperature Control",
            description: "Retail stores benefit from CoolVu's solar control films, which help reduce indoor heat by blocking a significant percentage of solar energy. By reducing reliance on air conditioning, stores can lower energy costs while maintaining a comfortable temperature for customers and employees. This contributes to a more enjoyable shopping experience and a more efficient, eco-friendly operation.\n\nBright sunlight streaming through windows can cause glare, making it hard for customers to see merchandise clearly. CoolVu's glare reduction films minimize this issue, ensuring that displays remain well-lit without the distracting effect of glare. This leads to a better shopping experience and encourages customers to spend more time in the store."
          },
          {
            title: "UV Protection for Merchandise Preservation",
            description: "Retailers often face the challenge of sun exposure damaging and fading merchandise displayed near windows. CoolVu window films block up to 99% of harmful UV rays, preserving the appearance of clothing, accessories, and displays. This not only keeps products looking new but also reduces the need for frequent product rotation and replacement."
          },
          {
            title: "Privacy and Security Films for Asset Protection",
            description: "Retail spaces with large windows can benefit from privacy and security films, especially in high-theft areas. Privacy films deter potential shoplifters by obscuring the store's interior from outside view, while security films strengthen glass against break-ins and vandalism. These solutions help protect valuable inventory and add a layer of security to storefronts."
          },
          {
            title: "Anti-Graffiti Films for Easy Maintenance",
            description: "CoolVu's anti-graffiti films offer a protective layer for storefront windows, making it easy to remove graffiti or other markings without damaging the glass. For retail locations in busy urban areas, this solution saves both time and money on cleaning and replacement costs, helping stores maintain a clean, professional appearance."
          },
          {
            title: "Decorative Films for Custom Branding",
            description: "With decorative film options, CoolVu enables retailers to customize their storefronts with branding, logos, and design elements. These films can create a polished, cohesive look that aligns with a brand's identity, making the store more inviting and recognizable to customers."
          },
          {
            title: "Comprehensive Solutions",
            description: "By providing these specialized window film solutions, CoolVu helps retail stores enhance customer experience, protect inventory, and reduce costs, ultimately supporting a more appealing and profitable store environment."
          }
        ]}
      />
      <Footer />
    </div>
  );
}