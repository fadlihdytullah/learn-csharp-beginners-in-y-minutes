string fullName = "Ada Lovelace";
string[] parts = fullName.Split(' ');
Console.WriteLine($"First: {parts[0]}, Last: {parts[1]}");

string csv = "apple, banana,,cherry ";
string[] fruits = csv.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
Console.WriteLine($"{fruits.Length} fruits");

Console.WriteLine(string.Join(" + ", fruits));
