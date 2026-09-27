var day = DayOfWeek.Saturday;

switch (day)
{
    case DayOfWeek.Saturday:
    case DayOfWeek.Sunday:
        Console.WriteLine("Weekend. Sleep in.");
        break;
    case DayOfWeek.Friday:
        Console.WriteLine("Almost there.");
        break;
    default:
        Console.WriteLine("Workday.");
        break;
}
