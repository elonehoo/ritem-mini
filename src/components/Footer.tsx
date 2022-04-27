import React from 'react'
import { BiSun,BiMoon } from "react-icons/bi"
import { GoMarkGithub } from "react-icons/go";

function icons(mode:boolean){
  if(mode){
    return <BiMoon />
  }else{
    return <BiSun />
  }
}

class Footer extends React.Component<{}, {mode: boolean}>{

  constructor(props:any){
    super(props)
    this.state = {
      mode:false
    }

  }

  dark = () =>{
    const darkMode:boolean = document.documentElement.classList.toggle('dark')
    this.setState({
      mode:darkMode
    })
  }

  render(){
    
    return (
      <nav className="text-xl mt-6 inline-flex gap-2">
        <button onClick={this.dark} className="text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none hover:opacity-100 hover:text-teal-600">
          {icons(this.state.mode)}
        </button>
        <a href="https://github.com/elonehoo/ritem-mini" target="_blank" className="text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none hover:opacity-100 hover:text-teal-600">
          <GoMarkGithub />
        </a>
      </nav>
    )
  }
  
}

export default Footer
