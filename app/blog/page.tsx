import BlogIndexPage from "@/components/blog/BlogIndexPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film Tips & Guides for Long Island Homeowners | CoolVu Blog",
  description: "Expert window film tips, guides, and advice from CoolVu of Long Island. Solar film, privacy film, safety film — all explained in plain English for Nassau and Suffolk County homeowners.",
  path: "/blog",
});

export default function Page() {
  return <BlogIndexPage />;
}