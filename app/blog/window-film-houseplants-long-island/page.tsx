import BlogWindowFilmHouseplantsPage from "@/components/blog/BlogWindowFilmHouseplantsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Does Window Film Hurt Houseplants? Long Island Plant Guide | CoolVu",
  description: "No — window film won't hurt your houseplants. It blocks UV and heat but lets through the visible light plants grow on. Most plants need zero changes, and many do better. CoolVu serves Nassau and Suffolk County.",
  path: "/blog/window-film-houseplants-long-island",
});

export default function Page() {
  return <BlogWindowFilmHouseplantsPage />;
}
