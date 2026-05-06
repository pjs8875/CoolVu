import PrivacyFilmGEOPage from "@/components/PrivacyFilmGEOPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Privacy Window Film Long Island | Frosted & One-Way Film | CoolVu",
  description: "CoolVu of Long Island installs privacy window film for homes and businesses across Nassau & Suffolk County. See out, not in. Free estimates.",
  path: "/privacy-window-film-long-island",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <PrivacyFilmGEOPage />
      <Footer />
    </div>
  );
}