import MarketPageLayout from "@/components/MarketPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FemaMarketPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <MarketPageLayout 
        title="FEMA Nonprofit Security Grant Program"
        description={`Learn how CoolVu help nonprofit organizations access federal funding to safeguard their facilities.`}
        features={[
          {
            title: "What is the FEMA Nonprofit Security Grant Program?",
            description: "As threats to religious, cultural, and educational nonprofits continue to rise, the federal government is responding. For 2025, FEMA has allocated $274.5 (M) through the Nonprofit Security Grant Program (NSGP) – a vital resource for eligible 501(c)(3) organizations looking to enhance physical security and protect people and property from terrorism and extremist violence."
          },
          {
            title: "Securing Nonprofits",
            description: "The NSGP helps at-risk nonprofits bolster physical security by funding critical upgrades like surveillance, access control—and increasingly, protective window film systems that shield vulnerable glass areas."
          },
          {
            title: "Who Qualifies?",
            description: "• 501(c)(3) nonprofits facing credible threats\n• Max award: Up to $150,000 per facility"
          },
          {
            title: "Who Should Apply?",
            description: "• House of worships, cultural centers, educational facilities\n• Organizations located in a UASI (Urban Areas Security Initiative) or non-UASI area"
          },
          {
            title: "How to Apply",
            description: "• Contact Your State's SAA\n• The Notice of Funding Opportunity is posted at Grants.gov"
          },
          {
            title: "CoolVu Supports NSGP Grant Applicants",
            description: "CoolVu partners with nonprofit organizations to help protect high-risk facilities using grant-eligible retrofit glazing solutions. Our team can assist in cost estimates & specs, vulnerability analysis and recommending compliant, purpose-built solutions that align with FEMA NSGP requirements.\n\nDownload CoolVu NSGP Grant Guide 2025"
          }
        ]}
      />
      <Footer />
    </div>
  );
}