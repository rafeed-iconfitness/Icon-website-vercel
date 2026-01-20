import { LegalNav } from "@/components/legal-nav"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pb-16">
      <LegalNav />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: January 6, 2026</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using ICON, you agree to be bound by these Terms and Conditions. If you 
              disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily access and use ICON for personal, non-commercial use only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software contained on ICON</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. 
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of 
              your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Health and Fitness Disclaimer</h2>
            <p>
              ICON provides fitness coaching and guidance, but is not a substitute for professional medical advice. 
              Consult with a healthcare provider before starting any fitness program. Use of our services is at 
              your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Subscription and Payments</h2>
            <p>
              Some parts of the Service are billed on a subscription basis. You will be billed in advance on a 
              recurring and periodic basis. Billing cycles are set on a monthly or annual basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any 
              reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              In no event shall ICON, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>
              Questions about the Terms and Conditions should be sent to us at:
            </p>
            <p className="text-[#FF5733]">icon@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  )
}
