import React, { Component } from 'react'

 class Rating extends Component {
     state={
     tab:["fa fa-star ",
     "fa fa-star ",
     "fa fa-star",
     "fa fa-star",
     "fa fa-star "],
    idx:""}
     checked=(a)=>{
         
         this.setState({tab:this.state.tab.map((el,index)=>(index <= a?
           "fa fa-star checked" :"fa fa-star")),idx : a})
           this.props.rate(a)
         
     }
     
    render() {
        return (
            
            <div>
              {this.state.tab.map((el,index)=>(
                    <span className={el} onClick={()=>this.checked(index)} ></span>
                )
                )}
          
            
            </div>
        )
    }
}
export default Rating