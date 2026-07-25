import Link from "next/link";
import { COUPONS } from "@/lib/constants";

export function CouponsStrip() {
  return (
    <section className="bg-white py-4 sm:py-5" aria-label="Current coupons">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red sm:text-sm">
            Current Coupons
          </p>
          <Link
            href="/#coupons"
            className="text-xs font-semibold text-brand-navy transition hover:text-brand-red sm:text-sm"
          >
            View All →
          </Link>
        </div>

        <div className="-mx-4 mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0">
          {COUPONS.map((coupon) => (
            <Link
              key={coupon.id}
              href="/#coupons"
              className="group flex w-[82%] shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 shadow-sm transition hover:border-brand-red/40 hover:shadow-md sm:w-auto"
            >
              <div className="flex w-20 shrink-0 items-center justify-center bg-brand-red p-2 text-center sm:w-24">
                <span className="text-base font-black leading-tight text-white sm:text-lg">
                  {coupon.amount}
                </span>
              </div>
              <div className="flex-1 bg-white p-3 sm:p-4">
                <h3 className="text-sm font-bold text-brand-navy">
                  {coupon.title}
                </h3>
                <p className="mt-0.5 line-clamp-2 text-xs text-slate-500">
                  {coupon.description}
                </p>
                <span className="mt-1.5 inline-block text-xs font-bold text-brand-red group-hover:underline">
                  View Coupon →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
