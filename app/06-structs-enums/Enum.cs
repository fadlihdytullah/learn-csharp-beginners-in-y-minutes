var method = ShippingMethod.Express;

Console.WriteLine(method);
Console.WriteLine((int)method);

var fromNumber = (ShippingMethod)3;
Console.WriteLine(fromNumber);
Console.WriteLine(method == ShippingMethod.Express);

enum ShippingMethod
{
    Standard = 1,
    Express = 2,
    Overnight = 3
}
