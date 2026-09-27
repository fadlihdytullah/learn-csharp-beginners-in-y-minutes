List<int> numbers = [4, 1, 6, 2, 5, 3];

Console.WriteLine($"Smallest 3: {string.Join(", ", GetSmallests(numbers, 3))}");
Console.WriteLine($"Original list: {string.Join(", ", numbers)}");

try
{
    GetSmallests(numbers, 10);
}
catch (ArgumentOutOfRangeException ex)
{
    Console.WriteLine($"Rejected: {ex.Message}");
}

static List<int> GetSmallests(List<int> list, int count)
{
    ArgumentNullException.ThrowIfNull(list);
    ArgumentOutOfRangeException.ThrowIfNegativeOrZero(count);
    ArgumentOutOfRangeException.ThrowIfGreaterThan(count, list.Count);

    var buffer = new List<int>(list);
    var result = new List<int>();
    while (result.Count < count)
    {
        var min = GetSmallest(buffer);
        result.Add(min);
        buffer.Remove(min);
    }
    return result;
}

static int GetSmallest(List<int> list)
{
    var min = list[0];
    for (var i = 1; i < list.Count; i++)
    {
        if (list[i] < min)
            min = list[i];
    }
    return min;
}
