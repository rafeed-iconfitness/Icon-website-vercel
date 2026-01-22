"use client"

import { useRef, useState, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Instagram, ChevronDown } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { ContactForm } from "@/components/contact-form"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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
  const footerRef = useRef<HTMLElement>(null)
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

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

  useGSAP(() => {
    if (!footerRef.current) return

    // Ensure elements are hidden initially via JS to avoid flash of unstyled content
    // but only if JS runs. CSS remains visible by default for SEO/No-JS.
    gsap.set([topRowRef.current, bottomRowRef.current], {
      y: 20,
      opacity: 0
    })

    // Top row animation
    gsap.to(topRowRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 95%", // Trigger slightly earlier to ensure visibility
        toggleActions: "play none none none",
      },
    })

    // Bottom row animation
    gsap.to(bottomRowRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
    })

    // Force a refresh after a short delay to account for any layout shifts
    setTimeout(() => ScrollTrigger.refresh(), 500)

  }, { scope: footerRef })

  return (
    <>
      <footer ref={footerRef} className="bg-black text-white py-6 border-t border-white/10">
        <div className="w-full mx-auto max-w-[1200px] px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">

            {/* Left: Logo & Copyright */}
            <div ref={topRowRef} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Group 7.svg"
                  alt="ICON"
                  width={100}
                  height={32}
                  className="w-auto h-6 md:h-8"
                  priority
                />
              </Link>
              <div className="text-xs text-white/50">© 2025 ICON. All rights reserved.</div>
            </div>

            {/* Right: Legal & Socials */}
            <div ref={bottomRowRef} className="flex items-center gap-6">
              {/* Legal Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setLegalDropdownOpen(!legalDropdownOpen)}
                  className="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
                >
                  <span>Legal</span>
                  <ChevronDown className={cn(
                    "w-3 h-3 transition-transform duration-200",
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
                        className="block px-4 py-2 text-xs text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="https://instagram.com" className="text-white/60 hover:text-[#FF5733] transition-colors">
                <Instagram className="w-5 h-5" />
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
              Get in touch with our team. We&apos;d love to hear from you.
            </DialogDescription>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </>
  )
}
