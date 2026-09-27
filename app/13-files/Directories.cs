var root = Path.Combine(Path.GetTempPath(), "lesson13-dirs");
Directory.CreateDirectory(Path.Combine(root, "images"));
Directory.CreateDirectory(Path.Combine(root, "docs"));
File.WriteAllText(Path.Combine(root, "docs", "a.txt"), "A");
File.WriteAllText(Path.Combine(root, "docs", "b.txt"), "B");
File.WriteAllText(Path.Combine(root, "docs", "c.md"), "C");

string[] textFiles = Directory.GetFiles(Path.Combine(root, "docs"), "*.txt");
Array.Sort(textFiles);
foreach (var f in textFiles)
    Console.WriteLine($"Text file: {Path.GetFileName(f)}");

string[] folders = Directory.GetDirectories(root);
Console.WriteLine($"Folders: {folders.Length}");

var info = new DirectoryInfo(Path.Combine(root, "docs"));
Console.WriteLine($"{info.Name} has {info.GetFiles().Length} files");

Directory.Delete(root, recursive: true);
Console.WriteLine($"Root exists? {Directory.Exists(root)}");
