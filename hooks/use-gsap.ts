"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export interface ScrollTriggerAnimationProps {
    trigger?: string | Element
    start?: string
    end?: string
    scrub?: boolean | number
    markers?: boolean
    once?: boolean
}

export interface FadeInUpOptions extends ScrollTriggerAnimationProps {
    y?: number
    duration?: number
    delay?: number
    stagger?: number
    ease?: string
}

/**
 * Hook for fade-in-up animations triggered on scroll
 */
export function useFadeInUp(options: FadeInUpOptions = {}) {
    const elementRef = useRef<HTMLDivElement>(null)

    const {
        y = 50,
        duration = 0.8,
        delay = 0,
        stagger = 0.1,
        ease = "power2.out",
        start = "top 85%",
        end = "bottom 20%",
        once = true,
    } = options

    useGSAP(() => {
        if (!elementRef.current) return

        gsap.from(elementRef.current, {
            y,
            opacity: 0,
            duration,
            delay,
            ease,
            scrollTrigger: {
                trigger: elementRef.current,
                start,
                end,
                toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
        })
    }, { scope: elementRef })

    return elementRef
}

/**
 * Hook for staggered fade-in animations for multiple children
 */
export function useStaggerFadeIn(options: FadeInUpOptions = {}) {
    const containerRef = useRef<HTMLDivElement>(null)

    const {
        y = 30,
        duration = 0.6,
        delay = 0,
        stagger = 0.15,
        ease = "power2.out",
        start = "top 85%",
        once = true,
    } = options

    useGSAP(() => {
        if (!containerRef.current) return

        const children = containerRef.current.children

        gsap.from(children, {
            y,
            opacity: 0,
            duration,
            delay,
            stagger,
            ease,
            scrollTrigger: {
                trigger: containerRef.current,
                start,
                toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
        })
    }, { scope: containerRef })

    return containerRef
}

/**
 * Hook for parallax scrolling effect
 */
export function useParallax(speed: number = 0.5) {
    const elementRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!elementRef.current) return

        gsap.to(elementRef.current, {
            y: () => window.innerHeight * speed,
            ease: "none",
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        })
    }, { scope: elementRef })

    return elementRef
}

/**
 * Hook for scroll-based blur effect
 */
export function useScrollBlur(maxBlur: number = 15) {
    const elementRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!elementRef.current) return

        gsap.to(elementRef.current, {
            filter: `blur(${maxBlur}px)`,
            ease: "none",
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        })
    }, { scope: elementRef })

    return elementRef
}

/**
 * Generic GSAP animation hook for immediate animations (not scroll-based)
 */
export function useEntranceAnimation(options: {
    from?: gsap.TweenVars
    to?: gsap.TweenVars
    duration?: number
    delay?: number
    ease?: string
} = {}) {
    const elementRef = useRef<HTMLDivElement>(null)

    const {
        from = { opacity: 0, y: 30 },
        duration = 0.8,
        delay = 0,
        ease = "power2.out",
    } = options

    useGSAP(() => {
        if (!elementRef.current) return

        gsap.from(elementRef.current, {
            ...from,
            duration,
            delay,
            ease,
        })
    }, { scope: elementRef })

    return elementRef
}

/**
 * Hover animation utility
 */
export function createHoverAnimation(
    element: Element,
    hoverProps: gsap.TweenVars = { y: -8, duration: 0.3 },
    leaveProps: gsap.TweenVars = { y: 0, duration: 0.3 }
) {
    const handleMouseEnter = () => gsap.to(element, hoverProps)
    const handleMouseLeave = () => gsap.to(element, leaveProps)

    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
    }
}
