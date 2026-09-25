import type { Metadata } from "next"

const TITLE = "The Constant: a day with Theta Sound"
const DESCRIPTION =
  "Scroll through one ordinary day and watch the noise around you settle. Theta Sound is the one thing that stays the same the whole way through."

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
