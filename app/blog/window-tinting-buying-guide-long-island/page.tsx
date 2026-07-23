import BlogTintingBuyingGuidePage from "@/components/blog/BlogTintingBuyingGuidePage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Tinting Buying Guide Long Island | CoolVu Long Island",
  description: "Buying window tinting for the first time? This guide walks Long Island homeowners through picking the right tint type, vetting an installer, understanding warranty, and getting an accurate estimate.",
  path: "/blog/window-tinting-buying-guide-long-island",
});

export default function Page() {
  return <BlogTintingBuyingGuidePage />;
}
