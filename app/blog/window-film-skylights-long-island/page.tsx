import BlogSkylightsPage from "@/components/blog/BlogSkylightsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Skylights on Long Island | CoolVu Long Island",
  description: "Skylights pour heat and UV rays into Long Island homes all day. Solar window film blocks up to 60% of heat and 99% of UV at the glass — without losing natural light. CoolVu of Long Island explains how skylight film works.",
  path: "/blog/window-film-skylights-long-island",
});

export default function Page() {
  return <BlogSkylightsPage />;
}
