import BlogMedicalOfficesPage from "@/components/blog/BlogMedicalOfficesPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Medical Offices and Clinics | CoolVu",
  description: "Window film helps Long Island medical offices cut heat and glare, protect patient privacy, and block UV damage — with no installation downtime. CoolVu serves Nassau and Suffolk Counties.",
  path: "/blog/window-film-medical-offices-long-island",
});

export default function Page() {
  return <BlogMedicalOfficesPage />;
}
