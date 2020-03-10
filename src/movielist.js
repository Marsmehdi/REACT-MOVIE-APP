import React, { Component } from 'react'
import Moviecard from './moviecard'
import { v4 as uuidv4 } from 'uuid';
import Search from './search'
import Add from './add'
import Rating from './rating'

 class Movielist extends Component {
  state={ 
  tab :[ {
    id:uuidv4(),
     lien:"#" ,
     
         scr:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzMYQl-BlRp2PtWgyqqxU9EeCkaFKGBxRgSs-gUPtGT_gTftVz" ,srcset:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzMYQl-BlRp2PtWgyqqxU9EeCkaFKGBxRgSs-gUPtGT_gTftVz 1x, https://www.docplanner.com/images/warsaw@2x.png 2x",
    
         txt:'The boy',
         tab:["fa fa-star checked ",
         "fa fa-star checked",
         "fa fa-star checked",
         "fa fa-star",
         "fa fa-star "],
         idx:2
         
  
   },{
       id:uuidv4(),
    lien:"#" ,
    
         scr:"https://fr.web.img6.acsta.net/c_224_335_50_50/pictures/20/01/23/16/45/4653965.jpg" ,srcset:"https://fr.web.img6.acsta.net/c_224_335_50_50/pictures/20/01/23/16/45/4653965.jpg 1x",
    
     
         txt:'The boy',tab:["fa fa-star checked ",
         "fa fa-star checked",
         "fa fa-star",
         "fa fa-star",
         "fa fa-star "], idx:1
   },{
       id:uuidv4(),
     lien:"#" ,
      scr:"https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg", srcset:"https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg 1x",
    
         txt:'Titanic',tab:["fa fa-star checked ",
         "fa fa-star checked ",
         "fa fa-star",
         "fa fa-star",
         "fa fa-star "], idx:1
   },{
       id:uuidv4(),
     lien:"#" ,
     
      scr:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjy3zMLZmDjNfhF9MwkRLaKlh3gbMWOYa81eVRqSkWb9piYnuE", srcset:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjy3zMLZmDjNfhF9MwkRLaKlh3gbMWOYa81eVRqSkWb9piYnuE 1x, https://www.docplanner.com/images/istanbul@2x.png 2x",
     
         txt:'Prince oublie',tab:["fa fa-star checked ",
         "fa fa-star checked",
         "fa fa-star checked",
         "fa fa-star checked",
         "fa fa-star checked"], idx:4
   },{
       id:uuidv4(),
     lien:"#" ,
     scr:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk-Xm6NKrOVOb4IFYklNP3wzrAGNesPEu5mMbRklqq4cyZtijJ", srcset:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk-Xm6NKrOVOb4IFYklNP3wzrAGNesPEu5mMbRklqq4cyZtijJ 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x",
     
         txt:' The Fighter',
         tab:["fa fa-star checked",
         "fa fa-star checked",
         "fa fa-star checked",
         "fa fa-star",
         "fa fa-star "], idx:2
   },{
      lien:"#" ,
     scr:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMIo1U7_YXiESdvmcTWSnmrNtLw-R3cng-dK2s-xPIPYbua2zy", srcset:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMIo1U7_YXiESdvmcTWSnmrNtLw-R3cng-dK2s-xPIPYbua2zy 1x, https://www.docplanner.com/images/curitiba@2x.png 2x",
     
         txt:'Joker',
         tab:["fa fa-star checked",
         "fa fa-star checked",
         "fa fa-star",
         "fa fa-star",
         "fa fa-star "], idx:1
   }
   
  ],
  Search:"",
  minrate:""
}
Addmovie=(a,b,c)=>{



  this.setState({tab:[...this.state.tab, {src: a,txt:b , srcset: a +' 1x', tab:c}]});


}
rate=(e)=>{
  this.setState({minrate : e}) ;
}
    

onChange=(e)=>{
     
  this.setState({Search : e.target.value}) ;
}

    render() {
        

        return (
           <>
           <Search onChange={this.onChange}/>
           < Rating rate={this.rate}/>
         <Moviecard films={this.state.tab.filter(e=>e.txt.toUpperCase().includes(this.state.Search.toUpperCase())&&e.idx>=this.state.minrate) }/>
        <Add Addmovie={this.Addmovie} />
   </>     )
    }
  }
export default Movielist