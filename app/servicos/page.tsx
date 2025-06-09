import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, HardHat, Ruler, FileCheck, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicosPage() {
  const servicos = [
    {
      id: "estrutural",
      icon: <Building2 className="h-10 w-10" />,
      title: "Projetos Estruturais",
      description:
        "Desenvolvimento de projetos estruturais para edificações residenciais, comerciais e industriais, garantindo segurança e eficiência.",
      detalhes:
        "Nossos projetos estruturais são desenvolvidos com as mais avançadas ferramentas de modelagem e cálculo, garantindo soluções otimizadas e seguras. Trabalhamos com diversos materiais, como concreto armado, concreto protendido, estruturas metálicas e estruturas mistas.",
      imagem: "/projeto-estrutural.jpeg",
    },
    {
      id: "civil",
      icon: <Ruler className="h-10 w-10" />,
      title: "Engenharia Civil",
      description:
        "Planejamento, execução e supervisão de obras civis, desde a fundação até o acabamento, com foco na qualidade e cumprimento de prazos.",
      detalhes:
        "Oferecemos serviços completos de engenharia civil, incluindo planejamento, orçamento, cronograma, gerenciamento e fiscalização de obras. Nossa equipe acompanha todas as etapas do processo construtivo, garantindo a qualidade e o cumprimento dos prazos.",
      imagem: "/engenharia-civil.jpeg",
    },
    {
      id: "infraestrutura",
      icon: <HardHat className="h-10 w-10" />,
      title: "Infraestrutura",
      description:
        "Projetos de infraestrutura urbana, incluindo sistemas de drenagem, pavimentação, redes de água e esgoto.",
      detalhes:
        "Desenvolvemos projetos de infraestrutura urbana e rural, incluindo sistemas de drenagem, pavimentação, redes de água e esgoto, contenções, terraplanagem e obras de arte especiais. Nossos projetos são elaborados com foco na sustentabilidade e na otimização de recursos.",
      imagem: "/infraestrutura.jpeg",
    },
    {
      id: "consultoria",
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Consultoria",
      description:
        "Consultoria técnica especializada em engenharia civil, estrutural e infraestrutura, oferecendo soluções para problemas complexos.",
      detalhes:
        "Nossa consultoria técnica oferece soluções para problemas complexos em engenharia civil, estrutural e infraestrutura. Realizamos análises, diagnósticos e recomendações para otimização de projetos, redução de custos e melhoria de desempenho.",
      imagem: "/consultoria.jpeg",
    },
    {
      id: "laudo",
      icon: <FileCheck className="h-10 w-10" />,
      title: "Laudos Técnicos",
      description:
        "Elaboração de laudos técnicos para avaliação de estruturas, patologias construtivas e conformidade com normas técnicas.",
      detalhes:
        "Elaboramos laudos técnicos para avaliação de estruturas, identificação de patologias construtivas e verificação de conformidade com normas técnicas. Nossos laudos são detalhados e fundamentados em análises criteriosas, oferecendo recomendações precisas para solução dos problemas identificados.",
      imagem: "/laudo-tecnico.jpeg",
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
                Nossos Serviços
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Soluções completas em engenharia para transformar seus projetos em realidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      {servicos.map((servico, index) => (
        <section
          key={servico.id}
          id={servico.id}
          className={`w-full py-12 md:py-24 lg:py-32 ${index % 2 === 1 ? "bg-muted/50" : ""}`}
        >
          <div className="container px-4 md:px-6">
            <div
              className={`grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-row-dense" : ""}`}
            >
              <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Serviço Especializado
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-primary">{servico.icon}</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{servico.title}</h2>
                </div>
                <p className="text-muted-foreground md:text-xl">{servico.description}</p>
                <p className="text-muted-foreground">{servico.detalhes}</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link href="/contato">
                    <Button>
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-[400px] overflow-hidden rounded-xl">
                <Image src={servico.imagem || "/placeholder.svg"} alt={servico.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Projetos Realizados */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Portfólio
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projetos Realizados</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Conheça alguns dos nossos projetos mais recentes e bem-sucedidos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/projeto1.jpg"
                  alt="Edifício Residencial Horizonte"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Mezanino Industrial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Projeto estrutural e detalhamento técnico completo para o mezanino. Utilizamos concreto de alto desempenho e técnicas avançadas de dimensionamento.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/projeto2.jpg"
                  alt="Ponte Rodoviária Rio Verde"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Galpão para Armazenamento e Manutenção de Aviões</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Projeto estrutural, detalhamento técnico, acompanhamento e execução. Estrutura de
                  aço, com capacidade para suportar tráfego pesado e resistência a eventos climáticos
                  extremos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/projeto3.jpg"
                  alt="Stand de Vendas"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Stand de Vendas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Projeto estrutural e detalhamento técnico. Soluções inovadoras para
                  grandes vãos e integração com sistemas de climatização e combate a incêndio.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/projeto4.jpg"
                  alt="Sistema de Drenagem Urbana"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Ponte Metálica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Projeto ponte metálica para passagem de duto, um sistema de drenagem urbana com histórico de alagamentos. Implementação de
                  soluções sustentáveis como jardins de chuva e pavimentos permeáveis, reduzindo em 90% os problemas de
                  alagamento.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/projeto5.jpg"
                  alt="Reforma e Ampliação de Hospital"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Estrutura Laje</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                Projeto de laje treliçada com vigotas pré-moldadas de concreto, dispostas paralelamente e apoiadas em vigas metálicas, garantindo a distribuição uniforme das cargas e a estabilidade estrutural.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/projeto6.jpg"
                  alt="Estação de Tratamento de Água"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Prédio Residencial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                Projeto arquitetônico de edifício residencial multifamiliar de três pavimentos, com estrutura em concreto armado, pilotis para vagas de garagem no térreo, fachada com sacadas em perfil metálico e acesso controlado por portão frontal.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/galeria">
              <Button variant="outline" size="lg">
                Ver Galeria Completa
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para Iniciar seu Projeto?
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
