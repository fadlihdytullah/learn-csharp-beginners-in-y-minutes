# Learn C# in Y Minutes: Beginners

Fourteen short C# lessons for beginners, on the road to ASP.NET Core Web APIs.
Each lesson explains an idea briefly, shows small runnable programs, and prints their output.

```bash
pnpm install
pnpm dev                          # http://localhost:3000
dotnet run app/01-intro/Hello.cs  # run any example (.NET 10 SDK)
pnpm outputs                      # regenerate every .txt output from its .cs file
```

Lessons live in `app/NN-topic/`: `page.tsx` holds the explanation, each `Name.cs` is a runnable example, and `Name.txt` is its output.
To add one: create the folder, then register it in `app/_lib/lessons.ts`.

Illustrations: prompts are in `IMAGE.md`. Save generated images to `public/images/`.
