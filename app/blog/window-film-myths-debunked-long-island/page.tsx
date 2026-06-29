import BlogMythsDebunkedPage from "@/components/blog/BlogMythsDebunkedPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film Myths Debunked — What Long Island Homeowners Get Wrong | CoolVu",
  description: "Most homeowners skip window film based on things that simply aren\'t true — that it makes rooms dark, cracks windows, or only works in summer. CoolVu of Long Island sets the record straight.",
  path: "/blog/window-film-myths-debunked-long-island",
});

export default function Page() {
  return <BlogMythsDebunkedPage />;
}
