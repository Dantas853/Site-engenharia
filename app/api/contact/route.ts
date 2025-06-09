import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"


console.log("Todas as variáveis de ambiente:", Object.keys(process.env).filter(key => key.startsWith('SMTP') || key === 'CONTACT_EMAIL'))

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

    // Verificar se as variáveis de ambiente estão configuradas
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Variáveis de ambiente SMTP não configuradas")
      return NextResponse.json({ error: "Configuração de e-mail não encontrada" }, { status: 500 })
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
    try {
      await transporter.verify()
      console.log("Conexão SMTP verificada com sucesso")
    } catch (verifyError) {
      console.error("Erro na verificação SMTP:", verifyError)
      return NextResponse.json({ error: "Erro na configuração do servidor de e-mail" }, { status: 500 })
    }

    // Configurar o e-mail principal (para a empresa)
    const mailOptions = {
      from: `"Site da Empresa" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nova solicitação de orçamento - ${service || "Serviço não especificado"}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Nova Solicitação de Orçamento</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0; 
              padding: 0; 
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background-color: #ffffff; 
            }
            .header { 
              background-color: #2563eb; 
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
            }
            .header h1 { 
              margin: 0; 
              font-size: 24px; 
            }
            .content { 
              padding: 30px 20px; 
              background-color: #f8f9fa; 
            }
            .field { 
              margin-bottom: 20px; 
              background-color: white; 
              padding: 15px; 
              border-radius: 5px; 
              border-left: 4px solid #2563eb; 
            }
            .label { 
              font-weight: bold; 
              color: #2563eb; 
              font-size: 14px; 
              text-transform: uppercase; 
              margin-bottom: 5px; 
            }
            .value { 
              color: #333; 
              font-size: 16px; 
              word-wrap: break-word; 
            }
            .footer { 
              text-align: center; 
              padding: 20px; 
              color: #666; 
              font-size: 12px; 
              background-color: #f1f1f1; 
            }
            .highlight { 
              background-color: #fff3cd; 
              padding: 10px; 
              border-radius: 5px; 
              margin: 10px 0; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏗️ Nova Solicitação de Orçamento</h1>
            </div>
            <div class="content">
              <div class="highlight">
                <strong>Uma nova solicitação de orçamento foi recebida através do site!</strong>
              </div>
              
              <div class="field">
                <div class="label">👤 Nome Completo</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 E-mail de Contato</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">📱 Telefone</div>
                <div class="value">${phone || "Não informado"}</div>
              </div>
              
              <div class="field">
                <div class="label">🔧 Serviço de Interesse</div>
                <div class="value">${service || "Não especificado"}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Mensagem</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p><strong>Esta mensagem foi enviada através do formulário de contato do site.</strong></p>
              <p>📅 Data e hora: ${new Date().toLocaleString("pt-BR", {
                timeZone: "America/Sao_Paulo",
              })}</p>
              <p>💡 Responda diretamente para o e-mail do cliente: ${email}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        NOVA SOLICITAÇÃO DE ORÇAMENTO
        =============================
        
        Nome: ${name}
        E-mail: ${email}
        Telefone: ${phone || "Não informado"}
        Serviço: ${service || "Não especificado"}
        
        Mensagem:
        ${message}
        
        =============================
        Data: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
        Enviado através do formulário de contato do site.
      `,
      replyTo: email, // Permite responder diretamente para o cliente
    }

    // Configurar e-mail de confirmação para o cliente
    const clientMailOptions = {
      from: `"Engenharia - Confirmação" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Confirmação: Sua mensagem foi recebida!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Confirmação de Recebimento</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0; 
              padding: 0; 
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background-color: #ffffff; 
            }
            .header { 
              background-color: #28a745; 
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
            }
            .content { 
              padding: 30px 20px; 
            }
            .footer { 
              text-align: center; 
              padding: 20px; 
              color: #666; 
              font-size: 12px; 
              background-color: #f1f1f1; 
            }
            .highlight { 
              background-color: #d4edda; 
              padding: 15px; 
              border-radius: 5px; 
              margin: 20px 0; 
              border-left: 4px solid #28a745; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Mensagem Recebida!</h1>
            </div>
            <div class="content">
              <p>Olá <strong>${name}</strong>,</p>
              
              <div class="highlight">
                <p><strong>Sua mensagem foi recebida com sucesso!</strong></p>
              </div>
              
              <p>Agradecemos seu interesse em nossos serviços de engenharia. Nossa equipe analisará sua solicitação e retornará o contato em breve.</p>
              
              <p><strong>Resumo da sua solicitação:</strong></p>
              <ul>
                <li><strong>Serviço:</strong> ${service || "Não especificado"}</li>
                <li><strong>Data:</strong> ${new Date().toLocaleString("pt-BR", {
                  timeZone: "America/Sao_Paulo",
                })}</li>
              </ul>
              
              <p>Se você tiver alguma dúvida urgente, entre em contato conosco:</p>
              <ul>
                <li>📧 E-mail: ${process.env.CONTACT_EMAIL}</li>
                <li>📱 WhatsApp: (11) 99999-8888</li>
              </ul>
              
              <p>Atenciosamente,<br>
              <strong>Equipe de Engenharia</strong></p>
            </div>
            <div class="footer">
              <p>Esta é uma mensagem automática de confirmação.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Enviar o e-mail principal
    const info = await transporter.sendMail(mailOptions)
    console.log("E-mail principal enviado:", info.messageId)

    // Enviar e-mail de confirmação para o cliente
    try {
      const clientInfo = await transporter.sendMail(clientMailOptions)
      console.log("E-mail de confirmação enviado:", clientInfo.messageId)
    } catch (clientError) {
      console.error("Erro ao enviar e-mail de confirmação:", clientError)
      // Não falha a operação se o e-mail de confirmação não for enviado
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    })
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return NextResponse.json(
      {
        error: "Erro ao enviar e-mail. Verifique sua conexão e tente novamente.",
      },
      { status: 500 },
    )
  }
}
