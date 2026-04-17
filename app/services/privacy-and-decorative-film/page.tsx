import PrivacyFilmPage from "@/components/PrivacyFilmPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Privacy & Decorative Window Film",
  description:
    "Frosted, patterned, and decorative films for privacy and style—without heavy blinds. CoolVu designs and installs privacy window film for bathrooms, offices, and storefronts across Long Island and NYC.",
  path: "/services/privacy-and-decorative-film",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <PrivacyFilmPage />
      <Footer />
    </div>
  );
}