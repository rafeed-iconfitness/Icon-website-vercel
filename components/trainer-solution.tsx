"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

interface SolutionItemProps {
    imageSrc: string
    imageAlt: string
    title: string
    description: string
}

function SolutionItem({ imageSrc, imageAlt, title, description }: SolutionItemProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const imageWrapperRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!containerRef.current || !imageWrapperRef.current || !textRef.current) return

        // Set initial state for text
        gsap.set(textRef.current, { opacity: 0, y: 20 })

        // Image expansion animation - scroll-driven
        gsap.fromTo(imageWrapperRef.current,
            {
                width: "60%",
                borderRadius: "24px",
            },
            {
                width: "100%",
                borderRadius: "0px",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "top 10%",
                    scrub: 0.5,
                },
            }
        )

        // Text fade in after image expands
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 20%",
            onEnter: () => {
                gsap.to(textRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                })
            },
        })

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="w-full flex flex-col items-center mb-8">
            <div
                ref={imageWrapperRef}
                className="relative overflow-hidden"
                style={{
                    width: "60%",
                    aspectRatio: "16/9",
                    borderRadius: "24px",
                }}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Text that appears after expansion */}
            <div ref={textRef} className="mt-12 text-center">
                <h3 className="text-white text-4xl md:text-5xl font-bold mb-6">
                    {title}
                </h3>
                <p className="text-white/60 text-base max-w-md">
                    {description}
                </p>
            </div>
        </div>
    )
}

const solutionItems = [
    {
        imageSrc: "/trainerSolution/capture.png",
        imageAlt: "Capture your training methods",
        title: "Capture",
        description: "Upload your programs, cues, and philosophy.",
    },
    {
        imageSrc: "/trainerSolution/train.png",
        imageAlt: "Train your AI Icon",
        title: "Train",
        description: "Icon learns how you coach and makes decisions like you.",
    },
    {
        imageSrc: "/trainerSolution/scale.png",
        imageAlt: "Scale your coaching",
        title: "Scale",
        description: "Clients train with your Icon anytime, anywhere.",
    },
]

export function TrainerSolution() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!sectionRef.current) return

        // Set initial states
        gsap.set(headerRef.current, { opacity: 0, y: 30 })

        // Header entrance animation
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

    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-black">
            {/* Header */}
            <div ref={headerRef} className="w-full max-w-[1200px] mx-auto px-8 mb-16">
                <h2 className="text-[#3F93CB] text-2xl md:text-3xl font-bold mb-3">
                    Meet Your Icon
                </h2>
                <p className="text-white/60 text-base md:text-lg max-w-xl">
                    Turn your knowledge, voice, and methods into an AI-powered training system that coaches clients for you. 24/7/365.
                </p>
            </div>

            {/* Solution Items */}
            <div className="space-y-32">
                {solutionItems.map((item, index) => (
                    <SolutionItem key={index} {...item} />
                ))}
            </div>
        </section>
    )
}
