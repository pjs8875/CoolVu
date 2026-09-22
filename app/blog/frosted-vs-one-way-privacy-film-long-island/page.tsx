import BlogFrostedVsOneWayPage from "@/components/blog/BlogFrostedVsOneWayPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Frosted vs. One-Way Privacy Film: Which for Which Room | CoolVu",
  description: "One-way film keeps your daytime view. Frosted film gives 24-hour privacy. CoolVu's room-by-room guide to choosing the right privacy film on Long Island. Free estimate: 516-535-9555.",
  path: "/blog/frosted-vs-one-way-privacy-film-long-island",
});

export default function Page() {
  return <BlogFrostedVsOneWayPage />;
}
