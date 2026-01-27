"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { FlipCard } from "./flip-card"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const coachCards = [
    "/trainerPainPoints/coach/coach1.png",
    "/trainerPainPoints/coach/coach2.png",
    "/trainerPainPoints/coach/coach3.png",
    "/trainerPainPoints/coach/coach4.png",
]

const creatorCards = [
    "/trainerPainPoints/creator/create1.png",
    "/trainerPainPoints/creator/create2.png",
    "/trainerPainPoints/creator/create3.png",
    "/trainerPainPoints/creator/create4.png",
]

export function TrainerPainPoints() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const cardsContainerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!sectionRef.current) return

        // Set initial states
        gsap.set(headerRef.current, { opacity: 0, y: 30 })
        gsap.set(cardsContainerRef.current, { opacity: 0, y: 40 })

        // Header animation
        gsap.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        })

        // Cards container animation
        gsap.to(cardsContainerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="pt-0 pb-20 md:pt-0 md:pb-32 bg-black">
            <div className="w-full max-w-[1200px] mx-auto px-8">
                {/* Header */}
                <div ref={headerRef} className="mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        Why fitness careers don&apos;t scale
                    </h2>
                    <p className="text-white/60 text-base md:text-lg max-w-xl">
                        Whether you coach clients or create content, your growth eventually hits a ceiling.
                    </p>
                </div>

                {/* Cards Container */}
                <div
                    ref={cardsContainerRef}
                    className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 lg:gap-32"
                >
                    {/* Coaches Column */}
                    <FlipCard cards={coachCards} label="Coaches" labelColor="#B08F7D" />

                    {/* Creators Column */}
                    <FlipCard cards={creatorCards} label="Creators" labelColor="#728983" />
                </div>
            </div>
        </section>
    )
}
