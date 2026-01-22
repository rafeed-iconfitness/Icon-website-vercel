"use client"

import { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Plus, X, Brain, Layers, Activity, Sliders } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const whyItWorksData = [
    {
        id: "expert-grade",
        icon: Brain,
        title: "Expert-Grade Intelligence",
        content: "Other AI fitness apps scrape generic data. Every Icon is modelled on a real expert's philosophy, experience, and decision-making.",
    },
    {
        id: "adaptive-engine",
        icon: Activity,
        title: "Adaptive AI Engine",
        content: "Your training evolves day-by-day based on performance, recovery, and consistency. No rigid programs, no guesswork.",
    },
    {
        id: "control-data",
        icon: Sliders,
        title: "You Control the Data",
        content: "Select the data points you care about and ignore the rest. Icon adapts using your priorities, not default settings.",
    },
    {
        id: "unified-system",
        icon: Layers,
        title: "Unified Training System",
        content: "Training, recovery, accountability, nutrition, and motivation. All living in one connected ecosystem. No more juggling apps or conflicting advice.",
    }
]

export function WhyItWorks() {
    const [activeId, setActiveId] = useState<string | null>("expert-grade")
    const sectionRef = useRef<HTMLElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const labelRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const subheadingRef = useRef<HTMLParagraphElement>(null)
    const accordionItemsRef = useRef<(HTMLDivElement | null)[]>([])
    const imageRef = useRef<HTMLDivElement>(null)
    const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

    const toggleItem = (id: string) => {
        const prevId = activeId
        const newId = activeId === id ? null : id

        // Animate closing previous item
        if (prevId && contentRefs.current[prevId]) {
            gsap.to(contentRefs.current[prevId], {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
            })
        }

        // Animate opening new item
        if (newId && contentRefs.current[newId]) {
            gsap.set(contentRefs.current[newId], { height: "auto" })
            const height = contentRefs.current[newId]!.offsetHeight
            gsap.fromTo(contentRefs.current[newId],
                { height: 0, opacity: 0 },
                { height, opacity: 1, duration: 0.3, ease: "power2.inOut" }
            )
        }

        setActiveId(newId)
    }

    useGSAP(() => {
        if (!sectionRef.current) return

        // Card entrance animation
        gsap.from(cardRef.current, {
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        })

        // Header animations with stagger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        })

        tl.from(labelRef.current, { y: 20, opacity: 0, duration: 0.5, delay: 0.1 })
            .from(headingRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
            .from(subheadingRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")

        // Accordion items stagger
        accordionItemsRef.current.forEach((item, index) => {
            if (!item) return
            gsap.from(item, {
                y: 20,
                opacity: 0,
                duration: 0.4,
                delay: 0.3 + index * 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            })
        })

        // Image slide in
        gsap.from(imageRef.current, {
            x: 40,
            opacity: 0,
            duration: 0.6,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        })

    }, { scope: sectionRef })

    // Initialize accordion content heights
    useEffect(() => {
        Object.entries(contentRefs.current).forEach(([id, el]) => {
            if (el && id !== activeId) {
                gsap.set(el, { height: 0, opacity: 0 })
            }
        })
    }, [])

    return (
        <section ref={sectionRef} className="py-20 bg-black">
            <div className="w-full mx-auto max-w-[1200px] px-8">
                {/* Floating Card Container */}
                <div
                    ref={cardRef}
                    className="bg-[#FF5733] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column - Header and Accordion */}
                        <div>
                            {/* Section Label */}
                            <div ref={labelRef} className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-white" />
                                <span className="text-white/90 text-sm font-medium">Why It Works</span>
                            </div>

                            {/* Main Heading */}
                            <h2
                                ref={headingRef}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                            >
                                Smarter training, with clear and proven results
                            </h2>

                            {/* Subheading */}
                            <p
                                ref={subheadingRef}
                                className="text-white/80 text-lg mb-10 max-w-md"
                            >
                                Our AI-powered platform goes beyond tracking — it adapts how you train, recover, and perform.
                            </p>

                            {/* Accordion */}
                            <div className="space-y-3">
                                {whyItWorksData.map((item, index) => {
                                    const Icon = item.icon
                                    const isActive = activeId === item.id

                                    return (
                                        <div
                                            key={item.id}
                                            ref={(el) => { accordionItemsRef.current[index] = el }}
                                            className={cn(
                                                "rounded-xl transition-all duration-300 overflow-hidden",
                                                isActive
                                                    ? "bg-white shadow-lg"
                                                    : "bg-white/10 hover:bg-white/20"
                                            )}
                                        >
                                            <button
                                                onClick={() => toggleItem(item.id)}
                                                className="w-full flex items-center justify-between p-4 text-left"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                                                        isActive ? "bg-[#FF5733]/10" : "bg-white/10"
                                                    )}>
                                                        <Icon className={cn(
                                                            "w-5 h-5",
                                                            isActive ? "text-[#FF5733]" : "text-white"
                                                        )} />
                                                    </div>
                                                    <span className={cn(
                                                        "font-semibold text-base transition-colors",
                                                        isActive ? "text-[#FF5733]" : "text-white"
                                                    )}>
                                                        {item.title}
                                                    </span>
                                                </div>
                                                <div className={cn(
                                                    "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                                                    isActive ? "bg-[#FF5733]/10" : "bg-transparent"
                                                )}>
                                                    {isActive ? (
                                                        <X className="w-4 h-4 text-[#FF5733]" />
                                                    ) : (
                                                        <Plus className="w-4 h-4 text-white" />
                                                    )}
                                                </div>
                                            </button>

                                            <div
                                                ref={(el) => { contentRefs.current[item.id] = el }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-4 pt-0">
                                                    <p className="text-gray-600 text-sm leading-relaxed pl-[52px]">
                                                        {item.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div ref={imageRef} className="relative hidden lg:block">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/IconGuyWithPhone.png"
                                    alt="Icon App Preview"
                                    fill
                                    className="object-cover"
                                />

                                {/* Floating Card Overlay */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl w-[80%] max-w-[280px]">
                                    <div className="text-center text-sm text-gray-500 mb-3">Running Stats</div>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900">2.3<span className="text-sm font-normal text-gray-500">km</span></div>
                                            <div className="text-xs text-gray-500">Distance</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900">4&apos;56&quot;<span className="text-sm font-normal text-gray-500">/km</span></div>
                                            <div className="text-xs text-gray-500">Pace</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900">128<span className="text-sm font-normal text-gray-500">kcal</span></div>
                                            <div className="text-xs text-gray-500">Calories</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900">12<span className="text-sm font-normal text-gray-500">m</span></div>
                                            <div className="text-xs text-gray-500">Elevation Gain</div>
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full bg-[#c8e94d] hover:bg-[#b8d93d] text-gray-900 font-medium py-2.5 rounded-full transition-colors text-sm">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}