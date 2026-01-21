"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const legalPages = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookie-notice", label: "Cookie Policy" },
  { href: "/eula", label: "EULA" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/refund-policy", label: "Refund Policy" },
]

export function LegalNav() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const currentPage = legalPages.find(page => page.href === pathname)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur-md">
      <div className="w-full mx-auto max-w-[1200px] px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icon.svg"
              alt="ICON"
              width={28}
              height={42}
              className="w-auto h-7"
            />
            <span className="text-white font-bold text-lg tracking-tighter italic">ICON</span>
          </Link>

          {/* Legal Page Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
            >
              <span className="text-sm font-medium">
                {currentPage?.label || "Legal"}
              </span>
              <ChevronDown className={cn(
                "w-4 h-4 transition-transform duration-200",
                dropdownOpen && "rotate-180"
              )} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-zinc-900 border border-white/10 shadow-xl py-2 z-50">
                {legalPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={() => setDropdownOpen(false)}
                    className={cn(
                      "block px-4 py-2.5 text-sm transition-colors",
                      pathname === page.href
                        ? "text-[#FF5733] bg-white/5"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Home Link */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-[#FF5733] transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
