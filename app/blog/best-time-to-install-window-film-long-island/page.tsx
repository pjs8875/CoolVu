import BlogBestTimeToInstallPage from "@/components/blog/BlogBestTimeToInstallPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Best Time of Year to Install Window Film on Long Island | CoolVu",
  description: "When should you install window film on Long Island? Spring beats the summer heat, but CoolVu installs year-round — even winter. Here's the season-by-season breakdown, plus install time and UV protection facts.",
  path: "/blog/best-time-to-install-window-film-long-island",
});

export default function Page() {
  return <BlogBestTimeToInstallPage />;
}
