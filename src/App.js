import React, { Component } from 'react';

import Movielist from './movielist'
import { Cube } from 'styled-loaders-react'
import './App.css';

class App extends Component{
  state ={
    loading : true
  }
  componentDidMount =()=>{
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    },2000
    )}
    render(){
      return(
        <div>
        {this.state.loading ?<Cube color="black"/>: <div className="App">
     
     
            <Movielist />
        
           
           </div>
        }
    </div>
      )
    }
}



  


export default App;
