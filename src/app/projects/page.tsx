import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { projectCategories } from "@/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A home for experiments, independent initiatives, collaborations, and emerging ideas that begin before they have a category.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Some ideas begin before they have a category."
        intro="Not every worthwhile undertaking begins as a company or institution. Numinous Gravitas Projects is a home for experiments, independent initiatives, collaborations, and emerging ideas."
      />

      <section className="border-t border-hairline py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionLabel>Forms a Project May Take</SectionLabel>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5 border-t border-hairline pt-10">
            {projectCategories.map((category) => (
              <Reveal key={category}>
                <p className="font-serif text-lg sm:text-xl">{category}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline py-28 sm:py-40">
        <Container>
          <Reveal>
            <p className="font-serif text-2xl sm:text-3xl max-w-2xl leading-relaxed">
              Some will remain projects. Others may become companies,
              foundations, institutions, or something entirely new.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-sans text-base text-muted">
              Individual initiatives will be published here as they mature.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
