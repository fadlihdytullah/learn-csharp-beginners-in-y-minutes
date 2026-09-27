import Source from "../_lib/Source";

export const metadata = { title: "12. Strings & Text" };

export default function Page() {
  return (
    <>
      <h1>12. Strings & Text</h1>
      <p>
        Names, emails, URLs, JSON: most data a backend touches is text. A{" "}
        <strong>string</strong> is a sequence of characters, and the <code>string</code> type comes
        with dozens of methods to search, slice, and reshape it.
      </p>

      <h2>Strings are immutable</h2>
      <p>
        Once created, a string <strong>never changes</strong>. Methods like <code>ToUpper</code>{" "}
        return a <em>new</em> string and leave the original alone. Forgetting to use the result is a
        common beginner bug.
      </p>
      <Source file="app/12-strings/Immutability.cs" />

      <h2>Common methods</h2>
      <p>
        These cover most everyday work. Indexes start at <code>0</code>, and{" "}
        <code>IndexOf</code> returns <code>-1</code> when nothing is found. Comparisons are
        case-sensitive unless you pass a <code>StringComparison</code>.
      </p>
      <Source file="app/12-strings/StringMethods.cs" />
      <div className="tip">
        <p>
          Check user input with <code>string.IsNullOrWhiteSpace</code>. It catches{" "}
          <code>null</code>, <code>&quot;&quot;</code>, and <code>&quot;   &quot;</code> in one call.
        </p>
      </div>

      <h2>Split and Join</h2>
      <p>
        <code>Split</code> breaks a string into an array at a separator. <code>string.Join</code>{" "}
        glues an array back together. The options <code>RemoveEmptyEntries</code> and{" "}
        <code>TrimEntries</code> clean up messy input like extra commas and spaces.
      </p>
      <Source file="app/12-strings/SplitJoin.cs" />

      <h2>Formatting numbers</h2>
      <p>
        Inside interpolation, add a <strong>format specifier</strong> after a colon:{" "}
        <code>F2</code> two decimals, <code>N0</code> thousands separators, <code>P1</code> percent,{" "}
        <code>D5</code> pad with zeros. A number after a comma sets the width: negative aligns left,
        positive aligns right.
      </p>
      <Source file="app/12-strings/Formatting.cs" />

      <h2>Escapes, verbatim, and raw strings</h2>
      <ul>
        <li>
          <strong>Escape sequences</strong> start with a backslash: <code>\n</code> new line,{" "}
          <code>\t</code> tab, <code>\&quot;</code> quote, <code>\\</code> backslash.
        </li>
        <li>
          A <strong>verbatim string</strong> <code>@&quot;...&quot;</code> ignores escapes. Handy for
          Windows paths.
        </li>
        <li>
          A <strong>raw string literal</strong> <code>&quot;&quot;&quot;...&quot;&quot;&quot;</code>{" "}
          keeps everything as written, quotes included. Perfect for JSON. The indentation of the
          closing quotes is removed from every line. Add <code>$$</code> to interpolate with{" "}
          <code>{"{{double braces}}"}</code>, so single braces stay plain JSON.
        </li>
      </ul>
      <Source file="app/12-strings/SpecialStrings.cs" />

      <h2>StringBuilder</h2>
      <p>
        Because strings are immutable, building one with <code>+=</code> in a loop creates a new
        string on every pass. A <strong>StringBuilder</strong> is a mutable buffer: append as much as
        you like, then call <code>ToString</code> once at the end. Reach for it when you build text
        in a loop.
      </p>
      <Source file="app/12-strings/Builder.cs" />

      <h2>Exercise: summarize text</h2>
      <p>
        Put it together: shorten a long text to a maximum length without cutting a word in half.{" "}
        <code>LastIndexOf(&apos; &apos;, maxLength)</code> searches backwards for the last space
        that fits, and the range <code>text[..cut]</code> keeps everything before it.
      </p>
      <Source file="app/12-strings/Summarize.cs" />

      <div className="aspnet">
        <p>
          Strings arrive in every request: route values, query strings, headers. Validate and
          normalize them before using them:
        </p>
        <Source
          title="Program.cs"
          code={`app.MapGet("/search", (string? q) =>
{
    if (string.IsNullOrWhiteSpace(q))
        return Results.BadRequest("q is required");

    return Results.Ok($"Searching for '{q.Trim()}'");
});`}
        />
      </div>
    </>
  );
}
