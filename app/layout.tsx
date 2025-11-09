import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Church Calendar - Berean Baptist Church",
  description: "Stay connected with Berean Baptist Church events, services, and activities. Searching the Scriptures daily.",
  keywords: ["church", "calendar", "baptist", "berean", "events", "services", "bible study"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen cross-pattern">
          {children}
        </div>
      </body>
    </html>
  );
}
