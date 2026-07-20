import Link from "next/link";
import { COUPONS } from "@/lib/constants";

export function PromoBar() {
  const [oilCoupon, repairCoupon] = COUPONS;

  return (
    <Link
      href="/#coupons"
      className="block bg-brand-red px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-brand-red-dark"
    >
      <span className="sm:hidden">
        {oilCoupon.amount} Oil Change — Tap for Coupons →
      </span>
      <span className="hidden sm:inline">
        {oilCoupon.amount} {oilCoupon.title} &middot; {repairCoupon.amount}{" "}
        {repairCoupon.title} — Tap to See Coupons →
      </span>
    </Link>
  );
}
