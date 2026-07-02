import Image from "next/image";
import Link from "next/link";
import { BUSINESS, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="checker-bg h-1.5 w-full" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src={BUSINESS.logoSrc}
                alt={`${BUSINESS.name} logo`}
                width={1024}
                height={645}
                className="h-14 w-auto sm:h-16"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {BUSINESS.heroTrust} Family-owned auto care serving Livonia and
              surrounding communities.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={BUSINESS.googlePlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 transition hover:text-brand-red"
                >
                  Find Us on Google
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 transition hover:text-brand-red"
                >
                  Leave a Google Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>{BUSINESS.address.full}</li>
              <li>
                <a href={BUSINESS.phoneHref} className="hover:text-brand-red">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="hover:text-brand-red"
                >
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
              Hours
            </h3>
            <ul className="mt-4 space-y-1 text-sm text-slate-600">
              {BUSINESS.hours.map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span>{day.slice(0, 3)}</span>
                  <span className="font-medium">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Livonia, MI · Walk-in oil changes &amp; auto repair
          </p>
        </div>
      </div>
    </footer>
  );
}
