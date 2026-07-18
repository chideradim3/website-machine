import type { SiteData } from "@/lib/types";

export default function Benefits({ data }: { data: SiteData }) {
  return (
    <section id="benefits" className="bg-[#21201C] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-8 bg-[var(--color-accent)]" />
              Why {data.name}
            </p>
            <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
              Care built around precision, not upsell.
            </h2>
          </div>

          <ul className="divide-y divide-white/10 border-t border-white/10">
            {data.benefits.map((benefit, i) => (
              <li
                key={i}
                className="flex items-start gap-6 py-6 first:pt-0"
              >
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent)]" />
                <span className="text-lg leading-relaxed text-white/85 sm:text-xl">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
