import BlogWindowFilmRemovalPage from "@/components/blog/BlogWindowFilmRemovalPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film Removal & Replacement on Long Island | Bubbling or Purple Film | CoolVu",
  description: "Old window film bubbling, hazy, or turning purple? Here is why it happens, why DIY scraping risks your glass, and how CoolVu removes and replaces film across Nassau and Suffolk County in one day.",
  path: "/blog/window-film-removal-replacement-long-island",
});

export default function Page() {
  return <BlogWindowFilmRemovalPage />;
}
