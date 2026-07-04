import BlogBayBowWindowsPage from "@/components/blog/BlogBayBowWindowsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Bay and Bow Windows | CoolVu Long Island",
  description: "Bay and bow windows make Long Island rooms hot and fade floors fast — because 3 to 6 panels of glass catch sun all day. Solar window film blocks 60% of heat and 99% of UV without losing the view. CoolVu of Long Island explains.",
  path: "/blog/window-film-bay-bow-windows-long-island",
});

export default function Page() {
  return <BlogBayBowWindowsPage />;
}
