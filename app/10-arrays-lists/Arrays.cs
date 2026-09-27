int[] scores = new int[3];
scores[0] = 90;
scores[1] = 75;
scores[2] = 82;

string[] names = ["Ada", "Linus", "Grace"];

Console.WriteLine($"First score: {scores[0]}");
Console.WriteLine($"Names: {names.Length}");
Console.WriteLine($"Last name: {names[^1]}");

int[] numbers = [10, 20, 30, 40, 50];
int[] middle = numbers[1..4];
Console.WriteLine($"Middle: {string.Join(", ", middle)}");

int[] empty = new int[2];
Console.WriteLine($"Default values: {empty[0]}, {empty[1]}");
