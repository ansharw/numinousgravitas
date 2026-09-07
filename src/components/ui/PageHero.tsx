import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="pt-44 pb-20 sm:pt-52 sm:pb-28">
      <Container>
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 font-serif text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl max-w-4xl text-ink text-balance">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted">
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
