import type { Metadata } from "next"

// Internal experiments page: reachable by URL, but kept out of search results.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return children
}
