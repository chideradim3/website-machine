import type { HairSalonData } from "@/lib/types";

export default function Gallery({ data }: { data: HairSalonData }) {
  if (!data.gallery || data.gallery.length === 0) return null;

  return (
    <section id="gallery" className="bg-[#FAF8F5] py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">
          <span className="h-px w-8 bg-[var(--color-accent)]" />
          Our Work
        </p>
        <h2 className="font-[var(--font-heading)] text-4xl text-[#1A1A1A] sm:text-5xl">
          Gallery
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {data.gallery.map((item, i) => {
            const hasWebp = /\.(jpe?g|png)$/i.test(item.image);
            const webpSrc = item.image.replace(/\.(jpe?g|png)$/i, ".webp");
            return (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-[2px] bg-[#E9E5DF]"
              >
                <picture>
                  {hasWebp && <source srcSet={webpSrc} type="image/webp" />}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={`${item.label} — ${data.name} hair styling work`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </picture>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 font-[var(--font-heading)] text-lg text-white drop-shadow-sm sm:text-xl">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
