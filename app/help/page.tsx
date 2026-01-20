import { LegalNav } from "@/components/legal-nav"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background pb-16">
      <LegalNav />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Help Center</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p className="text-lg">
            Welcome to the ICON Help Center. Find answers to common questions and learn how to get the 
            most out of your fitness journey with ICON.
          </p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">How do I create an account?</h3>
            <p>
              Click on "Join Waitlist" to sign up for early access to ICON. Once we launch, you'll receive 
              an invitation to create your account and start your personalized fitness journey.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">What information do I need to provide?</h3>
            <p>
              To create your personalized fitness plan, we'll ask about your fitness goals, current activity 
              level, available equipment, schedule, and any health considerations. The more information you 
              provide, the better we can tailor your experience.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Is ICON suitable for beginners?</h3>
            <p>
              Absolutely! ICON is designed for all fitness levels, from complete beginners to advanced athletes. 
              Our AI adapts to your current fitness level and progressively challenges you as you improve.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Using ICON</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">How does the AI coaching work?</h3>
            <p>
              ICON uses advanced AI trained by expert trainers and athletes to create personalized workout 
              plans, provide real-time feedback, and adjust your program based on your progress and feedback.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Can I track my nutrition?</h3>
            <p>
              Yes! ICON includes comprehensive nutrition tracking and personalized meal recommendations aligned 
              with your fitness goals.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Can I connect my fitness devices?</h3>
            <p>
              ICON integrates with popular fitness trackers and wearables to automatically sync your activity 
              data and provide more accurate recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Account & Subscription</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">What subscription plans are available?</h3>
            <p>
              Visit our <a href="/pricing" className="text-[#FF5733] hover:underline">Pricing page</a> to see 
              all available subscription options and choose the plan that best fits your needs.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Can I cancel my subscription?</h3>
            <p>
              Yes, you can cancel your subscription at any time from your account settings. You'll continue 
              to have access until the end of your current billing period.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">How do I update my account information?</h3>
            <p>
              Go to your account settings to update your profile information, fitness goals, preferences, 
              and payment details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Support</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">What devices are supported?</h3>
            <p>
              ICON is available on iOS and Android mobile devices, as well as through our web platform. 
              Download our app from the App Store or Google Play.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">I'm having technical issues. What should I do?</h3>
            <p>
              First, try closing and reopening the app, or clearing your browser cache. If the issue persists, 
              contact our support team at <a href="mailto:icon@gmail.com" className="text-[#FF5733] hover:underline">icon@gmail.com</a> 
              with details about the problem.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Is my data secure?</h3>
            <p>
              Yes! We use industry-standard encryption and security measures to protect your personal and 
              fitness data. Read our <a href="/privacy" className="text-[#FF5733] hover:underline">Privacy Policy</a> 
              for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
            <p>
              If you couldn't find the answer to your question, please don't hesitate to reach out to our 
              support team:
            </p>
            <ul className="list-none space-y-2">
              <li>📧 Email: <a href="mailto:icon@gmail.com" className="text-[#FF5733] hover:underline">icon@gmail.com</a></li>
              <li>💬 Live Chat: Available in the app (coming soon)</li>
              <li>📱 Social Media: Follow us for updates and tips</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
