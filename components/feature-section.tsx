"use client"

import { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { FeatureCard } from "./feature-card"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const features = [
    {
        title: "Personalised plans",
        description: "Your goals, your schedule, your body fully customised by AI and athlete expertise.",
        imageSrc: "/Personal Plans.jpg",
        imageAlt: "Personalised Plans Interface",
    },
    {
        title: "Track everything",
        description: "From workouts to recovery, nutrition to mood every metric that matters, all in one place.",
        imageSrc: "/Track Everything.jpg",
        imageAlt: "Tracking Interface",
    },
    {
        title: "AI-powered chat",
        description: "Talk to your Icon anytime, anywhere. Get instant feedback, guidance and motivation 24/7.",
        imageSrc: "/AI Powered Chat.jpg",
        imageAlt: "AI Chat Interface",
    },
    {
        title: "Expert-crafted Icons",
        description: "Each Icon is built by real athletes and coaches bringing elite knowledge straight to your pocket.",
        imageSrc: "/Expert Crafted Icons.jpg",
        imageAlt: "Expert Icons Interface",
    },
]

export function FeatureSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    useEffect(() => {
        const el = scrollRef.current
        if (el) {
            el.addEventListener("scroll", checkScroll)
            checkScroll()
        }
        return () => el?.removeEventListener("scroll", checkScroll)
    }, [])

    useGSAP(() => {
        if (!sectionRef.current) return

        // Header animation
        gsap.from(headerRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        })

        // Cards stagger animation
        cardsRef.current.forEach((card, index) => {
            if (!card) return

            gsap.from(card, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                delay: index * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            })
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="py-20 bg-black">
            <div className="w-full max-w-[1200px] mx-auto px-8">
                <div ref={headerRef} className="mb-16 text-left">
                    <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
                        Core Features
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FF5733] mb-4">
                        Why People Choose IconTraining.app
                    </h2>
                    <p className="text-white/70 max-w-xl text-lg">
                        Don&apos;t just work harder. Have the right coach by your side. <br className="hidden md:block" /> 24/7/365.
                    </p>
                </div>

                {/* Container for Carousel with Relative positioning for the Glows */}
                <div className="relative">

                    {/* Left Glow (Only visible on mobile when scrolling is possible) */}
                    <div
                        className={`absolute left-[-16px] top-0 bottom-8 w-16 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none transition-opacity duration-300 md:hidden ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}
                    />

                    {/* Right Glow */}
                    <div
                        className={`absolute right-[-16px] top-0 bottom-8 w-16 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none transition-opacity duration-300 md:hidden ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}
                    />

                    {/* Scrollable Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto pb-8 gap-4 md:grid md:grid-cols-2 md:gap-6 w-[calc(100%+2rem)] -mx-4 px-4 md:w-full md:mx-auto md:px-0 snap-x snap-mandatory scrollbar-hide"
                    >
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                ref={(el) => { cardsRef.current[index] = el }}
                                className="min-w-[80vw] md:min-w-0 snap-center"
                            >
                                <FeatureCard {...feature} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}