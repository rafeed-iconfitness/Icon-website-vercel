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
                // Changes: 
                // - Added 'flex items-center justify-center' to center the image within the container
                className="absolute -top-[5vh] left-0 w-full h-[110vh] z-0 flex items-center justify-center"
            >
                <Image
                    src="/IconGuyWithPhone.png"
                    alt="Icon Fitness Background"
                    width={1200}
                    height={1200}
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut", staggerChildren: 0.2 }}
                className="relative z-10 container mx-auto px-4 text-left pl-8 md:pl-16 lg:pl-24"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-8"
                >
                    You Don&apos;t Need
                    <br />
                    More <TypewriterText />
                    <br />
                    You Need an <span className="text-[#FF5733]">Icon.</span>
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
            </motion.div>
        </section>
    )
}