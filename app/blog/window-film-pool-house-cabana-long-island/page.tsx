import BlogPoolHousePage from "@/components/blog/BlogPoolHousePage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Pool Houses & Cabanas on Long Island | CoolVu",
  description: "Pool houses and cabanas on Long Island turn into ovens by mid-morning. Solar window film blocks up to 60% of heat and 99% of UV rays so your outdoor space stays comfortable all summer. Free estimates from CoolVu of Long Island.",
  path: "/blog/window-film-pool-house-cabana-long-island",
});

export default function Page() {
  return <BlogPoolHousePage />;
}
