import Source from "../_lib/Source";

export const metadata = { title: "03. Type Conversion" };

export default function Page() {
  return (
    <>
      <h1>03. Type Conversion</h1>
      <p>
        Because every variable has a fixed type, you often need to turn a value of one type into
        another: an <code>int</code> into a <code>double</code>, or the text <code>&quot;42&quot;</code>{" "}
        into the number 42. C# makes safe conversions easy and risky ones explicit.
      </p>

      <h2>Implicit conversion</h2>
      <p>
        When the target type can hold every possible value of the source type, C# converts{" "}
        <strong>implicitly</strong>, with no extra syntax. A <code>byte</code> always fits in an{" "}
        <code>int</code>, so nothing can be lost.
      </p>
      <Source file="app/03-type-conversion/Implicit.cs" />

      <h2>Explicit conversion (casting)</h2>
      <p>
        When data might be lost, the compiler refuses until you <strong>cast</strong>: put the
        target type in parentheses. The cast says &quot;I know, do it anyway&quot;. Decimals are
        cut off (not rounded), and numbers too big for the target wrap around.
      </p>
      <Source file="app/03-type-conversion/Explicit.cs" />

      <h2>Parse and Convert</h2>
      <p>
        Casting only works between compatible types. A <code>string</code> is not a number, so you
        cannot cast it. Instead, <code>Parse</code> reads text into a number, and the{" "}
        <code>Convert</code> class converts between many types. Note that{" "}
        <code>Convert.ToInt32</code> rounds, unlike a cast.
      </p>
      <Source file="app/03-type-conversion/ConvertParse.cs" />
      <p>
        If the text is not a valid number, <code>Parse</code> throws a{" "}
        <code>FormatException</code> and the program crashes unless you catch it. Exceptions get
        their own lesson later, for now just see what happens:
      </p>
      <Source file="app/03-type-conversion/BadInput.cs" />

      <h2>TryParse: the safe way</h2>
      <p>
        Input from users is often wrong. <code>TryParse</code> never throws. It returns{" "}
        <code>true</code> or <code>false</code>, and hands the parsed number back through an{" "}
        <code>out</code> variable. This is the pattern to use for anything you do not control.
      </p>
      <Source file="app/03-type-conversion/TryParse.cs" />

      <h2>Numbers to text</h2>
      <p>
        Every value has a <code>ToString()</code> method. Pass a <strong>format string</strong> to
        control how it looks: <code>N2</code> adds thousand separators and 2 decimals,{" "}
        <code>P1</code> shows a percentage, <code>D3</code> pads with zeros. The same codes work
        inside interpolated strings after a colon.
      </p>
      <Source file="app/03-type-conversion/ToStringFormat.cs" />
      <div className="tip">
        <p>
          Number formats follow the computer&apos;s culture. On a machine set to Indonesian,{" "}
          <code>1234.5m.ToString(&quot;N2&quot;)</code> prints <code>1.234,50</code>. Servers
          usually format data for machines, so APIs return raw numbers in JSON and let the client
          format them.
        </p>
      </div>

      <div className="aspnet">
        <p>
          ASP.NET Core converts for you. A route like <code>/products/42</code> arrives as text,
          and <strong>model binding</strong> turns it into an <code>int</code>. A route constraint
          such as <code>{"{id:int}"}</code> uses the TryParse idea: non-numbers never reach your code.
        </p>
        <Source
          title="Program.cs"
          code={`app.MapGet("/products/{id:int}", (int id) => $"Product {id}");`}
        />
      </div>
    </>
  );
}
