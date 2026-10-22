// Single source of truth for company contact details (see docs/BRIEF.md).
// Phone numbers, WhatsApp number and address must come from here only; never
// hardcode them in components or message files. Latin digits in every language.
const mobiles = [
  { display: "+966 50 308 1416", tel: "+966503081416", wa: "966503081416" },
  { display: "+966 56 000 0320", tel: "+966560000320", wa: "966560000320" },
] as const;

const address: Record<string, string> = {
  en: "Floor 2, RHGA7630, King Abdulaziz Rd, Al Murooj, Riyadh 12282, Kingdom of Saudi Arabia",
  // TODO: add `ar` in the Arabic phase (falls back to English until then).
};

export const site = {
  /** Landline: footer and Contact page only. */
  phone: { display: "+966 11 463 4427", tel: "+966114634427" },
  mobiles,
  /** Top bar number and every "Call us" button. */
  primaryPhone: mobiles[1],
  /** Floating WhatsApp button, footer and Contact page. */
  whatsappNumber: mobiles[1].wa,
  email: "info@zelcosa.com",
  website: "www.zelcosa.com",
  cr: "7053132879",
  vat: "31451320040003",
  // Google Maps embed for the "Find us" card on the Contact page. Replace here only.
  // (The `!1d` value is the zoom distance; 2000 shows street level.)
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d46.66330865371341!3d24.75844449793306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd0dbbbd0317%3A0xf4574e58a93c07cd!2sWHITE%20LINE!5e0!3m2!1sen!2ssa!4v1792648493107!5m2!1sen!2ssa",
  // TODO: replace with the exact Google Maps place link once confirmed.
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.en)}`,
} as const;

export const getAddress = (locale: string) => address[locale] ?? address.en;

export const whatsappUrl = (text: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
