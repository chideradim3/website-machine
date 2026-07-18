import type { SiteData } from "@/lib/types";

export default function Footer({ data }: { data: SiteData }) {
  return (
    <footer className="bg-[#21201C] py-14 text-white/60">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left lg:px-12">
        <div>
          <span className="font-serif text-2xl text-white">{data.name}</span>
          <p className="mt-2 max-w-sm text-sm leading-relaxed">
            {data.tagline}
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 text-sm lg:items-end">
          <span>{data.contact.address}</span>
          <span>
            {data.contact.phone} &middot; {data.contact.email}
          </span>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-content border-t border-white/10 px-6 pt-6 text-center text-xs uppercase tracking-[0.14em] text-white/30 lg:px-12 lg:text-left">
        &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
      </div>
    </footer>
  );
}
