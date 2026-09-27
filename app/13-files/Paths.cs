string path = Path.Combine("data", "reports", "sales-2026.csv");

Console.WriteLine(path);
Console.WriteLine($"File name: {Path.GetFileName(path)}");
Console.WriteLine($"Without extension: {Path.GetFileNameWithoutExtension(path)}");
Console.WriteLine($"Extension: {Path.GetExtension(path)}");
Console.WriteLine($"Folder: {Path.GetDirectoryName(path)}");
Console.WriteLine($"Changed: {Path.ChangeExtension(path, ".json")}");
