import SurfaceFinishesPage from "@/components/SurfaceFinishesPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <SurfaceFinishesPage />
      <Footer />
    </div>
  );
}