import BlogMarinaYachtClubPage from "@/components/blog/BlogMarinaYachtClubPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Marinas & Yacht Clubs | CoolVu Long Island",
  description: "Marina clubhouses and yacht club lounges on Long Island are built with huge water-facing windows. Window film blocks up to 60% of heat and 90% of glare while keeping the harbor view fully intact. CoolVu of Long Island explains how.",
  path: "/blog/marina-yacht-club-window-film-long-island",
});

export default function Page() {
  return <BlogMarinaYachtClubPage />;
}
