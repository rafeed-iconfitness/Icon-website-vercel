"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

interface HowItWorksIllustrationProps {
    isHovered?: boolean
}

export function HowItWorksIllustration({ isHovered = false }: HowItWorksIllustrationProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const dotsRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isInView, setIsInView] = useState(false)

    // Detect mobile viewport
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useGSAP(() => {
        if (!containerRef.current || !dotsRef.current) return

        // Pulse animation for the dots background - always running
        gsap.to(dotsRef.current, {
            opacity: 0.4,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        })

        // Subtly scale the dots for more depth
        gsap.to(dotsRef.current, {
            scale: 1.05,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        })

        // Mobile: Set up scroll trigger to detect when in view
        if (isMobile && iconRef.current) {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                onEnter: () => setIsInView(true),
                onLeave: () => setIsInView(false),
                onEnterBack: () => setIsInView(true),
                onLeaveBack: () => setIsInView(false),
            })
        }
    }, { scope: containerRef, dependencies: [isMobile] })

    // Icon animation based on hover (desktop) or in-view (mobile)
    useEffect(() => {
        if (!iconRef.current) return

        const shouldAnimate = isMobile ? isInView : isHovered

        if (shouldAnimate) {
            // Animate to floating state
            gsap.to(iconRef.current, {
                y: -10,
                duration: 0.6,
                ease: "power2.out",
            })
            // Add continuous subtle float
            gsap.to(iconRef.current, {
                y: -15,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.6,
            })
        } else {
            // Reset to original position
            gsap.killTweensOf(iconRef.current)
            gsap.to(iconRef.current, {
                y: 0,
                duration: 0.4,
                ease: "power2.out",
            })
        }
    }, [isHovered, isInView, isMobile])

    return (
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
            {/* Background Dots - Pulsating Orange */}
            <div ref={dotsRef} className="absolute inset-0 flex items-center justify-center opacity-70">
                <Image
                    src="/howItWorks/06f09a5283d23e6997b2c7ecc7440c9640f49b88.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover"
                    style={{
                        filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(100%) contrast(97%)'
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
