import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { DetailHero } from "@/components/sections/DetailHero";
import { portfolio } from "@/content";

export function generateStaticParams() {
  return portfolio.map((company) => ({ company: company.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ company: string }>;
}): Promise<Metadata> {
  const { company } = await params;
  const entry = portfolio.find((c) => c.slug === company);
  return { title: entry?.name ?? "Enterprise" };
}

export default async function PortfolioCompanyPage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const entry = portfolio.find((c) => c.slug === company);
  if (!entry) notFound();

  return (
    <DetailHero
      kicker={entry.kind}
      title={entry.name}
      backHref="/enterprise"
      backLabel="Back to Enterprise"
    >
      <Reveal delay={0.16}>
        <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted">
          {entry.description}
        </p>
      </Reveal>
      <Reveal delay={0.24} className="mt-10">
        <ArrowLink href={entry.href} external>
          Visit {entry.name}
        </ArrowLink>
      </Reveal>
    </DetailHero>
  );
}
