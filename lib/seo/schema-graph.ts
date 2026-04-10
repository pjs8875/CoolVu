import { DEFAULT_DESCRIPTION, SITE_NAME, getSiteUrl } from "./site";

export function getSchemaGraph() {
  const siteUrl = getSiteUrl();
  const orgId = `${siteUrl}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_NAME,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/logo.png`,
        telephone: "+15165359555",
        email: "paul.silverman@coolvu.com",
        sameAs: [
          "https://www.facebook.com/coolvusolutions/",
          "https://www.instagram.com/coolvusolutions",
          "https://x.com/CoolVuSolutions",
          "https://www.youtube.com/@coolvuglasssurfacesolution/videos",
          "https://www.linkedin.com/company/coolvu-solutions",
        ],
        areaServed: [
          { "@type": "State", name: "New York" },
          { "@type": "State", name: "New Jersey" },
          { "@type": "State", name: "Connecticut" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+15165359555",
          contactType: "sales",
          areaServed: "US",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        publisher: { "@id": orgId },
        inLanguage: "en-US",
      },
    ],
  };
}
