import Quiz from "../_lib/Quiz";
import Source from "../_lib/Source";

export const metadata = { title: "02. Variables & Types" };

export default function Page() {
  return (
    <>
      <h1>02. Variables & Types</h1>
      <p>
        A <strong>variable</strong> is a named box in memory that holds a value. In C# every box has
        a fixed <strong>type</strong>, so the compiler knows what fits inside and stops mistakes
        before your program ever runs.
      </p>

      <h2>Declaring variables</h2>
      <p>
        Write the type, a name, and optionally an initial value. You can change the value later,
        but never the type. With <code>var</code>, the compiler infers the type from the value on
        the right. It is still strongly typed: <code>city</code> is a <code>string</code> forever.
      </p>
      <Source file="app/02-variables/Variables.cs" />
      <p>
        Naming convention: local variables use <strong>camelCase</strong> (<code>isAdmin</code>).
        Types and constants use <strong>PascalCase</strong> (<code>MaxLoginAttempts</code>).
      </p>

      <h2>Constants</h2>
      <p>
        A <strong>constant</strong> is a value that never changes. Mark it with <code>const</code>.
        The compiler rejects any attempt to reassign it, and readers instantly know it is fixed.
      </p>
      <Source file="app/02-variables/Constants.cs" />

      <h2>Primitive types</h2>
      <p>
        These are the built-in types you will use every day. Pick the smallest one that safely fits
        your data, but in practice <code>int</code>, <code>double</code>, <code>decimal</code>,{" "}
        <code>bool</code>, and <code>string</code> cover most code.
      </p>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Size</th>
            <th>Holds</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>byte</code></td><td>1 byte</td><td>0 to 255</td></tr>
          <tr><td><code>short</code></td><td>2 bytes</td><td>-32,768 to 32,767</td></tr>
          <tr><td><code>int</code></td><td>4 bytes</td><td>about ±2.1 billion</td></tr>
          <tr><td><code>long</code></td><td>8 bytes</td><td>about ±9.2 quintillion</td></tr>
          <tr><td><code>float</code></td><td>4 bytes</td><td>~7 digits of precision</td></tr>
          <tr><td><code>double</code></td><td>8 bytes</td><td>~15 digits of precision</td></tr>
          <tr><td><code>decimal</code></td><td>16 bytes</td><td>~28 exact decimal digits</td></tr>
          <tr><td><code>char</code></td><td>2 bytes</td><td>one Unicode character</td></tr>
          <tr><td><code>bool</code></td><td>1 byte</td><td><code>true</code> or <code>false</code></td></tr>
        </tbody>
      </table>
      <p>
        Number literals need a suffix when they are not the default: <code>L</code> for{" "}
        <code>long</code>, <code>f</code> for <code>float</code>, <code>m</code> for{" "}
        <code>decimal</code>. Underscores in numbers are ignored, they just help readability.
      </p>
      <Source file="app/02-variables/Types.cs" />
      <p>
        <code>string</code> is not in the table. It is a class, not a primitive, but it is so common
        that C# gives it a keyword and literal syntax. More in lesson 12.
      </p>

      <h2>decimal for money</h2>
      <p>
        <code>float</code> and <code>double</code> store numbers in binary, so values like 0.1 are
        only approximated. <code>decimal</code> stores them in base 10, exactly. It is slower, but
        for prices and balances, correct beats fast.
      </p>
      <Source file="app/02-variables/Money.cs" />

      <h2>Overflow</h2>
      <p>
        When a value grows past its type&apos;s maximum, it silently wraps around to the minimum.
        Wrap a risky calculation in <code>checked</code> to throw an error instead of getting a
        wrong number.
      </p>
      <Source file="app/02-variables/Overflow.cs" />

      <h2>Scope</h2>
      <p>
        A variable only exists inside the <strong>block</strong> (<code>{"{ }"}</code>) where it
        was declared. <code>bonus</code> disappears after its closing brace;{" "}
        <code>total</code>, declared outside, lives on.
      </p>
      <Source file="app/02-variables/Scope.cs" />

      <div className="aspnet">
        <p>
          API models are classes built from these types. Use <code>decimal</code> for money,{" "}
          <code>int</code> or <code>long</code> for IDs, and <code>bool</code> for flags. They map
          directly to database columns and JSON values.
        </p>
        <Source
          title="Product.cs"
          code={`public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public decimal Price { get; set; }
    public bool InStock { get; set; }
}`}
        />
      </div>

      <Quiz
        questions={[
          {
            q: "After `var city = \"Bandung\";`, what is the type of `city`?",
            options: [
              "Anything: var can change type later",
              "`string`, forever",
              "`object`",
            ],
            answer: 1,
            explanation: "`var` infers the type once from the value. The variable stays strongly typed.",
          },
          {
            q: "Which type should hold a product price?",
            options: [
              "`double`",
              "`float`",
              "`decimal`",
            ],
            answer: 2,
            explanation: "`decimal` stores base-10 values exactly. `double` only approximates values like 0.1.",
          },
          {
            q: "An `int` grows past its maximum outside a `checked` block. What happens?",
            options: [
              "It silently wraps around to the minimum",
              "The program throws an error",
              "It turns into a `long`",
            ],
            answer: 0,
            explanation: "Overflow wraps silently. Wrap risky math in `checked` to get an error instead.",
          },
        ]}
      />
    </>
  );
}
