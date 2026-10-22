import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { LanguageSwitch } from "./LanguageSwitch";

export function TopBar() {
  const t = useTranslations("common");
  return (
    <div className="hidden bg-navy text-xs text-white/90 lg:block">
      <Container className="flex h-10 items-center justify-between">
        <ul className="flex items-center gap-6">
          <li>
            <a href={`tel:${site.primaryPhone.tel}`} className="flex items-center gap-2 hover:text-white">
              <Phone aria-hidden="true" className="size-3.5 text-signal" />
              <bdi dir="ltr">{site.primaryPhone.display}</bdi>
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail aria-hidden="true" className="size-3.5 text-signal" />
              {site.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-3.5 text-signal" />
            {t("location")}
          </li>
        </ul>
        <LanguageSwitch />
      </Container>
    </div>
  );
}
