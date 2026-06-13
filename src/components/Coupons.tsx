"use client";

import { useMemo, useState } from "react";
import { COUPONS } from "@/lib/constants";
import {
  formatCouponExpiryShort,
  getCouponExpiryDate,
  getMonthYearLabel,
} from "@/lib/coupon-utils";

export function Coupons() {
  const expiryDate = useMemo(() => getCouponExpiryDate(), []);
  const monthLabel = useMemo(() => getMonthYearLabel(), []);
  const expiryShort = useMemo(
    () => formatCouponExpiryShort(expiryDate),
    [expiryDate],
  );

  return (
    <section id="coupons" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Monthly Specials
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Service Coupons
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Show these coupons on your phone at checkout. Valid through{" "}
            <strong className="text-brand-navy">{expiryShort}</strong>.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {COUPONS.map((coupon) => (
            <CouponCard
              key={coupon.id}
              coupon={coupon}
              expiryShort={expiryShort}
              monthLabel={monthLabel}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          One coupon per visit. Cannot be combined with other offers. Valid at
          Finish Line Oil Change and Repair, Livonia, MI only.
        </p>
      </div>
    </section>
  );
}

function CouponCard({
  coupon,
  expiryShort,
  monthLabel,
}: {
  coupon: (typeof COUPONS)[number];
  expiryShort: string;
  monthLabel: string;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl border-2 border-dashed border-brand-red/40 bg-gradient-to-br from-white to-red-50/50 shadow-md">
      <div className="checker-bg h-3 w-full" aria-hidden="true" />

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {monthLabel} Offer
            </p>
            <p className="mt-1 text-4xl font-black text-brand-red">{coupon.amount}</p>
            <h3 className="mt-2 text-xl font-bold text-brand-navy">{coupon.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{coupon.description}</p>
          </div>
          <div className="hidden shrink-0 rounded-full bg-brand-red/10 p-4 sm:block">
            <svg className="h-10 w-10 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
            </svg>
          </div>
        </div>

        <div className="mt-6">
          {!revealed ? (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="w-full rounded-xl bg-brand-red py-4 text-base font-bold text-white shadow-md transition hover:bg-brand-red-dark"
            >
              Tap to Reveal Coupon
            </button>
          ) : (
            <div className="coupon-reveal rounded-xl border-4 border-brand-navy bg-white p-6 text-center shadow-inner">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Show this screen at checkout
              </p>
              <p className="mt-3 font-mono text-3xl font-black tracking-widest text-brand-navy">
                {coupon.code}
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-red">
                Expires {expiryShort}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Finish Line Oil Change &amp; Repair · Livonia, MI
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
