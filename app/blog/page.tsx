import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  const posts = [
    {
      title: "Inovações em Materiais Sustentáveis para Construção",
      excerpt:
        "Conheça os novos materiais sustentáveis que estão revolucionando o setor da construção civil e como eles podem ser aplicados em seus projetos para reduzir o impacto ambiental e melhorar a eficiência energética.",
      date: "12 Abr 2025",
      slug: "inovacoes-materiais-sustentaveis",
      image: "/blog.jpeg",
    },
    {
      title: "Como a Tecnologia BIM Está Transformando Projetos Estruturais",
      excerpt:
        "Descubra como a modelagem de informação da construção (BIM) está mudando a forma como projetamos estruturas, permitindo maior precisão, colaboração e eficiência em todas as fases do projeto.",
      date: "05 Abr 2025",
      slug: "tecnologia-bim-projetos-estruturais",
      image: "/blog1.jpeg",
    },
    {
      title: "Desafios e Soluções para Infraestrutura Urbana",
      excerpt:
        "Análise dos principais desafios enfrentados no desenvolvimento de infraestrutura urbana e possíveis soluções para criar cidades mais sustentáveis, resilientes e habitáveis.",
      date: "28 Mar 2025",
      slug: "desafios-solucoes-infraestrutura-urbana",
      image: "/blog2.jpeg",
    },
    {
      title: "A Importância da Análise de Solo em Projetos de Fundação",
      excerpt:
        "Entenda por que a análise de solo é fundamental para o sucesso de projetos de fundação e como ela pode prevenir problemas estruturais futuros e reduzir custos desnecessários.",
      date: "21 Mar 2025",
      slug: "importancia-analise-solo-fundacao",
      image: "/blog3.jpeg",
    },
    {
      title: "Tendências em Projetos Residenciais para 2025",
      excerpt:
        "Conheça as principais tendências em projetos residenciais para 2025, incluindo design, materiais, tecnologias e soluções sustentáveis que estão moldando o futuro da habitação.",
      date: "14 Mar 2025",
      slug: "tendencias-projetos-residenciais-2025",
      image: "/blog4.jpeg",
    },
    {
      title: "Normas Técnicas: Atualizações Importantes para Engenheiros",
      excerpt:
        "Fique por dentro das principais atualizações nas normas técnicas de engenharia e como elas afetam seus projetos, garantindo conformidade e segurança em todas as etapas.",
      date: "07 Mar 2025",
      slug: "normas-tecnicas-atualizacoes-engenheiros",
      image: "/blog5.jpeg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Blog</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Notícias, artigos e insights sobre engenharia civil, estrutural e infraestrutura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.slug} className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground">{post.date}</div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Inscreva-se em Nossa Newsletter</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Receba as últimas notícias e artigos sobre engenharia diretamente em seu e-mail.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit">Inscrever-se</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Ao se inscrever, você concorda com nossa política de privacidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
