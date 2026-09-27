Console.WriteLine("Line one\nLine two");
Console.WriteLine("Name:\tAda");
Console.WriteLine("She said \"hi\"");

string path = @"C:\Users\ada\notes.txt";
Console.WriteLine(path);

string json = """
    {
      "name": "Ada",
      "role": "admin"
    }
    """;
Console.WriteLine(json);

string user = "Linus";
string body = $$"""
    { "name": "{{user}}" }
    """;
Console.WriteLine(body);
