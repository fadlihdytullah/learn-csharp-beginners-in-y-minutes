var dir = Directory.CreateDirectory(Path.Combine(Path.GetTempPath(), "lesson13-basics")).FullName;
var notes = Path.Combine(dir, "notes.txt");

File.WriteAllText(notes, "Buy milk\n");
Console.WriteLine($"Exists? {File.Exists(notes)}");

File.AppendAllText(notes, "Learn C#\n");
Console.Write(File.ReadAllText(notes));

string[] lines = File.ReadAllLines(notes);
Console.WriteLine($"Lines: {lines.Length}, first: {lines[0]}");

var backup = Path.Combine(dir, "notes.bak");
File.Copy(notes, backup, overwrite: true);
Console.WriteLine($"Backup exists? {File.Exists(backup)}");

File.Delete(notes);
Console.WriteLine($"Notes exists after delete? {File.Exists(notes)}");

Directory.Delete(dir, recursive: true);
