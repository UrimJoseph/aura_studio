'use client'

import React, { useEffect } from 'react'

const Nav = () => {
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#c9bfb8] bg-[#f7f2ee]/90 px-5 backdrop-blur-md md:h-[72px] md:px-9">
      {/* Brand */}
      <a href="#top" aria-label="Aura Studio home" className="group flex items-center gap-3.5 font-semibold text-[#26201e]">
        <svg
          className="h-[34px] w-[34px] text-[#d43152]"
          viewBox="0 0 36 36"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <circle cx="18" cy="18" r="17" />
          <ellipse
            cx="18"
            cy="18"
            rx="7"
            ry="11"
            className="origin-center rotate-[40deg] transition-transform duration-700 [transform-box:fill-box] group-hover:rotate-[400deg]"
          />
        </svg>
        <span className="text-base md:text-lg">Aura Studio</span>
      </a>

      {/* Links */}
      <nav aria-label="Main" className="flex items-center gap-4 text-sm md:gap-8 md:text-[0.95rem]">
        <a
          href="#about"
          className="relative hidden text-[#5a4f4a] transition-colors hover:text-[#26201e] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#d43152] after:transition-transform hover:after:scale-x-100 sm:block"
        >
          About
        </a>
        <a
          href="#services"
          className="relative hidden text-[#5a4f4a] transition-colors hover:text-[#26201e] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#d43152] after:transition-transform hover:after:scale-x-100 sm:block"
        >
          Services
        </a>
        <a
          href="#contact"
          className="relative text-[#5a4f4a] transition-colors hover:text-[#26201e] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#d43152] after:transition-transform hover:after:scale-x-100"
        >
          Contact
        </a>
        <a href="#contact" className="group font-semibold text-[#26201e]">
          Let’s talk{' '}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 group-hover:translate-x-[3px] group-hover:translate-y-[3px]"
          >
            ↘
          </span>
        </a>
      </nav>
    </header>
  )
}

export default Nav