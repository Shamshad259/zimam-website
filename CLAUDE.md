# ZIMAM Electrical Company — Corporate Website

## Source of truth

- All content, page structure and design direction: `docs/BRIEF.md`
- Company profile: `assets/profile/zimam-company-profile.pdf`
- Where the brief says "uploaded/attached files", it means the files in `/assets`.
- NEVER invent statistics, years of experience, certifications, testimonials,
  people's names or project details. If something is missing, leave a
  `// TODO:` comment and tell me.

## Tech stack

- Next.js (latest stable, App Router) + TypeScript (strict)
- Tailwind CSS
- next-intl for i18n: routes `/en` and `/ar`, English default, full RTL for Arabic
- lucide-react for icons, motion (framer-motion) for subtle animations
- Fonts via next/font: Montserrat (headings), Inter (body), IBM Plex Sans Arabic
- Contact form: Web3Forms (access key in `.env.local` as NEXT_PUBLIC_WEB3FORMS_KEY)
- Deploy target: Vercel
- Do not add other dependencies without asking me first.

## Brand tokens

- Navy #0A0A4F | Royal blue #00008B | Red #E30613
- Light grey #F2F3F8 | Text #1A1A2E | Muted #5A5F7A
- Signature elements: diagonal navy shapes, thin red line with dashed end,
  two-line section titles (light small word above bold large word),
  red hexagon check icons, faint "ZIMAM" watermark on dark sections.

## Code rules

- No hardcoded user-facing text: everything in `messages/en.json` and
  `messages/ar.json`.
- Content data in `src/data/` (services.ts, projects.ts, clients.ts, gallery.ts).
- Use logical Tailwind classes (ms-/me-, ps-/pe-, start-/end-, text-start)
  so RTL works automatically. Never use left/right-specific classes for layout.
- Reusable components in `src/components/`; one component per file.
- Images through next/image with meaningful alt text in both languages.
- Logos: use files from `assets/logo` and `assets/clients` exactly as provided.
  Never redraw, recolor or recreate any logo.
- Project and Gallery sections: ONLY real photos (from the profile PDF or
  `assets/photos`). Never present stock/AI images as Zimam project photos.

## Workflow

- Work in phases; after each phase run `npm run build` and `npm run lint`
  and fix all errors before saying you're done.
- Summarize what you changed and what I should check in the browser.
- Commit after each completed phase with a clear message.

## WhatsApp and contact details rules

- WhatsApp appears ONLY in: the floating button (all pages), the footer contact
  list, and the Contact page "Contact information" card. Never add WhatsApp
  buttons or links anywhere else. CTA bands use "Call us" (tel: link) instead.
- Phone numbers, the WhatsApp number and the address come from `src/data/site.ts`
  only. Never hardcode them in components or in `messages/*.json`.
- The global pre-footer CTA band is not shown on Contact or on the division
  pages (those have their own CTA band).

## Build output folders (never clash with the dev server)

- Never run `next build` / `npm run build` into `.next` while the dev server may be
  running: it corrupts `.next` (JSON.parse errors, broken routes).
- For every check (build, type-check, headless tests) use `npm run verify`, which builds
  into `.next-verify` (set via `NEXT_DIST_DIR`), and `npm run verify:start` to serve that
  build on port 3100. Layout and behaviour checks should also be run against the dev
  server on `localhost:3000` when the user is working in dev.

## Routes and `params` (Cache Components)

- Never `await params` in a page body: it ties the App Shell to one URL and triggers Next's
  "URL data outside of Suspense" warning. `generateStaticParams` does NOT fix that, and
  `dynamicParams` is not allowed with Cache Components.
- For a small fixed set of pages (e.g. the four divisions) use static route segments that
  share one component and read their data from `src/data/`.
- For truly dynamic params, pass the `params` promise to a child component inside
  `<Suspense>` (with a skeleton fallback) and call `notFound()` for unknown values. This
  makes the page only partially static (header and body stream in).
- Reading `locale` in `generateMetadata` is fine.

## SEO rules

- Production origin is `https://zelcosa.com` (`siteUrl` in `src/data/site.ts`). Canonicals, OG urls,
  sitemap and JSON-LD always use it (via `metadataBase`), even on vercel.app copies.
- **`readyLocales` in `src/data/site.ts` is the Arabic switch.** Only listed locales are indexable
  and appear in the sitemap and hreflang; any other locale gets robots noindex/nofollow.
  To launch Arabic: add `"ar"` to `readyLocales` (and to `routing.locales`, with `messages/ar.json`
  including the `meta` namespace and `site.ts` address `ar`).
- Page metadata: every page's `generateMetadata` calls `pageMetadata(locale, key, path)`
  (`src/lib/metadata.ts`), text from `messages/*.json` `meta.<key>`. Titles are short (the layout
  template adds " | ZIMAM Electrical Company"); descriptions ~150-160 chars, factual, include
  "Riyadh, Saudi Arabia". A new page needs: a `meta` entry, its path in `mainNav`
  (`src/data/navigation.ts`, feeds the sitemap via `src/data/routes.ts`).
- JSON-LD comes from `src/lib/structured-data.ts` (data from `site.ts` only): sitewide
  Organization + GeneralContractor in the layout, Service on division pages. Never add geo,
  ratings, reviews or invented facts.
- Share image: static `public/og/zimam-og.png` (1200x630), regenerate with `scripts/og/`.
- One h1 per page, no skipped heading levels, decorative images `alt=""`, content images meaningful alt.
