int[,] grid =
{
    { 1, 2, 3 },
    { 4, 5, 6 }
};

Console.WriteLine($"Rows: {grid.GetLength(0)}, Columns: {grid.GetLength(1)}");
Console.WriteLine($"Row 1, column 2: {grid[1, 2]}");

int[][] jagged =
[
    [1],
    [2, 3],
    [4, 5, 6]
];

foreach (var row in jagged)
{
    Console.WriteLine(string.Join(" ", row));
}
