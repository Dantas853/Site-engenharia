"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle, AlertCircle, Mail, Phone, MapPin } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  // Opções de serviços
  const serviceOptions = [
    "Engenharia Estrutural",
    "Infraestrutura Urbana",
    "Consultoria Técnica",
    "Projetos Residenciais",
    "Projetos Industriais",
    "Gerenciamento de Obras",
    "Outro",
  ]

  // Função para atualizar o estado do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Função para lidar com a seleção de serviço
  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  // Função para validar o formulário
  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Nome é obrigatório")
      return false
    }
    if (!formData.email.trim()) {
      setError("E-mail é obrigatório")
      return false
    }
    if (!formData.message.trim()) {
      setError("Mensagem é obrigatória")
      return false
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("E-mail inválido")
      return false
    }

    return true
  }

  // Função para enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validar formulário antes de enviar
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar formulário")
      }

      // Limpar formulário após envio bem-sucedido
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      setIsSuccess(true)

      // Resetar mensagem de sucesso após 8 segundos
      setTimeout(() => {
        setIsSuccess(false)
      }, 8000)
    } catch (err) {
      console.error("Erro ao enviar formulário:", err)
      setError(
        err instanceof Error ? err.message : "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Informações de contato rápido */}
      <div className="bg-slate-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-slate-800">Contato Direto</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <Mail className="h-4 w-4 text-primary mr-2" />
            <span>contato@empresa.com.br</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-primary mr-2" />
            <span>(11) 3456-7890</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-primary mr-2" />
            <span>São Paulo - SP</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome Completo *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
            required
            disabled={isSubmitting}
            className="transition-all focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              required
              disabled={isSubmitting}
              className="transition-all focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
              disabled={isSubmitting}
              className="transition-all focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Serviço de Interesse</Label>
          <Select value={formData.service} onValueChange={handleServiceChange} disabled={isSubmitting}>
            <SelectTrigger id="service" className="transition-all focus:ring-2 focus:ring-primary">
              <SelectValue placeholder="Selecione um serviço" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensagem *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Descreva seu projeto, necessidades específicas, prazo desejado, localização da obra, etc."
            rows={6}
            required
            disabled={isSubmitting}
            className="transition-all focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Mensagem de erro */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-md text-sm flex items-start">
            <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Erro:</strong> {error}
            </div>
          </div>
        )}

        {/* Mensagem de sucesso */}
        {isSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-600 p-4 rounded-md text-sm">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Sucesso!</strong> Sua mensagem foi enviada com sucesso!
                <p className="mt-2 text-green-700">
                  Você receberá um e-mail de confirmação em breve. Nossa equipe analisará sua solicitação e retornará o
                  contato dentro de 24 horas.
                </p>
              </div>
            </div>
          </div>
        )}

        <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Enviando mensagem...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-5 w-5" />
              Enviar Mensagem
            </>
          )}
        </Button>

        <div className="text-center">
          <p className="text-sm text-slate-500">* Campos obrigatórios</p>
          <p className="text-xs text-slate-400 mt-2">
            Ao enviar este formulário, você concorda com nossa política de privacidade e autoriza o contato para
            resposta à sua solicitação.
          </p>
        </div>
      </form>
    </div>
  )
}
