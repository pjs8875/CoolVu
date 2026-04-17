import SurfaceFinishesPage from "@/components/SurfaceFinishesPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Architectural Surface Finishes",
  description:
    "Refresh interiors without demolition using architectural films that mimic wood, stone, and metal. CoolVu surface finishes for commercial and residential spaces on Long Island, NYC, NJ & CT.",
  path: "/services/surface-finishes",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <SurfaceFinishesPage />
      <Footer />
    </div>
  );
}