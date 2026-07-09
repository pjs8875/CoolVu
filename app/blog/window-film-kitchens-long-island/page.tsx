import BlogKitchensPage from "@/components/blog/BlogKitchensPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Kitchens: Beat Glare, Heat & Fading | CoolVu",
  description: "Kitchens are one of the hottest, sunniest rooms in a Long Island home. Window film blocks up to 60% of heat and glare, protects cabinets and floors from UV fading, and adds sink-window privacy. CoolVu of Long Island, lifetime warranty.",
  path: "/blog/window-film-kitchens-long-island",
});

export default function Page() {
  return <BlogKitchensPage />;
}
