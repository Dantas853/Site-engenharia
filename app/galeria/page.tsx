import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function GaleriaPage() {
  const projetos = [
    {
      id: 1,
      title: "Residencial",
      description: "Projeto estrutural e execução para residência com estrutura mista de concreto e aço.",
      categoria: "Estrutural",
      image: "/galeria.jpg",
    },
    {
      id: 2,
      title: "Hangar",
      description: "Projeto, supervisão e execução da construção de um hangar para armazenamento e manutenção de aviões.",
      categoria: "Infraestrutura",
      image: "/galeria1.jpg",
    },
    {
      id: 3,
      title: "Heliponto Comercial",
      description: "Projeto completo de engenharia e execução para complexo empresarial.",
      categoria: "Civil",
      image: "/galeria2.jpg",
    },
    {
      id: 4,
      title: "Residência de Alto Padrão",
      description: "Projeto particular e execução da obra.",
      categoria: "Infraestrutura",
      image: "/galeria3.jpg",
    },
    {
      id: 5,
      title: "Condomínio Residencial Alphaville 3",
      description: "Projeto estrutural e execução de residência alto padrão.",
      categoria: "Estrutural",
      image: "/galeria4.jpg",
    },
    {
      id: 6,
      title: "Mezanino",
      description: "Projeto estrutural e execução de um novo mezanino para empresa.",
      categoria: "Civil",
      image: "/galeria5.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Galeria de Projetos
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Conheça alguns dos nossos projetos mais relevantes e bem-sucedidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="w-full py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="outline" className="rounded-full">
              Todos
            </Button>
            <Button variant="outline" className="rounded-full">
              Estrutural
            </Button>
            <Button variant="outline" className="rounded-full">
              Civil
            </Button>
            <Button variant="outline" className="rounded-full">
              Infraestrutura
            </Button>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetos.map((projeto) => (
              <Card key={projeto.id} className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-[250px] w-full overflow-hidden">
                  <Image
                    src={projeto.image || "/placeholder.svg"}
                    alt={projeto.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    {projeto.categoria}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{projeto.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{projeto.description}</CardDescription>
                </CardContent>
                
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vamos Trabalhar Juntos?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Entre em contato conosco para discutir seu próximo projeto e como podemos ajudar a torná-lo realidade.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contato">
                <Button variant="secondary" size="lg">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
