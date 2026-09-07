import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";

export function DetailHero({
  kicker,
  title,
  children,
  backHref,
  backLabel,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
  backHref: string;
  backLabel: string;
}) {
  return (
    <section className="pt-44 pb-28 sm:pt-52 sm:pb-40">
      <Container>
        <Reveal>
          <SectionLabel>{kicker}</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 font-serif text-4xl sm:text-6xl max-w-3xl leading-[1.1]">
            {title}
          </h1>
        </Reveal>
        {children}
        <Reveal delay={0.32} className="mt-14">
          <ArrowLink href={backHref}>{backLabel}</ArrowLink>
        </Reveal>
      </Container>
    </section>
  );
}
