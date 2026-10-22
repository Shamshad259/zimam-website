import {
  Building2,
  Factory,
  Home,
  Hotel,
  Route,
  Server,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Sector {
  id: string;
  icon: LucideIcon;
}

export const sectors: Sector[] = [
  { id: "infrastructure", icon: Route },
  { id: "industrial", icon: Factory },
  { id: "commercial", icon: Building2 },
  { id: "residential", icon: Home },
  { id: "utilities", icon: Zap },
  { id: "dataCenters", icon: Server },
  { id: "hospitality", icon: Hotel },
];
