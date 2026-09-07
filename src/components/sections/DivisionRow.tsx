import Link from "next/link";
import { Division } from "@/content";

export function DivisionRow({ division }: { division: Division }) {
  return (
    <Link
      href={`/${division.slug}`}
      className="group grid grid-cols-[auto_1fr] sm:grid-cols-[80px_1fr_2fr_40px] items-baseline sm:items-center gap-x-6 gap-y-2 border-b border-hairline py-8 sm:py-10 transition-transform duration-500 ease-[var(--ease-editorial)] hover:-translate-y-0 sm:hover:translate-x-3"
    >
      <span className="font-sans text-xs text-muted tracking-[0.1em]">
        {division.index}
      </span>
      <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] leading-[1.05] text-ink">
        {division.name}
      </h3>
      <p className="col-span-2 sm:col-span-1 max-w-md font-sans text-sm sm:text-base text-muted leading-relaxed">
        {division.philosophy}
      </p>
      <span className="hidden sm:inline-block justify-self-end font-serif text-2xl text-ink transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-2">
        →
      </span>
    </Link>
  );
}
