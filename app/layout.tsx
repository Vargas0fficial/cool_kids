import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import type { Metadata } from "next"
import ThemeTransition from "@/components/theme-transition"
import { ThemeScript } from "./theme-script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Personal Website",
    template: "%s | Personal Website",
  },
  description: "My personal website showcasing my skills and projects",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={inter.className}>
        <ThemeScript />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="theme-preference"
        >
          <ThemeTransition />
          <Navbar />
          {children}
          <footer className="border-t py-6">
            <div className="container flex flex-col items-center justify-center gap-2 px-4 md:px-6 text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Mark Beaver Vargas. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">Built with Next.js, Tailwind CSS, and Framer Motion</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'