// Runs Next.js against a separate output folder (.next-verify) so a build or a
// production server for checking can never clash with `npm run dev` (.next).
//   npm run verify          -> next build   (into .next-verify)
//   npm run verify:start    -> next start -p 3100  (serves .next-verify)
// Works on Windows, macOS and Linux without extra dependencies.
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const mode = process.argv[2] ?? "build";
if (!["build", "start"].includes(mode)) {
  console.error(`Unknown mode "${mode}". Use "build" or "start".`);
  process.exit(1);
}

const nextBin = createRequire(import.meta.url).resolve("next/dist/bin/next");
const args = mode === "start" ? [nextBin, "start", "-p", process.env.PORT ?? "3100"] : [nextBin, "build"];
const result = spawnSync(process.execPath, args, {
  stdio: "inherit",
  env: { ...process.env, NEXT_DIST_DIR: ".next-verify" },
});
process.exit(result.status ?? 1);
