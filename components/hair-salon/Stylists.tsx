import type { HairSalonData } from "@/lib/types";

export default function Stylists({ data }: { data: HairSalonData }) {
  if (!data.stylists || data.stylists.length === 0) return null;

  return (
    <section id="stylists" className="bg-[#FAF8F5] py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">
          <span className="h-px w-8 bg-[var(--color-accent)]" />
          Meet The Owner
        </p>
        <h2 className="mb-14 font-[var(--font-heading)] text-4xl text-[#1A1A1A] sm:text-5xl lg:mb-16">
          Your Stylist
        </h2>

        <div className="flex flex-col items-center text-center">
          {data.stylists.map((stylist, i) => {
            const honorifics = ["mr.", "mrs.", "ms.", "mx.", "dr."];
            const firstName =
              stylist.name.split(" ").find((part) => !honorifics.includes(part.toLowerCase())) ||
              stylist.name;
            return (
            <div key={i} className="flex max-w-sm flex-col items-center">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-[#E9E5DF] sm:h-48 sm:w-48">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stylist.photo}
                  alt={stylist.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 font-[var(--font-heading)] text-3xl text-[#1A1A1A]">
                {stylist.name}
              </h3>
              {stylist.title && (
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {stylist.title}
                </p>
              )}
              <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-[#6b6b6b]">
                {stylist.bio}
              </p>
              <a
                href={stylist.bookingUrl || data.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-full border border-[var(--color-primary)] px-6 py-2.5 text-[11px] uppercase tracking-[0.12em] text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary-soft)]"
              >
                Book with {firstName}
              </a>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
