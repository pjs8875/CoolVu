import BlogCondosApartmentsPage from "@/components/blog/BlogCondosApartmentsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Condos and Apartments | CoolVu Long Island",
  description: "Window film blocks heat, adds privacy, and protects furniture in Long Island condos and apartments. Works for renters and owners. CoolVu serves Nassau and Suffolk Counties — free estimates.",
  path: "/blog/window-film-condos-apartments-long-island",
});

export default function Page() {
  return <BlogCondosApartmentsPage />;
}
