import BlogCostGuidePage from "@/components/blog/BlogCostGuidePage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "How Much Does Window Film Cost on Long Island? 2026 Price Guide | CoolVu",
  description: "What does window film really cost on Long Island? Solar, privacy, decorative, and safety film price ranges per square foot, by room, and whole-home. CoolVu of Long Island breaks down real 2026 pricing — free estimates in Nassau and Suffolk.",
  path: "/blog/window-film-cost-long-island",
});

export default function Page() {
  return <BlogCostGuidePage />;
}
