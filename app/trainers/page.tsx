import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrainerHeroSection } from "@/components/trainer-hero-section"

export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <TrainerHeroSection />

      <Footer />
    </div>
  )
}
