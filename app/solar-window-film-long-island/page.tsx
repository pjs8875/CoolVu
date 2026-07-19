import SolarFilmGEOPage from "@/components/SolarFilmGEOPage";
import Navbar from "@/components/Navbar";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Solar Window Film Long Island | Cut Heat & Glare | CoolVu",
  description: "Solar window film from CoolVu blocks 99% UV & up to 63% of heat, lowering energy bills. Serving Nassau & Suffolk. Lifetime warranty. Free estimate: 516-535-9555.",
  path: "/solar-window-film-long-island",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <SolarFilmGEOPage />
    </div>
  );
}
