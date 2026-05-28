import type { Metadata } from 'next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
  title: 'Shop | KBK Clothing — Wear the Crown.™',
  description: 'Browse the full KBK Clothing collection. Hand-painted, bleach art, and one-of-a-kind streetwear pieces. Each made by hand. No two alike.',
}

const products = [
  { id: 1, name: 'Crown Bleach Tee No. 001', technique: 'Bleach Art', collection: 'Originals', size: 'L', price: 95, limited: false, soldOut: false },
  { id: 2, name: 'Graffiti Bomber No. 002', technique: 'Hand Painted', collection: 'Premium', size: 'M', price: 185, limited: true, soldOut: false },
  { id: 3, name: 'Acid Wash Hoodie No. 003', technique: 'Acid Wash', collection: 'Originals', size: 'XL', price: 145, limited: false, soldOut: true },
  { id: 4, name: 'KBK Stencil Tee No. 004', technique: 'Stencil Art', collection: 'Crown Series', size: 'S', price: 115, limited: true, soldOut: false },
  { id: 5, name: 'Crown Denim Jacket No. 005', technique: 'Hand Painted', collection: 'Premium', size: 'L', price: 295, limited: false, soldOut: false },
  { id: 6, name: 'Street Drip Hoodie No. 006', technique: 'Bleach Art', collection: 'Crown Series', size: 'XXL', price: 155, limited: true, soldOut: false },
  { id: 7, name: 'KBK Crown Crewneck No. 007', technique: 'Embroidered', collection: 'Crown Series', size: 'M', price: 135, limited: false, soldOut: false },
  { id: 8, name: 'Splatter Art Tee No. 008', technique: 'Hand Painted', collection: 'Originals', size: 'L', price: 105, limited: true, soldOut: false },
  { id: 9, name: 'Reverse Bleach Hoodie No. 009', technique: 'Bleach Art', collection: 'Premium', size: 'XL', price: 175, limited: false, soldOut: true },
]

const techniques = ['All', 'Bleach Art', 'Hand Painted', 'Acid Wash', 'Stencil Art', 'Embroidered']
const collections = ['All', 'Originals', 'Crown Series', 'Premium']
const sizes = ['All', 'S', 'M', 'L', 'XL', 'XXL']

export default function ShopPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-kbk-black pt-16">
        {/* Page Header */}
        <header className="py-16 px-6 text-center border-b border-kbk-gold/10">
          <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">The Collection</span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mt-3 mb-4">
            Shop
          </h1>
          <p className="font-body text-gray-400 max-w-lg mx-auto">
            Every piece is one-of-a-kind. Made by hand. When it&apos;s gone, it&apos;s gone.
          </p>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Filters */}
          <section aria-label="Product filters" className="mb-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              {/* Technique filter */}
              <div>
                <p className="font-mono text-xs text-kbk-muted uppercase tracking-wider mb-3">Technique</p>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by technique">
                  {techniques.map((t) => (
                    <button
                      key={t}
                      className={`font-mono text-xs px-3 py-2 border transition-colors min-h-[44px] ${
                        t === 'All'
                          ? 'border-kbk-gold bg-kbk-gold text-kbk-black'
                          : 'border-white/20 text-gray-400 hover:border-kbk-gold hover:text-kbk-gold'
                      }`}
                      aria-pressed={t === 'All'}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Collection filter */}
              <div>
                <p className="font-mono text-xs text-kbk-muted uppercase tracking-wider mb-3">Collection</p>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by collection">
                  {collections.map((c) => (
                    <button
                      key={c}
                      className={`font-mono text-xs px-3 py-2 border transition-colors min-h-[44px] ${
                        c === 'All'
                          ? 'border-kbk-gold bg-kbk-gold text-kbk-black'
                          : 'border-white/20 text-gray-400 hover:border-kbk-gold hover:text-kbk-gold'
                      }`}
                      aria-pressed={c === 'All'}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size filter */}
              <div>
                <p className="font-mono text-xs text-kbk-muted uppercase tracking-wider mb-3">Size</p>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by size">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      className={`font-mono text-xs px-3 py-2 border transition-colors min-h-[44px] ${
                        s === 'All'
                          ? 'border-kbk-gold bg-kbk-gold text-kbk-black'
                          : 'border-white/20 text-gray-400 hover:border-kbk-gold hover:text-kbk-gold'
                      }`}
                      aria-pressed={s === 'All'}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Results count */}
          <p className="font-mono text-xs text-kbk-muted mb-8 uppercase tracking-wider">
            {products.length} Pieces Available
          </p>

          {/* Product Grid */}
          <section aria-label="Products">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="group relative bg-kbk-gray border border-white/5 hover:border-kbk-gold/30 transition-all duration-300"
                >
                  <div className="aspect-square bg-kbk-black relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                      <span className="text-kbk-gold text-5xl font-display font-bold opacity-10">KBK</span>
                    </div>
                    {product.limited && !product.soldOut && (
                      <div className="absolute top-3 left-3 badge-limited">Limited</div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className="font-mono text-xs bg-kbk-gray/80 text-gray-400 px-2 py-1 border border-white/10">
                        {product.size}
                      </span>
                    </div>
                    {product.soldOut && (
                      <div className="sold-out-overlay" role="status">Sold Out</div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-kbk-muted uppercase tracking-wider">{product.technique}</span>
                      <span className="font-mono text-xs text-kbk-purple">{product.collection}</span>
                    </div>
                    <h2 className="font-display font-bold text-white text-lg mb-1">{product.name}</h2>
                    {!product.soldOut && (
                      <p className="font-mono text-xs text-kbk-gold mb-3">Only 1 Left</p>
                    )}
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-display text-kbk-gold font-bold text-xl">${product.price}</span>
                      {product.soldOut ? (
                        <span className="font-mono text-xs text-kbk-muted px-4 py-2 border border-white/10">
                          Sold Out
                        </span>
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
          </section>

          {/* Custom Order CTA */}
          <section className="mt-20 py-16 px-8 bg-kbk-gray border border-kbk-gold/20 text-center" aria-labelledby="custom-cta">
            <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">Don&apos;t See Your Size?</span>
            <h2 id="custom-cta" className="font-display font-bold text-3xl text-white mt-3 mb-4">
              Get a Custom Piece Made for You
            </h2>
            <p className="font-body text-gray-400 mb-8 max-w-lg mx-auto">
              Can&apos;t find what you&apos;re looking for? Commission a one-of-a-kind piece
              built to your exact specifications.
            </p>
            <a
              href="/custom-order"
              className="bg-kbk-gold text-kbk-black font-display font-bold px-8 py-4 hover:bg-yellow-300 transition-colors"
            >
              Request Custom Piece
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
