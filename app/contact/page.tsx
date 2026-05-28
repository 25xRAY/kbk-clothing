'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-kbk-black pt-16 flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <div className="text-kbk-gold text-6xl mb-6" aria-hidden="true">♛</div>
            <h1 className="font-display font-bold text-4xl text-white mb-4">Message Sent</h1>
            <p className="font-body text-gray-400 text-lg mb-8 leading-relaxed">
              Thanks for reaching out. We respond within 24 hours.
            </p>
            <Link
              href="/"
              className="border border-kbk-gold text-kbk-gold font-display font-bold px-8 py-4 hover:bg-kbk-gold hover:text-kbk-black transition-all"
            >
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-kbk-black pt-16">
        {/* Page Header */}
        <header className="py-16 px-6 text-center border-b border-kbk-gold/10">
          <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">Get in Touch</span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mt-3 mb-4">
            Contact
          </h1>
          <p className="font-body text-gray-400 max-w-md mx-auto">
            Questions about an order, a custom piece, or just want to connect?
            We respond within 24 hours.
          </p>
        </header>

        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <aside>
            <h2 className="font-display font-bold text-2xl text-white mb-8">Find Us Here</h2>

            <div className="space-y-8 mb-12">
              <div>
                <p className="font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">Response Time</p>
                <p className="font-body text-white">We respond within 24 hours</p>
                <p className="font-body text-gray-400 text-sm mt-1">Mon–Sat, 9 AM – 7 PM EST</p>
              </div>
              <div>
                <p className="font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">For Custom Orders</p>
                <p className="font-body text-gray-300 text-sm leading-relaxed">
                  For custom piece requests, use the{' '}
                  <a href="/custom-order" className="text-kbk-gold hover:underline">Custom Order page</a>
                  {' '}for the best experience.
                </p>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs text-kbk-muted uppercase tracking-wider mb-4">Social</p>
              <div className="flex flex-col gap-3">
                {[
                  { platform: 'Instagram', handle: '@kbkclothing' },
                  { platform: 'TikTok', handle: '@kbkclothing' },
                  { platform: 'Pinterest', handle: 'KBK Clothing' },
                ].map(({ platform, handle }) => (
                  <a
                    key={platform}
                    href="#"
                    aria-label={`KBK Clothing on ${platform} — ${handle}`}
                    className="flex items-center gap-3 group min-h-[44px]"
                  >
                    <span className="font-mono text-xs text-kbk-muted uppercase tracking-wider group-hover:text-kbk-gold transition-colors w-20">
                      {platform}
                    </span>
                    <span className="font-body text-gray-300 group-hover:text-kbk-gold transition-colors">
                      {handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <section aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="font-display font-bold text-2xl text-white mb-8">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    aria-label="Your name"
                    className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600 min-h-[44px]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    aria-label="Your email address"
                    className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600 min-h-[44px]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-label="Message subject"
                  className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold min-h-[44px]"
                >
                  <option value="">Select a subject</option>
                  <option value="order-question">Order Question</option>
                  <option value="custom-inquiry">Custom Piece Inquiry</option>
                  <option value="shipping">Shipping & Delivery</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="wholesale">Wholesale / Collab</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  aria-label="Your message"
                  className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600 resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                aria-label="Send message"
                className="w-full bg-kbk-gold text-kbk-black font-display font-bold py-4 text-lg hover:bg-yellow-300 transition-colors tracking-wide disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px]"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              <p className="font-mono text-xs text-kbk-muted text-center">
                We respond within 24 hours.
              </p>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
