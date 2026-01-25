"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { ApplyNowButton } from "@/components/apply-now-button"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export function TrainerHeroSection() {
    const heroRef = useRef<HTMLElement>(null)
    const backgroundRef = useRef<HTMLDivElement>(null)
    const retentionRef = useRef<HTMLDivElement>(null)
    const clientsJoinedRef = useRef<HTMLDivElement>(null)
    const athleteRef = useRef<HTMLDivElement>(null)
    const clientSuccessRef = useRef<HTMLDivElement>(null)
    const monthlyEarnRef = useRef<HTMLDivElement>(null)
    const labelRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const subtextRef = useRef<HTMLParagraphElement>(null)
    const buttonRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!heroRef.current) return

        // Set initial state - hide all elements before animation
        const elementsToAnimate = [
            retentionRef.current,
            clientsJoinedRef.current,
            athleteRef.current,
            clientSuccessRef.current,
            monthlyEarnRef.current,
            labelRef.current,
            headingRef.current,
            subtextRef.current,
            buttonRef.current,
        ].filter(Boolean)

        gsap.set(elementsToAnimate, { opacity: 0, y: 20 })
        if (athleteRef.current) gsap.set(athleteRef.current, { opacity: 0, x: 40, y: 0 })
        if (backgroundRef.current) gsap.set(backgroundRef.current, { opacity: 0, scale: 1.05 })

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

        // Animation sequence - 0.4s each, slightly overlapping
        // Order: Background -> Retention -> Clients Joined -> Athlete -> Client Success -> Monthly Earn -> Label -> Heading -> Subtext -> Button

        if (backgroundRef.current) {
            tl.to(backgroundRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
            })
        }

        if (retentionRef.current) {
            tl.to(retentionRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
            }, "-=0.2")
        }

        if (clientsJoinedRef.current) {
            tl.to(clientsJoinedRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
            }, "-=0.2")
        }

        if (athleteRef.current) {
            tl.to(athleteRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.4,
            }, "-=0.2")
        }

        if (clientSuccessRef.current) {
            tl.to(clientSuccessRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
            }, "-=0.2")
        }

        if (monthlyEarnRef.current) {
            tl.to(monthlyEarnRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
            }, "-=0.2")
        }

        if (labelRef.current) {
            tl.to(labelRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
            }, "-=0.2")
        }

        if (headingRef.current) {
            tl.to(headingRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
            }, "-=0.2")
        }

        if (subtextRef.current) {
            tl.to(subtextRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
            }, "-=0.2")
        }

        if (buttonRef.current) {
            tl.to(buttonRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
            }, "-=0.2")
        }

        // Parallax effect for background on scroll
        if (backgroundRef.current) {
            gsap.to(backgroundRef.current, {
                y: 150,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            })
        }

    }, { scope: heroRef })

    return (

        <section ref={heroRef} className="relative min-h-[60vh] h-auto w-full overflow-hidden flex items-start justify-center bg-black pb-8 md:pb-12">

            {/* Background Image Layer - Full Section Coverage */}
            <div
                ref={backgroundRef}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/TrainerHero/Background.svg"
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Horizontal Edge Fades - Subtle fade to black on sides */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
                {/* Bottom Fade to Black matching homepage hero */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>

            {/* Constrained Container for Assets matching Header Width */}
            <div className="max-w-[1200px] mx-auto w-full relative h-[700px] md:h-[850px] mt-1 md:mt-2">

                {/* Floating Stats - Positioned within constrained container */}
                {/* Monthly Earn - Top Right */}
                <div
                    ref={monthlyEarnRef}
                    className="absolute top-[22%] right-[-8%] z-20 hidden md:block brightness-110"
                >
                    <Image
                        src="/TrainerHero/Monthly Earn.svg"
                        alt="£2.2k Monthly Earn"
                        width={240}
                        height={80}
                    />
                </div>

                {/* Clients Joined */}
                <div
                    ref={clientsJoinedRef}
                    className="absolute top-[31%] right-[27%] z-5 hidden md:block brightness-110"
                >
                    <Image
                        src="/TrainerHero/Clients Joined.svg"
                        alt="+8 Clients Joined"
                        width={230}
                        height={70}
                    />
                </div>

                {/* Client Success */}
                <div
                    ref={clientSuccessRef}
                    className="absolute top-[60%] right-[2%] z-20 hidden md:block brightness-110"
                >
                    <Image
                        src="/TrainerHero/Client Success.svg"
                        alt="Client Success: 89%"
                        width={230}
                        height={70}
                    />
                </div>

                {/* Retention */}
                <div
                    ref={retentionRef}
                    className="absolute bottom-[25%] right-[38%] z-5 hidden md:block brightness-110"
                >
                    <Image
                        src="/TrainerHero/Retention.svg"
                        alt="Retention +12%"
                        width={230}
                        height={70}
                    />
                </div>

                {/* Athlete Image - Centered/Right closer to text */}
                <div
                    ref={athleteRef}
                    className="absolute -right-36 bottom-0 w-[65%] h-[100%] z-10 hidden md:block"
                >
                    <Image
                        src="/TrainerHero/Athlete.svg"
                        alt="Athlete"
                        fill
                        className="object-contain object-bottom"
                    />
                    {/* Athlete Fade to Background */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Text Content - Left Aligned in Container */}
                <div className="relative z-20 h-full flex flex-col justify-center max-w-xl lg:max-w-3xl px-4 py-12">
                    {/* Label */}
                    <div
                        ref={labelRef}
                        className="text-[#3B82F6] text-base font-bold tracking-widest uppercase mb-6"
                    >
                        BECOME AN ICON
                    </div>

                    {/* Heading matching HeroSection typography */}
                    <h1
                        ref={headingRef}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[90px] font-black text-white tracking-normal leading-[0.9] sm:leading-[0.85] mb-6 md:mb-8 font-sans"
                    >
                        Clone your coaching.
                        <br />
                        Multiply your impact.
                    </h1>

                    {/* Subtext */}
                    <p
                        ref={subtextRef}
                        className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-8 md:mb-10"
                    >
                        Turn your expertise into a 24/7/365 AI training system.
                    </p>

                    {/* Apply Now Button */}
                    <div ref={buttonRef}>
                        <ApplyNowButton variant="pill" showIcon={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}
