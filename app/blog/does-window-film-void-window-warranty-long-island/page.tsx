import BlogWindowWarrantyPage from "@/components/blog/BlogWindowWarrantyPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Does Window Film Void Your Window Warranty? | CoolVu Long Island",
  description: "Worried that window film will void your Andersen, Pella, or Harvey window warranty? CoolVu of Long Island explains what Long Island homeowners need to know before installing window film.",
  path: "/blog/does-window-film-void-window-warranty-long-island",
});

export default function Page() {
  return <BlogWindowWarrantyPage />;
}
