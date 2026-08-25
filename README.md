# Mother Teresa Nursing & Paramedical Institute — Website

A modern, animated, fully responsive website built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide icons**, for Mother Teresa Nursing & Paramedical Institute, Jaipur.

All text content is sourced strictly from the institute's official brochure. Nothing (fees, duration, eligibility, seats, statistics) has been invented — anything not present in the brochure is marked `[Information to be updated]`.

---

## 1. Install dependencies

```bash
npm install
```

## 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 3. Production build

```bash
npm run build
npm run start
```

> **Note:** The build fetches Space Grotesk, Inter and IBM Plex Mono from Google Fonts via `next/font/google`. This requires normal internet access at build time (any laptop or CI runner will have this). It will fail only in network-locked sandboxes.

## 4. Deployment

This repo auto-deploys to **GitHub Pages** via GitHub Actions (see `.github/workflows/deploy.yml`) on every push to `main`.

Live URL: **https://mtpharmacy22-ux.github.io/mtnpi-website/**

Under the hood, `next.config.mjs` builds a static export (`output: "export"`) with a `/mtnpi-website` base path when `GITHUB_PAGES=true`, and `src/lib/asset.ts` prefixes every image URL with that base path so images resolve correctly once the site is served from a GitHub Pages project subpath.

---

## Project structure

```
mtnpi/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── logo/
│       ├── hero/
│       ├── campus/
│       ├── labs/
│       ├── students/
│       ├── gallery/
│       ├── director/
│       ├── achievers/
│       ├── library/
│       ├── transport/
│       └── hospital/
├── src/
│   ├── app/
│   │   ├── layout.tsx        → fonts, global SEO metadata
│   │   ├── page.tsx           → assembles all homepage sections
│   │   ├── globals.css        → design tokens / utility classes
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/             Navbar.tsx, Footer.tsx
│   │   ├── sections/           Hero, TrustStrip, About, DirectorMessage,
│   │   │                       MissionVision, Courses, ParentalHospital,
│   │   │                       Labs, AcademicExcellence, Library,
│   │   │                       Transport, Achievers, CampusLife, Gallery,
│   │   │                       AdmissionsCTA, EnquiryForm, Contact
│   │   └── ui/                 Icon.tsx, ImageSlot.tsx, Reveal.tsx,
│   │                           VitalsDivider.tsx (signature animated divider)
│   ├── data/
│   │   └── site-content.ts     ← single source of truth for all copy/data
│   └── lib/
│       └── asset.ts            ← GitHub Pages base-path helper for images
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

To edit any text on the site (courses, achievers, contact details, lab descriptions, etc.), edit **`src/data/site-content.ts`** — nothing else needs to change.

---

## Design system

- **Colors:** deep forest green (`forest-700` `#123B31`), fresh green (`sage-500` `#3A7D5C`), warm cream background (`cream-100` `#FAF6EC`), light blue section tint (`skyline-200` `#E7F1F3`), soft gold accent (`gold-500` `#C99A3E`) — all taken from the brochure's own palette.
- **Type:** Space Grotesk (headings), Inter (body), IBM Plex Mono (labels/eyebrows/data).
- **Signature element:** a thin gold "vitals line" (heartbeat-monitor motif) used as a section divider — a nod to clinical monitoring that ties back to the nursing subject matter, used sparingly.
- **Motion:** scroll-triggered fade-ups, staggered card reveals, hover lifts, sticky navbar transition, animated mobile menu, gallery lightbox transitions. All motion respects `prefers-reduced-motion`.

---

## Images — status

All image slots are filled with real photos and the site renders them (no more placeholder boxes):

- **Logo:** extracted from the brochure cover, background removed, used in the navbar, footer, and browser favicon.
- **Hero / About:** institute building photo (from brochure) + a real classroom/lab photo.
- **Director:** Dr. I. B. Khan's photograph, cropped cleanly from the brochure.
- **7 labs:** photos pulled from the brochure's lab-photos page (anatomy/physiology, pre-clinical sciences, classroom/AV) plus a supplied nutrition & community lab photo, reused sensibly where the brochure didn't have a distinct shot for every lab.
- **Library, transport (bus), Health Line Hospital (exterior/signage/clinical):** all sourced directly from the brochure.
- **Campus life & gallery (Sports Week, Educational Trip, Cultural Event, Campus, Students, Events):** sourced from the brochure and supplied photos.

If you'd like to swap any photo for a better one later, just drop the new file into the matching folder under `public/images/...` using the same filename — the `ImageSlot` component (`src/components/ui/ImageSlot.tsx`) will pick it up automatically since `src` is already wired through every section.

---

## Other things to confirm before launch

- **Contact details discrepancy:** the brochure's back page lists email as `mtnpi@yahoo.com` and website as `www.mtnpi.com` (used throughout this site). Please confirm these are still current.
- **Course details:** duration, eligibility criteria, seat count and fees are not in the brochure — currently shown as `[Information to be updated]` in the Courses section. Send these over and they can be filled in.
- **Enquiry form:** currently validates on the client side only and does not send data anywhere. Before going live, wire `src/components/sections/EnquiryForm.tsx` to an email service (e.g. Resend, EmailJS) or an API route that saves to a database/CRM (note: a static GitHub Pages export cannot run API routes — this would need a form service or a separate small backend).
- **Google Map embed:** currently generated from the campus address text. Swap in the exact Google Maps place link for a pin-accurate embed.
- **Social media links:** none were found in the brochure — add real links in `Footer.tsx` if desired.
