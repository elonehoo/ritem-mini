import React from "react"
import { useParams } from "react-router-dom"

class Hi extends React.Component{
  constructor(props:any){
    super(props)
  }

  demo(){
    const value = useParams()
    console.log(value.name)
  }

  render(){
    return (
      <div>
        <h1>Hi </h1>
        <p onClick={this.demo}>1</p>
      </div>
    )
  }
}

export default Hi
