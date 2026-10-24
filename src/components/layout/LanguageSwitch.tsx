"use client";

import { useLocale, useTranslations } from "next-intl";
import { Suspense } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

/** Presentational EN | العربية switch; `pathname` is the page the links keep. */
function Switch({ pathname, className }: { pathname: string; className?: string }) {
  const t = useTranslations("topBar");
  const locale = useLocale();

  const option = (target: "en" | "ar", label: string) =>
    locale === target ? (
      <span aria-current="true" lang={target} className="text-white">
        {label}
      </span>
    ) : (
      <Link
        href={pathname}
        locale={target}
        lang={target}
        hrefLang={target}
        className="inline-flex min-h-6 items-center text-white/70 hover:text-white"
      >
        {label}
      </Link>
    );

  return (
    <div role="group" aria-label={t("language")} className={cn("flex items-center gap-2 text-xs font-semibold", className)}>
      {option("en", t("english"))}
      <span aria-hidden="true" className="text-white/30">
        |
      </span>
      {option("ar", t("arabic"))}
    </div>
  );
}

function SwitchForCurrentPage({ className }: { className?: string }) {
  return <Switch pathname={usePathname()} className={className} />;
}

/**
 * Switching keeps the current page (/en/about <-> /ar/about). usePathname() reads the URL, so it
 * sits inside <Suspense> (pages rendered per request); the fallback links to the home page.
 */
export function LanguageSwitch({ className }: { className?: string }) {
  return (
    <Suspense fallback={<Switch pathname="/" className={className} />}>
      <SwitchForCurrentPage className={className} />
    </Suspense>
  );
}
