import BlogSlidingGlassDoorPage from "@/components/blog/BlogSlidingGlassDoorPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Sliding Glass Doors and Sunrooms | CoolVu Long Island",
  description: "Sliding glass doors and sunrooms are the #1 heat problem in Long Island homes. CoolVu window film blocks up to 60% of solar heat, eliminates 99% of UV rays, and makes your sunroom usable all summer. Free estimates.",
  path: "/blog/window-film-sliding-glass-doors-sunrooms-long-island",
});

export default function Page() {
  return <BlogSlidingGlassDoorPage />;
}
