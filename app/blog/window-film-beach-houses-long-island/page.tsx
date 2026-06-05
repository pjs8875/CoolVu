import BlogBeachHousesPage from "@/components/blog/BlogBeachHousesPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Beach Houses: Sun, Salt Air, and UV | CoolVu",
  description: "Beach houses on Long Island face intense sun, salt air, and UV damage. Learn how window film protects floors and furniture, cuts cooling costs, and adds storm protection — without blocking your ocean view.",
  path: "/blog/window-film-beach-houses-long-island",
});

export default function Page() {
  return <BlogBeachHousesPage />;
}
