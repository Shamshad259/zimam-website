import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { divisions } from "@/data/services";
import { mainNav } from "@/data/navigation";
import { getAddress, site, whatsappUrl } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { RedAccentLine } from "@/components/ui/RedAccentLine";
import { ZimamWatermark } from "@/components/ui/ZimamWatermark";

function ColumnTitle({ children }: { children: string }) {
  return (
    <>
      <h2 className="font-heading text-sm font-extrabold uppercase tracking-[0.18em] rtl:tracking-normal">
        {children}
      </h2>
      <RedAccentLine className="mt-3 mb-5" />
    </>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const nav = useTranslations("nav");
  const d = useTranslations("divisions");
  const w = useTranslations("whatsapp");
  const linkClass = "text-sm text-white/75 transition-colors hover:text-white";

  return (
    <footer className="relative isolate overflow-hidden bg-navy text-white">
      <ZimamWatermark className="-bottom-6 inset-e-0 text-[22vw]" />
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="white" className="h-11" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">{t("description")}</p>
          <p className="mt-5 text-xs text-white/60">
            {t("crLabel")}: <bdi dir="ltr">{site.cr}</bdi>
            <br />
            {t("vatLabel")}: <bdi dir="ltr">{site.vat}</bdi>
          </p>
        </div>

        <nav aria-labelledby="footer-links">
          <h2 id="footer-links" className="sr-only">
            {t("quickLinks")}
          </h2>
          <ColumnTitle>{t("quickLinks")}</ColumnTitle>
          <ul className="space-y-3">
            {mainNav.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className={linkClass}>
                  {nav(item.id)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-divisions">
          <h2 id="footer-divisions" className="sr-only">
            {t("ourDivisions")}
          </h2>
          <ColumnTitle>{t("ourDivisions")}</ColumnTitle>
          <ul className="space-y-3">
            {divisions.map((division) => (
              <li key={division.slug}>
                <Link href={`/services/${division.slug}`} className={linkClass}>
                  {d(`${division.slug}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ColumnTitle>{t("contactUs")}</ColumnTitle>
          <ul className="space-y-3.5 text-sm text-white/75">
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal" />
              <span className="flex flex-col">
                <a href={`tel:${site.phone.tel}`} className="inline-flex min-h-6 items-center hover:text-white">
                  <bdi dir="ltr">{site.phone.display}</bdi>
                </a>
                {site.mobiles.map((m) => (
                  <a key={m.tel} href={`tel:${m.tel}`} className="inline-flex min-h-6 items-center hover:text-white">
                    <bdi dir="ltr">{m.display}</bdi>
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal" />
              <a href={`mailto:${site.email}`} className="inline-flex min-h-6 items-center hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal" />
              <span>
                {getAddress(locale)}
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 block font-semibold text-white underline-offset-4 hover:underline"
                >
                  {t("viewOnMap")}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <MessageCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal" />
              <a
                href={whatsappUrl(w("message"))}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {t("whatsapp")}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("rights")}</p>
          <p>
            {t("crLabel")}: <bdi dir="ltr">{site.cr}</bdi> | {t("vatLabel")}:{" "}
            <bdi dir="ltr">{site.vat}</bdi>
          </p>
        </Container>
      </div>
    </footer>
  );
}
