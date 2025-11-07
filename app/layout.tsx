import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Berean Baptist Church - Events Calendar",
  description: "Experience modern church event management. Stay connected with Berean Baptist Church events, services, and activities. Searching the Scriptures daily.",
  keywords: ["church", "calendar", "baptist", "berean", "events", "services", "bible study", "worship"],
  authors: [{ name: "Berean Baptist Church" }],
  openGraph: {
    title: "Berean Baptist Church - Events Calendar",
    description: "Stay connected with our church events and services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen cross-pattern">
            {children}
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
