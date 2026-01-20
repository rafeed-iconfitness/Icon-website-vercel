import { LegalNav } from "@/components/legal-nav"

export default function DataPolicyPage() {
  return (
    <div className="min-h-screen bg-background pb-16">
      <LegalNav />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Data Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: January 6, 2026</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
            <p>
              This Data Policy describes how ICON collects, uses, shares, and protects your data. We are 
              committed to being transparent about our data practices and giving you control over your 
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">Account Information</h3>
            <p>
              When you create an account, we collect your name, email address, and other basic profile 
              information you provide.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Fitness and Health Data</h3>
            <p>
              We collect fitness-related information you provide, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Workout history and exercise logs</li>
              <li>Body measurements and progress photos</li>
              <li>Nutrition and dietary preferences</li>
              <li>Sleep and recovery data</li>
              <li>Activity tracking from connected devices</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">Usage Data</h3>
            <p>
              We automatically collect information about how you interact with our Service, including pages 
              visited, features used, and time spent on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
            <p>
              We use your data to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide personalized fitness coaching and recommendations</li>
              <li>Track your progress and adjust your fitness plans</li>
              <li>Improve our AI algorithms and service quality</li>
              <li>Communicate with you about your account and our services</li>
              <li>Conduct research and analytics to enhance our platform</li>
              <li>Ensure platform security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third parties who help us operate our platform</li>
              <li><strong>Business Partners:</strong> With your consent, to provide integrated services</li>
              <li><strong>Legal Compliance:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide you services. 
              You can request deletion of your data at any time, subject to legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Data Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Object to certain data processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data from unauthorized access, 
              alteration, disclosure, or destruction. This includes encryption, secure servers, and regular 
              security audits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries other than your own. We ensure 
              appropriate safeguards are in place to protect your data in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under 13. We do not knowingly collect personal data 
              from children under 13. If we learn we have collected such data, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              For questions about our data practices or to exercise your data rights, contact us at:
            </p>
            <p className="text-[#FF5733]">icon@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  )
}
