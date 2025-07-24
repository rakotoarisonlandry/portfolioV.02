import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Landry - Developpeur fullstack",
  description:
    "A Creative Developer based in France. I strive to build immersive and beautiful web applications through carefully crafted user-friendly design.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="bg-white text-gray-900 font-poppins antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
