"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";
import { NavLabel } from "./NavLabel";
import { NavDropdown } from "./NavDropdown";

export function Header() {
  const t = useTranslations("nav");
  const c = useTranslations("common");
  const h = useTranslations("header");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300 motion-reduce:transition-none",
        scrolled && "shadow-card",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label={h("logoLink")} className="shrink-0">
          <Logo priority className="h-10 sm:h-11" />
        </Link>

        <nav aria-label={t("label")} className="hidden items-center gap-1 xl:flex">
          {mainNav.map((item) =>
            item.children ? (
              <NavDropdown key={item.id} item={item} />
            ) : (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="group px-3 py-7 text-[13px] font-semibold uppercase tracking-wide text-navy transition-colors hover:text-signal focus-visible:text-signal focus-visible:outline-none aria-[current=page]:text-signal rtl:tracking-normal"
              >
                <NavLabel>{t(item.id)}</NavLabel>
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" className="max-sm:hidden">
            {c("requestQuote")}
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t("openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="p-2 text-navy hover:text-signal xl:hidden"
          >
            <Menu aria-hidden="true" className="size-7" />
          </button>
        </div>
      </Container>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </header>
  );
}
