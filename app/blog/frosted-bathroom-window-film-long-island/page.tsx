import BlogFrostedBathroomPage from "@/components/blog/BlogFrostedBathroomPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Frosted Window Film for Bathrooms on Long Island: Privacy That Lets Light In | CoolVu",
  description: "Frosted window film gives Long Island bathrooms total privacy while keeping natural light — no curtains, no blinds, no remodeling. CoolVu of Long Island explains the options, costs, and where it works best.",
  path: "/blog/frosted-bathroom-window-film-long-island",
});

export default function Page() {
  return <BlogFrostedBathroomPage />;
}