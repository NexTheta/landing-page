"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function WaitlistDialog({ triggerClassName = "" }: { triggerClassName?: string }) {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")

  function submit() {
    toast({
      title: "You're on the list.",
      description: "We’ll ping you when we’re ready to liberate your attention.",
    })
    setOpen(false)
    setEmail("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName} variant="filled">
          Join Waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background text-foreground border-border">
        <DialogHeader>
          <DialogTitle className="font-sentient text-2xl">Join the Waitlist</DialogTitle>
          <DialogDescription className="text-foreground/70">
            Screenless. Presence. No distractions. Drop your email to get in early.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 mt-4">
          <Input
            type="email"
            placeholder="you@presence.xyz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background border-border"
          />
          <Button onClick={submit} variant="default">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
