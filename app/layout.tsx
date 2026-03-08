import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BetaBanner from "@/components/BetaBanner";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "WeekendGoldMiner.com — The Weekend Prospector's Field Guide",
  description: "Your trusted source for gold prospecting information, equipment reviews, location data, and guides. Find where to prospect, what gear to use, and how to get started.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <BetaBanner />
          <Navbar />
          <main className="pt-[106px] min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
