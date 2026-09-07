import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { portfolio } from "@/content";

export function FeaturedEnterprise() {
  const company = portfolio[0];

  return (
    <section className="dark-section bg-dark text-dark-fg py-28 sm:py-40">
      <Container>
        <Reveal>
          <SectionLabel dark>Featured Enterprise</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            {company.name}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-dark-muted">
            {company.description}
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-10">
          <ArrowLink href={company.href} dark external>
            Visit {company.name}
          </ArrowLink>
        </Reveal>
      </Container>
    </section>
  );
}
