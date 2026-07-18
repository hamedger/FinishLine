import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Contact Us
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Visit Us in Livonia
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              {BUSINESS.walkInNote}
            </p>

            <dl className="mt-8 space-y-5">
              <ContactItem
                icon="location"
                label="Address"
                value={BUSINESS.address.full}
                href={BUSINESS.mapsUrl}
              />
              <ContactItem
                icon="phone"
                label="Phone"
                value={BUSINESS.phone}
                href={BUSINESS.phoneHref}
              />
              <ContactItem
                icon="email"
                label="Email"
                value={BUSINESS.email}
                href={`mailto:${BUSINESS.email}`}
              />
            </dl>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-bold text-white">Store Hours</h3>
              <ul className="mt-4 space-y-2">
                {BUSINESS.hours.map(({ day, hours }) => (
                  <li
                    key={day}
                    className="flex justify-between text-sm text-slate-300"
                  >
                    <span className={hours === "CLOSED" ? "text-slate-500" : ""}>
                      {day}
                    </span>
                    <span
                      className={`font-medium ${hours === "CLOSED" ? "text-slate-500" : "text-white"}`}
                    >
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-brand-red-dark"
              >
                Call Now
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Get Directions
              </a>
              <a
                href={BUSINESS.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Review on Google
              </a>
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/shop/shop-storefront-signage.jpg"
                alt="Finish Line Oil Change and Repair storefront signage in Livonia, MI"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl shadow-xl">
              <iframe
                title="Finish Line Oil Change and Repair location map"
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            <div className="mt-6 rounded-2xl bg-white p-6 shadow-xl">
              <h3 className="text-lg font-bold text-brand-navy">Send Us a Message</h3>
              <p className="mt-1 text-sm text-slate-600">
                Questions about services or hours? We&apos;ll respond as soon as we can.
              </p>
              <ContactForm formType="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: "location" | "phone" | "email";
  label: string;
  value: string;
  href: string;
}) {
  const icons = {
    location: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    ),
    phone: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
    email: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  };

  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/20 text-brand-red">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {icons[icon]}
        </svg>
      </div>
      <div>
        <dt className="text-xs font-bold uppercase tracking-wide text-slate-400">
          {label}
        </dt>
        <dd className="mt-0.5">
          <a
            href={href}
            target={icon === "location" ? "_blank" : undefined}
            rel={icon === "location" ? "noopener noreferrer" : undefined}
            className="font-medium text-white transition hover:text-brand-red"
          >
            {value}
          </a>
        </dd>
      </div>
    </div>
  );
}
