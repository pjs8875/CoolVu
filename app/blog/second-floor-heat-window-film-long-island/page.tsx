import BlogSecondFloorHeatPage from "@/components/blog/BlogSecondFloorHeatPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Why Your Long Island Second Floor Is So Hot — And How Window Film Fixes It | CoolVu",
  description: "Upstairs bedrooms bake every summer on Long Island because heat rises and second-floor windows soak up direct sun. Solar window film blocks up to 60% of that heat at the glass. CoolVu explains why — and the fix.",
  path: "/blog/second-floor-heat-window-film-long-island",
});

export default function Page() {
  return <BlogSecondFloorHeatPage />;
}
