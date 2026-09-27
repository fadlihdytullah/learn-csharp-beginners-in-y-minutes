int number = 1;
Increment(number);
Console.WriteLine($"number = {number}");

var person = new Person { Age = 20 };
MakeOlder(person);
Console.WriteLine($"person.Age = {person.Age}");

static void Increment(int value) => value += 10;

static void MakeOlder(Person p) => p.Age += 10;

class Person
{
    public int Age;
}
