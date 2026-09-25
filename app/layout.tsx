import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const BASE_URL = "https://nextheta.com"
const TITLE = "Theta Sound — Screenless AI Executive Assistant"
const DESCRIPTION =
  "Theta is a screenless AI executive assistant that listens, comprehends, and executes the operational tasks creating friction in your day — so you can focus on what you're best at."

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "_y88fZF4xuZA4G945oUi6sP2oatn_X0HEJkxtANHC5U",
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: '/images/theta-symbol.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/theta-symbol.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: "Theta Sound",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Theta Sound",
      alternateName: ["Theta", "NexTheta"],
      url: BASE_URL,
      logo: `${BASE_URL}/images/theta-symbol.png`,
      description: DESCRIPTION,
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Theta Sound",
      alternateName: ["Theta", "NexTheta"],
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "Product",
      "@id": `${BASE_URL}/#product`,
      name: "Theta Sound",
      description:
        "Screenless AI executive assistant built into true wireless (TWS) earbuds, with a voice operating system, biometric sensors, and adaptive active noise cancellation (AANC).",
      brand: { "@id": `${BASE_URL}/#organization` },
      category: "Wearable AI assistant",
      image: `${BASE_URL}/opengraph-image`,
      url: BASE_URL,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
