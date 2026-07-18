"use client";

import { useState } from "react";
import type { SiteData } from "@/lib/types";

export default function FAQAccordion({ data }: { data: SiteData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#FBF7F2] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6B655D]">
          <span className="h-px w-8 bg-[var(--color-accent)]" />
          Good to Know
        </p>
        <h2 className="mb-12 font-serif text-4xl text-[#21201C] sm:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-[#E4DDD0] border-y border-[#E4DDD0]">
          {data.faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-lg text-[#21201C] sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    className={`relative flex h-6 w-6 flex-none items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <span className="absolute h-px w-4 bg-[#21201C]" />
                    <span className="absolute h-4 w-px bg-[#21201C]" />
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-[#6B655D]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
