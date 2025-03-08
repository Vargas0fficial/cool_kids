"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ThemeTransition() {
  const { resolvedTheme } = useTheme()
  const [prevTheme, setPrevTheme] = useState<string | undefined>(undefined)
  const [showTransition, setShowTransition] = useState(false)

  useEffect(() => {
    // Skip initial render
    if (prevTheme === undefined) {
      setPrevTheme(resolvedTheme)
      return
    }

    // Only show transition when theme actually changes
    if (prevTheme !== resolvedTheme && resolvedTheme) {
      setShowTransition(true)

      // Hide transition after animation completes
      const timer = setTimeout(() => {
        setShowTransition(false)
      }, 500)

      setPrevTheme(resolvedTheme)
      return () => clearTimeout(timer)
    }
  }, [resolvedTheme, prevTheme])

  return (
    <AnimatePresence>
      {showTransition && (
        <motion.div
          key="theme-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            backgroundColor: resolvedTheme === "dark" ? "#fff" : "#000",
            mixBlendMode: "difference",
          }}
        />
      )}
    </AnimatePresence>
  )
}

