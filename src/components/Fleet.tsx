import Image from "next/image";
import Link from "next/link";
import {
  BUSINESS,
  FLEET_FEATURES,
  FLEET_PARTNERS_IMAGE,
  FLEET_PROGRAM_NAMES,
} from "@/lib/constants";
import { FleetForm } from "@/components/ContactForm";

export function Fleet() {
  return (
    <section id="fleet" className="bg-[#F4F6F8] py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[56%_44%] lg:gap-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Fleet Service in Livonia
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#16212B] sm:text-4xl">
              Keep your fleet on the road.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#566270]">
              Reliable maintenance for local businesses and fleet-managed
              vehicles. Cars, pickup trucks, vans and light-duty commercial
              vehicles welcome.
            </p>

            <p className="mt-8 text-sm font-bold text-[#16212B]">
              Fleet Programs We Accept
            </p>
            <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Image
                src={FLEET_PARTNERS_IMAGE}
                alt="Fleet management partners: Enterprise, Holman, Element, Wheels, EMKAY, Voyager, Merchants Fleet, Fleet Response, and Mike Albert"
                width={686}
                height={1107}
                className="mx-auto h-auto w-full max-w-sm"
              />
            </div>
            <div className="mt-3 flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-center shadow-sm">
              <p className="text-base font-bold text-[#16212B]">Fleetio</p>
            </div>
            <p className="mt-3 text-sm text-[#566270]">
              Fleet program not listed? Please call {BUSINESS.phone}.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#566270]">
              Accepted fleet programs: {FLEET_PROGRAM_NAMES.join(", ")}.
            </p>

            <p className="mt-10 text-lg font-bold text-[#16212B]">
              Maintenance that keeps business moving
            </p>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {FLEET_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-[#566270]">
                  <span className="font-bold text-brand-red" aria-hidden="true">
                    +
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={BUSINESS.phoneHref}
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#D2232A] px-6 py-4 text-base font-bold text-white transition hover:opacity-90"
            >
              Call Fleet Service &nbsp;|&nbsp; {BUSINESS.phone}
            </a>

            <Link
              href="/fleet-maintenance-livonia-mi"
              className="mt-4 inline-flex text-sm font-bold text-brand-red transition hover:text-brand-red-dark"
            >
              Learn more about fleet maintenance in Livonia →
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold text-[#16212B]">
              Request a Fleet Quote
            </h3>
            <p className="mt-1 text-sm text-[#566270]">
              Tell us about your vehicles and service needs.
            </p>
            <FleetForm />

            <p className="mt-4 text-center text-sm">
              <a href={BUSINESS.phoneHref} className="font-semibold text-brand-red">
                Or call {BUSINESS.phone}
              </a>
            </p>

            <div className="mt-6 border-t border-slate-100 pt-6">
              <p className="text-sm font-semibold text-[#16212B]">
                Questions about coverage or billing?
              </p>
              <p className="mt-1 text-sm text-[#566270]">
                Our team can help you confirm the next step.
              </p>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-6 text-sm text-[#566270]">
              <p className="font-semibold text-[#16212B]">{BUSINESS.name}</p>
              <p>{BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
