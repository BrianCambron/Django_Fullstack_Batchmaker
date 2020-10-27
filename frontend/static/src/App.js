import React, { Component } from 'react';
import RecipesList from './components/RecipesList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import RecipeForm from './components/RecipeForm';
import Cookies from 'js-cookie';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      display: 'home',
      isLoggedIn: Cookies.get('Authorization')? true: false,
    }
    this.registerUser = this.registerUser.bind(this)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
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
    const recipes = [...this.state.recipes, data];
    this.setState({recipes});
  }

  render(){
    let html;
    const display = this.state.display;
    if(display === 'register'){
      html = <RegisterForm registerUser={this.registerUser}/>
    }
    else if (display === 'home') {
      html = <div className="my-recipes"><button className="btn btn-secondary add-recipe mr-2" onClick={() => this.setState({display:'form'})}><p className="add-sign">&#x2b;</p><p>Add Recipe</p></button>
              <RecipesList recipes={this.state.recipes}/></div>
    }
    else if (display === 'login') {
      html = <LoginForm logIn={this.logIn}/>
    }
    else if (display === 'form') {
      html = <RecipeForm />
    }
    const isLoggedIn = this.state.isLoggedIn;
    return(
      <>
      <nav className="navbar navbar-light" style={{backgroundColor: '#C0C0C0'}}>
      <p style={{fontStyle: 'italic'}}>The kitchen is yours, chef!</p>
      <h5 style={{color:'#6B6B6B'}}>BATCH MAKER</h5>
      <div>
        <button className="mr-1 btn btn-secondary"type='button'onClick={() => {this.setState({display:'home'})}}>HomePage</button>
        {isLoggedIn === false?<button className="mr-1 btn btn-secondary"type='button'onClick={() => {this.setState({display:'register'})}}>Register</button>
        : ''}
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
