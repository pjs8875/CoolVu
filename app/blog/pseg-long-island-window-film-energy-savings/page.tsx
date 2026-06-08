import BlogPSEGEnergySavingsPage from "@/components/blog/BlogPSEGEnergySavingsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "How Much Can Window Film Save on Your PSEG Long Island Bill? Real Numbers | CoolVu LI",
  description: "PSEG Long Island rates run $0.20–$0.25/kWh — nearly double the national average. Solar window film cuts cooling costs 20–35%, with most Long Island homes saving $70–$150/month in peak summer. Free estimates.",
  path: "/blog/pseg-long-island-window-film-energy-savings",
});

export default function Page() {
  return <BlogPSEGEnergySavingsPage />;
}
