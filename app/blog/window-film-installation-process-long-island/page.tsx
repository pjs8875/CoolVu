import BlogInstallationProcessPage from "@/components/blog/BlogInstallationProcessPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film Installation: What to Expect on Install Day | CoolVu Long Island",
  description: "Wondering what window film installation looks like? CoolVu of Long Island walks you through every step — from the walkthrough to curing — so you know exactly what to expect on install day.",
  path: "/blog/window-film-installation-process-long-island",
});

export default function Page() {
  return <BlogInstallationProcessPage />;
}
