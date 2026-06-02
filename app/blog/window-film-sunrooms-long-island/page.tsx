import BlogSunroomFilmPage from "@/components/blog/BlogSunroomFilmPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Sunrooms | CoolVu of Long Island",
  description: "Turn your hot Long Island sunroom into a year-round living space. CoolVu window film blocks up to 60% of solar heat and 99% of UV rays. Free estimates. Lifetime warranty.",
  path: "/blog/window-film-sunrooms-long-island",
});

export default function Page() {
  return <BlogSunroomFilmPage />;
}
