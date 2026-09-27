import Quiz from "../_lib/Quiz";
import Source from "../_lib/Source";

export const metadata = { title: "14. Debugging" };

export default function Page() {
  return (
    <>
      <h1>14. Debugging</h1>
      <p>
        Every program has bugs. <strong>Debugging</strong> is finding out why the code does what it
        does instead of what you meant. A debugger lets you pause a running program, look at every
        variable, and move forward one line at a time.
      </p>

      <h2>A buggy program</h2>
      <p>
        This method should return the 3 smallest numbers. The output is wrong twice: it returns the{" "}
        <em>largest</em> numbers, and it destroys the caller&apos;s list. Try to spot the bugs before
        reading on.
      </p>
      <Source file="app/14-debugging/Buggy.cs" />

      <h2>Breakpoints and stepping</h2>
      <p>
        A <strong>breakpoint</strong> is a marker on a line: when execution reaches it, the program
        pauses. Click in the gutter left of the line number, or press the shortcut. Then step through
        the code:
      </p>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>VS Code / Visual Studio</th>
            <th>Rider (macOS keymap)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Toggle breakpoint</td>
            <td><code>F9</code></td>
            <td><code>⌘F8</code></td>
          </tr>
          <tr>
            <td>Start debugging</td>
            <td><code>F5</code></td>
            <td><code>⌃D</code></td>
          </tr>
          <tr>
            <td>Step over: run the line, don&apos;t enter methods</td>
            <td><code>F10</code></td>
            <td><code>F8</code></td>
          </tr>
          <tr>
            <td>Step into: enter the method on this line</td>
            <td><code>F11</code></td>
            <td><code>F7</code></td>
          </tr>
          <tr>
            <td>Step out: finish this method, return to the caller</td>
            <td><code>⇧F11</code></td>
            <td><code>⇧F8</code></td>
          </tr>
          <tr>
            <td>Continue to the next breakpoint</td>
            <td><code>F5</code></td>
            <td><code>⌘⌥R</code></td>
          </tr>
        </tbody>
      </table>
      <p>
        With the C# Dev Kit extension, VS Code can debug a single file like these examples: open it,
        set a breakpoint, press <code>F5</code>. If your setup can&apos;t, run{" "}
        <code>dotnet project convert Buggy.cs</code> to turn the file into a normal project.
      </p>

      <h2>Inspecting state</h2>
      <p>While paused, the debugger panels answer &quot;what is going on right now?&quot;:</p>
      <ul>
        <li>
          <strong>Locals</strong> (Variables): every variable in the current method and its value.
        </li>
        <li>
          <strong>Watch</strong>: expressions you type yourself, like <code>list.Count</code> or{" "}
          <code>list[i] &gt; min</code>, re-evaluated at every step.
        </li>
        <li>
          <strong>Call Stack</strong>: the chain of method calls that led here. Top-level code calls{" "}
          <code>GetSmallests</code>, which calls <code>GetSmallest</code>.
        </li>
      </ul>
      <p>
        Put a breakpoint inside <code>GetSmallest</code> and watch <code>min</code>. It only ever
        grows, which points straight at the <code>&gt;</code> that should be <code>&lt;</code>. The
        second bug shows in the Watch panel too: <code>numbers.Count</code> shrinks with every{" "}
        <code>list.Remove</code>, because the method works on the caller&apos;s list, not a copy.
      </p>
      <div className="tip">
        <p>
          In a loop of 10,000 passes, stepping to the interesting one is painful. Right-click a
          breakpoint and add a <strong>condition</strong> like <code>i == 3</code>: it only pauses when
          the condition is true.
        </p>
      </div>

      <h2>Defensive programming</h2>
      <p>
        Better than finding bugs is making them fail loudly and early. <strong>Guard
        clauses</strong> check a method&apos;s inputs at the very top and throw immediately if they
        are invalid, instead of crashing somewhere deeper with a confusing error.
      </p>
      <p>
        .NET has one-line guards built in: <code>ArgumentNullException.ThrowIfNull</code>,{" "}
        <code>ArgumentOutOfRangeException.ThrowIfNegative</code>, <code>ThrowIfNegativeOrZero</code>,{" "}
        <code>ThrowIfGreaterThan</code>, and{" "}
        <code>ArgumentException.ThrowIfNullOrWhiteSpace</code> for strings. The fixed version also
        copies the list, so the caller&apos;s data is left untouched.
      </p>
      <Source file="app/14-debugging/Fixed.cs" />

      <div className="aspnet">
        <p>
          Start the API with the debugger attached (<code>F5</code>) and put a breakpoint inside an
          endpoint: it pauses when a request arrives, so you can inspect the incoming data. For
          what happens in production, where no debugger runs, inject an <code>ILogger&lt;T&gt;</code>{" "}
          and log instead:
        </p>
        <Source
          title="Program.cs"
          code={`app.MapGet("/orders/{id}", (int id, ILogger<Program> logger) =>
{
    logger.LogInformation("Fetching order {OrderId}", id);
    return Results.Ok(new { id });
});`}
        />
      </div>

      <Quiz
        questions={[
          {
            q: "What does Step over do?",
            options: [
              "Runs the current line without entering methods",
              "Enters the method on the current line",
              "Finishes the current method",
            ],
            answer: 0,
            explanation: "Step into enters the method; Step out finishes it and returns to the caller.",
          },
          {
            q: "How do you pause only on pass `i == 3` of a long loop?",
            options: [
              "Add a breakpoint for every pass",
              "A conditional breakpoint",
              "Add `Console.WriteLine` calls",
            ],
            answer: 1,
            explanation: "Right-click a breakpoint and add a condition: it only pauses when the condition is true.",
          },
          {
            q: "What is a guard clause?",
            options: [
              "A try/catch around the whole method",
              "Code that hides errors from users",
              "A check at the top of a method that throws early on invalid input",
            ],
            answer: 2,
            explanation: "Fail loudly and early, for example with `ArgumentNullException.ThrowIfNull`.",
          },
        ]}
      />
    </>
  );
}
