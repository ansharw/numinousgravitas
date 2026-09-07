import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { capitalInterests } from "@/content";

export const metadata: Metadata = {
  title: "Capital",
  description:
    "Numinous Gravitas invests with a long horizon, favoring durable economics, exceptional operators, and the capacity for compounding.",
};

export default function CapitalPage() {
  return (
    <>
      <PageHero
        label="Capital"
        title="Capital with direction."
        intro="We regard capital as more than an instrument of accumulation. It is a mechanism for deciding what receives the opportunity to exist, expand, and endure."
      />

      <section className="border-t border-hairline py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel>Interests</SectionLabel>
              </Reveal>
              <ul className="mt-8 divide-y divide-hairline border-t border-hairline">
                {capitalInterests.map((interest) => (
                  <Reveal key={interest}>
                    <li className="py-5 font-serif text-xl sm:text-2xl">
                      {interest}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal>
                <p className="font-sans text-lg leading-relaxed text-muted">
                  We favor businesses and assets with strong fundamentals,
                  capable operators, structural relevance, and the
                  potential for enduring value.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 font-serif text-2xl italic">
                  We are comfortable being patient. Compounding rewards
                  those who can think beyond the immediate.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
