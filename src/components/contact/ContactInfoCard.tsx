import { Clock, Mail, MapPin, Phone, Smartphone, type LucideIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getAddress, site } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

function Row({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
      <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-signal" />
      <div>{children}</div>
    </li>
  );
}

const linkClass = "transition-colors hover:text-signal";

export function ContactInfoCard() {
  const t = useTranslations("contact");
  const locale = useLocale();

  return (
    <section className="rounded-xl bg-white p-6 shadow-card sm:p-8">
      <h2 className="font-heading text-xl font-bold text-navy">{t("infoTitle")}</h2>
      <ul className="mt-6 space-y-4">
        <Row icon={Phone}>
          <a href={`tel:${site.phone.tel}`} className={linkClass}>
            <bdi dir="ltr">{site.phone.display}</bdi>
          </a>
        </Row>
        {site.mobiles.map((m) => (
          <Row key={m.tel} icon={Smartphone}>
            <span className="inline-flex items-center gap-2">
              <a href={`tel:${m.tel}`} className={linkClass}>
                <bdi dir="ltr">{m.display}</bdi>
              </a>
              <a
                href={`https://wa.me/${m.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("whatsappLabel", { number: m.display })}
                className="text-[#128c4a] transition-opacity hover:opacity-70"
              >
                <WhatsAppIcon className="size-4" />
              </a>
            </span>
          </Row>
        ))}
        <Row icon={Mail}>
          <a href={`mailto:${site.email}`} className={linkClass}>
            {site.email}
          </a>
        </Row>
        <Row icon={MapPin}>{getAddress(locale)}</Row>
        <Row icon={Clock}>{t("hoursValue")}</Row>
      </ul>
    </section>
  );
}
