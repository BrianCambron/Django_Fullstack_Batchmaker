import React, { Component } from 'react';
import RecipesList from './components/RecipesList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import RecipeForm from './components/RecipeForm';
import FullRecipe from './components/FullRecipe';
import AllRecipes from './components/AllRecipes';
import Cookies from 'js-cookie';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      display: 'home',
      pickedRecipe:{},
      isLoggedIn: Cookies.get('Authorization')? true: false,
    }
    this.registerUser = this.registerUser.bind(this)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
    this.pickRecipe = this.pickRecipe.bind(this)
    this.addRecipe = this.addRecipe.bind(this)
    this.deleteRecipe = this.deleteRecipe.bind(this)
  }

  async componentDidMount(){
    const response = await fetch('api/v1/recipes/');
    const data = await response.json();
    this.setState({recipes:data});
  }

  async registerUser(e, obj){
    e.preventDefault();
    const options = {
      method:'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch('/api/v1/rest-auth/registration/', options)
    const data = await response.json().catch(handleError)
    console.log(data);
    if(data.key){
      Cookies.set('Authorization', `Token ${data.key}`);
      this.setState({isLoggedIn:true, display:'home'});
    }
   }
   async logIn(e, obj){
     e.preventDefault();
     const options = {
       method:'POST',
       headers: {
         'X-CSRFToken': Cookies.get('csrftoken'),
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(obj),
     };

     const handleError = (err) => console.warn(err);
     const response = await fetch('/api/v1/rest-auth/login/', options)
     const data = await response.json().catch(handleError)
     if(data.key){
       Cookies.set('Authorization', `Token ${data.key}`);
       this.setState({isLoggedIn:true, display:'home'});
     }
    }
    async logOut(){
      const options = {
      method:'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
        },
      };
      const handleError = (err) => console.warn(err);
      const response = await fetch('/api/v1/rest-auth/logout/', options)
      const data = await response.json().catch(handleError)

      if(data.detail === 'Successfully logged out.'){
        Cookies.remove('Authorization');
        this.setState({isLoggedIn:false, display:'home',});
    }
  }

  async addRecipe(e, obj){
    e.preventDefault();
    const options = {
      method:'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('api/v1/recipes/', options)
    const data = await response.json().catch(handleError)
    console.log(data);
    const recipes = [...this.state.recipes, data];
    this.setState({recipes})
  }
  pickRecipe(id){
    const fullRecipe = this.state.recipes.find(recipe => recipe.id === id);
    this.setState({pickedRecipe: fullRecipe, display: 'pickedRecipe'});
    console.log(this.state.pickedRecipe);
  }

  async deleteRecipe(id){
    const options = {
      method: 'DELETE',
      headers:{
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
    }
    const handleError = (err) => console.warn(err);
    const response = await fetch(`api/v1/recipes/${id}/`, options)
    const data = await response.json().catch(handleError)
    console.log(data);
    const recipes = [...this.state.recipes]
    const index = recipes.findIndex(recipe => recipe.id === id)
    recipes.splice(index,1);
    this.setState({recipes})
    }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let html;
    const display = this.state.display;
    if(display === 'register'){
      html = <RegisterForm registerUser={this.registerUser}/>
    }
    else if (display === 'home') {
      html = <div className="my-recipes">{isLoggedIn? <button className="btn btn-secondary add-recipe mr-2" onClick={() => this.setState({display:'form'})}><p className="add-sign">&#x2b;</p><p>Add Recipe</p></button>:<button className="btn btn-secondary add-recipe mr-2"onClick={() => alert('Need to be signed in')}><p className="add-sign">&#x2b;</p><p>Add Recipe</p></button>}
              <RecipesList recipes={this.state.recipes} pickRecipe={this.pickRecipe}/></div>
    }
    else if (display === 'login') {
      html = <LoginForm logIn={this.logIn}/>
    }
    else if (display === 'form') {
      html = <RecipeForm addRecipe={this.addRecipe}/>
    }
    else if (display === 'pickedRecipe'){
      html = <FullRecipe pickedRecipe={this.state.pickedRecipe} deleteRecipe={this.deleteRecipe}/>
    }
    else if (display === 'AllRecipes'){
      html = <AllRecipes recipes={this.state.recipes} pickRecipe={this.pickRecipe}/>
    }
    return(
      <>
      <nav className="navbar navbar-light" style={{backgroundColor: '#C0C0C0'}}>
      <p style={{fontStyle: 'italic'}}>The kitchen is yours, chef!</p>
      <h5 style={{color:'#6B6B6B'}}>BATCH MAKER</h5>
      <div>
        <button className="mr-1 btn btn-secondary"type='button'onClick={() => {this.setState({display:'home'})}}>HomePage</button>
        {isLoggedIn === false?<button className="mr-1 btn btn-secondary"type='button'onClick={() => {this.setState({display:'register'})}}>Register</button>
        : <button className="mr-1 btn btn-secondary" onClick={() =>  {this.setState({display:'AllRecipes'})}}>View All</button>}
        {isLoggedIn === false?<button className="mr-1 btn btn-secondary"type='button'onClick={() => {this.setState({display:'login'})}}>Log in</button>
        :<button className="mr-1 btn btn-secondary"type='button'onClick={this.logOut}>Log out</button>}
      </div>
      </nav>
      <div className="my-recipes">
        {html}
      </div>
      </>
    )
  }
}

export default App;
