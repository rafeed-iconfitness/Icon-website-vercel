"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X, Brain, Layers, Activity, Sliders } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const whyItWorksData = [
    {
        id: "expert-grade",
        icon: Brain,
        title: "Expert-Grade Intelligence",
        content: "Other AI fitness apps scrape generic data. Every Icon is modelled on a real expert’s philosophy, experience, and decision-making.",
    },
    {
        id: "adaptive-engine",
        icon: Activity, // Represents dynamic/evolving action
        title: "Adaptive AI Engine",
        content: "Your training evolves day-by-day based on performance, recovery, and consistency. No rigid programs, no guesswork.",
    },
    {
        id: "control-data",
        icon: Sliders, // Represents control/settings
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

    const toggleItem = (id: string) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <section className="py-20 bg-black">
            <div className="w-full mx-auto max-w-[1200px] px-8">
                {/* Floating Card Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#FF5733] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column - Header and Accordion */}
                        <div>
                            {/* Section Label */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex items-center gap-2 mb-4"
                            >
                                <div className="w-2 h-2 rounded-full bg-white" />
                                <span className="text-white/90 text-sm font-medium">Why It Works</span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                            >
                                Smarter training, with clear and proven results
                            </motion.h2>

                            {/* Subheading */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-white/80 text-lg mb-10 max-w-md"
                            >
                                Our AI-powered platform goes beyond tracking — it adapts how you train, recover, and perform.
                            </motion.p>

                            {/* Accordion */}
                            <div className="space-y-3">
                                {whyItWorksData.map((item, index) => {
                                    const Icon = item.icon
                                    const isActive = activeId === item.id

                                    return (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
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

                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    >
                                                        <div className="px-4 pb-4 pt-0">
                                                            <p className="text-gray-600 text-sm leading-relaxed pl-[52px]">
                                                                {item.content}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/IconGuyWithPhone.png"
                                    alt="Icon App Preview"
                                    fill
                                    className="object-cover"
                                />

                                {/* Floating Card Overlay - Now STATIC (Removed motion wrapper) */}
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
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}