import React, { Component } from 'react'



export class Search extends Component {
    state ={
         
      
       Search:''
    
    
    }
        
      
    
    
   
    render() {
     
        return (
            <div className="searchbar">
              <input
             type="text"
             className="form-control"
             name="src"
             placeholder="l'affiche de film.."
             
             onChange = {this.props.onChange}
           />  
    
             
            </div>
          
        )
    }
}


export default Search

