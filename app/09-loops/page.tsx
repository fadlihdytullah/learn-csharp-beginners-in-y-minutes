import Quiz from "../_lib/Quiz";
import Source from "../_lib/Source";

export const metadata = { title: "09. Loops" };

export default function Page() {
  return (
    <>
      <h1>09. Loops</h1>
      <p>
        A <strong>loop</strong> repeats a block of code. C# has four:{" "}
        <code>for</code>, <code>foreach</code>, <code>while</code>, and <code>do-while</code>. They
        can all do the same job; each just reads best in a different situation.
      </p>

      <h2>for</h2>
      <p>
        Use <code>for</code> when you know how many times to repeat. The header has three parts,
        separated by semicolons: the <strong>initializer</strong> (<code>int i = 1</code>), the{" "}
        <strong>condition</strong> checked before each pass (<code>i &lt;= 5</code>), and the{" "}
        <strong>iterator</strong> run after each pass (<code>i++</code>).
      </p>
      <Source file="app/09-loops/ForLoop.cs" />

      <h2>foreach</h2>
      <p>
        <code>foreach</code> walks through every item of a collection: an array, a list, even the
        characters of a string. No counter, no index, no off-by-one mistakes. This is the loop you
        will write most often.
      </p>
      <Source file="app/09-loops/Foreach.cs" />

      <h2>while and do-while</h2>
      <p>
        Use <code>while</code> when you don&apos;t know the number of repetitions in advance, only the
        condition to keep going. It checks the condition <strong>before</strong> each pass, so the
        body may run zero times.
      </p>
      <p>
        <code>do-while</code> checks <strong>after</strong> each pass, so the body always runs at
        least once. Notice &quot;Attempt 1&quot; prints even though the condition is false from the
        start.
      </p>
      <Source file="app/09-loops/WhileLoops.cs" />

      <h2>break and continue</h2>
      <p>
        <code>continue</code> skips the rest of the current pass and jumps to the next one.{" "}
        <code>break</code> exits the loop entirely. Here, multiples of 3 are skipped and the loop
        stops once <code>i</code> passes 7.
      </p>
      <Source file="app/09-loops/BreakContinue.cs" />

      <h2>Random numbers</h2>
      <p>
        Loops and <code>Random</code> go well together. <code>random.Next(1, 7)</code> returns 1 to
        6: the lower bound is included, the upper bound is <strong>excluded</strong>. Casting a
        number to <code>char</code> turns it into a letter.
      </p>
      <Source file="app/09-loops/RandomPassword.cs" />
      <div className="tip">
        <p>
          The seed <code>42</code> makes the sequence repeatable, so this page shows the same output
          as your machine. Use <code>new Random()</code> or <code>Random.Shared</code> for real
          randomness, and never <code>Random</code> for real passwords or tokens: use{" "}
          <code>System.Security.Cryptography.RandomNumberGenerator</code>.
        </p>
      </div>

      <h2>Which loop?</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Loop</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Every item in a collection</td>
            <td><code>foreach</code></td>
          </tr>
          <tr>
            <td>Known count, or you need the index</td>
            <td><code>for</code></td>
          </tr>
          <tr>
            <td>Repeat until a condition changes</td>
            <td><code>while</code></td>
          </tr>
          <tr>
            <td>Same, but run at least once</td>
            <td><code>do-while</code></td>
          </tr>
        </tbody>
      </table>

      <div className="aspnet">
        <p>
          A typical endpoint loops over records to build a response. You will write{" "}
          <code>foreach</code> constantly, and later replace many loops with LINQ (intermediate
          course, lesson 17).
        </p>
        <Source
          title="Program.cs"
          code={`app.MapGet("/orders/total", () =>
{
    decimal total = 0;
    foreach (var order in orders)
        total += order.Amount;
    return Results.Ok(new { total });
});`}
        />
      </div>

      <Quiz
        questions={[
          {
            q: "Which loop always runs its body at least once?",
            options: [
              "`while`",
              "`do-while`",
              "`for`",
            ],
            answer: 1,
            explanation: "`do-while` checks the condition after each pass.",
          },
          {
            q: "What can `random.Next(1, 7)` return?",
            options: [
              "1 to 7",
              "0 to 6",
              "1 to 6",
            ],
            answer: 2,
            explanation: "The lower bound is included and the upper bound is excluded.",
          },
          {
            q: "What does `continue` do?",
            options: [
              "Skips the rest of the current pass and moves to the next",
              "Exits the loop",
              "Restarts the loop from the beginning",
            ],
            answer: 0,
            explanation: "`break` is the one that exits the loop entirely.",
          },
        ]}
      />
    </>
  );
}
