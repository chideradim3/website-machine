"use client";

import { useEffect, useState } from "react";
import type { SiteData } from "@/lib/types";

const LINKS = [
  { href: "#treatments", label: "Treatments" },
  { href: "#benefits", label: "Why Us" },
  { href: "#results", label: "Results" },
  { href: "#stories", label: "Stories" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ data }: { data: SiteData }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[#FBF7F2]/95 py-3 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-6 lg:px-12">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          {data.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.logo} alt={data.name} className="h-8 w-auto flex-none" />
          ) : (
            <span
              className={`truncate font-serif text-xl tracking-tight ${
                solid ? "text-[#21201C]" : "text-white"
              }`}
            >
              {data.name}
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-[13px] uppercase tracking-[0.14em] transition-colors ${
                scrolled
                  ? "text-[#4a453e] hover:text-[#21201C]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-2">
          <a
            href="#contact"
            className={`inline-flex max-w-[42vw] truncate whitespace-nowrap rounded-full px-4 py-2.5 text-[11px] uppercase tracking-[0.12em] transition-all duration-300 sm:max-w-none sm:px-6 sm:text-[13px] ${
              solid
                ? "bg-[var(--color-primary)] text-white hover:opacity-90"
                : "border border-white/70 text-white hover:bg-white hover:text-[#21201C]"
            }`}
          >
            {data.contact.ctaText}
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 flex-none items-center justify-center lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-px w-5 transition-all duration-300 ${
                  solid ? "bg-[#21201C]" : "bg-white"
                } ${mobileOpen ? "top-[7px] rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-5 transition-opacity duration-300 ${
                  solid ? "bg-[#21201C]" : "bg-white"
                } ${mobileOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-px w-5 transition-all duration-300 ${
                  solid ? "bg-[#21201C]" : "bg-white"
                } ${mobileOpen ? "top-[7px] -rotate-45" : "top-[14px]"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        className={`grid overflow-hidden bg-[#FBF7F2] transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "grid-rows-[1fr] border-t border-[#E4DDD0]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col divide-y divide-[#E4DDD0] px-6">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-[15px] uppercase tracking-[0.12em] text-[#4a453e]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
