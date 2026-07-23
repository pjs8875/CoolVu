import BlogTintingInnovationsPage from "@/components/blog/BlogTintingInnovationsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Tinting Innovations Long Island | CoolVu Long Island",
  description: "Window tinting technology has changed a lot. Nano-ceramic film now blocks more heat and UV than old dyed or metallic tint, without signal interference. CoolVu of Long Island explains what's new and what to look for.",
  path: "/blog/window-tinting-innovations-long-island",
});

export default function Page() {
  return <BlogTintingInnovationsPage />;
}
