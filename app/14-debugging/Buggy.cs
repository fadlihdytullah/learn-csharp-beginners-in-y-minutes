List<int> numbers = [4, 1, 6, 2, 5, 3];

var smallest = GetSmallests(numbers, 3);

Console.WriteLine($"Smallest 3: {string.Join(", ", smallest)}");
Console.WriteLine($"Original list: {string.Join(", ", numbers)}");

static List<int> GetSmallests(List<int> list, int count)
{
    var result = new List<int>();
    while (result.Count < count)
    {
        var min = GetSmallest(list);
        result.Add(min);
        list.Remove(min);
    }
    return result;
}

static int GetSmallest(List<int> list)
{
    var min = list[0];
    for (var i = 1; i < list.Count; i++)
    {
        if (list[i] > min)
            min = list[i];
    }
    return min;
}
