import type { Metadata } from "next";
import Link from "next/link";
import { Geist_Mono, Inter } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import AskAI, { AskTrigger } from "./_lib/AskAI";
import BrandMark from "./_lib/BrandMark";
import Nav from "./_lib/Nav";
import PrevNext from "./_lib/PrevNext";
import ThemeToggle from "./_lib/ThemeToggle";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Learn C# in Y Minutes: Beginners",
    template: "%s | Learn C# in Y Minutes",
  },
  description: "Short, runnable C# lessons for beginners, on the road to ASP.NET Core Web APIs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body>
        <header className="sticky top-0 z-10 flex h-[52px] items-center justify-between border-b bg-bg/85 px-5 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2.5 font-medium text-fg no-underline">
            <BrandMark />
            Learn C# in Y Minutes
          </Link>
          <div className="flex items-center gap-2">
            <AskTrigger />
            <Badge className="max-sm:in-[:has(>.ask-trigger)]:hidden">C# 14 · .NET 10</Badge>
            <ThemeToggle />
          </div>
        </header>
        <div className="grid grid-cols-[240px_minmax(0,1fr)] max-nav:grid-cols-[minmax(0,1fr)]">
          <aside className="sticky top-[52px] h-[calc(100vh-52px)] overflow-y-auto border-r px-4 py-8 max-nav:static max-nav:h-auto max-nav:overflow-x-auto max-nav:border-r-0 max-nav:border-b max-nav:py-2">
            <Nav />
          </aside>
          <div className="flex min-h-[calc(100vh-52px)] flex-col">
            <main className="w-full max-w-[860px] flex-1 px-12 pt-14 pb-20 max-nav:px-4 max-nav:pt-8 max-nav:pb-16">
              {children}
              <PrevNext />
            </main>
            <footer className="flex h-[52px] items-center justify-end border-t px-5 text-[13px] text-fg-subtle">
              <span>
                Built by{" "}
                <a href="https://github.com/fadlihdytullah" className="text-fg-muted">
                  Fadli Hidayatullah
                </a>
              </span>
            </footer>
          </div>
        </div>
        <AskAI />
      </body>
    </html>
  );
}
