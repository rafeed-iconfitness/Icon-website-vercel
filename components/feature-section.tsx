"use client"

import { useState, useRef, useEffect } from "react"
import { FeatureCard } from "./feature-card"
import { motion } from "framer-motion"

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
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setCanScrollLeft(scrollLeft > 0)
            // Use a small buffer to handle pixel rounding
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

    return (
        <section className="py-20 bg-black">
            <div className="w-full max-w-[1200px] mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-left"
                >
                    <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
                        Core Features
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FF5733] mb-4">
                        Why People Choose IconTraining.app
                    </h2>
                    <p className="text-white/70 max-w-xl text-lg">
                        Don&apos;t just work harder. Have the right coach by your side. <br className="hidden md:block" /> 24/7/365.
                    </p>
                </motion.div>

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
                            <motion.div
                                key={index}
                                /* Changed to min-w-[80vw] to show a peek of the next card */
                                className="min-w-[80vw] md:min-w-0 snap-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <FeatureCard {...feature} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}