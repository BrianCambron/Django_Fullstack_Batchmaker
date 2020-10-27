import './RecipesList.css';

function RecipeItem(props){
  return(
    <>
    <div className="card text-black bg-secondary mb-2 mr-2" style={{width: '15rem', height: '276px'}}>
      <div className="card-body">
        <h5 className="card-title">{props.recipe.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Prep Time: {props.recipe.prep_time} minutes</li>
        <li className="list-group-item">Cook Time: {props.recipe.cook_time} minutes</li>
        <li className="list-group-item">Cook Time: {props.recipe.cook_time} minutes</li>
        <li className="list-group-item">Cook Time: {props.recipe.cook_temp} degrees {props.recipe.temperature}</li>
      </ul>
    </div>
    </>
  )
}



function RecipesList(props){
    const recipes = props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>).slice(1,5);
    return(
      <div className="recipe-list">
            {recipes}
        </div>
    )
  }
export default RecipesList;
