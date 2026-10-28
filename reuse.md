# Reuse Guide: Building Website Templates for Any Niche

This project is a **website machine**: one Next.js codebase that turns a JSON file into a full website. Each client's site is just a data file plus images. Each **niche** (med spa, hair salon, and next HVAC, plumbing, roofing, etc.) is a **template**: a set of React components that knows how to render that niche's JSON.

- Add a **new client** to an existing niche: write one JSON file. No code.
- Add a **new niche** (e.g. HVAC): build one template folder once, then every HVAC client after that is just a JSON file.

---

## 1. How it works

```
data/<slug>.json            → one file per client site (filename = URL)
public/images/<slug>/       → that client's images (owner photo, etc.)
public/images/shared/       → stock photos/video reused by many sites
lib/types.ts                → TypeScript shape of each niche's JSON
lib/site-data.ts            → reads every JSON file in /data
lib/fonts.ts                → builds the Google Fonts URL from JSON "fonts"
app/[slug]/page.tsx         → the router: picks a template by "type"
components/                 → med spa template (the original)
components/hair-salon/      → hair salon template
```

**Flow:** `data/studio-sl.json` → `app/[slug]/page.tsx` reads it, sees `"type": "hairsalon"` → renders `components/hair-salon/HairSalonTemplate.tsx` → page is live at `/studio-sl`.

**Branding without code:** every template sets CSS variables from the JSON, and components use them instead of hard-coded colors:

| JSON field          | CSS variable            | Used for                          |
| ------------------- | ----------------------- | --------------------------------- |
| `colors.primary`    | `--color-primary`       | buttons, dark sections, footer    |
| `colors.accent`     | `--color-accent`        | lines, highlights, small details  |
| (auto-generated)    | `--color-primary-soft`  | light tinted backgrounds          |
| (auto-generated)    | `--color-accent-soft`   | light tinted backgrounds          |
| `fonts.heading`     | `--font-heading`        | all headings (any Google Font)    |
| `fonts.body`        | `--font-body`           | body text (any Google Font)       |

In components: `bg-[var(--color-primary)]`, `font-[var(--font-heading)]`, etc.

The site is a **static export** (`output: "export"` in `next.config.js`), so `npm run build` produces plain HTML in `out/` that can be hosted anywhere.

---

## 2. Adding a new niche (example: HVAC)

### Step 1: Decide the sections

Write down what an HVAC customer needs to see, top to bottom. Example:

1. **Navbar**: logo/name, phone number (click-to-call), "Get a Quote" button
2. **Hero**: headline, subtitle, background image, two CTAs ("Call Now" + "Book Service")
3. **Trust bar**: "Licensed & Insured", "24/7 Emergency", "Same-Day Service", years in business
4. **Services**: AC Repair, Furnace Repair, Installation, Maintenance Plans, Duct Cleaning (card grid with icon/image + short description)
5. **Why choose us**: 3–4 benefit points
6. **Service areas**: list of cities/zip codes served
7. **Financing / maintenance plan** (optional promo block)
8. **Reviews**: Google-style review cards (can copy `components/hair-salon/Reviews.tsx`)
9. **FAQ**: accordion (can copy `components/FAQAccordion.tsx`)
10. **Contact**: phone, email, address, hours, quote form or booking link
11. **Footer**

### Step 2: Define the JSON shape in `lib/types.ts`

Add a new interface with a unique `type`, then add it to the `AnySiteData` union:

```ts
export interface HvacData {
  type: "hvac";
  name: string;
  tagline: string;
  description: string;
  logo: string;
  phone: string;               // shown in navbar + hero, used for tel: links
  bookingUrl: string;
  fonts: { heading: string; body: string };
  colors: { primary: string; accent: string };
  hero: { title: string; subtitle: string; heroImage: string; ctaText: string };
  trustBadges: string[];       // "Licensed & Insured", "24/7 Emergency"...
  services: { title: string; description: string; image: string }[];
  benefits: string[];
  serviceAreas: string[];
  financing?: { title: string; text: string };
  reviews: Review[];
  faq: FAQItem[];
  contact: { phone: string; email: string; address: string; hours: SalonHours[] };
}

export type AnySiteData = SiteData | HairSalonData | HvacData;
```

Reuse existing types where they fit (`Review`, `FAQItem`, `SalonHours`).

### Step 3: Build the template folder `components/hvac/`

Copy the structure of `components/hair-salon/`:

```
components/hvac/
  HvacTemplate.tsx   ← sets CSS variables + loads fonts, renders sections in order
  Navbar.tsx
  Hero.tsx
  TrustBar.tsx
  Services.tsx
  Benefits.tsx
  ServiceAreas.tsx
  Reviews.tsx        ← copy from hair-salon, change the prop type
  FAQ.tsx            ← copy from components/FAQAccordion.tsx
  Contact.tsx
  Footer.tsx
```

`HvacTemplate.tsx` should start as a copy of `components/hair-salon/HairSalonTemplate.tsx` (keep the `themeStyle` block and the Google Fonts `<link>` tags exactly), then swap in the HVAC sections.

Rules for the components:
- Every color comes from `var(--color-primary)` / `var(--color-accent)`, never a hard-coded brand color.
- Every heading uses `font-[var(--font-heading)]`.
- Every piece of text comes from `data`, nothing client-specific hard-coded.
- Hide a section when its data is empty (`if (!data.faq?.length) return null;`) so optional sections are truly optional.
- Mobile first: test at phone width.

### Step 4: Register it in the router `app/[slug]/page.tsx`

```tsx
import HvacTemplate from "@/components/hvac/HvacTemplate";
// ...
if (data.type === "hvac") {
  return <HvacTemplate data={data} />;
}
```

### Step 5: Add shared stock assets

Put niche stock images in `public/images/shared/` with an `hvac-` prefix (e.g. `hvac-hero.jpg`, `hvac-ac-repair.jpg`, `hvac-furnace.jpg`). Every HVAC client can point at these until they send real photos.

If a component uses `<picture>` with a `.webp` source (like the hair-salon `Gallery.tsx`), **every `.jpg` needs a matching `.webp`** or the image shows broken.

### Step 6: Create a sample site

Add `data/sample-hvac.json` with `"type": "hvac"`, fill every field, run it, and polish the design until it looks premium. This becomes the file you copy for every future HVAC client.

---

## 3. Adding a new client to an existing niche (the fast path)

1. **Copy** the closest existing JSON, e.g. `data/roots-and-boots-salon.json` → `data/<new-slug>.json`. The slug is lowercase-with-dashes, and becomes the URL.
2. **Brand it** from the client's flyer/logo:
   - `colors.primary`: a dark color (buttons, dark sections). `colors.accent`: the brand pop color.
   - `fonts.heading` / `fonts.body`: any Google Font names, matched to the flyer's style.
   - `name`, `tagline`, `hero.title`, `hero.subtitle`, `description`: in the client's voice.
3. **Real details first**: copy phone, address, prices and services exactly from the flyer. Use placeholders for anything missing.
4. **Booking link** (`bookingUrl`) can be:
   - a booking site: `https://...`
   - text message: `sms:+18324133753`
   - phone call: `tel:+61248722878`
   - WhatsApp: `https://wa.me/17875074267`
5. **Images**:
   - Owner photo → `public/images/<slug>/owner.jpg`, cropped square (it shows in a circle).
   - No photo → copy a placeholder SVG (e.g. `public/images/underground/stylist-owner.svg`) and change its two colors.
   - Gallery/hero → use the shared photos unless the client sends good, sharp ones.
   - Client's own work photos (e.g. braids, where the shared hair photos don't fit) → save them in `public/images/<slug>/` with a `.webp` copy each, point `gallery` at them, set `hero.heroImage` to one of them and **leave out `hero.heroVideo`** so the hero shows the still image instead of the shared video. See `data/braided-by-nai.json`.
6. **Preview**: restart the dev server (see gotchas), open `http://localhost:3000/<slug>`.
7. **Commit and push**: `git add data/<slug>.json public/images/<slug>` → commit → `git push origin master`.

---

## 4. Gotchas

- **New page shows 404 / 500 locally:** the dev server only knows the pages that existed when it started (static export). Stop it and run `npm run dev` again. Make sure no old server is still running on port 3000. If the new one says "trying 3001 instead", the old one is still alive and must be killed.
- **Broken gallery image:** missing `.webp` copy of a `.jpg`.
- **Sample reviews:** placeholder reviews are written by us. Replace them with the client's real Google reviews before the site goes live.
- **Trademarks:** don't copy other brands' logos or names from a client's flyer (e.g. Chanel). Only carry over colors and style.
- **Language:** the client content can be in any language (see `data/evara-by-desiree.json`, Spanish), but each template's built-in labels ("Gallery", "Book Now") are hard-coded English unless you make them JSON fields.
- **Logo images** show small (32px tall) in the navbar. Use a transparent PNG/SVG, or leave `logo` empty to show the name as text.

---

## 5. Checklist: new niche

- [ ] Sections listed, top to bottom
- [ ] Interface added to `lib/types.ts` + `AnySiteData` union
- [ ] `components/<niche>/` folder with a `<Niche>Template.tsx` that sets CSS variables and loads fonts
- [ ] No hard-coded brand colors, fonts or client text in components
- [ ] Router branch added in `app/[slug]/page.tsx`
- [ ] Shared stock images in `public/images/shared/` (with `.webp` copies if needed)
- [ ] Sample JSON in `data/` that renders cleanly on desktop and phone
- [ ] `npm run build` passes
