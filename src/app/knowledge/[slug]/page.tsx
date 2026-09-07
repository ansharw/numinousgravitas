import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { DetailHero } from "@/components/sections/DetailHero";
import { essays } from "@/content";

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);
  return { title: essay?.title ?? "Knowledge" };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);
  if (!essay) notFound();

  return (
    <DetailHero
      kicker={essay.field}
      title={essay.title}
      backHref="/knowledge"
      backLabel="Back to Knowledge"
    >
      <Reveal delay={0.16}>
        <p className="mt-10 max-w-xl font-serif text-xl sm:text-2xl leading-relaxed text-ink/80">
          {essay.excerpt}
        </p>
      </Reveal>
      <Reveal delay={0.24}>
        <p className="mt-10 max-w-xl font-sans text-base text-muted">
          The full essay is in preparation and will be published to the
          Library in due course.
        </p>
      </Reveal>
    </DetailHero>
  );
}
