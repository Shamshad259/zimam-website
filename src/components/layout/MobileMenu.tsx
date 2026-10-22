"use client";

import { Phone, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ZimamWatermark } from "@/components/ui/ZimamWatermark";
import { LanguageSwitch } from "./LanguageSwitch";

/** Full-screen slide-in menu. Slides in from the end side (mirrors in RTL). */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useTranslations("nav");
  const c = useTranslations("common");
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label={t("label")}
      inert={!open}
      className={cn(
        "fixed inset-0 z-60 overflow-y-auto bg-navy text-white transition-[transform,visibility] duration-300 motion-reduce:transition-none xl:hidden",
        open ? "visible translate-x-0" : "invisible translate-x-full rtl:-translate-x-full",
      )}
    >
      <ZimamWatermark className="bottom-4 inset-s-0 text-[30vw]" />
      <div className="relative flex min-h-full flex-col px-6 pb-8">
        <div className="flex h-20 items-center justify-between">
          <Logo variant="white" className="h-9" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t("closeMenu")}
            className="p-2 text-white hover:text-signal"
          >
            <X aria-hidden="true" className="size-7" />
          </button>
        </div>

        <nav aria-label={t("label")} className="mt-4 flex-1">
          <ul>
            {mainNav.map((item) => (
              <li key={item.id} className="border-b border-white/10">
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "block py-4 font-heading text-xl font-bold uppercase tracking-wide rtl:tracking-normal",
                    isActive(item.href) && "text-signal",
                  )}
                >
                  {t(item.id)}
                </Link>
                {item.children && (
                  <ul className="mb-3 ms-3 border-s-2 border-signal ps-4">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 text-base font-medium text-white/80 hover:text-white"
                        >
                          {t(child.id)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col gap-5">
          <Button href="/contact" size="lg" className="w-full" onClick={onClose}>
            {c("requestQuote")}
          </Button>
          <a href={`tel:${site.primaryPhone.tel}`} className="flex items-center gap-2 text-sm text-white/80">
            <Phone aria-hidden="true" className="size-4 text-signal" />
            <bdi dir="ltr">{site.primaryPhone.display}</bdi>
          </a>
          <LanguageSwitch />
        </div>
      </div>
    </div>
  );
}
