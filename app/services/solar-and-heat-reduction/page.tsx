import SolarHeatPage from "@/components/SolarHeatPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Solar & Heat Reduction Window Film",
  description:
    "Block solar heat and glare while keeping your view. CoolVu installs premium solar window film across Long Island, Brooklyn, Queens, NJ & CT—up to 99% UV rejection and lower cooling costs.",
  path: "/services/solar-and-heat-reduction",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <SolarHeatPage />
      <Footer />
    </div>
  );
}