import BlogBestBrandsPage from "@/components/blog/BlogBestBrandsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Best Window Film for Long Island Climate: What to Look For | CoolVu",
  description: "Not all window film survives Long Island's hot summers and cold winters. Learn what separates professional-grade ceramic film from cheap DIY options — and why CoolVu's lifetime warranty matters.",
  path: "/blog/best-window-film-brands-long-island",
});

export default function Page() {
  return <BlogBestBrandsPage />;
}
