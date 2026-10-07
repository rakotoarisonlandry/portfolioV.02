import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import AppWrapper from "@/components/layout/AppWrapper";
import { themeInitScript } from "@/lib/theme";
import { LanguageProvider } from "@/components/layout/language-provider";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Landry - Développeur fullstack, web & mobile",
    template: "%s | Landry",
  },
  description:
    "Portfolio de Landry Rakotoarison, développeur fullstack à Madagascar. Découvrez mes projets web et mobile : RobIA, Plastikôo et mes réalisations React, Next.js et React Native.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a href="#main-content" className="fixed -top-24 left-5 z-[100] rounded-lg border-2 border-[#7046d5] bg-white px-5 py-3 dark:bg-[#24222c] dark:text-white focus:top-3">
          Aller au contenu
        </a>
        <AppWrapper>
          <LanguageProvider>
            <Navigation />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </AppWrapper>
      </body>
    </html>
  );
}
