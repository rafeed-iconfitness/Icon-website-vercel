"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react"
import { addToWaitlist } from "@/app/actions"
import { useFormStatus } from "react-dom"

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button
            type="submit"
            disabled={pending}
            className="bg-[#d14e30] hover:bg-[#b04026] text-white rounded-full px-6 h-12 flex items-center gap-2"
        >
            {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Join waitlist"}
            {!pending && (
                <div className="bg-white rounded-full p-1">
                    <ArrowUpRight className="w-3 h-3 text-[#d14e30]" />
                </div>
            )}
        </Button>
    )
}

export function WaitlistDialog({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = useState(false)
    const [state, setState] = useState<{ success: boolean; message: string } | null>(null)

    async function handleSubmit(formData: FormData) {
        const result = await addToWaitlist(null, formData)
        setState(result)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[600px] border-none bg-transparent shadow-none p-0 overflow-hidden text-white">
                <div className="relative w-full h-full p-8 md:p-12 rounded-3xl overflow-hidden">
                    {/* Blur Background */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl border border-white/10" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                        <DialogHeader>
                            <DialogTitle className="text-4xl md:text-5xl font-bold tracking-tight">
                                Be the First to
                                <br />
                                Experience <span className="text-[#FF5733]">ICON</span>
                            </DialogTitle>
                            <DialogDescription className="text-lg text-white/80 max-w-sm mx-auto mt-4">
                                Join our waitlist to get early access, exclusive updates, and priority launch offers.
                            </DialogDescription>
                        </DialogHeader>

                        {state?.success ? (
                            <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-white/10 rounded-2xl border border-white/20 w-full max-w-sm">
                                <CheckCircle2 className="w-12 h-12 text-[#FF5733]" />
                                <p className="text-xl font-medium">You're on the list!</p>
                                <p className="text-sm text-white/60">We'll be in touch soon.</p>
                                <Button
                                    variant="ghost"
                                    className="text-white hover:text-white/80"
                                    onClick={() => {
                                        setOpen(false)
                                        setState(null)
                                    }}
                                >
                                    Close
                                </Button>
                            </div>
                        ) : (
                            <form action={handleSubmit} className="w-full max-w-md space-y-4">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="flex-1">
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="jane@framer.com"
                                            required
                                            className="bg-transparent border-white/30 text-white placeholder:text-white/40 h-12 rounded-lg focus-visible:ring-[#FF5733]"
                                        />
                                    </div>
                                    <SubmitButton />
                                </div>
                                {state?.message && !state.success && <p className="text-red-400 text-sm">{state.message}</p>}
                            </form>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
