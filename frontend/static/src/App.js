import React, { Component } from 'react';
import RecipesList from './components/RecipesList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('api/v1/recipes/');
    const data = await response.json();
    this.setState({recipes:data});
  }

  render(){
    return(
      <>
      <nav className="navbar navbar-light" style={{backgroundColor: '#C0C0C0'}}>
      <p style={{fontStyle: 'italic'}}>The kitchen is yours, chef!</p>
      <h5 style={{color:'#6B6B6B'}}>BATCH MAKER</h5>
      <div>
        <button className="mr-1 btn btn-secondary"type='button'>Form</button>
        <button className="mr-1 btn btn-secondary"type='button'>Register</button>
        <button className="mr-1 btn btn-secondary"type='button'>Log in</button>
      </div>
      </nav>
      <div>
        <RecipesList recipes={this.state.recipes}/>
      </div>
      </>
    )
  }
}

export default App;
