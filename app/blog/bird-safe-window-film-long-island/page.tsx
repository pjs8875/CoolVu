import BlogBirdStrikeWindowFilmPage from "@/components/blog/BlogBirdStrikeWindowFilmPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Bird-Safe Window Film: Stop Birds Hitting Windows | CoolVu Long Island",
  description: "Birds hit windows because glass mirrors the sky and trees. Frosted, decorative, and solar window film break up that reflection so birds see a surface, not open space. CoolVu of Long Island serves Nassau and Suffolk County. Free estimates, 516-535-9555.",
  path: "/blog/bird-safe-window-film-long-island",
});

export default function Page() {
  return <BlogBirdStrikeWindowFilmPage />;
}
