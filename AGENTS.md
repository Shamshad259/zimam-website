<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

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
