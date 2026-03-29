import MarketPageLayout from "@/components/MarketPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GovernmentMarketPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <MarketPageLayout 
        title="Enhance Security and Comfort for Government Buildings"
        description={`CoolVu Window Films provides government buildings with tailored window film solutions to improve security, energy efficiency, and privacy, creating safer and more sustainable public spaces.\n\nCoolVu Window Film provides tailored solutions specifically designed for government buildings, addressing unique challenges faced by public institutions. These facilities often prioritize safety, energy efficiency, and aesthetics while serving the needs of the community. With a diverse range of window film options, CoolVu enhances the functionality and appearance of government structures.`}
        features={[
          {
            title: "Why Choose CoolVu?",
            description: "CoolVu Window Film serves as a valuable partner for government buildings creating safer, more efficient, and visually appealing environments that serve the needs of both government employees and the communities they represent.\n\nGovernment buildings frequently require heightened security measures to protect sensitive information and ensure the safety of employees and visitors. Blast protection is a critical component of security for government facilities, where the risk of explosion due to accidents or targeted attacks is a serious consideration. CoolVu's blast-resistant window films mitigate damage by keeping glass intact during high-impact events, which helps reduce the risk of harm to occupants and lowers repair costs by preventing extensive structural damage. By increasing the resilience of existing windows, CoolVu offers a cost-effective solution that elevates security while preserving the architectural design of government buildings.\n\nCoolVu Window Film installations in government buildings provide a durable, nearly invisible layer of protection, allowing agencies to create a secure, fortified environment without compromising the building's aesthetics or natural light. With a focus on creating safer government facilities, CoolVu remains committed to serving the unique needs of these critical structures through high-quality security and blast-resistant window film solutions.\n\nOur range of security films is specifically designed to reinforce windows against break-ins, blasts, and external threats, ensuring that courthouses can maintain a safe environment for the public, government staff, and judicial professionals."
          },
          {
            title: "Comprehensive Solutions",
            description: "By combining security, privacy, and energy-saving solutions, CoolVu Window Film delivers a comprehensive approach that enhances resilience, supports sustainable practices, and safeguards the integrity of our government institutions."
          }
        ]}
      />
      <Footer />
    </div>
  );
}