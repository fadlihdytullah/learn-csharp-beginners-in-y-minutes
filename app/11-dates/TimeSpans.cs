var movie = new TimeSpan(2, 15, 0);
var ad = TimeSpan.FromMinutes(90);

Console.WriteLine($"Movie: {movie}");
Console.WriteLine($"Hours: {movie.Hours}, Minutes: {movie.Minutes}");
Console.WriteLine($"TotalMinutes: {movie.TotalMinutes}");
Console.WriteLine($"Ad: {ad}");
Console.WriteLine($"Together: {movie + ad}");

var today = new DateTime(2026, 9, 28);
var christmas = new DateTime(2026, 12, 25);
TimeSpan left = christmas - today;

Console.WriteLine($"Days until Christmas: {left.Days}");
Console.WriteLine($"Christmas minus 1 week: {(christmas - TimeSpan.FromDays(7)):yyyy-MM-dd}");
