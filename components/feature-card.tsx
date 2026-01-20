"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface FeatureCardProps {
    title: string
    description: string
    imageSrc: string
    imageAlt: string
}

export function FeatureCard({ title, description, imageSrc, imageAlt }: FeatureCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative overflow-hidden rounded-3xl h-[400px] w-full group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image */}
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">

                <div className="flex flex-col gap-2">
                    {/* Removed 'Core Features' span */}

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white">
                        {title}
                    </h3>

                    {/* Description - Expands smoothly */}
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: isHovered ? "auto" : 0,
                            opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-white/80 leading-relaxed pt-2">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}