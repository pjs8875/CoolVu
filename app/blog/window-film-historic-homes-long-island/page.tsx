import BlogHistoricHomesPage from "@/components/blog/BlogHistoricHomesPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Historic Homes | CoolVu Long Island",
  description: "Protect original single-pane windows in your historic Long Island home with solar window film. Blocks 99% of UV rays and up to 60% of solar heat without altering your windows. CoolVu serves Nassau and Suffolk County.",
  path: "/blog/window-film-historic-homes-long-island",
});

export default function Page() {
  return <BlogHistoricHomesPage />;
}
