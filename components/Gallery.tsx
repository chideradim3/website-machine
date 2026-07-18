import type { SiteData } from "@/lib/types";

export default function Gallery({ data }: { data: SiteData }) {
  return (
    <section id="results" className="bg-[#FBF7F2] py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6B655D]">
          <span className="h-px w-8 bg-[var(--color-accent)]" />
          Real Results
        </p>
        <h2 className="font-serif text-4xl text-[#21201C] sm:text-5xl">
          Before &amp; After
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.beforeAfterImages.map((image, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2px] bg-[#E4DDD0]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={`Before and after result ${i + 1}`}
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-0 items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-5 py-4 opacity-100 transition-all duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                <span className="text-xs uppercase tracking-[0.14em] text-white/90">
                  Before
                </span>
                <span className="h-px w-6 bg-white/40" />
                <span className="text-xs uppercase tracking-[0.14em] text-white/90">
                  After
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
