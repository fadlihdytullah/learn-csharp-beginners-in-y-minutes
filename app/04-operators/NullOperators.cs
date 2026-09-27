string? nickname = null;

string display = nickname ?? "Guest";
int? length = nickname?.Length;

Console.WriteLine($"Hello, {display}");
Console.WriteLine($"Length: {length ?? 0}");
