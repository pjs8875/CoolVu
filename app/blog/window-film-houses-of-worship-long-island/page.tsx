import BlogHousesOfWorshipPage from "@/components/blog/BlogHousesOfWorshipPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Churches & Houses of Worship | CoolVu Long Island",
  description: "Protect stained glass from fading, cool hot sanctuaries, cut glare, and add shatter-resistant security — without replacing a window. CoolVu of Long Island installs window film for churches, synagogues, and temples across Nassau and Suffolk. Free estimates.",
  path: "/blog/window-film-houses-of-worship-long-island",
});

export default function Page() {
  return <BlogHousesOfWorshipPage />;
}
