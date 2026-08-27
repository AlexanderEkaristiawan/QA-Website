import nodemailer from 'nodemailer'

interface EmailPayload {
  to: string
  subject: string
  text: string
  html?: string
}

let transporter: nodemailer.Transporter | null = null

function getSmtpConfig() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = Number(process.env.SMTP_PORT || '465')
  const secure = (process.env.SMTP_SECURE || (port === 465 ? 'true' : 'false')) === 'true'
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.SMTP_FROM || user

  return { host, port, secure, user, pass, from }
}

export function isEmailNotificationEnabled(): boolean {
  const cfg = getSmtpConfig()
  return Boolean(cfg.user && cfg.pass && cfg.from)
}

function getTransporter(): nodemailer.Transporter {
  if (transporter) return transporter

  const cfg = getSmtpConfig()
  if (!cfg.user || !cfg.pass) {
    throw new Error('SMTP credentials are missing. Set SMTP_USER and SMTP_PASS.')
  }

  transporter = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: {
      user: cfg.user,
      pass: cfg.pass,
    },
  })

  return transporter
}

export async function sendEmailNotification(payload: EmailPayload): Promise<void> {
  const cfg = getSmtpConfig()
  if (!cfg.from) throw new Error('SMTP_FROM is not configured and SMTP_USER is unavailable.')

  const tx = getTransporter()
  await tx.sendMail({
    from: cfg.from,
    to: payload.to,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
  })
}
