var total = 0;

{
    var bonus = 5;
    total += bonus;
    Console.WriteLine($"Inside the block: bonus = {bonus}, total = {total}");
}

Console.WriteLine($"Outside the block: total = {total}");
