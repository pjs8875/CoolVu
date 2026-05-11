import BlogOneWayPrivacyPage from "@/components/blog/BlogOneWayPrivacyPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "One-Way Privacy Window Film on Long Island: See Out, Nobody Sees In | CoolVu",
  description: "One-way privacy window film lets you keep your view while blocking neighbors from seeing in. CoolVu of Long Island explains how it works, where it works best, and the nighttime limitation you should know.",
  path: "/blog/one-way-privacy-window-film-long-island",
});

export default function Page() {
  return <BlogOneWayPrivacyPage />;
}