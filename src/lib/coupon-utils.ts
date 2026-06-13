export function getCouponExpiryDate(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
}

export function formatCouponExpiry(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatCouponExpiryShort(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getMonthYearLabel(date: Date = new Date()): string {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
