import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5733]/30 via-orange-700/20 to-black opacity-50" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">MEET THE TEAM</h1>
            <p className="text-lg text-white/70">
              Meet the innovators behind the platform. Delivering the fitness future to trainers all over the world.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Founding Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Mish Choudhury", role: "CEO" },
              { name: "Taseen Choudhury", role: "CTO" },
            ].map((member, idx) => (
              <div key={idx} className="bg-zinc-900 rounded-lg overflow-hidden border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900" />
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-white/60">{member.role}</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wider Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Wider Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Ephraim Link", role: "Chief Marketing Officer" },
              { name: "Henry Loynes", role: "Chief Product Officer" },
              { name: "Richard Bowdler", role: "Technical Advisor" },
              { name: "Ishan Khanmu", role: "Technical Advisor" },
              { name: "Adam Gilani", role: "Business Advisor, Investments Consultant" },
              { name: "Richard Bowdler", role: "Technical Advisor" },
            ].map((member, idx) => (
              <div key={idx} className="bg-zinc-900 rounded-lg overflow-hidden border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900" />
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-white/60">{member.role}</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Builders */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Builders</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Shafin Khan", role: "Lead Developer" },
              { name: "Majdur Rahman", role: "Lead Developer" },
              { name: "Rashed Rahan", role: "UI/UX specialist" },
              { name: "Walid Khan", role: "UI/UX Designer" },
              { name: "Rafeed", role: "Project Co-ordinator" },
              { name: "Lusayo", role: "Full-Stack Developer" },
              { name: "Syad", role: "Frontend Developer" },
            ].map((member, idx) => (
              <div key={idx} className="bg-zinc-900 rounded-lg overflow-hidden border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-emerald-600/20 to-zinc-900 flex items-center justify-center">
                  <div className="text-6xl font-bold text-emerald-500">M</div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white">{member.name}</h3>
                    <p className="text-xs text-white/60">{member.role}</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0">
                    <Linkedin className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
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
