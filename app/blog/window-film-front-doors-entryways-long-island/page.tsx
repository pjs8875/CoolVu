import BlogFrontDoorEntrywayPage from "@/components/blog/BlogFrontDoorEntrywayPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Front Doors & Glass Entryways | CoolVu Long Island",
  description: "Add privacy, security, and sun protection to your front door glass and sidelights with window film. CoolVu of Long Island explains frosted, decorative, security, and solar options. Free estimates in Nassau & Suffolk County.",
  path: "/blog/window-film-front-doors-entryways-long-island",
});

export default function Page() {
  return <BlogFrontDoorEntrywayPage />;
}
