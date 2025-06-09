import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validação básica dos campos obrigatórios
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Nome, e-mail e mensagem são campos obrigatórios" }, { status: 400 })
    }

    // Validação de e-mail básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 })
    }

    // Configurar o transporter do Nodemailer para Locaweb
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Para evitar problemas com certificados
      },
    })

    // Verificar conexão SMTP
    await transporter.verify()

    // Configurar o e-mail
    const mailOptions = {
      from: `"Site Empresa" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nova solicitação de orçamento - ${service || "Serviço não especificado"}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Nova Solicitação de Orçamento</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f8f9fa; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2563eb; }
            .value { margin-top: 5px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nova Solicitação de Orçamento</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nome:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">E-mail:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Telefone:</div>
                <div class="value">${phone || "Não informado"}</div>
              </div>
              <div class="field">
                <div class="label">Serviço de Interesse:</div>
                <div class="value">${service || "Não especificado"}</div>
              </div>
              <div class="field">
                <div class="label">Mensagem:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>Esta mensagem foi enviada através do formulário de contato do site.</p>
              <p>Data: ${new Date().toLocaleString("pt-BR")}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Nova Solicitação de Orçamento
        
        Nome: ${name}
        E-mail: ${email}
        Telefone: ${phone || "Não informado"}
        Serviço: ${service || "Não especificado"}
        
        Mensagem:
        ${message}
        
        Data: ${new Date().toLocaleString("pt-BR")}
      `,
      // E-mail de resposta para o cliente
      replyTo: email,
    }

    // Enviar o e-mail
    const info = await transporter.sendMail(mailOptions)

    console.log("E-mail enviado com sucesso:", info.messageId)
    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    })
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return NextResponse.json({ error: "Erro ao enviar e-mail. Tente novamente." }, { status: 500 })
  }
}
