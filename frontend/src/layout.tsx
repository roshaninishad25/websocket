import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TutorialsPoint Clone",
  description: "A comprehensive E-Learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex max-w-[1400px] mx-auto bg-white min-h-[calc(100vh-64px)]">
          <Sidebar />
          <main className="flex-1 p-6 lg:p-8 min-w-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}