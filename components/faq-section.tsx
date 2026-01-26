"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export function FaqSection() {
    const faqRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        // FAQ Section animation
        gsap.from(faqRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: faqRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        })
    })

    return (
        <section ref={faqRef} className="py-16 bg-black">
            <div className="w-full mx-auto max-w-[1200px] px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Got questions? We&apos;ve got answers.</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
                        <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                            What is Icon Training?
                        </AccordionTrigger>
                        <AccordionContent className="text-white/70">
                            <p className="mb-3">Icon Training is an adaptive AI training platform, built around real experts.</p>
                            <p>Icon Training adapts daily based on your performance, recovery signals, consistency, and priorities. The Icon Training app creates training that evolves with you, rather than forcing you into a rigid plan.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
                        <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                            How is Icon Training different from other AI fitness apps?
                        </AccordionTrigger>
                        <AccordionContent className="text-white/70">
                            <p className="mb-3">Most AI fitness apps rely on generic, web-scraped information. Icon Training lets you choose which athlete&apos;s guidance you want to follow, and downloads that athlete&apos;s brain into your phone in the form of an Icon.</p>
                            <p>Each Icon is modelled on an individual athlete - their training philosophy, nutrition guidance, recovery strategies, and decision-making.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
                        <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                            Is Icon Training suitable for beginners?
                        </AccordionTrigger>
                        <AccordionContent className="text-white/70">
                            <p className="mb-3">Yes. Icon Training adjusts according to your current ability and constraints.</p>
                            <p>You choose what metrics you want to track, and what features you want to activate. Keep it as simple or as complex as you like.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
                        <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                            Does Icon Training replace a real coach?
                        </AccordionTrigger>
                        <AccordionContent className="text-white/70">
                            <p className="mb-3">Icon does not replace human expertise - it delivers expert-level thinking in an always-available, hyper-speed format.</p>
                            <p>You get consistent guidance, structure, and adaptation without the limitations of schedules or geography.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
                        <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                            How does Icon Training personalise fitness?
                        </AccordionTrigger>
                        <AccordionContent className="text-white/70">
                            <p className="mb-3">You choose the data points that matter to you. Icon Training learns from your inputs, habits, recovery, and consistency - then adapts your training accordingly.</p>
                            <p>No unnecessary metrics. No forced tracking. No fluff.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
                        <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                            Do I need wearables or special equipment?
                        </AccordionTrigger>
                        <AccordionContent className="text-white/70">
                            <p className="mb-3">No. Icon Training works best with smart wearable devices - but it works just fine without them.</p>
                            <p>If you use them, Icon Training can incorporate the data. If not, it adapts based on your feedback and performance trends.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
