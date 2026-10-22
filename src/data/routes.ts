import { mainNav } from "./navigation";

/** Every indexable route (locale-less path), flattened from the main navigation. */
export const routes: string[] = mainNav.flatMap((item) => [
  item.href,
  ...(item.children?.map((child) => child.href) ?? []),
]);
