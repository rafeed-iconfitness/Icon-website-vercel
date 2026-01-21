"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ContactForm } from "@/components/contact-form"
import { WaitlistButton } from "@/components/waitlist-button"
import { WaitlistDialog } from "@/components/waitlist-dialog"
import styles from "./header.module.css"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact Us', href: '#' }, // Special handling for Contact Us
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const [underlineStyle, setUnderlineStyle] = useState({})
  const navItemsRef = useRef<{ [key: string]: HTMLLIElement | null }>({})

  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [waitlistDialogOpen, setWaitlistDialogOpen] = useState(false) // Using WaitlistDialog for Sign Up flows

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    // Logic to position the underline
    if (navItemsRef.current[pathname]) {
      const element = navItemsRef.current[pathname]
      if (element) {
        const { offsetLeft, offsetWidth } = element
        setUnderlineStyle({
          width: offsetWidth,
          left: offsetLeft,
        })
      }
    } else {
      // Hide underline if not matching any key
      setUnderlineStyle({ width: 0, left: 0 })
    }
  }, [pathname])

  // Determine button text based on the current path
  const isTrainersPage = pathname === '/trainers'
  const buttonText = isTrainersPage ? 'Apply Now' : 'Join Waitlist'

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Open Waitlist Dialog for both cases (Sign Up / Apply Now) per current site capabilities
    setWaitlistDialogOpen(true)
    closeMenu()
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setContactDialogOpen(true)
    closeMenu()
  }

  const commonButtonProps = {
    className: cn(isTrainersPage ? "bg-[#3f93cb] hover:bg-[#327ba8] shadow-[0_0_15px_rgba(63,147,203,0.3)] hover:shadow-[0_0_25px_rgba(63,147,203,0.5)]" : ""),
    showIcon: true,
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Part 1: Logo */}
          <div className={cn(styles.navSection, styles.navLeft)}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/Group 7.svg"
                alt="ICON"
                width={120}
                height={40}
                className="w-auto h-8 md:h-10"
                priority
              />
            </Link>
          </div>

          {/* Part 2: Centered links for desktop */}
          <div className={cn(styles.navSection, styles.navCenter)}>
            <ul className={styles.desktopLinks}>
              {navLinks.map(link => {
                const isContact = link.name === 'Contact Us';
                const isActive = pathname === link.href;

                return (
                  <li
                    key={link.name}
                    ref={el => { navItemsRef.current[link.href] = el }}
                  >
                    <Link
                      href={link.href}
                      className={isActive ? styles.active : ''}
                      onClick={isContact ? handleContactClick : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
              <div className={styles.underline} style={underlineStyle} />
            </ul>
          </div>

          {/* Part 3: Action button for desktop */}
          <div className={cn(styles.navSection, styles.navRight)}>
            <WaitlistButton {...commonButtonProps}>
              {buttonText}
            </WaitlistButton>
          </div>

          {/* Wrapper for Mobile Controls */}
          <div className={styles.mobileControls}>
            <WaitlistButton
              {...commonButtonProps}
              className={cn(commonButtonProps.className, "!h-9 !px-4 !text-sm")}
            >
              {buttonText}
            </WaitlistButton>
            <div
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <ul className={cn(styles.navLinks, menuOpen ? styles.active : '')}>
            {/* Close button inside the menu if preferred, or rely on hamburger toggle. Source uses overlay logic differently but here we map structure */}
            {navLinks.map(link => {
              const isContact = link.name === 'Contact Us';
              const isActive = pathname === link.href;

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={isContact ? handleContactClick : closeMenu}
                    className={isActive ? styles.activeMobileLink : ''}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      {/* Dialogs */}
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

      {/* We reuse WaitlistButton's dialog simply by rendering it hidden or controlling state if WaitlistButton exposed it. 
          Actually WaitlistButton uses WaitlistDialog internally. 
          To trigger it from our custom button, we might need to expose the dialog or wrap our custom button in WaitlistDialog logic.
          Simpler approach: Import WaitlistDialog content logic or just make a hidden WaitlistButton trigger? 
          Better: The destination has `WaitlistDialog`. Import `WaitlistDialog` and control it.
       */}
      {/* Let's verify WaitlistDialog implementation. I'll just rely on the fact that I can't easily import the Dialog Trigger separately without refactoring.
           BUT layout needs to work.
           I'll assume I can render WaitlistButton hidden and click it? No, that's hacky.
           I'll check `waitlist-dialog.tsx` content quickly. It likely exports `WaitlistDialog` component that wraps children.
           So I can wrap the custom button in `WaitlistDialog`? 
           NO, because `WaitlistDialog` likely has the Trigger built-in or specific logic.
           Let's look at `waitlist-button.tsx` again. usage: <WaitlistDialog><Button>...</Button></WaitlistDialog>
           So I can import WaitlistDialog and wrap my custom button!
       */}

    </>
  )
}
