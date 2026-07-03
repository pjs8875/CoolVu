import BlogCleaningCareGuidePage from "@/components/blog/BlogCleaningCareGuidePage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "How to Clean and Care for Window Film | CoolVu Long Island",
  description: "Cleaning window film is easy: wait 30 days, then use ammonia-free cleaner and a microfiber cloth. CoolVu of Long Island explains what to use, what to avoid, and how to make film last 25 years.",
  path: "/blog/how-to-clean-window-film-long-island",
});

export default function Page() {
  return <BlogCleaningCareGuidePage />;
}
