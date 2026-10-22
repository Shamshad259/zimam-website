export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

/**
 * Saudi mobile (5X XXX XXXX) or landline (01X XXX XXXX), with an optional
 * 05 / 0 / +966 / 00966 prefix. Spaces, dashes and brackets are ignored.
 */
export function isSaudiPhone(value: string) {
  const digits = value.replace(/[\s\-()]/g, "");
  return (
    /^(?:\+?966|00966|0)?5\d{8}$/.test(digits) || /^(?:\+?966|00966|0)?1[1-7]\d{7}$/.test(digits)
  );
}
