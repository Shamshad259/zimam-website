import Image from "next/image";
import { GRID_BOX, logoUnits, type Client, type LogoBox } from "@/data/clients";
import { cn } from "@/lib/cn";

/**
 * A client logo at a balanced size. The parent sets `--u` (one logo unit) and
 * the logo is sized to fit inside `box` (in units): its image box is the
 * trimmed artwork and never exceeds the box or its container.
 */
export function ClientLogo({
  client,
  alt,
  box = GRID_BOX,
  className,
}: {
  client: Client;
  alt: string;
  box?: LogoBox;
  className?: string;
}) {
  return (
    <Image
      src={client.src}
      alt={alt}
      width={client.width}
      height={client.height}
      sizes="160px"
      style={{ width: `calc(var(--u, 1px) * ${logoUnits(client, box)})`, height: "auto" }}
      className={cn("max-h-full max-w-full object-contain", className)}
    />
  );
}
