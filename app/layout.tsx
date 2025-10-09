import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Theta Sound — Screenless. Presence. No Distractions.",
  description:
    "Theta Sound builds screenless, emotion-first wearable tech. Liberation from glowing rectangles. Presence over pings.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: '/images/theta-symbol.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/theta-symbol.png', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
