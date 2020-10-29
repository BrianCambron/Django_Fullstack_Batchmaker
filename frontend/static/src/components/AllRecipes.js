
function AllRecipeItem(props){
  return(
    <>
    <div onClick={() => props.pickRecipe(props.recipe.id)}className="card text-black bg-secondary mb-2 mr-2" style={{width: '15rem', height: '276px'}}>
      <div className="card-body">
        <h5 style={{fontSize: '1.1rem'}}className="card-title">{props.recipe.name}</h5>
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



function AllRecipes(props){
    const recipes = props.recipes.map(recipe => <AllRecipeItem key={recipe.id} recipe={recipe} pickRecipe={props.pickRecipe}/>)
    return(
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }

export default AllRecipes;
