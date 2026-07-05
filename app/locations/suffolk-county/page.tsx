import CountyWindowFilmLayout from "@/components/CountyWindowFilmLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Suffolk County Window Film | Solar, Privacy & Safety | CoolVu",
  description: "CoolVu installs solar, privacy, safety & decorative window film across Suffolk County — Huntington, Commack, the Hamptons & more. Call 516-535-9555.",
  path: "/locations/suffolk-county",
});

const TOWNS = [
  { slug: "huntington", name: "Huntington" },
  { slug: "commack", name: "Commack" },
  { slug: "smithtown", name: "Smithtown" },
  { slug: "islip", name: "Islip" },
  { slug: "babylon", name: "Babylon" },
  { slug: "southampton", name: "Southampton" },
  { slug: "east-hampton", name: "East Hampton" },
  { slug: "westhampton-beach", name: "Westhampton Beach" },
  { slug: "montauk", name: "Montauk" },
];

const FAQ = [
  {
    q: "Does CoolVu install window film throughout Suffolk County?",
    a: "Yes — CoolVu serves Suffolk County from the North Shore to the Hamptons, including Huntington, Commack, Smithtown, Islip, Babylon, Southampton, East Hampton, Westhampton Beach, and Montauk. Call 516-535-9555.",
  },
  {
    q: "Is window film worth it for East End and waterfront homes?",
    a: "Absolutely. Suffolk's oceanfront and bay-facing homes get intense sun and UV that fades floors and furniture — solar film blocks 99% of UV and up to 63% of heat while keeping your view clear. Safety film also helps in the East End's storm-exposed areas.",
  },
  {
    q: "How much does window film cost in Suffolk County?",
    a: "Pricing depends on window count and film type. CoolVu provides free in-home estimates across Suffolk County — call 516-535-9555 for a no-obligation quote.",
  },
  {
    q: "Do you serve commercial properties in Suffolk County?",
    a: "Yes — offices, retail stores, restaurants, and medical practices throughout Suffolk. CoolVu installs commercial solar, security, and decorative film for businesses of every size.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <CountyWindowFilmLayout
        county="Suffolk County"
        countySlug="suffolk-county"
        intro="From Huntington and Smithtown to the Hamptons and Montauk, CoolVu installs solar, privacy, safety, and decorative window film for Suffolk County homes and businesses — blocking 99% of UV and up to 63% of summer heat."
        towns={TOWNS}
        faq={FAQ}
      />
      <Footer />
    </div>
  );
}
