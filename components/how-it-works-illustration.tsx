"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image"

interface HowItWorksIllustrationProps {
    isHovered?: boolean
    isActive?: boolean
}

export function HowItWorksIllustration({ isHovered = false, isActive = false }: HowItWorksIllustrationProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const dotsRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)

    // Detect mobile viewport
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // Animation based on hover (desktop) or isActive (mobile carousel)
    useEffect(() => {
        if (!dotsRef.current || !iconRef.current) return

        // On mobile: animate when this card is active in carousel
        // On desktop: animate on hover only
        const shouldAnimate = isMobile ? isActive : isHovered

        if (shouldAnimate) {
            // Dots pulse animation
            gsap.to(dotsRef.current, {
                opacity: 0.4,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            })

            // Dots scale animation
            gsap.to(dotsRef.current, {
                scale: 1.05,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            })

            // Icon float animation
            gsap.to(iconRef.current, {
                y: -10,
                duration: 0.6,
                ease: "power2.out",
            })
            gsap.to(iconRef.current, {
                y: -15,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.6,
            })
        } else {
            // Reset all animations
            gsap.killTweensOf(dotsRef.current)
            gsap.killTweensOf(iconRef.current)

            // Reset dots to initial state
            gsap.to(dotsRef.current, {
                opacity: 0.3,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
            })

            // Reset icon to original position
            gsap.to(iconRef.current, {
                y: 0,
                duration: 0.4,
                ease: "power2.out",
            })
        }
    }, [isHovered, isActive, isMobile])

    return (
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
            {/* Background Dots - Pulsating Orange */}
            <div ref={dotsRef} className="absolute inset-0 flex items-center justify-center opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(/howItWorks/06f09a5283d23e6997b2c7ecc7440c9640f49b88.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(100%) contrast(97%)',
                    }}
                />
            </div>

            {/* Main Icon */}
            <div ref={iconRef} className="relative z-10 w-24 h-24 md:w-32 md:h-32">
                <Image
                    src="/howItWorks/Frame 2085667752.svg"
                    alt="Feature Icon"
                    fill
                    className="object-contain drop-shadow-2xl"
                />
            </div>
        </div>
    )
}
