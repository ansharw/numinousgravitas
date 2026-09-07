import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { educationFormats } from "@/content";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education is civilization's mechanism for carrying intelligence across generations.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        label="Education"
        title="Knowledge becomes valuable when it can be transmitted."
        intro="Education is civilization's mechanism for carrying intelligence across generations. Numinous Gravitas intends to develop and support educational work across multiple formats."
      />

      <section className="border-t border-hairline py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionLabel>Formats</SectionLabel>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5 border-t border-hairline pt-10">
            {educationFormats.map((format) => (
              <Reveal key={format}>
                <p className="font-serif text-lg sm:text-xl">{format}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline py-28 sm:py-40">
        <Container>
          <Reveal>
            <p className="font-serif text-3xl sm:text-5xl max-w-3xl leading-[1.2]">
              We believe exceptional education should develop more than
              employability.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-serif text-3xl sm:text-5xl italic">
              It should develop judgment.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
