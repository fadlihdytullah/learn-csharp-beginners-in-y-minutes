List<int> numbers = [1, 2, 3, 4, 5, 6];

try
{
    foreach (var n in numbers)
    {
        if (n % 2 == 0)
            numbers.Remove(n);
    }
}
catch (InvalidOperationException)
{
    Console.WriteLine("foreach failed: the list changed while looping");
}

for (int i = numbers.Count - 1; i >= 0; i--)
{
    if (numbers[i] % 2 == 0)
        numbers.RemoveAt(i);
}

Console.WriteLine($"Odd numbers: {string.Join(", ", numbers)}");

numbers.RemoveAll(n => n > 3);
Console.WriteLine($"After RemoveAll: {string.Join(", ", numbers)}");
