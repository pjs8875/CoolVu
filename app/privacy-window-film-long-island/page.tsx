import PrivacyFilmGEOPage from "@/components/PrivacyFilmGEOPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Privacy Window Film Long Island | Frosted & One-Way | CoolVu",
  description: "See out, not in. CoolVu installs frosted & one-way privacy window film for Long Island homes & offices. Nassau & Suffolk. Free estimate: 516-535-9555.",
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