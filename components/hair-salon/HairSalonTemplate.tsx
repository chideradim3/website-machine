import type { CSSProperties } from "react";
import type { HairSalonData } from "@/lib/types";
import { buildGoogleFontsUrl } from "@/lib/fonts";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Services from "./Services";
import Stylists from "./Stylists";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HairSalonTemplate({ data }: { data: HairSalonData }) {
  const themeStyle = {
    "--color-primary": data.colors.primary,
    "--color-accent": data.colors.accent,
    "--color-primary-soft": `color-mix(in srgb, ${data.colors.primary} 10%, white)`,
    "--color-accent-soft": `color-mix(in srgb, ${data.colors.accent} 14%, white)`,
    "--font-heading": `'${data.fonts.heading}', serif`,
    "--font-body": `'${data.fonts.body}', sans-serif`,
  } as CSSProperties;

  return (
    <div style={themeStyle} className="bg-white font-[var(--font-body)]">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href={buildGoogleFontsUrl(data.fonts)} />

      <Navbar data={data} />
      <Hero data={data} />
      <Gallery data={data} />
      <Services data={data} />
      <Stylists data={data} />
      <Reviews data={data} />
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}
