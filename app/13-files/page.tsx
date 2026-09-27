import Source from "../_lib/Source";

export const metadata = { title: "13. Files & Directories" };

export default function Page() {
  return (
    <>
      <h1>13. Files & Directories</h1>
      <p>
        The <code>System.IO</code> namespace lets you read and write files, create folders, and build
        paths that work on every operating system. It is already imported for you, so{" "}
        <code>File</code>, <code>Directory</code>, and <code>Path</code> are ready to use.
      </p>
      <p>
        The examples work inside the system temp folder and clean up after themselves, so running them
        leaves nothing behind.
      </p>

      <h2>File: quick one-liners</h2>
      <p>
        The static <strong>File</strong> class does a whole job in one call: open the file, read or
        write, close it again.
      </p>
      <ul>
        <li>
          <code>WriteAllText</code> creates the file, or <strong>overwrites</strong> it if it exists.
        </li>
        <li>
          <code>AppendAllText</code> adds to the end instead.
        </li>
        <li>
          <code>ReadAllText</code> returns one string; <code>ReadAllLines</code> returns an array of
          lines.
        </li>
      </ul>
      <Source file="app/13-files/FileBasics.cs" />

      <h2>FileInfo: one file, many operations</h2>
      <p>
        <strong>FileInfo</strong> is an object that represents one file. It exposes properties like{" "}
        <code>Name</code>, <code>Extension</code>, and <code>Length</code> (size in bytes).
      </p>
      <p>
        Rule of thumb: use <code>File</code> for a single operation. Use <code>FileInfo</code> when
        you do several things with the same file, because <code>File</code> re-checks permissions on
        every call.
      </p>
      <Source file="app/13-files/FileInfoDemo.cs" />

      <h2>Directory and DirectoryInfo</h2>
      <p>
        The same pair exists for folders. <code>CreateDirectory</code> creates every missing folder in
        the path and does nothing if it already exists. <code>GetFiles</code> accepts a search pattern
        like <code>&quot;*.txt&quot;</code>.
      </p>
      <Source file="app/13-files/Directories.cs" />
      <div className="tip">
        <p>
          <code>GetFiles</code> does not promise any order. Sort the result when order matters.
        </p>
      </div>

      <h2>Path</h2>
      <p>
        Never build paths by gluing strings with <code>&quot;/&quot;</code> or{" "}
        <code>&quot;\\&quot;</code>. <strong>Path.Combine</strong> uses the right separator for the
        operating system: you will see backslashes on Windows. The other <code>Path</code> methods
        only work on the text; they never touch the disk.
      </p>
      <Source file="app/13-files/Paths.cs" />

      <h2>Async versions</h2>
      <p>
        Disk access is slow compared to the CPU. Every method above has an <code>Async</code> twin
        that lets the program do other work while it waits. Put <code>await</code> in front of the
        call. You will learn how this works in the intermediate course; for now, recognize the
        pattern.
      </p>
      <Source file="app/13-files/AsyncFiles.cs" />

      <div className="aspnet">
        <p>
          Web servers handle many requests at once, so always use the <code>Async</code> file methods
          there. A typical use is serving or saving uploaded files; build their paths from{" "}
          <code>IWebHostEnvironment.ContentRootPath</code>, never from user input directly.
        </p>
        <Source
          title="Program.cs"
          code={`app.MapGet("/terms", async (IWebHostEnvironment env) =>
{
    var path = Path.Combine(env.ContentRootPath, "content", "terms.txt");
    return Results.Text(await File.ReadAllTextAsync(path));
});`}
        />
      </div>
    </>
  );
}
