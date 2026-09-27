string ageText = "42";
string priceText = "19.95";

int age = int.Parse(ageText);
decimal price = decimal.Parse(priceText);
bool isActive = Convert.ToBoolean("true");
int rounded = Convert.ToInt32(7.6);

Console.WriteLine($"{age + 1} {price * 2} {isActive} {rounded}");
