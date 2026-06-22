import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meritacctax.com"),
  title: {
    default: "เมอริท แอค แทกซ์ | รับทำบัญชี ปิดงบ ตรวจสอบบัญชี สมุทรปราการ",
    template: "%s | MERIT ACC TAX",
  },
  description:
    "สำนักงานบัญชีครบวงจร รับทำบัญชี วางระบบ ปิดงบ ตรวจสอบบัญชี ยื่นภาษี จดทะเบียนบริษัท ทีมงานมืออาชีพ ประสบการณ์กว่า 10 ปี ปรึกษาฟรี",
  keywords: [
    "รับทำบัญชี",
    "สำนักงานบัญชีบางพลี",
    "สำนักงานบัญชีสมุทรปราการ",
    "ปิดงบการเงิน",
    "ตรวจสอบบัญชี",
    "จดทะเบียนบริษัท",
    "ยื่นภาษี",
    "วางระบบบัญชี",
  ],
  authors: [{ name: "MERIT ACC TAX" }],
  openGraph: {
    type: "website",
    siteName: "MERIT ACC TAX",
    title: "เมอริท แอค แทกซ์ | บัญชี ภาษี ครบจบในที่เดียว",
    description:
      "รับทำบัญชี วางระบบ ปิดงบ ตรวจสอบบัญชี ยื่นภาษี จดทะเบียนบริษัท ทีมงานมืออาชีพ ประสบการณ์กว่า 10 ปี ปรึกษาฟรี",
    url: "https://meritacctax.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MERIT ACC TAX สำนักงานบัญชีครบวงจร",
      },
    ],
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "เมอริท แอค แทกซ์ | บัญชี ภาษี ครบจบในที่เดียว",
    description: "สำนักงานบัญชีครบวงจร ทีมงานมืออาชีพ ประสบการณ์กว่า 10 ปี ปรึกษาฟรี",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${inter.variable} ${ibmPlexThai.variable}`}>
      <head>
        <link rel="alternate" hrefLang="th" href="https://meritacctax.com" />
        <link rel="alternate" hrefLang="en" href="https://meritacctax.com" />
        <link rel="alternate" hrefLang="x-default" href="https://meritacctax.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "บริษัท เมอริท แอค แทกซ์ จำกัด",
              alternateName: "MERIT ACC TAX",
              image: "https://meritacctax.com/og-image.png",
              url: "https://meritacctax.com",
              telephone: "+66824989442",
              email: "merit.acctax@gmail.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "87/8 หมู่ที่ 7 ตำบลบางโฉลง อำเภอบางพลี",
                addressLocality: "บางพลี",
                addressRegion: "สมุทรปราการ",
                postalCode: "10540",
                addressCountry: "TH",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: ["https://web.facebook.com/meritacctax"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "บริษัท เมอริท แอค แทกซ์ จำกัด",
              alternateName: "MERIT ACC TAX",
              url: "https://meritacctax.com",
              logo: "https://meritacctax.com/og-image.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+66824989442",
                  contactType: "customer service",
                  availableLanguage: ["Thai", "English"],
                },
              ],
              sameAs: ["https://web.facebook.com/meritacctax"],
            }),
          }}
        />
      </head>
      <body
        className="min-h-screen"
        style={{
          fontFamily:
            "var(--font-ibm-plex-thai), var(--font-inter), sans-serif",
        }}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
