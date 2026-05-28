import Link from 'next/link'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { NewsletterForm } from './components/NewsletterForm'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 bg-kbk-black relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, #FFCC00 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7B2FFF 0%, transparent 50%)',
            }}
            aria-hidden="true"
          />

          <div className="relative text-center max-w-4xl mx-auto">
            {/* Logo mark */}
            <div className="mb-8">
              <h1 className="font-display font-bold text-8xl md:text-[10rem] leading-none tracking-tight">
                <span className="text-white">K</span>
                <span className="text-kbk-gold" style={{ textShadow: '0 0 40px #FFCC0060' }}>B</span>
                <span className="text-white">K</span>
              </h1>
              <div className="text-kbk-gold text-4xl -mt-4 mb-2" aria-label="Crown">♛</div>
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

          <div className="absolute bottom-0 left-0 right-0 drip-divider" aria-hidden="true" />
        </section>

        {/* FEATURED COLLECTION */}
        <section className="py-24 px-6 bg-kbk-gray" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">Latest Drop</span>
              <h2 id="featured-heading" className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
                Featured Pieces
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 1, name: 'Crown Bleach Tee No. 001', technique: 'Bleach Art', price: 95, limited: false, soldOut: false },
                { id: 2, name: 'Graffiti Bomber No. 002', technique: 'Hand Painted', price: 185, limited: true, soldOut: false },
                { id: 3, name: 'Acid Wash Hoodie No. 003', technique: 'Acid Wash', price: 145, limited: false, soldOut: true },
                { id: 4, name: 'KBK Stencil Tee No. 004', technique: 'Stencil Art', price: 115, limited: true, soldOut: false },
                { id: 5, name: 'Crown Denim Jacket No. 005', technique: 'Hand Painted', price: 295, limited: false, soldOut: false },
                { id: 6, name: 'Street Drip Hoodie No. 006', technique: 'Bleach Art', price: 155, limited: true, soldOut: false },
              ].map((product) => (
                <article key={product.id} className="group relative bg-kbk-black border border-white/5 hover:border-kbk-gold/30 transition-all duration-300">
                  <div className="aspect-square bg-kbk-gray relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                      <span className="text-kbk-gold text-4xl font-display font-bold opacity-20">KBK</span>
                    </div>
                    {product.limited && !product.soldOut && (
                      <div className="absolute top-3 left-3 badge-limited">Limited</div>
                    )}
                    {product.soldOut && (
                      <div className="sold-out-overlay" role="status">Sold Out</div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs text-kbk-muted uppercase tracking-wider">{product.technique}</span>
                      {!product.soldOut && <span className="font-mono text-xs text-kbk-gold">Only 1 Left</span>}
                    </div>
                    <h3 className="font-display font-bold text-white text-lg mb-3">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-kbk-gold font-bold text-xl">${product.price}</span>
                      {product.soldOut ? (
                        <span className="font-mono text-xs text-kbk-muted px-4 py-2 border border-white/10">Sold Out</span>
                      ) : (
                        <button
                          className="font-mono text-xs border border-kbk-gold/40 text-kbk-gold px-4 py-2 hover:bg-kbk-gold hover:text-kbk-black transition-all min-h-[44px]"
                          aria-label={`Add ${product.name} to cart`}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </article>
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
        <section className="py-24 px-6 bg-kbk-black border-y border-kbk-gold/10" aria-labelledby="promise-heading">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">The KBK Promise</span>
            <h2 id="promise-heading" className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
              One of a Kind.<br />
              <span className="text-kbk-gold">Just Like You.</span>
            </h2>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Every KBK piece is made by hand. No prints, no mass production, no duplicates.
              When a piece sells, it&apos;s gone forever — which means you&apos;ll never walk into
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
        <section className="py-16 px-6 bg-kbk-gray" aria-labelledby="newsletter-heading">
          <div className="max-w-xl mx-auto text-center">
            <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">Drop Alerts</span>
            <h2 id="newsletter-heading" className="font-display font-bold text-3xl text-white mt-3 mb-3">
              Know Before the Drop
            </h2>
            <p className="font-body text-gray-400 mb-8">
              KBK drops are limited and sell fast. Get on the list.
            </p>
            <NewsletterForm inputBg="bg-kbk-black" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
