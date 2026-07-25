"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export function Services() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-10 space-y-3">
          {SERVICES.map((service) => {
            const isOpen = openId === service.id;

            return (
              <div
                key={service.id}
                id={service.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-brand-red/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
                >
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-red/10 sm:h-14 sm:w-14">
                    <Image
                      src={`/services/${service.id}.jpeg`}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-extrabold tracking-tight text-brand-navy sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {service.items.length} services
                    </p>
                  </div>
                  <ChevronIcon
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-red" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-4 pb-5 pt-4 sm:px-5">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-red">
                      Services Include
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-xs leading-relaxed text-slate-500">
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
                    {service.id === "brakes" && (
                      <Link
                        href="/brake-repair-livonia-mi"
                        className="mt-4 inline-flex text-sm font-bold text-brand-red transition hover:text-brand-red-dark"
                      >
                        Learn more about brake repair in Livonia →
                      </Link>
                    )}
                    {service.id === "tires" && (
                      <Link
                        href="/tire-service-livonia-mi"
                        className="mt-4 inline-flex text-sm font-bold text-brand-red transition hover:text-brand-red-dark"
                      >
                        Learn more about tire service in Livonia →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Pricing varies by vehicle. Call us for a quote — no hidden fees, no pressure.
        </p>
      </div>
    </section>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
