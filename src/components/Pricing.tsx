import Link from "next/link";
import { BUSINESS, OIL_CHANGE_PRICING } from "@/lib/constants";

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Oil Change Pricing
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Straightforward Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Up to 5 quarts &middot; Premium oil filter included
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OIL_CHANGE_PRICING.map((tier) => (
            <div
              key={tier.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className={`${tier.bandClass} px-5 py-3 text-center`}>
                <p className="text-lg font-black uppercase tracking-wide text-white">
                  {tier.tier}
                </p>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm font-semibold text-slate-700">{tier.label}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Starting At
                </p>
                <p className="mt-1 text-4xl font-black text-brand-navy">${tier.price}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Prices are for up to 5 quarts. Taxes and shop fee extra. Special filters and
          additional oil may cost extra.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#oil-change"
            className="inline-flex items-center justify-center rounded-xl border-2 border-brand-navy px-6 py-3 text-base font-bold text-brand-navy transition hover:bg-brand-navy hover:text-white"
          >
            View Full Menu
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center rounded-xl bg-brand-red px-6 py-3 text-base font-bold text-white transition hover:bg-brand-red-dark"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
