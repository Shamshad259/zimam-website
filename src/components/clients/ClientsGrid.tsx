import { useTranslations } from "next-intl";
import { clients } from "@/data/clients";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { Container } from "@/components/ui/Container";
import { RedAccentLine } from "@/components/ui/RedAccentLine";
import { Reveal } from "@/components/ui/Reveal";

export function ClientsGrid() {
  const t = useTranslations("clientsPage");
  const names = useTranslations("clients.items");

  return (
    <section className="bg-mist py-16 lg:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-lg leading-relaxed text-muted">{t("intro")}</p>
          <RedAccentLine className="mt-6" />
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
          {clients.map((client, i) => {
            const name = names(client.id);
            return (
              <li key={client.id}>
                <Reveal delay={(i % 4) * 0.06} className="h-full">
                  <figure className="flex h-full flex-col overflow-hidden rounded-lg border border-navy/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div className="flex h-32 items-center justify-center overflow-hidden p-4 [--u:0.78px] sm:[--u:1px]">
                      <ClientLogo client={client} alt={name} />
                    </div>
                    <figcaption className="flex h-[4.5rem] items-center justify-center border-t border-navy/10 px-4 text-center text-xs font-semibold leading-snug text-navy sm:h-16 sm:text-sm">
                      {name}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
