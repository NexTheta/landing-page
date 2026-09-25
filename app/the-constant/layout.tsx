import type { Metadata } from "next"

const TITLE = "The Constant — A Day With Theta Sound"
const DESCRIPTION =
  "Scroll through one ordinary day and watch the noise around you resolve into calm — while Theta Sound stays the one constant that never changes."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/the-constant",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://nextheta.com/the-constant",
    siteName: "Theta Sound",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function TheConstantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
