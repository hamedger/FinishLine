import { TIPS } from "@/lib/constants";

export function Tips() {
  return (
    <section id="tips" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Tips from Finish Line
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Car Care Made Simple
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Practical advice from our team to help you drive smarter and save on
            repairs down the road.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TIPS.map((tip, index) => (
            <article
              key={tip.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-brand-red/30 hover:shadow-md"
            >
              <span className="inline-flex w-fit rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-red">
                {tip.category}
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug text-brand-navy">
                {tip.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {tip.excerpt}
              </p>
              <p className="mt-4 text-xs font-medium text-slate-400">
                Tip #{index + 1} · Finish Line Oil Change &amp; Repair
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
