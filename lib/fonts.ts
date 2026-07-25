export function buildGoogleFontsUrl(fonts: { heading: string; body: string }): string {
  const toParam = (family: string, weights: string) => {
    const safe = family.trim().replace(/[^A-Za-z0-9 ]/g, "");
    const encoded = encodeURIComponent(safe).replace(/%20/g, "+");
    return `family=${encoded}:wght@${weights}`;
  };

  const heading = toParam(fonts.heading, "400;500;600;700");
  const body = toParam(fonts.body, "300;400;500;600");
  return `https://fonts.googleapis.com/css2?${heading}&${body}&display=swap`;
}
