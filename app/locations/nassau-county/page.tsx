import CountyWindowFilmLayout from "@/components/CountyWindowFilmLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Nassau County Window Film | Solar, Privacy & Safety | CoolVu",
  description: "CoolVu installs solar, privacy, safety & decorative window film across Nassau County — Garden City, Great Neck, Levittown & more. Free estimate: 516-535-9555.",
  path: "/locations/nassau-county",
});

const TOWNS = [
  { slug: "garden-city", name: "Garden City" },
  { slug: "great-neck", name: "Great Neck" },
  { slug: "manhasset", name: "Manhasset" },
  { slug: "rockville-centre", name: "Rockville Centre" },
  { slug: "massapequa", name: "Massapequa" },
  { slug: "levittown", name: "Levittown" },
  { slug: "east-meadow", name: "East Meadow" },
  { slug: "plainview", name: "Plainview" },
  { slug: "syosset", name: "Syosset" },
  { slug: "hempstead", name: "Hempstead" },
  { slug: "oyster-bay", name: "Oyster Bay" },
];

const FAQ = [
  {
    q: "Does CoolVu install window film throughout Nassau County?",
    a: "Yes — CoolVu of Long Island serves every Nassau County community, including Garden City, Great Neck, Manhasset, Rockville Centre, Massapequa, Levittown, East Meadow, Plainview, Syosset, Hempstead, and Oyster Bay. Call 516-535-9555 for a free estimate.",
  },
  {
    q: "How much does window film cost in Nassau County?",
    a: "Most residential projects range from a few hundred to a few thousand dollars depending on the number of windows and the film type. CoolVu gives free, no-obligation in-home estimates across Nassau County — call 516-535-9555.",
  },
  {
    q: "What kind of window film is best for Nassau County homes?",
    a: "Solar film is the most popular for cutting heat and lowering PSEG bills; privacy film is common for street-facing and bathroom windows; and safety film adds storm and break-in protection. CoolVu helps you pick the right film for your home.",
  },
  {
    q: "Is there a warranty on CoolVu window film?",
    a: "Yes — CoolVu residential window film carries a lifetime warranty and blocks 99% of UV rays. We serve all of Nassau and Suffolk County from our Westbury base.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <CountyWindowFilmLayout
        county="Nassau County"
        countySlug="nassau-county"
        intro="From the North Shore Gold Coast to the South Shore, CoolVu installs solar, privacy, safety, and decorative window film for Nassau County homes and businesses — blocking 99% of UV and up to 63% of summer heat."
        towns={TOWNS}
        faq={FAQ}
      />
      <Footer />
    </div>
  );
}
