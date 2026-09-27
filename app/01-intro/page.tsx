import Source from "../_lib/Source";

export const metadata = { title: "01. .NET & First Program" };

export default function Page() {
  return (
    <>
      <h1>01. .NET & First Program</h1>
      <p>
        <strong>C#</strong> is the language you write. <strong>.NET</strong> is the platform
        that builds and runs it: a runtime, a huge standard library, and the <code>dotnet</code>{" "}
        command-line tool.
      </p>

      <h2>From code to running program</h2>
      <p>
        The C# compiler does not produce machine code. It produces{" "}
        <strong>IL (Intermediate Language)</strong>, packed into an assembly (<code>.dll</code>).
        When the program starts, the <strong>CLR (Common Language Runtime)</strong> compiles that IL
        into native code for your exact CPU. This step is called JIT (Just-In-Time) compilation.
      </p>
      <figure className="figure">
        <svg viewBox="0 0 760 130" role="img" aria-label="C# code is compiled to IL, then the CLR compiles IL to machine code">
          <g fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="1" y="30" width="150" height="56" rx="8" />
            <rect x="305" y="30" width="150" height="56" rx="8" stroke="var(--accent)" />
            <rect x="609" y="30" width="150" height="56" rx="8" />
            <path d="M155 58h144m-8-5 8 5-8 5M459 58h144m-8-5 8 5-8 5" />
          </g>
          <g fill="currentColor" fontSize="14" textAnchor="middle">
            <text x="76" y="63" fill="var(--fg)">Hello.cs</text>
            <text x="380" y="63" fill="var(--fg)">IL (.dll)</text>
            <text x="684" y="63" fill="var(--fg)">Machine code</text>
            <text x="227" y="46" fontSize="12">C# compiler</text>
            <text x="531" y="46" fontSize="12">CLR (JIT)</text>
            <text x="227" y="112" fontSize="12">build time</text>
            <text x="531" y="112" fontSize="12">run time</text>
          </g>
        </svg>
      </figure>
      <p>
        Because every .NET language compiles to the same IL, the same runtime runs it on Windows,
        macOS, and Linux.
      </p>

      <h2>Your first program</h2>
      <p>
        A C# program is a list of statements, each ending with a semicolon.{" "}
        <code>Console.WriteLine</code> prints a line of text. The <code>$</code> before a string
        lets you insert values with <code>{"{braces}"}</code>.
      </p>
      <Source file="app/01-intro/Hello.cs" />
      <p>
        Run it from the project folder with <code>dotnet run app/01-intro/Hello.cs</code>. Change
        the text, run it again.
      </p>

      <h2>The long form</h2>
      <p>
        The file above uses <strong>top-level statements</strong>, a shortcut. Behind the scenes the
        compiler wraps your code in a class with a <code>Main</code> method, the entry point of every
        program. Older tutorials write it out in full:
      </p>
      <Source file="app/01-intro/LongForm.cs" />
      <ul>
        <li>
          A <strong>class</strong> groups data and behavior. You will build your own in lesson 05.
        </li>
        <li>
          A <strong>namespace</strong> groups related classes, like a folder. <code>Console</code>{" "}
          lives in the <code>System</code> namespace.
        </li>
        <li>
          An <strong>assembly</strong> (<code>.dll</code> or <code>.exe</code>) is the compiled output
          of a project. An application is one or more assemblies.
        </li>
      </ul>

      <h2>Creating a real project</h2>
      <p>
        Single files are great for learning. Real apps are projects: a folder with a{" "}
        <code>.csproj</code> file that lists settings and packages.
      </p>
      <Source
        title="Terminal"
        lang="bash"
        code={`dotnet new console -n MyApp
cd MyApp
dotnet run`}
      />

      <div className="aspnet">
        <p>
          A Web API is just another .NET program. <code>dotnet new webapi</code> creates a project
          whose <code>Program.cs</code> also uses top-level statements:
        </p>
        <Source
          title="Program.cs"
          code={`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/hello", () => "Hello, World!");

app.Run();`}
        />
        <p>Same language, same runtime, same <code>dotnet run</code>. It just listens for HTTP requests instead of exiting.</p>
      </div>
    </>
  );
}
