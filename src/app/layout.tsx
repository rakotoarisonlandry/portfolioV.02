import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { BackgroundCanvas } from "@/components/layout/background-canvas";
import AppWrapper from "@/components/layout/AppWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Landry - Developer fullstack",
  description:
    "A Fullstack Developer. I strive to build immersive and beautiful web applications through carefully crafted user-friendly design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="bg-white text-white font-poppins antialiased">
        <AppWrapper>
          <BackgroundCanvas />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AppWrapper>
      </body>
    </html>
  );
}