string title = "  Learn C# in Y Minutes  ";
string clean = title.Trim();

Console.WriteLine($"[{clean}]");
Console.WriteLine(clean.ToUpper());
Console.WriteLine(clean.ToLower());
Console.WriteLine($"Length: {clean.Length}");
Console.WriteLine($"Index of 'C#': {clean.IndexOf("C#")}");
Console.WriteLine($"Substring(6, 2): {clean.Substring(6, 2)}");
Console.WriteLine($"Range [..5]: {clean[..5]}");
Console.WriteLine(clean.Replace("Y", "10"));
Console.WriteLine($"Contains 'Minutes'? {clean.Contains("Minutes")}");
Console.WriteLine($"StartsWith 'learn' (ignore case)? {clean.StartsWith("learn", StringComparison.OrdinalIgnoreCase)}");
Console.WriteLine($"Blank? {string.IsNullOrWhiteSpace("   ")}");
