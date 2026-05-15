import BlogWindowFilmLifespanPage from "@/components/blog/BlogWindowFilmLifespanPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "How Long Does Window Film Last? Long Island Heat & Humidity | CoolVu",
  description: "Quality window film lasts 15 to 25 years — even on Long Island with salt air, humidity, and intense UV. CoolVu explains what affects film lifespan and backs every residential install with a lifetime warranty.",
  path: "/blog/how-long-does-window-film-last-long-island",
});

export default function Page() {
  return <BlogWindowFilmLifespanPage />;
}
