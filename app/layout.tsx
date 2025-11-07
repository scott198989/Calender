import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Church Calendar - Independent Fundamental Baptist Church",
  description: "Stay connected with our church events, services, and activities. Built for faith, community, and fellowship.",
  keywords: ["church", "calendar", "baptist", "events", "services", "bible study"],
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
