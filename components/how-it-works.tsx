"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const steps = [
    {
        icon: null,
        title: "Take the Fitness Quiz",
        description: "Complete the fitness quiz and receive a hyper-personalised fitness report tailored specifically to your physiology.",
        image: "/placeholder-user.jpg", // Replace with your actual asset path
    },
    {
        icon: null,
        title: "Your Expert Coach",
        description: "Talk to your Icon 24/7/365. A real-life, superpowered expert living in your phone, ready when you are.",
        image: "/placeholder-user.jpg", // Replace with your actual asset path
    },
    {
        icon: null,
        title: "Stay on Track",
        description: "Customise and track the metrics you care about. Your Icon helps you succeed every day, even when life gets messy.",
        image: "/placeholder-user.jpg", // Replace with your actual asset path
    },
]

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Delay between each card appearing
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
}

export function HowItWorks() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background decorative blob (optional subtle glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5733]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="mb-20 text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        How it works.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-white/60 max-w-2xl"
                    >
                        Your <span className="text-[#FF5733]">Icon</span> adapts to your fitness and your world, not the other way around.
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex overflow-x-auto pb-8 gap-4 md:grid md:grid-cols-3 md:gap-8 max-w-7xl mx-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-auto md:px-0"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }} // Subtle lift on hover
                            className=" group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-[#FF5733]/30 transition-colors duration-500 min-w-[85vw] md:min-w-0 snap-center"
                        >
                            <div className="p-8 flex flex-col h-full relative z-10">
                                {/* Removed Icon Badge as per feedback */}

                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#FF5733] transition-colors duration-300">
                                    {step.title}
                                </h3>

                                <p className="text-white/60 leading-relaxed mb-8">
                                    {step.description}
                                </p>

                                {/* Image Area */}
                                <div className="mt-auto relative w-full h-56 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}