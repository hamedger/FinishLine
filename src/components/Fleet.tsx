import Image from "next/image";
import { BUSINESS, FLEET_FEATURES, FLEET_PARTNERS } from "@/lib/constants";
import { FleetForm } from "@/components/ContactForm";

export function Fleet() {
  return (
    <section id="fleet" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Fleet Management
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Keep Your Fleet on the Road
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Whether you manage 3 vehicles or 30, Finish Line helps local
              businesses stay on schedule with reliable maintenance, flexible
              billing, and priority service — so your team spends less time in
              the shop and more time working.
            </p>

            <ul className="mt-8 space-y-3">
              {FLEET_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-semibold text-brand-navy">
              Fleet Support Customers
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {FLEET_PARTNERS.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-red hover:text-brand-red"
                >
                  {partner.name}
                </a>
              ))}
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-navy px-6 py-3.5 text-base font-bold text-white transition hover:bg-brand-slate"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d52736?auto=format&fit=crop&w=800&q=80"
                alt="Commercial fleet vehicles ready for maintenance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-brand-navy">
                Request a Fleet Quote
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Tell us about your fleet and we&apos;ll get back to you shortly.
              </p>
              <FleetForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
