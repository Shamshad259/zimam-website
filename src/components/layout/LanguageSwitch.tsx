import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";

/**
 * EN / العربية switch. Arabic is disabled until the Arabic phase; see
 * src/i18n/routing.ts. The markup is already final, so enabling Arabic only
 * means swapping the disabled button for a locale link.
 */
export function LanguageSwitch({ className }: { className?: string }) {
  const t = useTranslations("topBar");
  return (
    <div role="group" aria-label={t("language")} className={cn("flex items-center gap-2 text-xs font-semibold", className)}>
      <span aria-current="true" className="text-white">
        {t("english")}
      </span>
      <span aria-hidden="true" className="text-white/30">
        |
      </span>
      <button
        type="button"
        disabled
        lang="ar"
        title={t("arabicSoon")}
        aria-label={t("arabicSoon")}
        className="cursor-not-allowed text-white/50"
      >
        {t("arabic")}
      </button>
    </div>
  );
}
