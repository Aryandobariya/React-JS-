import React, { Component } from 'react'

export default class Cass extends Component {
    constructor(){
        super()
        this.state ={
            no:0,
            name:" "
        }
       
    }
    clickme(){
        this.setState({no:this.state.no + 1});
        this.setState({name:this.state.name + "jai shree ram"});
    }
  render() {
    return (
      <div> 
        <h1 >{this.state.no}</h1>
        <h1 >{this.state.name}</h1>
        <button  onClick={()=>this.clickme()}>prem se bolo</button>
        
      </div>
    )
  }
}
