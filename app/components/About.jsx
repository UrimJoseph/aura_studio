import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-[#f7f2ee] py-[clamp(4rem,9vw,8rem)] md:scroll-mt-[72px]"
    >
      <div className="grid gap-4 px-5 md:grid-cols-[1fr_2fr] md:gap-8 md:px-9">
        {/* Label */}
        <p className="pt-0 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-[#d43152] md:pt-3">
          01 / A little about us
        </p>

        {/* Content */}
        <div>
          <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-normal leading-[1.15] tracking-tight text-[#26201e]">
            Good design makes you{' '}
            <span className="text-[#d43152]">feel something.</span>
          </h2>

          <p className="mt-10 max-w-[42rem] text-[1.1rem] leading-[1.7] text-[#5a4f4a]">
            Aura Studio is a London based creative agency helping brands express their identity
            through modern, minimalist design. We focus on creating meaningful visual experiences
            that combine clean aesthetics, strong visuals, and thoughtful storytelling.
          </p>

          <p className="mt-16 text-[0.95rem] italic text-[#5a4f4a]">
            Thoughtfully made, always.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About