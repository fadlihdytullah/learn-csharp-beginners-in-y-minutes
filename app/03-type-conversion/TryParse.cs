string[] inputs = ["25", "abc", "-3", ""];

foreach (var input in inputs)
{
    if (int.TryParse(input, out int number))
        Console.WriteLine($"\"{input}\" -> {number}");
    else
        Console.WriteLine($"\"{input}\" -> invalid");
}
