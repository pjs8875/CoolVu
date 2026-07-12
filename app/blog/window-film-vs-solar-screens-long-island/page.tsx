import BlogSolarScreensPage from "@/components/blog/BlogSolarScreensPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film vs. Solar Screens: Which Is Better? | CoolVu Long Island",
  description: "Window film vs. solar screens for Long Island homes: film is nearly invisible, keeps your view, blocks 99% of UV, works all year, and lasts 15-25 years with a lifetime warranty. See the full comparison.",
  path: "/blog/window-film-vs-solar-screens-long-island",
});

export default function Page() {
  return <BlogSolarScreensPage />;
}
