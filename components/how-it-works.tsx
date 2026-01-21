"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const steps = [
    {
        title: "Take the Fitness Quiz",
        description: "Complete the fitness quiz and receive a hyper-personalised fitness report tailored specifically to your physiology.",
        image: "/placeholder-user.jpg",
    },
    {
        title: "Your Expert Coach",
        description: "Talk to your Icon 24/7/365. A real-life, superpowered expert living in your phone, ready when you are.",
        image: "/placeholder-user.jpg",
    },
    {
        title: "Stay on Track",
        description: "Customise and track the metrics you care about. Your Icon helps you succeed every day, even when life gets messy.",
        image: "/placeholder-user.jpg",
    },
]

export function HowItWorks() {
    return (
        <section className="py-24 bg-black text-white relative">
            {/* Background decorative blob */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5733]/10 blur-[120px] rounded-full" />
            </div>

            <div className="w-full mx-auto px-8 max-w-[1200px] relative z-10">
                {/* Header */}
                <div className="mb-12 md:mb-20 text-left">
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

                {/* Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    className="w-full max-w-7xl mx-auto"
                >
                    <CarouselContent className="-ml-4 py-4">
                        {steps.map((step, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/3 basis-[85%]">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.01,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20
                                    }}
                                    whileHover={{
                                        y: -10,
                                        borderColor: "rgba(255, 87, 51, 0.4)",
                                        transition: { duration: 0.01, ease: "easeOut" }
                                    }}
                                    className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col h-full"
                                >
                                    <div className="p-8 flex flex-col h-full relative z-10">
                                        <motion.h3
                                            variants={{
                                                hover: { color: "#FF5733" }
                                            }}
                                            className="text-2xl font-bold mb-4 text-white transition-colors duration-100"
                                        >
                                            {step.title}
                                        </motion.h3>

                                        <p className="text-white/60 leading-relaxed mb-8">
                                            {step.description}
                                        </p>

                                        {/* Image Area */}
                                        <div className="mt-auto relative w-full h-56 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-100">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                fill
                                                className="object-cover transform group-hover:scale-110 transition-transform duration-100 ease-out"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}