"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Ensure we only render theme provider client-side
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Add a class to the document element when mounted
  React.useEffect(() => {
    if (mounted) {
      document.documentElement.classList.add("theme-mounted")
    }
  }, [mounted])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

