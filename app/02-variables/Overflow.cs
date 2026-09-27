byte counter = 255;
counter++;
Console.WriteLine($"Wrapped around: {counter}");

try
{
    byte safe = 255;
    checked
    {
        safe++;
    }
}
catch (OverflowException)
{
    Console.WriteLine("checked caught the overflow");
}
