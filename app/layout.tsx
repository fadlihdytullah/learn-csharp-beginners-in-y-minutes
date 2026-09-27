import type { Metadata } from "next";
import Link from "next/link";
import { Geist_Mono, Inter } from "next/font/google";
import BrandMark from "./_lib/BrandMark";
import Nav from "./_lib/Nav";
import PrevNext from "./_lib/PrevNext";
import ThemeToggle from "./_lib/ThemeToggle";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
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
        <header className="topbar">
          <Link href="/" className="brand">
            <BrandMark />
            Learn C# in Y Minutes
          </Link>
          <div className="topbar-actions">
            <span className="pill">C# 14 · .NET 10</span>
            <ThemeToggle />
          </div>
        </header>
        <div className="shell">
          <aside>
            <Nav />
          </aside>
          <div className="content">
            <main>
              {children}
              <PrevNext />
            </main>
            <footer className="footer">
              <span>
                Built by <a href="https://github.com/fadlihdytullah">Fadli Hidayatullah</a>
              </span>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
