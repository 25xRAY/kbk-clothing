import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address'),
  size: z.string().min(1, 'Size is required'),
  technique: z.string().min(1, 'Technique preference is required'),
  colorPreference: z.string().optional(),
  budgetMin: z.union([z.string(), z.number()]).transform((v) => Number(v)),
  budgetMax: z.union([z.string(), z.number()]).transform((v) => Number(v)),
  timeline: z.string().min(1, 'Timeline is required'),
  notes: z.string().optional(),
})

function generateOrderRef(): string {
  const ts = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `KBK-${ts}-${rand}`
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 422 })
  }

  const data = result.data
  const orderRef = generateOrderRef()

  console.log(`[custom-order] New request — Ref: ${orderRef}`)
  console.log(`[custom-order] From: ${data.name} <${data.email}>`)
  console.log(`[custom-order] Size: ${data.size} | Technique: ${data.technique} | Timeline: ${data.timeline}`)
  console.log(`[custom-order] Budget: $${data.budgetMin}–$${data.budgetMax}`)

  const resendApiKey = process.env.RESEND_API_KEY
  if (resendApiKey) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(resendApiKey)

      await resend.emails.send({
        from: 'KBK Clothing <orders@kbkclothing.com>',
        to: data.email,
        subject: `Custom Order Request Received — ${orderRef}`,
        html: `
          <div style="background:#0A0A14;color:#E8ECF2;font-family:sans-serif;padding:32px;max-width:600px;margin:0 auto;">
            <h1 style="color:#FFCC00;font-size:28px;margin-bottom:8px;">KBK Clothing</h1>
            <p style="color:#FFCC00;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin-bottom:32px;">Wear the Crown.™</p>
            <h2 style="color:#ffffff;font-size:20px;margin-bottom:16px;">Your Custom Order Request Was Received</h2>
            <p style="color:#cccccc;margin-bottom:8px;">Reference: <strong style="color:#FFCC00">${orderRef}</strong></p>
            <p style="color:#cccccc;margin-bottom:24px;">
              We'll reach out within 24 hours to discuss your piece and next steps.
              A 50% deposit will be required to begin production.
            </p>
            <p style="color:#cccccc;font-size:14px;">— Carlton, KBK Clothing</p>
          </div>
        `,
      })
    } catch (err) {
      console.error('[custom-order] Email send failed:', err)
    }
  }

  return NextResponse.json(
    { success: true, orderRef, message: 'Custom order request received' },
    { status: 201 }
  )
}
