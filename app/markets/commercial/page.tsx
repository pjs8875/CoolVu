import MarketPageLayout from "@/components/MarketPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CommercialMarketPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <MarketPageLayout 
        title="Enhance Security, Comfort, and Branding for Commercial Buildings"
        description={`CoolVu Window Films provides commercial buildings with specialized window film installations that enhance energy efficiency, security, privacy, and aesthetics, creating a safer, more comfortable, and visually appealing environment.\n\nCoolVu Window Film offers a versatile range of glass and surface solutions tailored to meet the unique needs of commercial buildings. Project managers and interior designers choose CoolVu as their go-to partner because of its ability to deliver high-performance films that blend functionality, security, and aesthetics, helping create comfortable, secure, and visually appealing commercial spaces.`}
        features={[
          {
            title: "Why Choose CoolVu?",
            description: "CoolVu helps enhance energy efficiency, safety, and overall building performance. With CoolVu's solar control films, commercial properties can reduce cooling costs and improve indoor comfort for tenants and employees by blocking excess heat and glare. Additionally, security and safety films protect buildings from potential threats by reinforcing windows, which are critical for high-traffic areas in vulnerable locations.\n\nCoolVu's team works closely with project managers to ensure that installations meet regulatory standards and specific project requirements, making CoolVu solutions an efficient, cost-effective choice for any commercial building.\n\nInterior designers value CoolVu's extensive range of decorative and privacy films for creating cohesive, modern aesthetics that align with each client's brand identity. Privacy and decorative films are ideal for office spaces and conference rooms, providing customized patterns, frosted textures, and logos that enhance privacy while allowing natural light to pass through.\n\nCoolVu also offers smart and electrochromic films that allow designers to create dynamic spaces where windows and partitions can switch from clear to opaque on demand. These solutions are perfect for spaces that require flexible privacy, such as meeting rooms or executive offices, adding a high-tech, luxurious touch to any interior."
          },
          {
            title: "Comprehensive Solutions",
            description: "CoolVu's diverse selection of films—ranging from anti-graffiti for protection against vandalism to anti-fog for clear visibility in high-moisture environments—allows both project managers and interior designers to meet the full spectrum of commercial building demands. CoolVu's products are tailored to create safe, efficient, and stylish spaces, providing a comprehensive solution for today's commercial market needs."
          }
        ]}
      />
      <Footer />
    </div>
  );
}