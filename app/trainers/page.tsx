import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users } from "lucide-react"

export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-700/20 to-black opacity-50" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Coach More.
              <br />
              Stress Less.
              <br />
              <span className="text-blue-400">Earn More.</span>
            </h1>
            <p className="text-lg text-white/70 mb-8">
              Join ICON and reach thousands of clients without the overhead. Scale your coaching business with
              AI-powered tools.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 h-12">Apply now</Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/60">Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-white/60">Average satisfaction rating</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-4xl font-bold text-emerald-500 mb-2">
                <TrendingUp className="w-8 h-8" />
                +24%
              </div>
              <div className="text-white/60">Average income growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Athletes Choose ICON */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why athletes choose icon</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Hours saved</h3>
                <p className="text-white/70">Automate admin tasks and focus on what matters - coaching your clients.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Income boost</h3>
                <p className="text-white/70">
                  Reach more clients without working more hours. Scale your impact and earnings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Spaces Are Limited</h2>
          <p className="text-white/70 mb-8">
            We&apos;re accepting a select number of expert trainers. Apply today to secure your spot.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 h-12">Apply now</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
