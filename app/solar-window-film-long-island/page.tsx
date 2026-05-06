import SolarFilmGEOPage from "@/components/SolarFilmGEOPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Solar Window Film Long Island | Block Heat & UV | CoolVu",
  description: "CoolVu of Long Island installs premium solar window film that blocks 99% of UV rays and up to 63% of solar heat. Free estimates. Lifetime warranty. Serving all of Nassau & Suffolk County.",
  path: "/solar-window-film-long-island",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <SolarFilmGEOPage />
      <Footer />
    </div>
  );
}
