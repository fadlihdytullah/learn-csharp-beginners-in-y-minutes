int age = 20;
bool hasTicket = true;
bool isBanned = false;

Console.WriteLine($"age >= 18: {age >= 18}");
Console.WriteLine($"age == 21: {age == 21}");
Console.WriteLine($"age != 21: {age != 21}");

Console.WriteLine($"age >= 18 && hasTicket: {age >= 18 && hasTicket}");
Console.WriteLine($"age < 18 || hasTicket:  {age < 18 || hasTicket}");
Console.WriteLine($"!isBanned: {!isBanned}");
