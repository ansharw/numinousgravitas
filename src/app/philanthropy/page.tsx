import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { philanthropyAreas } from "@/content";

export const metadata: Metadata = {
  title: "Philanthropy",
  description:
    "Numinous Gravitas supports charitable and humanitarian work intended to improve lives with dignity and effectiveness.",
};

export default function PhilanthropyPage() {
  return (
    <>
      <PageHero
        label="Philanthropy"
        title="Wealth must eventually become service."
        intro="The accumulation of resources without the capacity to deploy them toward human good is incomplete."
      />

      <section className="border-t border-hairline py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionLabel>Areas of Interest</SectionLabel>
              </Reveal>
              <ul className="mt-8 divide-y divide-hairline border-t border-hairline">
                {philanthropyAreas.map((area) => (
                  <Reveal key={area}>
                    <li className="py-5 font-serif text-xl sm:text-2xl">
                      {area}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal>
                <p className="font-sans text-lg leading-relaxed text-muted">
                  Our ambition is not merely to donate. It is to help build
                  systems of generosity capable of continuing long after
                  individual acts of charity have ended.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 font-serif text-3xl italic">
                  Prosperity creates responsibility.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
