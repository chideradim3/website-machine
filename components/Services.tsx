import type { SiteData } from "@/lib/types";

export default function Services({ data }: { data: SiteData }) {
  return (
    <section id="treatments" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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

        <div className="divide-y divide-[#E4DDD0] border-t border-[#E4DDD0]">
          {data.services.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={i}
                className={`flex flex-col items-center gap-10 py-12 lg:gap-16 lg:py-16 ${
                  reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[2px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <span className="font-serif text-sm text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl text-[#21201C]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#6B655D]">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-[#21201C] underline decoration-[#21201C]/20 underline-offset-8 transition-colors hover:decoration-[#21201C]"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
