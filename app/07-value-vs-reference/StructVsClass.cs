var pointA = new PointStruct { X = 1 };
var pointB = pointA;
pointB.X = 50;

var boxA = new PointClass { X = 1 };
var boxB = boxA;
boxB.X = 50;

Console.WriteLine($"struct: pointA.X = {pointA.X}");
Console.WriteLine($"class:  boxA.X   = {boxA.X}");

struct PointStruct
{
    public int X;
}

class PointClass
{
    public int X;
}
