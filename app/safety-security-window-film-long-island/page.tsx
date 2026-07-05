import SafetyFilmGEOPage from "@/components/SafetyFilmGEOPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Safety & Security Window Film Long Island | CoolVu",
  description: "Safety & security window film from CoolVu holds glass together in storms & break-ins. Nassau & Suffolk homes & businesses. Free estimate: 516-535-9555.",
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