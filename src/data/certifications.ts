export const certifier = {
  /** Link on the "Verify" button; the certificates state it is the verification site. */
  verifyUrl: "https://www.qrocert.org",
  validUntil: "2029-10-16",
} as const;

export interface Certification {
  id: "iso9001" | "iso14001" | "iso45001";
  /** Standard as printed on the certificate (not translated). */
  standard: string;
  /** Short form for text strips, e.g. "ISO 9001". */
  short: string;
  number: string;
  thumb: { src: string; width: number; height: number };
  full: { src: string; width: number; height: number };
}

const image = (slug: string) => ({
  thumb: { src: `/images/certificates/${slug}-thumb.webp`, width: 400, height: 566 },
  full: { src: `/images/certificates/${slug}-full.webp`, width: 1131, height: 1600 },
});

/** Names, scope and issuer text live in messages under `quality.certifications`. */
export const certifications: Certification[] = [
  { id: "iso9001", standard: "ISO 9001:2015", short: "ISO 9001", number: "305026101771Q", ...image("iso-9001") },
  { id: "iso14001", standard: "ISO 14001:2015", short: "ISO 14001", number: "305026101772E", ...image("iso-14001") },
  { id: "iso45001", standard: "ISO 45001:2018", short: "ISO 45001", number: "305026101773HS", ...image("iso-45001") },
];
