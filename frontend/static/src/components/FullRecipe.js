import React, { Component } from 'react';
import './FullRecipe.css'

class FullRecipe extends Component {
  constructor(props){
    super(props);
    this.state ={
      isEditing: false,
    }
  }
  render(){
  return(
    <>
    <div className="card" style={{marginRight:'8%'}}>
      <h5 style={{textAlign: 'center'}}>{this.props.pickedRecipe.name}</h5>
      <img src={this.props.pickedRecipe.image} alt=""/>
      <div className='p-4'>
        <p>Ingredients you will need:</p>
        <p>{this.props.pickedRecipe.ingredients}</p>
        <p>Instructions:</p>
        <p>{this.props.pickedRecipe.instructions}</p>
        <p>Notes:</p>
        <p>{this.props.pickedRecipe.notes}</p>
        <button className="btn btn-danger mr-2" onClick={() => this.props.deleteRecipe(this.props.pickedRecipe.id)}><i className="fas fa-trash"></i></button>
        <button className="btn btn-info" onClick={() => this.props.editRecipe(this.props.pickedRecipe.id)}><i className="fas fa-edit"></i></button>
      </div>

    </div>
    </>
  )
 }
}
export default FullRecipe;
