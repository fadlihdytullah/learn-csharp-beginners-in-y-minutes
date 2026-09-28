"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessons } from "./lessons";

const link =
  "flex flex-col gap-0.5 rounded-[10px] border px-4 py-3.5 font-medium no-underline transition-colors hover:border-border-strong hover:bg-surface";
const label = "text-[12px] font-normal text-fg-subtle";

export default function PrevNext() {
  const pathname = usePathname();
  const i = lessons.findIndex((l) => pathname.startsWith(`/${l.slug}`));
  if (i === -1) return null;

  const prev = lessons[i - 1];
  const next = lessons[i + 1];
  return (
    <nav className="grid grid-cols-2 gap-3 pt-8 [main>&]:mt-12" aria-label="Lesson pagination">
      {prev ? (
        <Link href={`/${prev.slug}`} className={link}>
          <span className={label}>← Previous</span>
          {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={`/${next.slug}`} className={`${link} text-right`}>
          <span className={label}>Next →</span>
          {next.title}
        </Link>
      )}
    </nav>
  );
}
