import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SuccessMessageProps {
    title?: string
    description?: string
    buttonText?: string
    onClose?: () => void
    className?: string
    iconClassName?: string
}

export function SuccessMessage({
    title = "You're on the list!",
    description = "We'll be in touch soon.",
    buttonText = "Close",
    onClose,
    className,
    iconClassName,
}: SuccessMessageProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center p-6 space-y-4 bg-white/10 rounded-2xl border border-white/20 w-full max-w-sm text-center mx-auto", className)}>
            <CheckCircle2 className={cn("w-12 h-12 text-[#FF5733]", iconClassName)} />
            <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-sm text-white/60 mt-1">{description}</p>
            </div>
            {onClose && (
                <Button
                    variant="ghost"
                    className="text-white hover:text-white/80 hover:bg-white/10"
                    onClick={onClose}
                >
                    {buttonText}
                </Button>
            )}
        </div>
    )
}
