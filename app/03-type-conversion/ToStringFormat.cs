int count = 7;
double ratio = 0.8567;
decimal total = 1234.5m;

string text = count.ToString();
Console.WriteLine(text + " items");
Console.WriteLine(ratio.ToString("P1"));
Console.WriteLine(total.ToString("N2"));
Console.WriteLine($"{count:D3} | {ratio:F2}");
