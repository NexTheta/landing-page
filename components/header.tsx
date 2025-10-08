import Link from "next/link"
import Image from "next/image"
import { MobileMenu } from "./mobile-menu"
import { Button } from "@/components/ui/button"

export const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <header className="border-b border-border/50 bg-black/70 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/theta-logo.png"
              alt="Theta Sound logo"
              width={120}
              height={120}
              className="h-10 w-auto transition-transform duration-300 will-change-transform hover:rotate-3 hover:scale-110"
              priority
            />
            <span className="sr-only">Theta Sound</span>
          </Link>

          <nav className="max-lg:hidden absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
            {["mission", "tech", "press", "contact"].map((item) => (
              <Link
                key={item}
                href={`/#${item}`}
                className="text-xs font-mono uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-foreground"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="max-lg:hidden">
            <Link href="/#waitlist">
              <Button size="sm" className="tracking-[0.15em] uppercase">
                Join Waitlist
              </Button>
            </Link>
          </div>

          <MobileMenu />
        </div>
      </header>
    </div>
  )
}
