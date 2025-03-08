"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and Next.js, featuring a clean UI and smooth animations.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Three",
    description: "A mobile-first web application that helps users track their daily habits and achieve their goals.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["TypeScript", "React Native", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Four",
    description: "A dashboard application with data visualization, real-time updates, and user management.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="mt-4 text-muted-foreground">Some of my recent work</p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
              variants={item}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button size="sm" variant="secondary" className="gap-1" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="gap-1" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

