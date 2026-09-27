byte level = 255;
short temperature = -40;
int population = 280_000_000;
long distance = 9_460_730_472_580_800L;

float ratio = 0.5f;
double average = 1.0 / 3;
decimal price = 19.99m;

char grade = 'A';
bool isActive = true;

Console.WriteLine($"{level} {temperature} {population} {distance}");
Console.WriteLine($"{ratio} {average} {price}");
Console.WriteLine($"{grade} {isActive}");
Console.WriteLine($"int range: {int.MinValue} to {int.MaxValue}");
