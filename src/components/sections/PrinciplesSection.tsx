import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { principles } from "@/content";

export function PrinciplesSection() {
  return (
    <section className="border-t border-hairline py-28 sm:py-40">
      <Container>
        <Reveal>
          <SectionLabel>Principles</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl max-w-2xl">
            What guides the institution.
          </h2>
        </Reveal>

        <div className="mt-20 divide-y divide-hairline border-t border-hairline">
          {principles.map((principle) => (
            <Reveal key={principle.index}>
              <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-x-8 gap-y-4 py-12 sm:py-16">
                <span className="font-sans text-xs text-muted tracking-[0.1em]">
                  {principle.index}
                </span>
                <div className="max-w-2xl">
                  <h3 className="font-serif text-2xl sm:text-3xl">
                    {principle.title}
                  </h3>
                  <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-muted">
                    {principle.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
