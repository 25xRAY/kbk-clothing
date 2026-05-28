'use client'
import { useState } from 'react'
import Link from 'next/link'

export function Nav() {
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount] = useState(0)

  const navLinks = ['Shop', 'Custom Order', 'About', 'Contact']

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-kbk-black/95 backdrop-blur-sm border-b border-kbk-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="KBK Clothing — home">
            <span className="font-display font-bold text-2xl text-white">
              K<span className="text-kbk-gold">B</span>K
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-body text-gray-300 hover:text-kbk-gold transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-kbk-gold group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </div>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              aria-label={`Open cart — ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
              className="relative p-2 text-gray-300 hover:text-kbk-gold transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-kbk-gold text-kbk-black text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="md:hidden p-2 text-gray-300 hover:text-kbk-gold min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-kbk-gray border-t border-kbk-gold/10 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(' ', '-')}`}
                className="block py-3 text-gray-300 hover:text-kbk-gold text-lg font-display border-b border-white/5 last:border-0 min-h-[44px] flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      <div
        className={`cart-drawer ${cartOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="p-6 flex items-center justify-between border-b border-kbk-gold/20">
          <h2 className="font-display font-bold text-xl text-white">Your Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="text-gray-400 hover:text-kbk-gold min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="p-6 flex flex-col items-center justify-center text-center h-64">
          <p className="text-gray-400 font-body mb-6">Your cart is empty.</p>
          <Link
            href="/shop"
            onClick={() => setCartOpen(false)}
            className="bg-kbk-gold text-kbk-black font-display font-bold px-6 py-3 hover:bg-yellow-300 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setCartOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
