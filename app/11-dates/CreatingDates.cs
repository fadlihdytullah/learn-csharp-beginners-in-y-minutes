using System.Globalization;

CultureInfo.CurrentCulture = CultureInfo.InvariantCulture;

var launch = new DateTime(2026, 9, 28, 14, 30, 0);

Console.WriteLine(launch);
Console.WriteLine($"Year: {launch.Year}, Month: {launch.Month}, Day: {launch.Day}");
Console.WriteLine($"Day of week: {launch.DayOfWeek}");
Console.WriteLine($"Day of year: {launch.DayOfYear}");

var tomorrow = launch.AddDays(1);
var nextMonth = launch.AddMonths(1);
var earlier = launch.AddHours(-3);

Console.WriteLine($"Tomorrow: {tomorrow}");
Console.WriteLine($"Next month: {nextMonth}");
Console.WriteLine($"3 hours earlier: {earlier}");
Console.WriteLine($"Tomorrow is later? {tomorrow > launch}");
