var chosen = Enum.Parse<ShippingMethod>("Overnight");
Console.WriteLine($"Parsed: {chosen} ({(int)chosen})");

string[] inputs = ["Express", "express", "Teleport"];

foreach (var input in inputs)
{
    if (Enum.TryParse<ShippingMethod>(input, ignoreCase: true, out var method))
        Console.WriteLine($"\"{input}\" -> {method}");
    else
        Console.WriteLine($"\"{input}\" -> unknown method");
}

enum ShippingMethod
{
    Standard = 1,
    Express = 2,
    Overnight = 3
}
