"use client"

import { LegalNav } from "@/components/legal-nav"

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-background pb-16">
            <LegalNav />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
                    <p className="text-muted-foreground">Last updated: January 22, 2026</p>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">General Disclaimer</h2>
                        <p>
                            The information provided by ICON (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) on our mobile application and website
                            is for general informational purposes only. All information is provided in good faith, however we
                            make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy,
                            validity, reliability, availability, or completeness of any information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Health and Fitness Disclaimer</h2>
                        <p>
                            ICON is not a medical organization and our team cannot give you medical advice or diagnosis.
                            Nothing on this Application or any related Services should be considered, or used as a substitute
                            for, medical advice, diagnosis, or treatment.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Always consult with a physician or other qualified healthcare provider before starting any fitness program</li>
                            <li>If you experience faintness, dizziness, pain, or shortness of breath at any time, stop exercising immediately</li>
                            <li>If you are sedentary, have high cholesterol, high blood pressure, or diabetes, we recommend you consult your physician before using our Application</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">External Links Disclaimer</h2>
                        <p>
                            The Application may contain links to external websites that are not provided or maintained by or in
                            any way affiliated with ICON. We do not guarantee the accuracy, relevance, timeliness, or completeness
                            of any information on these external websites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Professional Disclaimer</h2>
                        <p>
                            The Application cannot and does not contain fitness advice. The fitness information is provided for
                            general informational and educational purposes only and is not a substitute for professional advice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Testimonials Disclaimer</h2>
                        <p>
                            The Application may contain testimonials by users of our products and/or services. These testimonials
                            reflect the real-life experiences of those individual users. However, the experiences are personal to
                            those users and may not necessarily be representative of all users.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Errors and Omissions Disclaimer</h2>
                        <p>
                            While we have made every attempt to ensure the information in this Application is accurate, we are
                            not responsible for any errors or omissions or for the results obtained from the use of this information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                        <p>If you require any more information or have any questions about our disclaimer, please contact us at:</p>
                        <p className="text-[#FF5733]">icon@gmail.com</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
