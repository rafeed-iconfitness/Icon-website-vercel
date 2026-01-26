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

const faqItems = [
    {
        question: "Do I need any technical skills to create an Icon?",
        answer: "No - it’s easy, and we will hold your hand through the process! Once approved, our team will work with you directly from onboarding to Icon creation. You bring your strategy, expertise, and specialism, and we handle the rest."
    },
    {
        question: "Do I need to be a qualified personal trainer?",
        answer: "No, you do not need to be a qualified trainer. We appreciate that there are fitness influencers with a lot of experience and value to give - so we will take multiple factors into consideration when reviewing Icon applications."
    },
    {
        question: "How do I make money?",
        answer: "Clients subscribe to your Icon. You earn recurring monthly revenue for every active subscriber."
    },
    {
        question: "How much can I earn?",
        answer: "You can have an unlimited number of clients, which means your earning potential is unlimited. Expand your audience, convert more clients, earn more income - in an authentic and repeatable way."
    },
    {
        question: "Do I keep ownership of my content and brand?",
        answer: "Always. Your programs, voice, and methods remain yours. Icon simply powers the delivery of your personality and coaching to the world."
    },
    {
        question: "How do I find out more?",
        answer: "Just contact us! We pride ourselves on the professionalism of our communication with Partner Trainers, and we look forward to giving you more information."
    }
]

export function TrainerFAQ() {
    const faqRef = useRef<HTMLElement>(null)

    useGSAP(() => {
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
                    {faqItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-zinc-900 border border-white/10 rounded-lg px-6"
                        >
                            <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-white/70">
                                <p>{item.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
