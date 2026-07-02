import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { SERVICE_ICONS } from "@/components/ServiceIcons";

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Full-Service Auto Care in Livonia
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Walk in for professional maintenance and repair — from oil changes to
            tires, brakes, and more. No appointment needed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id];

            return (
              <article
                key={service.id}
                id={service.id}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red ring-4 ring-brand-red/5 transition group-hover:bg-brand-red group-hover:text-white group-hover:ring-brand-red/20">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="min-w-0 pt-1">
                    <h3 className="text-xl font-extrabold tracking-tight text-brand-navy">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <div className="mt-5 flex-1 border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    Services Include
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-medium leading-relaxed text-slate-500">
                  {service.closing}
                </p>

                {service.id === "oil-change" && (
                  <Link
                    href="/oil-change-livonia-mi"
                    className="mt-4 inline-flex text-sm font-bold text-brand-red transition hover:text-brand-red-dark"
                  >
                    Learn more about oil changes in Livonia →
                  </Link>
                )}
              </article>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm text-slate-500">
          Pricing varies by vehicle. Call us for a quote — no hidden fees, no pressure.
        </p>
      </div>
    </section>
  );
}
