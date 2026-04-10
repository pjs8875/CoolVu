import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ContactModalWrapper from "@/components/ContactModalWrapper";
import { DEFAULT_DESCRIPTION, SITE_NAME, getSiteUrl } from "@/lib/seo/site";
import { getSchemaGraph } from "@/lib/seo/schema-graph";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | Window Film & Surface Solutions`,
    template: "%s | CoolVu",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "CoolVu",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CoolVu",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getSchemaGraph();

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <head>
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-SSX9WMGTHC" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-SSX9WMGTHC', { debug_mode: true });
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans text-coolvu-dark-blue bg-coolvu-off-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`if (typeof window !== "undefined") { window.history.scrollRestoration = "manual"; }`}
        </Script>
        {children}
        <ContactModalWrapper />
      </body>
    </html>
  );
}
