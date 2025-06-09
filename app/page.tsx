import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building2, HardHat, Ruler, Zap, CheckCircle2, Award, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ClientLogos } from "@/components/client-logos"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { BlogPreview } from "@/components/blog-preview"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Sobre Nós Resumo */}
      <section id="sobre-resumo" className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-medium text-primary">Quem Somos</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gradient">
                  Excelência em Engenharia desde 1985
                </h2>
                <div className="section-divider"></div>
              </div>
              <p className="text-muted-foreground text-lg">
                Somos uma equipe de engenheiros especializados comprometidos com a excelência e inovação em cada
                projeto. Nossa missão é transformar ideias em estruturas sólidas e sustentáveis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-base">Projetos Inovadores</h3>
                    <p className="text-sm text-muted-foreground">Soluções criativas para desafios complexos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-base">Equipe Qualificada</h3>
                    <p className="text-sm text-muted-foreground">Profissionais com ampla experiência</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-base">Compromisso com Prazos</h3>
                    <p className="text-sm text-muted-foreground">Entrega pontual de todos os projetos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-base">Sustentabilidade</h3>
                    <p className="text-sm text-muted-foreground">Projetos com responsabilidade ambiental</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/sobre">
                  <Button className="bg-primary hover:bg-secondary text-white">
                    Conheça Nossa História
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/estrutura2.png"
                  alt="Equipe de engenharia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg max-w-[250px]">
                <div className="text-3xl font-bold mb-2">40+</div>
                <p className="text-sm font-medium">Anos de experiência em projetos de engenharia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="w-full py-16 gradient-bg text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">900+</div>
              <p className="text-sm font-medium text-white/80">Projetos Concluídos</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">123+</div>
              <p className="text-sm font-medium text-white/80">Clientes Satisfeitos</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">30+</div>
              <p className="text-sm font-medium text-white/80">Profissionais Especializados</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">40+</div>
              <p className="text-sm font-medium text-white/80">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="text-sm font-medium text-primary">Nossos Serviços</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gradient">
                Soluções Completas em Engenharia
              </h2>
              <div className="section-divider mx-auto"></div>
              <p className="max-w-[900px] text-muted-foreground text-lg">
                Oferecemos uma ampla gama de serviços especializados para atender às suas necessidades de projeto e
                construção.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ServiceCard
              icon={<Building2 className="h-10 w-10" />}
              title="Projetos Estruturais"
              description="Desenvolvimento de projetos estruturais para edificações residenciais, comerciais e industriais, garantindo segurança e eficiência."
            />
            <ServiceCard
              icon={<Ruler className="h-10 w-10" />}
              title="Engenharia Civil"
              description="Planejamento, execução e supervisão de obras civis, desde a fundação até o acabamento, com foco na qualidade e cumprimento de prazos."
            />
            <ServiceCard
              icon={<HardHat className="h-10 w-10" />}
              title="Infraestrutura"
              description="Projetos de infraestrutura urbana, incluindo sistemas de drenagem, pavimentação, redes de água e esgoto."
            />
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/servicos">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/nossos-diferenciais.jpeg"
                  alt="Qualidade em engenharia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-[250px] border-l-4 border-primary">
                <div className="text-xl font-bold mb-2 text-primary">100%</div>
                <p className="text-sm font-medium">Satisfação garantida em todos os projetos</p>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <div className="text-sm font-medium text-primary">Por Que Nos Escolher</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gradient">
                  Nossos Diferenciais
                </h2>
                <div className="section-divider"></div>
              </div>
              <p className="text-muted-foreground text-lg">
                Combinamos experiência técnica, inovação e compromisso com a qualidade para entregar projetos que
                superam as expectativas dos nossos clientes.
              </p>
              <div className="space-y-6 mt-6">
                <div className="flex items-start gap-4">
                  <div className="number-badge">1</div>
                  <div>
                    <h3 className="text-xl font-bold">Excelência Técnica</h3>
                    <p className="text-muted-foreground">
                      Nossa equipe é formada por profissionais altamente qualificados, com formação acadêmica sólida e
                      experiência prática em projetos de diversos portes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="number-badge">2</div>
                  <div>
                    <h3 className="text-xl font-bold">Atendimento Personalizado</h3>
                    <p className="text-muted-foreground">
                      Entendemos que cada projeto é único e requer soluções específicas. Por isso, oferecemos um
                      atendimento personalizado, com foco nas necessidades de cada cliente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="number-badge">3</div>
                  <div>
                    <h3 className="text-xl font-bold">Tecnologia Avançada</h3>
                    <p className="text-muted-foreground">
                      Utilizamos as mais modernas ferramentas e softwares para garantir precisão, eficiência e qualidade
                      em todos os nossos projetos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orçamento */}
      <section id="orcamento" className="w-full py-16 md:py-24 lg:py-32 gradient-bg text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Solicite um Orçamento</h2>
              <div className="w-20 h-1 bg-white/30 mx-auto"></div>
              <p className="max-w-[600px] text-white/80 text-lg">
                Entre em contato conosco para discutir seu projeto e receber um orçamento personalizado.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <Award className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Qualidade Garantida</h3>
                <p className="text-sm text-white/80">Projetos desenvolvidos com os mais altos padrões de qualidade</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <Clock className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Prazos Respeitados</h3>
                <p className="text-sm text-white/80">Compromisso com o cumprimento dos prazos estabelecidos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <Users className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Equipe Especializada</h3>
                <p className="text-sm text-white/80">
                  Profissionais com ampla experiência em diversos tipos de projetos
                </p>
              </div>
            </div>
            <div className="w-full max-w-sm space-y-2 mt-8">
              <Link href="/contato">
                <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-medium">
                  Solicitar Agora
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="text-sm font-medium text-primary">Blog</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gradient">
                Últimas Notícias
              </h2>
              <div className="section-divider mx-auto"></div>
              <p className="max-w-[900px] text-muted-foreground text-lg">
                Fique por dentro das novidades e tendências do setor de engenharia.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <BlogPreview
              title="Inovações em Materiais Sustentáveis para Construção"
              excerpt="Conheça os novos materiais sustentáveis que estão revolucionando o setor da construção civil."
              date="12 Abr 2025"
              slug="inovacoes-materiais-sustentaveis"
              image="/blog.jpeg"
            />
            <BlogPreview
              title="Como a Tecnologia BIM Está Transformando Projetos Estruturais"
              excerpt="Descubra como a modelagem de informação da construção está mudando a forma como projetamos estruturas."
              date="05 Abr 2025"
              slug="tecnologia-bim-projetos-estruturais"
              image="/blog1.jpeg"
            />
            <BlogPreview
              title="Desafios e Soluções para Infraestrutura Urbana"
              excerpt="Análise dos principais desafios enfrentados no desenvolvimento de infraestrutura urbana e possíveis soluções."
              date="28 Mar 2025"
              slug="desafios-solucoes-infraestrutura-urbana"
              image="/blog2.jpeg"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/blog">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Ver Todas as Publicações
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="text-sm font-medium text-primary">Nossos Clientes</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gradient">
                Quem Confia em Nosso Trabalho
              </h2>
              <div className="section-divider mx-auto"></div>
              <p className="max-w-[900px] text-muted-foreground text-lg">
                Empresas e organizações que escolheram nossa expertise para seus projetos.
              </p>
            </div>
          </div>
          <ClientLogos />
        </div>
      </section>

      <WhatsAppButton phoneNumber="5515997050131" />
    </div>
  )
}
