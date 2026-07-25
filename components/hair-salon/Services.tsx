import type { HairSalonData } from "@/lib/types";

export default function Services({ data }: { data: HairSalonData }) {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">
          <span className="h-px w-8 bg-[var(--color-accent)]" />
          Price List
        </p>
        <h2 className="mb-14 font-[var(--font-heading)] text-4xl text-[#1A1A1A] sm:text-5xl lg:mb-16">
          Services
        </h2>

        <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-2">
          {data.serviceCategories.map((category, i) => (
            <div key={i}>
              <h3 className="font-[var(--font-heading)] text-2xl text-[var(--color-primary)]">
                {category.category}
              </h3>
              <ul className="mt-5 flex flex-col divide-y divide-[#E9E5DF]">
                {category.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-baseline justify-between gap-4 py-3.5 text-[15px]"
                  >
                    <span className="text-[#3a3a3a]">{item.name}</span>
                    <span className="flex-1 border-b border-dotted border-[#D8D3CB]" />
                    <span className="flex-none font-[var(--font-heading)] text-[#1A1A1A]">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
