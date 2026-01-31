import type React from "react"
import type { Metadata } from "next"
import { Barlow_Condensed } from "next/font/google"
import "./globals.css"

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
})

export const metadata: Metadata = {
  title: "Icon - AI-Powered Fitness Coaching",
  description:
    "Track your fitness journey with AI-powered insights and expert trainers. Build lasting habits that lead to real results.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  appleWebApp: {
    title: "Icon",
  },
  openGraph: {
    title: "Icon - AI-Powered Fitness Coaching",
    description:
      "Track your fitness journey with AI-powered insights and expert trainers. Build lasting habits that lead to real results.",
    url: "https://icontraining.app",
    siteName: "Icon",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Icon - AI-Powered Fitness Coaching",
    description:
      "Track your fitness journey with AI-powered insights and expert trainers. Build lasting habits that lead to real results.",

  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={barlowCondensed.variable}>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
