import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nossa História
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Conheça a trajetória da Persan Engenharia e nossa missão de transformar o setor de engenharia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Nossa Jornada
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">De 1985 até hoje</h2>
              <p className="text-muted-foreground md:text-xl">
                A Persan Engenharia foi fundada em 1985 pelo engenheiro Ademir, visionário que acreditava que a
                engenharia poderia ser mais inovadora, sustentável e centrada no cliente.
              </p>
              <p className="text-muted-foreground">
                Começamos como uma pequena consultoria especializada em projetos estruturais e, ao longo dos anos,
                expandimos nossos serviços para abranger todas as áreas da engenharia civil e infraestrutura.
              </p>
              <p className="text-muted-foreground">
                Hoje, somos reconhecidos como líderes no setor, com uma equipe multidisciplinar de profissionais
                altamente qualificados e um portfólio diversificado de projetos bem-sucedidos em todo o país.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/logo-persan.jpg"
                alt="História da empresa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Missão, Visão e Valores</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Os princípios que norteiam nosso trabalho e definem quem somos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Oferecer soluções de engenharia inovadoras e sustentáveis que superem as expectativas dos nossos
                  clientes, contribuindo para o desenvolvimento da infraestrutura e para a melhoria da qualidade de vida
                  das pessoas.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ser reconhecida como referência nacional em engenharia, destacando-se pela excelência técnica,
                  inovação e compromisso com a sustentabilidade em todos os projetos que realizamos.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <ul className="space-y-2">
                    <li>• Excelência técnica</li>
                    <li>• Ética e transparência</li>
                    <li>• Inovação constante</li>
                    <li>• Sustentabilidade</li>
                    <li>• Compromisso com o cliente</li>
                    <li>• Valorização das pessoas</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Diferenciais */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Diferenciais</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                O que nos torna únicos no mercado de engenharia.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center gap-4">
                <Award className="h-8 w-8 text-primary" />
                <CardTitle>Excelência Técnica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Nossa equipe é formada por profissionais altamente qualificados, com formação acadêmica sólida e
                  experiência prática em projetos de diversos portes e complexidades.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle>Atendimento Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Entendemos que cada projeto é único e requer soluções específicas. Por isso, oferecemos um atendimento
                  personalizado, com foco nas necessidades e objetivos de cada cliente.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center gap-4">
                <Clock className="h-8 w-8 text-primary" />
                <CardTitle>Cumprimento de Prazos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sabemos a importância do tempo em projetos de engenharia. Por isso, temos um compromisso rigoroso com
                  o cumprimento dos prazos estabelecidos, sem comprometer a qualidade.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para Transformar seu Projeto em Realidade?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Entre em contato conosco e descubra como podemos ajudar a concretizar sua visão.
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
