import BlogWindowFilmVsWindowsPage from "@/components/blog/BlogWindowFilmVsWindowsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film vs. New Windows: Which Is Worth It for Long Island Homeowners? | CoolVu",
  description: "Thinking about replacing your windows to cut heat and energy costs? For most Long Island homes, window film costs 70-80% less and solves the same problem. CoolVu of Long Island explains the comparison.",
  path: "/blog/window-film-vs-new-windows-long-island",
});

export default function Page() {
  return <BlogWindowFilmVsWindowsPage />;
}
