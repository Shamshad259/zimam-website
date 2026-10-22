import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function WhatsAppButton() {
  const t = useTranslations("whatsapp");
  return (
    <a
      href={whatsappUrl(t("message"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] inset-e-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lift transition duration-200 hover:scale-105 hover:bg-[#1ebe5b] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:inset-e-6"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
