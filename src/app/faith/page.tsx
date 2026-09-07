import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { faithAreas, faithWords } from "@/content";

export const metadata: Metadata = {
  title: "Faith",
  description:
    "There are questions that wealth cannot answer. Our work in faith explores Islam, theology, ethics, and humanity's relationship with its Creator.",
};

export default function FaithPage() {
  return (
    <>
      <section className="pt-44 pb-20 sm:pt-52 sm:pb-28">
        <Container>
          <Reveal>
            <SectionLabel>Faith</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl max-w-3xl">
              Beyond material achievement.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted">
              Numinous Gravitas recognizes that wealth, intelligence,
              technology, and power cannot answer every human question.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="dark-section bg-dark text-dark-fg py-32 sm:py-48">
        <Container>
          <div className="space-y-3">
            {faithWords.map((word, i) => (
              <Reveal key={word} delay={0.08 * i}>
                <p className="font-serif text-3xl sm:text-5xl text-dark-fg/90">
                  {word}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-serif text-2xl sm:text-3xl leading-relaxed max-w-xl">
                  Our work in faith explores Islam, theology, spirituality,
                  ethics, comparative religion, and the relationship between
                  human achievement and ultimate accountability.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-10 max-w-xl font-sans text-lg leading-relaxed text-muted">
                  Faith is not treated here as decoration around worldly
                  ambition. It is part of the framework through which
                  worldly ambition is judged.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <SectionLabel>Areas</SectionLabel>
              <ul className="mt-6 space-y-4">
                {faithAreas.map((area) => (
                  <li key={area} className="font-serif text-xl">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
