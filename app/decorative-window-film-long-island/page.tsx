import DecorativeFilmGEOPage from "@/components/DecorativeFilmGEOPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Decorative Window Film Long Island | Custom Glass Look | CoolVu",
  description: "CoolVu of Long Island installs decorative window film for homes and businesses in Nassau & Suffolk County. Free estimates.",
  path: "/decorative-window-film-long-island",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <DecorativeFilmGEOPage />
      <Footer />
    </div>
  );
}