import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { DivisionRow } from "@/components/sections/DivisionRow";
import { FeaturedEnterprise } from "@/components/sections/FeaturedEnterprise";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { FounderSection } from "@/components/sections/FounderSection";
import {
  divisions,
  essays,
  libraryCollections,
  philanthropyAreas,
  faithWords,
  capitalTags,
} from "@/content";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-[92vh] flex-col justify-center pt-28 pb-16">
        <Container>
          <SectionLabel className="mb-8">
            Numinous Gravitas — Independent Institution
          </SectionLabel>
          <h1 className="font-serif text-[3rem] leading-[1.02] sm:text-[5.5rem] lg:text-[6.5rem] max-w-5xl text-balance">
            Building things
            <br />
            of enduring weight.
          </h1>
          <p className="mt-10 max-w-lg font-sans text-lg sm:text-xl leading-relaxed text-muted">
            Numinous Gravitas is an independent institution operating across
            enterprise, capital, knowledge, education, philanthropy, and
            faith.
          </p>
          <a
            href="#institution"
            className="mt-14 inline-block font-sans text-sm tracking-[0.08em] text-ink/70 transition-colors duration-300 hover:text-ink"
          >
            Explore the institution ↓
          </a>
        </Container>
      </section>

      {/* 2. Institutional introduction */}
      <section id="institution" className="border-t border-hairline py-28 sm:py-40">
        <Container>
          <Reveal>
            <SectionLabel>The Institution</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.15] max-w-4xl">
              We build companies. Allocate capital. Preserve knowledge.
              Support human flourishing.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-10 max-w-xl font-sans text-lg leading-relaxed text-muted">
              Numinous Gravitas exists for work whose significance extends
              beyond a single product, market, or generation.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 3. Areas of work */}
      <section className="border-t border-hairline py-28 sm:py-40">
        <Container>
          <Reveal>
            <SectionLabel>Areas of Work</SectionLabel>
          </Reveal>
          <div className="mt-14 border-t border-hairline">
            {divisions.map((division) => (
              <DivisionRow key={division.slug} division={division} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Featured Enterprise */}
      <FeaturedEnterprise />

      {/* 5. Institutional statement / manifesto */}
      <section className="border-t border-hairline py-32 sm:py-48">
        <Container>
          <Reveal>
            <p className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.2] max-w-4xl">
              Not every undertaking belongs to the same industry.
              <br />
              They belong to the same standard.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="mt-16">
            <p className="font-sans text-base sm:text-lg leading-loose text-muted max-w-sm">
              Substance over noise.
              <br />
              Endurance over fashion.
              <br />
              Stewardship over consumption.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 6. Capital */}
      <section className="border-t border-hairline py-28 sm:py-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel>Capital</SectionLabel>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-6 font-serif text-3xl sm:text-5xl leading-[1.15]">
                  Capital is a vote for what should be allowed to grow.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted">
                  Numinous Gravitas approaches investment with a long
                  horizon, favoring durable economics, exceptional
                  operators, structural relevance, and the capacity for
                  compounding.
                </p>
              </Reveal>
              <Reveal delay={0.22} className="mt-8">
                <ArrowLink href="/capital">Read on Capital</ArrowLink>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <ul className="space-y-4 border-t border-hairline pt-6 lg:pt-0 lg:border-t-0">
                {capitalTags.map((tag) => (
                  <li
                    key={tag}
                    className="font-sans text-xs uppercase tracking-[0.14em] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Knowledge */}
      <section className="border-t border-hairline py-28 sm:py-40">
        <Container>
          <Reveal>
            <SectionLabel>Knowledge</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-3xl sm:text-5xl max-w-2xl leading-[1.15]">
              We are interested in questions whose importance exceeds their
              novelty.
            </h2>
          </Reveal>

          <div className="mt-16 divide-y divide-hairline border-t border-hairline">
            {essays.map((essay) => (
              <Reveal key={essay.slug}>
                <Link
                  href={`/knowledge/${essay.slug}`}
                  className="group grid grid-cols-1 sm:grid-cols-[60px_1fr_auto] items-baseline gap-x-6 gap-y-2 py-8 transition-colors duration-300"
                >
                  <span className="font-sans text-xs text-muted">
                    {essay.index}
                  </span>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.1em] text-muted">
                      {essay.field}
                    </p>
                    <h3 className="mt-2 font-serif text-xl sm:text-2xl">
                      {essay.title}
                    </h3>
                  </div>
                  <span className="hidden sm:inline-block font-serif text-xl transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-12">
            <ArrowLink href="/knowledge">Visit the Knowledge division</ArrowLink>
          </Reveal>
        </Container>
      </section>

      {/* 8. Library */}
      <section className="border-t border-hairline bg-ivory-deep py-28 sm:py-40">
        <Container>
          <Reveal>
            <SectionLabel>The Library</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-4xl sm:text-6xl">
              A permanent home for ideas.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted">
              An evolving archive of writings, research, references,
              frameworks, and intellectual work.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-hairline">
            {libraryCollections.map((collection) => (
              <Reveal key={collection.slug}>
                <Link
                  href={`/library/${collection.slug}`}
                  className="group block border-b border-r border-hairline p-8 sm:p-10 h-full transition-colors duration-300 hover:bg-ivory"
                >
                  <span className="font-sans text-xs text-muted">
                    {collection.index}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl">
                    {collection.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted max-w-xs">
                    {collection.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Philanthropy */}
      <section className="border-t border-hairline py-28 sm:py-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel>Philanthropy</SectionLabel>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-6 font-serif text-3xl sm:text-5xl">
                  Prosperity creates responsibility.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted">
                  Numinous Gravitas supports charitable and humanitarian
                  work intended to improve lives with dignity, discipline,
                  and lasting effectiveness.
                </p>
              </Reveal>
              <Reveal delay={0.22} className="mt-8">
                <ArrowLink href="/philanthropy">Read on Philanthropy</ArrowLink>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <ul className="space-y-4">
                {philanthropyAreas.slice(0, 6).map((area) => (
                  <li
                    key={area}
                    className="font-sans text-xs uppercase tracking-[0.14em] text-muted"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Faith */}
      <section className="dark-section bg-dark text-dark-fg border-t border-dark-hairline py-32 sm:py-48">
        <Container>
          <Reveal>
            <SectionLabel dark>Faith</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-serif text-3xl sm:text-5xl lg:text-6xl max-w-3xl leading-[1.15]">
              There are questions that wealth cannot answer.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-3">
            {faithWords.map((word, i) => (
              <Reveal key={word} delay={0.06 * i}>
                <p className="font-serif text-2xl sm:text-4xl text-dark-fg/90">
                  {word}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <p className="mt-16 max-w-xl font-sans text-lg leading-relaxed text-dark-muted">
              Our work in faith explores Islam, theology, ethics, scripture,
              mortality, and humanity&rsquo;s relationship with its Creator.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 11. Principles */}
      <PrinciplesSection />

      {/* 12. Founder */}
      <FounderSection />

      {/* 13. Contact */}
      <section className="border-t border-hairline py-28 sm:py-40">
        <Container>
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl max-w-2xl leading-[1.15]">
              Serious work deserves serious conversations.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-12">
            <ArrowLink href="/contact">Contact Numinous Gravitas</ArrowLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
