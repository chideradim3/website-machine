import type { SiteData } from "@/lib/types";

export default function Hero({ data }: { data: SiteData }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#21201C]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={data.hero.image}
        alt={data.hero.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-16 pt-28 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="max-w-2xl animate-fadeUp">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
            <span className="h-px w-8 bg-[var(--color-accent)]" />
            {data.tagline}
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl">
            {data.hero.title}
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/75 sm:text-base">
            {data.hero.subtitle}
          </p>
          <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-white/60 sm:text-base">
            {data.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="rounded-full bg-[var(--color-primary)] px-8 py-3.5 text-[13px] uppercase tracking-[0.14em] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              {data.hero.ctaText}
            </a>
            <a
              href="#treatments"
              className="text-[13px] uppercase tracking-[0.14em] text-white/80 underline decoration-white/30 underline-offset-8 transition-colors hover:text-white"
            >
              Explore Treatments
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
