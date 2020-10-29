import React, { Component } from 'react';
import Cookies from 'js-cookie';

class RecipeForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      image:null,
      preview:'',
      ingredients:'',
      instructions:'',
      notes:'',
      is_public:false,
      category:'DSSRT',
      amount:1,
      prep_time:1,
      cook_time:1,
      cook_temp:350,
      temperature:'F',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleImage = this.handleImage.bind(this)
    this.addRecipe = this.addRecipe.bind(this)
  }
  handleChange(event){
  this.setState({[event.target.name]: event.target.value});
  }
  async addRecipe(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', this.state.name)
    formData.append('image', this.state.image)
    formData.append('ingredients', this.state.ingredients)
    formData.append('instructions', this.state.instructions)
    formData.append('notes', this.state.notes)
    formData.append('is_public', this.state.is_public)
    formData.append('category', this.state.category)
    formData.append('amount', this.state.amount)
    formData.append('prep_time', this.state.prep_time)
    formData.append('cook_time', this.state.cook_time)
    formData.append('cook_temp', this.state.cook_temp)
    formData.append('temperature', this.state.temperature)

    const options = {
      method:'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
        body: formData,
      };
      const handleError = (err) => console.warn(err);
      const response = await fetch('api/v1/recipes/', options)
      const data = await response.json().catch(handleError)
      console.log(data);
      const recipes = [...this.props.recipes, data];
      this.setState({recipes})
    }
    handleImage(e){
    let file = e.target.files[0];
    console.log(file);
    this.setState({
      image: file
    });

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        preview: reader.result
      });
    }
    reader.readAsDataURL(file);
    }

  render(){
    return(
      <React.Fragment>
      <form className="col-12 col-md-6 mb-5 form" onSubmit={(e) => this.addRecipe(e, this.state)}>
        <div className="form-group">
          <label htmlFor="name">Recipe Name</label>
          <input type="text" className ="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Choose a profile picture:</label>
          <input type='file' id="image" name="image" onChange={this.handleImage}/>
          <img src={this.state.preview} alt=''/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="is_public" name="is_public" onClick={() => this.setState({is_public: true})}/>
          <label className="form-check-label" htmlFor="is_public">Make Public</label>
        </div>
        <div className="form-group">
          <label htmlFor="prep_time">Prep Time (Minutes)</label>
          <input type="number" min="0" className ="form-control" id="prep_time" name="prep_time" value={this.state.prep_time} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="cook_time">Cook Time (Minutes)</label>
          <input type="number" min="0" className ="form-control" id="cook_time" name="cook_time" value={this.state.cook_time} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Servings</label>
          <input type="number" min="0" className ="form-control" id="amount" name="amount" value={this.state.amount} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea className="form-control" id="ingredients" name="ingredients" rows="8" value={this.state.ingredients} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea className="form-control" id="instructions" name="instructions" rows="8" value={this.state.instructions} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea className="form-control" id="notes" name="notes" rows="8" value={this.state.notes} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" className="form-control" name="category" value={this.state.category} onChange={this.handleChange}>
            <option value="BKFT">Breakfast</option>
            <option value="LNCH">Lunch</option>
            <option value="DNR">Dinner</option>
            <option value="DSSRT">Dessert</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cook_temp">Cook Temp</label>
          <input type="number" min="0" className ="form-control" id="cook_temp" name="cook_temp" value={this.state.cook_temp} onChange={this.handleChange}/>
        </div>
        <div className="form-bottom">
          <label htmlFor="temperature">Temperature Scale</label>
          <select id="temperature" className="form-control" name="temperature" value={this.state.temperature} onChange={this.handleChange}>
              <option value="F">Fahrenheit</option>
              <option value="C">Celcius</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Add Recipe</button>
      </form>
      </React.Fragment>
    )
  }
}
export default RecipeForm
