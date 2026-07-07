import BlogDIYvsProPage from "@/components/blog/BlogDIYvsProPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "DIY vs. Professional Window Film Installation | CoolVu Long Island",
  description: "DIY window film kits bubble, peel, and carry no warranty. See why Long Island homeowners get a better result hiring a pro — lifetime warranty, 99% UV blocked, and a bubble-free finish from CoolVu of Long Island.",
  path: "/blog/diy-vs-professional-window-film-installation-long-island",
});

export default function Page() {
  return <BlogDIYvsProPage />;
}
