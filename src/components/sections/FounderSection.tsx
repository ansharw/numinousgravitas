import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { founderName, founderIntro, founderMandate } from "@/content";

export function FounderSection() {
  return (
    <section className="border-t border-hairline py-28 sm:py-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>Founder</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl">
                {founderName}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="font-sans text-lg sm:text-xl leading-relaxed text-muted max-w-xl">
                {founderIntro}
              </p>
            </Reveal>
            <ul className="mt-10 space-y-3">
              {founderMandate.map((line) => (
                <Reveal key={line} delay={0.04}>
                  <li className="font-serif text-xl sm:text-2xl text-ink">
                    {line}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
