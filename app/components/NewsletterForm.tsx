'use client'

interface NewsletterFormProps {
  inputBg?: string
}

export function NewsletterForm({ inputBg = 'bg-kbk-black' }: NewsletterFormProps) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value
    if (!email) return
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      form.reset()
    } catch {
      // silent fail
    }
  }

  return (
    <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        aria-label="Email address for drop alerts"
        className={`flex-1 ${inputBg} border border-kbk-gold/30 text-white px-4 py-3 font-body focus:outline-none focus:border-kbk-gold placeholder:text-gray-600`}
        required
      />
      <button
        type="submit"
        className="bg-kbk-gold text-kbk-black font-display font-bold px-6 py-3 hover:bg-yellow-300 transition-colors whitespace-nowrap"
      >
        Join the List
      </button>
    </form>
  )
}
