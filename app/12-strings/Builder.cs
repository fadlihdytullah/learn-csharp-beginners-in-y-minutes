using System.Text;

var sb = new StringBuilder();

sb.AppendLine("Receipt");
sb.AppendLine(new string('-', 12));

string[] items = ["Coffee", "Bagel", "Juice"];
foreach (var item in items)
{
    sb.Append("* ").AppendLine(item);
}

sb.Replace("*", "-");
sb.Insert(0, "== ");

Console.Write(sb.ToString());
