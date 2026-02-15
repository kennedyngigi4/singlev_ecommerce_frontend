import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP } from "@/lib/constants";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider, useSession } from "next-auth/react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP.title,
  description: APP.description,
  keywords: APP.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <main>
            {children}
          </main>
        
          <Toaster position="top-center" richColors />
        </SessionProvider>
      </body>
    </html>
  );
}
