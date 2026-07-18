import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AREA_SERVED,
  BUSINESS,
  SERVICES,
  SITE_URL,
  TESTIMONIALS,
  TIRE_SERVICE_FAQS,
} from "@/lib/constants";
import { FaqSchema } from "@/components/FaqSchema";
import { TireServiceSchema } from "@/components/ServiceSchema";

const tireService = SERVICES.find((service) => service.id === "tires")!;
const tireTestimonials = TESTIMONIALS.slice(8, 12);

export const metadata: Metadata = {
  title: "Tire Service in Livonia, MI — Walk-In Welcome",
  description:
    "Fast walk-in tire service in Livonia, MI at Finish Line on Middlebelt Rd. Tire rotation, balancing, flat repair, and TPMS service. No appointment needed. Call (734) 367-6457.",
  keywords: [
    "tire service Livonia",
    "tire service Livonia MI",
    "tire rotation Livonia",
    "flat tire repair Livonia",
    "tire balancing Livonia",
    "Middlebelt tire service",
  ],
  alternates: {
    canonical: `${SITE_URL}/tire-service-livonia-mi`,
  },
  openGraph: {
    title: "Tire Service in Livonia, MI | Finish Line Oil Change and Repair",
    description:
      "Walk-in tire service in Livonia with no appointment needed. Rotation, balancing, flat repair, and TPMS service.",
    url: `${SITE_URL}/tire-service-livonia-mi`,
  },
};

export default function TireServiceLivoniaPage() {
  return (
    <>
      <TireServiceSchema />
      <FaqSchema faqs={TIRE_SERVICE_FAQS} />

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
              <li className="font-medium text-white">Tire Service Livonia</li>
            </ol>
          </nav>

          <div className="mt-6 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Walk-In Tire Service
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Tire Service in Livonia, MI
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-200 sm:text-xl">
              Finish Line Oil Change and Repair offers tire rotation, balancing,
              and flat repair at {BUSINESS.address.full}. No appointment
              needed — drive in during business hours and our team will get
              you back on the road quickly.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center rounded-xl bg-brand-red px-8 py-4 text-lg font-bold text-white transition hover:bg-brand-red-dark"
              >
                Call {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
              >
                Get Directions
              </a>
              <a
                href={BUSINESS.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
              >
                Review on Google
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl sm:aspect-[16/9]">
            <Image
              src="/shop/shop-tire-balancing.jpg"
              alt="Finish Line technician balancing a tire on a computer wheel balancer in Livonia, MI"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Tire Service in Livonia
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {tireService.description}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {tireService.closing}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-brand-navy">
                What&apos;s Included
              </h3>
              <ul className="mt-5 space-y-3">
                {tireService.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-0.5 text-brand-red" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Why Choose Finish Line for Tire Service?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Local, family-owned service with honest recommendations and no
              high-pressure upsells.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Walk-In Welcome",
                text: "No appointment needed. Stop by during business hours for fast service.",
              },
              {
                title: "Flat Repair",
                text: "Punctured tire? We'll assess and repair it when it's safe to do so.",
              },
              {
                title: "Rotation & Balancing",
                text: "Keep tread wear even and your ride smooth.",
              },
              {
                title: "Trusted Locally",
                text: "Serving Livonia and nearby communities from Middlebelt Rd.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Areas We Serve Near Livonia
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Customers visit us from across Wayne County for dependable walk-in
            tire service. If you are searching for tire service near Livonia,
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

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            What Customers Say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tireTestimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm leading-relaxed text-slate-700">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold text-brand-navy">
                  {testimonial.name} — {testimonial.location}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Tire Service FAQs
          </h2>
          <div className="mt-10 space-y-6">
            {TIRE_SERVICE_FAQS.map((faq) => (
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
            Ready for Tire Service?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Visit Finish Line at {BUSINESS.address.full}. Walk in today — no
            appointment needed.
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
