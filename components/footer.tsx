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
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookie-notice" className="hover:text-white transition-colors">
                Cookie Notice
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
