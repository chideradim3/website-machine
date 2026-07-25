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
          {data.gallery.map((image, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-[2px] bg-[#E9E5DF]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={`${data.name} hair styling work ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
