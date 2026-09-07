import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { libraryCollections } from "@/content";

export const metadata: Metadata = {
  title: "The Library",
  description:
    "An evolving archive of ideas, research, writings, references, and intellectual work. Designed as a repository, not a feed.",
};

export default function LibraryPage() {
  return (
    <>
      <PageHero
        label="The Library"
        title="A permanent home for ideas."
        intro="An evolving archive of ideas, research, writings, references, and intellectual work. Not everything valuable should disappear beneath tomorrow's content."
      />

      <section className="border-t border-hairline">
        <Container wide>
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-hairline">
            {libraryCollections.map((collection) => (
              <Reveal key={collection.slug}>
                <Link
                  href={`/library/${collection.slug}`}
                  className="group block border-b border-r border-hairline p-8 sm:p-12 h-full transition-colors duration-300 hover:bg-ivory-deep"
                >
                  <span className="font-sans text-xs text-muted">
                    {collection.index}
                  </span>
                  <h2 className="mt-5 font-serif text-2xl sm:text-3xl">
                    {collection.title}
                  </h2>
                  <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-muted max-w-sm">
                    {collection.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
