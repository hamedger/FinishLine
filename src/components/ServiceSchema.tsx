import { AREA_SERVED, BUSINESS, SITE_URL } from "@/lib/constants";

function LocalServiceSchema({
  name,
  description,
  serviceType,
  path,
}: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
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
    serviceType,
    url: `${SITE_URL}${path}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OilChangeServiceSchema() {
  return (
    <LocalServiceSchema
      name="Oil Change in Livonia, MI"
      description="Walk-in oil change service in Livonia, Michigan. Conventional, synthetic blend, full synthetic, and high-mileage options with filter replacement and courtesy inspection."
      serviceType="Oil Change"
      path="/oil-change-livonia-mi"
    />
  );
}

export function BrakeRepairServiceSchema() {
  return (
    <LocalServiceSchema
      name="Brake Repair in Livonia, MI"
      description="Walk-in brake repair service in Livonia, Michigan. Brake inspections, pad replacement, rotor replacement, and brake fluid exchange."
      serviceType="Brake Repair"
      path="/brake-repair-livonia-mi"
    />
  );
}

export function TireServiceSchema() {
  return (
    <LocalServiceSchema
      name="Tire Service in Livonia, MI"
      description="Walk-in tire service in Livonia, Michigan. Tire rotation, balancing, flat repair, pressure checks, and TPMS sensor service."
      serviceType="Tire Service"
      path="/tire-service-livonia-mi"
    />
  );
}
