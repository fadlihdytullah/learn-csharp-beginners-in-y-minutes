var dir = Directory.CreateDirectory(Path.Combine(Path.GetTempPath(), "lesson13-info")).FullName;
File.WriteAllText(Path.Combine(dir, "report.csv"), "id,total\n1,250\n");

var file = new FileInfo(Path.Combine(dir, "report.csv"));

Console.WriteLine($"Name: {file.Name}");
Console.WriteLine($"Extension: {file.Extension}");
Console.WriteLine($"Size: {file.Length} bytes");
Console.WriteLine($"Exists? {file.Exists}");

var copy = file.CopyTo(Path.Combine(dir, "report-copy.csv"));
Console.WriteLine($"Copied to: {copy.Name}");

copy.Delete();
Directory.Delete(dir, recursive: true);
