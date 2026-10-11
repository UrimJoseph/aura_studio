'use client'

import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState({ text: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!form.checkValidity()) {
      setStatus({
        text: 'Please fill in your name, a valid email and a message.',
        type: 'error',
      })
      return
    }

    // No backend yet. Later, replace this with a fetch() to your API route or a form service.
    setStatus({
      text: 'Thanks, your message is noted. We’ll be in touch soon.',
      type: 'ok',
    })
    form.reset()
  }

  const inputClass =
    'w-full rounded-sm border border-[#6b605c] bg-transparent px-4 py-3.5 text-[0.95rem] text-[#f7f2ee] placeholder:text-[#9b908b] outline-none transition-colors focus:border-[#d43152]'

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-[#28201f] pb-20 pt-[clamp(4rem,9vw,8rem)] text-[#f7f2ee] md:scroll-mt-[72px]"
    >
      <div className="mx-auto grid max-w-[1300px] gap-12 px-5 md:grid-cols-[1.1fr_1fr] md:gap-[clamp(2rem,6vw,6rem)] md:px-9">
        {/* Left: intro */}
        <div>
          <p className="mb-5 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-[#e8cdb5]">
            03 / Start a conversation
          </p>

          <h2 className="text-[clamp(2.6rem,6.5vw,5.2rem)] font-normal leading-[1.1] tracking-tight">
            Have a good feeling about this?
          </h2>

          <p className="mt-8 max-w-[24rem] leading-[1.7] text-[#e8cdb5]">
            Tell us a little about what you’re dreaming up. We’d love to hear it.
          </p>

          <a
            href="mailto:hello@aurastudio.co"
            className="mt-6 inline-block border-b border-transparent text-xl font-medium transition-colors hover:border-[#f7f2ee]"
          >
            hello@aurastudio.co
          </a>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} noValidate className="md:self-end">
          <div className="mb-5">
            <label htmlFor="name" className="mb-2 block text-[0.85rem] font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="mb-2 block text-[0.85rem] font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="mb-2 block text-[0.85rem] font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="A few words about your project…"
              required
              className={`${inputClass} min-h-[7.5rem] resize-y`}
            />
          </div>

          <button
            type="submit"
            className="group inline-flex items-center gap-4 rounded-[3px] bg-[#d43152] px-8 py-[18px] text-[0.95rem] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b9263f]"
          >
            Send message
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-hover:translate-x-[3px] group-hover:translate-y-[3px]"
            >
              ↘
            </span>
          </button>

          <p
            role="status"
            aria-live="polite"
            className={`mt-4 min-h-6 text-[0.9rem] ${
              status.type === 'ok' ? 'text-[#9fd8a8]' : 'text-[#ff9aa9]'
            }`}
          >
            {status.text}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact