import Source from "../_lib/Source";

export const metadata = { title: "08. Conditionals" };

export default function Page() {
  return (
    <>
      <h1>08. Conditionals</h1>
      <p>
        Programs make decisions. <strong>Conditionals</strong> run a block of code only when a
        condition is <code>true</code>. C# gives you four tools: <code>if</code>,{" "}
        <code>switch</code> statements, <code>switch</code> expressions, and the ternary{" "}
        <code>?:</code> operator.
      </p>

      <h2>if, else if, else</h2>
      <p>
        C# checks each condition from top to bottom and runs the <strong>first</strong> block whose
        condition is true. The <code>else</code> block runs when none match. The condition must be
        a <code>bool</code>: C# does not treat <code>0</code> or <code>null</code> as false.
      </p>
      <Source file="app/08-conditionals/IfElse.cs" />
      <div className="tip">
        <p>
          Braces are optional for a single statement, as in the last <code>if</code>. Many teams
          always use them anyway: adding a second line later without braces is a classic bug.
        </p>
      </div>

      <h2>switch statements</h2>
      <p>
        When you compare <strong>one value</strong> against many options, a <code>switch</code> reads
        better than a long <code>if</code> chain. Stack several <code>case</code> labels to share one
        block. Every section must end with <code>break</code> (or <code>return</code>): C# does not
        let execution fall through to the next case by accident.
      </p>
      <Source file="app/08-conditionals/SwitchStatement.cs" />

      <h2>switch expressions</h2>
      <p>
        Most of the time you use a switch to <em>pick a value</em>. A <strong>switch
        expression</strong> does exactly that, with far less ceremony. Each arm is{" "}
        <code>pattern =&gt; result</code>, and <code>_</code> matches anything else.
      </p>
      <p>
        Patterns can be <strong>relational</strong> (<code>&gt;= 90</code>) and combined with{" "}
        <code>and</code>, <code>or</code>, and <code>not</code>. Arms are checked in order, so put the
        most specific first.
      </p>
      <Source file="app/08-conditionals/SwitchExpression.cs" />

      <h2>The ternary operator</h2>
      <p>
        <code>condition ? a : b</code> is a one-line <code>if/else</code> that returns a value. Use it
        for short choices. If you need to nest it, switch to <code>if</code> or a switch expression
        instead.
      </p>
      <Source file="app/08-conditionals/Ternary.cs" />

      <div className="aspnet">
        <p>
          Endpoints decide which HTTP response to send. A missing item becomes a{" "}
          <code>404</code>, a found one a <code>200</code>:
        </p>
        <Source
          title="Program.cs"
          code={`app.MapGet("/products/{id}", (int id) =>
{
    var product = products.Find(p => p.Id == id);
    return product is null ? Results.NotFound() : Results.Ok(product);
});`}
        />
      </div>
    </>
  );
}
