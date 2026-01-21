"use client"

import { Button } from "@/components/ui/button"
import { WaitlistDialog } from "./waitlist-dialog"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface WaitlistButtonProps {
    variant?: "default" | "outline" | "pill"
    className?: string
    children?: React.ReactNode
    showIcon?: boolean
}

export function WaitlistButton({
    variant = "default",
    className,
    children = "Join Waitlist",
    showIcon = true
}: WaitlistButtonProps) {

    const baseStyles = "transition-all duration-300 transform group"

    const variants = {
        default: "bg-[#d14e30] hover:bg-[#b04026] text-white shadow-[0_0_15px_rgba(209,78,48,0.3)] hover:shadow-[0_0_25px_rgba(209,78,48,0.5)]",
        outline: "bg-transparent hover:bg-white/10 text-white border border-white/20",
        pill: "bg-[#d14e30] hover:bg-[#b04026] text-white rounded-full px-8 h-14 text-lg font-medium shadow-[0_0_20px_rgba(209,78,48,0.4)] hover:shadow-[0_0_30px_rgba(209,78,48,0.6)] hover:scale-105"
    }

    return (
        <WaitlistDialog>
            <Button
                className={cn(baseStyles, variants[variant], className)}
            >
                {children}
                {showIcon && (
                    <div className="relative ml-2 w-6 h-6 overflow-hidden rounded-full">
                        {/* Default State: White circle with orange arrow - exits to top-right */}
                        <div className={cn(
                            "absolute inset-0 rounded-full p-1 flex items-center justify-center transition-all duration-300 ease-out",
                            "group-hover:translate-x-full group-hover:-translate-y-full group-hover:opacity-0",
                            variant === "outline" ? "bg-white/10" : "bg-white"
                        )}>
                            <ArrowUpRight className={cn(
                                "w-3 h-3",
                                variant === "outline" ? "text-white" : "text-[#d14e30]"
                            )} />
                        </div>
                        {/* Hover State: Black circle with white arrow - comes from bottom-left */}
                        <div className={cn(
                            "absolute inset-0 rounded-full p-1 flex items-center justify-center transition-all duration-300 ease-out",
                            "-translate-x-full translate-y-full opacity-0",
                            "group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100",
                            "bg-black"
                        )}>
                            <ArrowUpRight className="w-3 h-3 text-white" />
                        </div>
                    </div>
                )}
            </Button>
        </WaitlistDialog>
    )
}
