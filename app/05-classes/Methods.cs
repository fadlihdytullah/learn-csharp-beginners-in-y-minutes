var calculator = new Calculator();

int sum = calculator.Add(2, 3);
Console.WriteLine($"2 + 3 = {sum}");
Console.WriteLine($"Is 7 even? {calculator.IsEven(7)}");
calculator.PrintSquare(4);

class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }

    public bool IsEven(int number) => number % 2 == 0;

    public void PrintSquare(int number)
    {
        Console.WriteLine($"{number} squared is {number * number}");
    }
}
