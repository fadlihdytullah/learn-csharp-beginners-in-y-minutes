var utc = new DateTime(2026, 9, 28, 7, 0, 0, DateTimeKind.Utc);
Console.WriteLine($"Kind: {utc.Kind}");
Console.WriteLine($"ISO 8601: {utc:o}");

var jakarta = new DateTimeOffset(2026, 9, 28, 14, 0, 0, TimeSpan.FromHours(7));
Console.WriteLine($"Jakarta: {jakarta:o}");
Console.WriteLine($"Same moment in UTC: {jakarta.UtcDateTime:o}");

var london = new DateTimeOffset(2026, 9, 28, 8, 0, 0, TimeSpan.FromHours(1));
Console.WriteLine($"Same instant as London 08:00? {jakarta == london}");

var fromApi = DateTimeOffset.Parse("2026-09-28T07:00:00Z");
Console.WriteLine($"Parsed offset: {fromApi.Offset}");
