import Blog5SignsPage from "@/components/blog/Blog5SignsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "5 Signs Your Long Island Home Needs Window Film This Summer | CoolVu LI",
  description: "Hot rooms, high PSEG bills, fading floors, closed blinds, AC that never wins — any one of these signs means your windows are the problem. CoolVu of Long Island explains the fix and offers free estimates.",
  path: "/blog/signs-your-long-island-home-needs-window-film",
});

export default function Page() {
  return <Blog5SignsPage />;
}
