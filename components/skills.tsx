"use client"

import { motion } from "framer-motion"
import { Cpu, FileCode, Headset, Network, Server, Shield } from "lucide-react"

const skills = [
  {
    category: "System Support",
    icon: <Server className="h-8 w-8" />,
    items: [
      "Windows Server",
      "Active Directory",
      "Group Policy",
      "System Administration",
      "Troubleshooting",
      "IT Service Management",
      "Virtualization",
    ],
  },
  {
    category: "Networking",
    icon: <Network className="h-8 w-8" />,
    items: ["TCP/IP", "DNS", "DHCP", "VPN", "Routing & Switching", "Firewalls", "Network Security"],
  },
  {
    category: "Technical",
    icon: <Cpu className="h-8 w-8" />,
    items: [
      "Hardware Maintenance",
      "PC Builds",
      "Peripherals",
      "Diagnostics",
      "System Upgrades",
      "Data Recovery",
      "Backup Solutions",
    ],
  },
  {
    category: "Software",
    icon: <FileCode className="h-8 w-8" />,
    items: [
      "Microsoft Office Suite",
      "Windows OS",
      "macOS",
      "Linux",
      "Software Deployment",
      "Patch Management",
      "Application Support",
    ],
  },
  {
    category: "Security",
    icon: <Shield className="h-8 w-8" />,
    items: [
      "Antivirus Management",
      "Security Audits",
      "Access Control",
      "Data Protection",
      "Security Awareness",
      "Incident Response",
    ],
  },
  {
    category: "Other",
    icon: <Headset className="h-8 w-8" />,
    items: [
      "Customer Support",
      "Technical Documentation",
      "Project Management",
      "Team Leadership",
      "Training & Development",
      "Process Improvement",
    ],
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Skills</h2>
          <p className="mt-4 text-muted-foreground">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              variants={item}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

