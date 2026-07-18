import Link from "next/link";
import { getAllSites } from "@/lib/site-data";

export default function HomePage() {
  const sites = getAllSites();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-50 px-6 py-24">
      <div className="w-full max-w-xl text-center">
        <p className="text-xs uppercase tracking-widest2 text-stone-500">
          Website Generator
        </p>
        <h1 className="mt-4 font-serif text-4xl text-stone-900">
          Generated Med Spa Sites
        </h1>
        <p className="mt-3 text-sm text-stone-500">
          Each site below is rendered entirely from its own JSON file in{" "}
          <code className="rounded bg-stone-200 px-1.5 py-0.5">/data</code>.
        </p>

        <ul className="mt-10 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white text-left shadow-sm">
          {sites.map(({ slug, data }) => (
            <li key={slug}>
              <Link
                href={`/${slug}`}
                className="flex items-center justify-between px-6 py-5 transition-colors hover:bg-stone-50"
              >
                <span>
                  <span className="block font-serif text-lg text-stone-900">
                    {data.name}
                  </span>
                  <span className="block text-sm text-stone-500">
                    /{slug}
                  </span>
                </span>
                <span className="text-stone-400">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
