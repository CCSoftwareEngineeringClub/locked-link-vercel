import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link Locker",
  description: "Put a password on your links",
  icons: [{ rel: "icon", url: "/icon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body className={overpass.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
