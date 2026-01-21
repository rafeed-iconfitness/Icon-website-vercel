"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plus, Star } from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { WaitlistButton } from "@/components/waitlist-button"
import { HowItWorks } from "@/components/how-it-works"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <HeroSection />

      <FeatureSection />

      <HowItWorks />

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-black"
      >
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
      </motion.section>



      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-[#FF5733]/20 to-orange-900/20"
      >
        <div className="w-full mx-auto max-w-[1200px] px-8">
          <div className="w-full mx-auto bg-gradient-to-br from-[#FF5733]/20 via-orange-600/10 to-black rounded-2xl p-8 md:p-12 border border-[#FF5733]/20">
            <div className="text-left mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to take control of your fitness journey?
              </h2>
              <p className="text-white/70">Join the waitlist and be part of the future of personal training.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Build the Future</h3>
                  <p className="text-white/60 text-sm mb-6">Help us build the most iconic fitness app in the world</p>
                </div>
                <WaitlistButton className="w-full" />
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Get Early Access</h3>
                  <p className="text-white/60 text-sm mb-6">
                    Find out exactly what your body was made to do, and how to do it
                  </p>
                </div>
                <WaitlistButton className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>



      <Footer />
    </div>
  )
}
