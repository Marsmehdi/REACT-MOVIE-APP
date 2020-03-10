import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class Add extends Component {
  state ={
    show:false ,
    newFilm : {},
    tab:["fa fa-star ",
     "fa fa-star ",
     "fa fa-star",
     "fa fa-star",
     "fa fa-star "]
  }
  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
      
  onChange = (event) => {
    this.setState({ txt: event.target.value });
   };
   checked=(a)=>{
    console.log(a)
    this.setState({tab:this.state.tab.map((el,index)=>(index <= a?
      "fa fa-star checked" :"fa fa-star"))})
}


  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          +
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un film</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="src"
                  placeholder="l'affiche de film.."
                  onChange={event => {
                    this.setState({ src: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="txt"
                  placeholder="Nom de film.."
                  onChange={this.onChange}
                />
              </div>
              <div>
              {this.state.tab.map((el,index)=>(
                    <span className={el} onClick={()=>this.checked(index)}></span>
                )
                )}
          
            
            </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-success" onClick={()=>this.props.Addmovie(this.state.src,this.state.txt,this.state.tab)}>
              Add film
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Add;
