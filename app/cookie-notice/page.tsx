import { LegalNav } from "@/components/legal-nav"

export default function CookieNoticePage() {
  return (
    <div className="min-h-screen bg-background pb-16">
      <LegalNav />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Notice</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: January 6, 2026</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file 
              is stored in your web browser and allows the Service or a third-party to recognize you and make 
              your next visit easier and the Service more useful to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How ICON Uses Cookies</h2>
            <p>
              When you use and access ICON, we may place a number of cookies files in your web browser. 
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential cookies:</strong> To enable core functionality of our Service</li>
              <li><strong>Performance cookies:</strong> To understand how you interact with our Service</li>
              <li><strong>Functional cookies:</strong> To remember your preferences and settings</li>
              <li><strong>Targeting cookies:</strong> To deliver relevant advertisements to you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">Session Cookies</h3>
            <p>
              We use Session Cookies to operate our Service. These are temporary cookies that expire when 
              you close your browser.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Persistent Cookies</h3>
            <p>
              We use Persistent Cookies to remember your preferences and various settings. These remain on 
              your device for a set period of time.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Third-Party Cookies</h3>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage 
              statistics of the Service and deliver advertisements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Your Choices Regarding Cookies</h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please 
              visit the help pages of your web browser. Please note, however, that if you delete cookies or 
              refuse to accept them, you might not be able to use all of the features we offer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. More Information</h2>
            <p>
              For more information about cookies and how to manage them, visit:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>www.allaboutcookies.org</li>
              <li>www.youronlinechoices.eu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="text-[#FF5733]">icon@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  )
}
