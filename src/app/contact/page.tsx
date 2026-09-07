import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactAreas, contactEmail } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Serious work deserves serious conversations. Reach Numinous Gravitas regarding business, investment, research, education, philanthropy, or institutional partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Serious work deserves serious conversations."
      />

      <section className="border-t border-hairline py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-sans text-xs uppercase tracking-[0.14em] text-muted">
                  We Welcome Conversations Concerning
                </p>
                <ul className="mt-6 space-y-3">
                  {contactAreas.map((area) => (
                    <li key={area} className="font-serif text-xl">
                      {area}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-12 font-sans text-xs uppercase tracking-[0.14em] text-muted">
                  Email
                </p>
                <p className="mt-3 font-serif text-xl">{contactEmail}</p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
