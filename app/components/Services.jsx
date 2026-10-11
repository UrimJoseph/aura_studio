import React from 'react'

const iconProps = {
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.4',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  className:
    'h-[30px] w-[30px] text-[#d43152] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110',
}

const services = [
  {
    num: '01',
    title: 'Branding',
    text: 'Memorable, purposeful identities that help good businesses stand apart.',
    icon: (
      <svg {...iconProps}>
        <path d="M16 3 L21 11 H11 Z" />
        <rect x="4" y="19" width="9" height="9" />
        <circle cx="23" cy="23.5" r="4.5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'UI / UX design',
    text: 'Clear, intuitive digital experiences made for real people.',
    icon: (
      <svg {...iconProps}>
        <path d="M5 5 L27 13 L16 16 L13 27 Z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Web design',
    text: 'Thoughtful, responsive websites with a little more feeling.',
    icon: (
      <svg {...iconProps}>
        <path d="M16 4 L28 10 L16 16 L4 10 Z" />
        <path d="M4 16 L16 22 L28 16" />
        <path d="M4 22 L16 28 L28 22" />
      </svg>
    ),
  },
]

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-16 bg-[#ded5ce] py-[clamp(4rem,9vw,8rem)] md:scroll-mt-[72px]"
    >
      {/* Heading */}
      <div className="grid gap-4 px-5 md:grid-cols-[1fr_2fr] md:gap-8 md:px-9">
        <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-[#d43152] md:pt-3">
          02 / What we do
        </p>

        <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-normal leading-[1.15] tracking-tight text-[#26201e]">
          Small details.
          <br />
          <span className="text-[#d43152]">Whole new perspectives.</span>
        </h2>
      </div>

      {/* Cards */}
      <ul className="mx-5 mt-[4.5rem] grid border-y border-[#c9bfb8] md:mx-9 md:grid-cols-3">
        {services.map((service) => (
        <li
            key={service.num}
            className="group flex min-h-[14rem] flex-col justify-between border-t border-[#c9bfb8] py-6 first:border-t-0 md:min-h-[20rem] md:border-l md:border-t-0 md:py-6 md:pl-8 md:pr-6 md:first:border-l-0 md:first:pl-0 transition-colors duration-300 hover:bg-white/30"
          >
            <div className="flex items-start justify-between text-[0.9rem] text-[#5a4f4a]">
              <span>{service.num}</span>
              {service.icon}
            </div>

            <div>
              <h3 className="mb-1.5 text-2xl font-medium text-[#26201e]">{service.title}</h3>
              <p className="max-w-[20rem] leading-[1.7] text-[#5a4f4a]">{service.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services