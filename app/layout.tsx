import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KBK Clothing | Wear the Crown.™',
  description: 'Handcrafted streetwear and wearable art. One-of-a-kind pieces. Street credibility meets artisan craftsmanship. KBK Clothing — Wear the Crown.™',
  keywords: 'KBK clothing, handmade streetwear, wearable art, custom clothing, bleach art, hand painted, one of a kind, graffiti fashion',
  openGraph: {
    title: 'KBK Clothing | Wear the Crown.™',
    description: 'Handcrafted streetwear. One-of-a-kind wearable art.',
    siteName: 'KBK Clothing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KBK Clothing | Wear the Crown.™',
    description: 'Handcrafted streetwear. One-of-a-kind wearable art.',
  },
  robots: 'index, follow',
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KBK Clothing',
  description: 'Handcrafted streetwear and wearable art. One-of-a-kind pieces.',
  url: 'https://kbkclothing.com',
  slogan: 'Wear the Crown.',
  foundingDate: '2026',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
