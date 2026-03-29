import SolarHeatPage from "@/components/SolarHeatPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <SolarHeatPage />
      <Footer />
    </div>
  );
}