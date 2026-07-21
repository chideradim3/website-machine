import type { SiteData } from "@/lib/types";

export default function Services({ data }: { data: SiteData }) {
  return (
    <section id="treatments" className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-20">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6B655D]">
              <span className="h-px w-8 bg-[var(--color-accent)]" />
              The Menu
            </p>
            <h2 className="font-serif text-4xl text-[#21201C] sm:text-5xl">
              Signature Treatments
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#6B655D]">
            Each protocol is tailored chairside and performed only by
            licensed, extensively trained clinicians.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service, i) => (
            <div
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4DDD0] bg-[#FEFDFB] transition-shadow duration-300 hover:shadow-xl hover:shadow-[#21201C]/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {service.offer && (
                  <span className="absolute right-4 top-4 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-[var(--color-primary)] shadow-sm">
                    {service.offer}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-4 p-7">
                <div>
                  <h3 className="font-serif text-2xl text-[#21201C]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#6B655D]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto flex gap-3 pt-2">
                  <a
                    href="#faq"
                    className="flex-1 rounded-full border border-[var(--color-primary)] px-4 py-2.5 text-center text-[11px] uppercase tracking-[0.1em] text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary-soft)]"
                  >
                    Learn More
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 rounded-full bg-[var(--color-primary)] px-4 py-2.5 text-center text-[11px] uppercase tracking-[0.1em] text-white transition-opacity duration-300 hover:opacity-90"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
