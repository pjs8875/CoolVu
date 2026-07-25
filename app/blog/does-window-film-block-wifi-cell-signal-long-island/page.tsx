import BlogWifiSignalPage from "@/components/blog/BlogWifiSignalPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Does Window Film Block Wi-Fi or Cell Signal? | CoolVu Long Island",
  description: "Worried window film will mess with your Wi-Fi or cell signal? Ceramic window film — what CoolVu installs on Long Island homes — has no metal layer, so it doesn't affect signal at all. Here's the full explanation.",
  path: "/blog/does-window-film-block-wifi-cell-signal-long-island",
});

export default function Page() {
  return <BlogWifiSignalPage />;
}
