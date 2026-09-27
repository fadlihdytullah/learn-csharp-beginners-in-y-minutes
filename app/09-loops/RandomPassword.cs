var random = new Random(42);

for (int i = 0; i < 3; i++)
{
    Console.WriteLine($"Dice: {random.Next(1, 7)}");
}

var password = "";
for (int i = 0; i < 10; i++)
{
    password += (char)('a' + random.Next(0, 26));
}

Console.WriteLine($"Password: {password}");
