import BlogSchoolsDaycaresPage from "@/components/blog/BlogSchoolsDaycaresPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Schools and Daycares | CoolVu Long Island",
  description: "Safety film, solar film, and privacy film for Long Island schools and daycares. Protect kids from broken glass, cut classroom glare, and lower energy costs. Free estimates — Nassau and Suffolk County.",
  path: "/blog/window-film-schools-daycares-long-island",
});

export default function Page() {
  return <BlogSchoolsDaycaresPage />;
}
