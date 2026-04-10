import SecurityFilmPage from "@/components/SecurityFilmPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Safety & Security Window Film",
  description:
    "Strengthen glass against break-ins, storms, and impacts with security window film and DefenseLite. CoolVu provides certified installation for homes, schools, and retail on Long Island and the tri-state area.",
  path: "/services/safety-and-security-film",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <SecurityFilmPage />
      <Footer />
    </div>
  );
}