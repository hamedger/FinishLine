import { BUSINESS } from "@/lib/constants";

export function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-red-dark/30 bg-brand-red p-3 shadow-2xl sm:hidden">
      <div className="flex gap-2">
        <a
          href={BUSINESS.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-base font-bold text-brand-red"
          aria-label={`Call ${BUSINESS.phone}`}
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
          className="flex items-center justify-center rounded-xl border-2 border-white/40 px-4 py-3.5 text-white"
          aria-label="Get directions to Finish Line"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
