import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { FounderSection } from "@/components/sections/FounderSection";

export const metadata: Metadata = {
  title: "Institution",
  description:
    "An institution without a narrow mandate — the conviction behind Numinous Gravitas.",
};

const capacities = [
  "Companies can be built.",
  "Capital can be allocated.",
  "Knowledge can be preserved.",
  "People can be educated.",
  "Institutions can be strengthened.",
  "Communities can be served.",
  "Faith can be transmitted.",
];

export default function InstitutionPage() {
  return (
    <>
      <PageHero
        label="The Institution"
        title="An institution without a narrow mandate."
        intro="Numinous Gravitas was created around a simple conviction: some things deserve to outlive the moment that created them."
      />

      <section className="border-t border-hairline py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <ul className="space-y-4 border-t border-hairline pt-8">
                {capacities.map((line) => (
                  <Reveal key={line}>
                    <li className="font-serif text-2xl sm:text-3xl leading-snug">
                      {line}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal>
                <p className="font-sans text-lg leading-relaxed text-muted">
                  Numinous Gravitas exists to participate in all of them. We
                  are deliberately multidisciplinary. Our work may take the
                  form of a company, an investment, a publication, a research
                  project, an educational initiative, a philanthropic
                  program, or an institution yet to be imagined.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 font-serif text-2xl italic text-ink">
                  The form may change. The principles do not.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionLabel>Enterprise · Capital · Knowledge · Service · Faith</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-3xl font-serif text-2xl sm:text-3xl leading-relaxed">
              Not every undertaking belongs to the same industry. They
              belong to the same standard.
            </p>
          </Reveal>
        </Container>
      </section>

      <PrinciplesSection />
      <FounderSection />
    </>
  );
}
