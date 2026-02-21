import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const instrumentSerif = localFont({
  src: [
    {
      path: "../fonts/InstrumentSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/InstrumentSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://babypillars.com"),
  alternates: {
    canonical: "./",
  },
  title: "BabyPillars - Stop Guessing, Start Knowing",
  description:
    "Our environment-first system replaces parental anxiety with clinical clarity. A simple roadmap for your baby's unique development from 0-24 months.",
  openGraph: {
    type: "website",
    siteName: "BabyPillars",
    title: "BabyPillars - Stop Guessing, Start Knowing",
    description:
      "Our environment-first system replaces parental anxiety with clinical clarity. A simple roadmap for your baby's unique development from 0-24 months.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BabyPillars - Baby Development System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BabyPillars - Stop Guessing, Start Knowing",
    description:
      "Our environment-first system replaces parental anxiety with clinical clarity. A simple roadmap for your baby's unique development from 0-24 months.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PX5ZNP');`,
        }}
      />
      <body
        className={`${instrumentSerif.variable} ${inter.variable} bg-background-light text-slate-800 font-sans antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PX5ZNP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "BabyPillars",
                  url: "https://babypillars.com",
                  logo: "https://babypillars.com/logo.png",
                  description:
                    "Our environment-first system replaces parental anxiety with clinical clarity. A simple roadmap for your baby's unique development from 0-24 months.",
                  founder: {
                    "@type": "Person",
                    name: "Anat Furstenberg",
                  },
                },
                {
                  "@type": "WebSite",
                  name: "BabyPillars",
                  url: "https://babypillars.com",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://babypillars.com/blog?q={search_term_string}",
                    "query-input":
                      "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
