try
{
    int quantity = int.Parse("ten");
    Console.WriteLine(quantity);
}
catch (FormatException)
{
    Console.WriteLine("\"ten\" is not a number");
}
