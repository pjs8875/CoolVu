export default function JsonLdLocalBusiness() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.coolvulongisland.com/#business",
    "name": "CoolVu of Long Island",
    "image": "https://www.coolvulongisland.com/og-image.png",
    "url": "https://www.coolvulongisland.com",
    "telephone": "+1-516-535-9555",
    "email": "paul.silverman@coolvu.com",
    "priceRange": "$$",
    "address": { "@type": "PostalAddress", "streetAddress": "1055 Old Country Rd", "addressLocality": "Westbury", "addressRegion": "NY", "postalCode": "11590", "addressCountry": "US" },
    "areaServed": [ { "@type": "AdministrativeArea", "name": "Nassau County, NY" }, { "@type": "AdministrativeArea", "name": "Suffolk County, NY" } ],
    "knowsAbout": ["solar window film","privacy window film","safety and security window film","decorative window film","commercial window film"],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "31" },
    "sameAs": ["https://www.facebook.com/783344724864582","https://www.instagram.com/coolvunassaucounty","https://x.com/CoolVuLI","https://www.youtube.com/@coolvuoflongisland"]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
