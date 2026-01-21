"use client"

import { LegalNav } from "@/components/legal-nav"

export default function EULAPage() {
    return (
        <div className="min-h-screen bg-background pb-16">
            <LegalNav />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">End User License Agreement (EULA)</h1>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
                    <p className="text-muted-foreground">Last updated: January 22, 2026</p>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                        <p>
                            This End User License Agreement (&quot;Agreement&quot;) is a binding agreement between you and ICON
                            (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). This Agreement governs your use of the ICON mobile
                            application and related services (collectively, the &quot;Application&quot;).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. License Grant</h2>
                        <p>
                            Subject to the terms of this Agreement, we grant you a limited, non-exclusive, non-transferable,
                            revocable license to download, install, and use the Application for your personal, non-commercial
                            purposes strictly in accordance with the Application&apos;s documentation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. License Restrictions</h2>
                        <p>You agree not to, and you will not permit others to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, or otherwise commercially exploit the Application</li>
                            <li>Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the Application</li>
                            <li>Remove, alter, or obscure any proprietary notice of the Company or its affiliates</li>
                            <li>Use the Application for creating a competing product or service</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                        <p>
                            The Application and its entire contents, features, and functionality are owned by ICON, its licensors,
                            or other providers of such material and are protected by copyright, trademark, and other intellectual
                            property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. User-Generated Content</h2>
                        <p>
                            You retain ownership of any content you submit through the Application. However, by submitting content,
                            you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display
                            such content in connection with providing our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
                        <p>
                            This Agreement is effective until terminated by you or the Company. Your rights under this Agreement
                            will terminate automatically without notice if you fail to comply with any of its terms. Upon termination,
                            you must cease all use of the Application and delete all copies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
                        <p>
                            THE APPLICATION IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND. TO
                            THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS,
                            IMPLIED, STATUTORY, OR OTHERWISE.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                        <p>If you have any questions about this EULA, please contact us at:</p>
                        <p className="text-[#FF5733]">icon@gmail.com</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
