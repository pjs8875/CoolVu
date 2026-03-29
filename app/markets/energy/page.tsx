import MarketPageLayout from "@/components/MarketPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EnergyMarketPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <MarketPageLayout 
        title="Energy Saving Window Films"
        description={`Ideal for homes, offices, schools, hospitals, and retail environments, CoolVu Low-E films enhance comfort, efficiency, and protection 365 days a year.`}
        features={[
          {
            title: "Smart Heat Control, Smarter Savings",
            description: "CoolVu window films are engineered to reject harmful UV rays and infrared heat, helping to keep your interiors cooler, more comfortable, and energy efficient. By reducing heat gain and stabilizing indoor temperatures, our films lower your energy costs—making them a smart, cost-effective upgrade that pays for itself over time. CoolVu Heat Control window films allow natural light to brighten your space while minimizing hot spots and temperature spikes. Also known as heat blocking or heat reducing films, these innovative solutions help lower energy costs by keeping interiors more comfortable year-round. Plus, with built-in sun control technology, CoolVu films protect against UV damage—adding long-term value to your space and your investment."
          },
          {
            title: "Year-Round Comfort with Low-E Technology",
            description: "CoolVu Low-E window films insulate your space by reflecting heat back to its source—keeping interiors cooler in summer and warmer in winter. This advanced insulating solution reduces energy usage year-round, helping you stay comfortable while cutting down on utility costs. Comparable to upgrading to double- or triple-pane windows, CoolVu Low-E films deliver powerful insulation performance without the cost of full window replacement. With high visible light transmission and a clear, natural appearance, CoolVu films preserve your view while minimizing glare—eliminating the need for heavy drapes or blinds. Plus, built-in UV protection helps defend your space against fading and discoloration of furniture, flooring, and merchandise."
          },
          {
            title: "Year-Round Protection",
            description: "CoolVu All-Season window films are designed to adapt with the weather—rejecting solar heat and harmful UV rays during the summer, while helping insulate your space when temperatures drop. Enjoy greater comfort, energy efficiency, and protection no matter the season. From residential homes to high-security government buildings and national retail chains, our team has the experience and scale to handle projects of any size. Property owners and professionals alike trust CoolVu for advanced sun control, energy efficiency, and expert installation—on time and within budget."
          }
        ]}
      />
      <Footer />
    </div>
  );
}