import type { SiteData } from "@/lib/types";

export default function Testimonials({ data }: { data: SiteData }) {
  return (
    <section id="stories" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6B655D]">
          <span className="h-px w-8 bg-[var(--color-accent)]" />
          Client Stories
        </p>
        <h2 className="mb-14 font-serif text-4xl text-[#21201C] sm:text-5xl">
          In their words
        </h2>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 lg:px-12">
        {data.testimonials.map((t, i) => (
          <figure
            key={i}
            className="w-[85%] flex-none snap-start rounded-[2px] border border-[#E4DDD0] bg-[#FBF7F2] p-6 sm:w-[60%] sm:p-10 lg:w-[38%] lg:p-12"
          >
            <span className="font-serif text-6xl leading-none text-[var(--color-accent)]">
              &ldquo;
            </span>
            <blockquote className="mt-2 font-serif text-xl italic leading-snug text-[#21201C] sm:text-2xl">
              {t.quote}
            </blockquote>
            <figcaption className="mt-8 text-xs uppercase tracking-[0.14em] text-[#6B655D]">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
