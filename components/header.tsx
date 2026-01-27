"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ContactForm } from "@/components/contact-form"
import { WaitlistButton } from "@/components/waitlist-button"
import styles from "@/styles/header.module.css"
import { cn } from "@/lib/utils"
import { ApplyNowButton } from "@/components/apply-now-button"
import gsap from "gsap"

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact Us', href: '#' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const [underlineStyle, setUnderlineStyle] = useState({})
  const navItemsRef = useRef<{ [key: string]: HTMLLIElement | null }>({})

  const [contactDialogOpen, setContactDialogOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
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
      setUnderlineStyle({ width: 0, left: 0 })
    }
  }, [pathname])

  const isTrainersPage = pathname === '/trainers'
  const buttonText = isTrainersPage ? 'Apply Now' : 'Join Waitlist'

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setContactDialogOpen(true)
    closeMenu()
  }

  const handleApplyNowClick = () => {
    const startY = window.scrollY
    const tweenObj = { p: 0 }
    gsap.to(tweenObj, {
      p: 1,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: () => {
        const currentMax = document.documentElement.scrollHeight - window.innerHeight
        const nextY = startY + (currentMax - startY) * tweenObj.p
        window.scrollTo(0, nextY)
      }
    })
    closeMenu()
  }

  const commonButtonProps = {
    className: cn(isTrainersPage ? "bg-[#3f93cb] hover:bg-[#327ba8] shadow-[0_0_15px_rgba(63,147,203,0.3)] hover:shadow-[0_0_25px_rgba(63,147,203,0.5)]" : ""),
    showIcon: true,
    iconClassName: isTrainersPage ? "text-[#3f93cb]" : "",
  }

  return (
    <>
      {/* Changes:
        1. Added conditional `styles.navOpen` to navbar
        2. Added conditional `styles.hiddenWhenOpen` to Logo section
        3. Added conditional `styles.hiddenWhenOpen` to Mobile Button
      */}
      <nav className={cn(styles.navbar, menuOpen ? styles.navOpen : '')}>
        <div className={styles.container}>
          {/* Part 1: Logo - Fades out when menu open */}
          <div className={cn(styles.navSection, styles.navLeft, menuOpen ? styles.hiddenWhenOpen : '')}>
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
            {isTrainersPage ? (
              <ApplyNowButton
                onClick={handleApplyNowClick}
                variant="default"
              />
            ) : (
              <WaitlistButton {...commonButtonProps}>
                {buttonText}
              </WaitlistButton>
            )}
          </div>

          {/* Wrapper for Mobile Controls */}
          <div className={styles.mobileControls}>
            {/* Mobile Button - Fades out when menu open */}
            {/* Mobile Button - Fades out when menu open */}
            {isTrainersPage ? (
              <ApplyNowButton
                onClick={handleApplyNowClick}
                variant="default"
                className={cn("!h-9 !px-4 !text-sm", menuOpen ? styles.hiddenWhenOpen : '')}
                showIcon={true}
              />
            ) : (
              <WaitlistButton
                {...commonButtonProps}
                className={cn(commonButtonProps.className, "!h-9 !px-4 !text-sm", menuOpen ? styles.hiddenWhenOpen : '')}
              >
                {buttonText}
              </WaitlistButton>
            )}

            {/* Hamburger - Always visible */}
            <div
              className={cn(styles.hamburger, menuOpen ? styles.open : '')}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <ul className={cn(styles.navLinks, menuOpen ? styles.active : '')}>
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

      {/* Dialogs */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent
          className="max-w-lg"
          onOpenAutoFocus={(e) => {
            if (window.innerWidth < 768) {
              e.preventDefault()
            }
          }}
        >
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