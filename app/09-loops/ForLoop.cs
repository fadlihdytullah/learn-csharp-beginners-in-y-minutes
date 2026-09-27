for (int i = 1; i <= 5; i++)
{
    Console.WriteLine($"Lap {i}");
}

int evens = 0;
for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0)
        evens++;
}

Console.WriteLine($"Even numbers from 1 to 10: {evens}");
