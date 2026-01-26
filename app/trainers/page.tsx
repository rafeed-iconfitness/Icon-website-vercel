import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrainerHeroSection } from "@/components/trainer-hero-section"
import { TrainerPainPoints } from "@/components/trainer-pain-points"
import { TrainerSolution } from "@/components/trainer-solution"
import { TrainerHowItWorks } from "@/components/trainer-how-it-works"
import { TrainerWhatYouGet } from "@/components/trainer-what-you-get"

export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <TrainerHeroSection />
      <TrainerPainPoints />
      <TrainerSolution />
      <TrainerHowItWorks />
      <TrainerWhatYouGet />

      <Footer />
    </div>
  )
}
