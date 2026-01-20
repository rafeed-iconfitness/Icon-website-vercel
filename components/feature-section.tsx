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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">
                        Core Features
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FF5733] mb-4">
                        Why People Choose IconTraining.app
                    </h2>
                    <p className="text-white/70 max-w-xl mx-auto text-lg">
                        Don&apos;t just work harder. Have the right coach by your side. <br className="hidden md:block" /> 24/7/365.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
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
