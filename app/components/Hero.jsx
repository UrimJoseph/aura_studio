import React from 'react'

const Hero = () => {
  return (
    <div className="bg-[#f7f2ee]">
      {/* Float animation lives here, so no config or globals.css changes are needed */}
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* Hero text */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
        <div
          aria-hidden="true"
          className="mb-10 grid h-[70px] w-[70px] animate-[hero-float_5s_ease-in-out_infinite] place-items-center rounded-full border border-[#c9bfb8] text-[#d43152] motion-reduce:animate-none"
        >
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-[34px] w-[34px]">
            <line x1="12" y1="24" x2="24" y2="12" />
            <line x1="14" y1="28" x2="28" y2="14" />
            <line x1="18" y1="30" x2="30" y2="18" />
          </svg>
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4f4a]">
          Independent creative studio · London, UK
        </p>

        <h1 className="mb-6 mt-2 text-[clamp(3.5rem,12vw,9.5rem)] font-normal leading-[1.05] tracking-tight text-[#26201e]">
          Aura Studio
        </h1>

        <p className="mb-6 text-[clamp(1.4rem,3vw,2rem)] font-medium text-[#d43152]">
          Bringing Ideas to Life
        </p>

        <p className="mb-10 max-w-[34rem] text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed text-[#5a4f4a]">
          We help brands find their feeling — then bring it to life through considered, modern design.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 rounded-[3px] bg-[#d43152] px-8 py-[18px] text-[0.95rem] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b9263f]"
          >
            Get in touch
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-hover:translate-x-[3px] group-hover:translate-y-[3px]"
            >
              ↘
            </span>
          </a>
          <a
            href="#about"
            className="border-b border-transparent font-medium text-[#26201e] transition hover:border-[#26201e]"
          >
            A little about us
          </a>
        </div>
      </section>

      {/* Hero image (full picture, no cropping) */}
      <div className="px-4 md:px-6">
        <img
          src="/hero.png"
          alt="A folded paper-like sculpture beside a terracotta disc on a plinth, lit by soft window light"
          width={1600}
          height={1056}
          className="block h-auto w-full"
        />
      </div>
    </div>
  )
}

export default Hero