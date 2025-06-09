import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
}

export function ServiceCard({ icon, title, description, link = "/servicos" }: ServiceCardProps) {
  return (
    <Card className="service-card overflow-hidden transition-all hover:shadow-lg bg-white">
      <CardHeader className="pb-4">
        <div className="text-primary mb-3">{icon}</div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={link}>
          <Button variant="ghost" size="sm" className="text-primary p-0 hover:bg-transparent hover:text-secondary">
            Saiba mais
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
