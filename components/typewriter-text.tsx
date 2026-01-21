"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = ["WILLPOWER", "EFFORT", "ENERGY", "MOTIVATION", "STRENGTH", "FOCUS", "DISCIPLINE", "GRIT"]

export function TypewriterText() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (
        <span className="inline-block whitespace-nowrap">
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    /* Changed font-black to font-normal */
                    className="italic text-[#FF5733] inline-block font-normal"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    )
}