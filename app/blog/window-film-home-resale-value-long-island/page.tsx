import BlogResaleValuePage from "@/components/blog/BlogResaleValuePage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film and Home Resale Value: What Long Island Buyers & Sellers Need to Know | CoolVu",
  description: "Window film improves energy efficiency, UV protection, and comfort — all things Long Island home buyers care about. Solar film with a transferable lifetime warranty can be a genuine selling point.",
  path: "/blog/window-film-home-resale-value-long-island",
});

export default function Page() {
  return <BlogResaleValuePage />;
}
