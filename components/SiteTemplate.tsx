import type { CSSProperties } from "react";
import type { SiteData } from "@/lib/types";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TrustStats from "./TrustStats";
import Services from "./Services";
import Benefits from "./Benefits";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Reviews from "./Reviews";
import FAQAccordion from "./FAQAccordion";
import Contact from "./Contact";
import Footer from "./Footer";

export default function SiteTemplate({ data }: { data: SiteData }) {
  const themeStyle = {
    "--color-primary": data.colors.primary,
    "--color-accent": data.colors.accent,
    "--color-primary-soft": `color-mix(in srgb, ${data.colors.primary} 10%, white)`,
    "--color-accent-soft": `color-mix(in srgb, ${data.colors.accent} 14%, white)`,
  } as CSSProperties;

  return (
    <div style={themeStyle} className="bg-white">
      <Navbar data={data} />
      <Hero data={data} />
      <TrustStats data={data} />
      <Services data={data} />
      <Benefits data={data} />
      <Gallery data={data} />
      <Testimonials data={data} />
      <Reviews data={data} />
      <FAQAccordion data={data} />
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}
