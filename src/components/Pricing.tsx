import Image from "next/image";
import Link from "next/link";
import { BUSINESS, OIL_CHANGE_PRICING } from "@/lib/constants";

function OilCanIcon() {
  return (
    <svg
      className="h-7 w-auto text-slate-300"
      viewBox="0 0 69 32"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* handle loop */}
      <path
        d="M13.5 9.2 C7.5 8.2 3.2 10.8 3.0 14.4 C2.8 18.0 7.8 19.2 13.6 18.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.1"
        strokeLinecap="round"
      />
      {/* filler cap: wide lip + neck */}
      <rect x="17.5" y="2.2" width="13.5" height="3.0" rx="1.2" />
      <rect x="22.0" y="4.8" width="4.6" height="5.2" />
      {/* body */}
      <path d="M13.6 9.4 H46.5 L52.6 13.2 L46.2 28.4 a2.2 2.2 0 0 1 -2.0 1.3 H18.6 a2.2 2.2 0 0 1 -2.1 -1.5 Z" />
      {/* spout */}
      <path d="M45.8 9.9 L63.8 4.6 a1.05 1.05 0 0 1 0.75 1.9 L50.4 13.8 Z" />
      {/* falling drop */}
      <path d="M62.8 14.2 c2.6 3.6 3.8 5.5 3.8 7.0 a3.8 3.8 0 0 1 -7.6 0 c0 -1.5 1.2 -3.4 3.8 -7.0 Z" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            <span className="text-brand-navy">Oil Change </span>
            <span className="text-brand-red">Pricing</span>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
          {OIL_CHANGE_PRICING.map((tier) => (
            <div
              key={tier.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className={`${tier.bandClass} flex flex-col items-center gap-1.5 px-3 py-3 text-center sm:gap-2 sm:px-5 sm:py-4`}>
                <Image
                  src="/icon-512.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-7 w-7 rounded-md sm:h-10 sm:w-10"
                  aria-hidden="true"
                />
                <p className="text-sm font-black uppercase tracking-wide text-white sm:text-lg">
                  {tier.tier}
                </p>
              </div>
              <div className="p-3 text-center sm:p-6">
                <p className="text-xs font-semibold text-slate-700 sm:text-sm">{tier.label}</p>
                <div className="mx-auto mt-3 h-px w-16 bg-slate-200 sm:mt-4" aria-hidden="true" />
                <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:mt-4 sm:text-xs">
                  Starting At
                </p>
                <p className="mt-1 text-2xl font-black text-brand-red sm:text-4xl">${tier.price}</p>
                <div className="mt-2 flex justify-center">
                  <OilCanIcon />
                </div>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-wide text-slate-700 sm:text-xs">
                  Up to 5 Quarts &middot; Premium Filter Included
                </p>
                <p className="mt-3 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
                  {tier.description}
                </p>
                <p className="mt-4 border-t border-slate-100 pt-3 text-[10px] leading-relaxed text-slate-400 sm:text-[11px]">
                  Taxes and shop fee extra. Specialty filters or additional oil may
                  cost extra.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-center text-lg font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:bg-brand-red-dark sm:w-auto"
          >
            Walk-Ins Welcome &nbsp;&bull;&nbsp; Call {BUSINESS.phone}
          </a>
          <Link
            href="/#oil-change"
            className="text-sm font-bold text-brand-navy underline decoration-brand-red underline-offset-4 transition hover:text-brand-red"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
