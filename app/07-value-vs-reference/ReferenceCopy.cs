int[] first = [1, 2, 3];
int[] second = first;
second[0] = 99;
Console.WriteLine($"first[0] = {first[0]}");

var p1 = new Person { Name = "Ada", Age = 36 };
var p2 = p1;
p2.Age = 37;
Console.WriteLine($"p1.Age = {p1.Age}");

class Person
{
    public string Name = "";
    public int Age;
}
