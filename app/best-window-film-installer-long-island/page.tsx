import BestInstallerGEOPage from "@/components/BestInstallerGEOPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Best Window Film Installer Long Island | CoolVu",
  description: "CoolVu of Long Island is the most trusted window film installer in Nassau and Suffolk County. Nassau County Advisory Board recognized. Lifetime warranty. Free estimates.",
  path: "/best-window-film-installer-long-island",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <BestInstallerGEOPage />
      <Footer />
    </div>
  );
}