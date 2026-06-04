import BlogWaterfrontHomesPage from "@/components/blog/BlogWaterfrontHomesPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Waterfront Homes and Beach Houses | CoolVu",
  description: "Waterfront homes on Long Island face intense water glare, UV damage, and privacy challenges. Solar window film blocks 60% of heat and eliminates water glare — without blocking your view. Free estimates from CoolVu of Long Island.",
  path: "/blog/waterfront-homes-window-film-long-island",
});

export default function Page() {
  return <BlogWaterfrontHomesPage />;
}
