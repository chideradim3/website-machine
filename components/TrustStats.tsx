import type { SiteData } from "@/lib/types";

export default function TrustStats({ data }: { data: SiteData }) {
  return (
    <section className="border-b border-[#E4DDD0] bg-[#FBF7F2]">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 divide-y divide-[#E4DDD0] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {data.stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 py-8 text-center first:pt-0 sm:py-0 sm:first:pl-0 sm:px-8"
            >
              <span className="font-serif text-4xl text-[#21201C] sm:text-5xl lg:text-6xl">
                {stat.number}
              </span>
              <span className="text-xs uppercase tracking-[0.16em] text-[#6B655D]">
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
