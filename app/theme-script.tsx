"use client"

import { useEffect } from "react"

// This component helps prevent flash of wrong theme
export function ThemeScript() {
  useEffect(() => {
    const theme = localStorage.getItem("theme-preference")
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const resolvedTheme = theme || systemTheme

    if (resolvedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return null
}

