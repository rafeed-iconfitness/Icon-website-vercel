"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TypewriterText } from "./typewriter-text"
import { WaitlistButton } from "./waitlist-button"

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()

    // 1. Adjusted Parallax: Reduced range slightly to accommodate the "zoomed out" (shorter) image container
    const y = useTransform(scrollY, [0, 1000], [0, 200])

    // Blur effect remains strong
    const blurAmount = useTransform(scrollY, [0, 500], [0, 40])
    const filter = useMotionTemplate`blur(${blurAmount}px)`

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-start bg-black">
            {/* Background Image with Parallax & Blur */}
            <motion.div
                style={{ y, filter }}
                className="absolute inset-0 z-0 flex items-center justify-center md:justify-end"
            >
                <div className="relative w-full h-full md:w-1/2 md:ml-auto">
                    <Image
                        src="/IconGuyWithPhone.png"
                        alt="Icon Fitness Background"
                        fill
                        className="object-cover object-center md:object-left"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent md:bg-gradient-to-l md:from-transparent md:via-black/20 md:to-black" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut", staggerChildren: 0.2 }}
                className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 h-full flex flex-col justify-center max-w-7xl"
            >
                <div className="max-w-xl lg:max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8 font-sans"
                    >
                        YOU DON&apos;T NEED
                        <br />
                        MORE <span className="text-white/50"><TypewriterText /></span>
                        <br />
                        YOU NEED AN <span className="text-[#FF5733]">ICON.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-xl text-white/80 max-w-2xl mb-10"
                    >
                        Download your favorite athlete&apos;s brain. Straight to your phone.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <WaitlistButton variant="pill" showIcon={true} />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}