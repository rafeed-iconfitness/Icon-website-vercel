import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5733]/30 via-orange-700/20 to-black opacity-50" />
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CHOOSE YOUR PLAN</h1>
            <p className="text-lg text-white/70">
              Start for free, or unlock more power with our premium plans designed for every level of your fitness
              journey.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gradient-to-br from-[#FFE5DC] to-[#FFC9B9] rounded-2xl p-6 text-black">
              <div className="mb-4">
                <div className="text-sm font-medium text-black/60 mb-2">Free (Basic)</div>
                <div className="text-3xl font-bold mb-1">€0/month</div>
                <p className="text-sm text-black/70">Use our world-class fitness trackers</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Access to basic trackers</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Limited use of mascot icon</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Join leaderboards (basic view only)</span>
                </li>
              </ul>
            </div>

            {/* Core Plan */}
            <div className="bg-gradient-to-br from-[#FFE5DC] to-[#FFC9B9] rounded-2xl p-6 text-black">
              <div className="mb-4">
                <div className="text-sm font-medium text-black/60 mb-2">Core</div>
                <div className="text-3xl font-bold mb-1">€15/month</div>
                <p className="text-sm text-black/70">Build a dream team of 3 Icons</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Trainer icon access</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Enhanced activity tracking</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Priority access to new features</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Remove ads</span>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-[#FFE5DC] to-[#FFC9B9] rounded-2xl p-6 text-black relative">
              <div className="absolute top-4 right-4">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Recommend</span>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium text-black/60 mb-2">Pro</div>
                <div className="text-3xl font-bold mb-1">€20/month</div>
                <p className="text-sm text-black/70">Select from the most popular Icons</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Specialist icon access</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Exclusive badges & quests</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Early access to challenges</span>
                </li>
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-[#FFE5DC] to-[#FFC9B9] rounded-2xl p-6 text-black">
              <div className="mb-4">
                <div className="text-sm font-medium text-black/60 mb-2">Premium</div>
                <div className="text-3xl font-bold mb-1">€35/month</div>
                <p className="text-sm text-black/70">Select from a range of Icons</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Up to 3 icons in a group chat format</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Advanced tracking + personalized recommendations</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Unlock all pro features</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>Premium-only challenges & rewards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FF5733]/20 to-orange-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FF5733]/20 via-orange-600/10 to-black rounded-2xl p-8 md:p-12 border border-[#FF5733]/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to take control of your fitness journey?
              </h2>
              <p className="text-white/70">Join the waitlist and be part of the future of personal training.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">Join waitlist</h3>
                <p className="text-white/60 text-sm mb-6">Help us build the most iconic fitness app in the world</p>
                <Button className="w-full bg-[#FF5733] hover:bg-[#FF5733]/90 text-white h-12">
                  Complete fitness quiz
                </Button>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">Complete fitness quiz</h3>
                <p className="text-white/60 text-sm mb-6">
                  Find out exactly what your body was made to do, and how to do it
                </p>
                <Button className="w-full bg-[#FF5733] hover:bg-[#FF5733]/90 text-white h-12">Join Waitlist</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
