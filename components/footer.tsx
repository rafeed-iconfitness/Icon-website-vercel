"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Instagram, ChevronDown } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { useState, useRef, useEffect } from "react"
import { ContactForm } from "@/components/contact-form"

const legalPages = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookie-notice", label: "Cookie Policy" },
  { href: "/eula", label: "EULA" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/refund-policy", label: "Refund Policy" },
]

export function Footer() {
  const pathname = usePathname()
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [legalDropdownOpen, setLegalDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLegalDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="w-full mx-auto max-w-[1200px] px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-1">
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
            </div>

            <div className="flex items-center gap-6">
              <Link href="https://instagram.com" className="text-white/60 hover:text-[#FF5733] transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>© 2025 ICON. All rights reserved.</div>

            {/* Legal Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLegalDropdownOpen(!legalDropdownOpen)}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
              >
                <span>Legal</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  legalDropdownOpen && "rotate-180"
                )} />
              </button>

              {/* Dropdown Menu */}
              {legalDropdownOpen && (
                <div className="absolute right-0 bottom-full mb-2 w-56 rounded-xl bg-zinc-900 border border-white/10 shadow-xl py-2 z-50">
                  {legalPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={() => setLegalDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              )}
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

