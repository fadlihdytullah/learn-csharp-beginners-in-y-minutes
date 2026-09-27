using System.Globalization;

CultureInfo.CurrentCulture = CultureInfo.InvariantCulture;

var birthday = new DateOnly(1995, 4, 17);
var opens = new TimeOnly(9, 0);
var closes = new TimeOnly(17, 30);

Console.WriteLine($"Birthday: {birthday:yyyy-MM-dd}");
Console.WriteLine($"Opens: {opens:HH:mm}, closes: {closes:HH:mm}");

var now = new TimeOnly(12, 45);
Console.WriteLine($"Open at 12:45? {now.IsBetween(opens, closes)}");

var meeting = new DateTime(2026, 9, 28, 10, 30, 0);
Console.WriteLine($"Date part: {DateOnly.FromDateTime(meeting):yyyy-MM-dd}");
Console.WriteLine($"Time part: {TimeOnly.FromDateTime(meeting):HH:mm}");
