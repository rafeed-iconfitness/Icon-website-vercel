"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image"

interface FlipCardProps {
    cards: string[]
    label: string
    labelColor?: string
}

export function FlipCard({ cards, label, labelColor = "#B08F7D" }: FlipCardProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const stackRef = useRef<HTMLDivElement>(null)
    const [cardOrder, setCardOrder] = useState<number[]>(() => cards.map((_, i) => i))
    const [isAnimating, setIsAnimating] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const dragStartX = useRef(0)
    const dragStartY = useRef(0)
    const currentX = useRef(0)
    const currentY = useRef(0)
    const topCardRef = useRef<HTMLDivElement | null>(null)

    // Get visible cards (top 4)
    const getVisibleCards = useCallback(() => {
        return cardOrder.slice(0, 4)
    }, [cardOrder])

    // Initialize and update stack positions
    useGSAP(() => {
        if (!stackRef.current) return
        const cardElements = stackRef.current.querySelectorAll('.flip-card-item')

        cardOrder.forEach((cardIndex, stackPosition) => {
            const card = cardElements[cardIndex]
            if (!card) return

            const isVisible = stackPosition < 4
            const rotationAngle = stackPosition * -5

            gsap.set(card, {
                zIndex: cards.length - stackPosition,
                opacity: isVisible ? 1 : 0,
                scale: 1 - (stackPosition * 0.02),
                rotationZ: rotationAngle,
                transformOrigin: "5% 40%",
                x: 0,
                y: 0,
            })
        })
    }, { scope: stackRef, dependencies: [cardOrder, cards.length] })

    const sendToBack = useCallback(() => {
        if (isAnimating) return
        setIsAnimating(true)

        const cardElements = stackRef.current?.querySelectorAll('.flip-card-item')
        if (!cardElements) return

        const topCardIndex = cardOrder[0]
        const topCard = cardElements[topCardIndex]

        // INSTANTLY move to back visually (lowest Z-index)
        // We set it to -1 to be behind everything else
        gsap.set(topCard, { zIndex: 0 })

        // Calculate target props for the "back" position (which will be index 3)
        const targetRotation = 3 * -5
        const targetScale = 1 - (3 * 0.02)

        // Animate from current dragged position to the back stack position
        // "Slide into position" with bounce
        gsap.to(topCard, {
            x: 0,
            y: 0,
            rotationZ: targetRotation,
            scale: targetScale,
            opacity: 1, // Ensure it stays visible as it slides under
            duration: 0.2,
            ease: "back.out(1.2)", // The bounce effect
            onComplete: () => {
                // Update state to reflect the new order
                setCardOrder(prev => {
                    const newOrder = [...prev]
                    const first = newOrder.shift()!
                    newOrder.push(first)
                    return newOrder
                })

                setIsAnimating(false)
            }
        })

        // Animate other visible cards up in the stack (visually moving forward)
        // They were at positions 1, 2, 3 -> moving to 0, 1, 2
        cardOrder.slice(1, 4).forEach((cardIndex, i) => {
            const card = cardElements[cardIndex]

            // New position (moving up one slot)
            const newStackIndex = i
            const rotationAngle = newStackIndex * -5
            const scale = 1 - (newStackIndex * 0.02)
            const zIndex = cards.length - newStackIndex // Moves to front z-index

            // We can animate the z-index bump via a set or just let them exist
            // Using gsap.to for zIndex rounds values, so better to set it immediately to maintain stacking
            gsap.set(card, { zIndex: zIndex })

            gsap.to(card, {
                scale: scale,
                rotationZ: rotationAngle,
                duration: 0.125,
                ease: "power2.out",
            })
        })
    }, [isAnimating, cardOrder, cards.length])

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        if (isAnimating) return

        const target = e.currentTarget as HTMLElement
        target.setPointerCapture(e.pointerId)

        dragStartX.current = e.clientX
        dragStartY.current = e.clientY
        currentX.current = 0
        currentY.current = 0
        setIsDragging(true)

        // Store reference to top card
        const cardElements = stackRef.current?.querySelectorAll('.flip-card-item')
        if (cardElements) {
            topCardRef.current = cardElements[cardOrder[0]] as HTMLDivElement
        }
    }, [isAnimating, cardOrder])

    const handlePointerMove = useCallback((e: React.PointerEvent) => {
        if (!isDragging || !topCardRef.current) return

        const deltaX = e.clientX - dragStartX.current
        const deltaY = e.clientY - dragStartY.current
        currentX.current = deltaX
        currentY.current = deltaY

        // Move top card with drag
        gsap.set(topCardRef.current, {
            x: deltaX,
            y: deltaY,
            rotationZ: deltaX * 0.05,
        })
    }, [isDragging])

    const handlePointerUp = useCallback((e: React.PointerEvent) => {
        if (!isDragging) return
        setIsDragging(false)

        const target = e.currentTarget as HTMLElement
        target.releasePointerCapture(e.pointerId)

        const deltaX = currentX.current
        const threshold = 80

        if (Math.abs(deltaX) > threshold) {
            // Flick to send to back
            sendToBack()
        } else {
            // Return to original position
            if (topCardRef.current) {
                gsap.to(topCardRef.current, {
                    x: 0,
                    y: 0,
                    rotationZ: 0,
                    duration: 0.2,
                    ease: "power2.out",
                })
            }
        }
    }, [isDragging, sendToBack])

    return (
        <div ref={containerRef} className="flex flex-col items-center">
            {/* Label */}
            <span
                className="text-lg font-semibold mb-8 tracking-wide"
                style={{ color: labelColor }}
            >
                {label}
            </span>

            {/* Card Stack Container */}
            <div
                ref={stackRef}
                className="relative w-[220px] h-[280px] sm:w-[280px] sm:h-[320px] md:w-[320px] md:h-[360px] cursor-grab active:cursor-grabbing select-none mt-12"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                style={{ touchAction: 'none' }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flip-card-item absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                        style={{
                            background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                        }}
                    >
                        <Image
                            src={card}
                            alt={`${label} pain point ${index + 1}`}
                            fill
                            className="object-cover pointer-events-none"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
