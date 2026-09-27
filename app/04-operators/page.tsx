import Quiz from "../_lib/Quiz";
import Source from "../_lib/Source";

export const metadata = { title: "04. Operators" };

export default function Page() {
  return (
    <>
      <h1>04. Operators</h1>
      <p>
        <strong>Operators</strong> are the symbols that combine values into new values:{" "}
        <code>+</code>, <code>==</code>, <code>&amp;&amp;</code>, and friends. Together with
        values and variables they form <strong>expressions</strong>, pieces of code that produce a
        result.
      </p>

      <h2>Arithmetic</h2>
      <p>
        The usual math, plus <code>%</code> (modulo) which gives the remainder of a division.
        Watch out: dividing two integers gives an integer, and the fraction is thrown away. Cast one
        side to <code>double</code> when you need the decimals.
      </p>
      <Source file="app/04-operators/Arithmetic.cs" />

      <h2>Increment and compound assignment</h2>
      <p>
        <code>++</code> adds 1 and <code>--</code> subtracts 1. Where you put them matters when the
        result is used: <code>x++</code> returns the old value, then increments.{" "}
        <code>++x</code> increments first. Compound operators like <code>+=</code> are shorthand
        for <code>total = total + 20</code>.
      </p>
      <Source file="app/04-operators/Increment.cs" />

      <h2>Comparison and logical operators</h2>
      <p>Comparisons produce a <code>bool</code>. Logical operators combine bools.</p>
      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>==</code> <code>!=</code></td><td>equal, not equal</td></tr>
          <tr><td><code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code></td><td>less / greater (or equal)</td></tr>
          <tr><td><code>&amp;&amp;</code></td><td>AND: true only if both sides are true</td></tr>
          <tr><td><code>||</code></td><td>OR: true if at least one side is true</td></tr>
          <tr><td><code>!</code></td><td>NOT: flips true and false</td></tr>
        </tbody>
      </table>
      <Source file="app/04-operators/Comparison.cs" />

      <h2>Short-circuit evaluation</h2>
      <p>
        <code>&amp;&amp;</code> stops as soon as the left side is <code>false</code>, and{" "}
        <code>||</code> stops as soon as it is <code>true</code>. The right side is never
        evaluated. This lets you put a safety check first, so the risky part only runs when it is
        safe.
      </p>
      <Source file="app/04-operators/ShortCircuit.cs" />

      <h2>Precedence</h2>
      <p>
        Like in math, <code>*</code> and <code>/</code> run before <code>+</code> and{" "}
        <code>-</code>, and <code>&amp;&amp;</code> runs before <code>||</code>. Do not memorize
        the full table: when in doubt, add parentheses. They make intent obvious to readers too.
      </p>
      <Source file="app/04-operators/Precedence.cs" />

      <h2>Null operators (a preview)</h2>
      <p>
        <code>null</code> means &quot;no value&quot;. Adding <code>?</code> to a type, as in{" "}
        <code>string?</code>, says the variable may be null. Two operators make null easy to
        handle:
      </p>
      <ul>
        <li>
          <code>a ?? b</code> gives <code>a</code>, or <code>b</code> if <code>a</code> is null.
        </li>
        <li>
          <code>a?.Length</code> reads <code>Length</code> only if <code>a</code> is not null,
          otherwise the whole expression is null instead of crashing.
        </li>
      </ul>
      <Source file="app/04-operators/NullOperators.cs" />
      <p>The intermediate course covers null safety in depth.</p>

      <div className="aspnet">
        <p>
          You will use these constantly in endpoints: <code>??</code> for default values of
          optional query parameters, and <code>&amp;&amp;</code> / <code>||</code> in validation
          checks and database filters.
        </p>
        <Source
          title="Program.cs"
          code={`app.MapGet("/products", (int? page, int? pageSize) =>
{
    var currentPage = page ?? 1;
    var size = pageSize ?? 20;
    return $"Page {currentPage}, {size} per page";
});`}
        />
      </div>

      <Quiz
        questions={[
          {
            q: "What is `7 / 2` when both are `int`?",
            options: [
              "3.5",
              "3",
              "4",
            ],
            answer: 1,
            explanation: "Integer division throws the fraction away. Cast one side to `double` to keep it.",
          },
          {
            q: "After `int x = 5; int y = x++;`, what is `y`?",
            options: [
              "5",
              "6",
              "4",
            ],
            answer: 0,
            explanation: "`x++` returns the old value, then increments. `x` is 6, `y` is 5.",
          },
          {
            q: "What is `name ?? \"Guest\"` when `name` is `null`?",
            options: [
              "`null`",
              "A `NullReferenceException`",
              "`\"Guest\"`",
            ],
            answer: 2,
            explanation: "`a ?? b` gives `b` whenever `a` is `null`.",
          },
        ]}
      />
    </>
  );
}
