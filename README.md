# Zokix — AI-Powered Creative Tech Studio

A black & pearl-white marketing site inspired by the Vengence UI aesthetic:
pure black canvas, thin hairline grid borders, 3D keycap tiles and metallic
pearl typography.

## Pages

- `/` — Home: hero, Services (keycap grid: Video Generation, Post Generation,
  Web Design Generator, Logo & Brand Design), Why Zokix, portfolio teaser,
  contact.
- `/portfolio` — Abdullah's design portfolio: hero, stats, about, skills,
  selected work, services, testimonials, hire CTA.

## Tech stack

Next.js 15 · TypeScript · Tailwind CSS v4 · Motion (Framer Motion) ·
Orbitron + Space Grotesk (self-hosted via Fontsource).

## Run it

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

## Swapping in the real brand assets

The logo mark is currently an SVG recreation (`components/ZokixMark.tsx`) and
the wordmark is styled text. To use the original PNG assets:

1. Drop the files into `public/brand/` (e.g. `logo.png`, `icon.png`,
   `wordmark.png`, `banner.png`).
2. Replace `<ZokixMark />` usages (navbar, hero, footer) with
   `<Image src="/brand/logo.png" ... />` from `next/image`.
3. Replace the `ZOKIX` hero heading with the wordmark image if preferred.

Portfolio work tiles are placeholders — add real images under `public/work/`
and swap the tiles in `app/portfolio/page.tsx` (`works` array).
