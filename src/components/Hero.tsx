import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0">
        <Image
          src="/shop/shop-hero-bay-wide.jpg"
          alt="Inside the Finish Line Oil Change and Repair service bays in Livonia, MI"
          fill
          className="object-cover object-right opacity-50 sm:opacity-55 lg:object-[center_25%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-brand-navy/25" />
      </div>

      <div className="checker-bg absolute bottom-0 left-0 right-0 h-2 opacity-90" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-2xl animate-fade-up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Walk-In Welcome — No Appointment Needed
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {BUSINESS.seoH1}
          </h1>

          <p className="mt-4 text-xl font-semibold leading-relaxed text-white/95 sm:text-2xl">
            {BUSINESS.tagline}
          </p>

          <p className="mt-5 text-lg font-semibold leading-relaxed text-white sm:text-xl">
            {BUSINESS.heroServices}
          </p>

          <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
            {BUSINESS.heroTrust}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-brand-red-dark"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {[
              { value: "Walk-In", label: "No appointment" },
              { value: "Local", label: "Family owned" },
              { value: "Trusted", label: "Livonia, MI" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
                <p className="text-xs text-slate-300 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
