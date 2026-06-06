import BlogTaxCreditsPage from "@/components/blog/BlogTaxCreditsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film Tax Credits and Energy Rebates for Long Island Homeowners | CoolVu",
  description: "Learn what tax credits, PSEG LI rebates, and NYSERDA programs are available for Long Island homeowners who install energy-saving window film — plus the real numbers on direct energy savings.",
  path: "/blog/window-film-tax-credits-energy-rebates-long-island",
});

export default function Page() {
  return <BlogTaxCreditsPage />;
}
