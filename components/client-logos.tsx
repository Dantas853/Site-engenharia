"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export function ClientLogos() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("client-logos")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const logos = [
    { src: "/clientelogo.jpg", alt: "Sorocaba Refrescos" },
    { src: "/clientelogo1.jpg", alt: "Conal" },
    { src: "/clientelogo2.jpg", alt: "Toyoda" },
    { src: "/clientelogo3.jpg", alt: "JCB" },
    { src: "/clientelogo4.jpg", alt: "ZF" },
    { src: "/clientelogo5.jpg", alt: "Alphaville" },
  ]

  return (
    <div id="client-logos" className="mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={cn(
              "flex justify-center transition-all duration-700 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
            style={{
              transitionDelay: `${(index % 6) * 100}ms`,
            }}
          >
            <Image
              src={logo.src || "/clientelogo.jpg"}
              alt={logo.alt}
              width={120}
              height={60}
              className="h-20 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
