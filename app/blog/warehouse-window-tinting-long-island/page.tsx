import BlogWarehouseTintingPage from "@/components/blog/BlogWarehouseTintingPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Warehouse Window Tinting Long Island | CoolVu Long Island",
  description: "Warehouse and industrial window tinting blocks up to 60% of heat and 99% of UV rays, easing HVAC strain and protecting inventory. CoolVu of Long Island installs commercial tinting across Nassau and Suffolk County's industrial corridor.",
  path: "/blog/warehouse-window-tinting-long-island",
});

export default function Page() {
  return <BlogWarehouseTintingPage />;
}
