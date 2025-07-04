// This component is no longer needed as the theme is fixed to a dark, AI-centric aesthetic.
// To keep the app structure clean, we can leave this file empty or remove it.
// For this exercise, we will empty the file.
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
