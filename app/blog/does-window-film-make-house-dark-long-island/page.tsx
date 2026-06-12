import BlogDoesFilmDarkenHomePage from "@/components/blog/BlogDoesFilmDarkenHomePage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Does Window Film Make Your House Dark Inside? | CoolVu Long Island",
  description: "No — modern window film blocks heat and 99% of UV rays while letting 50–70% of natural light through. CoolVu of Long Island explains VLT ratings and why filmed rooms often feel brighter, not darker.",
  path: "/blog/does-window-film-make-house-dark-long-island",
});

export default function Page() {
  return <BlogDoesFilmDarkenHomePage />;
}
