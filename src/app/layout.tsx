import "@/globals.css";
import JotaiProvider from "@/lib/jotai-provider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The first non-formal startup event | Seaside Startup Summit",
  description: "Seaside Startup Summit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <JotaiProvider>
        <body className={inter.className}>{children}</body>
      </JotaiProvider>
    </html>
  );
}
