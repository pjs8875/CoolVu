import BlogWineriesPage from "@/components/blog/BlogWineriesPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Wineries and Tasting Rooms | CoolVu Long Island",
  description: "Sunlight fades wine, fixtures, and merchandise, and drives guests away from window seats. Window film blocks 99% of UV rays and up to 60% of heat, protecting North Fork wineries and tasting rooms. CoolVu of Long Island explains.",
  path: "/blog/window-film-long-island-wineries-tasting-rooms",
});

export default function Page() {
  return <BlogWineriesPage />;
}
