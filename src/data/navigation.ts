import { divisions } from "./services";

export interface NavItem {
  id: string;
  href: string;
  children?: { id: string; href: string }[];
}

export const mainNav: NavItem[] = [
  { id: "home", href: "/" },
  { id: "about", href: "/about" },
  {
    id: "services",
    href: "/services",
    children: divisions.map((d) => ({ id: d.slug, href: `/services/${d.slug}` })),
  },
  { id: "projects", href: "/projects" },
  { id: "clients", href: "/clients" },
  { id: "quality", href: "/quality-hse" },
  { id: "contact", href: "/contact" },
];
