"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS, NAV_LINKS, FLEET_PARTNERS } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);
  const [mobileFleetOpen, setMobileFleetOpen] = useState(false);
  const fleetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (fleetRef.current && !fleetRef.current.contains(event.target as Node)) {
        setFleetOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="checker-bg h-1 w-full" aria-hidden="true" />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={BUSINESS.logoSrc}
            alt={`${BUSINESS.name} logo`}
            width={1024}
            height={645}
            className="h-12 w-auto sm:h-16 md:h-20"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) =>
            link.label === "Fleet" ? (
              <div key={link.href} className="relative" ref={fleetRef}>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-brand-navy"
                  aria-expanded={fleetOpen}
                  aria-haspopup="true"
                  onClick={() => setFleetOpen(!fleetOpen)}
                >
                  Fleet
                  <ChevronIcon className={`h-4 w-4 transition ${fleetOpen ? "rotate-180" : ""}`} />
                </button>
                {fleetOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                    <a
                      href="#fleet"
                      className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-red"
                      onClick={() => setFleetOpen(false)}
                    >
                      Fleet Management
                    </a>
                    <div className="my-1 border-t border-slate-100" />
                    <p className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Fleet Support
                    </p>
                    <div className="max-h-64 overflow-y-auto">
                      {FLEET_PARTNERS.map((partner) => (
                      <a
                        key={partner.name}
                        href={partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-red"
                        onClick={() => setFleetOpen(false)}
                      >
                        {partner.name}
                      </a>
                    ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-brand-navy"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-red hover:text-brand-red sm:inline-flex"
          >
            Directions
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-brand-red-dark"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{BUSINESS.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-brand-navy hover:bg-slate-100 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.label === "Fleet" ? (
                <div key={link.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    aria-expanded={mobileFleetOpen}
                    onClick={() => setMobileFleetOpen(!mobileFleetOpen)}
                  >
                    Fleet
                    <ChevronIcon className={`h-4 w-4 transition ${mobileFleetOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileFleetOpen && (
                    <div className="ml-3 border-l border-slate-200 pl-3">
                      <a
                        href="#fleet"
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                        onClick={() => {
                          setOpen(false);
                          setMobileFleetOpen(false);
                        }}
                      >
                        Fleet Management
                      </a>
                      <p className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Fleet Support
                      </p>
                      {FLEET_PARTNERS.map((partner) => (
                        <a
                          key={partner.name}
                          href={partner.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                          onClick={() => setOpen(false)}
                        >
                          {partner.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-red"
            >
              Get Directions
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
