import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { essays, knowledgeFields } from "@/content";

export const metadata: Metadata = {
  title: "Knowledge",
  description:
    "Research, essays, analysis, frameworks, and intellectual exploration. We are interested in questions whose importance exceeds their novelty.",
};

export default function KnowledgePage() {
  return (
    <>
      <PageHero
        label="Knowledge"
        title="Understand before acting."
        intro="Numinous Gravitas studies ideas that shape individuals, institutions, economies, and civilizations. The objective is not information accumulation — it is clearer perception."
      />

      <section className="border-t border-hairline py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionLabel>Fields of Inquiry</SectionLabel>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-5 border-t border-hairline pt-10">
            {knowledgeFields.map((field) => (
              <Reveal key={field}>
                <p className="font-serif text-lg sm:text-xl">{field}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionLabel>Featured Essays</SectionLabel>
          </Reveal>
          <div className="mt-10 divide-y divide-hairline border-t border-hairline">
            {essays.map((essay) => (
              <Reveal key={essay.slug}>
                <Link
                  href={`/knowledge/${essay.slug}`}
                  className="group grid grid-cols-1 sm:grid-cols-[60px_1fr_auto] items-baseline gap-x-6 gap-y-2 py-10"
                >
                  <span className="font-sans text-xs text-muted">
                    {essay.index}
                  </span>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.1em] text-muted">
                      {essay.field}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                      {essay.title}
                    </h3>
                    <p className="mt-3 max-w-xl font-sans text-sm sm:text-base leading-relaxed text-muted">
                      {essay.excerpt}
                    </p>
                  </div>
                  <span className="hidden sm:inline-block font-serif text-xl transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
