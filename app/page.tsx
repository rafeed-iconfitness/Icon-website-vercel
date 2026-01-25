"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { WaitlistButton } from "@/components/waitlist-button"
import { HowItWorks } from "@/components/how-it-works"
import { WhyItWorks } from "@/components/why-it-works"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const faqRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

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
    <div className="min-h-screen bg-black">
      <Header />

      <HeroSection />

      <FeatureSection />

      <HowItWorks />

      <WhyItWorks />

      {/* FAQ Section */}
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



      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 bg-black">
        <div className="w-full mx-auto max-w-[1200px] px-8">
          <div className="relative w-full mx-auto bg-zinc-900 rounded-[32px] overflow-hidden border border-white/10">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/CTA/55c6485c-0b0c-4e99-ae3a-f30261a17071.png"
                alt="Background"
                fill
                className="object-contain object-right opacity-40 blur-sm"
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

              <div className="w-full max-w-md">
                <label className="text-sm font-medium text-white mb-3 block pl-1">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-44 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF5733]/50 transition-colors backdrop-blur-sm"
                  />
                  <div className="absolute right-2 top-2 bottom-2">
                    <WaitlistButton
                      className="h-full rounded-full px-6"
                      variant="default"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  )
}
