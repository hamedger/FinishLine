import Image from "next/image";
import Link from "next/link";
import { BUSINESS, OIL_CHANGE_PRICING } from "@/lib/constants";

function OilDropIcon() {
  return (
    <svg className="h-6 w-6 text-slate-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C9 7 5 11.5 5 15a7 7 0 0014 0c0-3.5-4-8-7-13z" />
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OIL_CHANGE_PRICING.map((tier) => (
            <div
              key={tier.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className={`${tier.bandClass} flex flex-col items-center gap-2 px-5 py-4 text-center`}>
                <Image
                  src="/icon-512.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-md"
                  aria-hidden="true"
                />
                <p className="text-lg font-black uppercase tracking-wide text-white">
                  {tier.tier}
                </p>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm font-semibold text-slate-700">{tier.label}</p>
                <div className="mx-auto mt-4 h-px w-16 bg-slate-200" aria-hidden="true" />
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Starting At
                </p>
                <p className="mt-1 text-4xl font-black text-brand-red">${tier.price}</p>
                <div className="mt-2 flex justify-center">
                  <OilDropIcon />
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-700">
                  Up to 5 Quarts &middot; Premium Filter Included
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  {tier.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 rounded-xl bg-slate-100 py-3 text-center text-sm text-slate-500">
          Taxes and shop fee extra. Special filters or additional oil may cost extra.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
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
