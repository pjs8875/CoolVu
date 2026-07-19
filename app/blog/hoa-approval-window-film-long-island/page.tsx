import BlogHOAApprovalPage from "@/components/blog/BlogHOAApprovalPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Do You Need HOA Approval for Window Film on Long Island? | CoolVu",
  description: "Wondering if your HOA, co-op, or condo board needs to approve window film? CoolVu of Long Island breaks down what most associations actually require \u2014 and how to check before you install.",
  path: "/blog/hoa-approval-window-film-long-island",
});

export default function Page() {
  return <BlogHOAApprovalPage />;
}
