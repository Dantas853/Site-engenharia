import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogPreviewProps {
  title: string
  excerpt: string
  date: string
  slug: string
  image?: string
}

export function BlogPreview({
  title,
  excerpt,
  date,
  slug,
  image = "/blog.jpeg",
}: BlogPreviewProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg border-none custom-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/blog.jpeg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center text-sm text-muted-foreground mb-1">
          <Calendar className="h-4 w-4 mr-1" />
          {date}
        </div>
        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base line-clamp-3">{excerpt}</CardDescription>
      </CardContent>
    </Card>
  )
}
