cd ~/Desktop/webproject/kbk-clothing && claude --dangerously-skip-permissions

# CODEBASE: kbk-clothing
# DIRECTORY: ~/Desktop/webproject/kbk-clothing
# NEVER RUN IN: xray_platform, pryze-website, 25bravo, or any other directory

---

# KBK CLOTHING — AUTONOMOUS WEBSITE BUILD
# Claude Code Headless Build Prompt — Version 1.0
# Date: May 28, 2026
# Prepared by: 25 Alpha LLC

---

## SECTION 1 — CODEBASE GUARD (EXECUTE FIRST — BEFORE ANYTHING ELSE)

```bash
if [[ "$(pwd)" != *"kbk-clothing"* ]]; then
  echo "❌ ABORT: Wrong directory. This build targets kbk-clothing."
  echo "   Current directory: $(pwd)"
  echo "   Run: cd ~/Desktop/webproject/kbk-clothing"
  exit 1
fi
echo "✅ Codebase verified: kbk-clothing"
echo "▶ KBK Clothing autonomous build starting: $(date)"
```

---

## SECTION 2 — IDENTITY AND CONTEXT

You are Claude Code operating as the autonomous build agent for KBK Clothing,
a veteran-owned cut and sew apparel manufacturing brand (NAICS 315280).

**Brand:** KBK Clothing
**Tagline:** Wear the Crown.™
**Primary Color:** #FFCC00 — Electric Gold
**Secondary Color:** #0A0A14 — Prime Black (dark mode)
**Logo:** KBK graffiti mark — gold B, gold crown, multicolor K letters
**Template:** ST-APP-002 Streetwear Command — dark mode, drop countdown,
limited edition badges
**Brand Voice:** Premium streetwear meets handcrafted wearable art.
One-of-a-kind pieces. Street credibility.

**Tech Stack:**
- Next.js 14 App Router (TypeScript strict)
- Tailwind CSS
- pnpm exclusively — never npm install
- Paddle primary payment (xih-paddle)
- ShipStation shipping (xih-shipstation)
- Vercel deployment

**Your mission:** Scaffold a complete, production-ready Next.js storefront
for KBK Clothing from zero. Create the GitHub repo, build all pages,
wire all commerce logic, and verify all acceptance criteria before declaring
this build complete.

Do NOT ask clarifying questions. Build. Verify. Report.

---

## SECTION 3 — STEP-BY-STEP BUILD INSTRUCTIONS

### STEP 1 — VERIFY ENVIRONMENT

```bash
# Confirm Node and pnpm are available
node --version
pnpm --version

# Confirm Claude Code is running in correct location
pwd
# Must contain: kbk-clothing
```

---

### STEP 2 — CREATE GITHUB REPOSITORY

```bash
# Create the GitHub repo under the 25alpha-llc org
# If gh CLI is available:
gh repo create 25alpha-llc/kbk-clothing \
  --public \
  --description "KBK Clothing — Wear the Crown. | Streetwear + Wearable Art | NAICS 315280" \
  --clone

# If gh CLI not available, create manually at github.com/25alpha-llc
# then clone:
# git clone https://github.com/25alpha-llc/kbk-clothing.git
# cd kbk-clothing
```

---

### STEP 3 — SCAFFOLD NEXT.JS PROJECT

```bash
# Scaffold inside the cloned repo directory
cd ~/Desktop/webproject/kbk-clothing

pnpm create next-app . \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --no-git

# Confirm scaffold succeeded
ls -la
cat package.json | grep '"name"'
```

---

### STEP 4 — INSTALL DEPENDENCIES

```bash
cd ~/Desktop/webproject/kbk-clothing

# Core dependencies
pnpm add \
  @paddle/paddle-js \
  @vercel/analytics \
  framer-motion \
  lucide-react \
  react-countdown \
  react-hook-form \
  zod \
  nodemailer \
  resend

# Dev dependencies
pnpm add -D \
  @types/nodemailer \
  prettier \
  eslint-config-prettier

echo "✅ Dependencies installed"
```

---

### STEP 5 — CONFIGURE TAILWIND FOR KBK BRAND

Create `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kbk-gold': '#FFCC00',
        'kbk-black': '#0A0A14',
        'kbk-gray': '#1A1A2E',
        'kbk-muted': '#888888',
        'kbk-blue': '#3B82F6',
        'kbk-purple': '#7B2FFF',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'drip': 'drip 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'countdown': 'countdown 1s linear infinite',
      },
      keyframes: {
        drip: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(4px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px #FFCC0040' },
          '50%': { boxShadow: '0 0 40px #FFCC0080' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

---

### STEP 6 — CREATE GLOBAL CSS

Create `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --kbk-gold: #FFCC00;
  --kbk-black: #0A0A14;
  --kbk-gray: #1A1A2E;
  --kbk-muted: #888888;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--kbk-black);
  color: #E8ECF2;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', sans-serif;
}

.kbk-gold { color: var(--kbk-gold); }
.kbk-gold-bg { background-color: var(--kbk-gold); }

/* Gold drip animation for decorative dividers */
.drip-divider {
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #FFCC00, transparent);
  position: relative;
}

.drip-divider::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 12px;
  background: #FFCC00;
  border-radius: 0 0 3px 3px;
}

/* Limited edition badge */
.badge-limited {
  background: #FFCC0020;
  border: 1px solid #FFCC0060;
  color: #FFCC00;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
}

/* Sold out overlay */
.sold-out-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 20, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #888888;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Cart drawer */
.cart-drawer {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 400px;
  background: #1A1A2E;
  border-left: 1px solid #FFCC0020;
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}
.cart-drawer.open {
  transform: translateX(0);
}

/* Focus states — WCAG 2.2 AA */
*:focus-visible {
  outline: 2px solid #FFCC00;
  outline-offset: 2px;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0A0A14; }
::-webkit-scrollbar-thumb { background: #FFCC0040; border-radius: 3px; }
```

---

### STEP 7 — CREATE ROOT LAYOUT

Create `app/layout.tsx`:

```typescript
import type { Metadata } from 'next'
import './globals.css'

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
  themeColor: '#FFCC00',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "KBK Clothing",
          "description": "Handcrafted streetwear and wearable art. One-of-a-kind pieces.",
          "url": "https://kbkclothing.com",
          "slogan": "Wear the Crown.",
          "foundingDate": "2026",
        })}} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

---

### STEP 8 — BUILD NAVIGATION COMPONENT

Create `app/components/Nav.tsx`:

```typescript
'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Nav() {
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount] = useState(0)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-kbk-black/95 backdrop-blur-sm border-b border-kbk-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-display font-bold text-2xl text-white">
              K<span className="text-kbk-gold">B</span>K
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Shop', 'Custom Order', 'About', 'Contact'].map((link) => (
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
              aria-label={`Open cart — ${cartCount} items`}
              className="relative p-2 text-gray-300 hover:text-kbk-gold transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              aria-label="Toggle menu"
              className="md:hidden p-2 text-gray-300 hover:text-kbk-gold"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-kbk-gray border-t border-kbk-gold/10 px-6 py-6">
            {['Shop', 'Custom Order', 'About', 'Contact'].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(' ', '-')}`}
                className="block py-3 text-gray-300 hover:text-kbk-gold text-lg font-display border-b border-white/5 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      <div className={`cart-drawer ${cartOpen ? 'open' : ''}`} role="dialog" aria-label="Shopping cart">
        <div className="p-6 flex items-center justify-between border-b border-kbk-gold/20">
          <h2 className="font-display font-bold text-xl text-white">Your Cart</h2>
          <button onClick={() => setCartOpen(false)} aria-label="Close cart" className="text-gray-400 hover:text-kbk-gold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 font-body mb-4">Your cart is empty.</p>
          <Link
            href="/shop"
            onClick={() => setCartOpen(false)}
            className="bg-kbk-gold text-kbk-black font-display font-bold px-6 py-3 rounded-sm hover:bg-yellow-300 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
      {cartOpen && (
        <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setCartOpen(false)} aria-hidden="true" />
      )}
    </>
  )
}
```

---

### STEP 9 — BUILD HOMEPAGE

Create `app/page.tsx` — complete homepage with hero, featured grid, one-of-a-kind callout, newsletter:

```typescript
import Link from 'next/link'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 bg-kbk-black relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #FFCC00 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7B2FFF 0%, transparent 50%)'
          }} />

          <div className="relative text-center max-w-4xl mx-auto">
            {/* Logo mark */}
            <div className="mb-8">
              <h1 className="font-display font-bold text-8xl md:text-[10rem] leading-none tracking-tight">
                <span className="text-white">K</span>
                <span className="text-kbk-gold" style={{ textShadow: '0 0 40px #FFCC0060' }}>B</span>
                <span className="text-white">K</span>
              </h1>
              {/* Crown above B */}
              <div className="text-kbk-gold text-4xl -mt-4 mb-2" aria-hidden="true">♛</div>
            </div>

            {/* Tagline */}
            <p className="font-display font-bold text-2xl md:text-4xl text-kbk-gold mb-4 tracking-wide">
              Wear the Crown.™
            </p>
            <p className="font-body text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              Handcrafted streetwear and wearable art. Every piece made by hand. No two alike.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="bg-kbk-gold text-kbk-black font-display font-bold px-8 py-4 text-lg hover:bg-yellow-300 transition-colors duration-200 tracking-wide"
              >
                Shop the Collection
              </Link>
              <Link
                href="/custom-order"
                className="border border-kbk-gold text-kbk-gold font-display font-bold px-8 py-4 text-lg hover:bg-kbk-gold hover:text-kbk-black transition-all duration-200 tracking-wide"
              >
                Request Custom Piece
              </Link>
            </div>
          </div>

          {/* Drip divider */}
          <div className="absolute bottom-0 left-0 right-0 drip-divider" />
        </section>

        {/* FEATURED COLLECTION */}
        <section className="py-24 px-6 bg-kbk-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">Latest Drop</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
                Featured Pieces
              </h2>
            </div>

            {/* Product grid — 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group relative bg-kbk-black border border-white/5 hover:border-kbk-gold/30 transition-all duration-300">
                  {/* Product image placeholder */}
                  <div className="aspect-square bg-kbk-gray relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
                      Product Image
                    </div>
                    {i % 3 === 0 && (
                      <div className="absolute top-3 left-3 badge-limited">Limited</div>
                    )}
                  </div>
                  {/* Product info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs text-kbk-muted uppercase tracking-wider">Hand Painted</span>
                      <span className="font-mono text-xs text-kbk-gold">Only 1 Left</span>
                    </div>
                    <h3 className="font-display font-bold text-white text-lg mb-1">Piece No. 00{i}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-kbk-gold font-bold text-xl">$125</span>
                      <button className="font-mono text-xs border border-kbk-gold/40 text-kbk-gold px-4 py-2 hover:bg-kbk-gold hover:text-kbk-black transition-all">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/shop"
                className="border border-kbk-gold text-kbk-gold font-display font-bold px-8 py-4 hover:bg-kbk-gold hover:text-kbk-black transition-all"
              >
                View Full Collection →
              </Link>
            </div>
          </div>
        </section>

        {/* ONE OF A KIND CALLOUT */}
        <section className="py-24 px-6 bg-kbk-black border-y border-kbk-gold/10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">The KBK Promise</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
              One of a Kind.<br />
              <span className="text-kbk-gold">Just Like You.</span>
            </h2>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Every KBK piece is made by hand. No prints, no mass production, no duplicates.
              When a piece sells, it's gone forever — which means you'll never walk into
              a room wearing what someone else is wearing.
            </p>
            <Link
              href="/custom-order"
              className="bg-kbk-gold text-kbk-black font-display font-bold px-8 py-4 text-lg hover:bg-yellow-300 transition-colors"
            >
              Commission Your Piece
            </Link>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-16 px-6 bg-kbk-gray">
          <div className="max-w-xl mx-auto text-center">
            <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">Drop Alerts</span>
            <h2 className="font-display font-bold text-3xl text-white mt-3 mb-3">
              Know Before the Drop
            </h2>
            <p className="font-body text-gray-400 mb-8">
              KBK drops are limited and sell fast. Get on the list.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address for drop alerts"
                className="flex-1 bg-kbk-black border border-kbk-gold/30 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600"
                required
              />
              <button
                type="submit"
                className="bg-kbk-gold text-kbk-black font-display font-bold px-6 py-3 hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Join the List
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
```

---

### STEP 10 — BUILD FOOTER COMPONENT

Create `app/components/Footer.tsx`:

```typescript
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-kbk-black border-t border-kbk-gold/10 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-2">
          <span className="font-display font-bold text-3xl">
            K<span className="text-kbk-gold">B</span>K
          </span>
        </div>

        {/* Tagline */}
        <p className="font-display text-kbk-gold font-bold text-sm mb-6 tracking-widest uppercase">
          Wear the Crown.™
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {['Instagram', 'TikTok', 'Pinterest'].map((platform) => (
            <a
              key={platform}
              href="#"
              aria-label={`KBK Clothing on ${platform}`}
              className="font-mono text-xs text-kbk-muted hover:text-kbk-gold transition-colors tracking-wider uppercase"
            >
              {platform}
            </a>
          ))}
        </div>

        {/* Nav links */}
        <div className="flex items-center justify-center gap-8 mb-8">
          {['Shop', 'Custom Order', 'About', 'Contact'].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(' ', '-')}`}
              className="font-mono text-xs text-kbk-muted hover:text-kbk-gold transition-colors tracking-wider uppercase"
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
              aria-label="Email for drop alerts"
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
        <div className="drip-divider mb-6" />

        {/* Copyright */}
        <p className="font-mono text-xs text-kbk-muted">
          © {new Date().getFullYear()} KBK Clothing. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
```

---

### STEP 11 — BUILD REMAINING PAGES

Create the following pages — each must be production-complete with no placeholders:

**`app/shop/page.tsx`** — Full collection grid with filters (technique, size, collection),
masonry layout, limited edition badges, sold-out overlays, "Add to Cart" buttons.

**`app/custom-order/page.tsx`** — Custom order intake form with fields:
name, email, size, technique preference, color preference, reference image upload,
budget range (min/max), timeline. 50% deposit language clear. Gold CTA: "Request Your Piece."

**`app/about/page.tsx`** — Brand story, founder section, process section (how each
piece is made), KBK logo large at top, tagline beneath logo.

**`app/contact/page.tsx`** — Contact form (name, email, subject, message),
social links, response time expectation: "We respond within 24 hours."

For each page, import Nav and Footer components. Maintain dark mode throughout.
All text on dark backgrounds must pass WCAG 2.2 AA 8.5:1 contrast minimum.

---

### STEP 12 — BUILD API ROUTES

**`app/api/newsletter/route.ts`** — POST endpoint accepting { email }.
Validate email format. Return 200 on success. Log to console for now.

**`app/api/custom-order/route.ts`** — POST endpoint accepting full custom
order form data. Validate all required fields with Zod. Return 201 on success
with order reference number. Send confirmation email via Resend (or log if
RESEND_API_KEY not configured).

---

### STEP 13 — CONFIGURE ENVIRONMENT

Create `.env.local` (development only — never commit):

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_BRAND_NAME=KBK Clothing
NEXT_PUBLIC_BRAND_TAGLINE=Wear the Crown.
PADDLE_API_KEY=your_paddle_key_here
RESEND_API_KEY=your_resend_key_here
SHIPSTATION_API_KEY=your_shipstation_key_here
```

Create `.env.example` (commit this — no real values):

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_BRAND_NAME=KBK Clothing
NEXT_PUBLIC_BRAND_TAGLINE=Wear the Crown.
PADDLE_API_KEY=
RESEND_API_KEY=
SHIPSTATION_API_KEY=
```

---

### STEP 14 — CREATE VERCEL CONFIG

Create `vercel.json`:

```json
{
  "framework": "nextjs",
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

---

### STEP 15 — GIT COMMIT AND PUSH

```bash
cd ~/Desktop/webproject/kbk-clothing

git add -A
git commit -m "feat: KBK Clothing initial build — ST-APP-002 Streetwear Command

- Next.js 14 App Router scaffolded
- KBK brand system: #FFCC00 gold, #0A0A14 dark mode
- Tagline: Wear the Crown.™
- Homepage: hero, featured grid, one-of-a-kind callout, newsletter
- Nav: dark mode, cart drawer, mobile hamburger
- Footer: logo, tagline, social, newsletter, copyright
- Shop page: product grid, filters, badges
- Custom order page: intake form, deposit logic
- About page: brand story, founder, process
- Contact page: form, social links
- API routes: newsletter, custom-order
- WCAG 2.2 AA compliant
- JSON-LD Organization + Product schema
- Mobile-first: 375px minimum viewport"

git push origin main

echo "✅ Code pushed to GitHub"
```

---

### STEP 16 — BUILD VERIFICATION

```bash
cd ~/Desktop/webproject/kbk-clothing

# TypeScript — must be zero errors
echo "▶ Running TypeScript check..."
pnpm tsc --noEmit
echo "✅ TypeScript: zero errors"

# Build — must succeed
echo "▶ Running production build..."
pnpm build
echo "✅ Build: success"

# ESLint — zero new errors
echo "▶ Running ESLint..."
pnpm lint
echo "✅ ESLint: clean"

# Verify all pages exist
echo "▶ Verifying page files..."
for page in "app/page.tsx" "app/shop/page.tsx" "app/custom-order/page.tsx" "app/about/page.tsx" "app/contact/page.tsx"; do
  if [ -f "$page" ]; then
    echo "  ✅ $page"
  else
    echo "  ❌ MISSING: $page"
  fi
done

# Verify components
for component in "app/components/Nav.tsx" "app/components/Footer.tsx"; do
  if [ -f "$component" ]; then
    echo "  ✅ $component"
  else
    echo "  ❌ MISSING: $component"
  fi
done

# Verify API routes
for route in "app/api/newsletter/route.ts" "app/api/custom-order/route.ts"; do
  if [ -f "$route" ]; then
    echo "  ✅ $route"
  else
    echo "  ❌ MISSING: $route"
  fi
done

# Verify no placeholder text
PLACEHOLDERS=$(grep -r "lorem ipsum\|TODO\|PLACEHOLDER\|TBD\|coming soon" app/ --include="*.tsx" --include="*.ts" | wc -l)
echo "Placeholder count: $PLACEHOLDERS (must be 0)"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  KBK CLOTHING BUILD VERIFICATION COMPLETE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
```

---

## SECTION 4 — COMPLETION CRITERIA

Do NOT declare this build complete until every item is checked.
A build that renders a blank screen is a failed build.
A build run in the wrong directory is a failed build.

```
CODEBASE VERIFICATION
- [ ] pwd confirms kbk-clothing directory
- [ ] Codebase guard passed at build start

BUILD VERIFICATION
- [ ] pnpm tsc --noEmit exits with code 0
- [ ] pnpm build exits with code 0
- [ ] pnpm lint exits with code 0
- [ ] Zero new ESLint errors introduced

PAGE VERIFICATION
- [ ] app/page.tsx — homepage renders — hero, grid, callout, newsletter all present
- [ ] app/shop/page.tsx — shop renders — product grid visible — filters present
- [ ] app/custom-order/page.tsx — form renders — all fields present — CTA gold
- [ ] app/about/page.tsx — brand story renders — KBK logo present — tagline present
- [ ] app/contact/page.tsx — contact form renders — social links present

COMPONENT VERIFICATION
- [ ] Nav renders — logo left, links right, cart icon, mobile hamburger
- [ ] Cart drawer opens and closes — does not navigate to new page
- [ ] Footer renders — KBK logo, tagline gold, social icons, copyright

BRAND VERIFICATION
- [ ] Tagline "Wear the Crown.™" present on homepage hero in #FFCC00
- [ ] Tagline "Wear the Crown.™" present in footer in #FFCC00
- [ ] Dark mode background #0A0A14 applied site-wide
- [ ] Gold #FFCC00 used consistently on all CTAs and accents

MOBILE VERIFICATION
- [ ] 375px viewport — no broken layout
- [ ] 375px viewport — no horizontal scroll
- [ ] Cart drawer accessible on mobile
- [ ] Touch targets minimum 44px

ACCESSIBILITY VERIFICATION
- [ ] All images have alt text
- [ ] All interactive elements have visible focus states
- [ ] All form inputs have aria-labels
- [ ] Color contrast passes WCAG 2.2 AA (8.5:1 minimum on body text)

SEO VERIFICATION
- [ ] JSON-LD Organization schema in layout.tsx
- [ ] Meta title includes "Wear the Crown.™"
- [ ] Meta description present and unique per page

GIT VERIFICATION
- [ ] All code committed to main branch
- [ ] Commit message follows convention
- [ ] Code pushed to github.com/25alpha-llc/kbk-clothing
```

---

## SECTION 5 — MORNING LOG

After all steps complete, output this summary:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  KBK CLOTHING — BUILD COMPLETE
  $(date)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REPO: github.com/25alpha-llc/kbk-clothing
BRANCH: main
BUILD: ✅ PASSING
TYPESCRIPT: ✅ ZERO ERRORS

PAGES BUILT:
  ✅ / — Homepage
  ✅ /shop — Collection
  ✅ /custom-order — Custom Intake
  ✅ /about — Brand Story
  ✅ /contact — Contact

COMPONENTS:
  ✅ Nav — dark mode, cart drawer, mobile menu
  ✅ Footer — logo, tagline, social, newsletter

API ROUTES:
  ✅ /api/newsletter
  ✅ /api/custom-order

BRAND:
  ✅ Tagline: Wear the Crown.™
  ✅ Gold: #FFCC00 — applied consistently
  ✅ Dark mode: #0A0A14 — site-wide

NEXT STEPS FOR CARLTON:
  1. Connect custom domain (when confirmed)
  2. Add Paddle API key to environment
  3. Add Resend API key to environment
  4. Deploy to Vercel: vercel --prod
  5. Run TESS trademark search for "Wear the Crown" before launch

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Wear the Crown.™ — KBK Clothing
  Built by 25 Alpha LLC — 25xray.ai
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

*KBK-AUTONOMOUS-BUILD-PROMPT-v1.md*
*25 Alpha LLC — May 28, 2026*
*Wear the Crown.™*
