import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { FeaturedEnterprise } from "@/components/sections/FeaturedEnterprise";
import { enterpriseInterests } from "@/content";

export const metadata: Metadata = {
  title: "Enterprise",
  description:
    "Numinous Gravitas develops and supports companies built around useful technology, durable economics, and meaningful problems.",
};

export default function EnterprisePage() {
  return (
    <>
      <PageHero
        label="Enterprise"
        title="Build what should exist."
        intro="Numinous Gravitas develops and supports companies built around useful technology, durable economics, and meaningful problems. We are interested in businesses that create genuine capability rather than temporary attention."
      />

      <section className="border-t border-hairline py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionLabel>Areas of Interest</SectionLabel>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-5 border-t border-hairline pt-10">
            {enterpriseInterests.map((interest) => (
              <Reveal key={interest}>
                <p className="font-serif text-xl sm:text-2xl">{interest}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline py-16 sm:py-20">
        <Container>
          <SectionLabel>Portfolio</SectionLabel>
        </Container>
      </section>

      <FeaturedEnterprise />
    </>
  );
}
