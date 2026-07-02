import { AREA_SERVED, BUSINESS, SITE_URL } from "@/lib/constants";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS.name,
    description: `${BUSINESS.tagline} Walk-in oil changes, tire service, brakes, and auto repair in Livonia, Michigan.`,
    url: SITE_URL,
    image: BUSINESS.logoFullUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    hasMap: BUSINESS.googlePlaceUrl,
    sameAs: [BUSINESS.googlePlaceUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.3689,
      longitude: -83.3527,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    areaServed: AREA_SERVED,
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Oil Change",
        description:
          "Full-service walk-in oil changes including conventional, synthetic blend, full synthetic, and high-mileage options.",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
