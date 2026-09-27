import Source from "../_lib/Source";

export const metadata = { title: "11. Dates & Times" };

export default function Page() {
  return (
    <>
      <h1>11. Dates & Times</h1>
      <p>
        Orders have a creation time, subscriptions expire, tokens time out. .NET has a small family
        of types for this: <code>DateTime</code>, <code>TimeSpan</code>, <code>DateOnly</code>,{" "}
        <code>TimeOnly</code>, and <code>DateTimeOffset</code>.
      </p>

      <h2>DateTime</h2>
      <p>
        A <strong>DateTime</strong> is a date plus a time of day. Create one with the constructor,
        then read parts of it through properties like <code>Year</code> and{" "}
        <code>DayOfWeek</code>.
      </p>
      <p>
        DateTime is <strong>immutable</strong>: <code>AddDays</code>, <code>AddMonths</code>, and
        friends never change the original. They return a new value, so always use the result. Pass a
        negative number to go back in time.
      </p>
      <Source file="app/11-dates/CreatingDates.cs" />
      <div className="tip">
        <p>
          How a date prints depends on the machine&apos;s <strong>culture</strong>: US machines show{" "}
          <code>09/28/2026</code>, Indonesian ones <code>28/09/2026</code>. The line{" "}
          <code>CultureInfo.CurrentCulture = CultureInfo.InvariantCulture</code> makes these examples
          print the same everywhere.
        </p>
      </div>

      <h2>Formatting and parsing</h2>
      <p>
        Pass a <strong>format string</strong> to <code>ToString</code>, or put it after a colon inside
        interpolation. The common pieces: <code>yyyy</code> year, <code>MM</code> month,{" "}
        <code>dd</code> day, <code>HH</code> 24-hour, <code>hh</code> 12-hour, <code>mm</code>{" "}
        minutes, <code>ss</code> seconds. Capital <code>MM</code> is month, small <code>mm</code> is
        minutes.
      </p>
      <p>
        To go the other way, <code>Parse</code> reads a string into a DateTime.{" "}
        <code>ParseExact</code> is stricter: the text must match the format you give.
      </p>
      <Source file="app/11-dates/Formatting.cs" />

      <h2>TimeSpan</h2>
      <p>
        A <strong>TimeSpan</strong> is a length of time, not a point in time: &quot;2 hours 15
        minutes&quot;. Subtracting two dates gives you a TimeSpan.
      </p>
      <p>
        Watch the difference: <code>Minutes</code> is only the minutes <em>part</em> (15), while{" "}
        <code>TotalMinutes</code> is the whole span in minutes (135).
      </p>
      <Source file="app/11-dates/TimeSpans.cs" />

      <h2>DateOnly and TimeOnly</h2>
      <p>
        A birthday has no time. Opening hours have no date. <strong>DateOnly</strong> and{" "}
        <strong>TimeOnly</strong> say exactly that, so nobody wonders what the <code>00:00</code> in a
        birthday means.
      </p>
      <Source file="app/11-dates/DateOnlyTimeOnly.cs" />

      <h2>UTC, offsets, and ISO 8601</h2>
      <p>
        &quot;14:00&quot; means nothing without a time zone. <strong>UTC</strong> is the global
        reference time; servers should store and compare times in UTC. Get the current one with{" "}
        <code>DateTime.UtcNow</code>, not <code>DateTime.Now</code> (which depends on where the server
        runs).
      </p>
      <p>
        A <strong>DateTimeOffset</strong> stores the time <em>and</em> its offset from UTC, so it
        always points to one exact instant. Jakarta 14:00 (+07:00) and London 08:00 (+01:00) are
        equal. The <code>&quot;o&quot;</code> format prints <strong>ISO 8601</strong>, the standard way
        APIs exchange dates.
      </p>
      <Source file="app/11-dates/UtcAndOffset.cs" />

      <div className="aspnet">
        <p>
          ASP.NET Core serializes <code>DateTime</code> and <code>DateTimeOffset</code> to ISO 8601
          JSON automatically, and parses them back from request bodies. Store{" "}
          <code>DateTimeOffset.UtcNow</code> in your records and let clients convert to local time.
        </p>
        <Source
          title="Program.cs"
          code={`app.MapGet("/time", () => new { now = DateTimeOffset.UtcNow });`}
        />
        <Source title="GET /time" lang="json" code={`{ "now": "2026-09-28T07:00:00.1234567+00:00" }`} />
      </div>
    </>
  );
}
