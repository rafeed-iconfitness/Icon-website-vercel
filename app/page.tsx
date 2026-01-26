"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { HowItWorks } from "@/components/how-it-works"
import { WhyItWorks } from "@/components/why-it-works"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <HeroSection />

      <FeatureSection />

      <HowItWorks />

      <WhyItWorks />

      <FaqSection />

      <CtaSection />

      <Footer />
    </div>
  )
}
