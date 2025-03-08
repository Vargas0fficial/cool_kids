"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mt-4 text-muted-foreground">Get to know me better</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full border-2 border-primary/20">
              <img src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/481140886_8985186188273722_3043318602889429899_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=XYX2lAQP7BcQ7kNvgFob4tY&_nc_oc=AdhGH4AgbihHLooVrP97N0ZW-cMpvvV2m9abrg605sCOy5XD_4EwqnAZb3LH8idvZ4c&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=A1JoUvbfZTp15jz05CllLGW&oh=00_AYDTpfEyt75wCXF3CCp8z_5qJ0RbOLSP8FMvxqwvj6srMA&oe=67CCB175" alt="About me" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p className="text-muted-foreground">
              I'm Mark Beaver Vargas from Domalandan East Pangasinan, 24 years of age but no passion in Programming, just for Money hehehe.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities. I believe in continuous learning and pushing the boundaries of what's
              possible on the web.
            </p>

            <div className="pt-4">
              <Button variant="outline" className="gap-2" asChild>
                <Link href="https://www.canva.com/design/DAGb9EzUg_o/xx695ltTLxmB32KPCW53vA/view?utm_content=DAGb9EzUg_o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3794b143ba" download>
                  <FileText className="h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

