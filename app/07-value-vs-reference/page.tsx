import Figure from "../_lib/Figure";
import Quiz from "../_lib/Quiz";
import Source from "../_lib/Source";

export const metadata = { title: "07. Value vs Reference" };

export default function Page() {
  return (
    <>
      <h1>07. Value vs Reference</h1>
      <p>
        Every type in C# is either a <strong>value type</strong> or a <strong>reference type</strong>.
        The difference decides what happens when you copy a variable or pass it to a method. It is
        the source of many beginner bugs, so it is worth getting right early.
      </p>

      <h2>Value types: copies</h2>
      <p>
        Primitives (<code>int</code>, <code>double</code>, <code>bool</code>...), structs, and
        enums are value types. The variable holds the value itself. Assigning it to another
        variable copies the value, and from then on the two live separate lives.
      </p>
      <Source file="app/07-value-vs-reference/ValueCopy.cs" />

      <h2>Reference types: shared objects</h2>
      <p>
        Classes, arrays, and strings are reference types. The object lives elsewhere in memory, and
        the variable only holds a <strong>reference</strong> to it, like an address. Assigning it
        copies the address, not the object. Both variables now point at the same object, so a
        change through one is visible through the other.
      </p>
      <Source file="app/07-value-vs-reference/ReferenceCopy.cs" />
      <Figure
        src="value-vs-reference.png"
        alt="Left: a sheet with 42 is photocopied and only the copy is scribbled on. Right: two people hold cards with the same address pointing to one house whose door is repainted."
        caption="Copying a value makes a photocopy. Copying a reference shares the address of one house."
      />

      <h2>Stack and heap</h2>
      <p>
        Under the hood, local variables live on the <strong>stack</strong>, a fast, short-lived
        memory area. Objects created with <code>new</code> live on the <strong>heap</strong>, a
        larger area cleaned up automatically by the <strong>garbage collector</strong> once nothing
        references them anymore.
      </p>
      <figure className="figure">
        <svg viewBox="0 0 760 250" role="img" aria-label="Stack holds a = 10, b = 11, and two references p1 and p2 that both point to one Person object on the heap">
          <defs>
            <marker id="vr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 10 5 0 10z" fill="currentColor" />
            </marker>
          </defs>
          <g fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="40" y="36" width="240" height="190" rx="10" strokeDasharray="4 4" />
            <rect x="440" y="36" width="280" height="190" rx="10" strokeDasharray="4 4" />
            <rect x="60" y="56" width="200" height="30" rx="6" />
            <rect x="60" y="96" width="200" height="30" rx="6" />
            <rect x="60" y="136" width="200" height="30" rx="6" />
            <rect x="60" y="176" width="200" height="30" rx="6" />
            <rect x="490" y="106" width="180" height="70" rx="8" stroke="var(--accent)" />
            <path d="M244 151 486 133M244 191 486 151" markerEnd="url(#vr-arrow)" />
          </g>
          <circle cx="244" cy="151" r="3" fill="currentColor" />
          <circle cx="244" cy="191" r="3" fill="currentColor" />
          <g fill="var(--fg)" fontSize="14">
            <text x="160" y="26" textAnchor="middle" fill="currentColor" fontSize="12">stack</text>
            <text x="580" y="26" textAnchor="middle" fill="currentColor" fontSize="12">heap</text>
            <text x="76" y="76">a</text>
            <text x="244" y="76" textAnchor="end">10</text>
            <text x="76" y="116">b</text>
            <text x="244" y="116" textAnchor="end">11</text>
            <text x="76" y="156">p1</text>
            <text x="76" y="196">p2</text>
            <text x="580" y="134" textAnchor="middle">Person</text>
            <text x="580" y="158" textAnchor="middle" fill="currentColor" fontSize="12">Name: &quot;Ada&quot;, Age: 37</text>
          </g>
        </svg>
        <figcaption>a and b are two separate values. p1 and p2 are two references to one object.</figcaption>
      </figure>

      <h2>Passing to methods</h2>
      <p>
        The same rule applies when you pass arguments. A method receives a copy of a value type, so
        it cannot change your variable. It receives a copy of the reference for a reference type, so
        it can change the object you gave it.
      </p>
      <Source file="app/07-value-vs-reference/PassToMethod.cs" />

      <h2>Struct vs class, side by side</h2>
      <p>
        This is the real difference between the struct and the class from lesson 06. Same fields,
        same code, different result:
      </p>
      <Source file="app/07-value-vs-reference/StructVsClass.cs" />
      <div className="tip">
        <p>
          <code>string</code> is a reference type that behaves like a value: it can never be
          modified. Methods like <code>ToUpper()</code> return a new string instead, so sharing one
          is always safe.
        </p>
      </div>

      <div className="aspnet">
        <p>
          In a Web API, services and database contexts are objects shared by reference across your
          code. When a method receives an entity and changes it, it changes the one object that
          Entity Framework Core is tracking, which is exactly how updates get saved.
        </p>
        <Source
          title="ProductService.cs"
          code={`public void ApplyDiscount(Product product, decimal percent)
{
    product.Price -= product.Price * percent / 100;
}`}
        />
      </div>

      <Quiz
        questions={[
          {
            q: "`Person` is a class. After `var p2 = p1; p2.Age = 40;`, what is `p1.Age`?",
            options: [
              "40",
              "Unchanged",
              "A compile error",
            ],
            answer: 0,
            explanation: "Both variables hold a reference to the same object, so a change through one shows through the other.",
          },
          {
            q: "Which of these is a reference type?",
            options: [
              "`int`",
              "`DateTime`",
              "`int[]`",
            ],
            answer: 2,
            explanation: "Arrays, classes, and strings are reference types. `int` and `DateTime` are value types.",
          },
          {
            q: "After `name.ToUpper();` (result unused), what is `name`?",
            options: [
              "Uppercase",
              "Unchanged",
              "`null`",
            ],
            answer: 1,
            explanation: "Strings can never be modified. `ToUpper` returns a new string that you have to use.",
          },
        ]}
      />
    </>
  );
}
