import PressRecognitionPage from "@/components/PressRecognitionPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Nassau County Advisory Board Recognition | CoolVu of Long Island",
  description: "CoolVu of Long Island recognized by Nassau County Advisory Board as champion business owners and Top Gun Professional Business.",
  path: "/press/county-advisory-board-recognition",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <PressRecognitionPage />
      <Footer />
    </div>
  );
}