import Source from "../_lib/Source";

export const metadata = { title: "10. Arrays & Lists" };

export default function Page() {
  return (
    <>
      <h1>10. Arrays & Lists</h1>
      <p>
        Most programs work with <em>many</em> values: users, orders, scores. C# stores them in
        collections. The two you will use every day are the <strong>array</strong> (fixed size) and
        the <strong>List&lt;T&gt;</strong> (grows and shrinks).
      </p>

      <h2>Arrays</h2>
      <p>
        An <strong>array</strong> holds a fixed number of values of one type. You choose the size when
        you create it, and it never changes. Elements are numbered from <code>0</code>, and unset
        elements get the type&apos;s default value (<code>0</code> for numbers).
      </p>
      <ul>
        <li>
          <code>[&quot;Ada&quot;, &quot;Linus&quot;]</code> is a <strong>collection expression</strong>: create
          and fill in one step.
        </li>
        <li>
          <code>^1</code> counts from the end: the last element.
        </li>
        <li>
          <code>1..4</code> is a <strong>range</strong>: from index 1 up to, but not including, 4.
        </li>
      </ul>
      <Source file="app/10-arrays-lists/Arrays.cs" />
      <div className="tip">
        <p>
          Reading <code>scores[3]</code> in a 3-element array throws an{" "}
          <code>IndexOutOfRangeException</code>. The valid indexes are <code>0</code> to{" "}
          <code>Length - 1</code>.
        </p>
      </div>

      <h2>Multi-dimensional arrays</h2>
      <p>
        A <strong>rectangular</strong> array (<code>int[,]</code>) is a grid: every row has the same
        length. A <strong>jagged</strong> array (<code>int[][]</code>) is an array of arrays, so each
        row can have a different length. You will rarely need either in web APIs, but you should
        recognize them.
      </p>
      <Source file="app/10-arrays-lists/MultiDimensional.cs" />

      <h2>Array methods</h2>
      <p>
        The <code>Array</code> class has static helpers for common jobs. <code>IndexOf</code>{" "}
        returns <code>-1</code> when the value is missing. <code>Sort</code>, <code>Reverse</code>, and{" "}
        <code>Clear</code> change the array in place.
      </p>
      <Source file="app/10-arrays-lists/ArrayMethods.cs" />

      <h2>List&lt;T&gt;</h2>
      <p>
        A <strong>List&lt;T&gt;</strong> is like an array that resizes itself. The <code>T</code> is
        the type of the items: <code>List&lt;string&gt;</code>, <code>List&lt;int&gt;</code>. Use a
        list whenever you don&apos;t know the final size up front, which is most of the time.
      </p>
      <p>
        Note the naming: arrays have <code>Length</code>, lists have <code>Count</code>.
      </p>
      <Source file="app/10-arrays-lists/Lists.cs" />

      <h2>Removing items while looping</h2>
      <p>
        You cannot add or remove items from a list inside a <code>foreach</code> over that same list.
        C# throws an <code>InvalidOperationException</code> to protect you (the{" "}
        <code>try/catch</code> here just shows the error; exceptions come later).
      </p>
      <p>
        Two fixes: loop <strong>backwards</strong> with <code>for</code>, so removing an item never
        shifts the ones you haven&apos;t visited yet, or use <code>RemoveAll</code> with a condition.
      </p>
      <Source file="app/10-arrays-lists/RemoveInLoop.cs" />

      <div className="aspnet">
        <p>
          Before you add a database, a <code>List&lt;T&gt;</code> is the perfect fake one. Return it
          from an endpoint and ASP.NET Core serializes it to a JSON array automatically:
        </p>
        <Source
          title="Program.cs"
          code={`List<string> todos = ["Learn C#", "Build an API"];

app.MapGet("/todos", () => todos);`}
        />
        <Source title="GET /todos" lang="json" code={`["Learn C#", "Build an API"]`} />
      </div>
    </>
  );
}
