var dir = Directory.CreateDirectory(Path.Combine(Path.GetTempPath(), "lesson13-async")).FullName;
var file = Path.Combine(dir, "log.txt");

await File.WriteAllTextAsync(file, "Server started\n");
await File.AppendAllLinesAsync(file, ["Request 1", "Request 2"]);

string content = await File.ReadAllTextAsync(file);
Console.Write(content);

Directory.Delete(dir, recursive: true);
