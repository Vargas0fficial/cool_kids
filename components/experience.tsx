"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "System Support",
    description: "System support is the assistance provided for computer hardware, software, and telecommunications. It can also refer to the systems and programs that help users operate and maintain their devices",
    image: "https://www.jwmpatrol.com/wp-content/uploads/2018/03/WKT-Technical-Support.png",
    tags: ["My SQL", "Barter", "Networking", "Troubleshooting"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Application Support Specialist",
    description:
      "Application support is a service that helps ensure that business applications run smoothly. It's available to both internal and external users of an organization",
    image: "https://powerslides.com/wp-content/uploads/2022/01/Support-Model-5.png",
    tags: ["Python", "My SQL", "Kotlin", "Javascript"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Experience () {
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Work Experience</h2>
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
              View More on Download Resume
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

