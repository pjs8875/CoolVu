import BlogInsuranceDiscountsPage from "@/components/blog/BlogInsuranceDiscountsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Does Window Film Lower Your Homeowners Insurance? | CoolVu Long Island",
  description: "Some insurers offer credits for storm-resistant safety window film on Long Island — but it varies by carrier. Here's how to ask, and how window film saves money either way.",
  path: "/blog/window-film-insurance-discounts-long-island",
});

export default function Page() {
  return <BlogInsuranceDiscountsPage />;
}
