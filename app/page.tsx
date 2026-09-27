import Link from "next/link";
import Continue from "./_lib/Continue";
import { lessons } from "./_lib/lessons";
import PixelTitle from "./_lib/PixelTitle";
import Source from "./_lib/Source";

export default function Home() {
  return (
    <>
      <p className="announce">
        <span className="pill">Part 1</span> Beginners · the C# you need before ASP.NET Core
      </p>

      <PixelTitle lines={["learn c#", "in y minutes"]} label="Learn C# in Y minutes" />
      <p className="lead">
        Fourteen short lessons. Each one explains an idea in a few sentences, shows a
        small program, and prints what that program outputs. Every example is a real
        file you can run and change.
      </p>

      <ul className="checks">
        <li>Runnable with dotnet run</li>
        <li>Modern C# 14</li>
        <li>Built toward Web APIs</li>
      </ul>

      <Continue />

      <Source title="Run any example" lang="bash" code="dotnet run app/01-intro/Hello.cs" />

      <ol className="steps">
        {lessons.map((l, i) => (
          <li key={l.slug}>
            <span className="step-num">{i + 1}</span>
            <Link href={`/${l.slug}`}>{l.title}</Link>
            <p>{l.blurb}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
