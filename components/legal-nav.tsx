"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, ChevronRight } from "lucide-react"

const legalPages = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookie-notice", label: "Cookie Notice" },
  { href: "/copyright", label: "Copyright" },
  { href: "/data-policy", label: "Data Policy" },
  { href: "/help", label: "Help Center" },
]

export function LegalNav() {
  const pathname = usePathname()

  return (
    <div className="bg-background border-b border-border sticky top-0 z-30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="py-2 flex items-center gap-2 text-sm">
          <Link 
            href="/" 
            className="flex items-center gap-1 text-muted-foreground hover:text-[#FF5733] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground font-medium">
            {legalPages.find(page => page.href === pathname)?.label || "Legal"}
          </span>
        </div>

        {/* Legal Pages Navigation */}
        <div className="overflow-x-auto">
          <nav className="flex gap-1 pb-px min-w-max">
            {legalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2",
                  pathname === page.href
                    ? "text-[#FF5733] border-[#FF5733]"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
                )}
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
