import Image from "next/image";
import { SERVICES } from "@/lib/constants";

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

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {service.title}
                </h3>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {service.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    Services Include
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
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
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-500">
          Pricing varies by vehicle. Call us for a quote — no hidden fees, no pressure.
        </p>
      </div>
    </section>
  );
}
