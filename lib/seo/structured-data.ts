export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "เมอริท แอค แทกซ์",
  alternateName: [
    "MERIT ACC TAX",
    "บริษัท เมอริท แอค แทกซ์ จำกัด",
    "meritacctax.com",
  ],
  url: "https://www.meritacctax.com",
} as const;

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "เมอริท แอค แทกซ์",
  legalName: "บริษัท เมอริท แอค แทกซ์ จำกัด",
  alternateName: "MERIT ACC TAX",
  url: "https://www.meritacctax.com",
  image: "https://www.meritacctax.com/opengraph-image",
  telephone: ["+66824989442", "+66626299971"],
  email: "merit.acctax@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "87/8 หมู่ที่ 7 ต.บางโฉลง",
    addressLocality: "อ.บางพลี",
    addressRegion: "สมุทรปราการ",
    postalCode: "10540",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.613361,
    longitude: 100.761085,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: "TH",
  sameAs: ["https://web.facebook.com/meritacctax"],
} as const;
