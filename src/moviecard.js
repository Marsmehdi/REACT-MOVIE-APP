import React,{Component} from 'react'

import { v4 as uuidv4 } from 'uuid';




class Moviecard extends Component {


         handleClose = () =>{this.setState({show :false});}
        
      handleShow = () => {this.setState({show :true});}
        
     
    
state ={
    show:false ,
     src:"",txt:"",
     }
     
    
    onChange = (event) => {
        this.setState({ txt: event.target.value });
       };
    onSubmit = (event) => {
      event.preventDefault();
      if (this.state.src.trim() === '' || this.state.txt.trim() === '') return;
  
      const newFilm = {
          lien:'#',
        src: this.state.src.trim(),
        srcset:this.state.src+' 1x',
        txt: this.state.txt.trim(),
        tab :this.state.tab,
        id:uuidv4()
      };
  
      this.setState({films:[...this.films, newFilm]});
     this.setState({ src: '', txt: '', });
    
    
    }
 render(){
    return(<div className="movlist" > {this.props.films.map(el=>(


    <div class="carte">
    <a href={el.lien} class="photo">
        <figure class="office__image">
            <img width="300" height="400" scr={el.scr} alt="" srcset={el.srcset}/>
        </figure>
        <div>
              {el.tab.map((e,index)=>(
                    <span className={e} ></span>
                )
                )}
          
            
            </div>
        <div class="office__desc">
           {el.txt}
           
        </div>
    </a>
    </div>) )
}
<div>
 




         </div>
</div>) }
}
   

export default Moviecard