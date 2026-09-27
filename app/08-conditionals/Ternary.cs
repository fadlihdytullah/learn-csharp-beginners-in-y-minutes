int stock = 0;

string label = stock > 0 ? "In stock" : "Sold out";
Console.WriteLine(label);

int items = 1;
Console.WriteLine($"You have {items} {(items == 1 ? "item" : "items")} in your cart");
