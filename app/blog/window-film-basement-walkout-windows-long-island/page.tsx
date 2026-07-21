import BlogBasementWalkoutPage from "@/components/blog/BlogBasementWalkoutPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Basements & Walkout Windows | CoolVu Long Island",
  description: "Basement and walkout windows sit at ground level, creating privacy and security gaps most windows don't have. See how privacy, safety, and solar film fix both on Long Island homes.",
  path: "/blog/window-film-basement-walkout-windows-long-island",
});

export default function Page() {
  return <BlogBasementWalkoutPage />;
}
