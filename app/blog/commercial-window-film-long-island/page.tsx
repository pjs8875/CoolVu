import BlogCommercialFilmPage from "@/components/blog/BlogCommercialFilmPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Commercial Window Film for Long Island Offices and Retail Stores | CoolVu",
  description: "Commercial window film cuts heat, glare, and UV damage in Long Island offices and retail stores — no window replacement needed. CoolVu serves Nassau and Suffolk Counties. Free estimates.",
  path: "/blog/commercial-window-film-long-island",
});

export default function Page() {
  return <BlogCommercialFilmPage />;
}
