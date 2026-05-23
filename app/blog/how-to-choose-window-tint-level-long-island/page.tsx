import BlogTintLevelGuidePage from "@/components/blog/BlogTintLevelGuidePage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "How to Choose the Right Window Tint Level for Long Island Homes | CoolVu",
  description: "Not sure how dark your window film should be? This plain-English guide explains tint levels (VLT), which windows need darker film on Long Island, and how to balance privacy, light, and heat blocking.",
  path: "/blog/how-to-choose-window-tint-level-long-island",
});

export default function Page() {
  return <BlogTintLevelGuidePage />;
}
