import BlogEnergySavingsPage from "@/components/blog/BlogEnergySavingsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Real Energy Savings from Window Film: A Long Island Homeowner Case Study | CoolVu",
  description: "Window film cuts cooling costs 20-30% in treated rooms. See a real Long Island homeowner case study with before-and-after numbers, payback calculations, and which windows save the most money.",
  path: "/blog/energy-savings-window-film-long-island",
});

export default function Page() {
  return <BlogEnergySavingsPage />;
}