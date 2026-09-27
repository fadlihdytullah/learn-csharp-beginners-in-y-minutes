using System.Globalization;

CultureInfo.CurrentCulture = CultureInfo.InvariantCulture;

double pi = Math.PI;
int visitors = 1234567;
decimal price = 19.5m;
double rate = 0.256;

Console.WriteLine($"Pi: {pi:F2}");
Console.WriteLine($"Visitors: {visitors:N0}");
Console.WriteLine($"Price: {price:F2}");
Console.WriteLine($"Rate: {rate:P1}");
Console.WriteLine($"Order: {42:D5}");

Console.WriteLine($"|{"Item",-8}|{"Qty",5}|");
Console.WriteLine($"|{"Apple",-8}|{3,5}|");
