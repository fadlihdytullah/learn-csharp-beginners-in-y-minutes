"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { lessons } from "./lessons";
import { useProgress } from "./progress";

export default function Nav() {
  const pathname = usePathname();
  const done = useProgress();

  useEffect(() => {
    document
      .querySelector('nav[aria-label="Lessons"] [aria-current="page"]')
      ?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [pathname]);

  return (
    <nav aria-label="Lessons">
      <ol className="flex list-none flex-col gap-0.5 max-nav:flex-row">
        {lessons.map((l, i) => (
          <li key={l.slug} className="group/item">
            {l.section !== lessons[i - 1]?.section && <p className="mx-2.5 mb-1.5 text-[12px] text-fg-subtle group-not-first/item:mt-[18px] max-nav:hidden">{l.section}</p>}
            <Link
              href={`/${l.slug}`}
              aria-current={pathname.startsWith(`/${l.slug}`) ? "page" : undefined}
              className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[14px] whitespace-nowrap text-fg-muted no-underline transition-colors hover:text-fg aria-[current=page]:bg-surface-2 aria-[current=page]:text-fg"
            >
              <span className="font-mono text-[12px] text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
              {l.title}
              {done.includes(l.slug) && (
                <span className="ml-auto text-[12px] text-success" aria-label="completed">
                  ✓
                </span>
              )}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
