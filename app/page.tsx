import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import LoadingAnimation from "@/components/loading-animation"

export const metadata: Metadata = {
  title: "Personal Website",
  description: "My personal website showcasing my skills and projects",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingAnimation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

