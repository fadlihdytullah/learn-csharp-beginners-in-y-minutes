using System.Globalization;

CultureInfo.CurrentCulture = CultureInfo.InvariantCulture;

var date = new DateTime(2026, 9, 28, 14, 5, 9);

Console.WriteLine(date.ToString("yyyy-MM-dd"));
Console.WriteLine(date.ToString("dd/MM/yyyy HH:mm"));
Console.WriteLine(date.ToString("dddd, MMMM d, yyyy"));
Console.WriteLine(date.ToString("h:mm tt"));
Console.WriteLine($"{date:MMM d}");

var parsed = DateTime.Parse("2026-12-25");
Console.WriteLine($"Parsed: {parsed:yyyy-MM-dd} is a {parsed.DayOfWeek}");

var exact = DateTime.ParseExact("25/12/2026", "dd/MM/yyyy", CultureInfo.InvariantCulture);
Console.WriteLine($"ParseExact: {exact:yyyy-MM-dd}");
