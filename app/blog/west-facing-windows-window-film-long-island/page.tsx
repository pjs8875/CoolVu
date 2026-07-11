import BlogWestFacingWindowsPage from "@/components/blog/BlogWestFacingWindowsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Do West-Facing Windows Need Window Film? Long Island Afternoon Sun | CoolVu",
  description: "West-facing windows bake your Long Island home from 2pm to 7pm. Solar window film blocks up to 60% of heat and 99% of UV at the glass. CoolVu explains why the west side overheats and how to fix it.",
  path: "/blog/west-facing-windows-window-film-long-island",
});

export default function Page() {
  return <BlogWestFacingWindowsPage />;
}
