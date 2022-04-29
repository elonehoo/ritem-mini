import React, { useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { GoMarkGithub } from 'react-icons/go'

function icons(mode: boolean) {
  if (mode)
    return <BiMoon />

  else
    return <BiSun />
}

function Footer() {
  const [mode, setMode] = useState(false)

  const dark = () => {
    const darkMode = document.documentElement.classList.toggle('dark')
    setMode(darkMode)
  }

  return (
      <nav className="text-xl mt-6 inline-flex gap-2">
        <button onClick={dark} className="text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none hover:opacity-100 hover:text-teal-600">
          {icons(mode)}
        </button>
        <a href="https://github.com/elonehoo/ritem-mini" target="_blank" className="text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none hover:opacity-100 hover:text-teal-600" rel="noreferrer">
          <GoMarkGithub />
        </a>
      </nav>
  )
}

export default Footer
