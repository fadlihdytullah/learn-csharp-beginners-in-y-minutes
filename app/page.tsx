import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Continue from "./_lib/Continue";
import { lessons } from "./_lib/lessons";
import PixelTitle from "./_lib/PixelTitle";
import Source from "./_lib/Source";

export default function Home() {
  return (
    <>
      <p className="flex items-center gap-3 text-[14px]">
        <Badge>Part 1</Badge> Beginners · the C# you need before ASP.NET Core
      </p>

      <PixelTitle lines={["learn c#", "in y minutes"]} label="Learn C# in Y minutes" />
      <p className="max-w-[600px] text-[17px]">
        Fourteen short lessons. Each one explains an idea in a few sentences, shows a
        small program, and prints what that program outputs. Every example is a real
        file you can run and change.
      </p>

      <ul className="flex list-none flex-wrap gap-x-6 gap-y-2 p-0 text-[14px] [&>li]:before:mr-2 [&>li]:before:text-fg-subtle [&>li]:before:content-['✓']">
        <li>Runnable with dotnet run</li>
        <li>Modern C# 14</li>
        <li>Built toward Web APIs</li>
      </ul>

      <Continue />

      <Source title="Run any example" lang="bash" code="dotnet run app/01-intro/Hello.cs" />

      <ol className="mt-12 list-none p-0">
        {lessons.map((l, i) => (
          <li
            key={l.slug}
            className="relative pb-7 pl-[52px] not-last:before:absolute not-last:before:top-[34px] not-last:before:bottom-1.5 not-last:before:left-[15px] not-last:before:w-px not-last:before:bg-border-strong not-last:before:content-['']"
          >
            <span className="absolute top-0 left-0 grid size-[31px] place-items-center rounded-full border border-border-strong bg-surface text-[13px] text-fg-muted">
              {i + 1}
            </span>
            <Link href={`/${l.slug}`} className="mt-[3px] inline-block font-medium no-underline hover:underline">
              {l.title}
            </Link>
            <p className="mt-0.5">{l.blurb}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
