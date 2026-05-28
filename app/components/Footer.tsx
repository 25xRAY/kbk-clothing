'use client'
import Link from 'next/link'

export function Footer() {
  const navLinks = ['Shop', 'Custom Order', 'About', 'Contact']
  const socialLinks = ['Instagram', 'TikTok', 'Pinterest']

  return (
    <footer className="bg-kbk-black border-t border-kbk-gold/10 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-2">
          <span className="font-display font-bold text-3xl text-white">
            K<span className="text-kbk-gold">B</span>K
          </span>
        </div>

        {/* Tagline */}
        <p className="font-display text-kbk-gold font-bold text-sm mb-6 tracking-widest uppercase">
          Wear the Crown.™
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {socialLinks.map((platform) => (
            <a
              key={platform}
              href="#"
              aria-label={`KBK Clothing on ${platform}`}
              className="font-mono text-xs text-kbk-muted hover:text-kbk-gold transition-colors tracking-wider uppercase min-h-[44px] flex items-center"
            >
              {platform}
            </a>
          ))}
        </div>

        {/* Nav links */}
        <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(' ', '-')}`}
              className="font-mono text-xs text-kbk-muted hover:text-kbk-gold transition-colors tracking-wider uppercase min-h-[44px] flex items-center"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="max-w-sm mx-auto mb-8">
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Drop alerts"
              aria-label="Email address for drop alerts"
              className="flex-1 bg-kbk-gray border border-kbk-gold/20 text-white px-3 py-2 text-sm font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600"
            />
            <button
              type="submit"
              className="bg-kbk-gold text-kbk-black font-bold text-xs px-4 py-2 hover:bg-yellow-300 transition-colors"
            >
              Join
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="drip-divider mb-6" role="separator" />

        {/* Copyright */}
        <p className="font-mono text-xs text-kbk-muted">
          © {new Date().getFullYear()} KBK Clothing. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
