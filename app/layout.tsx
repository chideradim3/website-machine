import type { Metadata } from "next";
import "./globals.css";

// Fonts load in the browser from Google Fonts (like the hair-salon template)
// instead of next/font/google, which downloads them at build time and breaks
// the Cloudflare build when Google returns font URLs it can't parse.
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";

export const metadata: Metadata = {
  title: "Premium Med Spa Websites",
  description: "A JSON-driven generator for premium aesthetic clinic websites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
