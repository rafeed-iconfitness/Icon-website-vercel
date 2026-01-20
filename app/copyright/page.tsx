import { LegalNav } from "@/components/legal-nav"

export default function CopyrightPage() {
  return (
    <div className="min-h-screen bg-background pb-16">
      <LegalNav />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Copyright Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: January 6, 2026</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Copyright Notice</h2>
            <p>
              All content included on ICON, such as text, graphics, logos, icons, images, audio clips, 
              digital downloads, data compilations, and software, is the property of ICON or its content 
              suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
            <p>
              The compilation of all content on this site is the exclusive property of ICON and protected 
              by international copyright laws. All software used on this site is the property of ICON or 
              its software suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. DMCA Compliance</h2>
            <p>
              ICON respects the intellectual property rights of others and expects our users to do the same. 
              We will respond to notices of alleged copyright infringement that comply with the Digital 
              Millennium Copyright Act (DMCA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Filing a DMCA Notice</h2>
            <p>
              If you believe that your copyrighted work has been copied in a way that constitutes copyright 
              infringement and is accessible on ICON, please notify our copyright agent with the following 
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing</li>
              <li>Your contact information (address, telephone number, and email)</li>
              <li>A statement that you have a good faith belief that use of the material is not authorized</li>
              <li>A statement that the information in the notification is accurate</li>
              <li>Your physical or electronic signature</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Counter-Notification</h2>
            <p>
              If you believe that your content that was removed (or to which access was disabled) is not 
              infringing, you may send a counter-notification to our copyright agent with the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identification of the material that has been removed</li>
              <li>Your name, address, telephone number, and email address</li>
              <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
              <li>Your physical or electronic signature</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Repeat Infringer Policy</h2>
            <p>
              In accordance with the DMCA and other applicable law, ICON has adopted a policy of terminating, 
              in appropriate circumstances and at our sole discretion, users who are deemed to be repeat 
              infringers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Copyright Agent</h2>
            <p>
              For copyright inquiries or DMCA notices, please contact our designated copyright agent at:
            </p>
            <p className="text-[#FF5733]">icon@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  )
}
