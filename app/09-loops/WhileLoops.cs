int balance = 100;
int months = 0;

while (balance < 200)
{
    balance += balance / 10;
    months++;
}

Console.WriteLine($"Doubled after {months} months: {balance}");

int attempts = 0;
do
{
    attempts++;
    Console.WriteLine($"Attempt {attempts}");
} while (attempts < 0);
