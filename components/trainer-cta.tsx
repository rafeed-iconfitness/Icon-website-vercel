"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { ApplyNowButton } from "@/components/apply-now-button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export function TrainerCTA() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        socialHandle: "",
        platform: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Trainer Application:", formData)
        // Here you would typically send this data to your backend
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handlePlatformChange = (value: string) => {
        setFormData((prev) => ({ ...prev, platform: value }))
    }

    return (
        <section id="trainer-cta" className="py-16 bg-black">
            <div className="w-full mx-auto max-w-[1200px] px-8">
                <div className="relative w-full mx-auto bg-zinc-900 rounded-[32px] overflow-hidden border border-white/10">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/CTA/trainerCTA.png"
                            alt="Trainer Background"
                            fill
                            className="object-cover object-right md:object-center opacity-40 blur-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                    </div>

                    <div className="relative z-10 p-8 md:p-16 flex flex-col items-start text-left max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Become an <span className="text-[#3f93cb]">ICON</span> <br />
                        </h2>
                        <p className="text-lg text-white/70 mb-10 max-w-lg">
                            We&apos;re opening Icon to a select number of elite coaches in the early access phase.
                        </p>

                        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-white mb-2 block pl-1">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full h-[50px] bg-white/10 border border-white/20 rounded-full px-6 text-white placeholder:text-white/30 focus:outline-none focus:border-[#3f93cb]/50 transition-colors backdrop-blur-sm"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-white mb-2 block pl-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full h-[50px] bg-white/10 border border-white/20 rounded-full px-6 text-white placeholder:text-white/30 focus:outline-none focus:border-[#3f93cb]/50 transition-colors backdrop-blur-sm"
                                />
                            </div>

                            {/* Social Handle Input with Selector */}
                            <div>
                                <label htmlFor="socialHandle" className="text-sm font-medium text-white mb-2 block pl-1">
                                    Social Media Handle
                                </label>
                                <div className="flex gap-2">
                                    <div className="w-[140px] shrink-0">
                                        <Select name="platform" onValueChange={handlePlatformChange} required>
                                            <SelectTrigger aria-label="Social Media Platform" className="w-full h-[50px] rounded-full bg-white/10 border-white/20 text-white focus:ring-[#3f93cb]/50">
                                                <SelectValue placeholder="Platform" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-zinc-900 border-white/10 text-white">
                                                <SelectItem value="instagram">Instagram</SelectItem>
                                                <SelectItem value="tiktok">TikTok</SelectItem>
                                                <SelectItem value="youtube">YouTube</SelectItem>
                                                <SelectItem value="twitter">X / Twitter</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            id="socialHandle"
                                            type="text"
                                            name="socialHandle"
                                            autoComplete="username"
                                            placeholder="@handle"
                                            required
                                            value={formData.socialHandle}
                                            onChange={handleInputChange}
                                            className="w-full h-[50px] bg-white/10 border border-white/20 rounded-full px-6 text-white placeholder:text-white/30 focus:outline-none focus:border-[#3f93cb]/50 transition-colors backdrop-blur-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <ApplyNowButton
                                    className="w-full rounded-full h-[54px] text-lg"
                                    variant="default"
                                >
                                    Apply Now
                                </ApplyNowButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
