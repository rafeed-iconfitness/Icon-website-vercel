"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const benefits = [
    {
        title: "Save 15+ hours/week",
        description: "Automate programming, onboarding, check-ins, and replies",
    },
    {
        title: "Recurring income",
        description: "Earn monthly while your Icon coaches.",
    },
    {
        title: "Global reach",
        description: "No language barrier. No geographic limits.",
    },
    {
        title: "Scale without burnout",
        description: "Grow without adding more sessions.",
    },
    {
        title: "Serve 10x more people",
        description: "One system. Unlimited clients.",
    },
    {
        title: "Own your platform",
        description: "No brand deals or middlemen.",
    },
]

interface BenefitCardProps {
    title: string
    description: string
    index: number
}

function BenefitCard({ title, description, index }: BenefitCardProps) {
    const animationDuration = 4 + index * 0.3

    return (
        <div className="relative h-full group">
            {/* 1. MODIFIED AURA:
               - Removed 'perimeterGlow' rotation.
               - Added 'auraShift' animation.
               - Changed to linear-gradient with 400% size to allow shifting.
            */}
            <div
                className="absolute -inset-2 rounded-2xl opacity-20 blur-xl z-0 transition-opacity duration-500 group-hover:opacity-40"
                style={{
                    background: `linear-gradient(45deg, #FF5733, #3B82F6, #FF5733, #3B82F6)`,
                    backgroundSize: '400% 400%',
                    animation: `auraShift ${animationDuration * 2}s ease infinite`,
                }}
            />

            {/* Border container with animated gradient */}
            <div className="relative rounded-xl overflow-hidden h-full bg-[#0a0a0a]">
                {/* 2. MODIFIED BORDER (SNAKE LINE):
                    - Uses 'perimeterGlow' to spin the gradient.
                    - Start (0deg) and End (360deg) colors are identical (#FF5733) to ensure NO GAPS.
                    - Full 360 coverage creates a continuous neon line.
                */}
                <div
                    className="absolute -inset-[150%]"
                    style={{
                        background: `conic-gradient(from 0deg at 50% 50%, 
                            #FF5733 0deg,
                            #FF9966 60deg,
                            #FFCC80 120deg,
                            #60A5FA 180deg,
                            #3B82F6 240deg,
                            #FF5733 360deg
                        )`,
                        animation: `perimeterGlow ${animationDuration}s linear infinite`,
                    }}
                />

                {/* Inner mask - creates the border thickness */}
                <div className="absolute inset-[2px] bg-[#0a0a0a] rounded-[10px] z-[1]" />

                {/* Card content */}
                <div className="relative z-10 p-5 md:p-6 h-full">
                    <h3 className="text-white text-base md:text-lg font-bold mb-2">
                        {title}
                    </h3>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export function TrainerWhatYouGet() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const gridRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!sectionRef.current) return

        // Header animation
        if (headerRef.current) {
            const title = headerRef.current.querySelector('h2')
            const desc = headerRef.current.querySelector('p')

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
        }

        // Cards staggered animation
        if (gridRef.current) {
            const cards = gridRef.current.children
            gsap.fromTo(cards,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            )
        }

    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-black">
            {/* CSS for animations */}
            <style jsx>{`
                /* Rotates the border gradient */
                @keyframes perimeterGlow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                /* Shifts the background aura gradient */
                @keyframes auraShift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>

            <div className="w-full max-w-[1200px] mx-auto px-8">
                {/* Header */}
                <div ref={headerRef} className="mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Built for coaches who want more
                    </h2>
                    <p className="text-white/60 text-base md:text-lg max-w-xl">
                        Turn your expertise into recurring income and global reach.
                    </p>
                </div>

                {/* Cards Grid - 2 cols on mobile, 3 cols on desktop */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                >
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            title={benefit.title}
                            description={benefit.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}