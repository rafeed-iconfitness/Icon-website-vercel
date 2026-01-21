"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { ContactForm } from "@/components/contact-form"
import { WaitlistButton } from "@/components/waitlist-button"

import { motion } from "framer-motion"

export function Header() {
  const pathname = usePathname()
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-1">
              <div className="text-2xl font-bold flex flex-row gap-2 justify-center items-center">
                <Image
                  src="/icon.svg"
                  alt="ICON"
                  width={35}
                  height={52}
                  className="w-auto h-8 md:h-10"
                />
                <span className="text-white font-bold text-xl tracking-tighter italic">ICON</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={cn(
                  "hover:text-[#FF5733] transition-colors",
                  pathname === "/" ? "text-[#FF5733] font-medium" : "text-white"
                )}
              >
                Home
              </Link>
              <Link
                href="/trainers"
                className={cn(
                  "hover:text-[#FF5733] transition-colors",
                  pathname === "/trainers" ? "text-[#FF5733] font-medium" : "text-white"
                )}
              >
                Trainers
              </Link>
              <Link
                href="/pricing"
                className={cn(
                  "hover:text-[#FF5733] transition-colors",
                  pathname === "/pricing" ? "text-[#FF5733] font-medium" : "text-white"
                )}
              >
                Pricing
              </Link>
              <Link
                href="/about-us"
                className={cn(
                  "hover:text-[#FF5733] transition-colors",
                  pathname === "/about-us" ? "text-[#FF5733] font-medium" : "text-white"
                )}
              >
                About Us
              </Link>
              <button
                onClick={() => setContactDialogOpen(true)}
                className="text-white hover:text-[#FF5733] transition-colors cursor-pointer"
              >
                Contact Us
              </button>

            </nav>

            <div className="flex items-center gap-4">
              <WaitlistButton variant="outline" className="hidden md:inline-flex" />
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-gradient-to-br from-black via-black to-[#FF5733]/10 border-l border-white/10 z-50 md:hidden overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-[#FF5733]/20 to-transparent">
                <span className="text-white font-semibold text-lg">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-all hover:rotate-90 duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col p-4 space-y-3">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105",
                    pathname === "/"
                      ? "bg-gradient-to-r from-[#FF5733] to-[#E9522B] text-white shadow-lg shadow-[#FF5733]/50"
                      : "text-white hover:bg-white/10 hover:translate-x-1"
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/trainers"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105",
                    pathname === "/trainers"
                      ? "bg-gradient-to-r from-[#FF5733] to-[#E9522B] text-white shadow-lg shadow-[#FF5733]/50"
                      : "text-white hover:bg-white/10 hover:translate-x-1"
                  )}
                >
                  Trainers
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105",
                    pathname === "/pricing"
                      ? "bg-gradient-to-r from-[#FF5733] to-[#E9522B] text-white shadow-lg shadow-[#FF5733]/50"
                      : "text-white hover:bg-white/10 hover:translate-x-1"
                  )}
                >
                  Pricing
                </Link>
                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105",
                    pathname === "/about-us"
                      ? "bg-gradient-to-r from-[#FF5733] to-[#E9522B] text-white shadow-lg shadow-[#FF5733]/50"
                      : "text-white hover:bg-white/10 hover:translate-x-1"
                  )}
                >
                  About Us
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setContactDialogOpen(true)
                  }}
                  className="py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-all duration-300 text-left hover:translate-x-1 transform"
                >
                  Contact Us
                </button>
              </nav>

              <div className="mt-auto p-4 border-t border-white/10">
                <WaitlistButton className="w-full" />
              </div>
            </div>
          </div>
        </>
      )}

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
