"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"
import Image from "next/image"
import { TypewriterText } from "./typewriter-text"
import { WaitlistButton } from "./waitlist-button"

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()

    // Parallax effect
    const y = useTransform(scrollY, [0, 1000], [0, 300])

    // 1. Reduced Blur: Changed max blur from 40 to 15 for a subtler effect
    const blurAmount = useTransform(scrollY, [0, 500], [0, 15])
    const filter = useMotionTemplate`blur(${blurAmount}px)`

    return (
        <section ref={containerRef} className="relative h-[60vh] w-full overflow-hidden flex items-center justify-start bg-black pt-16">
            {/* Background Image with Parallax & Blur */}
            <motion.div
                style={{ y, filter }}
                className="absolute inset-0 z-0"
            >
                {/* 2. Position Adjustment:
                    - md:left-[40%]: Starts the container 40% from the left (right next to text area)
                    - md:w-[60%]: Takes up the remaining width
                */}
                <div className="relative w-full h-full md:absolute md:left-[55%] md:w-[60%] md:top-0">
                    <Image
                        src="/IconGuyWithPhone.png"
                        alt="Icon Fitness Background"
                        fill
                        // md:object-left: Anchors the image to the left of this container (closest to the text)
                        className="object-contain object-center md:object-left-bottom"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut", staggerChildren: 0.2 }}
                className="relative z-10 w-full px-8 h-full flex flex-col justify-center"
            >
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="max-w-xl lg:max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-5xl md:text-7xl lg:text-[100px] font-black text-white tracking-normal leading-[0.85] mb-8 font-sans"
                        >
                            YOU DON&apos;T NEED
                            <br />
                            <span className="whitespace-nowrap text-white">
                                MORE <TypewriterText />
                            </span>
                            <br />
                            YOU NEED AN <span className="text-[#FF5733]">ICON</span>.
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
                </div>
            </motion.div>
        </section>
    )
}