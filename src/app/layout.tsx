import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { cn } from "@/lib/utils"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nexora Digital: Smarter Factories, Sustainable Tomorrow",
  description: "Empowering Malaysian manufacturers through energy efficiency, operational visibility, and end-to-end digitalisation.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(geistSans.variable, geistMono.variable)}>
      <body className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
