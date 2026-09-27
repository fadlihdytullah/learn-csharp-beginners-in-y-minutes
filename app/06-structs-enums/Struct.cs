var red = new RgbColor { R = 255, G = 0, B = 0 };
var orange = red;
orange.G = 165;

Console.WriteLine($"red:    {red.ToHex()}");
Console.WriteLine($"orange: {orange.ToHex()}");

struct RgbColor
{
    public byte R;
    public byte G;
    public byte B;

    public string ToHex() => $"#{R:X2}{G:X2}{B:X2}";
}
