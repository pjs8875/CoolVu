import BlogRentalPropertiesPage from "@/components/blog/BlogRentalPropertiesPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Rental Properties | CoolVu Long Island",
  description: "Long Island landlords: window film lowers energy costs, reduces heat complaints, adds privacy and security, and protects floors from UV fading. CoolVu of Long Island installs for Nassau and Suffolk County rental units.",
  path: "/blog/window-film-long-island-rental-properties",
});

export default function Page() {
  return <BlogRentalPropertiesPage />;
}
