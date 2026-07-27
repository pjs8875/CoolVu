import BlogHotelsInnsPage from "@/components/blog/BlogHotelsInnsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Hotels, Inns & B&Bs | CoolVu Long Island",
  description: "Hot west-facing guest rooms, glare off the water, and faded carpets all come from the same place — the glass. Window film blocks up to 60% of heat and 99% of UV, installed room by room without closing your property. CoolVu of Long Island serves Nassau and Suffolk hospitality.",
  path: "/blog/window-film-hotels-inns-long-island",
});

export default function Page() {
  return <BlogHotelsInnsPage />;
}
