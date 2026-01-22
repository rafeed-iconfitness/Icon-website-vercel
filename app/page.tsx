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
            <p className="text-white/70">
              Here&apos;s what our ICON family loves about the platform. Our intelligent, agile approach lets you
              respond quickly to evolving markets and opportunities.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                What makes ICON different from other fitness apps?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                ICON combines AI-powered personalization with expert-crafted workout plans. Unlike generic fitness apps,
                we adapt to your unique goals, schedule, and progress in real-time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                How does ICON handle my fitness data?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Your privacy is our priority. All data is encrypted and stored securely. We never share your personal
                information with third parties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                Can I get a split-week plan or do I have to commit to full weeks?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                ICON is flexible. You can customize your weekly schedule and train on any days that work for you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                What does &quot;Founding Icons&quot; mean?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Founding Icons are our early supporters who get lifetime benefits including priority features, exclusive
                content, and locked-in pricing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                How much time do I need each day?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                As little as 15 minutes or as much as 90 minutes. Our workouts are flexible and designed to fit your
                schedule.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                Is it a chatbot, or is ICON truly AI-first?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                ICON is truly AI-first. Our system learns from your behavior, adapts to your progress, and provides
                intelligent recommendations beyond simple chatbot responses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                Can I substitute or replace my trainer-created workouts?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Yes! While we recommend following your trainer&apos;s plan, you have full flexibility to swap exercises
                or modify workouts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                Does ICON have worldwide accessibility?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Yes! ICON is available worldwide. We support multiple languages and currencies to serve our global
                community.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-zinc-900 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#FF5733] text-left">
                Why can&apos;t I join loads ICON?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                If you&apos;re experiencing loading issues, please check your internet connection and try refreshing.
                Contact support if the problem persists.
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
                src="/IconGuyWithPhone.png"
                alt="Background"
                fill
                className="object-cover opacity-40 blur-sm"
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
