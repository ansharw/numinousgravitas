import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { DetailHero } from "@/components/sections/DetailHero";
import { libraryCollections } from "@/content";

export function generateStaticParams() {
  return libraryCollections.map((collection) => ({ category: collection.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const collection = libraryCollections.find((c) => c.slug === category);
  return { title: collection?.title ?? "The Library" };
}

export default async function LibraryCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const collection = libraryCollections.find((c) => c.slug === category);
  if (!collection) notFound();

  return (
    <DetailHero
      kicker={`The Library · ${collection.index}`}
      title={collection.title}
      backHref="/library"
      backLabel="Back to the Library"
    >
      <Reveal delay={0.16}>
        <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted">
          {collection.description}
        </p>
      </Reveal>
      <Reveal delay={0.24}>
        <p className="mt-10 max-w-xl font-sans text-base text-muted">
          Entries in this collection are being assembled and will appear
          here as they are ready.
        </p>
      </Reveal>
    </DetailHero>
  );
}
