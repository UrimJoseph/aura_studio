'use client'

import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [year, setYear] = useState(2026)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-[#28201f] px-5 pb-10 text-[0.8rem] text-[#f7f2ee] md:px-9">
      <div className="mx-auto flex max-w-[1300px] flex-wrap justify-between gap-6 border-t border-[#5a4f4a] pt-7">
        <div>
          <strong className="mb-3.5 block text-[0.95rem] font-semibold">Aura Studio</strong>
          <a
            href="mailto:hello@aurastudio.co"
            className="text-[#e8cdb5] transition-colors hover:text-white"
          >
            hello@aurastudio.co
          </a>
        </div>

        <div className="flex flex-col gap-3.5 text-[#e8cdb5] md:text-right">
          <span>London, UK</span>
          <span>© {year} Aura Studio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer