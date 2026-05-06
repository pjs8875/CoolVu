import SafetyFilmGEOPage from "@/components/SafetyFilmGEOPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Safety & Security Window Film Long Island | CoolVu",
  description: "CoolVu of Long Island installs safety and security window film for storm and break-in protection. Serving Nassau & Suffolk County. Free estimates.",
  path: "/safety-security-window-film-long-island",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <SafetyFilmGEOPage />
      <Footer />
    </div>
  );
}