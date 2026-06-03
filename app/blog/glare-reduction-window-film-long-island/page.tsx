import BlogGlareReductionPage from "@/components/blog/BlogGlareReductionPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Glare Reduction Window Film for Long Island Homes | CoolVu",
  description: "Tired of squinting through your own windows? Glare-reduction window film cuts harsh sunlight without blocking your view. CoolVu of Long Island serves Nassau & Suffolk Counties — free estimates, lifetime warranty.",
  path: "/blog/glare-reduction-window-film-long-island",
});

export default function Page() {
  return <BlogGlareReductionPage />;
}
