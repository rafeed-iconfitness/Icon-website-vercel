"use client"

import { FeatureCard } from "./feature-card"
import { motion } from "framer-motion"

const features = [
    {
        title: "Personalised plans",
        description: "Your goals, your schedule, your body fully customised by AI and athlete expertise.",
        imageSrc: "/fitness-app-mockup-dark-interface.jpg", // Using existing asset as placeholder
        imageAlt: "Personalised Plans Interface",
    },
    {
        title: "Track everything",
        description: "From workouts to recovery, nutrition to mood every metric that matters, all in one place.",
        imageSrc: "/fitness-app-chat-interface-dark.jpg", // Using existing asset
        imageAlt: "Tracking Interface",
    },
    {
        title: "AI-powered chat",
        description: "Talk to your Icon anytime, anywhere. Get instant feedback, guidance and motivation 24/7.",
        imageSrc: "/IconGuyWithPhone.png", // Reusing hero image or other asset
        imageAlt: "AI Chat Interface",
    },
    {
        title: "Expert-crafted Icons",
        description: "Each Icon is built by real athletes and coaches bringing elite knowledge straight to your pocket.",
        imageSrc: "/fitness-app-mockup-dark-interface.jpg", // Placeholder
        imageAlt: "Expert Icons Interface",
    },
]

export function FeatureSection() {
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

                {/* Mobile: Horizontal Scroll, Desktop: Grid */}
                <div className="flex overflow-x-auto pb-8 gap-4 md:grid md:grid-cols-2 md:gap-6 w-full snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-auto md:px-0">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[85vw] md:min-w-0 snap-center"
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
        </section>
    )
}
