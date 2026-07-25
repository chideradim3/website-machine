import type { HairSalonData } from "@/lib/types";

export default function Stylists({ data }: { data: HairSalonData }) {
  if (!data.stylists || data.stylists.length === 0) return null;

  return (
    <section id="stylists" className="bg-[#FAF8F5] py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">
          <span className="h-px w-8 bg-[var(--color-accent)]" />
          Meet The Team
        </p>
        <h2 className="mb-14 font-[var(--font-heading)] text-4xl text-[#1A1A1A] sm:text-5xl lg:mb-16">
          Our Stylists
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.stylists.map((stylist, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="h-32 w-32 overflow-hidden rounded-full bg-[#E9E5DF] sm:h-40 sm:w-40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stylist.photo}
                  alt={stylist.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 font-[var(--font-heading)] text-2xl text-[#1A1A1A]">
                {stylist.name}
              </h3>
              <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-[#6b6b6b]">
                {stylist.bio}
              </p>
              <a
                href={stylist.bookingUrl || data.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 rounded-full border border-[var(--color-primary)] px-6 py-2.5 text-[11px] uppercase tracking-[0.12em] text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary-soft)]"
              >
                Book with {stylist.name.split(" ")[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
