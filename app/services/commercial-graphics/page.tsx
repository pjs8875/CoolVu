import CommercialGraphicsPage from "@/components/CommercialGraphicsPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Commercial Window & Wall Graphics",
  description:
    "Turn glass and walls into branding with custom commercial graphics, vinyl, and window displays. CoolVu helps Long Island and tri-state businesses attract customers and reinforce their message.",
  path: "/services/commercial-graphics",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <CommercialGraphicsPage />
      <Footer />
    </div>
  );
}