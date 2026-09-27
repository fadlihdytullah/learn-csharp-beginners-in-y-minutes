string article = "C# is a modern, object-oriented language used to build web APIs, games, and apps.";

Console.WriteLine(Summarize(article, 40));
Console.WriteLine(Summarize("Short and sweet.", 30));

static string Summarize(string text, int maxLength)
{
    if (text.Length <= maxLength)
        return text;

    int lastSpace = text.LastIndexOf(' ', maxLength);
    int cut = lastSpace > 0 ? lastSpace : maxLength;

    return text[..cut].TrimEnd(',', '.') + "...";
}
