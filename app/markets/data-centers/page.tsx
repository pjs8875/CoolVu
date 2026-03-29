import MarketPageLayout from "@/components/MarketPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DataCentersMarketPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <MarketPageLayout 
        title="Enhance Security, Comfort, and Branding for Data Centers"
        description={`CoolVu Window Films offer advanced solutions to protect data centers by enhancing temperature control, reducing energy costs, and safeguarding sensitive equipment from UV exposure and break-ins.\n\nCoolVu Window Film provides essential support for data centers by offering specialized window film solutions that enhance security, energy efficiency, and environmental stability. Data centers require precise climate control and protection against various risks, and CoolVu's window films are designed to help meet these specific needs.`}
        features={[
          {
            title: "Why Choose CoolVu?",
            description: "Window film aids in temperature control by reducing the amount of solar heat that penetrates the facility, which is crucial in data centers where overheating can lead to equipment failures. With CoolVu's solar control films, the demand on cooling systems decreases, leading to significant energy savings and reduced operating costs.\n\nAdditionally, these films help maintain a consistent indoor temperature, protecting sensitive hardware from fluctuations that could lead to costly downtime or damage.\n\nCoolVu also addresses security concerns by offering safety and security films that make glass more resistant to breakage. In the event of an attempted break-in or natural disaster, this added layer of protection helps prevent window shattering, thereby safeguarding critical data equipment. The film also helps deter unauthorized entry, enhancing the physical security of the facility and providing peace of mind for stakeholders.\n\nUV protection is another benefit of CoolVu window films, as they block up to 99% of harmful UV rays. This feature not only protects staff but also shields servers, cables, and other sensitive materials from long-term sun damage, extending the life of expensive equipment and reducing replacement costs. Furthermore, CoolVu's anti-glare films help reduce screen glare, making the workspace more comfortable for employees without compromising natural light."
          },
          {
            title: "Comprehensive Solutions",
            description: "By incorporating CoolVu Window Film, data centers can create a more energy-efficient, secure, and stable environment, supporting operational continuity and protecting both assets and personnel. CoolVu's solutions are tailored to meet the specific needs of data centers, ensuring a comprehensive approach to facility management and risk reduction."
          }
        ]}
      />
      <Footer />
    </div>
  );
}