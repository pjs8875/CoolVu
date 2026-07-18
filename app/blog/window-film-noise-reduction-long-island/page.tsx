import BlogNoiseReductionPage from "@/components/blog/BlogNoiseReductionPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Can Window Film Reduce Noise? Long Island Trains & Airports | CoolVu",
  description: "Does window film cut down noise from LIRR trains or planes near MacArthur, Republic, JFK, and LaGuardia? CoolVu of Long Island gives an honest answer on what film can and can't do for sound.",
  path: "/blog/window-film-noise-reduction-long-island",
});

export default function Page() {
  return <BlogNoiseReductionPage />;
}
