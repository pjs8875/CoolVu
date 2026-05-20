import BlogDecorativeFilmIdeasPage from "@/components/blog/BlogDecorativeFilmIdeasPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Decorative Window Film Ideas for Long Island Homes | CoolVu",
  description: "Transform plain glass into frosted, etched, patterned, or stained glass at a fraction of the cost. CoolVu of Long Island installs decorative window film throughout Nassau and Suffolk Counties.",
  path: "/blog/decorative-window-film-ideas-long-island",
});

export default function Page() {
  return <BlogDecorativeFilmIdeasPage />;
}
