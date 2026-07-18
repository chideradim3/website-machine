import fs from "fs";
import path from "path";
import type { SiteData } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(DATA_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(/\.json$/, ""));
}

export function getSiteData(slug: string): SiteData | null {
  const filePath = path.join(DATA_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as SiteData;
}

export function getAllSites(): { slug: string; data: SiteData }[] {
  return getAllSlugs().map((slug) => ({ slug, data: getSiteData(slug)! }));
}
