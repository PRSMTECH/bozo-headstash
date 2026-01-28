import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { ThemeConfig } from "@/components/layout/ThemeConfig";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bozo Headstash | Premium Streetwear Clothing",
  description:
    "Official Bozo Headstash store. High-quality hoodies, tees, hats, and ski suits for every occasion. Join the movement.",
};

import Navbar from "@/components/layout/Navbar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { MobileTabBar } from "@/components/layout/MobileTabBar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased selection:bg-red-600 selection:text-white`}
      >
        <ThemeConfig>
          <div className="flex flex-col min-h-screen bg-black">
            <div className="hidden md:block">
              <Navbar />
            </div>
            <MobileHeader /> {/* Mobile Nav */}
            <main className="grow">{children}</main>
            <Footer />
            <MobileTabBar /> {/* Mobile Bottom Nav */}
          </div>
        </ThemeConfig>
      </body>
    </html>
  );
}
