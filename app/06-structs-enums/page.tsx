import Source from "../_lib/Source";

export const metadata = { title: "06. Structs & Enums" };

export default function Page() {
  return (
    <>
      <h1>06. Structs & Enums</h1>
      <p>
        Classes are not the only way to make your own types. A <strong>struct</strong> is a
        lightweight type for small values, and an <strong>enum</strong> gives names to a fixed set
        of options.
      </p>

      <h2>Structs</h2>
      <p>
        A struct looks almost like a class: fields, methods, <code>new</code>. The big difference
        is how it is copied. Assigning a struct to another variable copies all its data, so the two
        variables are independent. Changing <code>orange</code> leaves <code>red</code> untouched.
      </p>
      <Source file="app/06-structs-enums/Struct.cs" />
      <p>
        The <code>{"{ R = 255, ... }"}</code> part is an <strong>object initializer</strong>: it
        sets fields right after creation. It works for classes too.
      </p>

      <h2>Struct or class?</h2>
      <p>Default to a class. Reach for a struct only when all of these are true:</p>
      <ul>
        <li>It represents a single small value, like a color, a point, or a money amount.</li>
        <li>It holds only a few fields (roughly 16 bytes or less).</li>
        <li>Its value rarely changes after creation.</li>
      </ul>
      <p>
        Many built-in types are structs for exactly these reasons: <code>int</code>,{" "}
        <code>bool</code>, <code>decimal</code>, and <code>DateTime</code>. Lesson 07 shows why
        this copying behavior matters.
      </p>

      <h2>Enums</h2>
      <p>
        An enum is a set of named constants. Instead of passing a mysterious <code>2</code>{" "}
        around, you write <code>ShippingMethod.Express</code>. The compiler catches typos, and your
        editor autocompletes the options. Under the hood each name is an <code>int</code>, and you
        can cast back and forth.
      </p>
      <Source file="app/06-structs-enums/Enum.cs" />
      <div className="tip">
        <p>
          Give enum members explicit values when they are stored in a database or sent over the
          network. Otherwise, inserting a new member in the middle silently renumbers the rest.
        </p>
      </div>

      <h2>Parsing enums</h2>
      <p>
        Text often needs to become an enum, for example a value typed by a user.{" "}
        <code>Enum.Parse</code> throws on bad input; <code>Enum.TryParse</code> is the safe
        version, just like <code>int.TryParse</code>. Pass <code>ignoreCase: true</code> to accept{" "}
        <code>express</code> as well as <code>Express</code>.
      </p>
      <Source file="app/06-structs-enums/EnumParse.cs" />

      <div className="aspnet">
        <p>
          Enums are perfect for fields like order status or user role. By default, ASP.NET Core
          sends enums in JSON as numbers (<code>&quot;status&quot;: 2</code>). Register{" "}
          <code>JsonStringEnumConverter</code> to send readable names instead.
        </p>
        <Source
          title="Program.cs"
          code={`builder.Services.ConfigureHttpJsonOptions(options =>
    options.SerializerOptions.Converters.Add(new JsonStringEnumConverter()));`}
        />
      </div>
    </>
  );
}
