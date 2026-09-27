var ada = new Person();
ada.Name = "Ada";
ada.Age = 36;

var alan = new Person();
alan.Name = "Alan";
alan.Age = 41;

ada.Introduce();
alan.Introduce();

class Person
{
    public string Name = "";
    public int Age;

    public void Introduce()
    {
        Console.WriteLine($"Hi, I am {Name} and I am {Age}.");
    }
}
