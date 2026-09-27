var grace = Person.Parse("Grace");
var linus = Person.Parse("Linus");

grace.Introduce();
linus.Introduce();
Console.WriteLine($"People created: {Person.Count}");

Console.WriteLine($"Math.Max(3, 7) = {Math.Max(3, 7)}");

class Person
{
    public static int Count;

    public string Name = "";

    public static Person Parse(string name)
    {
        var person = new Person();
        person.Name = name.Trim();
        Count++;
        return person;
    }

    public void Introduce()
    {
        Console.WriteLine($"Hi, I am {Name}.");
    }
}
