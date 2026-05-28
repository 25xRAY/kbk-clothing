'use client'
import { useState } from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export default function CustomOrderPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    const body = {
      name: data.get('name'),
      email: data.get('email'),
      size: data.get('size'),
      technique: data.get('technique'),
      colorPreference: data.get('colorPreference'),
      budgetMin: data.get('budgetMin'),
      budgetMax: data.get('budgetMax'),
      timeline: data.get('timeline'),
      notes: data.get('notes'),
    }
    try {
      const res = await fetch('/api/custom-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // silent fail — form stays open for retry
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-kbk-black pt-16 flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <div className="text-kbk-gold text-6xl mb-6" aria-hidden="true">♛</div>
            <h1 className="font-display font-bold text-4xl text-white mb-4">Request Received</h1>
            <p className="font-body text-gray-400 text-lg mb-8 leading-relaxed">
              We&apos;ve received your custom order request and will reach out within 24 hours to discuss your piece.
              A 50% deposit will be required to begin production.
            </p>
            <a
              href="/shop"
              className="border border-kbk-gold text-kbk-gold font-display font-bold px-8 py-4 hover:bg-kbk-gold hover:text-kbk-black transition-all"
            >
              Browse the Collection
            </a>
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
          <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">Commission a Piece</span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mt-3 mb-4">
            Custom Order
          </h1>
          <p className="font-body text-gray-400 max-w-lg mx-auto">
            Tell us your vision. We&apos;ll bring it to life — by hand. Every custom piece is
            one-of-a-kind and built to your exact specifications.
          </p>
        </header>

        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Deposit notice */}
          <div className="bg-kbk-gray border border-kbk-gold/20 p-6 mb-12">
            <div className="flex gap-4 items-start">
              <span className="text-kbk-gold text-xl mt-0.5" aria-hidden="true">♛</span>
              <div>
                <p className="font-display font-bold text-white mb-2">50% Deposit Required to Begin</p>
                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  All custom orders require a 50% non-refundable deposit before production begins.
                  The remaining balance is due upon completion. We&apos;ll send a payment link after
                  reviewing your request.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  aria-label="Full name"
                  className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600 min-h-[44px]"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-label="Email address"
                  className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600 min-h-[44px]"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Size */}
            <div>
              <label htmlFor="size" className="block font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">
                Garment Size *
              </label>
              <select
                id="size"
                name="size"
                required
                aria-label="Garment size"
                className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold min-h-[44px]"
              >
                <option value="">Select a size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="XXXL">XXXL</option>
                <option value="custom">Custom / Oversized</option>
              </select>
            </div>

            {/* Technique */}
            <div>
              <label htmlFor="technique" className="block font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">
                Technique Preference *
              </label>
              <select
                id="technique"
                name="technique"
                required
                aria-label="Technique preference"
                className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold min-h-[44px]"
              >
                <option value="">Select a technique</option>
                <option value="bleach-art">Bleach Art</option>
                <option value="hand-painted">Hand Painted</option>
                <option value="acid-wash">Acid Wash</option>
                <option value="stencil-art">Stencil Art</option>
                <option value="embroidered">Embroidered</option>
                <option value="mixed">Mixed / Let KBK Decide</option>
              </select>
            </div>

            {/* Color Preference */}
            <div>
              <label htmlFor="colorPreference" className="block font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">
                Color Preference
              </label>
              <input
                id="colorPreference"
                name="colorPreference"
                type="text"
                aria-label="Color preference"
                className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600 min-h-[44px]"
                placeholder="e.g. Black base, gold accents — or 'surprise me'"
              />
            </div>

            {/* Budget Range */}
            <div>
              <p className="font-mono text-xs text-kbk-muted uppercase tracking-wider mb-3">Budget Range *</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budgetMin" className="block font-mono text-xs text-gray-500 mb-2">Minimum ($)</label>
                  <input
                    id="budgetMin"
                    name="budgetMin"
                    type="number"
                    required
                    min="50"
                    aria-label="Minimum budget in dollars"
                    className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600 min-h-[44px]"
                    placeholder="100"
                  />
                </div>
                <div>
                  <label htmlFor="budgetMax" className="block font-mono text-xs text-gray-500 mb-2">Maximum ($)</label>
                  <input
                    id="budgetMax"
                    name="budgetMax"
                    type="number"
                    required
                    min="50"
                    aria-label="Maximum budget in dollars"
                    className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600 min-h-[44px]"
                    placeholder="300"
                  />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">
                Desired Timeline *
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                aria-label="Desired timeline"
                className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold min-h-[44px]"
              >
                <option value="">Select a timeline</option>
                <option value="1-2-weeks">1–2 weeks (rush, +20%)</option>
                <option value="3-4-weeks">3–4 weeks (standard)</option>
                <option value="5-6-weeks">5–6 weeks (flexible)</option>
                <option value="no-rush">No rush — whenever it&apos;s ready</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block font-mono text-xs text-kbk-muted uppercase tracking-wider mb-2">
                Vision & Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={6}
                aria-label="Vision and notes for your custom piece"
                className="w-full bg-kbk-gray border border-white/10 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600 resize-none"
                placeholder="Describe your vision. Reference images, inspiration, specific design elements, garment type (tee, hoodie, jacket), and anything else that matters to you."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              aria-label="Submit custom order request"
              className="w-full bg-kbk-gold text-kbk-black font-display font-bold py-5 text-lg hover:bg-yellow-300 transition-colors tracking-wide disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px]"
            >
              {loading ? 'Sending Request...' : 'Request Your Piece ♛'}
            </button>

            <p className="font-mono text-xs text-kbk-muted text-center">
              We respond within 24 hours. A 50% deposit secures your spot.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
