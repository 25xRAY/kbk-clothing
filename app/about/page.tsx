import type { Metadata } from 'next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
  title: 'About | KBK Clothing — Wear the Crown.™',
  description: 'KBK Clothing is a veteran-owned cut and sew apparel brand. Every piece handcrafted. Streetwear meets wearable art. The story behind Wear the Crown.™',
}

const processSteps = [
  {
    step: '01',
    title: 'Concept',
    description: 'Every piece starts with a vision. Sketches, color studies, reference gathering. No piece begins until the concept is locked.',
  },
  {
    step: '02',
    title: 'Garment Selection',
    description: 'Premium-weight blanks are sourced and selected for weight, drape, and canvas quality. The base garment is as important as the art.',
  },
  {
    step: '03',
    title: 'Preparation',
    description: 'Garments are prepped, treated, and staged. Stencils are hand-cut. Bleach is mixed. Paint is thinned. Everything is ready before the first mark.',
  },
  {
    step: '04',
    title: 'Creation',
    description: 'The work happens by hand. Bleach art, hand painting, acid wash, stencil work. Each technique applied with intention, not formula.',
  },
  {
    step: '05',
    title: 'Finishing',
    description: 'Pieces are heat-set, washed, and inspected. Each one checked by hand against quality standards before it gets the KBK mark.',
  },
  {
    step: '06',
    title: 'Catalogued',
    description: 'Each piece is photographed and catalogued. One-of-a-kind means no two will ever be identical — the catalogue is the record.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-kbk-black pt-16">
        {/* Hero */}
        <header className="py-24 px-6 text-center relative overflow-hidden border-b border-kbk-gold/10">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #FFCC00 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <div className="mb-6">
              <span className="font-display font-bold text-7xl md:text-9xl text-white leading-none">
                K<span className="text-kbk-gold">B</span>K
              </span>
              <div className="text-kbk-gold text-3xl mt-2" aria-label="Crown">♛</div>
            </div>
            <p className="font-display font-bold text-kbk-gold text-xl md:text-3xl tracking-widest uppercase mb-4">
              Wear the Crown.™
            </p>
            <p className="font-body text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
              Veteran-owned. Handcrafted. Street credibility meets artisan craft.
            </p>
          </div>
        </header>

        {/* Brand Story */}
        <section className="py-20 px-6" aria-labelledby="story-heading">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">The Story</span>
            <h2 id="story-heading" className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-8">
              Built from the Ground Up
            </h2>
            <div className="space-y-6 font-body text-gray-300 text-lg leading-relaxed">
              <p>
                KBK Clothing was born from a simple belief: clothing should be art.
                Not mass-produced. Not duplicated. Not worn by a thousand other people
                in a thousand other rooms.
              </p>
              <p>
                Every KBK piece is made by hand in the United States. Bleach art, hand
                painting, acid wash, stencil work — techniques that cannot be replicated
                by a machine, executed with precision and intention on premium garments.
              </p>
              <p>
                KBK is a veteran-owned brand (NAICS 315280). The discipline that comes
                from service informs every piece: deliberate, precise, built to last.
                When you wear KBK, you&apos;re wearing something that took time, care,
                and skill — not a factory floor.
              </p>
              <p className="text-kbk-gold font-display font-bold text-xl">
                Wear the Crown. You earned it.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="drip-divider mx-auto max-w-3xl" aria-hidden="true" />

        {/* Founder Section */}
        <section className="py-20 px-6 bg-kbk-gray" aria-labelledby="founder-heading">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">The Maker</span>
            <h2 id="founder-heading" className="font-display font-bold text-4xl text-white mt-3 mb-8">
              Handmade by Carlton
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Founder image placeholder */}
              <div
                className="w-full md:w-48 aspect-square bg-kbk-black border border-kbk-gold/20 flex-shrink-0 flex items-center justify-center"
                aria-label="Founder portrait placeholder"
              >
                <span className="text-kbk-gold text-4xl" aria-hidden="true">♛</span>
              </div>
              <div className="space-y-4 font-body text-gray-300 leading-relaxed">
                <p>
                  Carlton is the founder, maker, and creative force behind KBK Clothing.
                  A U.S. Army veteran, Carlton brings the same dedication and discipline
                  from military service to every garment he creates.
                </p>
                <p>
                  Each piece is built by his hands — from concept sketch to finished product.
                  No outsourcing. No shortcuts. No compromises on quality.
                </p>
                <p>
                  &ldquo;I want people to put on a KBK piece and feel something. Not just look good —
                  feel like they&apos;re wearing something that nobody else has. Because they are.&rdquo;
                </p>
                <p className="font-display font-bold text-kbk-gold">
                  — Carlton, Founder & Maker, KBK Clothing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6" aria-labelledby="process-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono text-xs text-kbk-gold tracking-widest uppercase">How It&apos;s Made</span>
              <h2 id="process-heading" className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
                The Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((item) => (
                <div key={item.step} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 border border-kbk-gold/40 flex items-center justify-center">
                    <span className="font-mono text-xs text-kbk-gold font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-xl mb-2">{item.title}</h3>
                    <p className="font-body text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-kbk-gray border-y border-kbk-gold/10 text-center" aria-labelledby="about-cta">
          <h2 id="about-cta" className="font-display font-bold text-3xl text-white mb-4">
            Ready to Wear the Crown?
          </h2>
          <p className="font-body text-gray-400 mb-8 max-w-md mx-auto">
            Every piece in the collection is one-of-a-kind and built to last.
            Shop the collection or commission something built just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="bg-kbk-gold text-kbk-black font-display font-bold px-8 py-4 hover:bg-yellow-300 transition-colors"
            >
              Shop the Collection
            </a>
            <a
              href="/custom-order"
              className="border border-kbk-gold text-kbk-gold font-display font-bold px-8 py-4 hover:bg-kbk-gold hover:text-kbk-black transition-all"
            >
              Request Custom Piece
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
