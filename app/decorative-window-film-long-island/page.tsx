import DecorativeFilmGEOPage from "@/components/DecorativeFilmGEOPage";
import Navbar from "@/components/Navbar";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Decorative Window Film Long Island | Custom Looks | CoolVu",
  description: "Transform glass with decorative & frosted window film from CoolVu — logos, patterns & custom designs for Long Island. Free estimate: 516-535-9555.",
  path: "/decorative-window-film-long-island",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <DecorativeFilmGEOPage />
    </div>
  );
}