import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-slate-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <figure className="mx-3 w-[320px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:w-[380px]">
      <StarRating rating={testimonial.rating} />
      <blockquote className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-slate-400">{testimonial.location}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="overflow-hidden bg-brand-navy py-16 sm:py-20" aria-label="Customer testimonials">
      <div className="checker-bg mb-8 h-1.5 w-full opacity-80" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
          What Our Customers Say
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
          Trusted by Livonia Drivers
        </h2>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-navy to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-navy to-transparent sm:w-32" />

        <div className="flex animate-marquee">
          {doubled.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
