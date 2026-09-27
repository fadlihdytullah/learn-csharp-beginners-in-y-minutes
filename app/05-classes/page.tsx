import Figure from "../_lib/Figure";
import Quiz from "../_lib/Quiz";
import Source from "../_lib/Source";

export const metadata = { title: "05. Classes" };

export default function Page() {
  return (
    <>
      <h1>05. Classes</h1>
      <p>
        Primitive types hold one simple value. Real programs deal with bigger things: a customer,
        an order, a product. A <strong>class</strong> lets you create your own type that bundles
        related data and behavior together.
      </p>

      <h2>Class vs object</h2>
      <p>
        A class is a <strong>blueprint</strong>. It describes what every object of that kind has
        and can do, but it is not a thing itself. An <strong>object</strong> (or{" "}
        <strong>instance</strong>) is a real thing built from that blueprint, living in memory.
        One class, as many objects as you need.
      </p>
      <Figure
        src="class-blueprint.png"
        alt="One blueprint labeled class Person with arrows to three slightly different houses labeled object"
        caption="One class, many objects built from it."
      />

      <h2>Fields and new</h2>
      <p>
        Declare a class with the <code>class</code> keyword. Variables inside it are{" "}
        <strong>fields</strong>: the data each object carries. Create an object with{" "}
        <code>new</code>, then use a dot to reach its members. Each object has its own copy of the
        fields, so Ada&apos;s age does not affect Alan&apos;s.
      </p>
      <Source file="app/05-classes/Person.cs" />
      <p>
        <code>public</code> means code outside the class can use the member. Without it, members
        are private. Access modifiers get a full lesson in the intermediate course.
      </p>

      <h2>Methods</h2>
      <p>
        A <strong>method</strong> is a named block of code that belongs to a class. It can take{" "}
        <strong>parameters</strong> (inputs) and <strong>return</strong> a value. The type before
        the name is what it returns; <code>void</code> means it returns nothing. A one-line method
        can use the <code>=&gt;</code> shorthand.
      </p>
      <Source file="app/05-classes/Methods.cs" />

      <h2>Static members</h2>
      <p>
        Normal members belong to each object. A <strong>static</strong> member belongs to the
        class itself, shared by everyone, and you call it on the class name. That is why you write{" "}
        <code>Console.WriteLine(...)</code> and <code>Math.Max(...)</code> without ever creating a{" "}
        <code>Console</code> or <code>Math</code> object.
      </p>
      <Source file="app/05-classes/Static.cs" />
      <p>
        <code>Person.Parse</code> is a common pattern: a static method that builds and returns a
        new object. You have already used one: <code>int.Parse</code>.
      </p>
      <div className="tip">
        <p>
          A static method cannot touch instance fields like <code>Name</code> directly, because
          there is no &quot;current object&quot;. It has to create or receive one first.
        </p>
      </div>

      <div className="aspnet">
        <p>
          Almost everything in a Web API is a class: the data you send and receive (models), the
          code that handles requests (controllers), and the business logic in between (services).
        </p>
        <Source
          title="ProductsController.cs"
          code={`[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public string[] GetAll() => ["Keyboard", "Mouse"];
}`}
        />
      </div>

      <Quiz
        questions={[
          {
            q: "What is the difference between a class and an object?",
            options: [
              "They are the same thing",
              "A class is a blueprint; an object is an instance built from it",
              "An object is a blueprint for classes",
            ],
            answer: 1,
            explanation: "One class can produce as many objects as you need, each with its own fields.",
          },
          {
            q: "Why can you call `Math.Max(...)` without creating a `Math` object?",
            options: [
              "`Max` is static: it belongs to the class itself",
              "C# creates the object automatically",
              "`Math` is a keyword",
            ],
            answer: 0,
            explanation: "Static members belong to the class, so you call them on the class name.",
          },
          {
            q: "A method's return type is `void`. What does it return?",
            options: [
              "`null`",
              "Any type it likes",
              "Nothing",
            ],
            answer: 2,
            explanation: "`void` means the method does its job and returns no value.",
          },
        ]}
      />
    </>
  );
}
