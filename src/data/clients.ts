// Logos are trimmed copies (padding cropped, pixels untouched) of the files in
// /assets/clients, made by scripts/trim-client-logos.mjs. Names live in
// messages/*.json under `clients.items.<id>`.
export interface Client {
  id: string;
  src: string;
  /** Pixel size of the trimmed file: the image box is the artwork. */
  width: number;
  height: number;
  /** Fine-tune the displayed size: above 1 enlarges, below 1 shrinks. Default 1. */
  scale?: number;
}

// NOTE: elite.png (white wordmark for dark backgrounds) is kept in
// public/images/clients/ but is intentionally not used.
export const clients: Client[] = [
  { id: "femco", src: "/images/clients/femco.png", width: 968, height: 867 },
  { id: "seven", src: "/images/clients/seven.png", width: 679, height: 442, scale: 1.1 },
  { id: "elite", src: "/images/clients/elite-light.png", width: 707, height: 367 },
  { id: "hapco", src: "/images/clients/hapco.webp", width: 596, height: 600, scale: 0.9 },
  { id: "kidzink", src: "/images/clients/kidzink.png", width: 566, height: 138, scale: 0.95 },
  { id: "nhc", src: "/images/clients/nhc.png", width: 401, height: 270 },
  { id: "multicoat", src: "/images/clients/multicoat.png", width: 256, height: 265 },
  { id: "shapoorji-pallonji", src: "/images/clients/shapoorji-pallonji.png", width: 454, height: 254, scale: 1.1 },
  { id: "concrete-plus", src: "/images/clients/concrete-plus.png", width: 3000, height: 818, scale: 0.9 },
  { id: "dmcc", src: "/images/clients/dmcc.png", width: 532, height: 213 },
  { id: "acme", src: "/images/clients/acme.png", width: 179, height: 70 },
  { id: "al-azaem", src: "/images/clients/al-azaem.png", width: 364, height: 250 },
];

/** Size of the box (in logo units, 1 unit = 1px at full size) a logo must fit inside. */
export interface LogoBox {
  w: number;
  h: number;
}

/** Logo box of the Clients page grid. */
export const GRID_BOX: LogoBox = { w: 150, h: 72 };

const TARGET_AREA = 6500; // visual weight each logo aims for in GRID_BOX (px² of artwork)

/**
 * Displayed width of the logo in logo units. Logos aim for the same visual weight,
 * `scale` fine-tunes it, and the whole image box is always clamped inside `box`.
 */
export function logoUnits(client: Client, box: LogoBox = GRID_BOX) {
  const { width: w, height: h } = client;
  const target = TARGET_AREA * ((box.w * box.h) / (GRID_BOX.w * GRID_BOX.h));
  const k = Math.min(Math.sqrt(target / (w * h)) * (client.scale ?? 1), box.w / w, box.h / h);
  return Math.round(w * k * 10) / 10;
}
