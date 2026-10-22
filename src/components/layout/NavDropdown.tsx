"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/data/navigation";
import { NavLabel } from "./NavLabel";

/** Desktop "Services" item: link to the overview plus a hover/focus/click submenu. */
export function NavDropdown({ item }: { item: NavItem }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = pathname.startsWith(item.href);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <div className="flex items-center">
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          className="group py-7 ps-3 text-[13px] font-semibold uppercase tracking-wide text-navy transition-colors hover:text-signal focus-visible:text-signal focus-visible:outline-none aria-[current=page]:text-signal rtl:tracking-normal"
        >
          <NavLabel>{t(item.id)}</NavLabel>
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-label={t("toggleServices")}
          onClick={() => setOpen((v) => !v)}
          className="px-1.5 py-7 text-navy hover:text-signal focus-visible:text-signal focus-visible:outline-none"
        >
          <ChevronDown
            aria-hidden="true"
            className={cn("size-4 transition-transform motion-reduce:transition-none", open && "rotate-180")}
          />
        </button>
      </div>
      {open && item.children && (
        <ul className="absolute inset-s-0 top-full z-10 w-64 border-t-2 border-signal bg-white py-2 shadow-lift">
          {item.children.map((child, i) => (
            <li key={child.id}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-mist hover:text-signal"
              >
                <span className="font-heading text-xs font-extrabold text-signal">
                  0{i + 1}
                </span>
                {t(child.id)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
