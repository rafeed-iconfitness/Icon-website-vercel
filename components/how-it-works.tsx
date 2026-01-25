"use client"

import * as React from "react"
import { useRef, useState, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import { createHoverAnimation } from "@/hooks/use-gsap"
import { HowItWorksIllustration } from "@/components/how-it-works-illustration"
import { WaitlistButton } from "@/components/waitlist-button"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const steps = [
    {
        title: "Built Around You",
        description: "The Icon Training app starts by understanding your body, goals, and constraints. Then, it shapes everything around your reality.",
    },
    {
        title: "Expert Intelligence, Hyper Delivered",
        description: "Your Icon isn`t just web-scraped advice. It has the brain of a real athlete, and gives you full access to everything you need.",
    },
    {
        title: "Designed for Real Life",
        description: "Choose what matters to you. Icon adjusts when plans change. So progress continues, even when life gets messy.",
    },
]

interface StepCardProps {
    step: { title: string; description: string }
    index: number
    isActive: boolean
    isMobile: boolean
    onCardRef: (el: HTMLDivElement | null, index: number) => void
}

function StepCard({ step, index, isActive, isMobile, onCardRef }: StepCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    // Only use hover handlers on desktop
    const hoverHandlers = isMobile ? {} : {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
    }

    return (
        <div
            ref={(el) => {
                cardRef.current = el
                onCardRef(el, index)
            }}
            className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col h-full"
            {...hoverHandlers}
        >
            <div className="p-8 flex flex-col h-full relative z-10">
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-100 ${(isMobile && isActive) ? 'text-[#FF5733]' : 'text-white group-hover:text-[#FF5733]'
                    }`}>
                    {step.title}
                </h3>

                <p className="text-white/60 leading-relaxed mb-8">
                    {step.description}
                </p>

                {/* Image Area - remove grayscale when active on mobile or hovered on desktop */}
                <div className={`mt-auto relative w-full h-56 rounded-xl overflow-hidden transition-all duration-100 bg-black ${(isMobile && isActive) ? '' : 'grayscale group-hover:grayscale-0'
                    }`}>
                    <HowItWorksIllustration isHovered={isHovered} isActive={isActive} cardIndex={index} />
                </div>
            </div>
        </div>
    )
}

export function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const [api, setApi] = useState<CarouselApi>()
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    // Detect mobile viewport
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // Track active carousel slide
    useEffect(() => {
        if (!api) return

        const onSelect = () => {
            setActiveIndex(api.selectedScrollSnap())
        }

        api.on("select", onSelect)
        onSelect() // Set initial state

        return () => {
            api.off("select", onSelect)
        }
    }, [api])

    const handleCardRef = (el: HTMLDivElement | null, index: number) => {
        cardsRef.current[index] = el
    }

    useGSAP(() => {
        if (!sectionRef.current) return

        // Header animations
        const headerChildren = headerRef.current?.children
        if (headerChildren) {
            gsap.from(headerChildren, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            })
        }

        // Card animations with stagger
        cardsRef.current.forEach((card, index) => {
            if (!card) return

            gsap.from(card, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                delay: index * 0.01,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            })

            // Hover animation
            createHoverAnimation(
                card,
                { y: -10, borderColor: "rgba(255, 87, 51, 0.4)", duration: 0.3, ease: "power2.out" },
                { y: 0, borderColor: "rgba(255, 255, 255, 0.1)", duration: 0.3, ease: "power2.out" }
            )
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="py-24 bg-black text-white relative">
            {/* Background decorative blob */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5733]/10 blur-[120px] rounded-full" />
            </div>

            <div className="w-full mx-auto px-8 max-w-[1200px] relative z-10">
                {/* Header */}
                <div ref={headerRef} className="mb-6 md:mb-9 text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        How it works.
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mb-8">
                        Your <span className="text-[#FF5733]">Icon</span> adapts to your fitness and your world, not the other way around.
                    </p>
                    <WaitlistButton variant="pill" showIcon={true} />
                </div>

                {/* Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    setApi={setApi}
                    className="w-full max-w-7xl mx-auto"
                >
                    <CarouselContent className="-ml-4 py-4">
                        {steps.map((step, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/3 basis-[85%]">
                                <StepCard
                                    step={step}
                                    index={index}
                                    isActive={isMobile ? activeIndex === index : false}
                                    isMobile={isMobile}
                                    onCardRef={handleCardRef}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}