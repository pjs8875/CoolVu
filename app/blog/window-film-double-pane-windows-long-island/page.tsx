import BlogDoublePaneWindowsPage from "@/components/blog/BlogDoublePaneWindowsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Can You Put Window Film on Double-Pane Windows? | CoolVu Long Island",
  description: "Yes — but the film must match your glass. CoolVu of Long Island explains thermal stress, seal failure, and how the right window film safely cools double-pane windows in Nassau and Suffolk Counties.",
  path: "/blog/window-film-double-pane-windows-long-island",
});

export default function Page() {
  return <BlogDoublePaneWindowsPage />;
}
