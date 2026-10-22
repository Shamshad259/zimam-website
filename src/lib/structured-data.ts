import {
  addressParts,
  companyNameAr,
  openingHours,
  site,
  siteUrl,
} from "@/data/site";

export const organizationId = `${siteUrl}/#organization`;

/** Organization + LocalBusiness (GeneralContractor). Built from src/data/site.ts only; no geo, ratings or reviews. */
export function organizationJsonLd(name: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "GeneralContractor"],
    "@id": organizationId,
    name,
    alternateName: companyNameAr,
    url: siteUrl,
    logo: `${siteUrl}/images/logo/zimam-logo.svg`,
    image: `${siteUrl}/og/zimam-og.png`,
    email: site.email,
    telephone: [site.phone.display, ...site.mobiles.map((m) => m.display)],
    vatID: site.vat,
    address: {
      "@type": "PostalAddress",
      streetAddress: addressParts.streetAddress,
      addressLocality: addressParts.locality,
      postalCode: addressParts.postalCode,
      addressCountry: addressParts.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: openingHours.days,
      opens: openingHours.opens,
      closes: openingHours.closes,
    },
  };
}

export function serviceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
  };
}
