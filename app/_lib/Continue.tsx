"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { lessons } from "./lessons";
import { useProgress } from "./progress";

export default function Continue() {
  const done = useProgress();
  const count = lessons.filter((l) => done.includes(l.slug)).length;
  if (count === 0) return null;

  const next = lessons.find((l) => !done.includes(l.slug));
  return (
    <p className="flex flex-wrap items-center gap-3 text-[14px]">
      <Badge>
        {count}/{lessons.length} completed
      </Badge>
      {next ? <Link href={`/${next.slug}`}>Continue: {next.title} →</Link> : "All lessons done. Nice work!"}
    </p>
  );
}
