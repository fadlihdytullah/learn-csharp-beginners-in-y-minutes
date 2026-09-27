List<string> todos = ["Learn C#"];

todos.Add("Build an API");
todos.AddRange(["Write tests", "Deploy"]);
todos.Insert(0, "Install .NET");

Console.WriteLine($"Count: {todos.Count}");
Console.WriteLine(string.Join(" | ", todos));

todos.Remove("Write tests");
todos.RemoveAt(todos.Count - 1);

Console.WriteLine(string.Join(" | ", todos));
Console.WriteLine($"Has 'Deploy'? {todos.Contains("Deploy")}");
Console.WriteLine($"Index of 'Build an API': {todos.IndexOf("Build an API")}");
