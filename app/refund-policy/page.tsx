"use client"

import { LegalNav } from "@/components/legal-nav"

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen bg-background pb-16">
            <LegalNav />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
                    <p className="text-muted-foreground">Last updated: January 22, 2026</p>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                        <p>
                            Thank you for subscribing to ICON. We strive to ensure that our users are completely satisfied
                            with their subscription. This Refund Policy outlines the terms and conditions under which
                            refunds may be granted.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Subscription Refunds</h2>
                        <p>
                            We offer a 7-day money-back guarantee for all new subscriptions. If you are not satisfied with
                            our service, you may request a full refund within 7 days of your initial purchase.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Refund requests must be made within 7 days of the original purchase date</li>
                            <li>Refunds are processed to the original payment method</li>
                            <li>Processing time for refunds is typically 5-10 business days</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Non-Refundable Situations</h2>
                        <p>Refunds will not be granted in the following situations:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Requests made after 7 days from the original purchase date</li>
                            <li>Subscription renewals (please cancel before renewal date)</li>
                            <li>Users who have violated our Terms of Service</li>
                            <li>Promotional or discounted subscriptions (unless otherwise stated)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">How to Request a Refund</h2>
                        <p>To request a refund, please follow these steps:</p>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Email us at icon@gmail.com with the subject line &quot;Refund Request&quot;</li>
                            <li>Include your account email address</li>
                            <li>Provide your order/transaction ID</li>
                            <li>Briefly explain the reason for your refund request</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Cancellation</h2>
                        <p>
                            You may cancel your subscription at any time through your account settings or by contacting
                            our support team. Cancellation will prevent future charges but typically does not result in
                            a refund for the current billing period.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p>If you have any questions about our Refund Policy, please contact us at:</p>
                        <p className="text-[#FF5733]">icon@gmail.com</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
