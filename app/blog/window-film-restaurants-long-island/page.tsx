import BlogRestaurantsPage from "@/components/blog/BlogRestaurantsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Restaurants: Glare, Heat & Privacy | CoolVu",
  description: "Window film helps Long Island restaurants cut heat, eliminate glare, add privacy, and protect against storms — with no maintenance and no change to your storefront's look. Free estimates from CoolVu of Long Island.",
  path: "/blog/window-film-restaurants-long-island",
});

export default function Page() {
  return <BlogRestaurantsPage />;
}
