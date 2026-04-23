import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { FlyingDock } from "@/components/layout/FlyingDock";
import { GlobalPlayer } from "@/components/spotify/GlobalPlayer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kelechi Alexander Ugoh | Personal Archive",
  description: "A digital studio for human-centric code, cultural systems, and consciousness exploration.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${interTight.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen text-foreground font-sans`}>
        <Header />
        <main className="relative z-10 pt-24 px-4 md:px-8 max-w-7xl mx-auto pb-32">
          {children}
        </main>
        
        <FlyingDock />
        <GlobalPlayer />
      </body>
    </html>
  );
}
