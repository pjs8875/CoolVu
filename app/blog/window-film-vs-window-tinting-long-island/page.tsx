import { Metadata } from 'next';
import BlogWindowFilmVsTintingPage from '@/components/blog/BlogWindowFilmVsTintingPage';

export const metadata: Metadata = {
  title: 'Window Film vs. Window Tinting: What's the Difference? | CoolVu of Long Island',
  description: 'Learn the key difference between residential window film and automotive window tinting — and why it matters when hiring an installer on Long Island, NY.',
  alternates: { canonical: 'https://www.coolvulongisland.com/blog/window-film-vs-window-tinting-long-island' },
  openGraph: {
    title: 'Window Film vs. Window Tinting: What's the Difference?',
    description: 'Residential window film and automotive tinting are completely different products. CoolVu installs residential and commercial window film exclusively — not car tint.',
    url: 'https://www.coolvulongisland.com/blog/window-film-vs-window-tinting-long-island',
  },
};

export default function Page() {
  return <BlogWindowFilmVsTintingPage />;
}
