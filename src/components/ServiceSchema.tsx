import { AREA_SERVED, BUSINESS, SITE_URL } from "@/lib/constants";

export function OilChangeServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Oil Change in Livonia, MI",
    description:
      "Walk-in oil change service in Livonia, Michigan. Conventional, synthetic blend, full synthetic, and high-mileage options with filter replacement and courtesy inspection.",
    provider: {
      "@type": "AutoRepair",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: AREA_SERVED.map((city) => ({
      "@type": "City",
      name: city,
    })),
    serviceType: "Oil Change",
    url: `${SITE_URL}/oil-change-livonia-mi`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
