import { useTranslations } from "next-intl";
import { clients } from "@/data/clients";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ClientsStrip() {
  const t = useTranslations("home.clients");
  const names = useTranslations("clients.items");
  const c = useTranslations("common");

  const logos = clients.map((client) => ({ ...client, name: names(client.id) }));

  return (
    <section className="bg-mist py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionTitle label={t("label")} title={t("title")} align="center" size="md" />
        </Reveal>
      </Container>
      <div className="mt-12">
        <LogoMarquee logos={logos} label={t("title")} />
      </div>
      <Container>
        <div className="mt-12 text-center">
          <Button href="/clients" variant="outline-navy">
            {c("viewAllClients")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
