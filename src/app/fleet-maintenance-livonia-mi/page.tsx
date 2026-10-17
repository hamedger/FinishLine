import type { Metadata } from "next";
import Link from "next/link";
import {
  AREA_SERVED,
  BUSINESS,
  FLEET_FAQS,
  FLEET_FEATURES,
  FLEET_PROGRAM_NAMES,
  SITE_URL,
} from "@/lib/constants";
import { FaqSchema } from "@/components/FaqSchema";
import { FleetServiceSchema } from "@/components/ServiceSchema";
import { FleetForm } from "@/components/ContactForm";
import { FleetLogoGrid } from "@/components/FleetLogoGrid";

export const metadata: Metadata = {
  title: "Fleet Maintenance & Oil Changes in Livonia",
  description:
    "Fleet oil changes and maintenance in Livonia for cars, trucks and vans. Finish Line accepts fleet programs including Fleetio. Call (734) 367-6457.",
  keywords: [
    "fleet maintenance Livonia",
    "fleet oil change Livonia",
    "commercial vehicle maintenance",
    "business vehicle service",
    "Fleetio maintenance in Livonia",
  ],
  alternates: {
    canonical: `${SITE_URL}/fleet-maintenance-livonia-mi`,
  },
  openGraph: {
    title: "Fleet Maintenance & Fleet Oil Changes in Livonia, MI | Finish Line",
    description:
      "Fleet oil changes and maintenance in Livonia for cars, trucks and vans. Finish Line accepts fleet programs including Fleetio.",
    url: `${SITE_URL}/fleet-maintenance-livonia-mi`,
  },
};

export default function FleetMaintenanceLivoniaPage() {
  return (
    <>
      <FleetServiceSchema />
      <FaqSchema faqs={FLEET_FAQS} />

      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-300">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-white">Fleet Maintenance Livonia</li>
            </ol>
          </nav>

          <div className="mt-6 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Fleet Service in Livonia
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Fleet Maintenance &amp; Fleet Oil Changes in Livonia, MI
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-200 sm:text-xl">
              Finish Line Oil Change &amp; Auto Repair provides fleet
              maintenance and fleet oil changes in Livonia, Michigan, for
              local businesses and fleet-managed cars, pickup trucks, vans
              and light-duty commercial vehicles. We accept Fleetio and the
              fleet programs shown below. Fleet program not listed? Please
              call {BUSINESS.phone}. Coverage and authorization are verified
              before service.
            </p>

            <div className="mt-8">
              <a
                href={BUSINESS.phoneHref}
                className="flex w-full items-center justify-center rounded-xl bg-brand-red px-8 py-4 text-center text-lg font-bold text-white transition hover:bg-brand-red-dark sm:w-auto"
              >
                Call {BUSINESS.phone}
              </a>
              <div className="mt-3 flex flex-row flex-wrap gap-2">
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/25 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Fleet Programs We Accept
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We work with national and regional fleet-management
                programs, including Fleetio, to service cars, pickup trucks,
                vans, and light-duty commercial vehicles for local
                businesses.
              </p>

              <div className="mt-6">
                <FleetLogoGrid showHeading={false} />
              </div>

              <p className="mt-4 text-sm text-slate-600">
                Accepted fleet programs: {FLEET_PROGRAM_NAMES.join(", ")}.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-brand-navy">
                Maintenance That Keeps Business Moving
              </h3>
              <ul className="mt-5 space-y-3">
                {FLEET_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-0.5 text-brand-red" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-xl font-bold text-brand-navy">
                Supported Services
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Oil changes, brakes, tires, batteries, diagnostics, fluid
                services, and general maintenance for fleet-managed
                vehicles.
              </p>

              <h3 className="mt-8 text-xl font-bold text-brand-navy">
                Billing &amp; Authorization
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                We verify your fleet program coverage and authorization
                before performing service. Billing follows your program&apos;s
                standard process — bring your fleet card or authorization
                details when you visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Request a Fleet Quote
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Tell us about your vehicles and service needs, and we&apos;ll
                get back to you shortly.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <FleetForm />
              <p className="mt-4 text-center text-sm">
                <a href={BUSINESS.phoneHref} className="font-semibold text-brand-red">
                  Or call {BUSINESS.phone}
                </a>
                . Most requests answered the same business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Areas We Serve Near Livonia
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Local businesses bring fleet vehicles to us from across Wayne
            County. If you are searching for fleet maintenance near Livonia,
            Westland, Redford, or Canton, we are a convenient option on
            Middlebelt Road.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {AREA_SERVED.map((city) => (
              <li
                key={city}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Fleet Maintenance FAQs
          </h2>
          <div className="mt-10 space-y-6">
            {FLEET_FAQS.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-brand-navy">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Set Up Fleet Service?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Visit Finish Line at {BUSINESS.address.full}. Walk in today, or
            call ahead to confirm coverage and authorization.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center rounded-xl bg-brand-red px-8 py-4 font-bold text-white transition hover:bg-brand-red-dark"
            >
              Call {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.googlePlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Find Us on Google
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Contact &amp; Hours
            </Link>
          </div>
        </div>
      </section>

      <div className="h-20 sm:hidden" aria-hidden="true" />
    </>
  );
}
