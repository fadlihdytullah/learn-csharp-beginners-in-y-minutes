for (int i = 1; i <= 10; i++)
{
    if (i % 3 == 0)
        continue;

    if (i > 7)
        break;

    Console.Write($"{i} ");
}

Console.WriteLine();
