int[] numbers = [3, 7, 9, 2, 14, 6];

Console.WriteLine($"Index of 9: {Array.IndexOf(numbers, 9)}");
Console.WriteLine($"Index of 99: {Array.IndexOf(numbers, 99)}");

int[] copy = new int[3];
Array.Copy(numbers, copy, 3);
Console.WriteLine($"Copy: {string.Join(", ", copy)}");

Array.Sort(numbers);
Console.WriteLine($"Sorted: {string.Join(", ", numbers)}");

Array.Reverse(numbers);
Console.WriteLine($"Reversed: {string.Join(", ", numbers)}");

Array.Clear(numbers, 0, 2);
Console.WriteLine($"Cleared: {string.Join(", ", numbers)}");
