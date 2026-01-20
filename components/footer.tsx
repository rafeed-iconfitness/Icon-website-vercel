"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"
import { AppDownloadWidgets } from "./app_download_widgets"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { ContactForm } from "@/components/contact-form"

export function Footer() {
  const pathname = usePathname()
  const [contactDialogOpen, setContactDialogOpen] = useState(false)

  return (
    <>
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-1 mb-6">
              <div className="text-2xl font-bold flex flex-row gap-2 justify-center items-center">
                <svg width="35" height="52" viewBox="0 0 35 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2914_19441)">
                    <path d="M-0.00292969 51.9929L34.6637 6.07031L6.46246 15.682L14.1911 20.4611L-0.00292969 51.9929Z" fill="#E9522B"/>
                    <path d="M26.7041 4.13997C26.7041 6.40481 24.8136 8.33561 22.6162 8.31779C20.4478 8.29997 18.5973 6.39591 18.6084 4.1912C18.6173 1.89518 20.4878 -0.00666339 22.7363 1.75485e-05C24.927 0.00669849 26.7041 1.86177 26.7041 4.13997Z" fill="#E9522B"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2914_19441">
                      <rect width="34.6667" height="52" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-white italic">ICON</span>
              </div>
            </Link>

            <AppDownloadWidgets />
          </div>

          <nav className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12 text-sm">
            <Link 
              href="/" 
              className={cn(
                "hover:text-[#FF5733] transition-colors",
                pathname === "/" && "text-[#FF5733] font-medium"
              )}
            >
              Home
            </Link>
            <Link 
              href="/trainers" 
              className={cn(
                "hover:text-[#FF5733] transition-colors",
                pathname === "/trainers" && "text-[#FF5733] font-medium"
              )}
            >
              Trainers
            </Link>
            <Link 
              href="/pricing" 
              className={cn(
                "hover:text-[#FF5733] transition-colors",
                pathname === "/pricing" && "text-[#FF5733] font-medium"
              )}
            >
              Pricing
            </Link>
            <Link 
              href="/about-us" 
              className={cn(
                "hover:text-[#FF5733] transition-colors",
                pathname === "/about-us" && "text-[#FF5733] font-medium"
              )}
            >
              About us
            </Link>
            <button 
              onClick={() => setContactDialogOpen(true)}
              className="hover:text-[#FF5733] transition-colors text-left cursor-pointer"
            >
              Contact us
            </button>
            <Link 
              href="/help" 
              className={cn(
                "hover:text-[#FF5733] transition-colors",
                pathname === "/help" && "text-[#FF5733] font-medium"
              )}
            >
              Help
            </Link>
          </nav>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/10">
          <div className="flex gap-4">
            <Link href="https://twitter.com" className="text-white/60 hover:text-[#FF5733] transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://facebook.com" className="text-white/60 hover:text-[#FF5733] transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" className="text-white/60 hover:text-[#FF5733] transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-white/60 hover:text-[#FF5733] transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
          <div className="text-sm text-white/60">
            Send Your Feedback :{" "}
            <Link href="mailto:icon@gmail.com" className="text-white hover:text-[#FF5733]">
              icon@gmail.com
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-white/60">
          <div>© 2025 ICON. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Condition
            </Link>
            <span>|</span>
            <Link href="/cookie-notice" className="hover:text-white transition-colors">
              Cookie Notice
            </Link>
            <span>|</span>
            <Link href="/copyright" className="hover:text-white transition-colors">
              Copyright Policy
            </Link>
            <span>|</span>
            <Link href="/data-policy" className="hover:text-white transition-colors">
              Data Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>

    <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Get in touch with our team. We'd love to hear from you.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  </>
  )
}
