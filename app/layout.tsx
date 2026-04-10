import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ContactModalWrapper from "@/components/ContactModalWrapper";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoolVu of Long Island | Window Film & Surface Solutions",
  description: "CoolVu of Long Island, Brooklyn, Queens, CT & NJ. Professional window tinting, security film, and surface solutions for residential and commercial properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`if (typeof window !== "undefined") { window.history.scrollRestoration = "manual"; }`}
        </Script>
        {children}
        <ContactModalWrapper />
      </body>
    </html>
  );
}
