import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo e Informações */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-250">
                <Image
                  src="/logo-persan.jpg"
                  alt="Logo Engenharia"
                  width={100}
                  height={100}
                  className="h-12 w-auto"
                />
              </div>
              <span className="font-bold text-xl">Persan Engenharia</span>
            </Link>
            <p className="text-sm text-white/80">
              Soluções completas em engenharia civil, estrutural e infraestrutura para transformar seus projetos em
              realidade.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links Rápidos</h3>
            <div className="w-12 h-0.5 bg-white/30"></div>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm hover:text-white/80 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm hover:text-white/80 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white/80 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-sm hover:text-white/80 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm hover:text-white/80 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Nossos Serviços</h3>
            <div className="w-12 h-0.5 bg-white/30"></div>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos#estrutural" className="text-sm hover:text-white/80 transition-colors">
                  Projetos Estruturais
                </Link>
              </li>
              <li>
                <Link href="/servicos#civil" className="text-sm hover:text-white/80 transition-colors">
                  Engenharia Civil
                </Link>
              </li>
              <li>
                <Link href="/servicos#infraestrutura" className="text-sm hover:text-white/80 transition-colors">
                  Infraestrutura
                </Link>
              </li>
              <li>
                <Link href="/servicos#consultoria" className="text-sm hover:text-white/80 transition-colors">
                  Consultoria
                </Link>
              </li>
              <li>
                <Link href="/servicos#laudo" className="text-sm hover:text-white/80 transition-colors">
                  Laudos Técnicos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
            <div className="w-12 h-0.5 bg-white/30"></div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">Sorocaba - SP</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm text-white/80">(15) 9 9705 - 0131</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm text-white/80">contato@persanengenharia.com.br</span>
              </li>
            </ul>
            <Link href="/contato">
              <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6">
          <p className="text-center text-sm text-white/70">
            © {currentYear} Persan Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
