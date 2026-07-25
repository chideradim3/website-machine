import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getSiteData } from "@/lib/site-data";
import SiteTemplate from "@/components/SiteTemplate";
import HairSalonTemplate from "@/components/hair-salon/HairSalonTemplate";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const data = getSiteData(params.slug);
  if (!data) return {};
  return {
    title: `${data.name} | ${data.tagline}`,
    description: data.description,
  };
}

export default function SitePage({ params }: { params: { slug: string } }) {
  const data = getSiteData(params.slug);
  if (!data) notFound();

  if (data.type === "hairsalon") {
    return <HairSalonTemplate data={data} />;
  }

  return <SiteTemplate data={data} />;
}
