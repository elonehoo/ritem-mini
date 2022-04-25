import React from 'react'

function icon(name:string,size:string){
  return <i className={`bx ${name} ${size}`} />
}

function darkMode(){
  localStorage.setItem('theme', 'dark')
  console.log(document.documentElement)
  // console.log('dark mode')
}

function Footer(){
  return (
    <nav className="text-xl mt-6 inline-flex gap-2">
      <button onClick={darkMode} className="text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none hover:opacity-100 hover:text-teal-600">
        {icon('bx-sun','bx-sm')}
      </button>
      <a href="" className="text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none hover:opacity-100 hover:text-teal-600">
        {icon('bxl-github','bx-sm')}
      </a>
    </nav>
  )
}

export default Footer
