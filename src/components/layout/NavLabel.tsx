import type { ReactNode } from "react";

/**
 * Text of a desktop nav item with a red underline for the active page
 * (aria-current), hover and keyboard focus. The parent link needs `group`.
 */
export function NavLabel({ children }: { children: ReactNode }) {
  return (
    <span className="relative after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:scale-x-0 after:bg-signal after:transition-transform after:duration-200 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 group-aria-[current=page]:after:scale-x-100 motion-reduce:after:transition-none">
      {children}
    </span>
  );
}
