"use client"

import type React from "react"

interface AosProviderProps {
  children: React.ReactNode
}

export default function AosProvider({ children }: AosProviderProps) {
  // AOS desabilitado temporariamente para evitar erros
  return <>{children}</>
}
