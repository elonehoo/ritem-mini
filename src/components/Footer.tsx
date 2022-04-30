import React from 'react'

function Footer() {

  const dark = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
      <nav className="text-xl mt-6 inline-flex gap-2">
        <button onClick={dark} className="icon-btn">
          <div className="i-carbon-sun dark:i-carbon-moon" />
        </button>
        <a href="https://github.com/elonehoo/ritem-mini" target="_blank" className="icon-btn i-carbon-logo-github" rel="noreferrer" />
      </nav>
  )
}

export default Footer
