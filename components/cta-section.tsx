"use client"

import { useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { WaitlistButton } from "@/components/waitlist-button"
import { addToWaitlist } from "@/app/actions"
import { SuccessMessage } from "@/components/success-message"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export function CtaSection() {
    const ctaRef = useRef<HTMLElement>(null)
    const [success, setSuccess] = useState(false)
    const [isPending, setIsPending] = useState(false)

    useGSAP(() => {
        // CTA Section animation
        gsap.from(ctaRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ctaRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        })
    })

    return (
        <section ref={ctaRef} className="py-16 bg-black">
            <div className="w-full mx-auto max-w-[1200px] px-8">
                <div className="relative w-full mx-auto bg-black rounded-[32px] overflow-hidden border border-white/10">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/CTA/55c6485c-0b0c-4e99-ae3a-f30261a17071.png"
                            alt="Background"
                            fill
                            className="object-contain object-[75%_45%] opacity-50 blur-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                    </div>

                    <div className="relative z-10 p-8 md:p-16 flex flex-col items-start text-left max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Be the First to <br />
                            Experience <span className="text-[#FF5733]">ICON</span>
                        </h2>
                        <p className="text-lg text-white/70 mb-10 max-w-lg">
                            Join our waitlist to get early access, exclusive updates, and priority launch offers.
                        </p>

                        {success ? (
                            <SuccessMessage
                                title="You're on the list!"
                                description="We'll be in touch soon."
                                className="w-full max-w-md bg-white/10 border-white/20"
                                buttonText="Close"
                                onClose={() => setSuccess(false)}
                            />
                        ) : (
                            <form action={async (formData) => {
                                setIsPending(true)
                                const result = await addToWaitlist(null, formData)
                                setIsPending(false)
                                if (result.success) {
                                    setSuccess(true)
                                } else {
                                    alert(result.message)
                                }
                            }} className="w-full max-w-md">
                                <label
                                    htmlFor="email-cta"
                                    className="text-sm font-medium text-white mb-3 block pl-1"
                                >
                                    Email
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        id="email-cta"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder=""
                                        className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-44 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF5733]/50 transition-colors backdrop-blur-sm"
                                    />
                                    <div className="absolute right-2 top-2 bottom-2">
                                        <button
                                            type="submit"
                                            disabled={isPending}
                                            className="h-full rounded-full px-6 bg-[#d14e30] hover:bg-[#b04026] text-white transition-all duration-300 transform disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isPending ? "Joining..." : "Join Waitlist"}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
