import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // `npm run verify` builds into .next-verify so checks never touch the dev server's .next.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  cacheComponents: true,
  partialPrefetching: true,
  // `npm run verify` caps build workers (NEXT_BUILD_CPUS) so low-RAM PCs do not run out of memory.
  experimental: {
    globalNotFound: true,
    ...(process.env.NEXT_BUILD_CPUS && { cpus: Number(process.env.NEXT_BUILD_CPUS) }),
  },
  turbopack: {
    root: path.resolve(process.cwd()),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withNextIntl(nextConfig);
