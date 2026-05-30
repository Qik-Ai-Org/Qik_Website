import Script from "next/script";
import "../src/index.css";
import "../src/App.css";
import "../src/animate.css";
import "../src/main-style.css";
import "../src/global-ui.css";
import "../src/products.css";

const SITE_URL = "https://www.qik.ai";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Qik Cloud Stack | 50+ Integrated Business Applications",
    template: "%s | Qik",
  },
  description:
    "Qik builds and backs a family of free, open-source business software — OpenSign e-signatures, DocTrack document analytics, OpenCLM contract management and OpenBuzz social media automation.",
  keywords: [
    "open source business software",
    "e-signature",
    "document analytics",
    "contract lifecycle management",
    "social media automation",
    "OpenSign",
    "DocTrack",
    "OpenCLM",
    "OpenBuzz",
    "Qik",
  ],
  authors: [{ name: "Qik.ai" }],
  creator: "Qik Innovations Private Limited",
  publisher: "Qik Innovations Private Limited",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Qik.ai",
    title: "Qik Cloud Stack | Open-Source Business Software",
    description:
      "A family of free, open-source business products — e-signatures, document analytics, contract management and social media automation.",
    images: [{ url: "/images/qik-ai-og-image.jpg", width: 1200, height: 630, alt: "Qik.ai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qik.ai — Open-Source Business Software",
    description:
      "A family of free, open-source business products — e-signatures, document analytics, contract management and social media automation.",
    images: ["/images/qik-ai-og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#4F46E5",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Qik.ai",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    "Qik builds and backs a family of free, open-source business applications for e-signatures, document analytics, contract management and social media automation.",
  sameAs: ["https://www.linkedin.com/company/qik-ai", "https://twitter.com/qik_ai"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@qik.ai",
    contactType: "customer service",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-161747385-1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-161747385-1');
          `}
        </Script>
      </body>
    </html>
  );
}
