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
import Image from "next/image"
import { ApplyNowButton } from "@/components/apply-now-button"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const steps = [
    {
        title: "Create",
        description: "Upload your programs, voice and training style.",
        icon: "/howItWorks/trainer/create.svg",
    },
    {
        title: "Connect",
        description: "Global clients can train with your Icon.",
        icon: "/howItWorks/trainer/connect.svg",
    },
    {
        title: "Refine",
        description: "Keep your Icon updated, so it grows with you.",
        icon: "/howItWorks/trainer/Refine.svg",
    },
]

interface StepCardProps {
    step: { title: string; description: string; icon: string }
    index: number
    isActive: boolean
    isMobile: boolean
    onCardRef: (el: HTMLDivElement | null, index: number) => void
}

interface TrainerIllustrationProps {
    isHovered?: boolean
    isActive?: boolean
    icon: string
}

function TrainerIllustration({ isHovered = false, isActive = false, icon }: TrainerIllustrationProps) {
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

    // Animation matching how-it-works-illustration.tsx exactly
    useEffect(() => {
        if (!dotsRef.current || !iconRef.current) return

        const shouldAnimate = isMobile ? isActive : isHovered

        if (shouldAnimate) {
            // Dots pulse animation
            gsap.to(dotsRef.current, {
                opacity: 0.5,
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

            // Reset dots
            gsap.to(dotsRef.current, {
                opacity: 0.3,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
            })

            // Reset icon
            gsap.to(iconRef.current, {
                y: 0,
                duration: 0.4,
                ease: "power2.out",
            })
        }
    }, [isHovered, isActive, isMobile])

    return (
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
            {/* Background Dots - Using exact image with Blue Filter */}
            {/* Blue Filter calculation to approximate #3B82F6 from white/orange base */}
            <div ref={dotsRef} className="absolute inset-0 flex items-center justify-center opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(/howItWorks/06f09a5283d23e6997b2c7ecc7440c9640f49b88.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // Blue hex #3B82F6 filter approximation
                        filter: 'brightness(0) saturate(100%) invert(34%) sepia(93%) saturate(2326%) hue-rotate(202deg) brightness(100%) contrast(106%)',
                    }}
                />
            </div>

            {/* Main Icon - Matched sizing w-24 h-24 md:w-32 md:h-32 */}
            <div ref={iconRef} className="relative z-10 w-24 h-24 md:w-32 md:h-32">
                <Image
                    src={icon}
                    alt="Feature Icon"
                    fill
                    className="object-contain drop-shadow-2xl brightness-100"
                    style={{ filter: 'none' }}
                />
            </div>
        </div>
    )
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
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-100 ${(isMobile && isActive) ? 'text-[#3B82F6]' : 'text-white group-hover:text-[#3B82F6]'
                    }`}>
                    {step.title}
                </h3>

                <p className="text-white/60 leading-relaxed mb-8">
                    {step.description}
                </p>

                {/* Image Area - matching structure of how-it-works.tsx */}
                <div className={`mt-auto relative w-full h-56 rounded-xl overflow-hidden transition-all duration-100 bg-black ${(isMobile && isActive) ? '' : 'grayscale group-hover:grayscale-0'
                    }`}>
                    <TrainerIllustration isHovered={isHovered} isActive={isActive} icon={step.icon} />
                </div>
            </div>
        </div>
    )
}

export function TrainerHowItWorks() {
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

        // Header animations - use timeline for smooth sequential reveal matching Hero section
        if (headerRef.current) {
            const title = headerRef.current.querySelector('h2')
            const desc = headerRef.current.querySelector('p')
            const btn = headerRef.current.querySelector('button')

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            })

            if (title) {
                tl.fromTo(title,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
                )
            }

            if (desc) {
                tl.fromTo(desc,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                    "-=0.4"
                )
            }

            if (btn) {
                tl.fromTo(btn,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
                    "-=0.4"
                )
            }
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

            // Hover animation with blue accent
            createHoverAnimation(
                card,
                { y: -10, borderColor: "rgba(59, 130, 246, 0.4)", duration: 0.3, ease: "power2.out" },
                { y: 0, borderColor: "rgba(255, 255, 255, 0.1)", duration: 0.3, ease: "power2.out" }
            )
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="py-24 bg-black text-white relative">
            {/* Background decorative blob - blue theme */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3B82F6]/10 blur-[120px] rounded-full" />
            </div>

            <div className="w-full mx-auto px-8 max-w-[1200px] relative z-10">
                {/* Header */}
                <div ref={headerRef} className="mb-6 md:mb-9 text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        How it works
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mb-8">
                        Turn your expertise into a digital business in three simple steps.
                    </p>
                    {/* Replaced ApplyNowButton pill variant with standard component call to fix disappearance */}
                    <ApplyNowButton variant="pill" showIcon={true} />
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
