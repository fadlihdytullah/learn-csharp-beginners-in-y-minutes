int score = 84;

string grade = score switch
{
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    _ => "F"
};

Console.WriteLine($"Score {score} is grade {grade}");

int month = 7;

string season = month switch
{
    12 or 1 or 2 => "Winter",
    >= 3 and <= 5 => "Spring",
    >= 6 and <= 8 => "Summer",
    _ => "Autumn"
};

Console.WriteLine($"July is in {season}");
