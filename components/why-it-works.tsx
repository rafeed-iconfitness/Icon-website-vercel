"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X, Brain, Layers, Battery, Users, User, Shield, Trophy } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const whyItWorksData = [
    {
        id: "adaptive-ai",
        icon: Brain,
        title: "Adaptive AI Engine",
        content: "Your plan isn't static. Our engine uses real-time feedback and historic data to dynamically adjust your training, nutrition, and recovery plans instantly. If you miss a workout or sleep poorly, your Icon adapts the schedule so you stay on track without burning out.",
    },
    {
        id: "unified-ecosystem",
        icon: Layers,
        title: "Unified Ecosystem",
        content: "Stop switching between apps. Icon consolidates activity tracking, AI food scanning, and recovery metrics into a single, streamlined platform. By integrating these three pillars, your AI coach gets a complete picture of your health to make smarter decisions.",
    },
    {
        id: "smarter-recovery",
        icon: Battery,
        title: "Smarter Recovery",
        content: "Training is only half the battle. We track sleep quality, mental health inputs, and injury status to generate a daily 'Readiness Score.' Your Icon uses this to throttle workout intensity up or down, ensuring you perform when you're ready and recover when you're not.",
    },
    {
        id: "coaching-community",
        icon: Users,
        title: "Coaching-Driven Community",
        content: "You're never training alone. Join a vibrant ecosystem of leaderboards, seasonal challenges, and collaborative spaces. Whether it's a 'seasonal hook' or a team challenge, our gamified community keeps you accountable and motivated to level up.",
    },
    {
        id: "authentic-personas",
        icon: User,
        title: "Authentic \"Icon\" Personas",
        content: "Train with a digital twin, not a generic bot. Trainers create AI clones that mimic their exact coaching style, personality, and philosophy. Your Icon doesn't just give advice; it speaks, motivates, and communicates exactly like the human expert behind it.",
    },
    {
        id: "safety-accuracy",
        icon: Shield,
        title: "Safety & Accuracy First",
        content: "Advice you can trust. Unlike generic AI that scrapes the web, Icon's 'Retrieval-Augmented Generation' powered AI model is trained exclusively on data verified by certified professionals. Every recommendation is evidence-based and moderated for safety.",
    },
    {
        id: "gamified-progression",
        icon: Trophy,
        title: "Gamified Progression",
        content: "Make every rep count. Earn experience points (XP) for hitting protein goals, completing workouts, or engaging with the community. Level up your profile to unlock cosmetic perks and achievements, turning your fitness journey into a rewarding game.",
    }
]

export function WhyItWorks() {
    const [activeId, setActiveId] = useState<string | null>("adaptive-ai")

    const toggleItem = (id: string) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <section className="py-20 bg-black">
            <div className="w-full mx-auto max-w-[1200px] px-8">
                {/* Floating Card Container */}
                <div className="bg-[#FF5733] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column - Header and Accordion */}
                        <div>
                            {/* Section Label */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-white" />
                                <span className="text-white/90 text-sm font-medium">Why It Works</span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                Smarter training, with clear and proven results
                            </h2>

                            {/* Subheading */}
                            <p className="text-white/80 text-lg mb-10 max-w-md">
                                Our AI-powered platform goes beyond tracking — it adapts how you train, recover, and perform.
                            </p>

                            {/* Accordion */}
                            <div className="space-y-3">
                                {whyItWorksData.map((item) => {
                                    const Icon = item.icon
                                    const isActive = activeId === item.id

                                    return (
                                        <div
                                            key={item.id}
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
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="relative hidden lg:block">
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
