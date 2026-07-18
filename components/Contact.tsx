import type { SiteData } from "@/lib/types";

export default function Contact({ data }: { data: SiteData }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--color-primary)] py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
              <span className="h-px w-8 bg-[var(--color-accent)]" />
              Reserve Your Visit
            </p>
            <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
              Begin your {data.name} experience.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
              Consultations are complimentary and unhurried &mdash; we take
              the time to understand your goals before recommending a single
              treatment.
            </p>
            <a
              href={`tel:${data.contact.phone.replace(/[^\d+]/g, "")}`}
              className="mt-10 inline-flex rounded-full bg-white px-8 py-3.5 text-[13px] uppercase tracking-[0.14em] text-[#21201C] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {data.contact.ctaText}
            </a>
          </div>

          <dl className="grid grid-cols-1 gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 lg:border-t-0 lg:pt-0">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-white/50">
                Phone
              </dt>
              <dd className="mt-2 font-serif text-xl">
                <a href={`tel:${data.contact.phone.replace(/[^\d+]/g, "")}`}>
                  {data.contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-white/50">
                Email
              </dt>
              <dd className="mt-2 font-serif text-xl break-words">
                <a href={`mailto:${data.contact.email}`}>
                  {data.contact.email}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs uppercase tracking-[0.14em] text-white/50">
                Address
              </dt>
              <dd className="mt-2 font-serif text-xl">
                {data.contact.address}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
