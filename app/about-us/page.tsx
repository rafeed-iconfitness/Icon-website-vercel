"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function AboutUsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroTextRef = useRef<HTMLDivElement>(null)
  const foundingTeamRef = useRef<HTMLDivElement>(null)
  const widerTeamRef = useRef<HTMLDivElement>(null)
  const buildersRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)


  useGSAP(() => {
    // Initial states
    const elements = [
      heroTextRef.current,
      foundingTeamRef.current,
      widerTeamRef.current,
      buildersRef.current,
      ctaRef.current
    ].filter(Boolean)

    gsap.set(elements, { opacity: 0, y: 20 })

    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } })

    tl.to(heroTextRef.current, { opacity: 1, y: 0 })
      .to(foundingTeamRef.current, { opacity: 1, y: 0 }, "-=0.2")
      .to(widerTeamRef.current, { opacity: 1, y: 0 }, "-=0.2")
      .to(buildersRef.current, { opacity: 1, y: 0 }, "-=0.2")
      .to(ctaRef.current, { opacity: 1, y: 0 }, "-=0.2")

  }, { scope: containerRef })

  return (
    <div className="min-h-screen bg-black" ref={containerRef}>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16">

        <div className="max-w-[1200px] mx-auto w-full px-8 relative">
          <div ref={heroTextRef} className="max-w-3xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">MEET THE TEAM</h1>
            <p className="text-lg text-white/70">
              Meet the innovators behind the platform. Delivering the future of fitness to trainers all over the world.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section ref={foundingTeamRef} className="pt-16">
        <div className="max-w-[1200px] mx-auto w-full px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Founding Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "Mish Choudhury", role: "Chief Vision Officer", image: "/aboutUs/Mish.png", linkedin: "https://www.linkedin.com/in/mish-choudhury/" },
              { name: "Taseen Choudhury", role: "Chief Operating Officer", image: "/aboutUs/Taseen.png", linkedin: "https://www.linkedin.com/in/taseen-choudhury-a6409b396/" },
            ].map((member, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden border border-white/10 group">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">{member.name}</h3>
                      <p className="text-xs text-white/60 mt-1">{member.role}</p>
                    </div>
                    <Link href={member.linkedin || "#"} className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/linkedinButton.svg"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                        className="w-5 h-5 invert"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wider Team */}
      <section ref={widerTeamRef} className="pt-16">
        <div className="max-w-[1200px] mx-auto w-full px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Wider Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "Henry Loynes", role: "Head of Asia-Pacific Operations", image: "/aboutUs/Henry.png", linkedin: "https://www.linkedin.com/in/henry-loynes-414656387/" },
              { name: "Richard Bowdler", role: "AI Technical Advisor", image: "/aboutUs/Richard.png", linkedin: "https://www.linkedin.com/in/richardbowdler/" },
              { name: "Ishan Khanna", role: "Software Technical Advisor", image: "/aboutUs/Ishan.png", linkedin: "https://www.linkedin.com/in/droidchef/" },
              { name: "Adam Gibrill", role: "Investment Counsel", image: "/aboutUs/Adam.png", linkedin: "#" },
              { name: "Manraj Saggu", role: "Investment Counsel", image: "/aboutUs/Manraj.png", linkedin: "https://www.linkedin.com/in/manraj-saggu-ba37b560/" },
            ].map((member, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden border border-white/10 group">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">{member.name}</h3>
                      <p className="text-xs text-white/60 mt-1">{member.role}</p>
                    </div>
                    <Link href={member.linkedin || "#"} className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/linkedinButton.svg"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                        className="w-5 h-5 invert"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Builders
      <section ref={buildersRef} className="pt-16">
        <div className="max-w-[1200px] mx-auto w-full px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Builders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
            {[
              { name: "Rafeed Iqbal", role: "Product Manager" },
              { name: "Mohammad Rayhan", role: "Senior Backend Engineer" },
              { name: "Abdur Rahim", role: "Senior Backend Engineer" },
              { name: "Shafiqur Rahman", role: "Senior Frontend Engineer" },
              { name: "Syed Hasan", role: "Frontend Engineer" },
            ].map((member, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden border border-white/10 group">
                <div className="aspect-square bg-gradient-to-br from-emerald-600/20 to-zinc-900 flex items-center justify-center">
                  <div className="text-4xl font-bold text-emerald-500">{member.name[0]}</div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">{member.name}</h3>
                      <p className="text-xs text-white/60 mt-1">{member.role}</p>
                    </div>
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/linkedinButton.svg"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                        className="w-5 h-5 invert"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-white mb-8">Designers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "Shafin Khan", role: "Lead UI/UX Designer" },
              { name: "Majdur Rahman", role: "UI/UX Designer" },
              { name: "Rashed Rahan", role: "UI/UX Designer" },
              { name: "Walid Khan", role: "UI/UX Designer" },
            ].map((member, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden border border-white/10 group">
                <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-zinc-900 flex items-center justify-center">
                  <div className="text-4xl font-bold text-purple-500">{member.name[0]}</div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">{member.name}</h3>
                      <p className="text-xs text-white/60 mt-1">{member.role}</p>
                    </div>
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/linkedinButton.svg"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                        className="w-5 h-5 invert"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <CtaSection />
      <Footer />
    </div>
  )
}
