import Image from "next/image";
import { Star } from "lucide-react";

export function Testimonials() {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Created by athletes, trusted by everyone</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join thousands of people who have transformed their fitness journey with ICON.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Kevin Martin",
                role: "Marathon Runner",
                image: "/athlete-profile.png",
                testimonial:
                  "ICON helped me shave 15 minutes off my marathon time. The AI coaching adapts to my training schedule perfectly.",
                rating: 5,
              },
              {
                name: "Sarah Waltman",
                role: "Yoga Instructor",
                image: "/female-athlete.png",
                testimonial:
                  "As an instructor myself, I&apos;m impressed by the quality of the programs. The personalization is next level.",
                rating: 5,
              },
              {
                name: "Elisa Moss",
                role: "CrossFit Athlete",
                image: "/crossfit-athlete.png",
                testimonial:
                  "The workout tracking and progress analytics are incredible. I can see exactly how I&apos;m improving each week.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-zinc-900 rounded-lg p-6 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4 text-sm">{testimonial.testimonial}</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF5733] text-[#FF5733]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}