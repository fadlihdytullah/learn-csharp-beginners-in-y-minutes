int x = 5;
int post = x++;
Console.WriteLine($"post = {post}, x = {x}");

int y = 5;
int pre = ++y;
Console.WriteLine($"pre = {pre}, y = {y}");

int total = 100;
total += 20;
total -= 5;
total *= 2;
total /= 10;
Console.WriteLine($"total = {total}");
