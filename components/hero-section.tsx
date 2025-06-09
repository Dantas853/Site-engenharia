"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
       <div className="absolute inset-0 z-0">
       <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          >
          <source src="/video-engenharia.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos em HTML5.
       </video>
    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
  </div>

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div
            className={cn(
              "flex flex-col justify-center space-y-6 text-white opacity-0",
              isVisible && "animate-fadeInUp opacity-100",
            )}
          >
            <div className="space-y-4">
              <div className="inline-block rounded-md bg-white/20 backdrop-blur-sm px-4 py-1 text-sm text-white font-medium">
                Engenharia de Excelência
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none">
                Transformando Ideias em Estruturas Sólidas
              </h1>
              <div className="w-20 h-1 bg-white"></div>
              <p className="max-w-[600px] text-white/90 text-lg md:text-xl">
                Soluções completas em engenharia civil, estrutural e infraestrutura para projetos de todos os portes,
                com foco em qualidade, inovação e sustentabilidade.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/servicos">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium">
                  Nossos Serviços
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contato">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 font-medium">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </div>
          <div
            className={cn(
              "relative h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden opacity-0",
              isVisible && "animate-fadeInUp delay-300 opacity-100",
            )}
          >
            <div className="absolute inset-0 bg-white p-4 rounded-lg shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-md">
                <Image
                  src="/estrutura1.jpg"
                  alt="Projeto de engenharia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
