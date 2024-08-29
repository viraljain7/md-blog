import type { Metadata } from "next";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import siteConf from "@/config/siteConf";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConf.title,
  description: siteConf.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-accent font-sans antialiased ",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
