import BlogCostGuidePage from "@/components/blog/BlogCostGuidePage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film Cost on Long Island: Real 2026 Prices Per Window | CoolVu",
  description: "What window film actually costs on Long Island in 2026: $12–$25 per sq ft, about $90–$200 per window, $1,800–$4,500 whole home. See a real Massapequa quote line by line, what changes your price, and what should never be on the bill. Free estimates in Nassau & Suffolk.",
  path: "/blog/window-film-cost-long-island",
});

export default function Page() {
  return <BlogCostGuidePage />;
}
