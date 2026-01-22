"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { TypewriterText } from "./typewriter-text"
import { WaitlistButton } from "./waitlist-button"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const backgroundRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const paragraphRef = useRef<HTMLParagraphElement>(null)
    const buttonRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!containerRef.current) return

        // Parallax effect for background
        gsap.to(backgroundRef.current, {
            y: 300,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        })

        // Blur effect on scroll
        gsap.to(backgroundRef.current, {
            filter: "blur(15px)",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "500px top",
                scrub: true,
            },
        })

        // Content entrance animations
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

        tl.from(contentRef.current, {
            opacity: 0,
            x: -30,
            duration: 0.8,
            delay: 0.2,
        })
            .from(headingRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.6,
            }, "-=0.5")
            .from(paragraphRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.6,
            }, "-=0.3")
            .from(buttonRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.6,
            }, "-=0.3")

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative min-h-[60vh] h-auto w-full overflow-hidden flex items-center justify-start bg-black pt-24 md:pt-24 pb-8 md:pb-12">
            {/* Background Image with Parallax & Blur */}
            <div
                ref={backgroundRef}
                className="absolute inset-0 z-0"
                style={{ filter: "blur(0px)" }}
            >
                <div className="relative w-full h-full md:absolute md:left-[55%] md:w-[60%] md:top-0">
                    <Image
                        src="/IconGuyWithPhone.png"
                        alt="Icon Fitness Background"
                        fill
                        className="object-contain object-center md:object-left-bottom"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
                </div>
            </div>

            {/* Bottom Fade to Black */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-[1] pointer-events-none" />

            {/* Content */}
            <div
                ref={contentRef}
                className="relative z-10 w-full px-4 sm:px-8 py-8 flex flex-col justify-center"
            >
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1
                            ref={headingRef}
                            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[100px] font-black text-white tracking-normal leading-[0.9] sm:leading-[0.85] mb-4 sm:mb-6 md:mb-8 font-sans"
                        >
                            YOU DON&apos;T NEED
                            <br />
                            <span className="whitespace-nowrap text-white">
                                MORE <TypewriterText />
                            </span>
                            <br />
                            YOU NEED AN <span className="text-[#FF5733] inline-block font-black">ICON.</span>
                        </h1>

                        <p
                            ref={paragraphRef}
                            className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-6 sm:mb-8 md:mb-10"
                        >
                            Download your favorite athlete&apos;s brain. Straight to your phone.
                        </p>

                        <div ref={buttonRef}>
                            <WaitlistButton variant="pill" showIcon={true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}