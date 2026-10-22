"use client";

import { useRef } from "react";
import type { PointerEvent } from "react";

/**
 * Horizontal swipe detection for carousels and the lightbox. Swiping towards
 * the start edge goes "next" in LTR and "previous" in RTL, matching the
 * mirrored arrow buttons.
 */
export function useSwipe(onPrevious: () => void, onNext: () => void, threshold = 48) {
  const startX = useRef<number | null>(null);

  return {
    onPointerDown: (e: PointerEvent) => {
      startX.current = e.clientX;
    },
    onPointerUp: (e: PointerEvent) => {
      if (startX.current === null) return;
      const delta = e.clientX - startX.current;
      startX.current = null;
      if (Math.abs(delta) < threshold) return;
      const rtl = document.documentElement.dir === "rtl";
      const towardsStart = delta < 0 !== rtl;
      if (towardsStart) onNext();
      else onPrevious();
    },
    onPointerCancel: () => {
      startX.current = null;
    },
  };
}
