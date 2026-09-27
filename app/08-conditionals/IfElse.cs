int hour = 14;

if (hour < 12)
{
    Console.WriteLine("Good morning");
}
else if (hour < 18)
{
    Console.WriteLine("Good afternoon");
}
else
{
    Console.WriteLine("Good evening");
}

bool isMember = true;
int price = 100;

if (isMember)
    price -= 10;

Console.WriteLine($"Price: {price}");
