import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-coolvu-off-white text-coolvu-dark-blue">
      <h1 className="text-3xl font-bold font-heading text-center">Page not found</h1>
      <p className="text-gray-600 font-sans text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-coolvu-medium-blue hover:bg-coolvu-light-blue text-coolvu-off-white px-8 py-3 font-sans font-bold text-sm tracking-wider uppercase rounded-xl transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
