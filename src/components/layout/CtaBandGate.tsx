"use client";

import type { ReactNode } from "react";
import { usePathname } from "@/i18n/navigation";

/**
 * Renders the global pre-footer CTA band everywhere except Contact and the
 * division pages (those have their own CTA band; /services itself keeps the global one).
 */
export function CtaBandGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/contact") || pathname.startsWith("/services/")) return null;
  return <>{children}</>;
}
