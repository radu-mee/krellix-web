import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import Script from "next/script";
import ConsentBanner from "@/ui/ConsentBanner";
import ThemeScript from "@/ui/ThemeScript";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const siteDescription =
  "Build AI workflows where AI agents collaborate in one platform to deliver faster, better decisions.";
const socialPreviewImage = "/social-preview-image.png";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krellixlabs.com";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-NJH7LGW8";
const consentStorageKey = "krellix-consent-v1";
const euVisitorCookieKey = "krellix-eu-visitor";

export const metadata: Metadata = {
  title: {
    default: "Krellix",
    template: "%s | Krellix",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Krellix",
    description: siteDescription,
    type: "website",
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: "Krellix social preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krellix",
    description: siteDescription,
    images: [socialPreviewImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${poppins.variable}`}
    >
      <head>
        {gtmId ? (
          <>
            <Script
              id="gtm-consent-bootstrap"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,l,k,c){
  w[l]=w[l]||[];
  w.gtag = w.gtag || function(){ w[l].push(arguments); };

  var euVisitor = true;
  try {
    var cookieMatch = d.cookie.match(new RegExp('(?:^|; )' + c + '=([^;]*)'));
    if (cookieMatch && cookieMatch[1]) {
      euVisitor = decodeURIComponent(cookieMatch[1]) === '1';
    }
  } catch (error) {}

  var defaultAnalyticsState = euVisitor ? 'denied' : 'granted';

  w.gtag('consent','default',{
    analytics_storage: defaultAnalyticsState,
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    wait_for_update:500
  });

  if (!euVisitor) {
    return;
  }

  try {
    var savedConsentRaw = w.localStorage.getItem(k);
    if (!savedConsentRaw) {
      return;
    }

    var savedConsent = JSON.parse(savedConsentRaw);
    var analyticsGranted = savedConsent && savedConsent.analytics === true;

    w.gtag('consent','update',{
      analytics_storage: analyticsGranted ? 'granted' : 'denied',
      ad_storage:'denied',
      ad_user_data:'denied',
      ad_personalization:'denied'
    });
  } catch (error) {}
})(window,document,'dataLayer','${consentStorageKey}','${euVisitorCookieKey}');`,
              }}
            />
            <Script
              id="gtm-init"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
              }}
            />
          </>
        ) : null}
      </head>
      <body className="bg-[var(--page-bg)] font-body text-[var(--text-strong)] antialiased">
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <ThemeScript />
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
