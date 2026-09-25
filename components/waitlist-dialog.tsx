"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabase"

export function WaitlistDialog({ triggerClassName = "" }: { triggerClassName?: string }) {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    // Validation
    if (!email || !name) {
      toast({ 
        title: "Missing information", 
        description: "Please fill in all fields.", 
        variant: "destructive" 
      })
      return
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast({ 
        title: "Invalid email", 
        description: "Please enter a valid email address.", 
        variant: "destructive" 
      })
      return
    }
    
    setLoading(true)
    
    try {
      const insertData = { 
        email: email.toLowerCase().trim(), 
        name: name.trim()
      }
      
      console.log('🔄 Attempting to insert into Supabase:', insertData)
      console.log('📍 Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
      console.log('🔑 Has API Key:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
      
      const { data, error } = await supabase
        .from("waitlist")
        .insert([insertData])
        .select()
        
      console.log('✅ Supabase response - Data:', data)
      console.log('❌ Supabase response - Error:', error)
        
      if (error) {
        console.error('Supabase error:', error)
        
        const errorMessage = error.message || JSON.stringify(error)
        const errorCode = error.code
        
        // Check for RLS policy violation
        if (errorCode === "42501" || errorMessage.includes("row-level security") || errorMessage.includes("policy")) {
          toast({ 
            title: "🔒 Security Policy Issue", 
            description: "Please run fix-rls.sql in Supabase SQL Editor to allow public signups.", 
            variant: "destructive" 
          })
          return
        }
        
        // Check if table doesn't exist
        if (errorMessage.includes("table") || errorMessage.includes("waitlist") || errorMessage.includes("schema cache") || errorMessage.includes("relation")) {
          toast({ 
            title: "⚠️ Database Setup Required", 
            description: "The waitlist table hasn't been created yet. Please run the SQL script in create-waitlist-table.sql", 
            variant: "destructive" 
          })
          return
        }
        
        // Check for duplicate email
        if (errorCode === "23505" || errorMessage.includes("duplicate") || errorMessage.includes("unique")) {
          toast({ 
            title: "Already registered! ✓", 
            description: "This email is already on the waitlist. We'll be in touch soon!" 
          })
          setOpen(false)
          setEmail("")
          setName("")
          return
        }
        
        throw error
      }
      
      // Success!
      toast({ 
        title: "🎉 You're on the list!", 
        description: "We'll notify you when Theta Sound is ready." 
      })
      setOpen(false)
      setEmail("")
      setName("")
      
    } catch (error: any) {
      console.error('Error submitting to waitlist:', error)
      toast({ 
        title: "Oops, something went wrong", 
        description: error?.message || "Please check your connection and try again.", 
        variant: "destructive" 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className={triggerClassName || "px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium text-sm shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"}>
          Join Waitlist
        </button>
      </DialogTrigger>
      
      <DialogContent className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 sm:max-w-[480px] shadow-2xl">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-3xl font-light text-gray-900 dark:text-white">
            Join the Waitlist
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600 dark:text-gray-400">
            Get early access to Theta Sound before it launches.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-900 dark:text-white block">
              Full Name
            </label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Enter your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              disabled={loading} 
              required 
              className="h-12 text-base bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-500 rounded-lg px-4"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-900 dark:text-white block">
              Email Address
            </label>
            <Input 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              disabled={loading} 
              required 
              className="h-12 text-base bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-500 rounded-lg px-4"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 text-base bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 mt-6" 
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Joining...
              </span>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
