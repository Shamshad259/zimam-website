// Crops uniform empty padding (transparent or white) from the client logos.
// Crop only: original pixels are kept, nothing is redrawn or recolored.
//   Reads  assets/clients/*            (untouched originals)
//   Writes public/images/clients/*     (trimmed copies used by the site)
// Usage: node scripts/trim-client-logos.mjs   (uses the `sharp` that ships with Next.js)
import sharp from "sharp";
import path from "node:path";

const SRC = "assets/clients";
const OUT = "public/images/clients";

// [original file in assets/clients, output file in public/images/clients]
// JPEG input is written as PNG so no second lossy re-encode happens.
const logos = [
  ["Seven Saudi Entertainment Ventures2-01.png", "seven.png"],
  ["elite-light.png", "elite-light.png"],
  ["Hapco.webp", "hapco.webp"],
  ["Kidzink.png", "kidzink.png"],
  ["NHC.png", "nhc.png"],
  ["Multicoat.png", "multicoat.png"],
  ["Shapoorji Pallonj.jpg", "shapoorji-pallonji.png"],
  ["Concrete-Plus-Logo-Wide-English-Original.png", "concrete-plus.png"],
  ["DMCC.png", "dmcc.png"],
  ["acme-networking-logo.png", "acme.png"],
  ["Alazaem.png", "al-azaem.png"],
];

const ALPHA_MIN = 16; // below this a pixel counts as transparent
const WHITE_MIN = 247; // all channels at or above this count as white

const result = {};
for (const [from, to] of logos) {
  const input = path.join(SRC, from);
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  let x0 = width, y0 = height, x1 = -1, y1 = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const empty = data[i + 3] < ALPHA_MIN || (data[i] >= WHITE_MIN && data[i + 1] >= WHITE_MIN && data[i + 2] >= WHITE_MIN);
      if (!empty) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  const crop = { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 };
  const out = path.join(OUT, to);
  let pipeline = sharp(input).extract(crop);
  pipeline = to.endsWith(".webp") ? pipeline.webp({ lossless: true }) : pipeline.png({ compressionLevel: 9 });
  await pipeline.toFile(out);
  result[to] = { from: `${width}x${height}`, to: `${crop.width}x${crop.height}` };
}
console.table(result);
